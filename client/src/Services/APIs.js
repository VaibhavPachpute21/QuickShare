import axios from 'axios';

// const SERVER_URL = 'https://quickshare-8oxn.onrender.com';
 const SERVER_URL = 'http://127.0.0.1:8080';

export const sendFile = async (data) => {

    try {
        const res = await axios.post(`${SERVER_URL}/upload`, data)
        return res;
    } catch (error) {
        console.error(error.message)
    }
}