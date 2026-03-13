import Profile from '../../assets/raj4.png'

const Hero = () => {
    return <>
    


    <section id="home" className="min-h-screen flex items-center pt-20">
  <div className="container mx-auto px-6 flex flex-col md:flex-row items-center justify-between">
    <div className="md:w-1/2 mb-12 md:mb-0">
      <h1 className="text-4xl md:text-6xl font-bold mb-4">
        Hi, I'm <span className="gradient-text">Om Bagal</span>
      </h1>
      <h2 className="text-2xl md:text-3xl font-semibold mb-6 text-slate-300">
        {" "}
        Fullstack Developer
      </h2>
      <p className="text-lg mb-8 text-slate-400 max-w-lg">
        I'm a passionate developer skilled in backend and frontend technologies.
        I love building efficient and scalable applications I'am fullstack
        developer.
      </p>
      <div className="flex space-x-4">
        <a
          href="#contact"
          className="px-6 py-3 rounded-full btn-primary font-medium"
        >
          Hire Me
        </a>
        <a
          href="#projects"
          className="px-6 py-3 rounded-full border border-primary text-primary font-medium hover:bg-primary/10 transition"
        >
          View Work
        </a>
      </div>
      <div className="flex mt-8 space-x-4">
        <a
          href="https://github.com/ombagal3"
          className="social-icon text-xl w-10 h-10 flex items-center justify-center rounded-full bg-slate-800 hover:bg-primary"
        >
          <i className="fab fa-github" />
        </a>
        <a
          href="https://www.linkedin.com/in/om-bagal-ba2b2435a/"
          className="social-icon text-xl w-10 h-10 flex items-center justify-center rounded-full bg-slate-800 hover:bg-blue-600"
        >
          <i className="fab fa-linkedin-in" />
        </a>
        <a
          href="https://www.instagram.com/raj_bagal__01/"
          className="social-icon text-xl w-10 h-10 flex items-center justify-center rounded-full bg-slate-800 hover:bg-blue-400"
        >
          <i className="fab fa-instagram" />
        </a>
        <a
          href="#"
          className="social-icon text-xl w-10 h-10 flex items-center justify-center rounded-full bg-slate-800 hover:bg-pink-600"
        >
          <i className="fab fa-dribbble"/>
        </a>
      </div>
    </div>
    <div className="md:w-1/2 flex justify-center">
      <div className="relative w-64 h-64 md:w-80 md:h-80 lg:w-96 lg:h-96">
        <div className="absolute inset-0 rounded-full bg-gradient-to-br from-primary to-secondary blur-xl opacity-20"></div>
        <img
          src={Profile}
          alt="Profile"
          className="relative w-full h-full object-cover rounded-full border-4 border-slate-800 floating"
        />
      </div>
    </div>
  </div>
</section>



    
    </>
}

export default Hero;