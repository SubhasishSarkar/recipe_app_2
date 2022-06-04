import axios from "axios";

const axiosfetch = axios.create({
    baseURL: 'https://api.spoonacular.com/recipes/'
});

export default axiosfetch   ;
