import { sessions } from '../sessions';

export const logout = async (userSession) => {
	return sessions.remove(userSession);
};
