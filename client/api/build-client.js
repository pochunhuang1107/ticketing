import axios from 'axios';

const buildClient = ({ req }) => {
    if (typeof window === 'undefined') {
        return axios.create({
            baseURL: 'http://www.casperhuang-ticketing.com/',
            headers: req.headers,
        });
    } else {
        return axios.create({
            baseURL: '/',
        });
    }
};

export default buildClient;
