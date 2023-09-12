import { ACTION_TYPE } from './action-type';
import { server } from '../bff';

export const logout = (userSession) => {
	server.logout(userSession);
	return {
		type: ACTION_TYPE.LOGOUT,
	};
};
