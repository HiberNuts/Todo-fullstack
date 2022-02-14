const express = require("express");

const router = express.Router();
router.use(express.json());

const bcrypt = require("bcryptjs");
const { User } = require("../model/model");

router.post("/", async (req, res) => {
   const body = req.body;

   const saltRounds = 10;

   const passwordHash = await bcrypt.hash(body.password, saltRounds);

   const user = new User({
      username: body.username,
      password: passwordHash,
   });

   console.log(user);
   const savedUser = await user.save();

   res.json(savedUser);
});

router.get("/", async (req, res) => {
   const users = await User.find({}).populate("todo", { text: 1 });
   res.json(users);
   console.log(users);
});
module.exports = router;
