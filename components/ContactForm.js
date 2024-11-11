import React, { useState, useContext } from 'react';
import { FaLinkedin, FaGithub } from 'react-icons/fa';
import { SiHackerrank, SiLeetcode, SiGmail } from 'react-icons/si';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { ThemeContext } from '../components/ThemeContext';

const ContactForm = () => {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [loading, setLoading] = useState(false);

  const { theme, toggleTheme } = useContext(ThemeContext);
  
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.id]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    try {
      const response = await fetch('https://portfolio-backend-3upc.onrender.com/api/send-email/', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        setFormData({ name: '', email: '', message: '' });
        toast.success('Your message has been sent successfully!', {
          position: 'top-center',
          autoClose: 3000,
          hideProgressBar: true,
          closeOnClick: true,
          pauseOnHover: false,
          draggable: false,
        });
      } else {
        toast.error('Failed to send the message. Please try again later.', {
          position: 'top-center',
          autoClose: 3000,
          hideProgressBar: true,
          closeOnClick: true,
          pauseOnHover: false,
          draggable: false,
        });
      }
    } catch (error) {
      toast.error('An error occurred while sending the message.', {
        position: 'top-center',
        autoClose: 3000,
        hideProgressBar: true,
        closeOnClick: true,
        pauseOnHover: false,
        draggable: false,
      });
      console.error('Error:', error);
    } finally {
      setLoading(false);
    }
  };
  return (
    <section className={`py-16 ${theme === 'dark' ? 'bg-gray-900 text-gray-100' : 'bg-gray-200 text-gray-900'}`} id="contact">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-8">Contact Me</h2>
        <div className="flex flex-col justify-center items-center">
          <form className={`p-6 rounded-lg shadow-lg w-full md:w-2/3 ${theme === 'dark' ? 'bg-gray-800' : 'bg-white'}`} onSubmit={handleSubmit}>
            <div className="mb-4">
              <label htmlFor="name" className={`block text-sm font-semibold mb-2 ${theme === 'dark' ? 'text-gray-300' : ''}`}>Name</label>
              <input
                type="text"
                id="name"
                value={formData.name}
                onChange={handleChange}
                className={`w-full p-2 rounded ${theme === 'dark' ? 'bg-gray-700 border-gray-600 text-gray-100' : 'bg-gray-100 border-gray-300'}`}
                placeholder="Your name"
                required
              />
            </div>
            <div className="mb-4">
              <label htmlFor="email" className={`block text-sm font-semibold mb-2 ${theme === 'dark' ? 'text-gray-300' : ''}`}>Email</label>
              <input
                type="email"
                id="email"
                value={formData.email}
                onChange={handleChange}
                className={`w-full p-2 rounded ${theme === 'dark' ? 'bg-gray-700 border-gray-600 text-gray-100' : 'bg-gray-100 border-gray-300'}`}
                placeholder="Your email"
                required
              />
            </div>
            <div className="mb-4">
              <label htmlFor="message" className={`block text-sm font-semibold mb-2 ${theme === 'dark' ? 'text-gray-300' : ''}`}>Message</label>
              <textarea
                id="message"
                value={formData.message}
                onChange={handleChange}
                className={`w-full p-2 rounded ${theme === 'dark' ? 'bg-gray-700 border-gray-600 text-gray-100' : 'bg-gray-100 border-gray-300'}`}
                rows="5"
                placeholder="Your message"
                required
              ></textarea>
            </div>
            <button
              type="submit"
              className={`w-full ${loading ? 'bg-gray-600' : 'bg-indigo-600 hover:bg-indigo-500'} text-white font-bold py-2 rounded transition duration-300`}
              disabled={loading}
            >
              {loading ? 'Sending...' : 'Send Message'}
            </button>
          </form>
          <div className="flex flex-col items-center space-y-4 mt-8">
            <div className="flex space-x-6">
              <a href="https://www.linkedin.com/in/amaan-poonawala/" target="_blank" rel="noopener noreferrer" className={`text-blue-600 hover:text-blue-400 ${theme === 'dark' ? 'text-blue-400' : ''}`}>
                <FaLinkedin size={30} />
              </a>
              <a href="https://github.com/AmaanP314" target="_blank" rel="noopener noreferrer" className={`text-gray-800 hover:text-gray-600 ${theme === 'dark' ? 'text-gray-400' : ''}`}>
                <FaGithub size={30} />
              </a>
              <a href="https://leetcode.com/u/amaanpoonawala05/" target="_blank" rel="noopener noreferrer" className={`text-orange-600 hover:text-orange-500 ${theme === 'dark' ? 'text-yellow-400' : ''}`}>
                <SiLeetcode size={30} />
              </a>
              <a href="https://www.hackerrank.com/profile/amaanpoonawala05" target="_blank" rel="noopener noreferrer" className={`text-green-600 hover:text-green-500 ${theme === 'dark' ? 'text-green-400' : ''}`}>
                <SiHackerrank size={30} />
              </a>
              <a href="mailto:amaanpoonawala05@gmail.com" target="_blank" rel="noopener noreferrer" className={`text-red-600 hover:text-red-500 ${theme === 'dark' ? 'text-red-500' : ''}`}>
                <SiGmail size={30} />
              </a>
            </div>
          </div>
        </div>
      </div>
      {/* <ToastContainer /> */}
      <ToastContainer theme={theme === 'dark' ? 'dark' : 'light'} />
    </section>
  );
};

