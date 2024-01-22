# Docker Todo List Application

This is a Todo List application that allows you to manage your to-do items through a simple and intuitive user interface. The application is encapsulated in a Docker container, making it easy to deploy and run in various environments.

## Prerequisites

Before running the Dockerized application, ensure that you have the following installed on your machine:

- [Docker](https://www.docker.com/)

## Getting Started

Follow these steps to quickly set up and run the Dockerized React Todo List application:

1. **Clone the Repository:**
   - Clone this repository to your local machine:

     ```bash
     git clone <repository-url>
     ```

2. **Navigate to the Project Directory:**
   - Change into the project directory:

     ```bash
     cd <project-directory>
     ```

3. **Build the Docker Image:**
   - Build the Docker image using the provided Dockerfile:

     ```bash
     docker build -t getting-started .
     ```

4. **Create a Docker Volume:**
   - Create a Docker volume named `todo-db` to persist the todo items:

     ```bash
     docker volume create todo-db
     ```

5. **Run the Docker Container:**
   - Run the Docker container, mapping the container's port to a port on your machine (e.g., 3000) and using the `todo-db` volume:

     ```bash
     docker run -dp 3000:3000 -v todo-db:/etc/todos getting-started
     ```

6. **Access the Todo List Application:**
   - Open your web browser and go to [http://localhost:3000](http://localhost:3000) to start managing your to-do items.

7. **Use the Todo List:**
   - Add new items, mark them as complete or incomplete, and remove items as needed.

## Application Features

- **Add Items:** Easily add new to-do items using the provided form.

- **Mark Completion:** Toggle completion status to mark items as complete or incomplete.

- **Remove Items:** Remove unwanted items from the to-do list.

## Important Notes

- The application uses a Docker volume (`todo-db`) to persist data, ensuring data is retained between container restarts.
