# This is the in-depth Documentation for this Backend Series.

## 2 major components

### 1.  A programming language mastry(JS)
### 2.  A Database (Mongo,MySQL,PostgreSQL etc.) 

# <strong style="color:Yellow;">A JavaScript Based Backend Contains:</strong>
>> 1. Data (it can be in any datatype like string,array,boolean,number etc.)
>> 2. File (Images,Videos,PDF etc.)
>> 3. Third Party API (google login , facebook login etc. )
### A JS Runtime : Node.js/Deno/Bun

## <strong style="color:Red">working of JS files and folders:</strong>
>> 1.<strong style="color:orange">index.js</strong> {Here we connect DB with our backend}
>> 2.<strong style="color:orange">App.js</strong>  {configuration(config),cookies,urlencoded etc.}
>> 3.<strong style="color:orange">constants.js</strong>  {enums,DB-name etc.}
>> <strong style="color:purple;">The above 3 are files and below are folders </strong>
>> 4.<strong style="color:orange">DB</strong> {Here in this case we write the code to connect backend with DB and export it to the "index.js" file}
>> 5.<strong style="color:orange">Models</strong> {Here we make Shemas and sturctures of DATA that how the data will get stored in DB}
>> 6.<strong style="color:orange">Controllers</strong> {This contains the functions or methods , means at what route what function or method will execute and it also do all the stuff with data. }
>> 7.<strong style="color:orange">Routes</strong> {Here in this case we defined Routes of our web applications like (/login,/register,/,/signup) etc.}
>> 8.<strong style="color:orange">Middlewares</strong> {Here we write the middlewares for our web apps}
>> 9.<strong style="color:orange">Utils</strong> {This means utilities , basically we write the functions or methods that most of the time used in the application , so that we don't have to write it each time }

## Commands of creating a simple server (localhost:port)

```javascript
 npm init //Command 1. This initializes the server and by writing this command we can install any package and it make the package.json file where the all information of your app available .
{
  "name": "chaibackend",
  "version": "1.0.0",
  "description": "a basic app to deploy",
  "main": "index.js",
  "scripts": {
    "test": "echo \"Error: no test specified\" && exit 1"
  },
  "author": "Aman Kumar",
  "license": "ISC"
}
//The above code is of Package.json, and we can make our own "scripts" commands to run the application , like below we've make it .
"scripts": {
    "start": "node index.js"
  },
  // so by entering "npm run start" command in terminal the app will get live and run

  npm install express //Command 2. This will install the express for our web app including node_modules where the all the folders and file that will required for our app. 
  npm install dotenv //Command 3. This will install dotenv for our web app , so that we can use (.env) file to store the important and sensitive information about our app like (DB url, PORT etc. )
```

## The code written below is the basic  that how you can make the server by using "Express" and also follow the link that commented at the end of the code 

```javascript
 //The code written below is in "index.js" file
 import express from 'express';
import { configDotenv } from 'dotenv'; //This is for (.env) file
const app = express();/*The comment clearly explains that this line of code creates an instance of the Express application, which is a fundamental step in setting up an Express.js server.*/
const port = 3000 || process.env.PORT // Define the port number on which the server will listen, and if our defined port is get busy in users device then it will automatically use the port that get provided by the platform where you deploye your app because of this(|| process.env.PORT)

const userData = {
    "login": "SKDPROGRAMMER-AMANKUMAR",
    "id": 165259703,
    "node_id": "U_kgDOCdmptw",
    "avatar_url": "https://avatars.githubusercontent.com/u/165259703?v=4",
    "gravatar_id": "",
    "url": "https://api.github.com/users/SKDPROGRAMMER-AMANKUMAR",
    "html_url": "https://github.com/SKDPROGRAMMER-AMANKUMAR",
    "followers_url": "https://api.github.com/users/SKDPROGRAMMER-AMANKUMAR/followers",
    "following_url": "https://api.github.com/users/SKDPROGRAMMER-AMANKUMAR/following{/other_user}",
    "gists_url": "https://api.github.com/users/SKDPROGRAMMER-AMANKUMAR/gists{/gist_id}",
    "starred_url": "https://api.github.com/users/SKDPROGRAMMER-AMANKUMAR/starred{/owner}{/repo}",
    "subscriptions_url": "https://api.github.com/users/SKDPROGRAMMER-AMANKUMAR/subscriptions",
    "organizations_url": "https://api.github.com/users/SKDPROGRAMMER-AMANKUMAR/orgs",
    "repos_url": "https://api.github.com/users/SKDPROGRAMMER-AMANKUMAR/repos",
    "events_url": "https://api.github.com/users/SKDPROGRAMMER-AMANKUMAR/events{/privacy}",
    "received_events_url": "https://api.github.com/users/SKDPROGRAMMER-AMANKUMAR/received_events",
    "type": "User",
    "user_view_type": "public",
    "site_admin": false,
    "name": "Aman Kumar",
    "company": null,
    "blog": "",
    "location": null,
    "email": null,
    "hireable": null,
    "bio": "An Enthusiastic beginner Programmer\r\n",
    "twitter_username": null,
    "public_repos": 15,
    "public_gists": 0,
    "followers": 0,
    "following": 0,
    "created_at": "2024-03-28T08:19:55Z",
    "updated_at": "2024-11-04T19:29:53Z"
  }

  app.get('/users',(req,res)=>{
    res.json(userData)
  })// Define a route handler for the '/users' URL. When a GET request is made to this URL, the server responds with the user data in JSON format.

app.get('/', (req, res) => { 
  res.send('Hello World!');
});/*Define a route handler for the root URL ('/'). When a GET request is made to this URL,the server responds with the text 'Hello World!'.*/

app.get('/twitter', (req, res) => {
    res.send('Welcome to Twitter!');
})// Define a route handler for the '/twitter' URL. When a GET request is made to this URL, the server responds with a welcome message for Twitter.

app.get('/login', (req, res) => {
    res.send('<h1>please login at chai aur code</h1>')
})

// app.listen(port, () => {
//     console.log(`Server is running on port ${port}`);
// })// Start the server and listen on the specified port, logging a confirmation message to the console once the server is running.

app.listen(port, () => {
        console.log(`Server is running on port  ${port}`);
    })// Start the server and listen on the port specified in the environment variable (.env)'PORT'. Once the server is running, log a confirmation message to the console indicating the port number. and this is helpful when you deploy you application


['https://expressjs.com/en/5x/api.html'](You'll use and spend most of the time only two things (1.req{request}, 2.res{response})
```

# Connect Frontend to Backend 
Backend code 👇👇
```javascript
  import express from "express";
import { configDotenv } from "dotenv";
const app = express();
const port = process.env.PORT || 8080;

app.get("/", (req, res) => {
  res.send("Server is ready");
});

//get a list of 5 jokes

/*/api/jokes:this is the standard practice to avoid "CORS" error , you can't directly write (/jokes) , you've to write (/api/v1/jokes or /api/jokes or seomthing else)*/
app.get("/api/jokes", (req, res) => {
    const jokes =[
        {id:1,
         title:'A joke',
         content:'This is a joke'
        },
        {id:2,
         title:'Another joke',
         content:'This is another joke'
        },
        {id:3,
         title:'A third joke',
         content:'This is a third joke'
        },
        {id:4,
         title:'A fourth joke',
         content:'This is a fourth joke'
        },
        {id:5,
         title:'A fifth  joke',
         content:'This is a fifth joke'
        },
    ]
    res.send(jokes);
})

app.listen(port, () => {
  console.log(`Server at http://localhost:${port}`);
});

Package.json of Backend:👇
{
  "name": "backend",
  "version": "1.0.0",
  "description": "Connect frontend to backend ",
  "main": "index.js",
  "type": "module",
  "scripts": {
    "start": "node index.js"
  },
  "author": "Aman kumar",
  "license": "ISC",
  "dependencies": {
    "dotenv": "^16.4.5",
    "express": "^4.21.1"
  }
}

```

Frontend Code 👇👇

we make the React app with vite 
```javascript 
//This is in "App.jsx" file
import { useEffect, useState } from 'react'
import './App.css'
import axios from "axios"

function App() {
  const [jokes, setJokes] = useState([])

  useEffect(()=>{
    axios.get("/api/jokes")
    .then((response)=>{
       setJokes(response.data)
    })
    .catch((error)=>{
      console.log("Error:",error.message);
    })
  })

  return (
    <>
      <h1>Chai and full stack</h1>
      <p>JOKES:{jokes.length}</p>

      {
        jokes.map((joke,index) => (
          <div key={joke.id}>
            <h2>{joke.title}</h2>
            <p>{joke.content}</p>
          </div>
        ))
      }
    </>
  )
}

export default App

This is the main and most important in frontent (vite.config.js), The below Code is for avoiding the "CORS" ERROR

import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  server:{  /* Configure the server to act as a reverse proxy for API requests.
     This allows the server to forward incoming requests from the '/api' endpoint to a separate server running on 'http://localhost:8080'.
     This is useful for development environments where the frontend and backend are running on different ports or servers.*/
    proxy:{ /* The '/api' endpoint is the entry point for API requests on the current server.
       Any requests made to this endpoint will be forwarded to the target server.*/
      '/api':'http://localhost:8080'
      /* The target server is running on 'http://localhost:8080'.
         This is the server that will actually handle the API requests.*/
    },
  },
  plugins: [react()],
})

```

## Data Modeling / Object Modeling for a web app or app 

>>The link below will tell you that how you will structure or model the data to get stored in the database.👇👇

[https://excalidraw.com/#json=uo00OYrdn89AE9uChuSZD,Qr9jB-VPRWkPhdf5bu16mQ](Data Modeling/Object Modeling link)



### <strong style="color:gold">Mongoose</strong> 
>> Below are the code of Mongoose data model for todo 
```javascript
// Below are the code for Mongoose that how will the data get store in the database

//This is in "user.models.js" file
import mongoose from 'mongoose'; //This is first
const userSchema = new mongoose.Schema(/*Define a new Mongoose schema for the 'user' model. This schema will structure the data for user documents in the MongoDB database. The fields within the schema will specify the properties and data types of each user document.*/
  {
    username: {
      type: String, // The 'username' field will store string data.
      required: true, // Ensures this field is mandatory when creating a document.
      unique: true, // Prevents duplicate usernames in the collection.
      lowercase: true, // Automatically converts all input to lowercase.
    },
    email: {
      type: String,
      required: true,
      unique: true,
      lowercase: true,
    },
    password: {
      type: String,
      required: [true, 'password is required'], // Here if the user not entered the password then this message will be show {(password is required)}
    },
  },
  { timestamps: true }/* [Adds 'createdAt' and 'updatedAt' fields] , These fields are managed by Mongoose automatically, meaning you don’t need to update (updatedAt) manually—it will update whenever the document is modified. This feature is useful for tracking when a document was created or changed.
   */
); /* it is a method that take object as parameter, Define a schema using mongoose. A schema determines the structure (fields, types, and validations) 
 of documents that will be stored in the MongoDB collection.*/

export const User = mongoose.model('User',userSchema); /*Create a model using the   defined schema. The model represents a collection in MongoDB.
 Here, "User" is the name of the model, and 'userSchema' is the schema used to structure the data. The "User" model provides an interface to perform CRUD operations (Create, Read, Update, Delete) on the 'users' collection in MongoDB.*/
```

 ```javascript
 //This is in "todo.models.js" file
   import mongoose from 'mongoose'; //This is second

const todoSchema = new mongoose.Schema(
  {
    content: {
      type: String,
      required: true,
    },
    complete: {
      type: Boolean,
      default: false,
    },
    createdBy: {
      /*This field creates a "relationship" between two collections. The "ObjectId" stores the ID of a user, and the "ref" specifies that it references the "User model". This allows you to populate user details when querying the document. */
      type: mongoose.Schema.Types.ObjectId, // Refers to an "ObjectId" from another document
      ref: 'User', // Links this field to the ('User' model) for referencing user data
    },
    subTodos: [
      {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'subTodo',
      },
    ], //Array of Sub-Todos
  },
  { timestamps: true }
);

