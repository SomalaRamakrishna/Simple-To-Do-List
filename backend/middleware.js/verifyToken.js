const jwt = require("jsonwebtoken");

const verifyToken = (req, res, next) => {
  console.log("middleware entered");
  const authHeader = req.headers.authorization;

  // Check if the Authorization header is present and formatted correctly
  if (!authHeader || !authHeader.startsWith("Bearer ")) {
    return res.status(401).json({ message: "Access denied. No token provided." });
  }

  const token = authHeader.split(" ")[1];

  try {
    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    //console.log("decoded",decoded);
    req.user = decoded; // Attach decoded payload to request
    next(); // Proceed to the next middleware/route handler
  } catch (err) {
    return res.status(403).json({ message: "Invalid or expired token." });
  }
};

module.exports = verifyToken;
