import { Routes, Route } from 'react-router-dom';
import { Header, Footer } from './components';
import { Authorization, Registration } from './pages';
import styled from 'styled-components';

const Content = styled.div`
	padding: 120px 0;
`;
const AppColumn = styled.div`
	display: flex;
	flex-direction: column;
	justify-content: space-between;
	width: 1000px;
	min-height: 100%;
	background-color: #fff;
	margin: 0 auto;
`;

export const Blog = () => {
	return (
		<AppColumn>
			<Header />
			<Content>
				<Routes>
					<Route path="/" element={<div>Главная страница</div>}></Route>
					<Route path="/login" element={<Authorization />}></Route>
					<Route path="/register" element={<Registration />}></Route>
					<Route path="/users" element={<div>Пользователи</div>}></Route>
					<Route path="/users" element={<div>Пользователи</div>}></Route>
					<Route path="/post/:post_id" element={<div>Статья</div>}></Route>
					<Route path="/post" element={<div>Новая статья</div>}></Route>
					<Route path="*" element={<div>Ошибка</div>}></Route>
				</Routes>
			</Content>
			<Footer />
		</AppColumn>
	);
};
