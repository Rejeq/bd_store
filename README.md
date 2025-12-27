# Store Project

An educational web development project built to learn about web development and the Sequelize ORM framework. This project implements a bike rental/store management system with a RESTful API.

## Description

This is a Node.js/Express.js application that manages a bike rental store. It provides APIs for managing bikes, tariffs, clients, rentals, and repairs. The application uses Sequelize as the ORM to interact with a PostgreSQL database.

### Features

- **Bike Management**: Create, read, update, and delete bikes with details like serial number, model, category, condition, and repair status
- **Tariff Management**: Manage rental tariffs and associate them with bikes
- **RESTful API**: Clean API endpoints for managing the store inventory
- **API Documentation**: Swagger/OpenAPI documentation available at `/api-docs`
- **Database Integration**: PostgreSQL database with Sequelize ORM for data persistence
- **Docker Support**: Easy deployment using Docker Compose

### Database Models

The application includes the following models:
- `Bike` - Stores bike information (serial number, model, category, condition, etc.)
- `Tariff` - Rental pricing and tariff information
- `Client` - Customer/client information
- `Rent` - Rental transaction records
- `RentBike` - Association between rentals and bikes
- `Repair` - Bike repair records
- `TariffBike` - Association between tariffs and bikes

## Stack

- **Runtime**: Node.js
- **Framework**: Express.js
- **ORM**: Sequelize
- **Database**: PostgreSQL
- **Documentation**: Swagger/OpenAPI (swagger-jsdoc, swagger-ui-express)
- **Containerization**: Docker & Docker Compose

## Prerequisites

Before you begin, ensure you have the following installed:

- Node.js (v18 or higher recommended)
- npm (Node Package Manager)
- Docker and Docker Compose (for Docker installation method)
- PostgreSQL (for manual installation method)

## Installation & Usage

### Option 1: Using Docker (Recommended)

1. **Clone the repository** (if applicable) or navigate to the project directory:
   ```bash
   cd store-project
   ```

2. **Create a `.env` file** in the root directory with the following variables:
   ```env
   # PostgreSQL Database Configuration
   POSTGRESDB_USER=your_db_user
   POSTGRESDB_ROOT_PASSWORD=your_db_password
   POSTGRESDB_DATABASE=your_database_name
   POSTGRESDB_LOCAL_PORT=5432
   POSTGRESDB_DOCKER_PORT=5432

   # Node.js Application Configuration
   NODE_LOCAL_PORT=8080
   NODE_DOCKER_PORT=8080
   ```

3. **Build and start the containers**:
   ```bash
   docker-compose up --build
   ```

   Or to run in detached mode:
   ```bash
   docker-compose up -d --build
   ```

4. **Access the application**:
   - API: http://localhost:8080
   - API Documentation (Swagger): http://localhost:8080/api-docs
   - PostgreSQL: localhost:5432

5. **Stop the containers**:
   ```bash
   docker-compose down
   ```

   To remove volumes as well:
   ```bash
   docker-compose down -v
   ```

### Option 2: Manual Installation

1. **Navigate to the application directory**:
   ```bash
   cd store-app
   ```

2. **Install dependencies**:
   ```bash
   npm install
   ```

3. **Set up PostgreSQL database**:
   - Create a PostgreSQL database
   - Note down the database credentials

4. **Create a `.env` file** in the `store-app` directory with the following variables:
   ```env
   # Database Configuration
   DB_HOST=localhost
   DB_USER=your_db_user
   DB_PASSWORD=your_db_password
   DB_NAME=your_database_name
   DB_PORT=5432

   # Application Configuration
   NODE_DOCKER_PORT=8080
   ```

5. **Start the application**:
   ```bash
   node server.js
   ```

   Or using nodemon (if installed):
   ```bash
   npx nodemon server.js
   ```

6. **Access the application**:
   - API: http://localhost:8080
   - API Documentation (Swagger): http://localhost:8080/api-docs

## API Endpoints

### Bikes
- `GET /api/bikes` - Get all bikes
- `GET /api/bikes/:id` - Get a specific bike
- `POST /api/bikes` - Create a new bike
- `PUT /api/bikes/:id` - Update a bike
- `DELETE /api/bikes/:id` - Delete a bike
- `DELETE /api/bikes` - Delete all bikes
- `POST /api/bikes/:id/applyTariff/:idTariff` - Apply a tariff to a bike

### Tariffs
- `GET /api/tariffs` - Get all tariffs
- `GET /api/tariffs/:id` - Get a specific tariff
- `GET /api/tariffs/:id/bikes` - Get all bikes for a tariff
- `POST /api/tariffs` - Create a new tariff
- `PUT /api/tariffs/:id` - Update a tariff
- `DELETE /api/tariffs/:id` - Delete a tariff
- `DELETE /api/tariffs` - Delete all tariffs

For detailed API documentation, visit http://localhost:8080/api-docs when the server is running.

## Database Schema

The application automatically syncs the database schema on startup using Sequelize's `sync()` method. The database tables will be created automatically when you first run the application.

## Development

This is an educational project created to learn:
- Web development with Node.js and Express.js
- Object-Relational Mapping (ORM) with Sequelize
- RESTful API design
- Database modeling and relationships
- Docker containerization

