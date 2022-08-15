import mongoose from "mongoose";
 
const User = mongoose.Schema({
    nama:{
        type: String,
        required: true
    },
    nim:{
        type: String,
        required: true
    },
    kelas:{
        type: String,
        required: true
    },
    semester:{
        type: String,
        required: true
    },
    alamat:{
        type: String,
        required: true
    },
    jenis_kelamin:{
        type: String,
        required: true
    }
});
 
export default mongoose.model('Users', User);