

const Contacts = () => {
    return <>
    
 <section id="contact" className="py-20 bg-dark">
  <div className="container mx-auto px-6">
    <div className="text-center mb-16">
      <h2 className="text-3xl md:text-4xl font-bold mb-4">
        Get In <span className="gradient-text">Touch</span>
      </h2>
      <div className="w-20 h-1 bg-gradient-to-r from-primary to-secondary mx-auto" />
    </div>
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
      <div>
        <h3 className="text-2xl font-bold mb-6">Contact Information</h3>
        <p className="text-slate-400 mb-8">
          Feel free to reach out to me for any questions or opportunities. I'm
          always open to discussing new projects, creative ideas or
          opportunities to be part of your vision.
        </p>
        <div className="space-y-6">
          <div className="flex items-start">
            <div className="bg-slate-800 p-3 rounded-full mr-4">
              <i className="fas fa-map-marker-alt text-primary text-xl" />
            </div>
            <div>
              <h4 className="font-bold mb-1">Location</h4>
              <p className="text-slate-400">India </p>
            </div>
          </div>
          <div className="flex items-start">
            <div className="bg-slate-800 p-3 rounded-full mr-4">
              <i className="fas fa-envelope text-primary text-xl" />
            </div>
            <div>
              <h4 className="font-bold mb-1">Email</h4>
              <p className="text-slate-400">ombagal8@gmail.com</p>
            </div>
          </div>
          <div className="flex items-start">
            <div className="bg-slate-800 p-3 rounded-full mr-4">
              <i className="fas fa-phone-alt text-primary text-xl" />
            </div>
            <div>
              <h4 className="font-bold mb-1">Phone</h4>
              <p className="text-slate-400">+91 9322391840</p>
            </div>
          </div>
        </div>
        <div className="mt-8">
          <h4 className="font-bold mb-4">Follow Me</h4>
          <div className="flex space-x-4">
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
      </div>
      <div>
        <h3 className="text-2xl font-bold mb-6">Send Me a Message</h3>
        {/* <form id="contact-form" class="space-y-6">
                  <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div>
                          <label for="name" class="block mb-2 font-medium">Your Name</label>
                          <input type="text" id="name"
                              class="w-full px-4 py-3 rounded-lg contact-input focus:outline-none" required>
                      </div>
                      <div>
                          <label for="email" class="block mb-2 font-medium">Your Email</label>
                          <input type="email" id="email"
                              class="w-full px-4 py-3 rounded-lg contact-input focus:outline-none" required>
                      </div>
                  </div>
                  <div>
                      <label for="subject" class="block mb-2 font-medium">Subject</label>
                      <input type="text" id="subject"
                          class="w-full px-4 py-3 rounded-lg contact-input focus:outline-none" required>
                  </div>
                  <div>
                      <label for="message" class="block mb-2 font-medium">Message</label>
                      <textarea id="message" rows="5"
                          class="w-full px-4 py-3 rounded-lg contact-input focus:outline-none"
                          required></textarea>
                  </div>
                  <button type="submit" class="px-8 py-3 rounded-full btn-primary font-medium w-full">
                      Send Message <i class="fas fa-paper-plane ml-2"></i>
                  </button>
              </form> */}
        <form id="contact-form" className="space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <label className="block mb-2 font-medium">Your Name</label>
              <input
                type="text"
                name="name"
                className="w-full px-4 py-3 rounded-lg contact-input focus:outline-none"
                required=""
              />
            </div>
            <div>
              <label className="block mb-2 font-medium">Your Email</label>
              <input
                type="email"
                name="email"
                className="w-full px-4 py-3 rounded-lg contact-input focus:outline-none"
                required=""
              />
            </div>
          </div>
          <div>
            <label className="block mb-2 font-medium">Subject</label>
            <input
              type="text"
              name="subject"
              className="w-full px-4 py-3 rounded-lg contact-input focus:outline-none"
              required=""
            />
          </div>
          <div>
            <label className="block mb-2 font-medium">Message</label>
            <textarea
              name="message"
              rows={5}
              className="w-full px-4 py-3 rounded-lg contact-input focus:outline-none"
              required=""
              defaultValue={""}
            />
          </div>
          <button
            type="submit"
            className="px-8 py-3 rounded-full btn-primary font-medium w-full"
          >
            Send Message
          </button>
        </form>
      </div>
    </div>
  </div>
</section>

    
    
    
    
    
    
    
     </>
}
export default Contacts;