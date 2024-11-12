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

## File Structure for production grade web apps

>>This document provides a structured overview of the backend project, explaining the purpose of each folder and file in the application.

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