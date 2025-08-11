import { useEffect, useState } from 'react';
import Contact from './Contact';
import './Home.css';
import pauloImg from './img/paulo.png';

function Home() {
    /* For Get in touch behavior */
  const [showContact, setShowContact] = useState(false);
  const [loaded, setLoaded] = useState(false);

      useEffect(() => {
        setLoaded(true);
      }, []);

  return (
    <>
        <div
          className={`transition-all duration-1000 ${
            loaded ? 'translate-x-0 opacity-100' : '-translate-x-full opacity-0'
          }`}
        >
          <div className='relative flex flex-col md:w-120 md:translate-x-30 md:translate-y-30'>
            <h1 className='text-m text-center font-mono lg:text-left'>Hello, I'm Mickey Paulo</h1>
            <p className='text-center text-5xl font-bold text-center lg:text-left'>
              <span className='text-red-500'>Front</span>end Developer
            </p>
            <br />
            <p className='font-mono text-center lg:text-left'>
              I'm a Frontend developer based in the Philippines,<br className='lg:hidden' /> I can help you <br />
              build a website or web application that suits your needs.
            </p>
            <br />
            <div className='flex flex-row gap-2 justify-center lg:justify-start'>
              <div className='relative inline-block'>
                <button
                  onClick={() => setShowContact(!showContact)}
                  className='bg-red-300 text-white w-40 rounded-2xl shadow-lg cursor-pointer font-mono'
                >
                  Get in Touch
                </button>

                <div
                  className={`absolute flex flex-col items-start transform transition-all duration-300 origin-top-left ${
                    showContact ? 'scale-100 opacity-100 bg-white' : 'scale-0 opacity-0 pointer-events-none'
                  } bg-gray-00 p-4 rounded shadow z-10`}
                  style={{ top: '40px', left: '0%' }}
                >
                  <Contact />
                </div>
              </div>
              <button onClick={() => window.open('https://github.com/mickeyLalata', '_blank')}
              className='bg-gray-300 w-40 rounded-2xl shadow-lg cursor-pointer font-mono'>
                GitHub
              </button>
            </div>
            <div className={`transition-all duration-2000 ${
            loaded ? 'translate-x-0 opacity-100' : '-translate-x-full opacity-0'
          }`}
            >
              <div className='inline-block p-5 rounded-full border border-solid border-gray-500 mx-auto'>
                <img 
                  src={pauloImg} 
                  alt="Paulo" 
                  className='flex h-70 w-70 rounded-full
                  border border-solid border-2 justify-center
                  lg:translate-x-225 lg:-translate-y-75'/>
                </div>
              
            </div>
          </div>
        </div>
    </>
  );
}

export default Home;
