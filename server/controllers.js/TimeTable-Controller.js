import Timetable from "../models/Timetable-Model.js";

const manageTimeTable = async (req, res) => {
  try {
    const {
      registrationNumber,
      day,
      lectureName,
      from,
      to,
      fromTimeZone,
      toTimeZone,
      venue,
      facultyName,
    } = req.body;

    if (!lectureName || !from || !to) {
      return res
        .status(400)
        .json({ message: "Please enter timetable details", success: false });
    }

    // Find or create the timetable for the user
    let timetable = await Timetable.findOne({ registrationNumber });
    if (!timetable) {
      timetable = new Timetable({ registrationNumber, schedule: [] });
    }

    // Find the day in the timetable
    let dayIndex = timetable.schedule.findIndex((d) => d.day === day);

    // If day not found, create a new day
    if (dayIndex === -1) {
      timetable.schedule.push({
        day,
        lectures: [],
      });
      dayIndex = timetable.schedule.length - 1;
    }

    // Find the existing lecture with the same 'from' and 'fromTimeZone'
    let lectureIndex = timetable.schedule[dayIndex].lectures.findIndex(
      (lecture) =>
        lecture.from === from && lecture.fromTimeZone === fromTimeZone
    );

    // If lecture found, replace it
    if (lectureIndex !== -1) {
      // Create a copy of the timetable object
      let timetableCopy = JSON.parse(JSON.stringify(timetable));

      // Remove the existing lecture from the copied timetable
      timetableCopy.schedule[dayIndex].lectures.splice(lectureIndex, 1);

      // Add the new lecture to the copied timetable
      timetableCopy.schedule[dayIndex].lectures.push({
        lectureName,
        from,
        to,
        fromTimeZone,
        toTimeZone,
        venue,
        facultyName,
      });

      // Update the original timetable in the database
      await Timetable.findByIdAndUpdate(timetable._id, timetableCopy);
    } else {
      // Otherwise, add a new lecture
      timetable.schedule[dayIndex].lectures.push({
        lectureName,
        from,
        to,
        fromTimeZone,
        toTimeZone,
        venue,
        facultyName,
      });
    }

    // Save the timetable
    await timetable.save();

    return res
      .status(201)
      .json({ message: "Timetable updated successfully", success: true });
  } catch (error) {
    console.error(error);
    return res
      .status(500)
      .json({ message: "Error creating timetable", success: false });
  }
};

const getTimetable = async (req, res) => {
  try {
    const { registrationNumber } = req.body;

    const timetable = await Timetable.findOne({ registrationNumber });

    if (!timetable) {
      return res
        .status(404)
        .json({ message: "Timetable not found", success: false });
    }

    return res.status(200).json({ timetable, success: true });
  } catch (error) {
    return res
      .status(500)
      .json({ message: "Error in get timetable api", success: false });
  }
};

// code for deleting timetable for a given day
// const deleteTimetableForDay = async (req, res) => {
//   try {
//     const { registrationNumber, day } = req.body;

//     const timetable = await Timetable.findOne({ registrationNumber });

//     if (!timetable) {
//       return res.status(404).json({
//         message: `Timetable not found for registration number ${registrationNumber}`,
//         success: false,
//       });
//     }

//     const updatedSchedule = timetable.schedule.filter(
//       (entry) => entry.day !== day
//     );

//     timetable.schedule = updatedSchedule;
//     await timetable.save();

//     return res.status(200).json({
//       message: `Deleted timetable entries for ${day}`,
//       success: true,
//     });
//   } catch (error) {
//     return res.status(500).json({
//       message: "Error in delete timetable API",
//       success: false,
//     });
//   }
// };

export {
  manageTimeTable,
  getTimetable,
  // deleteTimetableForDay
};
