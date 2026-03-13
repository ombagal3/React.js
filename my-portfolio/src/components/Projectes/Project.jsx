


const Project = () => {
    return <>
   <section id="projects" className="py-20 bg-darker">
  <div className="container mx-auto px-6">
    <div className="text-center mb-16">
      <h2 className="text-3xl md:text-4xl font-bold mb-4">
        My <span className="gradient-text">Projects</span>
      </h2>
      <div className="w-20 h-1 bg-gradient-to-r from-primary to-secondary mx-auto" />
    </div>
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
      {/* Project 1 */}
      <div className="project-card rounded-xl overflow-hidden card-hover">
        <div className="h-48 overflow-hidden">
          <img
            src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80"
            alt="Project 1"
            className="w-full h-full object-cover"
          />
        </div>
        <div className="p-6">
          <h3 className="text-xl font-bold mb-2">E-commerce Product Webpage</h3>
          <p className="text-slate-400 mb-4">
            A full-featured e-commerce platform built with html,
            javascript,bootstrap, and full-responsive.
          </p>
          <div className="flex flex-wrap gap-2 mb-4">
            <span className="px-3 py-1 bg-slate-700 rounded-full text-sm">
              API
            </span>
            <span className="px-3 py-1 bg-slate-700 rounded-full text-sm">
              JavaScript
            </span>
            <span className="px-3 py-1 bg-slate-700 rounded-full text-sm">
              Bootstrap
            </span>
          </div>
          <div className="flex space-x-3">
            <a
              href="https://darling-stroopwafel-0d8db8.netlify.app/"
              className="text-primary hover:text-secondary"
            >
              <i className="fas fa-external-link-alt" /> Live Demo
            </a>
            <a
              href="https://github.com/ombagal3/tripcrypto/tree/main/E-commerce%20web"
              className="text-primary hover:text-secondary"
            >
              <i className="fab fa-github" /> Code
            </a>
          </div>
        </div>
      </div>
      {/* Project 2 */}
      <div className="project-card rounded-xl overflow-hidden card-hover">
        <div className="h-48 overflow-hidden">
          <img
            src="https://images.unsplash.com/photo-1555421689-3f034debb7a6?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80"
            alt="Project 2"
            className="w-full h-full object-cover"
          />
        </div>
        <div className="p-6">
          <h3 className="text-xl font-bold mb-2">Task Manger App</h3>
          <p className="text-slate-400 mb-4">
            A productivity app for managing tasks save and edit with
            drag-and-drop functionality.
          </p>
          <div className="flex flex-wrap gap-2 mb-4">
            <span className="px-3 py-1 bg-slate-700 rounded-full text-sm">
              JavaScript
            </span>
            <span className="px-3 py-1 bg-slate-700 rounded-full text-sm">
              localStorage
            </span>
            <span className="px-3 py-1 bg-slate-700 rounded-full text-sm">
              TailwindCSS
            </span>
          </div>
          <div className="flex space-x-3">
            <a
              href="https://legendary-trifle-8af14f.netlify.app/"
              className="text-primary hover:text-secondary"
            >
              <i className="fas fa-external-link-alt" /> Live Demo
            </a>
            <a
              href="https://github.com/ombagal3/JavaScript/tree/main/Task%20Manger"
              className="text-primary hover:text-secondary"
            >
              <i className="fab fa-github" /> Code
            </a>
          </div>
        </div>
      </div>
      {/* Project 3 */}
      <div className="project-card rounded-xl overflow-hidden card-hover">
        <div className="h-48 overflow-hidden">
          <img
            src="https://images.unsplash.com/photo-1522542550221-31fd19575a2d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80"
            alt="Project 3"
            className="w-full h-full object-cover"
          />
        </div>
        <div className="p-6">
          <h3 className="text-xl font-bold mb-2">Quiz App</h3>
          <p className="text-slate-400 mb-4">
            The app allows users to attempt multiple-choice questions and get
            instant feedback tracks scores, validates answers in real time, and
            provides a smooth user experience with dynamic UI
          </p>
          <div className="flex flex-wrap gap-2 mb-4">
            <span className="px-3 py-1 bg-slate-700 rounded-full text-sm">
              regex
            </span>
            <span className="px-3 py-1 bg-slate-700 rounded-full text-sm">
              JavaScript
            </span>
            <span className="px-3 py-1 bg-slate-700 rounded-full text-sm">
              CSS3
            </span>
          </div>
          <div className="flex space-x-3">
            <a
              href="https://aesthetic-meerkat-442284.netlify.app/"
              className="text-primary hover:text-secondary"
            >
              <i className="fas fa-external-link-alt" /> Live Demo
            </a>
            <a
              href="https://github.com/ombagal3/tripcrypto/tree/main/Quiz%20app"
              className="text-primary hover:text-secondary"
            >
              <i className="fab fa-github" /> Code
            </a>
          </div>
        </div>
      </div>
      {/* Project 4 */}
      <div className="project-card rounded-xl overflow-hidden card-hover">
        <div className="h-48 overflow-hidden">
          <img
            src="https://images.unsplash.com/photo-1467232004584-a241de8bcf5d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1469&q=80"
            alt="Project 4"
            className="w-full h-full object-cover"
          />
        </div>
        <div className="p-6">
          <h3 className="text-xl font-bold mb-2">Weather Application</h3>
          <p className="text-slate-400 mb-4">
            Real-time weather forecasting app with location detection.
          </p>
          <div className="flex flex-wrap gap-2 mb-4">
            <span className="px-3 py-1 bg-slate-700 rounded-full text-sm">
              JavaScript
            </span>
            <span className="px-3 py-1 bg-slate-700 rounded-full text-sm">
              API
            </span>
            <span className="px-3 py-1 bg-slate-700 rounded-full text-sm">
              CSS3
            </span>
          </div>
          <div className="flex space-x-3">
            <a
              href=""
              className="text-primary hover:text-secondary"
            >
              <i className="fas fa-external-link-alt" /> Live Demo
            </a>
            <a
              href="https://github.com/ombagal3/tripcrypto/tree/main/wether%20apk"
              className="text-primary hover:text-secondary"
            >
              <i className="fab fa-github" /> Code
            </a>
          </div>
        </div>
      </div>
      {/* Project 5 */}
      <div className="project-card rounded-xl overflow-hidden card-hover">
        <div className="h-48 overflow-hidden">
          <img
            src="https://images.unsplash.com/photo-1551434678-e076c223a692?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80"
            alt="Project 5"
            className="w-full h-full object-cover"
          />
        </div>
        <div className="p-6">
          <h3 className="text-xl font-bold mb-2">Text Utils App</h3>
          <p className="text-slate-400 mb-4">
            Text Utils application using React.js that allows users to analyze,
            modify, and save text efficiently.
          </p>
          <div className="flex flex-wrap gap-2 mb-4">
            <span className="px-3 py-1 bg-slate-700 rounded-full text-sm">
              React.js
            </span>
            <span className="px-3 py-1 bg-slate-700 rounded-full text-sm">
              LocalStorage
            </span>
            <span className="px-3 py-1 bg-slate-700 rounded-full text-sm">
              Bootstrap
            </span>
          </div>
          <div className="flex space-x-3">
            <a
              href="https://textutilsap.netlify.app/"
              className="text-primary hover:text-secondary"
            >
              <i className="fas fa-external-link-alt" /> Live Demo
            </a>
            <a
              href="https://github.com/ombagal3/React/tree/main/text-utils-pr"
              className="text-primary hover:text-secondary"
            >
              <i className="fab fa-github" /> Code
            </a>
          </div>
        </div>
      </div>
      {/* Project 6 */}
      <div className="project-card rounded-xl overflow-hidden card-hover">
        <div className="h-48 overflow-hidden">
          <img
            src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80"
            alt="Project 6"
            className="w-full h-full object-cover"
          />
        </div>
        <div className="p-6">
          <h3 className="text-xl font-bold mb-2">Movie Search App</h3>
          <p className="text-slate-400 mb-4">
            Search movies using the OMDb API. Built with async/await and fetch.
          </p>
          <div className="flex flex-wrap gap-2 mb-4">
            <span className="px-3 py-1 bg-slate-700 rounded-full text-sm">
              OMBd API
            </span>
            <span className="px-3 py-1 bg-slate-700 rounded-full text-sm">
              async/await
            </span>
            <span className="px-3 py-1 bg-slate-700 rounded-full text-sm">
              fetch
            </span>
          </div>
          <div className="flex space-x-3">
            <a
              href="https://guileless-naiad-102574.netlify.app/"
              className="text-primary hover:text-secondary"
            >
              <i className="fas fa-external-link-alt" /> Live Demo
            </a>
            <a
              href="https://github.com/ombagal3/tripcrypto/tree/main/Movie%20app"
              className="text-primary hover:text-secondary"
            >
              <i className="fab fa-github" /> Code
            </a>
          </div>
        </div>
      </div>
    </div>
    <div className="text-center mt-12">
      <a
        href="#"
        className="px-8 py-3 rounded-full btn-primary font-medium inline-flex items-center"
      >
        View All Projects <i className="fas fa-arrow-right ml-2" />
      </a>
    </div>
  </div>
</section>
 
    
    
    </>
}

export default Project;