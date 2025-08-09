function Contact() {
      /* Copying Gmail Link */
      const link = "mckyl1108@gmail.com";
      const globe = "09456518127";
      const dito = "09945603502";

      const handleClick = (
        e: React.MouseEvent<HTMLAnchorElement>,
        value: string
      ) => {
        e.preventDefault();
        navigator.clipboard.writeText(value)
          .then(() => alert(`Copied: ${value}`));
      };

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
        <a 
          href="#" 
          onClick={(e) => handleClick(e, link)} 
          className='underline hover:text-blue-600'
        >
            mckyl1108@gmail.com
        </a>
        <a 
          href="#" 
          onClick={(e) => handleClick(e, globe)} 
          className='underline hover:text-blue-600'
        >
            09456518127
        </a>
        <a 
          href="#" 
          onClick={(e) => handleClick(e, dito)} 
          className='underline hover:text-blue-600'
        >
            09945603502
        </a>
      </div>
    );
  }
  
  export default Contact;
  