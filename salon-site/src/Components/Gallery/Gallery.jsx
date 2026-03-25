const Gallery = () => (
  <div className="py-20 px-6">
    <h2 className="text-3xl font-bold text-center mb-10">Gallery</h2>
    <div className="grid md:grid-cols-3 gap-4">
      {[1,2,3,4,5,6].map(i => (
        <img key={i} src={`https://source.unsplash.com/300x300/?salon,${i}`} className="rounded-xl" />
      ))}
    </div>
  </div>
);
export default Gallery;