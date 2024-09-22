# KatFit

KatFit is a fitness app designed to help users track their workouts and progress. 

## Author

**Katarina Musladin**

## Installation Guide

### STEP 1: Clone the repos
- Clone KatFit front end, and back end repositories.

### STEP 2: Environment Configuration
- Create a **.env file** in the back end repo with the following content:
  - PORT=3000
  - DB_HOST=127.0.0.1
  - DB_NAME=katfit
  - DB_USER=<your_username>
  - DB_PASSWORD=<your_password>

- Create a **.env file** in the front end repo with the following content:
  - VITE_BASE_URL=http://localhost
  - VITE_PORT=3000

 ### STEP 3: Database Setup

1. Create DB named 'katfit'
2. In your back-end run migrations and seed the db:
  - npm run migrate;
  - npm run seed;

### Back end Dependencies
- axios
- cors
- dotenv
- express
- knex
- mysql2
- sql

### Front end Dependencies
- axios
- react
- react-dom
- react-icons
- react-router-dom
- react-slick
- sass
- slick-carousel

### Final Notes
- Make sure to replace `<your_username>` and `<your_password>` with your actual database credentials.