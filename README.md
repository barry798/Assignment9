# React Job Portal

A modern job portal built with **React**, **React Router**, **Axios**, and **Material UI**. This project is part of Assignment 9 and demonstrates the implementation of user authentication, dynamic routing, job listings, and company profiles.

---

##  Features

-  User login with session token
-  Protected routes with React Router
-  Dynamic job listings (mocked data)
-  Clickable job detail pages
-  Company list with logos and company detail pages
-  Responsive layout using Material UI
-  Navigation bar with routing
-  About and Contact pages
-  All data handled via Axios or simulated fetch

---

##  Project Structure

```
src/
├── components/
│   └── Navbar.js
├── pages/
│   ├── Login/
│   │   └── login.js
│   ├── Home/
│   │   └── home.js
│   ├── About/
│   │   └── about.js
│   ├── Contact/
│   │   └── contact.js
│   ├── Jobs/
│   │   ├── jobs.js
│   │   └── jobDetail.js
│   └── Companies/
│       ├── companies.js
│       └── companyDetail.js
└── App.js
```

---

##  How to Run

### 1. Clone the repository

```bash
git clone https://github.com/barry798/Assignment9.git
cd react-job-portal
```

### 2. Install dependencies

```bash
npm install
```

### 3. Start the development server

```bash
npm start
```

The app will run at:  
 `http://localhost:3000`

---

##  Demo Login Credentials

Since there is no backend, login is mocked.

```
Username: admin
Password: 123456
```

---

##  Pages Overview

| Path               | Description               |
|--------------------|---------------------------|
| `/`                | Login Page                |
| `/home`            | Home Page (after login)   |
| `/jobs`            | Job Listings              |
| `/jobs/:id`        | Job Detail Page           |
| `/companies`       | Company Gallery           |
| `/companies/:id`   | Company Detail Page       |
| `/about`           | About This Portal         |
| `/contact`         | Contact Information       |

---

##  Technologies Used

- React
- React Router v6
- Axios
- Material UI v5
- JavaScript (ES6+)

---

##  Notes

- This is a front-end only project; backend is simulated via mock data.
- Can be extended with Express.js + MongoDB or Firebase for full-stack deployment.

---

##  Author

Created by [Your Name] — for Assignment 9

---
