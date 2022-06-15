import mongoose, { Schema, Document, Model } from "mongoose";

interface ISpot {
    spotName : string;
    latitude: string;
    longitude: string;
    hobbies: [string];
    description: string;
    creatorID: string;
    userInterstedIn: [string];
}

interface ISpotDocument extends ISpot, Document {}

const spotSchema: Schema<ISpotDocument> = new Schema(
    {
        spotName: {
            type: String,
            required: true,
            minLength: 8,
            maxLength: 55,
            unique: true,
            trim: true,
          },
          latitude :{
            type : String
          },
          longitude :{
            type : String
          },
          hobbies: {
            type: [String],
          },
          description: {
            type: String,
            required: true,
            minLength: 8,
            maxLength: 512,
          },
          creatorID: {
            type: String,
          },
          userInterstedIn: {
            type : [String]
          }

    }
);

const SpotModel = mongoose.model<ISpotDocument>("spot", spotSchema);

export default SpotModel;