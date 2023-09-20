import { useSelector } from 'react-redux';
import {
	selectModalIsOpen,
	selectModalOnCancel,
	selectModalOnConfirm,
	selectModalText,
} from '../../selectors';
import { Button } from '../button/button';
import styled from 'styled-components';

const ModalContainer = ({ className }) => {
	const text = useSelector(selectModalText);
	const isOpen = useSelector(selectModalIsOpen);
	const onConfirm = useSelector(selectModalOnConfirm);
	const onCancel = useSelector(selectModalOnCancel);

	if (!isOpen) {
		return null;
	}
	return (
		<div className={className}>
			<div className="overlay"></div>
			<div className="box">
				<h3>{text}</h3>
				<div className="buttons">
					<Button width="120px" onClick={onConfirm}>
						Да
					</Button>
					<Button width="120px" onClick={onCancel}>
						Отмена
					</Button>
				</div>
			</div>
		</div>
	);
};

export const Modal = styled(ModalContainer)`
	position: fixed;
	z-index: 20;
	top: 0;
	right: 0;
	bottom: 0;
	left: 0;

	& .overlay {
		background-color: rgba(0, 0, 0, 0.7);
		width: 100%;
		height: 100%;
		position: absolute;
	}

	& .box {
		text-align: center;
		width: 400px;
		margin: auto;
		position: relative;
		padding: 0 20px 20px 20px;
		top: 50%;
		transform: translate(0, -50%);
		z-index: 30;
		background-color: #fff;
		border: 2px solid #000;
	}

	& .buttons {
		display: flex;
		justify-content: center;
	}

	& .buttons Button {
		margin: 0 40px;
		justify-content: center;
	}
`;
