const Activity = require("./../models/activity.model");

class ActivityController { 
  /**
   * Get user from database
   */
  getActivities = async (req, res, next) => {
    try {
      const activities = await Activity.find();
      if (activities.length < 1) {
        return res
          .status(404)
          .json({ message: "There are no activities found" });
      }
      return res.status(200).json({ activities });
    } catch (err) {
      return res.status(200).json({ message: err.message });
    }
  };

  /**
   * Getting one activity from database
   */
  getSingleActivity = async (req, res, next) => {
    try {
      const activity = await Activity.findById(req.params.id);
      if (!activity) {
        return res.status(404).json({ message: "No activity found" });
      }
      return res.status(200).json({ activity });
    } catch (err) {
      return res.status(200).json({ message: err.message });
    }
  };

  /**
   * Create user record in the database
   */
  createActivity = async (req, res, next) => {
    try {
      const newActivity = new Activity(req.body);
      const saved = await newActivity.save();
      return res.status(200).json({ saved });
    } catch (err) {
      return res.status(200).json({ message: err.message });
    }
  };

  /**
   * Update user
   */
  updateActivity = async (req, res, next) => {
    try {
      const activity = await Activity.findByIdAndUpdate(
        req.params.id,
        { ...req.body },
        { new: true }
      );
      return res.status(200).json({ activity });
    } catch (err) {
      return res.status(200).json({ message: err.message });
    }
  };

  /**
   * Delete user
   */
  deleteActivity = async (req, res, next) => {
    try {
      const activity = await Activity.findByIdAndDelete(req.params.id);
      return res.status(301).json({ message: "Activity deleted" });
    } catch (err) {
      return res.status(200).json({ message: err.message });
    }
  };
}

module.exports = new ActivityController();
