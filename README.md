# Task Management System

This project is a full-stack Task Management System built with Django REST Framework for the backend and ReactJS for the frontend.

## Project Structure

```
task-app
├── backend
│   ├── manage.py
│   ├── requirements.txt
│   ├── README.md
│   └── taskmanager
│       ├── __init__.py
│       ├── settings.py
│       ├── urls.py
│       ├── wsgi.py
│       └── asgi.py
│   └── tasks
│       ├── __init__.py
│       ├── admin.py
│       ├── apps.py
│       ├── models.py
│       ├── serializers.py
│       ├── tests.py
│       ├── urls.py
│       └── views.py
├── frontend
│   ├── package.json
│   ├── README.md
│   ├── public
│   │   └── index.html
│   └── src
│       ├── App.js
│       ├── index.js
│       ├── components
│       │   ├── TaskList.js
│       │   ├── TaskItem.js
│       │   └── TaskForm.js
│       ├── pages
│       │   ├── Home.js
│       │   └── TaskDetail.js
│       └── services
│           └── api.js
└── README.md
```

## Backend Setup

1. Navigate to the `backend` directory:
   ```
   cd backend
   ```

2. Install the required packages:
   ```
   pip install -r requirements.txt
   ```

3. Run the migrations:
   ```
   python manage.py migrate
   ```

4. Start the Django server:
   ```
   python manage.py runserver
   ```

## Frontend Setup

1. Navigate to the `frontend` directory:
   ```
   cd frontend
   ```

2. Install the required packages:
   ```
   npm install
   ```

3. Start the React application:
   ```
   npm start
   ```

## API Endpoints

- `GET /api/tasks/` - Retrieve a list of tasks.
- `POST /api/tasks/` - Create a new task.

## CORS Configuration

The backend is configured to allow requests from the frontend running on `http://localhost:3000`. Ensure that the CORS settings in `settings.py` are correctly set up.

## License

This project is licensed under the MIT License.