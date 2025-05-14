const jwt = require("jsonwebtoken");
const UserModel = require("../models/User");

const verifyToken = async (req, res, next) => {
  const { token } = req.cookies;
  if (!token) {
    res.status(401).json({ status: "failed", message: "Unauthorized Login!" });
  } else {
    const data = jwt.verify(token,"nhaskjdakjsdkajeda");
    const userData = await UserModel.findOne({ _id: data.ID });
    req.UserData = userData;
    next();
  }
};
module.exports = verifyToken;