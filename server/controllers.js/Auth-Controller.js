import User from "../models/User-Model.js";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";

const signup = async (req, res) => {
  try {
    const { fullName, email, password, registrationNumber } = req.body;

    if (!fullName || !email || !password || !registrationNumber) {
      return res.status(400).json({
        message: "Please fill full form",
        success: false,
      });
    }

    if (password.length < 6) {
      return res.status(400).json({
        message: "Password should be at least 6 characters long",
        success: false,
      });
    }

    const user = await User.findOne({ email, registrationNumber });
    if (user) {
      return res
        .status(400)
        .json({ message: "User already registered", success: false });
    }
    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(password, salt);

    const newUser = new User({
      fullName,
      email,
      password: hashedPassword,
      registrationNumber,
    });

    if (newUser) {
      await newUser.save();
      return res
        .status(201)
        .json({ message: "New User registered", success: true });
    }
  } catch (error) {
    res
      .status(500)
      .json({ message: "Error in Sign Up Validation", success: false });
  }
};

const login = async (req, res) => {
  try {
    const { email, password, registrationNumber } = req.body;
    if (!email || !password || !registrationNumber) {
      return res.status(400).json({
        message: "Please fill full form",
        success: false,
      });
    }

    if (password.length < 6) {
      return res.status(400).json({
        message: "Password should be at least 6 characters long",
        success: false,
      });
    }

    const user = await User.findOne({ email, registrationNumber });
    if (!user) {
      return res.status(400).json({
        message: "User not found, please check the credentials",
        success: false,
      });
    }
    const isPasswordValid = await bcrypt.compare(
      password,
      user?.password || ""
    );

    if (!user || !isPasswordValid) {
      return res.status(400).json({
        message: "User not found, please check the credentials",
        success: false,
      });
    }

    const jwtToken = jwt.sign(
      {
        email: user.email,
        _id: user._id,
        registrationNumber: user.registrationNumber,
      },
      process.env.JWT_SECRET,
      // token expires 24h after login
      { expiresIn: "24h" }
    );

    return res.status(200).json({
      message: "User logged in",
      success: true,
      userToken: jwtToken,
      name: user.fullName,
      registrationNumber: user.registrationNumber,
      email: user.email,
    });
  } catch (error) {
    return res
      .status(500)
      .json({ message: "Error in login validation", success: false });
  }
};

export { signup, login };
