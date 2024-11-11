import { useContext } from 'react';
import { ThemeContext } from '../components/ThemeContext';

export default function SkillsSection() {
  const { theme, toggleTheme } = useContext(ThemeContext);
  const skills = [
    {
      category: 'Programming Languages',
      icons: [
        {
          name: 'Python',
          badge: 'https://img.shields.io/badge/Python-FFD43B?style=for-the-badge&logo=python&logoColor=blue',
          url: 'https://www.udemy.com/certificate/UC-ce806af5-c7a2-4804-8bb6-03176e19a99e/', 
        },
        {
          name: 'JavaScript',
          badge: 'https://img.shields.io/badge/JavaScript-323330?style=for-the-badge&logo=javascript&logoColor=F7DF1E',
          // url: 'https://example.com/javascript-course', 
        },
      ],
    },
    {
      category: 'ML and Data Science Tools',
      icons: [
        {
          name: 'TensorFlow',
          badge: 'https://img.shields.io/badge/TensorFlow-FF6F00?style=for-the-badge&logo=tensorflow&logoColor=white',
          url: 'https://www.udemy.com/certificate/UC-d29e5907-a21a-4786-9c00-68eb9eb0ea98/', // Add certificate link
        },
        {
          name: 'Keras',
          badge: 'https://img.shields.io/badge/Keras-D00000?style=for-the-badge&logo=keras&logoColor=white',
          url: 'https://www.udemy.com/certificate/UC-d29e5907-a21a-4786-9c00-68eb9eb0ea98/', // Add certificate link
        },
        {
          name: 'Pandas',
          badge: 'https://img.shields.io/badge/Pandas-150458?style=for-the-badge&logo=pandas&logoColor=white',
          url: 'https://www.udemy.com/certificate/UC-68e9c78f-91b2-40e4-8136-6166f0374a72/', // Add certificate link
        },
        {
          name: 'NumPy',
          badge: 'https://img.shields.io/badge/NumPy-013243?style=for-the-badge&logo=numpy&logoColor=white',
          url: 'https://www.udemy.com/certificate/UC-68e9c78f-91b2-40e4-8136-6166f0374a72/', // Add certificate link
        },
        {
          name: 'scikit-learn',
          badge: 'https://img.shields.io/badge/scikit--learn-F7931E?style=for-the-badge&logo=scikit-learn&logoColor=white',
          url: 'https://www.udemy.com/certificate/UC-d29e5907-a21a-4786-9c00-68eb9eb0ea98/', // Add certificate link
        },
        {
          name: 'Matplotlib',
          badge: 'https://img.shields.io/badge/Matplotlib-11557C?style=for-the-badge&logo=plotly&logoColor=white',
          url: 'https://www.udemy.com/certificate/UC-68e9c78f-91b2-40e4-8136-6166f0374a72/', // Add certificate link
        },
      ],
    },
    {
      category: 'Automation and Web Scraping',
      icons: [
        {
          name: 'Beautiful Soup',
          badge: 'https://img.shields.io/badge/Beautiful%20Soup-4B8BBE?style=for-the-badge&logo=python&logoColor=white',
          url: 'https://www.udemy.com/certificate/UC-915f7b99-ac6d-445c-a879-935e1f5a9930/',
        },
        {
          name: 'Selenium',
          badge: 'https://img.shields.io/badge/Selenium-43B02A?style=for-the-badge&logo=selenium&logoColor=white',
          url: 'https://www.udemy.com/certificate/UC-915f7b99-ac6d-445c-a879-935e1f5a9930/',
        },
        {
          name: 'Scrapy',
          badge: 'https://img.shields.io/badge/Scrapy-5A4E7A?style=for-the-badge&logo=scrapy&logoColor=white',
          url: 'https://www.udemy.com/certificate/UC-915f7b99-ac6d-445c-a879-935e1f5a9930/',
        },
      ],
    },
    {
      category: 'Database Tools',
      icons: [
        {
          name: 'PostgreSQL',
          badge: 'https://img.shields.io/badge/PostgreSQL-316192?style=for-the-badge&logo=postgresql&logoColor=white',
          url: 'https://www.hackerrank.com/certificates/2f90f848e0ef',
        },
        {
          name: 'SQLite',
          badge: 'https://img.shields.io/badge/Sqlite-003B57?style=for-the-badge&logo=sqlite&logoColor=white',
          url: 'https://www.hackerrank.com/certificates/2f90f848e0ef',
        },
        {
          name: 'MySQL',
          badge: 'https://img.shields.io/badge/MySQL-4479A1?style=for-the-badge&logo=mysql&logoColor=white',
          url: 'https://www.hackerrank.com/certificates/2f90f848e0ef',
        },
      ],
    },
    {
      category: 'Web Development',
      icons: [
        {
          name: 'HTML5',
          badge: 'https://img.shields.io/badge/HTML5-E34F26?style=for-the-badge&logo=html5&logoColor=white',
        },
        {
          name: 'CSS3',
          badge: 'https://img.shields.io/badge/CSS3-1572B6?style=for-the-badge&logo=css3&logoColor=white',
        },
        {
          name: 'Django',
          badge: 'https://img.shields.io/badge/Django-092E20?style=for-the-badge&logo=django&logoColor=green',
        },
        {
          name: 'Django REST',
          badge: 'https://img.shields.io/badge/django%20rest-ff1709?style=for-the-badge&logo=django&logoColor=white',
        },
        {
          name: 'React',
          badge: 'https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB',
        },
        {
          name: 'Flask',
          badge: 'https://img.shields.io/badge/Flask-000000?style=for-the-badge&logo=flask&logoColor=white',
        },
      ],
    },
  ];

  return (
    // <div className="py-20 bg-gray-100 text-center">
    <div className={`py-20 ${theme === 'dark' ? 'bg-gray-900 text-white' : 'bg-gray-100 text-black'} text-center`}>
      <button onClick={toggleTheme} className="absolute top-5 right-5 p-2 bg-blue-500 text-white rounded">
        Toggle Theme
      </button>
      <h2 className="text-4xl font-bold mb-4">Skills</h2>
      {skills.map((skillCategory, index) => (
        <div key={index} className="mt-6">
          <h4 className="text-2xl font-semibold mb-3">{skillCategory.category}</h4>
          <div className="flex flex-wrap justify-center gap-4">
            {skillCategory.icons.map((icon, iconIndex) => (
              <a
                key={iconIndex}
                href={icon.url}
                target="_blank"
                rel="noopener noreferrer"
              >
                <img src={icon.badge} alt={icon.name} className="h-10" />
              </a>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
}


// export default function SkillsSection() {
//   const skills = [
//     {
//       category: 'Programming Languages',
//       icons: [
//         {
//           name: 'Python',
//           badge: 'https://img.shields.io/badge/Python-FFD43B?style=for-the-badge&logo=python&logoColor=blue',
//           url: 'https://www.udemy.com/certificate/UC-ce806af5-c7a2-4804-8bb6-03176e19a99e/', // Certificate link
//         },
//         {
//           name: 'JavaScript',
//           badge: 'https://img.shields.io/badge/JavaScript-323330?style=for-the-badge&logo=javascript&logoColor=F7DF1E',
//           // url: 'https://example.com/javascript-course',
//         },
//       ],
//     },
//     {
//       category: 'ML and Data Science Tools',
//       icons: [
//         {
//           name: 'TensorFlow',
//           badge: 'https://img.shields.io/badge/TensorFlow-FF6F00?style=for-the-badge&logo=tensorflow&logoColor=white',
//           url: 'https://www.udemy.com/certificate/UC-d29e5907-a21a-4786-9c00-68eb9eb0ea98/', // Certificate link
//         },
//         {
//           name: 'Keras',
//           badge: 'https://img.shields.io/badge/Keras-D00000?style=for-the-badge&logo=keras&logoColor=white',
//           url: 'https://www.udemy.com/certificate/UC-d29e5907-a21a-4786-9c00-68eb9eb0ea98/', // Certificate link
//         },
//         {
//           name: 'Pandas',
//           badge: 'https://img.shields.io/badge/Pandas-150458?style=for-the-badge&logo=pandas&logoColor=white',
//           url: 'https://www.udemy.com/certificate/UC-68e9c78f-91b2-40e4-8136-6166f0374a72/', // Certificate link
//         },
//         {
//           name: 'NumPy',
//           badge: 'https://img.shields.io/badge/NumPy-013243?style=for-the-badge&logo=numpy&logoColor=white',
//           url: 'https://www.udemy.com/certificate/UC-68e9c78f-91b2-40e4-8136-6166f0374a72/', // Certificate link
//         },
//         {
//           name: 'scikit-learn',
//           badge: 'https://img.shields.io/badge/scikit--learn-F7931E?style=for-the-badge&logo=scikit-learn&logoColor=white',
//           url: 'https://www.udemy.com/certificate/UC-d29e5907-a21a-4786-9c00-68eb9eb0ea98/', // Certificate link
//         },
//         {
//           name: 'Matplotlib',
//           badge: 'https://img.shields.io/badge/Matplotlib-11557C?style=for-the-badge&logo=plotly&logoColor=white',
//           url: 'https://www.udemy.com/certificate/UC-68e9c78f-91b2-40e4-8136-6166f0374a72/', // Certificate link
//         },
//       ],
//     },
//     {
//       category: 'Automation and Web Scraping',
//       icons: [
//         {
//           name: 'Beautiful Soup',
//           badge: 'https://img.shields.io/badge/Beautiful%20Soup-4B8BBE?style=for-the-badge&logo=python&logoColor=white',
//           url: 'https://www.udemy.com/certificate/UC-915f7b99-ac6d-445c-a879-935e1f5a9930/',
//         },
//         {
//           name: 'Selenium',
//           badge: 'https://img.shields.io/badge/Selenium-43B02A?style=for-the-badge&logo=selenium&logoColor=white',
//           url: 'https://www.udemy.com/certificate/UC-915f7b99-ac6d-445c-a879-935e1f5a9930/',
//         },
//         {
//           name: 'Scrapy',
//           badge: 'https://img.shields.io/badge/Scrapy-5A4E7A?style=for-the-badge&logo=scrapy&logoColor=white',
//           url: 'https://www.udemy.com/certificate/UC-915f7b99-ac6d-445c-a879-935e1f5a9930/',
//         },
//       ],
//     },
//     {
//       category: 'Database Tools',
//       icons: [
//         {
//           name: 'PostgreSQL',
//           badge: 'https://img.shields.io/badge/PostgreSQL-316192?style=for-the-badge&logo=postgresql&logoColor=white',
//           url: 'https://www.hackerrank.com/certificates/2f90f848e0ef',
//         },
//         {
//           name: 'SQLite',
//           badge: 'https://img.shields.io/badge/Sqlite-003B57?style=for-the-badge&logo=sqlite&logoColor=white',
//           url: 'https://www.hackerrank.com/certificates/2f90f848e0ef',
//         },
//         {
//           name: 'MySQL',
//           badge: 'https://img.shields.io/badge/MySQL-4479A1?style=for-the-badge&logo=mysql&logoColor=white',
//           url: 'https://www.hackerrank.com/certificates/2f90f848e0ef',
//         },
//       ],
//     },
//     {
//       category: 'Web Development',
//       icons: [
//         {
//           name: 'HTML5',
//           badge: 'https://img.shields.io/badge/HTML5-E34F26?style=for-the-badge&logo=html5&logoColor=white',
//         },
//         {
//           name: 'CSS3',
//           badge: 'https://img.shields.io/badge/CSS3-1572B6?style=for-the-badge&logo=css3&logoColor=white',
//         },
//         {
//           name: 'Django',
//           badge: 'https://img.shields.io/badge/Django-092E20?style=for-the-badge&logo=django&logoColor=green',
//         },
//         {
//           name: 'Django REST',
//           badge: 'https://img.shields.io/badge/django%20rest-ff1709?style=for-the-badge&logo=django&logoColor=white',
//         },
//         {
//           name: 'React',
//           badge: 'https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB',
//         },
//         {
//           name: 'Flask',
//           badge: 'https://img.shields.io/badge/Flask-000000?style=for-the-badge&logo=flask&logoColor=white',
//         },
//       ],
//     },
//   ];

//   return (
//     <div className="py-20 bg-gray-900 text-center text-gray-100">
//       <h2 className="text-4xl font-bold mb-4 text-white">Skills</h2>
//       {skills.map((skillCategory, index) => (
//         <div key={index} className="mt-6">
//           <h4 className="text-2xl font-semibold mb-3 text-gray-200">{skillCategory.category}</h4>
//           <div className="flex flex-wrap justify-center gap-4">
//             {skillCategory.icons.map((icon, iconIndex) => (
//               <a
//                 key={iconIndex}
//                 href={icon.url}
//                 target="_blank"
//                 rel="noopener noreferrer"
//               >
//                 <img src={icon.badge} alt={icon.name} className="h-10" />
//               </a>
//             ))}
//           </div>
//         </div>
//       ))}
//     </div>
//   );
// }
