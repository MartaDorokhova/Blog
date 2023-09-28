import { useDispatch, useSelector } from 'react-redux';
import PropTypes from 'prop-types';
import {
	openModal,
	CLOSE_MODAL,
	removeCommentAsync,
} from '../../../../../../actions';
import { Icon } from '../../../../../../components';
import { useServerRequest } from '../../../../../../hooks';
import { ROLE } from '../../../../../../constants';
import { selectUserRole } from '../../../../../../selectors';
import styled from 'styled-components';

const CommentContainer = ({
	className,
	postId,
	id,
	author,
	content,
	publishedAt,
}) => {
	const dispatch = useDispatch();
	const requestServer = useServerRequest();
	const userRole = useSelector(selectUserRole);

	const onCommentRemove = (id) => {
		dispatch(
			openModal({
				text: 'Удалить комментарий?',
				onConfirm: () => {
					dispatch(removeCommentAsync(requestServer, postId, id));
					dispatch(CLOSE_MODAL);
				},

				onCancel: () => dispatch(CLOSE_MODAL),
			}),
		);
	};

	const isAdminOrModerator = [ROLE.ADMIN, ROLE.MODERATOR].includes(userRole);
	return (
		<div className={className}>
			<div className="comment">
				<div className="information-panel">
					<div className="author">
						<Icon
							margin="0 0 0 0"
							id="fa-user-circle-o"
							size="18px"
							inactive={true}
						/>
						{author}
					</div>
					<div className="published-at">
						<Icon
							margin="0 0 0 0"
							id="fa-calendar-o"
							size="18px"
							inactive={true}
						/>
						{publishedAt}
					</div>
				</div>
				<div className="content-text">{content}</div>
			</div>
			{isAdminOrModerator && (
				<Icon
					margin="0 0 0 10px"
					id="fa-trash-o"
					size="21px"
					onClick={() => onCommentRemove(id)}
				/>
			)}
		</div>
	);
};

export const Comment = styled(CommentContainer)`
	display: flex;
	width: 100%;
	margin-top: 10px;

	& .comment {
		padding: 5px 10px;
		width: 550px;
		border: 1px solid #000;
	}

	& .information-panel {
		display: flex;
		justify-content: space-between;
	}
	& .author {
		display: flex;
	}

	& .published-at {
		display: flex;
	}
`;

Comment.propTypes = {
	postId: PropTypes.string.isRequired,
	id: PropTypes.number.isRequired,
	author: PropTypes.string.isRequired,
	content: PropTypes.string.isRequired,
	publishedAt: PropTypes.string.isRequired,
};