export default ContactForm;


// import React, { useState } from 'react';
// import { FaLinkedin, FaGithub } from 'react-icons/fa';
// import { SiHackerrank, SiLeetcode, SiGmail } from 'react-icons/si';
// import { ToastContainer, toast } from 'react-toastify';
// import 'react-toastify/dist/ReactToastify.css';

// const ContactForm = () => {
//   const [formData, setFormData] = useState({ name: '', email: '', message: '' });
//   const [loading, setLoading] = useState(false);

//   const handleChange = (e) => {
//     setFormData({ ...formData, [e.target.id]: e.target.value });
//   };

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     setLoading(true);

//     try {
//       const response = await fetch('http://localhost:8000/api/send-email/', {
//         method: 'POST',
//         headers: { 'Content-Type': 'application/json' },
//         body: JSON.stringify(formData),
//       });

//       if (response.ok) {
//         setFormData({ name: '', email: '', message: '' });
//         toast.success('Your message has been sent successfully!', {
//           position: 'top-center',
//           autoClose: 3000,
//           hideProgressBar: true,
//           closeOnClick: true,
//           pauseOnHover: false,
//           draggable: false,
//         });
//       } else {
//         toast.error('Failed to send the message. Please try again later.', {
//           position: 'top-center',
//           autoClose: 3000,
//           hideProgressBar: true,
//           closeOnClick: true,
//           pauseOnHover: false,
//           draggable: false,
//         });
//       }
//     } catch (error) {
//       toast.error('An error occurred while sending the message.', {
//         position: 'top-center',
//         autoClose: 3000,
//         hideProgressBar: true,
//         closeOnClick: true,
//         pauseOnHover: false,
//         draggable: false,
//       });
//       console.error('Error:', error);
//     } finally {
//       setLoading(false);
//     }
//   };

//   return (
//     <section className="bg-gray-900 text-gray-100 py-16" id="contact">
//       <div className="container mx-auto px-4">
//         <h2 className="text-3xl font-bold text-center mb-8 text-white">Contact Me</h2>
//         <div className="flex flex-col justify-center items-center">
//           <form className="bg-gray-800 p-6 rounded-lg shadow-lg w-full md:w-2/3" onSubmit={handleSubmit}>
//             <div className="mb-4">
//               <label htmlFor="name" className="block text-sm font-semibold mb-2 text-gray-300">Name</label>
//               <input
//                 type="text"
//                 id="name"
//                 value={formData.name}
//                 onChange={handleChange}
//                 className="w-full p-2 rounded bg-gray-700 border border-gray-600 text-gray-100"
//                 placeholder="Your name"
//                 required
//               />
//             </div>
//             <div className="mb-4">
//               <label htmlFor="email" className="block text-sm font-semibold mb-2 text-gray-300">Email</label>
//               <input
//                 type="email"
//                 id="email"
//                 value={formData.email}
//                 onChange={handleChange}
//                 className="w-full p-2 rounded bg-gray-700 border border-gray-600 text-gray-100"
//                 placeholder="Your email"
//                 required
//               />
//             </div>
//             <div className="mb-4">
//               <label htmlFor="message" className="block text-sm font-semibold mb-2 text-gray-300">Message</label>
//               <textarea
//                 id="message"
//                 value={formData.message}
//                 onChange={handleChange}
//                 className="w-full p-2 rounded bg-gray-700 border border-gray-600 text-gray-100"
//                 rows="5"
//                 placeholder="Your message"
//                 required
//               ></textarea>
//             </div>
//             <button
//               type="submit"
//               className={`w-full ${loading ? 'bg-gray-600' : 'bg-indigo-600 hover:bg-indigo-500'} text-white font-bold py-2 rounded transition duration-300`}
//               disabled={loading}
//             >
//               {loading ? 'Sending...' : 'Send Message'}
//             </button>
//           </form>
//           <div className="flex flex-col items-center space-y-4 mt-8">
//             <div className="flex space-x-6">
//               <a href="https://www.linkedin.com/in/amaan-poonawala/" target="_blank" rel="noopener noreferrer" className="text-blue-400 hover:text-blue-300">
//                 <FaLinkedin size={30} />
//               </a>
//               <a href="https://github.com/AmaanP314" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-gray-300">
//                 <FaGithub size={30} />
//               </a>
//               <a href="https://leetcode.com/u/amaanpoonawala05/" target="_blank" rel="noopener noreferrer" className="text-yellow-400 hover:text-yellow-300">
//                 <SiLeetcode size={30} />
//               </a>
//               <a href="https://www.hackerrank.com/profile/amaanpoonawala05" target="_blank" rel="noopener noreferrer" className="text-green-400 hover:text-green-300">
//                 <SiHackerrank size={30} />
//               </a>
//               <a href="mailto:amaanpoonawala05@gmail.com" target="_blank" rel="noopener noreferrer" className="text-red-500 hover:text-red-400">
//                 <SiGmail size={30} />
//               </a>
//             </div>
//           </div>
//         </div>
//       </div>
//       <ToastContainer />
//     </section>
//   );
// };

// export default ContactForm;
