import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams, Link } from "react-router-dom";
import { fetchPackages } from "../features/package/packageSlice";
import Navbar from "../components/Navbar";

function PackageDetails() {

    const { id } = useParams();

    const dispatch = useDispatch();

    const { packages } = useSelector((state) => state.packages);

    useEffect(() => {

        dispatch(fetchPackages());

    }, [dispatch]);

    const item = packages.find((data) => data.id == id);

    if (!item) {

        return <h2 className="text-center mt-5">Loading...</h2>;

    }

    return (

        <>

            <Navbar />

            <div className="container mt-5">

                <div className="row">

                    <div className="col-md-6">

                        <img

                            src={item.image}

                            className="img-fluid rounded shadow"

                            alt={item.title}

                        />

                    </div>

                    <div className="col-md-6">

                        <h2>{item.title}</h2>

                        <h4 className="text-primary">

                            {item.location}

                        </h4>

                        <p>{item.description}</p>

                        <h5>

                            Duration : {item.days} Days

                        </h5>

                        <h3 className="text-success">

                            ₹ {item.price}

                        </h3>

                        <Link

                            className="btn btn-primary mt-3"

                            to={`/booking/${item.id}`}

                        >

                            Book Now

                        </Link>

                    </div>

                </div>

            </div>

        </>

    );

}

export default PackageDetails;