export const todo = mongoose.model('Todo', todoSchema);

```

```javascript
//This is in "sub_todo.models.js" file
import mongoose from "mongoose" //This is third 

const subTodoSchema = new mongoose.Schema(
  {
     content:{
       type:String,
       required:true
     },
     complete:{
       type:Boolean,
       default:false,
     },
     createdBy:{
       type:mongoose.Schema.Types.ObjectId,
       ref:"User",
     }
  }
  ,{timestamps:true})

export const subTodo =  mongoose.model("subTodo",subTodoSchema)
```

Below is the code of data modeling for Ecommerce web app via mongoose:

```javascript
  import mongoose, { mongo } from "mongoose"

const userSchema = new mongoose.Schema({
  username:{
    type:String,
    required:true,
    unique:true,
    lowercase:true,
  },
  email:{
    type:String,
    required:true,
    unique:true,
    lowercase:true,
  },
  password:{
    type:String,
    required:true,
  }
},{timeStamps:true})

export const User = mongoose.model("User",userSchema)
```
```javascript
//This is in "product.models.js" file
import mongoose from "mongoose"

const productSchema = new mongoose.Schema({
  description:{
    type:String,
    required:true,
  },
  name:{
    type:String,
    required:true,
  },
  productImage:{
    type:String,
  },
  price:{
    type:Number,
    default:0,
  },
  stock:{
    type:Number,
    default:0,
  },
  category:{
     type:mongoose.Schema.Types.ObjectId,
     ref:"Category",
     required:true,
  },
  owner:{
    type:mongoose.Schema.Types.ObjectId,
    ref:"User"
  }
},{timestamps:true})

export const  Product = mongoose.model("Product" , productSchema)
```
```javascript
//This is in "order.models.js"
import mongoose from "mongoose"

const orderItemsSchema = new mongoose.Schema({ // you can create this  "orderItemsSchema" in other separate file , but because here we  use this schema  only in this file , so that's why we create this schema in this file . 
  productId:{
    type:mongoose.Schema.Types.ObjectId,
    ref:"Product"
  },
  quantity:{
    type:Number,
    required:true,
  }
})

const orderSchema = new mongoose.Schema({
  orderPrice:{
    type:Number,
    required:true,
  },
  customer:{
    type:mongoose.Schema.Types.ObjectId, /* You don't need to memorize (mongoose.Schema.Types.ObjectId) in a rote manner, but understanding its purpose and usage is important.  */
    ref:"User" //This indicates that "customer" refers to a document in the User collection
  },
  orderItems:{
    type:[orderItemsSchema] // An array of order items using the orderItemsSchema
  },
  address:{
    type:String,
    required:true,
  },
  status:{
    type:String,
    enum:["PENDING","CANCELLED","DELIVERED"], //Here "enum" means choices , means the user have only three choices("PENDING","CANCELLED","DELIVERED") to select regarding the order status
    default:"PENDING"
  }
},{timestamps:true})

export const Order = mongoose.model("Order",orderSchema)
```

```javascript
//This is in "category.models.js" file
import mongoose from "mongoose"

const categorySchema = new mongoose.Schema({
   name:{
     type:String,
     required:true,
   },
   createdBy:{
     type:mongoose.Schema.Types.ObjectId,
     ref:"User",
   }
},{timeStamps:true})

export const Category = mongoose.model("Category",categorySchema) /* This line creates a Mongoose model called "Category" based on the defined categorySchema. The model acts as a constructor for creating new category documents in the MongoDB database. Using `mongoose.model`, we link the "Category" model to the  schema, enabling operations like saving new categories, querying existing ones, updating, and deleting them. It ensures that all category data follows the structure  defined in categorySchema, enforcing validation and type checks. */
```
[Model link of Mogoose for data modeling](https://stackblitz.com/edit/stackblitz-starters-lwjsoh?description=&file=models%2Ftodos%2Fsub_todo.models.js,models%2FEcommerce%2Fcategory.models.js,models%2Ftodos%2Fuser.models.js&title=Express%20Starter)

# <strong style="color:cyan; font-family:serif;" >From Here We are moving towards Professional and Production grade backend that used in big companies</strong>

[Link of model for project that we will in this professional backend](https://app.eraser.io/workspace/YtPqZ1VogxGy1jzIDkzj)

[This website will create all the things that should go inside (.gitignore) file and it is professional approach](https://mrkandreev.name/snippets/gitignore-generator/#Node) Here we simply use it for "Node" but you can use for any other framework or library or language.

This document provides a structured overview of the backend project, explaining the purpose of each folder and file in the application.

```javascript
├── node_modules/
│ └── Contains all the installed dependencies and packages used in the project. This folder is generated automatically by npm based on package.json and should not be modified directly.
│ ├── public/
│ └── Static files served directly to clients without requiring backend processing. │ └── temp/
│ └── A subdirectory within public intended for temporarily storing files, such as uploads or files in processing. │ └── .gitkeep
│ └── An empty file used to retain the temp directory in version control (Git), since Git does not track empty directories by default. │ ├── src/
│ └── The main source folder that holds the core backend logic and all the code for the application’s functionality.
│ ├── controllers/
│ └── Contains controller functions for handling incoming requests and responses. Each controller typically contains business logic for specific routes and organizes how data flows between the client, database, and application. │ ├── db/
│ └── Manages the database connection setup. This directory holds files for configuring and initializing a connection to MongoDB.
│ └── Database.js
│ └── Contains the logic for connecting to MongoDB, including connection URI, options, and error handling. Responsible for establishing a connection between the application and MongoDB. │ ├── middlewares/
│ └── Holds middleware functions that intercept requests to add extra processing, such as authentication, logging, or error handling, before they reach the controller. Middleware functions operate at different stages of the request lifecycle.
│ ├── models/
│ └── Contains Mongoose models that define the data structure and schema for each collection in MongoDB. Models specify data types, validation, and relationships, enabling MongoDB and Node.js to communicate seamlessly.
│ ├── routes/
│ └── Defines API endpoints for different resources and maps these endpoints to their respective controller functions. Routes act as the interface between the client requests and server responses.
│ ├── utils/
│ └── Stores helper functions and utility modules used across the application. These are reusable pieces of code that provide common functionality (e.g., formatting, data transformation) to avoid redundancy.
│ ├── app.js
│ └── Initializes the Express application, applies global middleware, and sets up API routes. This file serves as the central configuration for the application’s request handling and middleware setup.
│ ├── constants.js
│ └── Stores global constants used throughout the application, such as HTTP status codes, configuration settings, or reusable static values, which helps maintain consistency and readability.
│ └── index.js
│ └── The main entry point for the backend server. This file connects to the database, starts the Express server, and listens for incoming requests. It’s responsible for bootstrapping the application.
│ ├── .env
│ └── Stores sensitive environment variables like database URI, API keys, and configuration values. It allows for secure configuration by keeping sensitive data out of the source code. │ ├── .gitignore
│ └── Specifies files and folders that should be ignored by Git for version control. This file helps prevent sensitive information or unnecessary files (like node_modules) from being committed to the repository.
│ ├── package-lock.json
│ └── An auto-generated file that locks the exact version of dependencies in the node_modules folder. This file ensures that the same dependency versions are installed every time the project is set up, improving consistency and stability.
│ ├── package.json
│ └── The primary configuration file for the Node.js project, listing all dependencies, scripts, metadata, and settings. It acts as the manifest for the project and is required for installing dependencies via npm.

```

If you're unable to understand the structuring of the file , refer this , this is in clear way

```javascript
MongoDB_Connection_to_Backend/
│
├── node_modules/            # Dependencies installed via npm
│
├── public/                  # Static files served directly
│   └── temp/
│       └── .gitkeep         # Keeps the folder in version control
│
├── src/                     # Core backend logic
│   ├── controllers/         # Request handlers (business logic)
│   ├── db/                  # Database connection setup
│   │   └── Database.js      # MongoDB connection logic
│   ├── middlewares/         # Middleware for authentication/error handling
│   ├── models/              # Mongoose models (Schemas)
│   ├── routes/              # API route definitions
│   ├── utils/               # Helper functions (utilities)
│   ├── app.js               # Initializes express, middleware, and routes
│   ├── constants.js         # Global constants (status codes, config)
│   └── index.js             # Entry point, connects DB and starts server
│
├── .env                     # Environment variables (e.g., DB URI, API keys)
├── .gitignore               # Files/folders to ignore in version control
├── package-lock.json        # Exact dependency tree (auto-generated)
├── package.json             # Project configuration and dependencies
└── Readme.md                # Documentation for the project

```

Below are the code for prettier(.prettierrc)  👇👇 This basically standardized the formatting of the code , So that no conflict get happen while pushing it to the github.
```javascript
{
    "singleQuote": false,
    "bracketSpacing": true,
    "tabWidth": 2,
    "trailingComma": "es5",
    "semi": true
}
```
Below are the code for prettier(.prettierignore)
```javascript
/.vscode
/node_modules
./dist
*.env
.env
.env*
```

## <strong style="color:hotpink">Connecting Database with backend</strong> 

 >>Write the below code in ```.env``` file  , The ```URI``` return below is come after doing setting in ```MongoDB Atlas``` and making a database over there
```javascript
PORT=8000
MONGODB_URI=mongodb+srv://masterybackend143:your-password@cluster0.cvbkt.mongodb.net
```
>> And then write the below code in ```constants.js``` file

```javascript
export const DB_NAME = "videotube"
```

### There are mainly two ways to connect database with backend 
#### 1.Write the function that'll connect the database with backend backend in "```index.js```", which is the entry point  , means as the file get loaded then immediately the function get runs. 
#### 2.Make the different directory as "db" or you can name this directory as you want and create a file in this directory whose name will be  "```database.js```" in "```db```"  directory  and then simpley ```export``` it , and by using this second method The code will be more modular and reusable . 

<strong style="color:red; font-family:Tahoma;">Remember two things always while writing the backend and when you talk to database:- 
1.use ```try-catch``` block and ```async-await```  cause maybe the error can occur or it takes time  while getting and sending data to database.
2.```Database``` is in another ```Continent```. 
</strong> 

##### <strong style="color:yellow">Approach 1</strong>: Write this code in your "```index.js```" file to Connect the database with backend 
```javascript
import mongoose from "mongoose";
import { DB_NAME } from "./constants.js";
import express from "express";
const app = express();
(async () => {
  try {
    await mongoose.connect(`${process.env.MONGODB_URI}/${DB_NAME}`);
    app.on("error", (error) => {// Catch and log any errors that occur in the app, then re-throw the error.
      console.log("ERROR:", error);
      throw error;
    });/*app.on("error", ...) is a global error handler that catches uncaught exceptions that occur within the Express.js application. This means that if an error occurs in a route handler or middleware, and it's not caught by a try-catch block, this global error handler will catch it.*/

    app.listen(process.env.PORT, () => {
      console.log(`App is listening on port ${process.env.PORT}`);
    });
  } catch (error) {
    console.error("ERROR:", error);
    throw err;
  }/*catch(error), on the other hand, is a block that catches errors that occur within a specific try block. This means that if you have a try-catch block in a route handler or middleware, the error will be caught by that block, and the global error handler won't be triggered.*/
})();

```

#### <strong style="color:yellow">Approach 2</strong>:Write this code in your "```Database.js```" file which present in "```db```" directory and import it into "```index.js```" file , cause it is the entry point of this project.

```javascript
import mongoose from "mongoose";
import {DB_NAME} from "../constants.js"

