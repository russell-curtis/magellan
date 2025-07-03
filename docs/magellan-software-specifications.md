# Software Requirements Specification (SRS)

## 1. System Design  
Magellan is a cloud-first, serverless web application providing CRBI firms with an integrated dashboard for managing clients, documents, programs, and communications. The system is composed of:  
- **Frontend (Next.js)** served from a global CDN  
- **Backend / APIs** via Supabase (PostgreSQL, Auth, Storage, Edge Functions)  
- **Real‑time layer** using Supabase Realtime subscriptions  
- **File storage** for documents and assets in Supabase Storage  
- **Deployment & CI/CD** on Vercel with optional GitHub Actions pipelines  

## 2. Architecture Pattern  
- **Jamstack:** Static & server-rendered pages from Next.js + dynamic data via client-side fetches  
- **Micro‑services‑style Edge Functions:** Custom business logic in isolated, serverless functions  
- **Event‑driven real‑time updates:** Client apps subscribe to database changes (notifications, document uploads)  

## 3. State Management  
- **Authentication & Session State:**  
  - Managed by Supabase Auth and stored in React Context  
- **Server Data:**  
  - Fetched with **SWR** hooks; revalidation on focus and interval-based polling  
  - Real‑time updates via Supabase subscriptions piped into SWR cache  
- **UI State:**  
  - **Zustand** (or React Context) for cross‑module flags (e.g. sidebar open/closed) and transient UI state  

## 4. Data Flow  
1. **User HTTP Request** to Next.js page or API route  
2. **SSR/ISR** on page requests as configured (public pages or initial dashboard load)  
3. **Client‑side fetches** via Supabase client SDK for protected data  
4. **Edge Function** invoked for custom operations (e.g. bulk document processing)  
5. **Database writes/reads** on PostgreSQL  
6. **Realtime notifications** pushed via Realtime subscriptions  
7. **UI updates** via SWR cache invalidation or subscription callbacks  

## 5. Technical Stack  
| Layer            | Technology           | Purpose                                    |
|------------------|----------------------|--------------------------------------------|
| Frontend         | Next.js + React + TS | UI, routing, SSR/ISR                       |
| Styling          | Tailwind CSS + Headless UI | Utility classes, accessible components  |
| Auth & API       | Supabase Auth & Client SDK | Authentication, auto‑generated CRUD APIs |
| Database         | Supabase PostgreSQL  | Relational data (clients, programs, docs)  |
| Storage          | Supabase Storage     | Secure file uploads & signed URLs          |
| Serverless Logic | Supabase Edge Fn (TS)| Custom business workflows                  |
| Hosting/CD       | Vercel               | Deployment, global edge network            |
| State / Data     | SWR + Zustand        | Caching, revalidation, UI state            |
| Monitoring       | Sentry / LogRocket   | Error & performance tracking               |
| Analytics        | PostHog / Amplitude  | Product usage metrics                      |

## 6. Authentication Process  
1. **Sign-up / Sign-in** via Supabase Auth (email + password, SSO OIDC)  
2. **JWT issued** and stored in secure, HttpOnly cookie or localStorage  
3. **Middleware** in Next.js verifies auth on protected routes  
4. **Role-based access** enforced in Edge Functions and Supabase Row-Level Security (RLS) policies  

## 7. Route Design  
- **Next.js Page Routes**  
  - `/login`, `/signup`, `/forgot-password`  
  - `/dashboard` (redirect to `/dashboard/overview`)  
  - `/dashboard/clients`, `/dashboard/programs`, `/dashboard/documents`, `/dashboard/messages`, `/dashboard/notifications`  
  - `/settings`, `/profile`  
- **API Routes / Edge Functions**  
  - `/api/clients` (GET, POST, PUT, DELETE)  
  - `/api/programs`  
  - `/api/documents` (file upload, metadata)  
  - `/api/messages`  
  - `/api/notifications/read`  
  - `/api/admin/*` for administrative actions  

## 8. API Design  
Use RESTful conventions with JSON payloads; all endpoints authenticated with JWT.

### Example: Clients  
- `GET /api/clients?status=active&limit=20&page=1`  
- `POST /api/clients`  
  ```json
  {
    "name": "Jane Doe",
    "email": "jane@example.com",
    "program_id": "uuid",
    "assigned_to": "user_uuid"
  }
  ```
- `PUT /api/clients/{client_id}`  
- `DELETE /api/clients/{client_id}`  

### Example: Documents  
- `POST /api/documents` (multipart/form-data)  
- `GET /api/documents/{doc_id}`  
- `DELETE /api/documents/{doc_id}`  

### Real‑time Notifications  
Clients subscribe to `notifications:user_uuid` channel; payloads include `{ type, message, metadata }`.

## 9. Database Design & ERD  

### Key Tables  
- **users** (`id`, `email`, `name`, `role`, `created_at`)  
- **clients** (`id`, `name`, `email`, `status`, `program_id`, `assigned_user_id`, `created_at`)  
- **programs** (`id`, `name`, `type`, `config`, `created_at`)  
- **documents** (`id`, `client_id`, `program_id`, `file_path`, `status`, `uploaded_by`, `uploaded_at`)  
- **messages** (`id`, `from_user`, `to_user`, `client_id`, `content`, `sent_at`)  
- **notifications** (`id`, `user_id`, `type`, `payload`, `read`, `created_at`)  

### ERD (logical)  
```
users 1—* clients
clients 1—* documents
programs 1—* clients
clients 1—* messages
users 1—* messages
users 1—* notifications
```

- **RLS Policies:**  
  - Users can only access clients and documents where `assigned_user_id = auth.uid()`  
  - Admin role bypasses restrictions  
