# Beginner Fullstack Version of PayTM

This project is a beginner-friendly fullstack version of PayTM, one of the largest online payment systems in India. It is designed to provide a simplified version of the PayTM system, focusing on the core functionalities of user registration, authentication, and transactions.

The project is built using a variety of technologies, making it a comprehensive learning experience. The backend is developed using Node.js, a powerful JavaScript runtime built on Chrome's V8 JavaScript engine. Express.js, a minimal and flexible Node.js web application framework, is used to set up server-side routing and middleware.

For data storage, MongoDB is used due to its flexibility and scalability. Mongoose, an Object Data Modeling (ODM) library for MongoDB and Node.js, is used to model the application data. This includes creating schemas for users and bank accounts.

On the frontend, React.js is used to build the user interface. React.js is a JavaScript library for building user interfaces, particularly single page applications where a fast, interactive user experience is needed.

The project also utilizes several important Node.js packages:

- `express`: This is a fast, unopinionated, and flexible Node.js web application framework. It provides a robust set of features for web and mobile applications.
- `mongoose`: This is a MongoDB object modeling tool designed to work in an asynchronous environment. It provides a straight-forward, schema-based solution to model your application data and includes built-in type casting, validation, query building, and business logic hooks.
- `body-parser`: This middleware is used to parse incoming request bodies. This allows you to access `req.body` and the data sent with the request.
- `cors`: This package is used to enable CORS (Cross-Origin Resource Sharing), allowing the client to communicate with the server from a different domain.
- `jsonwebtoken`: This package is used to create access tokens for secure user authentication.
- `router`: This is used to create route handlers for Express.js.
- `zod`: This is a runtime validation library for JavaScript. It's used to validate data at runtime and ensure it matches the expected schema.

This project requires a solid understanding of JavaScript, Node.js, Express.js, MongoDB, Mongoose, and React.js. It also involves learning about important concepts in web development like RESTful APIs, CRUD operations, data modeling, user authentication, and frontend-backend integration.

Despite the challenges, completing this project is a rewarding experience. It provides practical experience with fullstack JavaScript development and gives a glimpse into the complexities of building a large-scale payment system like PayTM.

### Steps Followed

1. [Making Folder Structure](#step-1-making-folder-structure)
2. [User Mongoose Schema](#step-2-user-mongoose-schema)
3. [Creating a Routing File Structure](#step-3-creating-a-routing-file-structure)
4. [Routing User Requests](#step-4-routing-user-requests)
5. [Adding Cors, BodyParser, JsonWebToken](#step-5-adding-cors-bodyparser-jsonwebtoken)
6. [Adding Backend Auth Routes](#step-6-adding-backend-auth-routes)
7. [Middleware](#step-7-middleware)
8. [User Routes](#step-8-user-routes)
9. [Create Bank Related Schema](#step-9-create-bank-related-schema)
10. [Transaction in Databases](#step-10-transaction-in-databases)

**[Step 1: Making Folder Structure](#step-1-making-folder-structure)**

The first step in creating the application is to set up the folder structure. This involves creating directories for the various parts of the application, such as the frontend, backend, and database models.

**[Step 2: User Mongoose Schema](#step-2-user-mongoose-schema)**

The User Mongoose Schema defines the structure of the user documents in the MongoDB database. This includes fields like username, password, and email.

**[Step 3: Creating a Routing File Structure](#step-3-creating-a-routing-file-structure)**

The routing file structure organizes the route handlers for the application. Each route has its own file, which exports a function that handles requests to that route.

**[Step 4: Routing User Requests](#step-4-routing-user-requests)**

This step involves setting up the application to route user requests to the appropriate route handlers. This is done using Express.js, a web application framework for Node.js.

**[Step 5: Adding Cors, BodyParser, JsonWebToken](#step-5-adding-cors-bodyparser-jsonwebtoken)**

Middleware functions are added to the application to handle tasks like parsing request bodies, handling CORS, and authenticating users. This includes middleware like Cors, BodyParser, and JsonWebToken.

**[Step 6: Adding Backend Auth Routes](#step-6-adding-backend-auth-routes)**

Backend authentication routes handle user authentication. This includes routes for user registration, login, and password reset.

**[Step 7: Middleware](#step-7-middleware)**

Middleware functions are used to modify the request and response objects, end the request-response cycle, or call the next middleware function in the stack. They can be used for tasks like error handling, logging, and user authentication.

**[Step 8: User Routes](#step-8-user-routes)**

User routes handle requests related to users. This includes routes for creating new users, retrieving user information, updating user information, and deleting users.

**[Step 9: Create Bank Related Schema](#step-9-create-bank-related-schema)**

The Bank Mongoose Schema defines the structure of the bank documents in the MongoDB database. This includes fields like userId and balance.

**[Step 10: Transaction in Databases](#step-10-transaction-in-databases)**

This step involves creating and managing transactions in the database. This includes creating transactions, updating the balance of the user and the bank, and handling any errors that may occur during the transaction.