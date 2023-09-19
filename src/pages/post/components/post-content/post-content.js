import styled from 'styled-components';
import { H2 } from '../../../../components';
import { Icon } from '../../../../components';

const PostContentContainer = ({
	className,
	post: { title, imageUrl, content, publishedAt },
}) => {
	return (
		<div className={className}>
			<img src={imageUrl} alt={title} />
			<H2>{title}</H2>
			<div className="special-panel">
				<div className="published-at">
					<Icon margin="0 7px 0 0" id="fa-calendar-o" size="18px" />
					{publishedAt}
				</div>
				<div className="buttons">
					<Icon margin="0 10px 0 0" id="fa-pencil-square-o" size="21px" />
					<Icon id="fa-trash-o" size="21px" />
				</div>
			</div>
			<div className="post-text">{content}</div>
		</div>
	);
};

export const PostContent = styled(PostContentContainer)`
	& img {
		float: left;
		margin: 0 20px 10px 0;
	}
	& .special-panel {
		display: flex;
		justify-content: space-between;
		font-size: 18px;
		margin: -20px 0 20px;
	}
	& .published-at {
		display: flex;
	}

	& i {
		position: relative;
		top: -1px;
	}

	& .buttons {
		display: flex;
	}

	& .post-text {
		font-size: 18px;
	}
`;
