//Importing all modules
const jwt = require("jsonwebtoken");
const express = require("express");
const cors = require("cors");
const { json } = require("express");
const bodyParser = require("body-parser");
require("dotenv").config();
const { Todo } = require("./model/model");
const router = require("./routes/userRoutes");
const { User } = require("./model/model");
const loginRouter = require("./controllers/login");
const PORT = 3001;
const baseUrl = "https://todo-app-0212.herokuapp.com";

//Middle wares calling
const app = express();
app.use(express.static("build"));
app.use(cors());
app.use(express.json());

const requestLogger = (request, response, next) => {
   console.log("Method:", request.method);
   console.log("Path:  ", request.path);
   console.log("Body:  ", request.body);
   console.log("---");
   next();
};

app.use(requestLogger);

//initila get

app.get("/", (req, res) => {
   res.json({ message: "Welcome to the REST API" });
});

//getting all todos
app.get("/todos", async (req, res) => {
   const todo = await Todo.find({}).populate("user", { username: 1 });
   res.json(todo);
   // Todo.find({})
   //    .populate("user", { username: 1 })
   //    .then((data) => res.json(data))
   //    .catch((err) => console.log("Error while getting operation", err));
});

//getting for particular id
app.get("/todos/:id", async (req, res) => {
   const id = req.params.id;
   const user = await User.findById(id).populate("todo");

   res.json(user.todo);

   console.log(user.todo);

   // User.findById(id).then((user) => res.json(user.todo));
});

//post request

const getTokenFrom = (req) => {
   const authorization = req.get("authorization");
   if (authorization && authorization.toLowerCase().startsWith("bearer ")) {
      console.log(authorization.substring(7));

      return authorization.substring(7);
   }
   return null;
};

app.post("/todos", async (req, res) => {
   const body = req.body;

   //related to jwt
   //verifing token
   const token = getTokenFrom(req);
   const decodedToken = jwt.verify(token, process.env.SECRET);

   if (!(token || decodedToken.id)) {
      return response.status(401).json({ error: "token missing or invalid" });
   }

   const user = await User.findById(decodedToken.id);

   const todo = new Todo({
      text: body.text,
      user: user._id,
   });

   const savedTodo = await todo.save();
   user.todo = user.todo.concat(savedTodo._id);
   await user.save();
   res.json(savedTodo);
});

//delete by id

app.delete("/todos/:id", (req, res) => {
   console.log(req.params.id);
   Todo.findByIdAndDelete(req.params.id)
      .then((todo) => res.json(todo))
      .catch((err) => {
         console.log("prblem while deleting");
         console.log("error occured while deleting", err);
      });
});

//updating

app.put("/todos/:id", (req, res) => {
   const id = req.params.id;
   const text = req.body.text;

   Todo.findByIdAndUpdate(id, { text: text })
      .then((result) => {
         res.json(result);
      })
      .catch((err) =>
         res.status(400).json({
            error: err,
         })
      );
});

app.use("/user", router);
app.use("/login", loginRouter);

app.listen(process.env.PORT || 3001, () => {
   console.log("live at server http://localhost:3001");
});
