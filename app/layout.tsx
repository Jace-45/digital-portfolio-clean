import type { Metadata } from 'next';
import { Geist, Geist_Mono } from 'next/font/google';
import './globals.css';

const geistSans = Geist({
	variable: '--font-geist-sans',
	subsets: ['latin'],
});

const geistMono = Geist_Mono({
	variable: '--font-geist-mono',
	subsets: ['latin'],
});

export const metadata: Metadata = {
	title: 'Win Htet Aung - Web Developer',
	description:
		'Welcome to my portfolio! I am a passionate web developer creating modern, responsive, and user-friendly websites. Specializing in frontend technologies and interactive user interfaces, I build engaging web experiences that make an impact.',
	keywords: [
		'Web Developer',
		'Frontend Developer',
		'React Developer',
		'Next.js',
		'JavaScript',
		'TypeScript',
		'HTML5',
		'CSS3',
		'Responsive Design',
		'UI/UX',
		'Web Accessibility',
		'Performance Optimization',
		'Modern Web Development',
		'Progressive Web Apps',
		'Win Htet Aung',
	],
	authors: [{ name: 'Win Htet Aung' }],
	creator: 'Win Htet Aung',
	openGraph: {
		title: 'Win Htet Aung - Web Developer Portfolio',
		description: "Portfolio of Win Htet Aung, aspiring software developer skilled in React, Node.js, GenAI, and full stack web development.",
		url: 'https://your-domain.com',
		siteName: 'Win Htet Aung - Portfolio',
		images: [
			{
				url: '/og-image.jpg',
				width: 1200,
				height: 630,
				alt: 'Win Htet Aung - Web Developer Portfolio',
			},
		],
		locale: 'en_US',
		type: 'website',
	},
	twitter: {
		card: 'summary_large_image',
		title: 'Win Htet Aung - Web Developer',
		description: "Portfolio of Win Htet Aung, aspiring software developer skilled in React, Node.js, GenAI, and full stack web development.",
		creator: '@yourusername',
		images: ['/og-image.jpg'],
	},
	robots: {
		index: true,
		follow: true,
		googleBot: {
			index: true,
			follow: true,
			'max-video-preview': -1,
			'max-image-preview': 'large',
			'max-snippet': -1,
		},
	},
};

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<html lang="en">
			<body className={`${geistSans.variable} ${geistMono.variable} antialiased`}>{children}</body>
		</html>
	);
}
