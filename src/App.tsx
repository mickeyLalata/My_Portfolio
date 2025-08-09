import './Home.css';
import Home from './Home.tsx';
import Projects from './Projects.tsx';
import About from './About.tsx';

function App() {

  return (
    <>
    <div className='sm:overflow-x-hidden'>
      <nav className='relative flex items-center m-5 w-full sm:flex-col'>
        <div className='absolute left-0'>
          <p>Mickey Paulo S. Lalata</p>
        </div>

        <div className='grid grid-cols-4 gap-5 w-fit mx-auto'>
          <a href='#home' className='cursor-pointer font-mono'>Home</a>
          <a href='#projects' className='cursor-pointer font-mono'>Projects</a>
          <a href='#about' className='cursor-pointer font-mono'>About Me</a>
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
