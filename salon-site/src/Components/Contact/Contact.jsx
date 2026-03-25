const Contact = () => (
  <div className="py-20 px-6 bg-gray-100 text-center">
    <h2 className="text-3xl font-bold mb-6">Contact</h2>
    <p>123 Main Street</p>
    <p className="flex justify-center items-center gap-2"><Phone size={16}/> +91 1234567890</p>
    <iframe
      className="w-full mt-6 h-64 rounded"
      src="https://maps.google.com/maps?q=surat&t=&z=13&ie=UTF8&iwloc=&output=embed"
    />
  </div>
);
export default Contact;