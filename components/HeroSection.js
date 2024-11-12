import dynamic from "next/dynamic";
import { useContext } from "react";
import { ThemeContext } from "../components/ThemeContext"; // Import ThemeContext

const Typewriter = dynamic(() => import("react-typewriter-effect"), {
  ssr: false,
});

export default function HeroSection() {
  const { theme, toggleTheme } = useContext(ThemeContext); // Get theme and toggleTheme from context

  const isLightTheme = theme === "light"; // Check if the current theme is light

  return (
    <div
      className={`relative flex flex-col items-center justify-center h-screen text-white overflow-hidden ${
        isLightTheme
          ? "bg-gradient-to-b from-blue-500 to-purple-700"
          : "bg-gradient-to-r from-gray-800 via-black to-gray-800"
      }`}
    >
      <div className="absolute inset-0 z-0">
        {[...Array(isLightTheme ? 100 : 120)].map((_, index) => (
          <div
            key={index}
            className="raindrop"
            style={{
              left: `${Math.random() * 100}vw`,
              animationDelay: `${Math.random() * 2}s`,
              animationDuration: `${2 + Math.random() * (isLightTheme ? 2 : 3)}s`,
              opacity: `${Math.random() * (isLightTheme ? 0.7 : 0.5) + 0.1}`,
              width: `${Math.random() * (isLightTheme ? 2 : 1.5) + 0.5}px`,
              height: `${Math.random() * (isLightTheme ? 15 : 20) + 5}px`,
            }}
          />
        ))}
      </div>

      <div className="relative z-10 text-center">
        <h1
          className={`text-5xl font-bold mb-4 ${
            isLightTheme ? "text-white" : "text-gray-100"
          } tracking-tight drop-shadow-lg`}
        >
          <Typewriter
            textStyle={{
              fontFamily: "Montserrat, sans-serif",
              fontWeight: 700,
              fontSize: "3rem",
            }}
            startDelay={500}
            cursorColor={isLightTheme ? "white" : "gray"}
            multiText={["Hi, I'm Amaan Poonawala"]}
            typeSpeed={100}
            deleteSpeed={50}
            delaySpeed={200}
            hideCursorAfterText={true}
          />
        </h1>
        <h2
          className={`text-3xl font-semibold mt-4 ${
            isLightTheme ? "text-white" : "text-gray-200"
          } drop-shadow-md`}
        >
          <Typewriter
            textStyle={{
              fontFamily: "Open Sans, sans-serif",
              fontWeight: 300,
              fontSize: "2rem",
            }}
            startDelay={3500}
            cursorColor={isLightTheme ? "white" : "gray"}
            multiText={[
              "AI & Data Science Undergraduate",
              "Data Analytics",
              "Python",
              "Web Scraping",
            ]}
            loop={true}
            typeSpeed={100}
            deleteSpeed={50}
            delaySpeed={1000}
            hideCursorAfterText={true}
          />
        </h2>
      </div>
      <style jsx>
        {`
          .raindrop {
            position: absolute;
            background-color: rgba(255, 255, 255, 0.7);
            border-radius: 50%;
            top: -20px;
            animation: fall linear infinite;
          }

          @keyframes fall {
            0% {
              transform: translateY(0);
            }
            100% {
              transform: translateY(100vh);
            }
          }
        `}
      </style>
    </div>
  );
}


// import dynamic from "next/dynamic";

// const Typewriter = dynamic(() => import("react-typewriter-effect"), {
//   ssr: false,
// });

// export default function HeroSection() {
//   return (
//     <div className="relative flex flex-col items-center justify-center h-screen text-gray-200 overflow-hidden bg-gradient-to-r from-gray-800 via-black to-gray-800">
//       <div className="absolute inset-0 z-0">
//         {[...Array(120)].map((_, index) => (
//           <div
//             key={index}
//             className="raindrop"
//             style={{
//               left: `${Math.random() * 100}vw`,
//               animationDelay: `${Math.random() * 2}s`,
//               animationDuration: `${2 + Math.random() * 3}s`,
//               opacity: `${Math.random() * 0.5 + 0.1}`,
//               width: `${Math.random() * 1.5 + 0.5}px`,
//               height: `${Math.random() * 15 + 5}px`,
//             }}
//           />
//         ))}
//       </div>

//       <div className="relative z-10 text-center">
//         <h1 className="text-6xl font-extrabold mb-6 tracking-tight text-gray-100 drop-shadow-lg">
//           <Typewriter
//             textStyle={{
//               fontFamily: "Montserrat, sans-serif",
//               fontWeight: 800,
//               fontSize: "3.5rem",
//             }}
//             startDelay={500}
//             cursorColor="gray"
//             multiText={["Hi, I'm Amaan Poonawala"]}
//             typeSpeed={80}
//             deleteSpeed={50}
//             delaySpeed={500}
//             hideCursorAfterText={true}
//           />
//         </h1>
//         <h2 className="text-2xl font-medium mt-4 text-gray-200 drop-shadow-md">
//           <Typewriter
//             textStyle={{
//               fontFamily: "Open Sans, sans-serif",
//               fontWeight: 400,
//               fontSize: "1.75rem",
//             }}
//             startDelay={3500}
//             cursorColor="gray"
//             multiText={[
//               "AI & Data Science Undergraduate",
//               "Data Analytics",
//               "Python",
//               "Web Scraping",
//             ]}
//             loop={true}
//             typeSpeed={70}
//             deleteSpeed={40}
//             delaySpeed={800}
//             hideCursorAfterText={true}
//           />
//         </h2>
//       </div>

//       <style jsx>{`
//         .raindrop {
//           position: absolute;
//           background-color: rgba(255, 255, 255, 0.3); /* Dimmer color for dark theme */
//           border-radius: 50%;
//           top: -20px;
//           animation: fall linear infinite;
//         }

//         @keyframes fall {
//           0% {
//             transform: translateY(0);
//           }
//           100% {
//             transform: translateY(100vh);
//           }
//         }
//       `}</style>
//     </div>
//   );
// }
