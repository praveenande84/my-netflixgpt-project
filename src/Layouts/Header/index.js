/* -----> Third Party Packages <----- */
import React from 'react';

/* -----> Assets <----- */
import { NETFLIX_LOGO } from '../../Assests/images';

/* -----> Component <----- */
const Header = () => {
	console.log('Header Layout');

	// Return JSX
	return (
		<div className="absolute px-8 py-2 bg-gradient-to-b from-black z-10">
			<img src={NETFLIX_LOGO} alt="logo" className="w-44" />
		</div>
	);
};

/* -----> Export <----- */
export default Header;
