import jwt from "jsonwebtoken";

const authValidation = (req, res, next) => {
  const auth = req.headers["authorization"];
  if (!auth) {
    return res.status(403).json({
      message: "Unauthorized Access, JWT Token Required",
      success: false,
    });
  }
  try {
    const decodedData = jwt.verify(auth, process.env.JWT_SECRET);
    req.user = decodedData;
    next();
  } catch (error) {
    console.log(error);
    res.status(401).json({
      message: "Invalid JWT Token",
      success: false,
    });
  }
};

export default authValidation;

// Usage in routes:
// always call this middleware before protected routes
// for eg: when user logs in, and wants to access their profile, we call this middleware to check if the client that is sending the request is authenticated

// if its not authenticated, we send 401 response, else we allow them to move forward