const connectDB = async () => {
    try {
     const connectionInstance = await mongoose.connect(`${process.env.MONGODB_URI}/${DB_NAME}`)
      console.log(connectionInstance); //This is for information about what "connectionInstance" store
     console.log(`\n MongoDB connected !! DB HOST: ${connectionInstance.connection.host}`); /*Log a message to the console indicating that a connection to a MongoDB database has been established.
     The message includes the hostname of the MongoDB server.*/
     
    } catch (error) {
        console.log("MONGODB connection FAILED",error)
        process.exit(1)
    }
}
export default connectDB

// Here's how we import this in "index.js" file 
import dotenv from "dotenv"
import connectDB from "./db/Database.js";

dotenv.config({
  path:"./env"
})

connectDB()
```

## <strong style="color:Gold"> This is the code  for now of "```package.json```" file to see how many "```dependencies```" we install till now </strong>

```javascript
{
  "name": "mastery-backend-development",
  "version": "1.0.0",
  "description": "Mastery Backend Development with chai aur code || Hitesh Choudhary",
  "main": "index.js",
  "type": "module",
  "scripts": {
    "dev": "nodemon -r dotenv/config --experimental-json-modules src/index.js"
  },/*/ This is a configuration for the "scripts" section of a package.json file.
// The "dev" script is used to run the application in development mode.
// It uses the "nodemon" tool to automatically restart the application whenever a file changes.
// The "-r dotenv/config" flag tells nodemon to automatically load environment variables from a .env file.
// The "--experimental-json-modules" flag enables support for ECMAScript modules in Node.js.
// The "src/index.js" argument specifies the entry point of the application.*/
  "keywords": [
    "JavaScript"
  ],
  "author": "Aman Kumar",
  "license": "ISC",
  "devDependencies": {
    "nodemon": "^3.1.7",
    "prettier": "^3.3.3"
  },
  "dependencies": {
    "dotenv": "^16.4.5",
    "express": "^4.21.1",
    "mongoose": "^8.8.1"
  }
}

```
##### <strong style="color:Red">Remember one thing , When you change something in "```.env```" file , you have to restart the application by yourself , in this case the "```nodemon```" will not help you</strong> 

## <strong style="color:cyan;">Starting the "```SERVER```" BY using "```app.js```" file</strong>
Write this code in ```app.js``` file
```javascript
import express from 'express';
const app = express();
export default { app }
```
and then write this code in ```index.js``` file 
```javascript
import dotenv from "dotenv"
import connectDB from "./db/Database.js";

dotenv.config({
  path:"./env"
})

connectDB() //cause inside database.js file we use async-await , so after completion of it , it'll return a promise
.then(()=>{
  //  app.on("error",(error)=>{/* Global error handler: logs and re-throws any uncaught application errors.*/
  //   console.log("ERRR:",error);
  //   throw error;
  // }) 
  app.listen(process.env.PORT || 8000, ()=>{
    console.log(`Server is running at ${process.env.PORT}`);
  }) //Till now we only able to connect database to backend , and till now  we didn't listen and never start the server , this will do that. 
})
.catch((err)=>{
  console.log("MONGO db connection failed !!!",err);
})
```

## The Below is the code for accepting the ```data``` from multiple resources like (json,params{url} etc.)

write this code in ```app.js``` file 
```javascript
import express from 'express';
import cors from "cors"
import cookieParser from 'cookie-parser';

const app = express();
app.use(cors({
    origin:process.env.CORS_ORIGIN,
    credentials: true
})) /*The "app.use()" will only applied when there is any middleware or configuration*/

app.use(express.json({limit: "16kb"})) /* Enable JSON parsing for incoming requests, with a maximum payload size of 16kb.*/

app.use(express.urlencoded({
    extended: true,
    limit: "16kb" /* Enable URL-encoded parsing for incoming requests, with a maximum payload size of 16kb.*/
}))

app.use(express.static("public"))// Serve files from the "public" folder as static assets (e.g. images, CSS, JavaScript).
app.use(cookieParser(cookieParser()))/*Enable cookie parsing for incoming requests, allowing access to cookies in the request object.
This middleware extracts cookies from the request headers and populates the req.cookies object.*/

export default  app 
```
write this code in ```.env``` file 
```javascript
PORT=8000
MONGODB_URI=mongodb+srv://masterybackend143:MasteryBackend143@cluster0.cvbkt.mongodb.net
# MasteryBackend143
CORS_ORIGIN=* //this will allow to get data from backend from any of the request , which is not good , but for now it is fine 
```

#### <strong style="color:red;">This is for middleware , the link that available below contains a diagram that show  how actually ```Middlewares``` work </strong>
[Working of middlewares](https://excalidraw.com/#json=Hwn2oD7pCo_NZYK9cLm2V,a_vjPx4-r1FJu3idK6z7UA)

### The code below  is the code inside ```utils``` directory
Write the code below 👇👇 in ```asyncHandler.js``` file
```javascript
/*Create a higher-order function (asyncHandler) that wraps a request handler with error handling.*/
const asyncHandler = (requestHandler) => {
    // Return a new function that takes req, res, and next as arguments.
   return  (req,res,next) => {
        // Wrap the request handler in a Promise to catch any errors that occur.
        Promise.resolve(requestHandler(req,res,next))
          // Catch any errors that occur and pass them to the next error handler.
        .catch((err)=>next(err))
    }
}

export {asyncHandler} //This file (src/utils/asyncHandler.js) is a utility file that provides a function (asyncHandler) for handling asynchronous errors in an Express.js application.


            //  ---- OR ----

// // Create a higher-order function (asyncHandler) that wraps an async function (fn) with error handling.
// const asyncHandler = (fn) => 
//     // Return a new async function that takes req, res, and next as arguments.
//     async (req,res,next) => {
//     try{
//          // Call the original async function (fn) with req, res, and next as arguments.
//         await fn(req,res,next);
//     } catch(error){
//          // If an error occurs, catch it and send a JSON error response.
//         res.status(err.code || 500).json({
//              // Set success to false to indicate an error occurred.
//             success: false,
//              // Include the error message in the response.
//             message:err.message
//         })
//     }
// }
```
Write the code below 👇👇 in ```ApiError.js``` file 
```javascript
class ApiError extends Error {
    // Constructor function that initializes the error object with the given parameters.
    constructor(statusCode,message="Something went wrong",errors=[],stack=""){
        super(message)
        // Set the HTTP status code for the error.
        this.statusCode = statusCode
        // Initialize the data property to null
        this.data = null
         // Set the error message.
        this.message = message
         // Indicate that the operation was not successful.
        this.success = false;
        // Store any additional error details in the errors array.
        this.errors = errors

         // If a stack trace is provided, set it as the error's stack property.
        if(stack) {
            this.stack = stack
        }else{
            // Otherwise, capture the current stack trace using the Error.captureStackTrace method.
            Error.captureStackTrace(this,this.constructor)
        }
        /*the stack property is initialized with the current call stack using the Error.captureStackTrace method. This allows the error object to store the call stack information, which can be useful for logging, debugging, or displaying error messages.*/

    }
}

export {ApiError} //This file defines a custom error class (ApiError) for handling and representing errors in an API, providing a standardized way of error handling.
```
Write the below 👇👇 code  in ```ApiResponse.js``` file
```javascript
class ApiResponse {
    constructor(statusCode,data,message="Success"){
        this.statusCode = statusCode // the HTTP status code of the response
        this.data = data // the response data (e.g., JSON payload)
        this.message = message //a human-readable message describing the response
        this.success = statusCode < 400 //a boolean indicating whether the response was successful
    }
}

export {ApiResponse} //This file (ApiResponse.js) defines a class for creating standardized API response objects, making it easy to return consistent responses.
```


## <strong style="color:yellow"> User and video model with mongoose ```hooks``` and ```JWT(access_token,refresh_token)``` etc.  to  hash and ```encrypt``` the password using ```bcrypt``` and many more... </strong>
Write this below code in ```user.model.js``` file which present inside ```models``` directory/folder
```javascript
import mongoose, { Schema } from "mongoose";
import jwt from "jsonwebtoken";
import bcrypt from "bcrypt";

const userSchema = new Schema(
  {
    username: {
      type: String,
      required: true,
      lowercase: true,
      unique: true,
      trim: true,
      index: true /*// Imagine you have a collection of books in a library.
        // You want to find all the books written by a specific author.
        // Without an index, the database would have to look through every book in the library to find the ones written by that author.
        // But if you create an index on the author field, the database can quickly look up the author's name and find all the books written by them.*/,
    },
    email: {
      type: String,
      required: true,
      lowercase: true,
      unique: true,
      trim: true,
    },
    fullName: {
      type: String,
      required: true,
      trim: true,
      index: true,
    },
    avatar: {
      type: String, //cloudinary url
      required: true,
    },
    coverImage: {
      type: String,
    },
    watchHistory: [
      {
        type: Schema.Types.ObjectId,
        ref: "Video",
      },
    ],
    password: {
      type: String,
      required: [true, "Password is required"],
    },
    refreshToken: {
      type: String,
    },
  },
  { timestamps: true }
);

/*// Define a pre-save hook for the userSchema.
// This hook will run before the user document is saved to the database.*/
userSchema.pre("save", async function (next) {
  /* // Check if the password field has been modified.
  // This is done to prevent unnecessary hashing of the password.
  // If the password field has not been modified, the hook will return and the save process will continue.*/
  if (!this.isModified("password")) return next(); 
  /*// If the password field has been modified, hash the password using bcrypt.
  // Bcrypt is a popular password hashing library that provides a secure way to store passwords.
  // The 10 in the hash function specifies the number of rounds to use for the hashing process.
  // A higher number of rounds makes the hashing process more secure, but also slower.*/
  this.password = await bcrypt.hash(this.password,10)
  /* // Call the next middleware function to continue the save process.
  // This is done to ensure that the save process continues after the password has been hashed.*/
  next();
});

/*// Define a method on the userSchema to compare a provided password with the stored password.
// This method uses bcrypt to securely compare the passwords.*/
userSchema.methods.isPasswordCorrect = async function(password){
  /*// Use bcrypt.compare to compare the provided password with the stored password.
  // bcrypt.compare returns a boolean indicating whether the passwords match.*/
 return  await  bcrypt.compare(password, this.password)
}

/*// Define a method on the userSchema to generate an access token.
// This method uses the jwt library to create a JSON Web Token (JWT) that contains user data.
// The JWT is used for authentication and authorization purposes, allowing the user to access protected routes and resources.*/
userSchema.methods.generateAccessToken = function(){
  /* // Use jwt.sign to create a new JWT.
  // The first argument is the payload, which contains the user data.
  // The payload is an object that includes the user's ID, email, username, and full name.*/
   return jwt.sign(
    {
      /*// Include the user's ID in the payload.
      // The ID is a unique identifier for the user, and is used to authenticate and authorize the user.*/
      _id:this._id,
      /* // Include the user's email in the payload.
      // The email is used to identify the user and to send notifications and updates.*/
      email:this.email,
      /*// Include the user's username in the payload.
      // The username is used to identify the user and to authenticate and authorize the user.*/
      username:this.username,
      /*// Include the user's full name in the payload.
      // The full name is used to display the user's name in the application.*/
      fullName:this.fullName,
    },
    /* // Use the ACCESS_TOKEN_SECRET environment variable as the secret key for signing the JWT.
    // The secret key is used to encrypt and decrypt the JWT, and to prevent tampering and forgery.*/
    process.env.ACCESS_TOKEN_SECRET,
    /* // Specify the expiration time for the JWT.
    // The expiration time is used to determine how long the JWT is valid, and to prevent the JWT from being used after it has expired.*/
    {
      /* // Use the ACCESS_TOKEN_EXPIRY environment variable to set the expiration time.
      // The expiration time is typically set to a short period of time, such as 15 minutes or 1 hour.*/
      expiresIn: process.env.ACCESS_TOKEN_EXPIRY,
    }
  )
}

