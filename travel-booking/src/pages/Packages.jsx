import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchPackages } from "../features/package/packageSlice";
import Navbar from "../components/Navbar";
import PackageCard from "../components/PackageCard";

function Packages() {

  const dispatch = useDispatch();

  const { packages } = useSelector(
    (state) => state.packages
  );

  const [search, setSearch] = useState("");

  useEffect(() => {

    dispatch(fetchPackages());

  }, [dispatch]);

  const filteredPackages = packages.filter((item) =>
    item.title.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <>
      <Navbar />

      <div className="container mt-4">

        <h2>Travel Packages</h2>

        <input
          type="text"
          className="form-control my-4"
          placeholder="Search Destination..."
          value={search}
          onChange={(e) =>
            setSearch(e.target.value)
          }
        />

        <div className="row">

          {filteredPackages.map((item) => (

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

export default Packages;