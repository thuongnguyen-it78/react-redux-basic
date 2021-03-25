import axios from 'axios';
import queryString from 'query-string';

const axiosClient = axios.create({
	baseURL: 'https://chill-music-nodejs.herokuapp.com/',
	headers: {
		'Content-Type': 'application/json',
	},
	paramsSerializer: (params) => queryString.stringify(params),
});

// Interceptors
// Add a request interceptor
axiosClient.interceptors.request.use(
	function (config) {
		// Handle token here...
		// Do something before request is sent
		return config;
	},
	function (error) {
		// Do something with request error
		return Promise.reject(error);
	}
);

// Add a response interceptor
axiosClient.interceptors.response.use(
	function (response) {
		if (response && response.data) {
			return response.data;
		}
		return response;
	},

	function (error) {
		// hanle error here
		return Promise.reject(error);
	}
);

export default axiosClient;
