# User Management System

## Overview

A full-stack User Management System built using Node.js, Express.js, MongoDB, Mongoose, and EJS. This application allows users to perform complete CRUD (Create, Read, Update, Delete) operations on user records.

## Features

* Add new users
* View all users
* Edit existing user information
* Delete users
* Server-side rendering using EJS
* MongoDB database integration
* MVC (Model-View-Controller) architecture

## Tech Stack

### Backend

* Node.js
* Express.js

### Database

* MongoDB
* Mongoose

### Frontend

* EJS
* CSS

### Other Tools

* Method Override
* Nodemon

## Project Structure

user-management-system/

* controllers/
* models/
* routes/
* views/

  * users/
  * partials/
* public/

  * css/
* app.js

## Installation

1. Clone the repository

```bash
git clone https://github.com/vanran920/User_Mangement_System
```

2. Navigate to the project folder

```bash
cd user-management-system
```

3. Install dependencies

```bash
npm install
```

4. Start MongoDB

```bash
mongod
```

5. Run the application

```bash
npm run dev
```

6. Open in browser

```text
http://localhost:3000
```

## CRUD Operations Implemented

### Create

* Add a new user through a form

### Read

* Display all users from MongoDB

### Update

* Edit existing user details

### Delete

* Remove users from the database

## Learning Outcomes

Through this project, I learned:

* Express routing
* MongoDB database integration
* Mongoose schemas and models
* CRUD operations
* EJS templating
* Form handling with req.body
* Route parameters with req.params
* MVC architecture
* Method Override for PUT and DELETE requests

## Future Improvements

* User authentication
* Search functionality
* Pagination
* Form validation
* Flash messages
* Responsive UI

## Live Link 
https://user-mangement-system-ldyn.onrender.com/

## Author

Vansh Rana
