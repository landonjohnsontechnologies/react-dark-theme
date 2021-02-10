import Head from "next/head";
import ToggleMode from "../components/toggleMode";

export default function Home() {
	return (
		<div className="dark:bg-black dark:text-white min-h-screen flex items-center justify-center">
			<main>
				<article>
					<section>
						<ToggleMode />
					</section>
				</article>
			</main>
		</div>
	);
}
