import fetch from "node-fetch";

export const authorize = async (req, res, next) => {
  try {
    const response = await fetch(process.env.AUTH_SERVICE, {
      method: "GET",
      headers: {
        Cookie: `fbDemoJWT=${req.cookies.fbDemoJWT}`,
      },
    });

    const { isAuthenticated, userEmail } = await response.json();

    if (isAuthenticated) {
      req.userEmail = userEmail;
      next();
    } else {
      res.status(401).send("<h1>Unauthorized</h1>");
    }
  } catch (error) {
    res.status(500).json({
      errorMessage: "Internal Server Error",
    });
  }
};