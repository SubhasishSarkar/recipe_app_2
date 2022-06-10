import axios from "axios";
import env from "react-dotenv";

const axiosfetch = axios.create({
    baseURL: 'https://api.spoonacular.com/recipes/',
    params: {
        apiKey: env.API_KEY,
    }
});

export default axiosfetch   ;
