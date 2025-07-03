-- Insert test users first
INSERT INTO "user" (id, name, email, "emailVerified", image, "createdAt", "updatedAt")
VALUES 
  ('usr_1', 'John Smith', 'john.smith@example.com', true, 'https://ui-avatars.com/api/?name=John+Smith', NOW(), NOW()),
  ('usr_2', 'Sarah Johnson', 'sarah.j@example.com', true, 'https://ui-avatars.com/api/?name=Sarah+Johnson', NOW(), NOW()),
  ('usr_3', 'Mike Wilson', 'mike.w@example.com', true, 'https://ui-avatars.com/api/?name=Mike+Wilson', NOW(), NOW());

-- Insert test programs
INSERT INTO programs (id, name, description, created_at, updated_at)
VALUES 
  ('11111111-1111-1111-1111-111111111111', 'Executive Coaching', 'One-on-one coaching for executives', NOW(), NOW()),
  ('22222222-2222-2222-2222-222222222222', 'Leadership Development', 'Comprehensive leadership training program', NOW(), NOW()),
  ('33333333-3333-3333-3333-333333333333', 'Team Building', 'Group activities and workshops for team cohesion', NOW(), NOW());

-- Insert test clients
INSERT INTO clients (name, email, program_id, assigned_to, status, created_at)
VALUES 
  ('Alice Cooper', 'alice.c@company.com', '11111111-1111-1111-1111-111111111111', 'usr_1', 'active', NOW()),
  ('Bob Martinez', 'bob.m@startup.io', '22222222-2222-2222-2222-222222222222', 'usr_2', 'active', NOW()),
  ('Carol White', 'carol.w@enterprise.com', '33333333-3333-3333-3333-333333333333', 'usr_1', 'active', NOW()),
  ('David Brown', 'david.b@tech.co', '11111111-1111-1111-1111-111111111111', 'usr_3', 'on-hold', NOW()),
  ('Eva Green', 'eva.g@consulting.net', '22222222-2222-2222-2222-222222222222', 'usr_2', 'active', NOW()),
  ('Frank Miller', 'frank.m@agency.com', '33333333-3333-3333-3333-333333333333', 'usr_3', 'withdrawn', NOW()),
  ('Grace Lee', 'grace.l@design.studio', '11111111-1111-1111-1111-111111111111', 'usr_1', 'active', NOW()),
  ('Henry Ford', 'henry.f@automotive.org', '22222222-2222-2222-2222-222222222222', 'usr_2', 'active', NOW()),
  ('Iris Wong', 'iris.w@global.com', '33333333-3333-3333-3333-333333333333', 'usr_3', 'active', NOW()),
  ('Jack Thompson', 'jack.t@finance.biz', '11111111-1111-1111-1111-111111111111', 'usr_1', 'on-hold', NOW()); 