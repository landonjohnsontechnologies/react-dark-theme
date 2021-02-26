// create a button to control the next-themes state

import { useState, useEffect } from "react";
import { useTheme } from "next-themes";
import React from "react";

export default function ToggleMode() {
	const [mounted, setMounted] = useState();
	const { theme, setTheme } = useTheme();
	useEffect(() => setMounted(true), []);

	if (!mounted) return null;

	const toggleLight = () => {
		setTheme(theme === "light" ? "dark" : "light");
		console.log(theme);
	};

	return (
		<button
			className="border border-black dark:border-white rounded-sm shadow-sm px-2 py-1"
			onClick={toggleLight}
		>
			Testing Dark Mode
		</button>
	);
}
