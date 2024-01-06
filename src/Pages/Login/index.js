/* -----> Third Party Packages <----- */
import React, { useState } from 'react';

/* -----> External Components <----- */
import Header from '../../Layouts/Header';

/* -----> Assests <----- */
import { NETFLIX_BANNER } from '../../Assests/images';

/* -----> Component <----- */
const Login = () => {
	console.log('Login Page');

	// Local State
	const [isSignInForm, setIsSignInForm] = useState(true);

	// Methods
	const toggleForm = () => {
		console.log('Toggle Form');
		setIsSignInForm((prev) => !isSignInForm);
	};

	// Return JSX
	return (
		<div>
			<Header />
			<div className="absolute">
				<img src={NETFLIX_BANNER} alt="netflix-banner" />
			</div>

			<form className="bg-black flex flex-col p-12 w-3/12 text-white absolute my-36 mx-auto right-0 left-0 rounded-lg bg-opacity-80">
				<h1 className="text-3xl font-bold py-4">
					{isSignInForm ? 'Sign In' : 'Sign Up'}
				</h1>
				{!isSignInForm && (
					<input
						type="text"
						placeholder="Enter Full Name"
						className="p-4 my-2 w-full bg-gray-300 text-gray-600 rounded-lg placeholder-gray-500"
					/>
				)}
				<input
					type="text"
					placeholder="Enter Email"
					className="p-4 my-2 w-full bg-gray-300 text-gray-600 rounded-lg placeholder-gray-500"
				/>

				<input
					type="password"
					placeholder="Enter Password"
					className="p-4 my-2 w-full bg-gray-300 text-gray-600 rounded-lg placeholder-gray-500"
				/>
				<button className="p-4 my-6 bg-red-700 w-full rounded-lg">
					{isSignInForm ? 'Sign In' : 'Sign Up'}
				</button>
				<p className="cursor-pointer" onClick={toggleForm}>
					{isSignInForm
						? 'New to Netflix? Sign Up Now'
						: 'Already registered? Sign In Now.'}
				</p>
			</form>
		</div>
	);
};

/* -----> Export <----- */
export default Login;
