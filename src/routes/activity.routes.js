const router = require("express").Router();
const activityController = require("./../controllers/activity.controller");

router.get("/", activityController.getActivities);
router.get("/single/:id", activityController.getSingleActivity);
router.post("/", activityController.createActivity);
router.put("/update/:id", activityController.updateActivity);
router.delete("/delete/:id", activityController.deleteActivity);

module.exports = router;

// router.get("/activity", (req, res) => {
//   try {
//     const activities = activity.find();
//     return res.status(200).json({ activities: activities });
//   } catch (error) {
//     return res.status(500).json(error);
//   }
// });
// router.post("/", async (req, res) => {
//   const newActivity = new Activity({
//     day: req.body.day,
//     time: req.body.time,
//     venue: req.body.venue,
//     activity: req.body.activity,
//     profilepic: req.body.pic,
//   });
//   try {
//     const savedActivity = await newActivity.save();
//     return res.status(200).json({ savedActivity });
//   } catch (error) {
//     return res.status(500).json({ message: error.message });
//   }
// });
