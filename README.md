# Ticketing System

This is a microservices-based ticketing application focused on event-driven architecture for ticket management, orders, and payments. The project is built using TypeScript and Docker, leveraging NATS for messaging.

## Key Features
- **User Authentication**: Secure login and registration.
- **Ticket Management**: Create, update, and expire tickets.
- **Order Processing**: Manage orders with payment integration.
- **Microservices Architecture**: Scalable with independent services.
- **Event-Driven**: Uses NATS for communication between services.

## Technologies
- **Frontend**: TypeScript, JavaScript, Next.js
- **Backend**: Node.js, Express
- **Messaging**: NATS Streaming
- **Database**: MongoDB
- **Other**: Redis, Docker, Kubernetes

## Getting Started

### Prerequisites
Ensure you have the following installed:
- [Node.js](https://nodejs.org/en/)
- [Docker](https://www.docker.com/)
- [Kubernetes](https://kubernetes.io/)
- [NATS Streaming](https://nats.io/)
- [MongoDB](https://www.mongodb.com/)

### Installation

1. **Clone the repository**:
   ```bash
   git clone https://github.com/pochunhuang1107/ticketing.git
   cd ticketing
   ```

2. **Install dependencies**:
   Navigate to each service folder (e.g., `/auth`, `/orders`, `/tickets`) and run:
   ```bash
   npm install
   ```

3. **Run the app**:
   Use Docker and Kubernetes to start all services:
   ```bash
   skaffold dev
   ```

4. **Set up environment variables**:
   Configure required environment variables such as MongoDB URI and NATS connection string in a `.env` file.

## Usage
- Access the app locally at `http://localhost:3000`
- The service endpoints include user authentication, ticket management, order creation, and payment processing.
