

const Footer = () => {
    return <>
    <>
  <footer className="bg-darker py-12">
    <div className="container mx-auto px-6">
      <div className="flex flex-col md:flex-row justify-between items-center">
        <div className="mb-6 md:mb-0">
          <a href="#" className="text-2xl font-bold gradient-text">
            Portfolio By Om
          </a>
          <p className="text-slate-400 mt-2" />
        </div>
        <div className="flex space-x-6">
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
            <i className="fab fa-dribbble" />
          </a>
        </div>
      </div>
      <div className="border-t border-slate-800 mt-8 pt-8 text-center text-slate-500">
        <p>
          <i className="fas fa-heart text-red-500" />{" "}
          <i className="fas fa-coffee text-amber-500" />
        </p>
      </div>
    </div>
  </footer>
  <button
    id="back-to-top"
    className="fixed bottom-8 right-8 w-12 h-12 bg-primary rounded-full flex items-center justify-center text-white shadow-lg hidden"
  >
    <i className="fas fa-arrow-up" />
  </button>
</>

    </>
}
export default Footer;