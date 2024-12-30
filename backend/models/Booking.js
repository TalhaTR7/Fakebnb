
import mongoose from "mongoose";

const BookingSchema = new mongoose.Schema(
    {
        fakeid: { type: String, required: true },
        userid: { type: String },
        cardholder: { type: String, required: true },
        cardnumber: { type: Number, length: 16, required: true },
        expiry: { type: String, length: 7, required: true },
        cvv: { type: Number, length: 3, required: true },
        duration: {type: Number, required: true},
        total: {type: Number, require: true}
    }, {
        timestamps: true
    }
);

export default module.exports('Booking', BookingSchema);