/*// Define a method on the userSchema to generate a refresh token.
// This method uses the jwt library to create a JSON Web Token (JWT) that contains the user's ID.
// The refresh token is used to obtain a new access token when the current access token expires.*/
userSchema.methods.generateRefreshToken = function(){
  /*// Use jwt.sign to create a new JWT.
  // The first argument is the payload, which contains the user's ID.*/
  return jwt.sign(
    {
      /*// Include the user's ID in the payload.
      // The ID is a unique identifier for the user, and is used to authenticate and authorize the user.*/
      _id:this._id,
    },
    /*// Use the REFRESH_TOKEN_SECRET environment variable as the secret key for signing the JWT.
    // The secret key is used to encrypt and decrypt the JWT, and to prevent tampering and forgery.*/
    process.env.REFRESH_TOKEN_SECRET,
    /*// Specify the expiration time for the JWT.
    // The expiration time is used to determine how long the JWT is valid, and to prevent the JWT from being used after it has expired.*/
    {
      /* // Use the REFRESH_TOKEN_EXPIRY environment variable to set the expiration time.
      // The expiration time is typically set to a longer period of time than the access token, such as 1 day or 1 week.*/
      expiresIn: process.env.REFRESH_TOKEN_EXPIRY,
    }
  )
}
export const User = mongoose.model("User", userSchema);
```
Write this below code in ```video.model.js``` file which present inside ```models``` directory
```javascript
import mongoose ,{Schema} from "mongoose"
import mongooseAggregatePaginate from "mongoose-aggregate-paginate-v2";

const videoSchema = new Schema(
    {
        videoFile:{
            type:String, //cloudinary url
            required:[true, 'Vieo is Required']
        },
        thumbnail:{ //cloudinary url
          type:String,
          required:true
        },
        title:{
          type:String,
          required:true
        },
        description:{
          type:String,
          required:true
        },
        duration:{ 
          type:Number,
          required:true
        },
        views:{ 
          type:Number,
          default:0
        },
        isPublished:{ 
          type:Boolean,
          default:true
        },
        owner:{
            type:Schema.Types.ObjectId,
            ref:"User"
        }
    },
    {
        timestamps:true,
    }
)

videoSchema.plugin(mongooseAggregatePaginate)/*// Imagine you have a collection of 100 videos in your database.
// You want to display only 10 videos at a time on the webpage.
// The mongooseAggregatePaginate plugin helps you achieve this by allowing you to define a pagination strategy.
// You can then use this strategy to retrieve the first 10 videos, then the next 10, and so on.*/

export const Video = mongoose.model("Video", videoSchema)
```
Write this below code in your ```.env``` file 
```javascript
PORT=8000
MONGODB_URI=mongodb+srv://masterybackend143:MasteryBackend143@cluster0.cvbkt.mongodb.net
# MasteryBackend143
CORS_ORIGIN=* #this will allow to get data from backend from any of the request , which is not good , but for now it is fine 
ACCESS_TOKEN_SECRET=7b1fd5e79f3760f67497d6540e1ff04260c00d6fb941068806534e8f17bb91bb
ACCESS_TOKEN_EXPIRY=1d
REFRESH_TOKEN_SECRET=64312c7631d36392ea0a6bc9da1381654f900b6db17612066955c9057f981472
REFRESH_TOKEN_EXPIRY=10d

```
[From this website we generate this long string access and refrest token secret sha256](https://emn178.github.io/online-tools/sha256.html) 

## <strong style="color:Purple">How to upload file in backend | ```Multer``` discussion about ```Cloudinary``` and making our first ```Middleware``` </strong>
Write this code below in ```cloudinary.js``` file which present inside ```utils``` directory
```javascript
import { v2 as cloudinary } from "cloudinary";
import fs from "fs";/*// Import the 'fs' module.
// This module provides an API for interacting with the file system.
// It allows you to perform various file system operations, such as:
// - Reading files: reading the contents of a file
// - Writing files: writing data to a file
// - Deleting files: deleting a file from the file system
// - Creating directories: creating a new directory
// - Deleting directories: deleting a directory and its contents
// - Checking file existence: checking if a file or directory exists
// - Getting file information: getting information about a file or directory, such as its size, modification time, and permissions*/



/*// Configure the Cloudinary library with the necessary credentials.
// This code sets the Cloudinary cloud name, API key, and API secret.*/
cloudinary.config({
    /*// Set the Cloudinary cloud name.
    // The cloud name is a unique identifier for your Cloudinary account.*/
    cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
    /*// Set the Cloudinary API key.
    // The API key is used to authenticate and authorize requests to the Cloudinary API.*/
    api_key: process.env.CLOUDINARY_API_KEY,
    /* // Set the Cloudinary API secret.
    // The API secret is used to sign requests to the Cloudinary API, and to prevent tampering and forgery.*/
    api_secret: process.env.CLOUDINARY_API_SECRET
});

/*// Define an asynchronous function to upload a file to Cloudinary.
// This function takes a local file path as a parameter and returns the result of the upload operation.*/
const uploadOnCloudinary = async (localFilePath) => {
    try {
        /* // Check if the local file path is provided.
        // If no local file path is provided, return null.*/
        if (!localFilePath) return null;
        /*// Upload the file to Cloudinary using the cloudinary.uploader.upload method.
        // The first argument is the local file path.
        // The second argument is an options object that specifies the resource type.*/
        //upload the file on cloudinary
        const uploadResult = await cloudinary.uploader
            .upload(localFilePath, {
                resource_type: "auto"
            })
        //File has been uploaded successfully
        console.log("File is uploaded on cloudinary",uploadResult);
        return uploadResult
    } catch (error) {
        /*  // If an error occurs during the upload operation, remove the locally saved temporary file.*/
       fs.unlinkSync(localFilePath) // remove the locally saved temporary file as the upload operation got failed 
       return null;
    }
}

export {uploadOnCloudinary}
```
Write the below code inside ```multer.middleware.js``` file which is present in ```middleware``` directory
```javascript
import multer from "multer";

/*// Define a constant variable called storage.
// This variable is used to configure the storage settings for the multer library.*/
const storage = multer.diskStorage({
    /* // Define the destination function.
    // This function is called by multer to determine the directory where the uploaded file should be stored. */
    destination: function (req, file, cb) {
      cb(null, "public/temp")
    },
    /* // Define the filename function.
    // This function is called by multer to determine the name of the uploaded file.*/
    filename: function (req, file, cb) {
    //   const uniqueSuffix = Date.now() + '-' + Math.round(Math.random() * 1E9)
    /*// Call the callback function with the original filename of the uploaded file.
      // In this case, the original filename is used as the filename.*/
      cb(null, file.originalname)
    //   cb(null, file.fieldname + '-' + uniqueSuffix)
    }
  })
  
  /*// Define a constant variable called upload.
// This variable is used to configure the multer middleware.*/
  export const upload = multer({ //storage: storage
    /* // Use the storage variable defined earlier.
    // This sets the storage settings for the multer middleware.*/
    storage,//ES6 features
   }
)

// -------------------------------------------------------------------------------------
    --- The below code is for additional work which we don't need in this case but we can use these for other things---

/*// Generate a unique suffix for a filename.
// This suffix is a combination of the current timestamp and a random number.*/
const uniqueSuffix = Date.now() + '-' + Math.round(Math.random() * 1E9)
/*// Breakdown of the unique suffix:
// - Date.now(): Get the current timestamp in milliseconds.
// - Math.random() * 1E9: Generate a random number between 0 and 1 billion.
// - Math.round(): Round the random number to the nearest integer.
// - '-' : Concatenate the timestamp and random number with a hyphen in between.*/


/*// Generate a unique filename for an uploaded file.
// This filename is a combination of the original filename and a unique suffix.*/
cb(null, file.fieldname + '-' + uniqueSuffix)
/*// Breakdown of the filename generation:
// - file.fieldname: Get the original filename of the uploaded file.
// - uniqueSuffix: Generate a unique suffix for the filename.
// - '+' : Concatenate the original filename and unique suffix with a hyphen in between.*/
```
[This is the link of ```Multer``` docs](https://github.com/expressjs/multer?tab=readme-ov-file)

## <strong style="color:Brown">Complete guide for ```router``` and ```controller``` , and also writing our first ```controller``` and ```route``` adding route to the ```app.js``` file </strong>
Write the below code in ```user.controller.js``` file which present in ```controllers``` directory
```javascript
import {asyncHandler} from "../utils/asyncHandler.js"/*// Import the asyncHandler function from the utils directory.
// The asyncHandler function is a higher-order function that wraps an asynchronous function and catches any errors that occur.*/

/*// Define a new function called registerUser that registers a new user.
// The registerUser function is wrapped in the asyncHandler function to catch any errors that occur.*/
const registerUser = asyncHandler( 
    // Define an asynchronous function that takes a request (req) and response (res) object as parameters.
    async(req,res)=> {
        // Set the HTTP status code of the response to 200 (OK).
    res.status(200).json({
        // Send a JSON response with a message indicating that the operation was successful.
        message:"OK"
    })
})

export { registerUser }
```
Write the below code in ```user.routes.js``` file which present in ```routes``` directory
```javascript
import { Router } from "express";
import { registerUser } from "../controllers/user.controller.js"

/*// Create a new instance of the Router class.
// The Router class is used to create a new router that can be used to handle HTTP requests.*/
const router = Router();

/*// Define a new route for handling POST requests to the "/register" endpoint.
// The registerUser function is called when a POST request is made to this endpoint.*/
router.route("/register").post(registerUser)
// router.route("/login").post(login) --> this for demo purpose yet . 
export default router
```
Write the below code in ```app.js``` file  , Mainly from ```//routes import ```
```javascript
import express from 'express';
import cors from "cors"
import cookieParser from 'cookie-parser';

const app = express();

app.use(cors({
    origin:process.env.CORS_ORIGIN,
    credentials: true
}))
app.use(express.json({limit: "16kb"})) 
app.use(express.urlencoded({
    extended: true,
    limit: "16kb" 
}))
app.use(express.static("public"))
app.use(cookieParser(cookieParser()))

//routes import 

import userRouter from "./routes/user.routes.js"

//routes declarations
/*// Mount the userRouter to the "/api/v1/users" endpoint.
// This means that any routes defined in the userRouter will be prefixed with "/api/v1/users".*/
app.use("/api/v1/users", userRouter)
// Example URLs for accessing the user routes:
// http://localhost:8000/api/v1/users/register
// http://localhost:8000/api/v1/users/login
export default  app 
```
#### <strong style="color:red">The ```cycle``` that get followed when the user made requests on ```api/v1/users``` </strong>
stpe1:The ```userRouter``` will execute
step2:Then it will go into ```user.routes.js``` file cause ```userRoute(router)``` is there 
step3:Then it'll go to ```"/register"``` route and at this time ```url``` becomes like ```http://localhost:8000/api/v1/users/register``` and then to make ```post``` it'll go to ```registerUser``` 
step4:and the ```registerUser``` itself a method which written in  ```user.controller.js``` then the registerUser function will execute or run . 
Hence How this process done. 

