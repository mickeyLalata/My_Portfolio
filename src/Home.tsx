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
          <div className='flex w-120 flex-col translate-x-30 translate-y-30 relative'>
            <h1 className='text-m text-left font-mono'>Hello, I'm Mickey Paulo</h1>
            <p className='text-center text-5xl font-bold text-left'>
              <span className='text-red-500'>Front</span>end Developer
            </p>
            <br />
            <p className='font-mono'>
              I'm a Frontend developer based in the Philippines, I can help you <br />
              build a website or web application that suits your needs.
            </p>
            <br />
            <div className='flex flex-row gap-3'>
              <div className='relative inline-block'>
                <button
                  onClick={() => setShowContact(!showContact)}
                  className='bg-red-300 text-white w-40 rounded-2xl shadow-lg cursor-pointer font-mono'
                >
                  Get in Touch
                </button>

                <div
                  className={`absolute flex flex-col items-start transform transition-all duration-300 origin-top-left ${
                    showContact ? 'scale-100 opacity-100' : 'scale-0 opacity-0 pointer-events-none'
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
              <img src={pauloImg} alt="Paulo" className='translate-x-225 -translate-y-65 h-70 w-70 rounded-full'/>
            </div>
            <div>
              <div className='translate-x-217 -translate-y-143 h-85 w-85 rounded-full border-solid border-1'></div>
            </div>
          </div>
        </div>
    </>
  );
}

export default Home;
