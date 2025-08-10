import React from "react";

const Title = ({ children }: { children: React.ReactNode }) => {
	return <h1 className="flex flex-col justify-center items-center gap-4 lg:gap-6 text-3xl sm:text-4xl lg:text-5xl font-header">
		{children}
	</h1>
};

export default Title;