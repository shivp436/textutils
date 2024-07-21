// Navbar.js
import React, { useState, useEffect } from 'react';
import Button from './Button';
import { Link } from 'react-router-dom';

function Navbar({
	title = 'Default TextUtils',
	about = 'About Utils',
	isDarkMode = false,
	setIsDarkMode,
	showAlert,
}) {
	const [ColorThemeButtonText, setColorThemeButtonText] = useState(
		<i className='fas fa-moon'></i>
	);
	const [navbarClasses, setNavbarClasses] = useState(
		'navbar navbar-expand-lg navbar-light bg-primary border-bottom border-body'
	);
	const [isFirstRender, setIsFirstRender] = useState(true);

	// Update button text and navbar style whenever isDarkMode changes
	useEffect(() => {
		setColorThemeButtonText(
			isDarkMode ? (
				<i className='fas fa-sun'></i>
			) : (
				<i className='fas fa-moon'></i>
			)
		);

    document.title = `TextUtils | ${isDarkMode ? 'Dark' : 'Light'} Mode`;

		setNavbarClasses(
			isDarkMode
				? 'navbar navbar-expand-lg navbar-dark bg-dark border-bottom border-body'
				: 'navbar navbar-expand-lg navbar-light bg-primary border-bottom border-body'
		);
	}, [isDarkMode]);

	useEffect(() => {
		if (isFirstRender) {
			setIsFirstRender(false);
		}
    else{
      showAlert({
				type: 'success',
				message: `Theme toggled to ${isDarkMode ? 'dark' : 'light'} mode`,
			});
    }
	}, [isDarkMode]);

	const toggleTheme = () => {
		setIsDarkMode((prev) => !prev);
	};

	return (
		<nav className={navbarClasses}>
			<div className='container-fluid'>
				<Link className='navbar-brand' to='/'>
					{title}
				</Link>
				<button
					className='navbar-toggler'
					type='button'
					data-bs-toggle='collapse'
					data-bs-target='#navbarSupportedContent'
					aria-controls='navbarSupportedContent'
					aria-expanded='false'
					aria-label='Toggle navigation'
				>
					<span className='navbar-toggler-icon'></span>
				</button>
				<div className='collapse navbar-collapse' id='navbarSupportedContent'>
					<ul className='navbar-nav me-auto mb-2 mb-lg-0'>
						<li className='nav-item'>
							<Link className='nav-link active' aria-current='page' to='/'>
								Home
							</Link>
						</li>
						<li className='nav-item'>
							<Link className='nav-link active' aria-disabled='true' to='/about'>
								{about}
							</Link> 
						</li>
					</ul>
					<Button label={ColorThemeButtonText} action={toggleTheme} />
				</div>
			</div>
		</nav>
	);
}

export default Navbar;
