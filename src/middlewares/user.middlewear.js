import User from "../models/User.js";
import { decodeToken } from "../utils/user.helper.js";
import UserService from "../services/user.service.js";

const userEngagingLoggedIn = async (req, res, next) => {
  const header = req.headers.authorization;
  if (!header) {
    return res.status(403).json({
      message: "Not logged in",
    });
  }
  const token = header.split(" ")[1];
  const userInfo = decodeToken(token);
  const user = await User.findById(userInfo.id); 

  req.body.userId = user._id.toString();
  return next();
};

const isLoggedIn = async (req, res, next) => {
  const header = req.headers.authorization;
  if (!header) {
    return res.status(403).json({
      message: "Not logged in",
    });
  }
  // const token = header.split(" ")[1];
  // const userInfo = decodeToken(token);
  // const user = await UserService.userExist(userInfo);
  // req.user = user;

  // if (user.role !== "admin") {
  //   return res.status(401).json({
  //     message: "Request denied. Only for admin",
  //   });
  // }
  return next();
};

export { 
     userEngagingLoggedIn, 
     isLoggedIn
};
