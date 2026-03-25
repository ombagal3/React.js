const Testimonials = () => (
  <div className="py-20 px-6 bg-gray-100 text-center">
    <h2 className="text-3xl font-bold mb-10">Testimonials</h2>
    <div className="grid md:grid-cols-3 gap-6">
      {["Amazing service!", "Best salon ever", "Highly recommend"].map((t, i) => (
        <div key={i} className="p-6 shadow rounded-xl">
          <Star className="mx-auto mb-2" />
          <p>{t}</p>
        </div>
      ))}
    </div>
  </div>
);

export default Testimonials;