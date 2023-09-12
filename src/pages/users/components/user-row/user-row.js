import styled from 'styled-components';
import { Icon } from '../../../../components';
import { TableRow } from '../table-row/table-row';
import { useDispatch } from 'react-redux';

const UserRowContainer = ({
	className,
	login,
	registeredAt,
	roleId: userRoleId,
	roles,
}) => {
	const dispatch = useDispatch();
	const onRoleChange = () => {};

	return (
		<div className={className}>
			<TableRow>
				<div className="login-column">{login}</div>
				<div className="registered-at-column">{registeredAt}</div>
				<div className="role-column">
					<select value={userRoleId} onChange={onRoleChange}>
						{roles.map(({ id: roleId, name: roleName }) => (
							<option key={roleId} value={roleId}>
								{roleName}
							</option>
						))}
					</select>
					<Icon
						onClick={() => dispatch(/*TODO*/)}
						id="fa-floppy-o"
						margin="0 0 0 10px"
					/>
				</div>
			</TableRow>
			<Icon
				onClick={() => dispatch(/*TODO*/)}
				id="fa-trash-o"
				margin="0 0 0 10px"
			/>
		</div>
	);
};

export const UserRow = styled(UserRowContainer)`
	display: flex;
`;
