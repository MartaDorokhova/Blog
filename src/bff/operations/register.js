import { sessions } from '../sessions';
import { getUser, addUser } from '../api';

export const register = async (regLogin, regPassword) => {
	const existedUser = await getUser(regLogin);
	if (existedUser) {
		return {
			error: 'Такой логин уже занят',
			res: null,
		};
	}

	const user = await addUser(regLogin, regPassword);

	return {
		error: null,
		res: {
			id: user.id,
			login: user.login,
			roleId: user.role_id,
			registeredAt: user.registered_at,
			session: sessions.create(user),
		},
	};
};
