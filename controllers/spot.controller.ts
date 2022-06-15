import { Request, Response } from "express";
import SpotModel from "./../models/spot.model";
import { Types } from "mongoose";
import { createPostErrors } from "./../utils/errors.utils";

export const getAllSposts = async (req: Request, res: Response) => {
  const spots = await SpotModel.find();
  res.status(200).send(spots);
};

export const createSpot = async (req: Request, res: Response) => {
  const { spotName } = req.body;

  console.log(req.body)
  
  try {
    const spots = await SpotModel.create({ spotName });
    res.status(201).send({ spots: spots._id });
  } catch (err) {
    res.status(400).send({ err });
  }
};