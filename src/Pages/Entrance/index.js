/* -----> Third Party Packages <----- */
import React from 'react';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';

/* -----> External Components <----- */
import Login from '../Login';
import Browse from '../Browse';

/* -----> Component <----- */
const Entrance = () => {
	console.log('Entrance Page');

	// Routing
	const appRouter = createBrowserRouter([
		{
			path: '/',
			element: <Login />,
		},
		{
			path: '/browse',
			element: <Browse />,
		},
	]);

	// Return JSX
	return (
		<div>
			<RouterProvider router={appRouter} />
		</div>
	);
};

/* -----> Export <----- */
export default Entrance;
