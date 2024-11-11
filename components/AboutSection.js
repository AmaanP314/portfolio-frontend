// export default function AboutSection() {
//     return (
//       <div className="py-20 text-center">
//         <h2 className="text-4xl font-bold mb-4">About Me</h2>
//         <p className="text-lg mx-auto max-w-2xl">
//           I am Amaan Poonawala, Undergraduate in Data Science and AI with a strong foundation in Python and SQL, Proficient in web scraping using tools like Selenium and Scrapy, with hands-on experience scraping over 20 real-world websites, including Twitter, IMDb, and Amazon, totaling over 1,000 pages. Experienced in data analytics, utilizing MySQL, Pandas, NumPy, and Matplotlib to analyze datasets from various sources like IMDb, uncovering insights such as the relationship between genre and ratings
//         </p>
//       </div>
//     );
//   }
  
// export default function AboutSection() {
//   return (
//     <div className="py-20 text-center bg-gray-800 text-gray-100">
//       <h2 className="text-4xl font-bold mb-4 text-white">About Me</h2>
//       <p className="text-lg mx-auto max-w-2xl text-gray-300">
//         I am Amaan Poonawala, an undergraduate in Data Science and AI with a strong foundation in Python and SQL. I am proficient in web scraping using tools like Selenium and Scrapy, with hands-on experience scraping over 20 real-world websites, including Twitter, IMDb, and Amazon, totaling over 1,000 pages. I am experienced in data analytics, utilizing MySQL, Pandas, NumPy, and Matplotlib to analyze datasets from various sources like IMDb, uncovering insights such as the relationship between genre and ratings.
//       </p>
//     </div>
//   );
// }
import { useContext } from 'react';
import { ThemeContext } from '../components/ThemeContext';

export default function AboutSection() {
  const { theme } = useContext(ThemeContext);

  return (
    <div className={`py-20 text-center ${theme === 'dark' ? 'bg-gray-800 text-white' : 'bg-white text-black'}`}>
      <h2 className="text-4xl font-bold mb-4">About Me</h2>
      <p className="text-lg mx-auto max-w-2xl">
        I am Amaan Poonawala, Undergraduate in Data Science and AI with a strong foundation in Python and SQL, proficient in web scraping using tools like Selenium and Scrapy, with hands-on experience scraping over 20 real-world websites, including Twitter, IMDb, and Amazon, totaling over 1,000 pages. Experienced in data analytics, utilizing MySQL, Pandas, NumPy, and Matplotlib to analyze datasets from various sources like IMDb, uncovering insights such as the relationship between genre and ratings.
      </p>
    </div>
  );
}


