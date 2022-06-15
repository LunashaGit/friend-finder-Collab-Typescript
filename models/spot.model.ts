import mongoose, { Schema, Document, Model } from "mongoose";

interface ISpot {
    name : string;
    latitude: string;
    longitude: string;
    hobbies: [string];
    description: string;
    creatorID: string;
}

interface ISpotDocument extends ISpot, Document {}

const spotSchema: Schema<ISpotDocument> = new Schema(
    {
        name: {
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
          }
    }
);

const SpotModel = mongoose.model<ISpotDocument>("spot", spotSchema);

export default SpotModel;