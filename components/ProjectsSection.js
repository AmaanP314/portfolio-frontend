import { useState, useEffect, useContext } from 'react';
import { motion } from 'framer-motion';
import { ThemeContext } from '../components/ThemeContext';

const mlProjects = [
  {
    title: 'Youtube Video Recommender',
    description: 'Brief overview of ML Project 1.',
    detailedDescription: `
    Developed a YouTube Video Recommender web app that analyzes video comments and other relevant
    metrices to suggest relevant videos allows users to search, filter, and visualize video data based on keywords,
    channels, or specific criteria.\n

    - Implemented the project using Flask, integrating YouTube Data API v3 with MySQL to fetch and store video
    data. Applied sentiment analysis using Naive Bayes and Logistic Regression on YouTube comments to
    recommend videos. Utilized Matplotlib and Seaborn to visualize metrics such as views, likes, composition
    rate, and engagement rate through box-line plots for deeper insights.\n

    - Facilitated market research by processing and analysing up to 50 videos data at a time, delivering key metrics
    like views, likes, and engagement rate, composite rate for actionable insights and content strategy.    
    `,
    githubLink: 'https://github.com/your-username/ml-project1',
    thumbnail: 'https://i.ibb.co/jLjsC7q/youtube-data.png', 
  },
];

const webScrapingProjects = [
  {
    title: 'Twitter Scraper',
    description: 'Brief overview of Web Scraping Project 1.',
    detailedDescription: 'Detailed description of Web Scraping Project 1, including its features, tech stack, and purpose.',
    githubLink: 'https://github.com/your-username/webscraping-project1',
    thumbnail: 'https://i.ibb.co/M21vcsH/twitter.png',
  },
  {
    title: 'Twitter Scraper',
    description: 'Brief overview of Web Scraping Project 1.',
    detailedDescription: 'Detailed description of Web Scraping Project 1, including its features, tech stack, and purpose.',
    githubLink: 'https://github.com/your-username/webscraping-project1',
    thumbnail: 'https://i.ibb.co/M21vcsH/twitter.png',
  },
  {
    title: 'Twitter Scraper',
    description: 'Brief overview of Web Scraping Project 1.',
    detailedDescription: 'Detailed description of Web Scraping Project 1, including its features, tech stack, and purpose.',
    githubLink: 'https://github.com/your-username/webscraping-project1',
    thumbnail: 'https://i.ibb.co/M21vcsH/twitter.png',
  },
  {
    title: 'Twitter Scraper',
    description: 'Brief overview of Web Scraping Project 1.',
    detailedDescription: 'Detailed description of Web Scraping Project 1, including its features, tech stack, and purpose.',
    githubLink: 'https://github.com/your-username/webscraping-project1',
    thumbnail: 'https://i.ibb.co/M21vcsH/twitter.png',
  },
  {
    title: 'Twitter Scraper',
    description: 'Brief overview of Web Scraping Project 1.',
    detailedDescription: 'Detailed description of Web Scraping Project 1, including its features, tech stack, and purpose.',
    githubLink: 'https://github.com/your-username/webscraping-project1',
    thumbnail: 'https://i.ibb.co/M21vcsH/twitter.png',
  },
  
];

const webDevProjects = [
  {
    title: 'Web Dev Project 1',
    description: 'Brief overview of Web Dev Project 1.',
    detailedDescription: 'Detailed description of Web Dev Project 1, including its features, tech stack, and purpose.',
    githubLink: 'https://github.com/your-username/webdev-project1',
    thumbnail: 'https://via.placeholder.com/300',
  },
];

const ProjectsSection = () => {
  const { theme, toggleTheme } = useContext(ThemeContext); 
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [currentProject, setCurrentProject] = useState(null);

  const openModal = (project) => {
    setCurrentProject(project);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setCurrentProject(null);
  };

  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape') closeModal();
    };

    const handleOutsideClick = (e) => {
      if (e.target.classList.contains('modal-overlay')) closeModal();
    };

    if (isModalOpen) {
      document.addEventListener('keydown', handleKeyDown);
      document.addEventListener('click', handleOutsideClick);
    }

    return () => {
      document.removeEventListener('keydown', handleKeyDown);
      document.removeEventListener('click', handleOutsideClick);
    };
  }, [isModalOpen]);

  const renderProjectCategory = (categoryTitle, projects) => (
    <section className={`py-12 ${theme === 'dark' ? 'bg-gray-800' : 'bg-white'}`}>
      <h2 className={`text-3xl font-extrabold text-center mb-8 ${theme === 'dark' ? 'text-gray-100' : 'text-gray-800'}`}>
        {categoryTitle}
      </h2>
      <div className="flex justify-center">
        <div className="flex flex-wrap justify-center gap-6 max-w-6xl">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              className={`relative group overflow-hidden border ${theme === 'dark' ? 'border-gray-700' : 'border-gray-300'} rounded-lg shadow-lg cursor-pointer`}
              onClick={() => openModal(project)}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3, delay: index * 0.1 }}
              style={{ width: '300px', height: '180px', position: 'relative' }}
            >
              <img
                src={project.thumbnail}
                alt={`${project.title} Thumbnail`}
                className="absolute top-0 left-0 w-full h-full object-cover group-hover:blur-sm transition-all duration-300"
              />
              <div className="absolute inset-0 flex flex-col items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-black bg-opacity-50 p-4">
                <h3 className="text-xl font-bold text-white mb-2" style={{ fontFamily: 'Montserrat, sans-serif' }}>{project.title}</h3>
                <p className="text-sm text-white" style={{ fontFamily: 'Open Sans, sans-serif' }}>{project.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );

  return (
    <section id="projects" className={`${theme === 'dark' ? 'bg-gray-800' : 'bg-white'} text-gray-900`}>
      {renderProjectCategory('Machine Learning Projects', mlProjects)}
      {renderProjectCategory('Web Scraping Projects', webScrapingProjects)}
      {renderProjectCategory('Web Development Projects', webDevProjects)}
      {isModalOpen && currentProject && (
        <div className="modal-overlay fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
          <div className={`p-10 rounded-lg shadow-2xl w-11/12 md:w-3/4 lg:w-2/3 max-h-[90vh] overflow-y-auto ${theme === 'dark' ? 'bg-gray-800 text-gray-100' : 'bg-white text-gray-900'}`}>
            <h3 className="text-3xl font-bold mb-4">{currentProject.title}</h3>
            <p className="mb-4">{currentProject.detailedDescription}</p>
            <a
              href={currentProject.githubLink}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-500 transition duration-200"
            >
              View on GitHub
            </a>
          </div>
        </div>
      )}
    </section>
  );
};

export default ProjectsSection;