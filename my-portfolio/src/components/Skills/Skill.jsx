


const Skills = () => {
    return <>


    <section id="skills" className="py-20 bg-dark">
  <div className="container mx-auto px-6">
    <div className="text-center mb-16">
      <h2 className="text-3xl md:text-4xl font-bold mb-4">
        My <span className="gradient-text">Skills</span>
      </h2>
      <div className="w-20 h-1 bg-gradient-to-r from-primary to-secondary mx-auto" />
    </div>
    <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
      <div>
        <h3 className="text-2xl font-bold mb-6">Technical Skills</h3>
        <div className="space-y-6">
          <div>
            <div className="flex justify-between mb-2">
              <span className="font-medium">HTML/CSS</span>
              <span>95%</span>
            </div>
            <div className="skill-bar">
              <div className="skill-progress" style={{ width: "95%" }} />
            </div>
          </div>
          <div>
            <div className="flex justify-between mb-2">
              <span className="font-medium">JavaScript</span>
              <span>90%</span>
            </div>
            <div className="skill-bar">
              <div className="skill-progress" style={{ width: "90%" }} />
            </div>
          </div>
          <div>
            <div className="flex justify-between mb-2">
              <span className="font-medium">React</span>
              <span>85%</span>
            </div>
            <div className="skill-bar">
              <div className="skill-progress" style={{ width: "85%" }} />
            </div>
          </div>
          <div>
            <div className="flex justify-between mb-2">
              <span className="font-medium">Node.js</span>
              <span>80%</span>
            </div>
            <div className="skill-bar">
              <div className="skill-progress" style={{ width: "80%" }} />
            </div>
          </div>
        </div>
      </div>
      <div>
        <h3 className="text-2xl font-bold mb-6">Professional Skills</h3>
        <div className="space-y-6">
          <div>
            <div className="flex justify-between mb-2">
              <span className="font-medium">Communication</span>
              <span>90%</span>
            </div>
            <div className="skill-bar">
              <div className="skill-progress" style={{ width: "90%" }} />
            </div>
          </div>
          <div>
            <div className="flex justify-between mb-2">
              <span className="font-medium">Teamwork</span>
              <span>85%</span>
            </div>
            <div className="skill-bar">
              <div className="skill-progress" style={{ width: "85%" }} />
            </div>
          </div>
          <div>
            <div className="flex justify-between mb-2">
              <span className="font-medium">Problem Solving</span>
              <span>95%</span>
            </div>
            <div className="skill-bar">
              <div className="skill-progress" style={{ width: "95%" }} />
            </div>
          </div>
          <div>
            <div className="flex justify-between mb-2">
              <span className="font-medium">Creativity</span>
              <span>75%</span>
            </div>
            <div className="skill-bar">
              <div className="skill-progress" style={{ width: "75%" }} />
            </div>
          </div>
        </div>
      </div>
    </div>
    {/* Tools & Technologies */}
    <div className="mt-16">
      <h3 className="text-2xl font-bold mb-8 text-center">
        Tools &amp; <span className="gradient-text">Technologies</span>
      </h3>
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-6">
        <div className="flex flex-col items-center p-6 bg-slate-800 rounded-lg card-hover">
          <i className="fab fa-html5 text-4xl text-orange-500 mb-2" />
          <span>HTML5</span>
        </div>
        <div className="flex flex-col items-center p-6 bg-slate-800 rounded-lg card-hover">
          <i className="fab fa-css3-alt text-4xl text-blue-500 mb-2" />
          <span>CSS3</span>
        </div>
        <div className="flex flex-col items-center p-6 bg-slate-800 rounded-lg card-hover">
          <i className="fab fa-js text-4xl text-yellow-400 mb-2" />
          <span>JavaScript</span>
        </div>
        <div className="flex flex-col items-center p-6 bg-slate-800 rounded-lg card-hover">
          <i className="fab fa-react text-4xl text-blue-400 mb-2" />
          <span>React</span>
        </div>
        <div className="flex flex-col items-center p-6 bg-slate-800 rounded-lg card-hover">
          <i className="fab fa-node-js text-4xl text-green-500 mb-2" />
          <span>Node.js</span>
        </div>
        <div className="flex flex-col items-center p-6 bg-slate-800 rounded-lg card-hover">
          <i className="fas fa-database text-4xl text-blue-300 mb-2" />
          <span>MongoDB</span>
        </div>
        <div className="flex flex-col items-center p-6 bg-slate-800 rounded-lg card-hover">
          <i className="fab fa-git-alt text-4xl text-orange-600 mb-2" />
          <span>Git</span>
        </div>
        <div className="flex flex-col items-center p-6 bg-slate-800 rounded-lg card-hover">
          <i className="fab fa-github text-4xl text-red-500 mb-2" />
          <span>Github</span>
        </div>
        <div className="flex flex-col items-center p-6 bg-slate-800 rounded-lg card-hover">
          <i className="fab fa-php text-4xl text-pink-500 mb-2" />
          <span>PHP</span>
        </div>
        <div className="flex flex-col items-center p-6 bg-slate-800 rounded-lg card-hover">
          <i className="fab fa-figma text-4xl text-purple-500 mb-2" />
          <span>Figma</span>
        </div>
        <div className="flex flex-col items-center p-6 bg-slate-800 rounded-lg card-hover">
          <i className="fas fa-terminal text-4xl text-gray-300 mb-2" />
          <span>VS Code</span>
        </div>
        <div className="flex flex-col items-center p-6 bg-slate-800 rounded-lg card-hover">
          <i className="fab fa-linux text-4xl text-white mb-2" />
          <span>Linux</span>
        </div>
      </div>
    </div>
  </div>
</section>

    
    
    
    </>
}
export default Skills;