import mongoose from "mongoose";
import validator from "validator";

const reservationSchema = new mongoose.Schema({
    firstname: {
        type: String,
        required: true,
        minLength: [3, 'First name must be at least 3 characters long'],
        maxLength: [30, 'First name cannot exceed 30 characters'],
    }, 

    lastname: {
        type: String,
        required: true,
        minLength: [3, 'First name must be at least 3 characters long'],
        maxLength: [30, 'First name cannot exceed 30 characters']
    },

    email: {
        type: String,
        required: true,
        validate: [validator.isEmail, 'Please enter a valid email address']
    },

    phone: {
        type: String,
        required: true,
        minLength: [10, 'Phone number must be conatin only 10 digits'],
        maxLength: [10, 'Phone number must be conatin only 10 digits']
    },

    time: {
        type: String,
        required: true,
    },

    date: {
        type: String,
        required: true,
    }
});

export const Reservation = mongoose.model('Reservation', reservationSchema);