
const Services = () => (
  <div className="py-20 px-6 text-center">
    <h2 className="text-3xl font-bold mb-10">Our Services</h2>
    <div className="grid md:grid-cols-4 gap-6">
      {["Haircut", "Beard Styling", "Hair Spa", "Grooming"].map((s, i) => (
        <motion.div whileHover={{ scale: 1.05 }} key={i} className="p-6 shadow rounded-2xl">
          <Scissors className="mx-auto mb-4" />
          <h3 className="font-semibold">{s}</h3>
          <p className="text-sm">Premium quality service</p>
        </motion.div>
      ))}
    </div>
  </div>
);
export default Services;