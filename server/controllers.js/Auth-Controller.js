import User from "../models/User-Model.js";
import bcrypt from "bcrypt";

const signup = async (req, res) => {
  try {
    const { fullName, email, password, registrationNumber } = req.body;
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
    const user = await User.findOne({ email, registrationNumber });
    if (!user) {
      return res
        .status(400)
        .json({ message: "User not found", success: false });
    }
    const isPasswordValid = await bcrypt.compare(
      password,
      user?.password || ""
    );

    if (!user || !isPasswordValid) {
      return res
        .status(400)
        .json({ message: "Invalid credentials", success: false });
    }

    return res.status(200).json({ message: "User logged in", success: true });
  } catch (error) {
    return res
      .status(500)
      .json({ message: "Error in login validation", success: false });
  }
};

export { signup, login };
