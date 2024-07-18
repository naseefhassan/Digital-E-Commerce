import axios from "axios";

const Instance =  axios.create({
    baseURL:'http://localhost:4546'
})

export default Instance