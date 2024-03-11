import jwt from "jsonwebtoken";

export const Authorization = async (req, res, next) => {
  const token = req.headers.authorization;
  console.log("🚀 ~ file: userAuthorization.js:6 ~ Authorization ~ token:", token)

  if (!token) {
    return res.status(401).json({ status: false, msg: "Token not found" });
  }
  let user;

  try {
    user = jwt.verify(token, process.env.SECRET_KEY);
    if (!user) {
      return res.status(401).json({ msg: "Token is not verify" });
    }
  } catch (error) {
    console.log(error);
    return res
      .status(401)
      .json({ status: false, msg: "jwt token is error", error });
  }
  next();
  return;
};