## <strong style="color:orange">Logic building - Register controller , Write the logic for Register user to the database </strong>
Write the below code inside the ```user.controller.js``` to register the user to the database
```javascript
import {asyncHandler} from "../utils/asyncHandler.js"
import {ApiError} from "../utils/ApiError.js"
import { User } from "../models/user.model.js"
import {uploadOnCloudinary} from "../utils/cloudinary.js"
import {ApiResponse} from "../utils/ApiResponse.js";

const registerUser = asyncHandler( 
    async(req,res)=> {
        /*Algorithm to register the user*/
    //get user details from frontend
    //validation -not empty
    //check if user already exists:username,email
    //check for images , check for avatar
    //upload them to cloudinary , avatar
    //create user object -create entry in db
    //remove password and refresh token field from response
    //check for user creation
    //return response 

    const {fullName, email, password, username} = req.body/*// Extract the request body data using the req.body method.
    // The req.body method returns an object containing the data sent in the request body.
    // This method is commonly used to extract data sent from the client-side, such as form data or JSON payloads.
    // When to use req.body:
    // - Handling form submissions: req.body contains the form data sent by the client.
    // - Handling API requests: req.body contains the data sent by the client in the request body.
    // - Handling JSON data: req.body contains the JSON payload sent by the client.*/
    console.log("This is the all data of req.body",req.body)

    /*// Check if any of the required fields (fullName, email, username, password) are empty.
// The some() method returns true if at least one element in the array passes the test implemented by the provided function.*/
    if(
        // Create an array of the required fields.
        [fullName, email, username, password].some((field)=> field?.trim()==="")// Use the some() method to check if any of the fields are empty.
        // Check if the field is empty after trimming any whitespace.
    ){
      throw new ApiError(400,"All fields are required")
    }

    /*// Find a user in the database who already exists with the provided username or email.
// This is done to prevent duplicate usernames or emails from being registered.
// The User.find() method is used to perform a search on the User collection in the database.
// The resulting query will return a cursor that can be used to iterate over the matching documents.
//The only "User" can talk to database cause it created via "mongoose"*/
    const existedUser = User.findOne({//We use this "findOne" instead of "find" becuase of this reason (To fix this, use findOne instead of find, as findOne returns either:A single user object if a match is found, or null if no match is found.)
        /* // Use the $or operator to search for users who match either the provided username or email.
  // The $or operator is used to perform a logical OR operation between the two conditions.
  // This means that the query will return any user who matches either the provided username or email.*/
        $or: [{ username }, { email }]
    })

    if(existedUser){
        throw new ApiError(400,"User with  email or username already exists")
    }

    /*// Extract the local file path of the uploaded avatar image from the request object.
// The req.files object contains information about the uploaded files, including their paths.
// The ?. syntax is used to safely navigate the object and avoid null pointer exceptions.*/
   const avatarLocalPath =  req.files?.avatar[0]?.path
   /*// Log the contents of the req.files object to the console for debugging purposes.
// This can help verify that the file upload was successful and that the file information is being populated correctly.*/
    console.log("The req.file is :- ",req.files);  

    // const coverImageLocalPath = req.files?.coverImage[0]?.path; //This will casue the error if the "coverImage" which is optional , not get uploaded is the code below instead of using this
     let coverImageLocalPath;
     /*// Check if the request contains a cover image file.
// This checks if the req.files object exists, if it's an array, and if the array has at least one element.*/
    if(req.files && Array.isArray(req.files.coverImage) && req.files.coverImage.length > 0){
      // If a cover image file is present, extract the local file path from the first element of the array.
        coverImageLocalPath = req.files.coverImage[0].path;
    }

    console.log("The coverImage localPath is  is :- ",coverImageLocalPath);
    if(!avatarLocalPath ){
        throw new ApiError(400,"Avatar file is required")
    }

    const avatar = await uploadOnCloudinary(avatarLocalPath)
    const coverImage = await uploadOnCloudinary(coverImageLocalPath)
    if(!avatar){
        throw new ApiError(400,"Failed to upload avatar to cloudinary")
    }

    /*// Create a new user document in the database using the provided information.
// The User.create() method is used to create a new user document.*/
   const user = await  User.create({
          // Set the fullName field of the user document to the provided fullName.
        fullName,
         // Set the avatar field of the user document to the URL of the uploaded avatar image.
        avatar:avatar.url,
        // Set the coverImage field of the user document to the URL of the uploaded cover image, or an empty string if no cover image was uploaded.
        coverImage:coverImage?.url || "",
        // Set the email field of the user document to the provided email.
        email,
        // Set the password field of the user document to the provided password.
        password,
         // Set the username field of the user document to the provided username, converted to lowercase.
        username:username.toLowerCase()
    })    
    /*// Retrieve the newly created user from the database using their unique identifier (_id).*/
    const createdUser = await User.findById(user._id).select(
        /*  // Use the select method to exclude sensitive fields from the result.
    // The "-password" indicates that the password field should be omitted from the returned user document.
    // The "-refreshToken" indicates that the refreshToken field should also be omitted.*/
        "-password -refreshToken"
    )

    if(!createdUser){
        throw new ApiError(500, "Something went wrong while registering the user")
    }

    /*// Return a successful response to the client with a 201 status code.
// The 201 status code indicates that a new resource has been created.*/
    return res.status(201).json(/*// Send a JSON response to the client with the created user data.
        // The json() method is used to send a JSON response to the client.*/
        /*// Create a new ApiResponse object to hold the response data.*/
        new ApiResponse(200,createdUser , "User registered successfully")/* // Set the data of the response to the created user object.*/
    )
})
export { registerUser }
```
Write the below code inside ```user.routes.js``` this include a middleware also called ```upload```  for ```avatar``` and ```coverImage```

```javascript
import { Router } from "express";
import { registerUser } from "../controllers/user.controller.js"
import {upload} from "../middlewares/multer.middleware.js"

const router = Router();

router.route("/register").post(
    /*// Use the upload.fields() middleware to handle file uploads.
  // This middleware allows us to specify which fields in the request body can contain files.*/
    upload.fields([
        // Define a field named "avatar" that can contain a maximum of 1 file.
      {
        name:"avatar",
        maxCount: 1
      },
      // Define a field named "coverImage" that can contain a maximum of 1 file.
      {
        name:"coverImage",
        maxCount: 1
      }
    ]),
    // Call the registerUser function to handle the registration logic.
    registerUser
)
export default router
```
#### <strong style="color:red">Some info. about ```Postman```</strong>
1.While sending data we often use ```json``` format via ```raw```
2.But we cannot send files like ```images``` etc. 
3.So that's why we use ```form-data``` to perform the task instead of using ```json``` in this case.

## <strong style="color:gold">This is the updated ```.env``` file , cause of some problem while pushing data to the database , we update this file </strong>
Write this code in ```.env``` file 
```javascript
PORT=8000
MONGODB_URI=mongodb+srv://skdprogrammer143445:MasteryBackend143@cluster0.apu9i.mongodb.net
# MasteryBackend143
CORS_ORIGIN=* #this will allow to get data from backend from any of the request , which is not good , but for now it is fine 
ACCESS_TOKEN_SECRET=7b1fd5e79f3760f67497d6540e1ff04260c00d6fb941068806534e8f17bb91bb
ACCESS_TOKEN_EXPIRY=1d
REFRESH_TOKEN_SECRET=64312c7631d36392ea0a6bc9da1381654f900b6db17612066955c9057f981472
REFRESH_TOKEN_EXPIRY=10d
CLOUDINARY_CLOUD_NAME=drrqddm39
CLOUDINARY_API_KEY=641531255918558
CLOUDINARY_API_SECRET=lEE4h4GwaTvrYOpl8P-ca4dcja4

```
#### <strong style="color:Red">Things to be noted about Database(Mongodb atlas cloud database)</strong>
step1: cause we've already set the name of database in our ```constants.js``` file as like this:
```javascript
export const DB_NAME = "videotube"
```
step2:and we use our ```User``` which made in ```models``` directory as ```user.model.js``` by using ```mongoose``` so only this ```User``` can talk to the database 
step3:In database , when you click on ```Browse Collection ``` then you can see your data under this:👇👇
```javascript
videotube -----> users , //inside users you're data will available , cause we've already named our database as "videotube" inside constants.js file 
```

