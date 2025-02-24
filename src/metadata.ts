import type { Metadata } from "next";
export const metadata: Metadata = {
	metadataBase: new URL("https://next-learn-dashboard.vercel.sh"),
	title: {
		template: "%s | PainPoint",
		default: "PainPoint",
	},
	description:
		"App for first-time founders to practice and improve their user interviewing skills.",
	keywords: ["Startup", "Founder", "AI", "the mom test", "customer discovery"],
	authors: [
		{
			name: "Enrique Flores",
			url: "https://www.linkedin.com/in/enriqueflores000/",
		},
	],
};
