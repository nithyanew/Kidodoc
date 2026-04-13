import { Router } from "express";
const router = Router();
// Signup
router.post("/signup", (req, res) => {
  const { name, email, password } = req.body;

  res.json({
    message: "User registered successfully",
    user: { name, email }
  });
});

// Login
router.post("/login", (req, res) => {
  const { email, password } = req.body;

  res.json({
    message: "Login successful",
    email
  });
});

export default router;