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

export { manageTimeTable };