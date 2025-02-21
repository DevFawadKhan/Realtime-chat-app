import {v2 as cloudinary} from 'cloudinary';
import {config} from "dotenv";
config();
cloudinary.config({
    cloud_name:process.env.CLOUDINARY_CLOUD_NAME,
     api_key:process.env.CLOUDINARY_APIKEY,
    api_secret:process.env.CLOURDINARY_APISECRET,
});
export default cloudinary;