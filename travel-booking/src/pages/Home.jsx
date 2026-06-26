import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchPackages } from "../features/package/packageSlice";
import Navbar from "../components/Navbar";
import PackageCard from "../components/PackageCard";
import { Link } from "react-router-dom";

function Home() {
  const dispatch = useDispatch();

  const { packages, loading } = useSelector(
    (state) => state.packages
  );

  useEffect(() => {
    dispatch(fetchPackages());
  }, [dispatch]);

  return (
    <>
      <Navbar />

      <div className="container mt-4">

        <div className="bg-primary text-white p-5 rounded text-center">
          <h1>Travel Booking App</h1>
          <p>Explore Amazing Destinations Around The World</p>

          <Link
            to="/packages"
            className="btn btn-warning mt-2"
          >
            Explore Packages
          </Link>
        </div>

        <h2 className="mt-5 mb-4">
          Popular Packages
        </h2>

        <div className="row">

          {loading && <h4>Loading...</h4>}

          {packages.slice(0, 6).map((item) => (
            <PackageCard
              key={item.id}
              item={item}
            />
          ))}

        </div>

      </div>
    </>
  );
}

export default Home;