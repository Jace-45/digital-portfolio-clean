import React from 'react';

export const SkillsSection = () => {
	return (
		<section className="py-12 sm:py-20 px-4 bg-[#161B22]">
			<div className="max-w-6xl mx-auto">
				<h2 className="text-2xl sm:text-3xl font-bold mb-8 sm:mb-16 text-center">Technical Expertise</h2>
				<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-8">
					{[
						{
							category: 'Frontend Development',
							skills: [
								'React & Next.js',
								'HTML5 & CSS3',
								'JavaScript (ES6)',
								'Tailwind CSS',
							],
							icon: '🎨',
						},
						{
							category: 'Backend & APIs',
							skills: [
								'Node.js',
								'Flask (Python)',
								'RESTful APIs',
								'C#',
							],
							icon: '⚙️',
						},
						{
							category: 'Databases & Tools',
							skills: [
								'Firebase Firestore',
								'MongoDB',
								'MySQL',
								'Git & GitHub',
							],
							icon: '🛠️',
						},
						{
							category: 'Data & Analytics',
							skills: [
								'Tableau',
								'SQL / MySQL Queries',
								'Google Sheets (Advanced)',
								'Google Apps Script',
							],
							icon: '📊',
						},
						{
							category: 'Other Technical Knowledge',
							skills: [
								'Networking Basics',
								'Infocomm Security Concepts',
								'Agile Development',
								'UI/UX Principles',
							],
							icon: '💡',
						},
					].map((category) => (
						<div key={category.category} className="bg-[#21262D] rounded-lg p-6 transform hover:scale-[1.02] transition-all">
							<div className="flex items-center gap-3 mb-6">
								<span className="text-3xl">{category.icon}</span>
								<h3 className="text-xl font-bold">{category.category}</h3>
							</div>
							<ul className="list-disc list-inside text-gray-300 space-y-2">
								{category.skills.map((skill) => (
									<li key={skill}>{skill}</li>
								))}
							</ul>
						</div>
					))}
				</div>
			</div>
		</section>
	);
};
