const jwt = require("jsonwebtoken");
const bcrypt = require("bcryptjs");
const loginRouter = require("express").Router();
const { User } = require("../model/model");

loginRouter.post("/", async (req, res) => {
   const body = req.body;

   const user = await User.findOne({ username: body.username });

   const correctPass = await bcrypt.compare(body.password, user.password);

   if (!(user && correctPass)) {
      return res.json({
         error: "invalid username r password",
      });
   } else {
      const userForToken = {
         username: user.username,
         id: user._id,
      };

      const token = jwt.sign(userForToken, process.env.SECRET);

      res.status(200).send({ token, username: user.username, id: user._id });
   }
});
loginRouter.get("/", async (req, res) => {
   const user = await User.find({}).populate("todo");
   res.json(user);
});
module.exports = loginRouter;
