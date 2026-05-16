ReAppliance: Second-Hand Appliances Marketplace
A robust, full-stack MEAN application designed for buying and selling second-hand home appliances. The platform features an advanced administrative workflow allowing remote inventory management, dynamic pricing controls, and cloud-hosted appliance imagery.

🚀 Features
Remote Admin Control: Admins can securely log in from anywhere to upload appliance listings, attach product images, and dynamically update pricing in real-time.

Product Catalog: Users can browse, filter, and search through available second-hand appliances (e.g., refrigerators, washing machines, microwaves).

Dynamic Image Hosting: Seamless image handling for appliance listings, served directly to the Angular frontend.

Secure Architecture: JWT-based authentication protecting admin routes and sensitive database operations.

🛠️ Tech Stack & Architecture
The application is split into two main decoupled layers (Frontend and Backend):

Frontend (frontend/)
Framework: Angular (v16+)

Styling: Bootstrap / Tailwind CSS (Responsive layout for mobile and desktop)

State Management: Reactive Forms and RxJS Observables for smooth data handling.

Backend & Database (backend/)
Runtime Environment: Node.js

Framework: Express.js (RESTful API architecture)

Database: MongoDB (NoSQL database utilizing Mongoose schemas for optimal appliance data structuring)

Image Storage: Multer middleware for handling multi-part form data / cloud storage integrations (e.g., Cloudinary or local uploads).

📁 File Structure
Plaintext
reappliance-workspace/
├── backend/                  # Node/Express API, Models, Controllers, and Database configs
│   ├── config/               # MongoDB connection string setup
│   ├── controllers/          # Admin and Product business logic
│   ├── models/               # MongoDB Mongoose schemas (Appliance, User)
│   ├── routes/               # Express API endpoints
│   └── server.js             # Entry point
├── frontend/                 # Angular SPA
│   ├── src/app/components/   # Navbar, Product Grid, Admin Dashboard, Login
│   ├── src/app/services/     # API Client services (Auth, Appliance fetch)
│   └── src/index.html
└── README.md                 # Project documentation
⚙️ Setup & Installation
Prerequisites
Make sure you have the following installed globally on your machine:

Node.js (v18+ recommended)

Angular CLI (npm install -g @angular/cli)

MongoDB (Local Community Server or a MongoDB Atlas Cloud URI)

1. Clone & Set Up the Backend
Navigate to the backend folder, install dependencies, and configure environment variables.

Bash
cd backend
npm install
Create a .env file inside the backend directory:

Code snippet
PORT=5000
MONGODB_URI=your_mongodb_connection_string
JWT_SECRET=your_super_secure_jwt_secret_key
Start the backend development server:

Bash
npm start
The API should now be running smoothly at http://localhost:5000.

2. Set Up the Frontend
Open a new terminal window, navigate to the frontend folder, and install dependencies.

Bash
cd frontend
npm install
Update your Angular environment file (src/environments/environment.ts) to point to your backend API:

TypeScript
export const environment = {
  production: false,
  apiUrl: 'http://localhost:5000/api'
};
Launch the Angular local development application server:

Bash
ng serve
Open http://localhost:4200 in your browser to interact with the marketplace!

🔐 Administrative Workflow
To access remote management features:

Register/Log in via the Admin route (protected by backend middleware).

Navigate to the Admin Dashboard.

Fill out the appliance details (Name, Category, Condition, and Description).

Input the fixed price and attach an image file.

Submit to instantly stream the new listing to the public MongoDB-powered client feed.