## <strong style="color:gold"> Access Token and Refresh Token use , ```Middleware(verifyJWT)``` , cookies in Backend , and controllers making like ```loginUser``` to login the user , ```logoutUser``` to logout the user and also making a method called ```generateAccessAndRefreshTokens``` which take only ```userId``` to do it's work </strong>
Write the below code in ```user.controller.js``` file for adding the ```loginUser``` and ```logoutUser``` controllers to your application
```javascript
import {asyncHandler} from "../utils/asyncHandler.js"
import {ApiError} from "../utils/ApiError.js"
import { User } from "../models/user.model.js"
import {uploadOnCloudinary} from "../utils/cloudinary.js"
import {ApiResponse} from "../utils/ApiResponse.js";

const generateAccessAndRefreshTokens = async( userId ) => {
  try {
    /*// Use the User model to find a user in the database by their ID.
// This uses the findById() method to retrieve the user document from the database.*/
     const user = await User.findById(userId)
     /*// Generate an access token for the user.
// This uses the generateAccessToken() method of the user object to create a new access token.
 user is an object because it's an instance of a class or model that has properties and methods, and we're using those properties and methods to perform actions, such as generating a refresh token.*/
     const accessToken = user.generateAccessToken()
     /*// Generate a refresh token for the user.
// This method generates a new refresh token that can be used to obtain a new access token when the current access token expires.
// The refresh token is a secure token that is stored on the client-side and is used to authenticate the user and obtain a new access token.*/
     const refreshToken = user.generateRefreshToken()

     /*// Update the user's refresh token in the database.
// Assign the newly generated refresh token to the user's refreshToken property.*/
     user.refreshToken = refreshToken
     /*// Save the updated user document to the database.
// The validateBeforeSave option is set to false to bypass validation and ensure the document is saved even if it doesn't meet the validation criteria.*/
     await user.save({validateBeforeSave :false})

     return {accessToken, refreshToken}
  } catch (error) {
    throw new ApiError(500, "Something went wrong while generating refresh ad access token ")
  }

}

const registerUser = asyncHandler( 
    async(req,res)=> {
        /*Algorithm to register the user*/
    //get user details from frontend
    //validation -not empty
    //check if user already exists:username,email
    //check for images , check for avatar
    //upload them to cloudinary , avatar
    //create user object -create entry in db
    //remove password and refresh token field from response
    //check for user creation
    //return response 

    const {fullName, email, password, username} = req.body
    console.log("This is the all data of req.body",req.body)
    if(
        [fullName, email,  password, username,].some((field)=> field?.trim()==="")
    ){
      throw new ApiError(400,"All fields are required")
    }

    const existedUser = await User.findOne({
        $or: [{ username }, { email }]
    })

    if(existedUser){
        throw new ApiError(400,"User with  email or username already exists")
    }

   const avatarLocalPath = await req.files?.avatar[0]?.path
    console.log("The req.file data is :- ",req.files);  

    // const coverImageLocalPath = req.files?.coverImage[0]?.path; //This will casue the error if the "coverImage" which is optional , not get uploaded is the code below instead of using this 
    let coverImageLocalPath;
    if(req.files && Array.isArray(req.files.coverImage) && req.files.coverImage.length > 0){
        coverImageLocalPath = req.files.coverImage[0].path;
    }

    console.log("The coverImage localPath is  is :- ",coverImageLocalPath);
    if(!avatarLocalPath ){
        throw new ApiError(400,"Avatar file is required")
    }

    const avatar = await uploadOnCloudinary(avatarLocalPath)
    const coverImage = await uploadOnCloudinary(coverImageLocalPath)

    if(!avatar){
        throw new ApiError(400,"Failed to upload avatar to cloudinary")
    }

   const user = await  User.create({
        fullName,
        avatar:avatar.url,
        coverImage:coverImage?.url || "",
        email,
        password,
        username:username.toLowerCase()
    })    
    const createdUser = await User.findById(user._id).select(
        "-password -refreshToken"
    )

    if(!createdUser){
        throw new ApiError(500, "Something went wrong while registering the user")
    }

    return res.status(201).json(
        new ApiResponse(200,createdUser , "User registered successfully")
    )
})

const loginUser = asyncHandler(async (req,res)=>{
    //Algorithm to login the user
    //req body -> data
    //username or email
    //fint the user
    //password check
    // send access and refresh token to user
    //send cookie

    const {email, username, password} = req.body
    console.log("Required information send by user for login :- ", req.body);

    if(!(username || email)){
        throw new ApiError(400,"Username or email is required")
    }
   
    /*// Use the User model to find a user in the database who matches either the provided username or email.*/
    const user = await User.findOne({
        /* // Use the $or operator to search for users who match either the provided username or email.*/
        $or: [{ username }, { email }]/* // Search for users who have a username that matches the provided username.
        // Search for users who have an email that matches the provided email.*/
    })

    if(!user){
        throw new ApiError(404, "User does not exist")
    }

    /*// Check if the provided password is valid for the user.
// This uses the isPasswordCorrect() method of the user object to verify the password.*/
   const isPasswordValid =  await user.isPasswordCorrect(password)

    if(!isPasswordValid){
        throw new ApiError(401,"Invalid password")
    }

    const {accessToken,refreshToken} =  await generateAccessAndRefreshTokens(user._id)
    
    /*// Find the logged-in user in the database by their ID.
// This uses the findById() method to retrieve the user document from the database.*/
    const loggedInUser = await User.findById(user._id).select("-password -refreshToken")
    /*// Select only the desired fields from the user document.
// This uses the select() method to exclude the password and refreshToken fields from the query result. */

/*// Define options for setting HTTP cookies.
// These options specify the behavior of the cookies, including their security and accessibility.*/
 const options = {
    /* // Set the httpOnly flag to true, which means the cookie can only be accessed by the web server, not by client-side JavaScript.*/
    httpOnly : true,
    /*// Set the secure flag to true, which means the cookie can only be transmitted over a secure protocol (HTTPS).*/
    secure:true
 }
 console.log("The option for cookies is :- ", options);

 return res
 .status(200)
 /*// Set HTTP cookies for the access token and refresh token.
// These cookies will be sent with every request to the server and can be used to authenticate the user.*/
 .cookie("accessToken", accessToken,options)/* // Set the access token cookie with the provided token value and options.
 // The access token is used to authenticate the user for a short period of time.*/
 .cookie("refreshToken", refreshToken,options)/*// Set the refresh token cookie with the provided token value and options.
 // The refresh token is used to obtain a new access token when the current one expires.*/
 .json(
    new ApiResponse(
        200,
        {
            /*// Create an object containing the logged-in user, access token, and refresh token.
// This object is used to store user information and authentication tokens.*/
            user:loggedInUser, // This is the logged-in user object
            accessToken,// This is the access token used for authentication
            refreshToken // This is the refresh token used to obtain a new access token
        },
        "User logged In Successfully"
    )
 )
})

/*// Define a logout function that handles the logout process for a user.
// This function is an asynchronous handler that takes in the request and response objects.*/
const logoutUser = asyncHandler(async (req,res)=>{/* // This function will perform the necessary operations to log out the user,
    // such as removing the refresh token and updating the user document.*/
    
    /*// Update the user document in the database to remove the refresh token.
// This is done by setting the `refreshToken` field to `undefined`.
// The `new` option is set to `true` to return the updated document.*/
  await User.findByIdAndUpdate(
    req.user._id, // Update the user document with the specified ID
    {
        $set:{// Set the `refreshToken` field to `undefined`
            refreshToken:undefined
        }
    },{
        new:true // Return the updated document
    }
  )

  const options = {
    httpOnly:true,
    secure:true,
  }

  return res
  .status(200)
  .clearCookie("accessToken",options)
  .clearCookie("refreshToken",options)
  .json(new ApiResponse(200,{}, "User logged out successfully"))
});

export { registerUser,
         loginUser,
         logoutUser
 }

```
Write this below code in ```auth.middleware.js``` file which present inside ```middlwares``` directory  to make the middleware called ```verifyJWT``` THAT will verify the user 
```javascript 
import { ApiError } from "../utils/ApiError.js";
import { asyncHandler } from "../utils/asyncHandler.js";
import jwt from "jsonwebtoken";
import { User } from "../models/user.model.js";

/*// Export a middleware function named `verifyJWT` that verifies a JSON Web Token (JWT) in the request.
// This middleware function is used to authenticate the user and authorize access to protected resources.
// It checks the JWT for validity, expiration, and signature, and extracts the user's information from the token.
// This middleware function is asynchronous, meaning it returns a promise that resolves when the verification is complete.
  // The `asyncHandler` function wraps this middleware function in a try-catch block to handle any errors that occur during verification.*/
export const verifyJWT = asyncHandler(async(req,_,next) => {/* // The `req`, `res`, and `next` arguments are passed to the middleware function:
    // - `req`: The request object, which contains information about the incoming request.
    // - `res`: The response object, which is used to send a response back to the client.
    // - `next`: The next function in the middleware chain, which is called when the verification is complete.*/

try {
        /*// Retrieve the JWT token from the request, either from the cookies or the Authorization header.
    // If the token is present in the cookies, use that; otherwise, try to retrieve it from the Authorization header.*/
        const token = req.cookies?.accessToken || req.header("Authorization")?.replace("Bearer","");
    
        if(!token){
            throw new ApiError(401,"Unauthorized request");
        }
    
        /*// Verify the JWT token using the secret key and extract the decoded payload.
    // The decoded payload contains the user's information, such as their ID and email. because we've sent the id ,email,fullName etc. while making it in "user.model.js" file under "generateAccessToken" method */
        const decodedToken = jwt.verify(token,process.env.ACCESS_TOKEN_SECRET)
    
        /*// Retrieve the user document from the database using the user ID extracted from the decoded JWT token.
    // The user document is retrieved using the `findById()` method, which returns a promise that resolves to the user document.
    // The `select()` method is used to exclude the `password` and `refreshToken` fields from the retrieved document.*/
        const user = await User.findById(decodedToken?._id).select("-password -refreshToken");
    
        if(!user){
            //TODO:discuss about frontend 
            throw new ApiError(401,"Invalid Access Token");
        }
    
        /*// Attach the retrieved user document to the request object.
    // This allows the user's information to be accessed throughout the request-response cycle.*/
        req.user = user;
        next();
} catch (error) {
    throw new ApiError(401, error?.message || "Invalid Access Token")
}
})

/*The verifyJWT method:

Verifies a JSON Web Token (JWT) sent in the request
Authenticates the user and extracts their information
Attaches the user's information to the request object (req.user)
Ensures only authorized users can access protected routes or resources
It's used to:

Protect routes or resources from unauthorized access
Authenticate users and extract their information
Make the user's information available for use in the application

*/
```
Write the below code inside ```user.routes.js``` file which present inside ```routes``` directory to add the ```loginUser``` and ```logoutUser``` routes
```javascript
import { Router } from "express";
import { loginUser,registerUser,logoutUser } from "../controllers/user.controller.js"
import {upload} from "../middlewares/multer.middleware.js"
import { verifyJWT } from "../middlewares/auth.middleware.js";

const router = Router();

router.route("/register").post(
    upload.fields([
      {
        name:"avatar",
        maxCount: 1
      },
      {
        name:"coverImage",
        maxCount: 1
      }
    ]),
    registerUser
)

router.route("/login").post(loginUser)

//secured routes
router.route("/logout").post(verifyJWT, logoutUser)

export default router
```

## Here we add ```refreshAccessToken``` controller so that ,if the access token get expired from the user side , then the user have to hit an endpoint which is ```refreshedaccesstoken``` to pass the refresh token to  get the new access token 
Write the below code inside ```user.controller.js``` file which present in ```controllers``` file 
```javascript
import {asyncHandler} from "../utils/asyncHandler.js"
import {ApiError} from "../utils/ApiError.js"
import { User } from "../models/user.model.js"
import {uploadOnCloudinary} from "../utils/cloudinary.js"
import {ApiResponse} from "../utils/ApiResponse.js";
import jwt from "jsonwebtoken"

const generateAccessAndRefreshTokens = async( userId ) => {
  try {
     const user = await User.findById(userId)
     const accessToken = user.generateAccessToken()
     const refreshToken = user.generateRefreshToken()
     user.refreshToken = refreshToken
     await user.save({validateBeforeSave :false})

     return {accessToken, refreshToken}
  } catch (error) {
    throw new ApiError(500, "Something went wrong while generating refresh ad access token ")
  }

}

const registerUser = asyncHandler( 
    async(req,res)=> {
        /*Algorithm to register the user*/
    //get user details from frontend
    //validation -not empty
    //check if user already exists:username,email
    //check for images , check for avatar
    //upload them to cloudinary , avatar
    //create user object -create entry in db
    //remove password and refresh token field from response
    //check for user creation
    //return response 

    const {fullName, email, password, username} = req.body
    console.log("This is the all data of req.body",req.body)
    if(
        [fullName, email,  password, username,].some((field)=> field?.trim()==="")
    ){
      throw new ApiError(400,"All fields are required")
    }

    const existedUser = await User.findOne({
        $or: [{ username }, { email }]
    })

    if(existedUser){
        throw new ApiError(400,"User with  email or username already exists")
    }

   const avatarLocalPath = await req.files?.avatar[0]?.path
    console.log("The req.file data is :- ",req.files);  

    // const coverImageLocalPath = req.files?.coverImage[0]?.path; //This will casue the error if the "coverImage" which is optional , not get uploaded is the code below instead of using this 
    let coverImageLocalPath;
    if(req.files && Array.isArray(req.files.coverImage) && req.files.coverImage.length > 0){
        coverImageLocalPath = req.files.coverImage[0].path;
    }

    console.log("The coverImage localPath is  is :- ",coverImageLocalPath);
    if(!avatarLocalPath ){
        throw new ApiError(400,"Avatar file is required")
    }

    const avatar = await uploadOnCloudinary(avatarLocalPath)
    const coverImage = await uploadOnCloudinary(coverImageLocalPath)

    if(!avatar){
        throw new ApiError(400,"Failed to upload avatar to cloudinary")
    }

   const user = await  User.create({
        fullName,
        avatar:avatar.url,
        coverImage:coverImage?.url || "",
        email,
        password,
        username:username.toLowerCase()
    })    
    const createdUser = await User.findById(user._id).select(
        "-password -refreshToken"
    )

    if(!createdUser){
        throw new ApiError(500, "Something went wrong while registering the user")
    }

    return res.status(201).json(
        new ApiResponse(200,createdUser , "User registered successfully")
    )
})

const loginUser = asyncHandler(async (req,res)=>{
    //Algorithm to login the user
    //req body -> data
    //username or email
    //fint the user
    //password check
    // send access and refresh token to user
    //send cookie

    const {email, username, password} = req.body
    console.log("Required information send by user for login :- ", req.body);

    if(!(username || email)){
        throw new ApiError(400,"Username or email is required")
    }
   
    const user = await User.findOne({
        $or: [{ username }, { email }]
    })

    if(!user){
        throw new ApiError(404, "User does not exist")
    }

   const isPasswordValid =  await user.isPasswordCorrect(password)

    if(!isPasswordValid){
        throw new ApiError(401,"Invalid password")
    }

    const {accessToken,refreshToken} =  await generateAccessAndRefreshTokens(user._id)
    const loggedInUser = await User.findById(user._id).select("-password -refreshToken")

 const options = {
    httpOnly : true,
    secure:true
 }
 console.log("The option for cookies is :- ", options);

 return res
 .status(200)
 .cookie("accessToken", accessToken,options)
 
 .cookie("refreshToken", refreshToken,options)
 
 .json(
    new ApiResponse(
        200,
        {
            user:loggedInUser, 
            accessToken,
            refreshToken 
        },
        "User logged In Successfully"
    )
 )
})
const logoutUser = asyncHandler(async (req,res)=>{

  await User.findByIdAndUpdate(
    req.user._id, 
    {
        $set:{
            refreshToken:undefined
        }
    },{
        new:true 
    }
  )

  const options = {
    httpOnly:true,
    secure:true,
  }

  return res
  .status(200)
  .clearCookie("accessToken",options)
  .clearCookie("refreshToken",options)
  .json(new ApiResponse(200,{}, "User logged out successfully"))
});

/*// Define a function to refresh the access token for a user.
// This function is an asynchronous handler that takes in the request and response objects.*/
const refreshAccessToken = asyncHandler(async (req,res)=>{/*// This function will perform the necessary operations to refresh the access token,
    // such as verifying the refresh token, generating a new access token, and updating the user document.*/
    const incomingRefreshToken = req.cookies.refreshToken || req.body.refreshToken/*// Extract the refresh token from the request.
    // Check if the refresh token is present in the cookies or the request body.*/

    if(!incomingRefreshToken){
        throw new ApiError(401,"Refresh token is required")
    }

    try {
        /*// Verify the incoming refresh token using the secret key.
    // Decode the token to extract the user's information.*/
        const decodedToken = jwt.verify(
            incomingRefreshToken,// The refresh token to verify
            process.env.REFRESH_TOKEN_SECRET // The secret key to use for verification
        )
    
        const user = await User.findById(decodedToken?._id)/*// Retrieve the user document from the database using the user ID extracted from the decoded refresh token.
        // The user document is retrieved using the `findById()` method, which returns a promise that resolves to the user document.*/
    
        if(!user){
            throw new ApiError(401,"Invalid refresh token")
        }
    
        /*// Check if the incoming refresh token matches the refresh token stored in the user document.
    // If the tokens do not match, throw an error indicating that the refresh token has expired or been used.*/
        if(incomingRefreshToken !== user?.refreshToken){
            throw new ApiError(401,"Refresh token has expired or used")
        }
    
        /*// Define options for setting cookies.
// These options specify that the cookie should be:
// - HttpOnly: accessible only through HTTP requests, not through JavaScript
// - Secure: transmitted only over a secure protocol (HTTPS)*/
        const options = {
            httpOnly : true, // Set the cookie to be accessible only through HTTP requests
            secure:true  // Set the cookie to be transmitted only over a secure protocol (HTTPS)
        }
    
        /*// Generate a new access token and refresh token for the user.
// The `generateAccessAndRefreshTokens` function returns an object containing the new access token and refresh token.*/
        const {accessToken,newRefreshToken} = await generateAccessAndRefreshTokens(user._id)
    
        /*// Return a response with the new access token and refresh token.
// Set the cookies for the access token and refresh token.
// Return an ApiResponse object with a success message.*/
        return res
       .status(200)
       .cookie("accessToken", accessToken,options)
       .cookie("refreshToken", newRefreshToken,options)
       .json(
        new ApiResponse(
            200,
            {accessToken,refreshToken:newRefreshToken},
            "Access token refreshed successfully"
        )
       )
    } catch (error) {
         throw new ApiError(401,error?.message || "Invalid refresh Token")
    }

});

export { registerUser,
         loginUser,
         logoutUser,
         refreshAccessToken
 }

```
Write the code below inside ```user.routes.js``` for making ```refreshAccessToken``` endpoint
```javascript
import { Router } from "express";
import { loginUser,registerUser,logoutUser,refreshAccessToken } from "../controllers/user.controller.js"
import {upload} from "../middlewares/multer.middleware.js"
import { verifyJWT } from "../middlewares/auth.middleware.js";

const router = Router();

router.route("/register").post(
    upload.fields([
      {
        name:"avatar",
        maxCount: 1
      },
      {
        name:"coverImage",
        maxCount: 1
      }
    ]),
    registerUser
)

router.route("/login").post(loginUser)

//secured routes
router.route("/logout").post(verifyJWT, logoutUser)
router.route("/refreshedaccesstoken").post(refreshAccessToken)

export default router
```

