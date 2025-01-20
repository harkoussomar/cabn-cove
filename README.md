# CABN-COVE

CABN-COVE is a full-stack web application designed to streamline the management of bookings for luxurious wood cabins nestled in nature. This application is intended for employee use, offering a comprehensive suite of tools to manage bookings, cabins, and employee accounts. Built with **React** for the frontend and **Supabase** for the backend, the project delivers a modern, efficient, and intuitive user experience.

---

## Table of Contents

- [Features](#features)
  - [1. Authentication](#1-authentication)
  - [2. Bookings Management](#2-bookings-management)
  - [3. Cabins Management](#3-cabins-management)
  - [4. Settings](#4-settings)
  - [5. Employee Management](#5-employee-management)
  - [6. Dashboard](#6-dashboard)
  - [7. Dark Mode](#7-dark-mode)
- [Pages](#pages)
- [Technologies Used](#technologies-used)
  - [Frontend](#frontend)
  - [Backend](#backend)
  - [Additional Tools](#additional-tools)
- [Project Link](#project-link)
- [Getting Started](#getting-started)
  - [Prerequisites](#prerequisites)
  - [Installation](#installation)
  - [Running the Application](#running-the-application)
  - [Deployment](#deployment)
- [Contributing](#contributing)
- [License](#license)
- [Contact](#contact)

---

## Features

### 1. Authentication

- **Login/Logout**: Secure access to the application.
- **Signup**: Employee accounts can only be created by existing employees.
- **Update Employee Data**: Employees can update their profile information, including full name, profile image, and password.

### 2. Bookings Management

- **Booking Table**: Displays booking details with fields:
  - Cabin Name
  - Guest Name and Email
  - Dates (Start Date → End Date)
  - Status (Unconfirmed, Checked In, Checked Out)
- **Booking Actions**:
  - View detailed booking information.
  - Check in guests for unconfirmed bookings.
  - Check out guests and remove bookings.
- **Filtering**:
  - By Status: Checked Out, Checked In, Unconfirmed.
- **Sorting**:
  - By Date (Recent First, Earlier First)
  - By Amount (High First, Low First)
- **Pagination**: Easily navigate through a large number of bookings.

### 3. Cabins Management

- **Cabins Table**: Displays cabin details with fields:
  - Name
  - Image
  - Capacity
  - Price
  - Discount
- **Cabin Actions**:
  - Edit, Duplicate, or Delete cabin entries.
  - Add new cabins.
- **Filtering**:
  - By Discount (No Discount, With Discount).
- **Sorting**:
  - By Name (A-Z, Z-A)
  - By Price (Low First, High First)
  - By Capacity (Low First, High First)

### 4. Settings

- Update application-wide settings, including:
  - Minimum and maximum nights per booking.
  - Minimum guests per booking.
  - Breakfast price.

### 5. Employee Management

- **Employee Cards**: Displays employee details, including:
  - Profile Image
  - Full Name
  - Email
  - Verification Status (Email Verified/Not Verified).
- Add new employees using a dedicated modal.

### 6. Dashboard

- **Filters**: View data for the last 7, 30, or 90 days.
- **Stats**:
  - Total Bookings
  - Total Sales
  - Check-Ins Count
  - Occupancy Rate
- **Today’s Activities**: Highlights current activities based on filters.
- **Charts**:
  - Stay Duration Summary (Pie Chart).
  - Sales Overview (Double Line Chart for total sales and extras sales).

### 7. Dark Mode

- Toggle between light and dark modes for a personalized user experience.

---

## Pages

1. **Home (Dashboard)**: Displays key metrics, charts, and recent activities.
2. **Bookings**: Manage and view all bookings.
3. **Booking**: Detailed view and actions for individual bookings.
4. **Cabins**: Manage and view cabin details.
5. **Users (Employees)**: Manage employee accounts.
6. **Login**: Employee authentication.
7. **Accounts**: Update employee account settings.
8. **Checkin**: Streamline guest check-in process.
9. **Settings**: Manage application settings.
10. **PageNotFound**: Custom 404 error page.

---

## Technologies Used

### Frontend

- **React**: Core library for building the UI.
- **React Router**: For managing navigation and routes.
- **React Hook Form**: For form management.
- **styled-components**: For styling components.
- **react-error-boundary**: Error handling for React components.
- **react-hot-toast**: For displaying notifications.
- **React Icons**: For iconography.
- **Recharts**: For data visualization (charts).
- **date-fns**: For date manipulation.
- **uuid**: For generating unique identifiers.

### Backend

- **Supabase**: For authentication and database management.

### Additional Tools

- **Vite**: Fast development environment.
- **Context API**: For managing state (e.g., dark mode).
- **Vercel**: Hosting for the frontend application.

---

## Project Link

Access the live application here: [CABN-COVE](https://cabn-cove.vercel.app)

---

## Getting Started

### Prerequisites

Ensure you have the following installed:

- Node.js (v16 or higher)
- npm or yarn

### Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/your-repo/cabn-cove.git
   ```
2. Navigate to the project directory:
   ```bash
   cd cabn-cove
   ```
3. Install dependencies:
   ```bash
   npm install
   ```

### Running the Application

1. Start the development server:
   ```bash
   npm run dev
   ```
2. Open your browser and navigate to:
   ```
   http://localhost:5173
   ```

### Deployment

The application is deployed on Vercel. Push changes to the main branch to trigger a new deployment.

---

## Contributing

Contributions are welcome! To contribute:

1. Fork the repository.
2. Create a new branch:
   ```bash
   git checkout -b feature-name
   ```
3. Commit your changes:
   ```bash
   git commit -m "Add your message here"
   ```
4. Push to your branch:
   ```bash
   git push origin feature-name
   ```
5. Open a pull request.

---

## License

This project is licensed under the MIT License. See the LICENSE file for details.

---

## Contact

For inquiries, please contact [harkouss.omar@gmail.com].
