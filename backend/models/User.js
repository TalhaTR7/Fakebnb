
import mongoose from 'mongoose';

const UserSchema = new mongoose.Schema(
    {
        userid: { type: String, require: true },
        firstname: { type: String, required: true },
        lastname: { type: String, required: true },
        email: { type: String, required: true },
        password: { type: String, required: true },
        booking: { type: [String] }
    }, {
        timestamps: true
    }
);

export default mongoose.model('User', UserSchema);