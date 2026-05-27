# Task Management System Backend README

# Task Management System Backend

This is the backend for the Task Management System built using Django and Django REST Framework. It provides a RESTful API for managing tasks.

## Prerequisites

- Python 3.6 or higher
- pip (Python package installer)

## Setup Instructions

1. **Clone the repository:**

   ```bash
   git clone <repository-url>
   cd task-app/backend
   ```

2. **Create a virtual environment:**

   ```bash
   python -m venv venv
   source venv/bin/activate  # On Windows use `venv\Scripts\activate`
   ```

3. **Install dependencies:**

   ```bash
   pip install -r requirements.txt
   ```

4. **Run migrations:**

   ```bash
   python manage.py migrate
   ```

5. **Run the development server:**

   ```bash
   python manage.py runserver
   ```

   The API will be available at `http://localhost:8000/`.

## API Endpoints

- **GET /tasks/**: Retrieve a list of tasks.
- **POST /tasks/**: Create a new task.

## CORS Configuration

The backend is configured to allow requests from the frontend running on `http://localhost:3000`. Make sure to adjust this setting in `settings.py` if your frontend is hosted elsewhere.

## License

This project is licensed under the MIT License. See the LICENSE file for details.