
import mongoose from "mongoose";

const PropertySchema = new mongoose.Schema(
    {
        fakeid: { type: String, required: true },
        address: { type: String, required: true },
        city: { type: String, required: true },
        host: { type: String, required: true },
        hostrating: { type: Number, min: 0, max: 5, required: true },
        rent: { type: Number, required: true },
        description: { type: String, required: true },
        cleanliness: { type: Number, min: 0, max: 5, required: true },
        accuracy: { type: Number, min: 0, max: 5, required: true },
        communication: { type: Number, min: 0, max: 5, required: true },
        location: { type: Number, min: 0, max: 5, required: true },
        value: { type: Number, min: 0, max: 5, required: true },
        rating: { type: Number, min: 0, max: 5, required: true },
        beds: { type: Number, required: true },
        baths: { type: Number, required: true },
        vacancy: { type: String, required: true },
        status: { type: String, required: true },
        tags: { type: [String] },
    }
);

export default mongoose.model("Property", PropertySchema);
