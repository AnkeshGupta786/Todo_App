# ToDo App

A clean, responsive and dynamic ToDo application built using *React* and *JavaScript*. This app allows users to create, update, delete, and manage their tasks efficiently using API-based data persistence.

---

## Features

- *Add New Tasks* – Create and manage your daily tasks easily.
- *Edit Tasks* – Update task descriptions and details.
- *Delete Tasks* – Remove completed or unnecessary tasks.
- *Mark as Complete* – Keep track of completed items.
- *API Integration* – Tasks are fetched and stored via an external API.
- *Responsive Design* – Optimized for desktop and mobile views.
- *User-Friendly Interface* – Clean and intuitive UI using modern React practices.

---

## Setup & Run Instructions

### 1. Clone the Repository

```bash
git clone https://github.com/yourusername/todo-app.git
cd todo-app

###2. Install Dependencies

Make sure you have Node.js and npm installed. Then run:

npm install

###3. Run the Application

npm start

The app will be available at http://localhost:3000/


---

Dependencies

React – Front-end library for building user interfaces.

Axios – For making API requests.

React Icons – Icon library for UI enhancements.

UUID (if used) – For unique task IDs (optional if the backend handles this).


To install these:

npm install axios react-icons uuid


---

API Configuration

Ensure the backend API supports the following endpoints (example using JSONPlaceholder or a custom backend):

GET /tasks – Fetch all tasks.

POST /tasks – Add a new task.

PUT /tasks/:id – Update a task.

DELETE /tasks/:id – Delete a task.



---
