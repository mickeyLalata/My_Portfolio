import './Home.css';
import gameBacklog from './img/gamebacklog.png';
import bakeShop from './img/bakeshop.png';
import weatherAPI from './img/weatherapp.png';
import { useEffect, useRef, useState } from 'react';

function ProjectCard({ img, alt, title }: { img: string; alt: string; title: string }) {
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
    <div
      ref={ref}
      className={`border border-gray-100 rounded-2xl shadow-xl cursor-pointer w-80 h-110 lg:w-100 lg:h-140 hover:scale-105 active:scale-105 transition-all duration-1000 ${
        visible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
      }`}
    >
      <img src={img} alt={alt} className="w-70 h-70 mx-auto mt-6
      lg:w-80 lg:h-80" />
      <p className="text-center mt-4 font-semibold">{title}</p>
    </div>
  );
}

function Projects() {
  return (
    <>
        <h1 className='text-7xl font-serif mb-15 ml-15'>
            <span className='text-red-500'>My</span> Projects</h1>
        <div className="flex w-full justify-center">
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                <ProjectCard 
                    img={gameBacklog}  
                    alt="Game Backlog Tracker" 
                    title="Game Backlog Tracker"
                />      
                <ProjectCard    
                    img={bakeShop} 
                    alt="Bake Shop" 
                    title="Bake Shop Website" 
                />
                <ProjectCard   
                    img={weatherAPI}   
                    alt="Weather App" 
                    title="Weather App"
                />
            </div>
        </div>
        <br />
        <p className='ml-8 mt-20 font-mono'> 
            I also have projects finished under{" "}
            <a href="https://www.theodinproject.com/" target='_blank' className='underline hover:text-blue-600'>odinproject.com</a> 
            ,<br className='lg:hidden'/> if you want to see it visit my published{" "}
            <a href="https://mickeylalata.github.io/Odin-Projects/" target='_blank' className='underline hover:text-blue-600'>repository</a>.
        </p>
    </>
  );
}

export default Projects;
