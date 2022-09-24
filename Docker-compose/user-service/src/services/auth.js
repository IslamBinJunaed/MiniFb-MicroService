import jwt from "jsonwebtoken";

export const authorize = (req, res) => {
  try {
    if (req.cookies.fbDemoJWT) {
      const userEmail = jwt.verify(req.cookies.fbDemoJWT, process.env.JWT_HASH_KEY);
      
      res.status(200).json({
        isAuthenticated: true,
        userEmail
      });

    } else {
      res.status(401).json({
        isAuthenticated: false,
      });
    }
  } catch (error) {
    res.status(500).json({
      errorMessage: "Internal Server Error",
    });
  }
};
