import { useState } from 'react';
import styled from 'styled-components';
import { Icon } from '../../../../components';
import { TableRow } from '../table-row/table-row';
import { useServerRequest } from '../../../../hooks';

const UserRowContainer = ({
	className,
	login,
	id,
	registeredAt,
	roleId: userRoleId,
	roles,
	onUserRemove,
}) => {
	const [initialRoleId, setInitialRoleId] = useState(userRoleId);
	const [selectedRoleId, setSelectedRoleId] = useState(userRoleId);
	const requestServer = useServerRequest();

	const onRoleChange = ({ target }) => {
		setSelectedRoleId(Number(target.value));
	};

	const onRoleSave = (userId, newUserRoleId) => {
		requestServer('updateUserRole', userId, newUserRoleId).then(() => {
			setInitialRoleId(newUserRoleId);
		});
	};

	const isSaveButtonDisabled = selectedRoleId === initialRoleId;
	return (
		<div className={className}>
			<TableRow border={true}>
				<div className="login-column">{login}</div>
				<div className="registered-at-column">{registeredAt}</div>
				<div className="role-column">
					<select value={selectedRoleId} onChange={onRoleChange}>
						{roles.map(({ id: roleId, name: roleName }) => (
							<option key={roleId} value={roleId}>
								{roleName}
							</option>
						))}
					</select>
					<div onClick={() => onRoleSave(id, selectedRoleId)}>
						{' '}
						<Icon
							margin="0 0 0 10px"
							disabled={isSaveButtonDisabled}
							id="fa-floppy-o"
						/>
					</div>
				</div>
			</TableRow>
			<div onClick={onUserRemove}>
				<Icon id="fa-trash-o" margin="0 0 0 10px" />
			</div>
		</div>
	);
};

export const UserRow = styled(UserRowContainer)`
	display: flex;
	margin-top: 10px;

	& select {
		font-size: 16px;
		padding: 0 5px;
	}
`;
