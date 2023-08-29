import { useEffect, useState } from 'react';
import { styled } from 'styled-components';

const FooterContainer = ({ className }) => {
	const [city, setCity] = useState();
	const [temprature, setTemprature] = useState();
	const [weather, setWeather] = useState();
	useEffect(() => {
		fetch(
			'https://api.openweathermap.org/data/2.5/weather?q=Moscow&units=metric&lang=ru&appid=c60f38cf75ca2ede6afe2a0b717bf827',
		)
			.then((res) => res.json())
			.then(({ main, name, weather }) => {
				setCity(name);
				setTemprature(Math.round(main.temp));
				setWeather(weather[0].description);
			});
	}, []);
	return (
		<div className={className}>
			<div>
				<div>Блог веб-разработчика</div>
				<div>web@developer.ru</div>
			</div>
			<div>
				<div>
					{city},{' '}
					{new Date().toLocaleString('ru', { day: 'numeric', month: 'long' })}
				</div>
				<div>
					{temprature} градусов, {weather}
				</div>
			</div>
		</div>
	);
};

export const Footer = styled(FooterContainer)`
	display: flex;
	justify-content: space-between;
	width: 1000px;
	height: 120px;
	align-items: center;
	font-weight: bold;
	padding: 20px 40px;
	box-shadow: 0px 2px 17px #000;
	background-color: #fff;
`;
