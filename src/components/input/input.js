import { forwardRef } from 'react';
import PropTypes from 'prop-types';
import { styled } from 'styled-components';

const InputContainer = forwardRef(({ className, width, ...props }, ref) => {
	return <input className={className} {...props} ref={ref}></input>;
});

export const Input = styled(InputContainer)`
	height: 40px;
	margin: 0 0 10px;
	border: 1px solid;
	font-size: 18px;
	padding: 10px;
	width: ${({ width = '100%' }) => width};
`;

Input.propTypes = {
	width: PropTypes.string,
};
