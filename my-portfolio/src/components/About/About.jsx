
import Pic from '../../assets/blue.png'
import Cv from '../../assets/om-bagal.pdf'




const About = () => {


    return <>

 <section id="about" className="py-20 bg-darker">
  <div className="container mx-auto px-6">
    <div className="text-center mb-16">
      <h2 className="text-3xl md:text-4xl font-bold mb-4">
        About <span className="gradient-text">Me</span>
      </h2>
      <div className="w-20 h-1 bg-gradient-to-r from-primary to-secondary mx-auto" />
    </div>
    <div className="flex flex-col md:flex-row items-center">
      <div className="md:w-1/3 mb-8 md:mb-0 flex justify-center">
        <div className="relative w-64 h-64">
          <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-primary to-secondary blur-xl opacity-20"></div>
          <img
            src={Pic}
            alt="About"
            className="relative w-full h-full object-cover rounded-2xl border-4 border-slate-800"
          />
        </div>
      </div>
      <div className="md:w-2/3 md:pl-12">
        <h3 className="text-2xl font-bold mb-6">Who am I?</h3>
        <p className="text-slate-400 mb-6">
          I'm a passionate Full Stack Developer with over 5 years of experience
          creating modern web applications. I specialize in JavaScript
          ecosystems including React, Node.js, and modern CSS frameworks.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
          <div>
            <h4 className="font-semibold mb-2">
              Name: <span className="text-slate-300">Om Bagal</span>
            </h4>
            <h4 className="font-semibold mb-2">
              Email: <span className="text-slate-300">ombagal@gmail.com</span>
            </h4>
            <h4 className="font-semibold mb-2">
              Phone: <span className="text-slate-300">+91 9322391840</span>
            </h4>
          </div>
          <div>
            {/* <h4 class="font-semibold mb-2">Age: <span class="text-slate-300">21</span></h4>
                      <h4 class="font-semibold mb-2">Experience: <span class="text-slate-300">5+ Years</span></h4>
                      <h4 class="font-semibold mb-2">Location: <span class="text-slate-300">San Francisco,
                              CA</span></h4> */}
          </div>
        </div>
        <div className="flex space-x-4">
          <a
            href={Cv}
            download={Cv}
            className="px-6 py-3 rounded-full btn-primary font-medium"
          >
            Download CV
          </a>
          <a
            href="#contact"
            className="px-6 py-3 rounded-full border border-primary text-primary font-medium hover:bg-primary/10 transition"
          >
            Contact Me
          </a>
        </div>
      </div>
    </div>
    
  {/* Experience Timeline */}
<div className="mt-20">
  <h3 className="text-2xl font-bold mb-8 text-center">
    My <span className="gradient-text">Education</span>
  </h3>

  <div className="relative max-w-3xl mx-auto">
    
    <div className="hidden md:block absolute left-1/2 h-full w-0.5 bg-slate-700 transform -translate-x-1/2" />

    <div className="mb-8 flex flex-col md:flex-row justify-between items-center w-full timeline-item">

      <div className="order-1 w-full md:w-5/12"></div>

      <div className="order-1 w-full md:w-5/12 px-4 py-4 bg-slate-800 rounded-lg shadow-lg  md:text-left">
        <h4 className="text-lg font-bold mb-2">
          Bachelor of Engineering |
        </h4>

        <p className="text-sm text-slate-400 mb-2">
          2022 to 2026 in (INFORMATION TECHNOLOGY)
        </p>

        <p className="text-slate-300">
          G H RAISONI INSTITUTE OF ENGINEERING AND BUSINESS MANAGEMENT,
          JALGAON Jalgaon, Maharashtra, India | 2026
        </p>
      </div>

    </div>


    <div className="mb-8 flex flex-col md:flex-row justify-between items-center w-full timeline-item">

      <div className="order-1 w-full md:w-5/12 px-4 py-4 bg-slate-800 rounded-lg shadow-lg  md:text-left">

        <h4 className="text-lg font-bold mb-2">
          Higher Secondary Certificate |
        </h4>

        <p className="text-sm text-slate-400 mb-2">
          Vasantrao Naik jr. collage • 2021 - 2022 Shahada, Maharashtra, India
        </p>

        <p className="text-slate-300">
          Completed H.S.C with a strong foundation in core subjects,
          developing analytical thinking, problem-solving skills, and
          academic discipline for higher studies.
        </p>

      </div>

      <div className="order-1 w-full md:w-5/12"></div>

    </div>



    <div className="mb-8 flex flex-col md:flex-row justify-between items-center w-full timeline-item">

      <div className="order-1 w-full md:w-5/12"></div>

      <div className="order-1 w-full md:w-5/12 px-4 py-4 bg-slate-800 rounded-lg shadow-lg  md:text-left">

        <h4 className="text-lg font-bold mb-2">
          Secondary School Certificate |
        </h4>

        <p className="text-sm text-slate-400 mb-2">
          D. R. High School, Dondaicha, Maharashtra (2020)
        </p>

        <p className="text-slate-300">
          Completed S.S.C with a strong academic foundation, focusing
          concepts, discipline, and overall personal development that
          prepared me for higher education.
        </p>

      </div>

    </div>

  </div>
</div>
  </div>
</section>

    
    
    </>
}

export default About;