import { styled } from 'styled-components';

const TableRowContainer = ({ className, children }) => {
	return <div className={className}>{children}</div>;
};

export const TableRow = styled(TableRowContainer)`
	display: flex;
	align-items: center;

	& > div {
		padding: 0 10px;
	}

	& .login-column {
		width: 170px;
	}

	& .registered-at-column {
		width: 213px;
	}

	& .role-column {
		width: auto;
	}
`;
