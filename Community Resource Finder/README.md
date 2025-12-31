Community Resource Finder
A modern React application that helps users search, filter, and explore community resources such as food banks, shelters, and clinics. Built with clean architecture, global state management, and a lightweight backend API.

🚀 Features
✅ Current Functionality
Search & Filter System
Users can search by name or type and filter resources by category.

Resource Details Page
Each resource has a dedicated page with full information.

Global State with Context API
Centralized data layer for clean, scalable state management.

Real Backend API (JSON Server)
Resources are loaded from a live API instead of mock data.

Loading Skeleton UI
Smooth, professional loading experience while data fetches.

Clean Project Architecture
Organized into components, pages, context, hooks, and services.

🛠️ Tech Stack
Frontend
React (Vite)

React Router

Context API

Modern ES Modules

Backend
JSON Server (development API)

RESTful endpoints

📂 Project Structure
Code
src/
  components/
    FilterPanel.jsx
    ResourceCard.jsx
    SearchBar.jsx
    SkeletonCard.jsx
  context/
    ResourceContext.js
    ResourceProvider.jsx
  pages/
    ResourceDetails.jsx
  services/
    (mockResources.js removed)
  styles/
App.jsx
main.jsx
db.json (API data)
⚙️ Getting Started
1. Install dependencies
bash
npm install
2. Start the backend API
bash
npm run server
API runs at:

Code
http://localhost:4000/resources
3. Start the frontend
bash
npm run dev
🔌 API Endpoints
Method	Endpoint	Description
GET	/resources	Get all resources
GET	/resources/:id	Get a single resource
POST	/resources	Create a new resource (coming soon)
PUT/PATCH	/resources/:id	Update a resource (coming soon)
DELETE	/resources/:id	Delete a resource (coming soon)
🧭 Upcoming Features
🌍 Interactive Maps
Display resource locations on Google Maps or Mapbox

Show directions, distance, and nearby services

🔐 Authentication
User login system

Admin access control

JWT or Firebase Auth integration

🛠️ Admin Dashboard
Create, edit, and delete resources

Manage categories

View analytics and usage patterns

🤝 Contributing
Pull requests are welcome. For major changes, please open an issue first to discuss what you’d like to modify.