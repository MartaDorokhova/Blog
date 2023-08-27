import { generateDate } from './generate-date';
export const addUser = (login, password) =>
	fetch('http://localhost:3005/users', {
		method: 'POST',
		headers: {
			'Content-Type': 'application/json;charset=utf-8',
		},
		body: JSON.stringify({
			login,
			password,
			registred_at:
				generateDate /*Заполнение в нашем проекте с помощью генератора случайных дат*/,
			role_id: 2 /*Должны назначить новому пользователю роль Читатель с id = 2*/,
		}),
	});
