import { useState, useEffect } from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

import { IoMoon } from "react-icons/io5";

import { Container } from './Container';


const HeaderEl = styled.header`
box-shadow: var(--shadow);
background-color: (--colors-ui-base);
`;

const Wrapper = styled.div`
display: flex;
justify-content: space-between;
align-items: center;
padding: 2rem 0;
`;

const Title = styled(Link).attrs({
	to: '/',
})`
color: var(--color-text);
font-size: var(--fs-sm);
text-decoration: none;
font-weight: var(--fw-bold);
`;

const ThemeSwitcher = styled.div`
color: var(--color-text);
font-size: var(--fs-sm);
cursor: pointer;
font-weight: var(--fw-bold);
text-transform: capitalize;
`;

const Header = () => {
	const [theme, setTheme] = useState('light')

	const toggleTheme = () => setTheme(theme === 'light' ? 'dark' : 'light')

	useEffect(() => {
		document.body.setAttribute('data-theme', theme)
	}, [theme])
	return (
		<HeaderEl>
			<Container>
				<Wrapper>
					<Title>Where is the world?</Title>
					<ThemeSwitcher onClick={toggleTheme}>
						<IoMoon /><span style={{ marginLeft: '0.75rem' }}>{theme} Theme</span>
					</ThemeSwitcher>
				</Wrapper>
			</Container>
		</HeaderEl >
	)
}

export default Header
