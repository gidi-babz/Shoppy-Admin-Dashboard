import React from 'react';

const Header = ({ category, title }) => {
	return (
		<div className="mb-10">
			<p className="text-gray-400 dark:text-gray-200 mt-2 ">{category}</p>
			<p className="text-3xl dark:text-gray-200 font-extrabold tracking-tight text-slate-900">
				{title}
			</p>
		</div>
	);
};

export default Header;
