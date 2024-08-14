import User from "../models/User-Model.js";

const getProfile = async (req, res) => {
  try {
    const { registrationNumber } = req.body;
    const user = await User.findOne({ registrationNumber }).select("-password");
    if (!user) {
      return res.status(404).json({
        message: "User not found",
        success: false,
      });
    }
    return res.status(200).json({
      user,
      success: true,
    });
  } catch (error) {
    return res.status(500).json({
      message: "Error in get profile controller",
      success: false,
    });
  }
};

const manageProfile = async (req, res) => {
  try {
    const { registrationNumber } = req.body;
    const updates = req.body;

    // Create a new object without registrationNumber
    const filteredUpdates = { ...updates };
    delete filteredUpdates.registrationNumber;

    // Validate allowed fields (excluding registrationNumber, email, password)
    const allowedUpdates = [
      "parentBranch",
      "parentBranchDivision",
      "parentBranchBatch",
      "parentBranchRollNo",
      "oe",
      "oeDivision",
      "oeBatch",
      "oeRollNo",
      "mdm",
      "mdmDivision",
      "mdmBatch",
      "mdmRollNo",
    ];
    const invalidUpdates = Object.keys(filteredUpdates).filter(
      (field) => !allowedUpdates.includes(field)
    );

    if (invalidUpdates.length > 0) {
      return res.status(400).json({
        message: `Invalid update fields: ${invalidUpdates.join(", ")}`,
        success: false,
      });
    }

    if (Object.keys(filteredUpdates).length === 0) {
      return res.status(400).json({
        message: "No data provided for update",
        success: false,
      });
    }

    // Filter out update fields for restricted fields (registrationNumber, email, password)
    const filteredUpdatesForUpdate = Object.keys(filteredUpdates).filter(
      (field) => field !== "email" && field !== "password"
    );
    const updateObject = Object.fromEntries(
      filteredUpdatesForUpdate.map((field) => [field, filteredUpdates[field]])
    );

    // Find and update the user based on registrationNumber
    const updatedUser = await User.findOneAndUpdate(
      { registrationNumber },
      updateObject,
      { new: true, runValidators: true }
    );

    if (!updatedUser) {
      return res.status(404).json({ message: "User not found" });
    }

    return res.status(200).json({
      message: "Profile updated successfully",
      success: true,
    });
  } catch (error) {
    return res.status(500).json({
      message: "Error in manage profile controller",
      success: false,
    });
  }
};

export { getProfile, manageProfile };
