import axios from 'axios';

export const apiServerInstance = axios.create({
	// baseURL: 'http://localhost:8000',
	baseURL: 'https://scraping-astana-spravker.herokuapp.com',
	validateStatus: status => status >= 200 && status < 300,
});

// Request interceptor
apiServerInstance.interceptors.request.use(config => {
	// Every time the jwt is updated in the page, the localstorage needs to be updated together
	// const { jwt } = localStorage.get('user') as userStateProperties;

	return config;
});

// Response interceptor
apiServerInstance.interceptors.response.use(
	response => response.data,
	error => {
		if (error.response && error.response.status) {
			let { status } = error.response;

			if (status >= 500) {
				return Promise.reject({
					message: 'Ошибка сервера, свяжитесь с разработчиком',
				});
			}

			if (status >= 400) {
				return Promise.reject(error.response.data);
			}
		}

		return Promise.reject({
			message: 'Падение сервера, свяжитесь с разработчиком',
		});
	},
);
