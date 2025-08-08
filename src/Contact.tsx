function Contact() {
    return (
      <div className='flex flex-col p-5 items-center text-center'>
        <h2 className='text-xl font-bold mb-2'>Contact Info</h2>
        <a
          href='https://www.facebook.com/mickey.paulo.lalata.830254'
          target='_blank'
          rel='noopener noreferrer'
          className='underline hover:text-blue-600'
        >
            Facebook
        </a>
        <a
          href='https://www.linkedin.com/in/mickey-paulo-lalata/'
          target='_blank'
          rel='noopener noreferrer'
          className='underline hover:text-blue-600'
        >
            LinkedIn   
        </a>
      </div>
    );
  }
  
  export default Contact;
  