### Here we've made ```model``` for subscription named as ```subscription.model.js``` 
Write the code below inside ```subscription.model.js```
```javascript
import mongoose,{Schema} from "mongoose";

const subscriptionSchema = new Schema({
   subscriber:{
    type:Schema.Types.ObjectId, //one who is subscribing
    ref:"User",
   },
   channel:{
    type:Schema.Types.ObjectId,//one to whom 'subscriber' is subscribing
    ref:"User",
   }
},
{timestamps: true})

export const Subscription = mongoose.model("Subscription", subscriptionSchema);
```

## Writing update controller for user like (```changeCurrentPassword```,```getCurrentUser```,```updateAccountDetails```,```updateUserCoverImage```,```updateUserAvatar```)
Write the code below inside ```user.controller.js``` file 
```javascript
import {asyncHandler} from "../utils/asyncHandler.js"
import {ApiError} from "../utils/ApiError.js"
import { User } from "../models/user.model.js"
import {uploadOnCloudinary} from "../utils/cloudinary.js"
import {ApiResponse} from "../utils/ApiResponse.js";
import jwt from "jsonwebtoken"

/*// Define a function to generate new access and refresh tokens for a user.
// This function takes a user ID as an argument and returns an object containing the new tokens.
*/
const generateAccessAndRefreshTokens = async( userId ) => {/*// This function will generate new access and refresh tokens using a secure token generation algorithm.
  // The tokens will be unique and time-limited to prevent unauthorized access.*/
  try {
     const user = await User.findById(userId) // Find the user by ID
     const accessToken = user.generateAccessToken() // Generate a new access token
     const refreshToken = user.generateRefreshToken() // Generate a new refresh token
     user.refreshToken = refreshToken // Update the user document with the new refresh token
     await user.save({validateBeforeSave :false}) // Save the updated user document without validation

     return {accessToken, refreshToken} // Return the new access and refresh tokens
  } catch (error) {
    throw new ApiError(500, "Something went wrong while generating refresh ad access token ")
  }

}

/*// Define a function to handle the registration of a new user.
// This function is an asynchronous handler that takes in the request and response objects.
*/
const registerUser = asyncHandler(
    async(req,res)=> {/* // This function will perform the necessary operations to register a new user.
    // It will handle the user's registration data, validate the input, and return a response to the client.*/

        /*Algorithm to register the user*/
    //get user details from frontend
    //validation -not empty
    //check if user already exists:username,email
    //check for images , check for avatar
    //upload them to cloudinary , avatar
    //create user object -create entry in db
    //remove password and refresh token field from response
    //check for user creation
    //return response 

    const {fullName, email, password, username} = req.body

    console.log("This is the all data of req.body",req.body)

    /*The code checks if any of the required fields (fullName, email, password, username) are empty or consist only of whitespace. If any field is empty, it throws an error indicating that all fields are required.*/
    if(
        [fullName, email,  password, username,].some((field)=> field?.trim()==="")
    ){
      throw new ApiError(400,"All fields are required")
    }

   /*// The  code is using Mongoose to find a user in the database where either the `username` or
   // the `email` matches the provided values. It is using the operator to specify that the query
   // should match documents where either the `username` or the `email` field matches the provided
   // values. The result is stored in the `existedUser` variable.*/
    const existedUser = await User.findOne({
        $or: [{ username }, { email }]
    })

    if(existedUser){
        throw new ApiError(400,"User with  email or username already exists")
    }

   /*// Get the local file path of the uploaded avatar image.
// This line extracts the file path from the request files object.
// The `req.files` object is populated with the uploaded files by a middleware such as Multer.
// The `avatar` field is expected to contain an array of files, and we access the first file in the array using `[0]`.
// The `path` property of the file object contains the local file path where the file was saved.
// We use optional chaining (`?.`) to handle cases where the file is not present, to avoid null pointer exceptions.*/
   const avatarLocalPath = await req.files?.avatar[0]?.path
   
    console.log("The req.file data is :- ",req.files);  

    // const coverImageLocalPath = req.files?.coverImage[0]?.path; //This will casue the error if the "coverImage" which is optional , not get uploaded is the code below instead of using this 
    let coverImageLocalPath;/*// Declare a variable to store the local file path of the cover image.*/
    if(req.files && Array.isArray(req.files.coverImage) && req.files.coverImage.length > 0){/*// Check if the `req.files` object exists, contains a property `coverImage`, 
// and that the property is an array with at least one item.*/
  /* // If the conditions are true, assign the path of the first image in the `coverImage` array to `coverImageLocalPath`.*/
        coverImageLocalPath = req.files.coverImage[0].path;
    }

    console.log("The coverImage localPath is  is :- ",coverImageLocalPath);
    if(!avatarLocalPath ){
        throw new ApiError(400,"Avatar file is required")
    }

    const avatar = await uploadOnCloudinary(avatarLocalPath)
    const coverImage = await uploadOnCloudinary(coverImageLocalPath)

    if(!avatar){
        throw new ApiError(400,"Failed to upload avatar to cloudinary")
    }

  /*// Create a new user in the database using the `User.create` method.
// Passes the following fields:
// 1. `fullName` - The user's full name.
// 2. `avatar` - The URL of the user's avatar, extracted from the `avatar.url` property.
// 3. `coverImage` - The URL of the user's cover image, or an empty string if `coverImage` is undefined or null.
// 4. `email` - The user's email address.
// 5. `password` - The user's hashed password (assumed to be hashed before calling this function).
// 6. `username` - The user's username, converted to lowercase for consistency.*/
   const user = await  User.create({
        fullName,
        avatar:avatar.url,
        coverImage:coverImage?.url || "",
        email,
        password,
        username:username.toLowerCase()
    })    

    /*// Retrieve the created user's details from the database using their unique ID (`user._id`).
// The `select` method is used to exclude sensitive fields like `password` and `refreshToken` 
// from the result to ensure these values are not exposed.*/
    const createdUser = await User.findById(user._id).select(
        "-password -refreshToken"
    )

    if(!createdUser){
        throw new ApiError(500, "Something went wrong while registering the user")
    }

  /*// Send a response to the client with an HTTP status code of 201, indicating successful resource creation.
// The response includes a JSON object created using the `ApiResponse` utility, which contains:
// 1. A status code of 200, signifying a successful operation within the application context.
// 2. `createdUser` - The newly registered user details (excluding sensitive information).
// 3. A success message, "User registered successfully," to inform the client of the operation's outcome.*/
    return res.status(201).json(
        new ApiResponse(200,createdUser , "User registered successfully")
    )
})

/*// Define a function to handle the login user request.
// This function is an asynchronous handler that takes in the request and response objects.*/
const loginUser = asyncHandler(async (req,res)=>{/*// This function will perform the necessary operations to authenticate the user.
  // It will handle the login credentials, verify the user's identity, and return a response to the client.*/

    //Algorithm to login the user
    //req body -> data
    //username or email
    //fint the user
    //password check
    // send access and refresh token to user
    //send cookie

  /*// Extract the email, username, and password from the request body.
// These values are expected to be sent by the client as part of the login request.*/
    const {email, username, password} = req.body
    console.log("Required information send by user for login :- ", req.body);

   /*// Check if the username or email is missing from the request body.
// If either is missing, throw a 400 error indicating that a username or email is required.*/
    if(!(username || email)){
        throw new ApiError(400,"Username or email is required")
    }
   
    const user = await User.findOne({/*// Find a user in the database that matches either the provided username or email.
// Use the `$or` operator to search for a user with either the specified username or email.*/
        $or: [{ username }, { email }] // Search for a user with either the specified username or email
    })

    if(!user){
        throw new ApiError(404, "User does not exist")
    }

     /*// Check if the provided password is valid for the user.
// Use the `isPasswordCorrect` method of the user object to verify the password.*/
   const isPasswordValid =  await user.isPasswordCorrect(password)

    if(!isPasswordValid){
        throw new ApiError(401,"Invalid password")
    }

  /*// Generate new access and refresh tokens for the user.
// Use the `generateAccessAndRefreshTokens` function to create the tokens.*/
    const {accessToken,refreshToken} =  await generateAccessAndRefreshTokens(user._id)

  /*// Retrieve the user document from the database, excluding sensitive fields.
// Use the `findById` method to find the user by ID, and `select` to exclude the password and refresh token.*/
    const loggedInUser = await User.findById(user._id).select("-password -refreshToken")

 /*// Define options for setting cookies.
// These options enhance the security of the cookies.*/
 const options = {
    httpOnly : true, // Set the cookie to be accessible only through HTTP requests
    secure:true // Set the cookie to be transmitted only over a secure protocol (HTTPS)
 }

 console.log("The option for cookies is :- ", options);

/*// Return a response to the client indicating that the user has been logged in successfully.
// Set the access token and refresh token cookies, and return a JSON response with the user data.*/
 return res
 .status(200) // Set the response status code to 200 (OK)
 .cookie("accessToken", accessToken,options) // Set the access token cookie
 .cookie("refreshToken", refreshToken,options)  // Set the refresh token cookie
 
 .json(
    new ApiResponse(
        200,
        {
            user:loggedInUser, // Include the logged-in user data in the response
            accessToken, // Include the access token in the response
            refreshToken  // Include the refresh token in the response
        },
        "User logged In Successfully"
    )
 )
})
/*// Define a function to handle the logout user request.
// This function is an asynchronous handler that takes in the request and response objects.*/
const logoutUser = asyncHandler(async (req,res)=>{/* // This function will perform the necessary operations to log out the user.
  // It will handle the removal of authentication tokens and return a response to the client.*/

/*// Update the user document in the database to remove the refresh token.
// Use the `findByIdAndUpdate` method to update the user document.*/
  await User.findByIdAndUpdate(
    req.user._id, // ID of the user document to update
    {
        $set:{// Update operator: set the specified field to the new value
            refreshToken:undefined // Remove the refresh token by setting it to undefined
        }
    },{
        new:true // Options: return the updated document instead of the original document
    }
  )

 /*// Define options for setting cookies.
// These options enhance the security of the cookies.*/
  const options = {
    httpOnly:true, // Set the cookie to be accessible only through HTTP requests
    secure:true, // Set the cookie to be transmitted only over a secure protocol (HTTPS)
  }

/*// Return a response to the client indicating that the user has been logged out.
// Clear the access token and refresh token cookies and return a JSON response.*/
  return res
  .status(200) // Set the response status code to 200 (OK)
  .clearCookie("accessToken",options) // Clear the access token cookie
  .clearCookie("refreshToken",options)  // Clear the refresh token cookie
  .json(new ApiResponse(200,{}, "User logged out successfully"))/* // Status code: 200 OK
  // Response data: empty object*/
});

/*// Define a function to handle the refresh access token request.
// This function is an asynchronous handler that takes in the request and response objects.*/
const refreshAccessToken = asyncHandler(async (req,res)=>{/* // This function will perform the necessary operations to refresh the access token.
  // It will handle the refresh token, verify its validity, and return a new access token.*/

  /*// Retrieve the incoming refresh token from the request.
// Check both the request cookies and body for the refresh token.*/
    const incomingRefreshToken = req.cookies.refreshToken || req.body.refreshToken

    if(!incomingRefreshToken){
        throw new ApiError(401,"Refresh token is required")
    }

    try {
      /*// Verify the incoming refresh token using a JSON Web Token (JWT) library.
// Use the `jwt.verify` function to decode and verify the token using the secret key.*/
        const decodedToken = jwt.verify(
            incomingRefreshToken, // Refresh token to verify
            process.env.REFRESH_TOKEN_SECRET  // Secret key to verify the token
        )
    
     /*// Retrieve the user document from the database using the decoded token's user ID.
// Use the `User.findById` method to find the user document by ID.*/
        const user = await User.findById(decodedToken?._id)// User ID from the decoded token
    
        if(!user){
            throw new ApiError(401,"Invalid refresh token")
        }
    
    /*// Verify that the incoming refresh token matches the user's stored refresh token.
// If the tokens do not match, throw a 401 error indicating that the refresh token has expired or been used.*/
        if(incomingRefreshToken !== user?.refreshToken){
            throw new ApiError(401,"Refresh token has expired or used")
        }

 /* // Define options for setting cookies.
 // These options enhance the security of the cookies.
 */
        const options = {
            httpOnly : true,// Set the cookie to be accessible only through HTTP requests
            secure:true // Set the cookie to be transmitted only over a secure protocol (HTTPS)
        }
    
    /*// Generate new access and refresh tokens for the user.
// Use the `generateAccessAndRefreshTokens` function to create the tokens.*/
        const {accessToken,newRefreshToken} = await generateAccessAndRefreshTokens(user._id)// User ID to generate tokens for
    
    /*// Return a response to the client with a status code of 200 (OK).
// Include the new access token and refresh token in the response cookies and body.*/
        return res
       .status(200)
       .cookie("accessToken", accessToken,options)// Set the access token cookie with the new access token and options.
       .cookie("refreshToken", newRefreshToken,options) // Set the refresh token cookie with the new refresh token and options.
       .json(// Return a JSON response body with the new access token and refresh token.
        new ApiResponse(
            200,
            {accessToken,refreshToken:newRefreshToken}/*// New access token
            // New refresh token*/,
            "Access token refreshed successfully"
        )
       )
    } catch (error) {
         throw new ApiError(401,error?.message || "Invalid refresh Token")
    }

});

/*// Define a function to handle the change current password request.
// This function is an asynchronous handler that takes in the request and response objects.*/
const changeCurrentPassword = asyncHandler(async(req,res)=>{/*// This function will perform the necessary operations to change the user's current password.
    // It will verify the old password, hash the new password, and update the user document.*/

    /*// Extract the old password and new password from the request body.
// The old password and new password are expected to be sent in the request body as JSON.*/
    const {oldPassword,newPassword} = req.body
    console.log("The oldPassword and newPassword is :- ",req.body);
    
    /*// Retrieve the user document from the database using the user ID extracted from the request.
// The user document is retrieved using the `findById()` method, which returns a promise that resolves to the user document.*/
    const user = await User.findById(req.user?._id)
    console.log("The data from the backend via (user) is:- ",user);    

    const isPasswordCorrect = await user.isPasswordCorrect(oldPassword)

    if(!isPasswordCorrect){
        throw new ApiError(400,"Invalid old password")
    }

    /*// Update the user's password in the user document.
// Set the new password as the user's password.*/
    user.password = newPassword

    /*// Save the updated user document to the database.
    // Bypass validation to avoid re-validating the entire document.*/
    await user.save({validateBeforeSave:false})

    /*// Return a response to the client with a status code of 200 (OK).
return res*/
    return res
    .status(200)
    /*// Set the response body to a JSON object containing a success message.*/
    .json(new ApiResponse(200,{}, "Password changed successfully"))/* // Create a new ApiResponse object with a status code of 200, an empty payload, and a success message.
    // Status code
     // Payload (empty in this case)
*/
})

const getCurrentUser = asyncHandler(async(req,res) => {
    // Return a response to the client with a status code of 200 (OK).
  return res
  .status(200)
  // Set the response body to a JSON object containing the current user's data and a success message.
  .json(200,req.user,"current usr fetched successfully")/*
  // Status code (not necessary, as it's already set with .status(200))
   // Current user's data
  */
})

const updateAccountDetails = asyncHandler(async(req,res) => {
  //Here we are only updating the text data , but in case of files like (images,videos etc.) write the separate controller and enpoint , # this is the professional  approach.
    const {fullName, email} = req.body
    console.log("The updated details via (updateAccountDetails) are :- ",req.body);

    /*// Validate that the full name and email are provided.
// If either field is missing, throw a 400 error with a message indicating that both fields are required.*/
    if(!fullName || !email) {
        throw new ApiError(400,"Full name and email are required")
    }

    /*// Update the user document in the database with the new full name and email.
// Use the `findByIdAndUpdate` method to update the user document and return the updated document.*/
    const user = User.findByIdAndUpdate(
        req.user._id, //// ID of the user document to update
        {
           $set:{  // Update operator: set the specified fields to the new values
            fullName:fullName, // Update the full name field
            email:email // Update the email field
           }
        },
        {new:true} // Options: return the updated document instead of the original document
    ).select("-password") // Exclude the password field from the returned document

    /*// Return a response to the client with a status code of 200 (OK).
// Include the updated user data and a success message in the response body.*/
    return res
    .status(200) // Set the response status code to 200 (OK)
    .json(new ApiResponse(200,user,"Account details updated Successfully "))/* // Create a new ApiResponse object with the updated user data and a success message.
    // Status code: 200 OK
     // Updated user data*/

});


/*// Define a function to handle the update user avatar request.
// This function is an asynchronous handler that takes in the request and response objects.
*/
const updateUserAvatar = asyncHandler(async(req,res)=>{/*// This function will perform the necessary operations to update the user's avatar.
    // It will handle the file upload, update the user document, and return a response to the client.*/

    /*// Extract the local file path of the uploaded avatar from the request object.
// The `req.file` object contains information about the uploaded file, and the `path` property specifies the local file path.*/
    const avatarLocalPath = req.file?.path

    if(!avatarLocalPath){
        throw new ApiError(400,"Avatar file  is required")
    }

    const avatar = uploadOnCloudinary(avatarLocalPath)

    /*// Check if the avatar was successfully uploaded to Cloudinary.
// If the upload failed, throw a 400 error with a message indicating that the avatar upload failed.*/
    if(!avatar.url){
        throw new ApiError(400,"Failed to upload avatar to cloudinary")
    }

    /*// Update the user document in the database with the new avatar URL.
// Use the `findByIdAndUpdate` method to update the user document and return the updated document.*/
    const user = await User.findByIdAndUpdate(
        req.user._id, // ID of the user document to update
        {$set:{avatar:avatar.url}},/*// Update operator: set the specified field to the new value
        // Update the avatar field with the new URL*/
        {new:true} // Options: return the updated document instead of the original document
    ).select("-password") // Exclude the password field from the returned document

    return res
    .status(200)
    .json(
        new ApiResponse(200,user,"Avatar updated successfully")
    )

})

const updateUserCoverImage = asyncHandler(async(req,res)=>{/*// This function will perform the necessary operations to update the user's coverImage.
    // It will handle the file upload, update the user document, and return a response to the client.*/

    /*// Extract the local file path of the uploaded coverImage from the request object.
// The `req.file` object contains information about the uploaded file, and the `path` property specifies the local file path.*/
    const coverImageLocalPath = req.file?.path

    if(!coverImageLocalPath){
        throw new ApiError(400,"coverImage file  is required")
    }

    const coverImage = uploadOnCloudinary(coverImageLocalPath)

    /*// Check if the CoverImage was successfully uploaded to Cloudinary.
// If the upload failed, throw a 400 error with a message indicating that the CoverImage upload failed.*/
    if(!coverImage.url){
        throw new ApiError(400,"Failed to upload coverImage to cloudinary")
    }

    /*// Update the user document in the database with the new CoverImage URL.
// Use the `findByIdAndUpdate` method to update the user document and return the updated document.*/
    const user = await User.findByIdAndUpdate(
        req.user._id, // ID of the user document to update
        {$set:{coverImage:coverImage.url}},/*// Update operator: set the specified field to the new value
        // Update the CoverImage field with the new URL*/
        {new:true} // Options: return the updated document instead of the original document
    ).select("-password") // Exclude the password field from the returned document

    return res
    .status(200)
    .json(
        new ApiResponse(200,user,"coverImage updated successfully")
    )

})

export { registerUser,
         loginUser,
         logoutUser,
         refreshAccessToken,
         changeCurrentPassword,
         getCurrentUser,
         updateAccountDetails,
         updateUserAvatar,
         updateUserCoverImage
 }

```