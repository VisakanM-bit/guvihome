# Jawa EdTech Supabase Setup

## 1. Create Supabase Project

Create a Supabase project, then copy:

- Project URL into `VITE_SUPABASE_URL`
- Public anon key into `VITE_SUPABASE_ANON_KEY`

Use `.env.example` as the template for your local `.env`.

## 2. Create Database Tables

Open Supabase SQL Editor and run:

```sql
-- paste contents of supabase/schema.sql
```

This creates:

- `students`
- `login_activity`
- `course_applications`
- `internship_applications`
- `career_counselling_requests`
- `contact_us`
- `newsletter_subscribers`
- `visitor_events`
- `admin_profiles`
- RLS policies and admin access checks

## 3. Create Organization Admin

In Supabase Auth, create an admin user. Then insert the admin profile:

```sql
insert into public.admin_profiles (id, email, full_name, role)
values ('AUTH_USER_UUID_HERE', 'admin@jawaedtech.com', 'Jawa Admin', 'admin');
```

Also set:

```env
VITE_ADMIN_EMAILS=admin@jawaedtech.com
```

## 4. Admin Login

The navbar right corner has a mobile icon for hidden organization login.

After admin login, the app redirects to:

```text
/admin
```

Students cannot access this route.

## 5. Data Flow

- Student signup/login uses Supabase Auth.
- Student profile data is stored in `students`.
- Course enroll requests are stored in `course_applications`.
- Internship apply requests are stored in `internship_applications`.
- Career forms are stored in `career_counselling_requests`.
- Visitor route events are stored in `visitor_events`.
- Admin dashboard can search, filter, paginate, update status, and export CSV/Excel-compatible reports.

## 6. Analytics

Optional env values:

```env
VITE_GA_MEASUREMENT_ID=G-XXXXXXXXXX
VITE_CLARITY_PROJECT_ID=xxxxxxxxxx
```

When present, Google Analytics and Microsoft Clarity are loaded automatically.
