# Orchestrator AI Company Website

Welcome to the official repository of the **Orchestrator AI** company website. This project is built using modern web development technologies and provides a seamless setup and deployment experience via Docker.

## Features

- **Frontend Framework:** React with Vite for a lightning-fast development experience.
- **Styling:** Tailwind CSS for utility-first, responsive designs.
- **Package Management:** Yarn for efficient dependency management.
- **Containerization:** Docker and Docker Compose for simplified setup and deployment.

## Prerequisites

Ensure you have the following installed on your machine:

- **Node.js** (v22 or higher) and **Yarn**
- **Docker** (latest version)
- **Docker Compose**

## Getting Started

### Local Development

If you want to run the project locally without Docker, follow these steps:

1. **Clone the Repository**:

   ```bash
   git clone https://github.com/Skypler/Orchestrator_ai_Website.git
   cd orchestrator_ai_website
   ```

2. **Install Dependencies**:

   ```bash
   yarn install
   ```

3. **Run the Development Server**:

   ```bash
   yarn dev
   ```

4. Open your browser and navigate to `http://localhost:5173` to view the site.

### Running with Docker

To run the project using Docker, follow these steps:

1. **Clone the Repository**:

   ```bash
   git clone https://github.com/Skypler/Orchestrator_ai_Website.git
   cd orchestrator_ai_website
   ```

2. **Build and Start Containers**:

   ```bash
   docker-compose up --build
   ```

3. The website will be accessible at `http://localhost:5173`.

### Stopping the Containers

To stop the Docker containers, run:

```bash
docker-compose down
```

## Project Structure

```
├── docker-compose.yaml
├── Dockerfile
├── index.html
├── node_modules/
├── package.json
├── package-lock.json
├── postcss.config.js
├── public/
├── src/
│   ├── App.tsx
│   ├── assets/
│   ├── components/
│   ├── index.css
│   ├── main.tsx
│   ├── pages/
│   └── vite-env.d.ts
├── tailwind.config.js
├── tsconfig.app.json
├── tsconfig.json
├── tsconfig.node.json
├── vite.config.ts
└── yarn.lock
```

## Scripts

The following scripts are available via Yarn:

- **`yarn dev`**: Start the development server.
- **`yarn build`**: Build the project for production.
- **`yarn preview`**: Preview the production build.
- **`yarn lint`**: Run linting on the codebase.

## Docker Overview

This project includes a `docker-compose.yml` file to streamline containerized deployment. The setup ensures:

- The website is built and served in an optimized Docker container.
- Dependencies and build processes are isolated from the host environment.

## Contributing

We welcome contributions! If you have suggestions, bug fixes, or enhancements, please submit a pull request. Ensure that your code follows the established coding standards.

## License

This project is licensed under the [MIT License](LICENSE).

---

Thank you for checking out Orchestrator AI's website repository! If you encounter any issues or have questions, feel free to create an issue in this repository.
