import './Home.css';
import Home from './Home.tsx';
import Projects from './Projects.tsx';
import About from './About.tsx';
import resumePaulo from './files/Resume_Front_End_Lalata.pdf';

function App() {

  return (
    <>
    <div className='overflow-x-hidden lg:overflow-x-visible'>
      <nav className='relative flex flex-col justify-center m-5 w-full mx-auto lg:flex-row '>
      <div className="lg:absolute lg:left-0 lg:top-0">
        <p className="text-center mb-4 md:mb-0">Mickey Paulo S. Lalata</p>
      </div>

        <div className='grid grid-cols-4 gap-5 w-[300px] mx-auto text-center'>
          <a href='#home' className='cursor-pointer font-mono'>Home</a>
          <a href='#projects' className='cursor-pointer font-mono'>Projects</a>
          <a href='#about' className='cursor-pointer font-mono'>About</a>
          <a href={resumePaulo} download="Resume_Front_End_Lalata.pdf" className='cursor-pointer font-mono'>Resume</a>
        </div>
      </nav>
      <div id='home' className='h-screen pt-24'>
        <Home />
      </div>
      <div id='projects' className='min-h-screen pt-24'>
        <Projects />
      </div>
      <div id='about' className='min-h-screen pt-24'>
        <About />
      </div>
    </div>
    </>
  )
}

export default App
