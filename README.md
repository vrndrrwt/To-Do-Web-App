# To-Do Web Application

A simple and user-friendly To-Do Web App designed to help users organize their tasks effectively. This application allows users to create, update, delete, and mark tasks as complete.

## Features

- **User Authentication:** Secure user sign-up and login.
- **Task Management:**
  - Add new tasks.
  - Edit task details.
  - Delete tasks.
  - Mark tasks as complete or incomplete.
- **Responsive Design:** Works seamlessly on desktops, tablets, and mobile devices.
- **Real-Time Updates:** Instantly reflect changes without page reloads (if applicable).

## Tech Stack

- **Frontend:** React.js, Bootstrap
- **Backend:** Node.js, Express.js
- **Database:** MongoDB (NoSQL)
- **APIs:** RESTful APIs for backend communication

## Installation

### Prerequisites
- Node.js (v16+)
- npm or Yarn
- MongoDB

### Steps to Run Locally

1. **Clone the Repository:**
   ```bash
   git clone https://github.com/your-username/todo-web-app.git
   cd todo-web-app
   ```

2. **Set Up Backend:**
   ```bash
   cd backend
   npm install
   ```
   - Create a `.env` file and configure the following variables:
     ```env
     PORT=5000
     MONGO_URI=<your-mongodb-connection-string>
     JWT_SECRET=<your-secret-key>
     ```
   - Start the backend server:
     ```bash
     npm start
     ```

3. **Set Up Frontend:**
   ```bash
   cd ../frontend
   npm install
   ```
   - Start the frontend development server:
     ```bash
     npm start
     ```

4. **Access the Application:**
   - Frontend: `http://localhost:3000`
   - Backend: `http://localhost:5000`

## Folder Structure

```
todo-web-app/
├── backend/           # Backend code
│   ├── config/        # Configuration files
│   ├── controllers/   # API logic
│   ├── models/        # MongoDB models
│   ├── routes/        # API routes
│   └── server.js      # Entry point for backend
├── frontend/          # Frontend code
│   ├── src/           # React application
│   │   ├── components/ # Reusable components
│   │   ├── pages/     # Page components
│   │   ├── context/   # Context API for state management
│   │   └── App.js     # Main app component
├── README.md          # Project documentation
```

## API Endpoints

### Authentication:
- `POST /api/users/register`: Register a new user
- `POST /api/users/login`: Log in a user

### Tasks:
- `GET /api/tasks`: Get all tasks
- `POST /api/tasks`: Add a new task
- `PUT /api/tasks/:id`: Update a task
- `DELETE /api/tasks/:id`: Delete a task
- `PATCH /api/tasks/:id/complete`: Mark task as complete/incomplete

## Future Improvements

- Add due dates and reminders for tasks
- Implement task prioritization
- Add support for task categories or labels
- Integration with calendar applications

## License

This project is licensed under the MIT License. See the LICENSE file for details.

## Contributions

Contributions are welcome! Please fork the repository and submit a pull request.

## Contact

For queries or feedback, reach out to:
- **Name:** Virendra Singh Rawat
- **Email:** virendrasinghrawat2812@gmail.com
- **GitHub:** [vrndrrwt](https://github.com/vrndrrwt)

---

Manage your tasks efficiently with this simple To-Do Web App!
