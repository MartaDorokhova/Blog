import styled from 'styled-components';

const IconContainer = ({ className, id }) => (
	<div className={className}>
		<i className={`fa ${id}`}></i>
	</div>
);
export const Icon = styled(IconContainer)`
	font-size: ${({ size = '24px' }) => size};
	margin: ${({ margin = '0' }) => margin};
	&:hover {
		cursor: pointer;
	}
`;
