# SecureEHR - A Cloud-Based Electronic Health Record System

SecureEHR is a secure, scalable, and cloud-based Electronic Health Record (EHR) management system designed to facilitate the efficient and safe handling of patient data. Built using a robust tech stack, SecureEHR aims to provide healthcare providers with a user-friendly platform to store, access, and manage patient records while maintaining data security and compliance with healthcare regulations.

---------------------------------------------------------------------------

## Table of Contents
- [SecureEHR - A Cloud-Based Electronic Health Record System](#secureehr---a-cloud-based-electronic-health-record-system)
  - [Table of Contents](#table-of-contents)
  - [Project Overview](#project-overview)
  - [Features](#features)
  - [Tech Stack and Tools](#tech-stack-and-tools)
  - [Project Structure](#project-structure)
  - [Setup and Installation](#setup-and-installation)
  - [Usage](#usage)
  - [API Endpoints](#api-endpoints)
  - [Security](#security)
  - [Future Enhancements](#future-enhancements)
  - [Contributing](#contributing)
  - [License](#license)
  
---------------------------------------------------------------------------

## Project Overview
SecureEHR is designed to streamline electronic health records (EHR) management, focusing on security, compliance, and user accessibility. The system is equipped with secure APIs, authentication features, and user roles to ensure data integrity and privacy. Healthcare professionals can manage patient records, securely access health information, and ensure compliance with industry standards such as HIPAA.


## Features
* Secure User Authentication: Utilizes JWT and bcrypt to provide secure login and user session management.
* Role-based Access Control: Differentiates between user roles such as 'admin' and 'client' to control access levels.
* API Integration: RESTful API endpoints for seamless CRUD operations.
* Responsive Frontend: User-friendly interface with modern design using React.js.
* Scalable Infrastructure: Cloud-based deployment using AWS for scalability and reliability.
* Data Security: Ensures compliance with industry standards like HIPAA to secure patient data.


## Tech Stack and Tools

**Frontend:**
   * React.js, React Router
   * CSS, Flexbox for layout

**Backend:**
   * Node.js with Express.js
   * Sequelize ORM
   * PostgreSQL Database


**Security:**
   * JWT (JSON Web Tokens) for authentication
   * bcrypt.js for password hashing
  

**Infrastructure:**
   * AWS (Amazon Web Services) for cloud hosting
   * Terraform for Infrastructure as Code (IaC)


**Development:**
   * Visual Studio Code
   * Git & GitHub/GitLab for version control
   * Postman for API testing


**Deployment:**
   * Docker and Kubernetes (optional for future enhancements)

## Project Structure

```java
.
├── backend/
│   ├── controllers/
│   ├── models/
│   ├── routes/
│   ├── config/
│   ├── middleware/
│   ├── app.js
│   ├── package.json
├── frontend/
│   ├── src/
│   │   ├── components/
│   │   ├── pages/
│   │   ├── App.js
│   │   ├── index.js
│   ├── public/
│   ├── package.json
└── README.md
```

## Setup and Installation
**Prerequisites**
* Node.js (version 16+)
* PostgreSQL
* Git
* AWS CLI (for deployment)
* Docker (if using containers)

**Step-by-Step Setup**

1. Clone the Repository:

   ```bash
   git clone https://github.com/joydeepdascode/ehr_Electronic_Health_Records.git
   cd SecureEHR
   ```

2. Backend Setup:

   ```bash
   cd backend
   npm install
   ```

* Configure PostgreSQL: Set up a PostgreSQL database and update the database configuration in ```config/config.json```.

* Run Backend:

```bash
npm start
```

3. Frontend Setup:

```bash
cd frontend
npm install
npm start
```

4. Database Migrations (Optional):

   ```bash
   npx sequelize-cli db:migrate
   ```

## Usage
1. Run the Backend:

```bash
cd backend
npm start
```

2. Run the Frontend:

```bash
cd frontend
npm start
```

3. Open the App: Navigate to ```http://localhost:3000``` to access the application.


## API Endpoints

**Authentication Routes:**
* ```POST /signup``` - Sign up a new user.
* ```POST /login``` - Log in an existing user.

**Patient Data Routes:**
* ```GET /patients``` - Fetch all patients (Admin users only).
* ```POST /patients``` - Add a new patient record (Admin users only).
* ```PUT /patients/:id``` - Update an existing patient record.
* ```DELETE /patients/:id``` - Delete a patient record.

**Role-based Access:**
The API endpoints are protected and require users to be logged in. Admins have additional privileges compared to standard users (clients).

## Security
* Authentication: Users log in using secure endpoints. JWT tokens are used to handle session management and maintain secure access.
* Password Hashing: Passwords are hashed using bcrypt before being stored in the database.
* Data Access Control: Role-based access is implemented to ensure only authorized users can perform specific actions.


## Future Enhancements
* Implement Multi-Factor Authentication (MFA) for additional security.
* Integrate Docker and Kubernetes for containerization and orchestration.
* Enable Machine Learning for anomaly detection and predictive analytics in patient data.
* Expand to Mobile Platforms for remote healthcare providers.


## Contributing
We welcome contributions to SecureEHR! Please follow our guidelines for contributing and report any issues or bugs through GitHub.

## License
This project is licensed under the MIT License. See the LICENSE file for more details.

---------------------------------------------------------------------------

SecureEHR - Your Trusted Platform for Secure and Efficient Healthcare Data Management