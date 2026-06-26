import { Link } from "react-router-dom";

function PackageCard({ item }) {

    return (

        <div className="col-md-4 mb-4">

            <div className="card shadow h-100">

                <img
                    src={item.image}
                    className="card-img-top"
                    height="220"
                    alt={item.title}
                />

                <div className="card-body">

                    <h4>{item.title}</h4>

                    <p>

                        <strong>Location :</strong>

                        {item.location}

                    </p>

                    <p>

                        <strong>Days :</strong>

                        {item.days}

                    </p>

                    <h5 className="text-success">

                        ₹ {item.price}

                    </h5>

                    <Link

                        to={`/packages/${item.id}`}

                        className="btn btn-primary w-100 mt-2"

                    >

                        View Details

                    </Link>

                </div>

            </div>

        </div>

    );

}

export default PackageCard;