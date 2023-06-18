/*******************************************************************************
 * This file includes the functions that add, update, delete and query the data
 * from the users's collection in the database.
 ******************************************************************************/
import User from "../models/userModel.js";

/*******************************************************************************
 * This function is used to register the user.
 * Returns
 *  - true status if registered successfully
 *  - false status if registered not successfully
 ******************************************************************************/
export const register = async (req, res) => {
  const { username, email, name, blood, number } = req.body;
  const myName = req.body.name;
  const newUser = new User({
    username,
    email,
    name: myName,
    blood,
    number,
  });

  try {
    await newUser.save();
    res.status(201).json({ message: "Created Success" });
  } catch (error) {
    res.status(409).json({ Error: error.message });
  }
};

export const getData = async (req, res) => {
  try {
    const data = await User.find();
    res.status(200).json(data);
  } catch (error) {
    res.status(404).json({ Error: error.message });
  }
};

export const getDataFirst = async (req, res) => {
  try {
    const data = await User.findOne();
    res.status(200).json(data);
  } catch (error) {
    res.status(404).json({ Error: error.message });
  }
};

export const getDataByUsername = async (req, res) => {
  // const { email } = req.params;
  try {
    const data = await User.find({ username: "pj" });
    res.status(200).json(data);
  } catch (error) {
    res.status(404).json({ Error: error.message });
  }
};

export const getDataByParameter = async (req, res) => {
  // console.log("test: ", req.params);

  const { username } = req.query;

  try {
    const data = await User.find({ username: username });
    res.status(200).json(data);
  } catch (error) {
    res.status(404).json({ Error: error.message });
  }
};

export const updateData = async (req, res) => {
  try {
    await User.updateOne(
      { name: "nn" },
      { $set: { email: "newNN@email.com" } }
    );
    res.status(200).json({ status: true, Message: "Updated Successfully" });
  } catch (error) {
    res.status(404).json({ Error: error.message });
  }
};

export const updateMany = async (req, res) => {
  try {
    await User.updateMany({ username: "ying" }, { $set: { blood: "B" } });
    res.status(200).json({ status: true, Message: "Updated Successfully" });
  } catch (error) {
    res.status(404).json({ Error: error.message });
  }
};

export const deleteData = async (req, res) => {
  try {
    await User.deleteOne({ username: "test" });
    res.status(200).json({ status: true, Message: "Deleted Successfully" });
  } catch (error) {
    res.status(404).json({ Error: error.message });
  }
};

export const deleteMany = async (req, res) => {
  try {
    await User.deleteMany({ name: "testName2" });
    res.status(200).json({ status: true, Message: "Deleted Successfully" });
  } catch (error) {
    res.status(404).json({ Error: error.message });
  }
};
