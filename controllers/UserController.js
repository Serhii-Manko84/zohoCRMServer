import { validationResult } from "express-validator";

import UserModel from "../models/User.js";

export const register = async (req, res) => {
  try {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json(errors.array());
    }

    const doc = new UserModel({
      dealName: req.body.dealName,
      dealStage: req.body.dealStage,
      accountName: req.body.accountName,
      accountWebsite: req.body.accountWebsite,
      accountPhone: req.body.accountPhone,
    });

    const user = await doc.save();

    res.json(user);
  } catch (error) {
    console.log(error);
    res.status(500).json({
      message: "No Create a deal and account",
    });
  }
};
