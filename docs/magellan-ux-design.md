# User Interface Description Document

## Layout Structure  
- **Three-column grid (desktop)**  
  1. **Left Rail (Global Navigation):** Clients, Programs, Documents, Messages, Notifications, Settings  
  2. **Center Canvas (Main Workspace):** Active module view (table or list) with header actions  
  3. **Right Rail (Context & Quick Actions):** Client/program snapshot, “New …” buttons, shortcuts  
- **Responsive collapse:**  
  - Tablet: Right rail collapses to a slide‑in panel; left rail condenses to icons  
  - Mobile: Both rails collapse into bottom tab bar and top menu drawer  

## Core Components  
- **Sortable Tables & Lists:** Column headers trigger sort; inline filters above each column  
- **Summary Cards:** Key metrics (e.g. “Open Leads,” “Pending Documents”) at top of module  
- **Detail Slide‑Outs:** Click a row or card to reveal editable details without navigation away  
- **Notification Center:** Badge count in nav; full list in slide‑over panel with actions  
- **Quick‑Action Buttons:** Contextual “New Client,” “Request Document,” “Send Message”  

## Interaction Patterns  
- **Inline Filtering:** Click filter icon on any column to open dropdown of filter options  
- **Hover‑to‑Reveal Controls:** Row‑level edit/delete icons appear on hover for power users  
- **Keyboard Shortcuts:**  
  - `N` for new record  
  - `F` to focus search  
  - Arrow keys to navigate table rows  
- **Slide‑Over Panels:** Detail views and forms slide in from right; close returns focus to table  
- **Real‑Time Updates:** Optimistic UI on notifications and document uploads  

## Visual Design Elements & Color Scheme  
- **Base Palette:** White background, light gray surfaces  
- **Accent Hue:** Deep teal for primary actions, highlights, and status indicators  
- **Secondary Colors:** Slate gray for text, muted blue for secondary buttons  
- **Shadows & Corners:** Soft shadows under cards; 2xl rounded corners on panels & cards  
- **Micro‑Animations:**  
  - Badge increments with a subtle “pop”  
  - Slide‑over panels animate in/out smoothly  
  - Hover states gently elevate actionable elements  

## Mobile, Web App, Desktop Considerations  
- **Desktop:** Full three‑column view; hover interactions; keyboard shortcuts enabled  
- **Tablet:** Two‑column view (nav + canvas); right rail accessible via swipe or toggle  
- **Mobile:** Single‑column; bottom tab bar for nav; slide‑over for context panels; touch‑friendly targets  

## Typography  
- **Font Family:** Inter (sans‑serif)  
- **Hierarchy:**  
  - Headings: Inter Bold, 24–32px  
  - Subheadings: Inter Semi‑Bold, 18–20px  
  - Body: Inter Regular, 14–16px  
  - Monospace (audit logs): 13px  
- **Spacing:** Generous line height (1.5×); clear separation between sections  

## Accessibility  
- **WCAG AA Compliance:** Contrast ratios ≥4.5:1 for text vs. background  
- **Focus States:** Visible outlines for keyboard navigation on all actionable elements  
- **ARIA Labels:** Clear roles on navigation, tables, filters, and slide‑over panels  
- **Screen‑Reader Support:** Semantic HTML landmarks and live region announcements for notifications  
- **Reduced Motion Option:** Honor OS-level “reduce motion” to minimize animations  
