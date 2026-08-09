

export default async function page({ params }) {
  const { slug } = await params;
  return (
    <div className="flex justify-center mt-5">
      <h1 className="">trioxa/{slug}.in</h1>
    </div>
  );
}
