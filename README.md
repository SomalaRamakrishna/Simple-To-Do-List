# 📝 To-Do List App

A full-stack To-Do List web application to help users manage their daily tasks efficiently. Users can add, delete, update, and mark tasks as complete.

## 🚀 Features

- Create new tasks with due dates
- Mark tasks as complete/incomplete
- Delete tasks
- Responsive UI
- Toast notifications for actions
- Backend API for CRUD operations

## 🛠️ Tech Stack

### Frontend
- React.js
- Axios
- React Router
- React Toastify
- CSS 

### Backend
- Node.js
- Express.js
- MongoDB (Mongoose)
- CORS
- dotenv

---

## 📁 Folder Structure

to-do-list/
├── backend/
│ ├── controllers/
│ ├── models/
│ ├── routes/
│ ├── .env
│ └── server.js
├── frontend/
│ ├── src/
│ │ ├── components/
│ │ ├── pages/
│ │ ├── App.js
│ │ └── index.js
├── package.json
└── README.md


---

🧪 API Endpoints
Base URL: http://localhost:5000/api/tasks
Method	Endpoint	Description
GET	/	Get all tasks
POST	/	Create a new task
PUT	/:id	Update a task
DELETE	/:id	Delete a task
