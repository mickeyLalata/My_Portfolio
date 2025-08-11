import './Home.css';
import { useEffect, useRef, useState } from 'react';

function About() {
    const [visible, setVisible] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          setVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.2 }
    );

    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

    return (
        <>
            <div
                ref={ref}
                className={`transition-all duration-1000 ${visible ? 'translate-x-0 opacity-100' : 'translate-x-10 opacity-0'}`}
            >
                <h1 className='text-7xl font-serif mb-10 ml-15'>
                About{" "}<span className='text-red-500'>Me</span></h1>
                <h2 className='text-lg font-mono mb-15 ml-5 mr-5
                text-center
                lg:ml-25 lg:border-l-8 lg:border-red-500 pl-5'>I love to develop not just beautiful but also functional and helpful websites or web application, 
                that's why I always give my all <br />
                in every projects i work and keep on learning everyday. </h2>
                <br />
                <h1 className='text-3xl font-serif
                text-center 
                lg:ml-25 lg:text-left'>Skills</h1>
                <br />
                <div className='flex justify-center mb-20'>
                    <div className='grid gap-4 mx-auto ml-5 mr-5
                    grid-cols-2
                    lg:grid-cols-4 lg:ml-40 lg:gap-20'>
                        <div>
                            <h1 className='mb-10 font-bold'>
                                Front-End
                            </h1>
                            <ul className='space-y-3'>
                                <li>Hypertext Markup Language (HTML)</li>
                                <li>Cascading Style Sheet (CSS)</li>
                                <li>JavaScript (JS)</li>
                                <li>TypeScript (TS)</li>
                                <li>React</li>
                                <li>Vite</li>
                                <li>Bootstrap</li>
                                <li>Tailwind CSS</li>
                                <li>Webpack</li>
                                <li>Responsive Web Design</li>
                                <li>Wireframe</li>
                            </ul>
                        </div>
                        <div>
                            <h1 className='mb-10 font-bold'>
                                Back-End
                            </h1>
                            <ul className='space-y-3'>
                                <li>Node.js</li>
                                <li>Application Programming Interface (API)</li>
                            </ul>
                        </div>
                        <div>
                            <h1 className='mb-10 font-bold'>
                                Tools & Workflow
                            </h1>
                            <ul className='space-y-3'>
                                <li>Git</li>
                                <li>GitHub</li>
                                <li>Agile Methodology</li>
                                <li>Scrum (Basic)</li>
                            </ul>
                        </div>
                        <div>
                            <h1 className='mb-10 font-bold'>
                                Soft Skills
                            </h1>
                            <ul className='space-y-3'>
                                <li>Teamwork</li>
                                <li>Critical Thinking</li>
                                <li>Communication Skills</li>
                                <li>Collaboration</li>
                            </ul>
                        </div>
                    </div>
                </div>
                <h1 className='mb-10 text-3xl font-serif
                text-center
                lg:ml-25 lg:text-left'>Work Experience</h1>
                <div className='mb-20 font-mono 
                ml-5 mr-5
                lg:ml-40'>
                    <h1 className='font-bold text-xl mb-5'>IT Helpdesk Staff (OJT)</h1>
                    <h2 className='font-semibold mb-5'>Sutherland Global Services / 2019 - 2019 (300 Hours)</h2>
                    <ul className='space-y-5 ml-10'>
                        <li>Troubleshooting hardware and software issues</li>
                        <li>Install and configure Software</li>
                        <li>Monitor and maintain computer systems</li>
                        <li>Provide technical assistance</li>
                    </ul>
                    <hr className="border-t-2 border-dashed border-gray-400 my-4
                    lg:mr-40" />
                    <h1 className='font-bold text-xl mb-5'>Customer Service Representative</h1>
                    <h2 className='font-semibold mb-5'>TaskUs / 2024 - 2025</h2>
                    <ul className='space-y-5 ml-10'>
                        <li>Assist customer about their issues</li>
                        <li>Resolving customers concern</li>
                        <li>Providing resolution without the need to call back</li>
                    </ul>
                </div>
                <h1 className='mb-10 text-3xl font-serif text-center
                lg:ml-25 lg:text-left'>Certificates</h1>
                <ul className='font-mono mb-20 space-y-5 text-center ml-5 mr-5 lg:ml-40 lg:text-left'>
                    <li className='font-bold text-2xl'>RESPONSIVE WEB DESIGN</li>
                    <li>FreeCodeCamp</li>
                    <a 
                        href="https://www.freecodecamp.org/certification/MickeyPaulo/responsive-web-design" 
                        className='text-black hover:text-blue-500 active:text-blue-500'>
                        https://www.freecodecamp.org/certification/<br className='lg:hidden'/>MickeyPaulo/responsive-web-design
                    </a>
                </ul>
                <hr className="border-t-2 border-dashed border-gray-400 my-4 ml-5 mr-5 lg:ml-40 lg:mr-40" />
                <ul className='font-mono mb-20 space-y-5 text-center ml-5 mr-5 lg:ml-40 lg:text-left'>
                    <li className='font-bold text-2xl'>JAVASCRIPT ALGORITHMS AND DATA STRUCTURES</li>
                    <li>FreeCodeCamp</li>
                    <a 
                        href="https://www.freecodecamp.org/certification/MickeyPaulo/javascript-algorithms-and-data-structures-v8" 
                        className='text-black hover:text-blue-500'>
                        https://www.freecodecamp.org/certification/<br className='lg:hidden'/>MickeyPaulo/javascript-algorithms-and-data-structures-v8
                    </a>
                </ul>
                <hr className="border-t-2 border-dashed border-gray-400 my-4 ml-5 mr-5 lg:ml-40 lg:mr-40" />
                <ul className='font-mono mb-20 space-y-5 text-center ml-5 mr-5 lg:ml-40 lg:text-left'>
                    <li className='font-bold text-2xl'>FRONT-END DEVELOPMENT LIBRARIES</li>
                    <li>FreeCodeCamp</li>
                    <a 
                        href="https://www.freecodecamp.org/certification/MickeyPaulo/front-end-development-libraries" 
                        className='text-black hover:text-blue-500'>
                        https://www.freecodecamp.org/certification/<br className='lg:hidden'/>MickeyPaulo/front-end-development-libraries
                    </a>
                </ul>
                <hr className="border-t-2 border-dashed border-gray-400 my-4 ml-5 mr-5 lg:ml-40 lg:mr-40" />
                <ul className='font-mono mb-20 space-y-5 text-center ml-5 mr-5 lg:ml-40 lg:text-left'>
                    <li className='font-bold text-2xl'>IT FOR BUSINESS SUCCESS</li>
                    <li>FreeCodeCamp</li>
                    <a 
                        href="https://www.life-global.org/certificate/90ce0a0c-b5b3-44e8-b86b-4ba3e8247139" 
                        className='text-black hover:text-blue-500'>
                        https://www.life-global.org/<br className='lg:hidden'/>certificate/90ce0a0c-b5b3-44e8-b86b-4ba3e8247139
                    </a>
                </ul>
            </div>
        </>
    )
}

export default About