# Frontend Task Management System README

# Task Management System Frontend

This is the frontend part of the Task Management System built with React. It communicates with a Django REST Framework backend to manage tasks.

## Getting Started

To get started with the frontend, follow these steps:

### Prerequisites

Make sure you have the following installed:

- Node.js (version 14 or higher)
- npm (Node package manager)

### Installation

1. Navigate to the `frontend` directory:

   ```
   cd frontend
   ```

2. Install the dependencies:

   ```
   npm install
   ```

### Running the Application

To run the application in development mode, use the following command:

```
npm start
```

This will start the React application and open it in your default web browser at `http://localhost:3000`.

### Building for Production

To create a production build of the application, run:

```
npm run build
```

This will generate a `build` folder containing the optimized production build.

### API Integration

The frontend communicates with the backend API. Ensure that the backend server is running and accessible at the specified URL in the `src/services/api.js` file.

### Folder Structure

- `public/`: Contains the static files, including `index.html`.
- `src/`: Contains the React components, pages, and services.
  - `components/`: Reusable components like TaskList, TaskItem, and TaskForm.
  - `pages/`: Page components like Home and TaskDetail.
  - `services/`: API service for making requests to the backend.

### Contributing

Feel free to contribute to this project by submitting issues or pull requests.

### License

This project is licensed under the MIT License. See the LICENSE file for details.