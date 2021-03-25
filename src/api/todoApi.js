import axiosClient from './axiosClient';

const todoApi = {
	getAll: () => {
		const url = '/posts';
		return axiosClient.get(url, {
			baseURL: 'https://jsonplaceholder.typicode.com/',
		});
	},
};

export default todoApi;
