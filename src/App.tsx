import './app.css';
import './Home.tsx';
import Home from './Home.tsx';

function App() {

  return (
    <>
      <nav className='mt-5'>
        <div className='grid grid-cols-4 w-75 justify-self-center gap-5'>
          <button className='cursor-pointer'>Home</button>
          <button className='cursor-pointer'>Projects</button>
          <button className='cursor-pointer'>About</button>
          <button className='cursor-pointer'>Resume</button>
        </div>
        <Home />
      </nav>
    </>
  )
}

export default App
