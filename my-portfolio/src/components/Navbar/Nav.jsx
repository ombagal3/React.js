const Nav = () => {
    return <>
    <nav className="fixed w-full bg-darker/80 backdrop-blur-sm z-50 shadow-lg">
  <div className="container mx-auto px-6 py-4">
    <div className="flex justify-between items-center">
      <a href="#" className="text-2xl font-bold gradient-text">
        Om Bagal
      </a>
      
      <div className="md:hidden">
        <button
          id="menu-toggle"
          className="text-slate-200 hover:text-primary focus:outline-none"
        >
          <i className="fas fa-bars text-2xl" />
        </button>
      </div>
     
      <div className="hidden md:flex space-x-8">
        <a href="#home" className="nav-link active">
          Home
        </a>
        <a href="#about" className="nav-link">
          About
        </a>
        <a href="#skills" className="nav-link">
          Skills
        </a>
        <a href="#projects" className="nav-link">
          Projects
        </a>
        <a href="#contact" className="nav-link">
          Contact
        </a>
      </div>
    </div>
  
    <div id="mobile-menu" className="hidden md:hidden mt-4 pb-2">
      <a href="#home" className="block py-2 nav-link active">
        Home
      </a>
      <a href="#about" className="block py-2 nav-link">
        About
      </a>
      <a href="#skills" className="block py-2 nav-link">
        Skills
      </a>
      <a href="#projects" className="block py-2 nav-link">
        Projects
      </a>
      <a href="#contact" className="block py-2 nav-link">
        Contact
      </a>
    </div>
  </div>
</nav>
    
    
    </>
}



export default Nav;