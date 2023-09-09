import React, { useEffect, useState } from 'react'
import "../styles/Home.css"
function Typewriter() {
  const [text, setText] = useState('');
  const [fullTexts] = useState([
    'FrontEnd Development',
    'BackEnd Development',
    'Database management',
    'API Handling',
    'Cloud ',
    'Devops',
    'AI',
    'ML'
  ]);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isTyping, setIsTyping] = useState(true);

  useEffect(() => {
    const currentFullText = fullTexts[currentIndex];

    let charIndex = isTyping ? 0 : currentFullText.length;

    const typingInterval = setInterval(() => {
      if (isTyping) {
        if (charIndex < currentFullText.length) {
          setText(currentFullText.slice(0, charIndex + 1));
          charIndex++;
        } else {
          clearInterval(typingInterval);
          // Start erasing after a delay
          setTimeout(() => setIsTyping(false), 500); // Adjust the delay as needed
        }
      } else {
        if (charIndex > 0) {
          setText(currentFullText.slice(0, charIndex - 1));
          charIndex--;
        } else {
          clearInterval(typingInterval);
          // Move to the next sentence after erasing is complete
          setTimeout(() => {
            setCurrentIndex((prevIndex) => (prevIndex + 1) % fullTexts.length);
            setIsTyping(true);
          }, 500); // Adjust the delay as needed
        }
      }
    }, 100); // Adjust the interval for typing and erasing speed

    // Clear the interval when the component unmounts or when moving to the next sentence
    return () => clearInterval(typingInterval);
  }, [currentIndex, fullTexts, isTyping]);

  return (
    <div className="header-description">
      <span>{text}</span>
    </div>
  );
}

function Home() {
  return (
    <div className='header-container'>
    <div className="header-title">ASKNOW</div>
    <Typewriter/>
    </div>
  )
}

export default Home