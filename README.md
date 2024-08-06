# Drone Fleet Management App

This is a simple React.js application for managing a fleet of drones, built using Vite. The app includes user authentication, a drone fleet overview, detailed drone views, and maintenance management.

## Project Stack

- **React.js**
- **Vite**

## Features

### 1. User Authentication
- Implement a simple user login system.
- Use a preconfigured JSON file to authenticate users (e.g., username and password).

### 2. Drone Fleet Overview
- Display a summary list of all drones in the fleet with basic information (e.g., drone ID, status).
- Allow users to click on a drone to view detailed information.

### 3. Drone Details View
- Show detailed stats for each drone when selected, including:
    - Total flight hours
    - Maintenance logs
    - Battery status
    - Last known location
    - Current mission (if any)

### 4. Maintenance Management
- Add a section to display maintenance activities, including:
    - Date of maintenance
    - Description of maintenance performed
    - Technician name

## Docker Setup

To build and run the application using Docker, follow these steps:

1. **Build the Docker image:**
    ```sh
    docker build -t drone-fleet .
    ```

2. **Run the Docker container:**
    ```sh
    docker run -p 5173:5173 drone-fleet
    ```

This will build the Docker image and run the container, exposing the app on port 5173.

## Getting Started

To get started with the project, clone the repository and install the dependencies:

```sh
git clone https://github.com/yourusername/drone-fleet-management.git
cd drone-fleet-management
npm install

```sh
npm run dev


### Feel free to adjust the URLs and project details as needed.