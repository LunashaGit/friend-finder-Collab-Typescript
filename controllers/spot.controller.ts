import { Request, Response } from "express";
import SpotModel from "./../models/spot.model";
import UserModel from "./../models/user.model";
import { Types } from "mongoose";
import { createPostErrors } from "./../utils/errors.utils";

export const getAllSposts = async (req: Request, res: Response) => {
  const spots = await SpotModel.find();
  res.status(200).send(spots);
};

export const createSpot = async (req: Request, res: Response) => {
  const { spotName, latitude, longitude, hobbies, description, creatorID } = req.body;

  try {
    const spots = await SpotModel.create({ spotName, latitude, longitude, hobbies, description, creatorID });
    res.status(201).send({ spots: spots._id });
  } catch (err) {
    const errors = createPostErrors(err);
    res.status(400).send({ errors });
  }
};

export const spotInfo = (req: Request, res: Response) => {
  if (!Types.ObjectId.isValid(req.params.id))
    return res.status(400).send("ID unknown : " + req.params.id);

  SpotModel.findById(req.params.id, (err: string, docs: string) => {
    !err ? res.status(200).send(docs) : res.status(400).send({ message: err });
  }).select("-password");
};

export const updateSpot = async (req: Request, res: Response) => {
  if (!Types.ObjectId.isValid(req.params.id))
    return res.status(400).send("ID unknown : " + req.params.id);

  try{
    await SpotModel.findOneAndUpdate(
      { _id: req.params.id },
      {
        $set: {
          spotName: req.body.spotName,
          latitude: req.body.latitude,
          longitude: req.body.longitude,
          description: req.body.description,
        },
      },
      {
        new: true,
        upsert: true,
        setDefaultsOnInsert: true,
      }
    )
      .then((docs) => {
        res.send(docs);
      })
      .catch((err) => res.status(400).send({ message: err }));
  }catch(err){
    return res.status(400).send({ message: err });
  }
}

export const deleteSpot = async (req: Request, res: Response) => {
  if (!Types.ObjectId.isValid(req.params.id))
    return res.status(400).send("ID unknown : " + req.params.id);
  try {
    await SpotModel.deleteOne({ _id: req.params.id }).exec();
    res.status(200).send({ message: "Successfully deleted. " });
  } catch (err) {
    return res.status(400).send({ message: err });
  }
};

export const InterestedPost = async (req: Request, res: Response) => {
  if (!Types.ObjectId.isValid(req.params.id))
    return res.status(400).send("ID unknown : " + req.params.id);
  try {
    await SpotModel.findByIdAndUpdate(
      req.params.id,
      {
        $addToSet: { userInterestedIn: req.params.idUser },
      },
      { new: true }
    )
      .then()
      .catch((err) => res.status(400).send({ message: err }));
    await UserModel.findByIdAndUpdate(
      req.params.idUser,
      {
        $addToSet: { userInterestedIn: req.params.id },
      },
      { new: true }
    )
      .then((docs) => res.status(201).json(docs))
      .catch((err) => res.status(400).send({ message: err }));
  } catch (err) {
    return res.status(400).send(err);
  }
}