"use client";

import React, { useState } from 'react';
import Image from 'next/image';

const projectVideos = {
  'Spectrum Fest 2024': 'SpectrumFest_Optimized.mp4',
  'Nestify – Smart Home Web App': 'Nestify_Optimized.mp4',
  'Autosume – AI Recruitment Platform': 'Autosume_Optimized.mp4',
};

export const ProjectsSection = () => {
  const [selectedProject, setSelectedProject] = useState<string | null>(null);

  const projects = [
    {
      title: 'Spectrum Fest 2024',
      description: 'Multi-page festival website featuring artist highlights, event schedules, and interactive ticket booking interface.',
      details: [
        'Responsive multi-page design for a fictional music festival',
        'Dynamic UI components including schedule filters and like buttons',
        'Confirmation page with real-time display of user inputs',
        'Frontend-only project built with JavaScript, HTML, and CSS',
      ],
      image: '/code.jpg',
    },
    {
      title: 'Nestify – Smart Home Web App',
      description: 'Full-stack web app for managing home repair bookings, appliance donations, and real-time customer-staff chat.',
      details: [
        'Developed sustainability-focused modules for donation listings and service scheduling',
        'Built user profile system using Flask and Shelve; real-time image uploads via Firebase',
        'Designed responsive interface using Tailwind UI',
        'Collaborated on conditional content logic and secure live chat experience',
      ],
      image: '/code.jpg',
    },
    {
      title: 'Autosume – AI Recruitment Platform',
      description: 'AI-powered system for resume screening, interview scheduling, and candidate communication with GenAI integration.',
      details: [
        'Implemented GenAI-based resume scoring and chatbot FAQ support',
        'Created admin dashboard for job postings, filtering, and interview tracking',
        'Used MongoDB for data persistence, with React.js and Node.js on the stack',
        'Presented to industry judges as part of the SCCCI AI Challenge',
      ],
      image: '/code.jpg',
    },
  ];

  return (
    <section id="work" className="py-12 sm:py-20 px-4 bg-[#161B22] scroll-mt-20">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-2xl sm:text-3xl font-bold mb-8 sm:mb-12 text-center">Featured Projects</h2>
        <div className="space-y-8 sm:space-y-12">
          {projects.map((project) => (
            <div
              key={project.title}
              className="bg-[#21262D] rounded-lg overflow-hidden group hover:ring-2 ring-blue-500 transition-all"
            >
              <div className="grid grid-cols-1 lg:grid-cols-2">
                <div className="p-4 sm:p-6 space-y-4 sm:space-y-6">
                  <h3 className="text-xl sm:text-2xl font-bold">{project.title}</h3>
                  <p className="text-sm sm:text-base text-gray-400">{project.description}</p>
                  <ul className="list-disc list-inside space-y-2 text-sm sm:text-base text-gray-300 pt-2">
                    {project.details.map((point) => (
                      <li key={point} className="marker:text-blue-400">{point}</li>
                    ))}
                  </ul>
                  <button
                    onClick={() => setSelectedProject(project.title)}
                    className="mt-4 inline-block px-4 py-2 text-sm font-medium text-white bg-blue-600 rounded hover:bg-blue-500 transition-colors"
                  >
                    Play Demo Video
                  </button>
                </div>
                <div className="relative h-full min-h-[300px] lg:min-h-full">
                  <Image
                    src={project.image}
                    alt={project.title}
                    fill
                    className="object-cover"
                    sizes="(max-width: 1024px) 100vw, 50vw"
                  />
                  <div className="absolute inset-0 bg-gradient-to-b lg:bg-gradient-to-r from-[#21262D] via-transparent to-transparent lg:via-[#21262D]/20 lg:to-[#21262D]/40"></div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Video Modal */}
      {selectedProject && (
        <div className="fixed inset-0 bg-black bg-opacity-80 flex items-center justify-center z-50 p-4">
          <div className="relative max-w-4xl w-full bg-black rounded-lg overflow-hidden">
            <video
              src={selectedProject ? projectVideos[selectedProject as keyof typeof projectVideos] : ''}
              controls
              autoPlay
              className="w-full h-auto rounded-lg"
            />
            <button
              onClick={() => setSelectedProject(null)}
              className="absolute top-2 right-2 text-white bg-gray-800 rounded-full p-2 hover:bg-gray-700"
            >
              ✕
            </button>
          </div>
        </div>
      )}
    </section>
  );
};
