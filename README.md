# ZOCIAL (Next.js 15 + Prisma + Clerk + React Query)

![Next.js](https://img.shields.io/badge/Next.js-15-black?logo=nextdotjs)
![Prisma](https://img.shields.io/badge/Prisma-ORM-blue?logo=prisma)
![Clerk](https://img.shields.io/badge/Auth-Clerk-orange?logo=clerk)
![React Query](https://img.shields.io/badge/React%20Query-TanStack-critical?logo=reactquery)
![Socket.io](https://img.shields.io/badge/Real--Time-Socket.io-lightgrey?logo=socketdotio)
![License](https://img.shields.io/badge/License-MIT-green)

This is a full-stack modern social media application built using the latest features from the Next.js 15 ecosystem, Prisma ORM, Clerk for authentication, and real-time updates using Socket.io.

---


## 🚀 Features

- 🏗️ **Modular App Structure**
- 🧠 **Prisma ORM** – Database modeling, relationships, migrations, and seeding.
- 🔐 **Clerk Authentication** – Custom sign-in/sign-up, webhook handling.
- 🗃️ **Next.js Server Components** – Efficient server-side data fetching.
- ♻️ **React Query (Tanstack Query)** – Client-side caching, infinite scrolling.
- 🧪 **Form Validation** – Zod + useActionState for typed form validation.
- ⚡ **Server Actions** – Perform mutations with optimistic updates.
- 💬 **Post Feed** – Fetch, display, and paginate posts with infinite scroll.
- 🧾 **Comments and Likes** – Real-time interactions with Socket.io.
- 🧑‍🤝‍🧑 **User Profile & Following System**
- 🔔 **Real-time Notifications** – Like, comment, and follow actions trigger live alerts.
custom auth pages usong clerk elemenes

---

## 🧱 App Modules Overview

### 🛠️ Prisma Setup
- ✅ Database schema with users, posts, comments, likes, and follows
- ✅ Relationships defined with `@relation`
- ✅ Seed scripts to populate dummy data
- ✅ Advanced queries for feed, recommendations, and user profile

### 🔐 Authentication
- ✅ Custom Auth UI using Clerk Elements
- ✅ Webhooks to sync users with DB
- ✅ User added to DB on auth
- ✅ Secure routes via middleware

### 📦 Server Actions
- ✅ Create post
- ✅ Like/unlike post
- ✅ Follow/unfollow user
- ✅ useActionState + Zod for form handling and validations

### 🌐 Data Fetching
- ✅ Server components fetch profile/feed
- ✅ Infinite scrolling via React Query
- ✅ Optimistic updates using `useOptimistic`
- ✅ Efficient mutation handling via `mutate` or `useActionState`

### ⚡ Real-time Features
- ✅ Socket.io setup
- ✅ Push notifications for:
  - 👍 Likes
  - 💬 Comments
  - ➕ Follows

---

## 🧪 Tech Stack

| Technology | Purpose |
|------------|---------|
| Next.js 15 | Full-stack framework |
| Prisma     | ORM + DB management |
| MySQL      | Relational DB |
| Docker     | Containerized DB |
| Clerk      | Auth and user management |
| React Query| Client caching & data sync |
| Zod        | Form schema validation |
| Socket.io  | Real-time communication |

---

![ER Diagram](public/general/er-diagram.png)
![ER Diagram](public/general/arc-diagram.png)

---


