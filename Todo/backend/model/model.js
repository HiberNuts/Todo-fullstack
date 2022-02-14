const mongoose = require("mongoose");

const url = `mongodb+srv://raghav:${8520}@cluster0.mfxmf.mongodb.net/Todo-list?retryWrites=true&w=majority`;

mongoose
   .connect(url)
   .then((result) => {
      console.log("connected to MongoDB");
   })
   .catch((error) => {
      console.log("error connecting to MongoDB:", error.message);
   });

const todoSchema = new mongoose.Schema({
   text: String,
   user: [
      {
         type: mongoose.Schema.Types.ObjectId,
         ref: "User",
      },
   ],
});

const userSchema = new mongoose.Schema({
   username: String,
   password: String,
   todo: [
      {
         type: mongoose.Schema.Types.ObjectId,
         ref: "Todo",
      },
   ],
});
const Todo = mongoose.model("Todo", todoSchema);

const User = mongoose.model("User", userSchema);

todoSchema.set("toJSON", {
   transform: (document, returnedObject) => {
      returnedObject.id = returnedObject._id.toString();
      delete returnedObject._id;
      delete returnedObject.__v;
   },
});

userSchema.set("toJSON", {
   transform: (document, returnedObject) => {
      returnedObject.id = returnedObject._id.toString();
      delete returnedObject._id;
      delete returnedObject.__v;
      // the passwordHash should not be revealed
      //   delete returnedObject.passwordHash
   },
});

module.exports.Todo = Todo;
module.exports.User = User;
