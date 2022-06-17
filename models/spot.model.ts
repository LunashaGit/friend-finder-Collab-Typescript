import mongoose, { Schema, Document, Model } from "mongoose";

interface ISpot {
    spotName : string;
    latitude: number;
    longitude: number;
    hobbies: [string];
    description: string;
    creatorID: string;
    userInterestedIn: [string];
}

interface ISpotDocument extends ISpot, Document { }

interface ISpotModel extends Model<ISpotDocument> {
  login: (email: string, password: string) => Promise<ISpotDocument>;
}
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
        type : Number
      },
      longitude :{
        type : Number 
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
      userInterestedIn: {
        type: [String],
      }
    }
);

const SpotModel = mongoose.model<ISpotDocument, ISpotModel>("spot", spotSchema);

export default SpotModel;