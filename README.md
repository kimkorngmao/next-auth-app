# Next.js Web Application with NextAuth.js

This project is a simple web application built with Next.js and NextAuth.js for authentication.

## Features

- **Home Page**: Landing page of the application.
- **Login Page**: Allows users to authenticate via NextAuth.js.
- **Register Page**: Allows new users to register for the application.

## Technologies

- **Next.js**: React framework for building server-side rendered applications.
- **NextAuth.js**: Authentication library for Next.js applications.
- **Tailwind CSS**: Utility-first CSS framework for styling.

### Installation

> Make sure Node.js is installed on your machine.

1. Clone the repository:

   ```shell
   git clone https://github.com/kimkorngmao/next-auth-app
   cd next-auth-app
   ```

2. Install dependencies:

   ```shell
   npm install
   ```

3. Configure environment variables:

   Create a `.env` file in the root of your project. Add the following environment variables:

   ```env
   MONGODB_URI=<you_mongodb_connection_string>
   NEXTAUTH_SECRET=<you_secret_key>
   ```

4. Start the development server:

   ```shell
   npm run dev
   ```

5. Open your browser and visit `http://localhost:3000` to see the application running.
