import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";

import {
  fetchPackages,
  addPackage,
  deletePackage
} from "../features/package/packageSlice";

import {
  fetchBookings,
  approveBooking,
  rejectBooking
} from "../features/booking/bookingSlice";

import Navbar from "../components/Navbar";

function Admin() {

  const dispatch = useDispatch();

  const { packages } = useSelector((state) => state.packages);

  const { bookings } = useSelector((state) => state.bookings);

  const [formData, setFormData] = useState({

    title: "",

    location: "",

    price: "",

    days: "",

    image: "",

    description: ""

  });

  useEffect(() => {

    dispatch(fetchPackages());

    dispatch(fetchBookings());

  }, [dispatch]);

  const handleChange = (e) => {

    setFormData({

      ...formData,

      [e.target.name]: e.target.value

    });

  };

  const handleSubmit = (e) => {

    e.preventDefault();

    dispatch(addPackage(formData));

    setFormData({

      title: "",

      location: "",

      price: "",

      days: "",

      image: "",

      description: ""

    });

  };

  return (

    <>

      <Navbar />

      <div className="container mt-4">

        <h2 className="mb-4">

          Admin Dashboard

        </h2>

        <div className="row mb-4">

          <div className="col-md-4">

            <div className="card p-3 bg-primary text-white">

              <h3>{packages.length}</h3>

              <h5>Total Packages</h5>

            </div>

          </div>

          <div className="col-md-4">

            <div className="card p-3 bg-success text-white">

              <h3>{bookings.length}</h3>

              <h5>Total Bookings</h5>

            </div>

          </div>

        </div>

        <div className="card p-4 mb-5">

          <h4>Add New Package</h4>

          <form onSubmit={handleSubmit}>

            <div className="row">

              <div className="col-md-6">

                <input

                  className="form-control mb-3"

                  name="title"

                  placeholder="Package Name"

                  value={formData.title}

                  onChange={handleChange}

                />

              </div>

              <div className="col-md-6">

                <input

                  className="form-control mb-3"

                  name="location"

                  placeholder="Location"

                  value={formData.location}

                  onChange={handleChange}

                />

              </div>

              <div className="col-md-6">

                <input

                  className="form-control mb-3"

                  name="price"

                  placeholder="Price"

                  value={formData.price}

                  onChange={handleChange}

                />

              </div>

              <div className="col-md-6">

                <input

                  className="form-control mb-3"

                  name="days"

                  placeholder="Days"

                  value={formData.days}

                  onChange={handleChange}

                />

              </div>

              <div className="col-md-12">

                <input

                  className="form-control mb-3"

                  name="image"

                  placeholder="Image URL"

                  value={formData.image}

                  onChange={handleChange}

                />

              </div>

              <div className="col-md-12">

                <textarea

                  className="form-control mb-3"

                  rows="3"

                  name="description"

                  placeholder="Description"

                  value={formData.description}

                  onChange={handleChange}

                />

              </div>

            </div>

            <button className="btn btn-primary">

              Add Package

            </button>

          </form>

        </div>

        <h3>Manage Packages</h3>

        <table className="table table-bordered">

          <thead>

            <tr>

              <th>ID</th>

              <th>Package</th>

              <th>Location</th>

              <th>Price</th>

              <th>Action</th>

            </tr>

          </thead>

          <tbody>

            {

              packages.map((item) => (

                <tr key={item.id}>

                  <td>{item.id}</td>

                  <td>{item.title}</td>

                  <td>{item.location}</td>

                  <td>₹ {item.price}</td>

                  <td>

                    <button

                      className="btn btn-danger btn-sm"

                      onClick={() =>

                        dispatch(deletePackage(item.id))

                      }

                    >

                      Delete

                    </button>

                  </td>

                </tr>

              ))

            }

          </tbody>

        </table>

        <h3 className="mt-5">

          Booking Requests

        </h3>

        <table className="table table-striped">

          <thead>

            <tr>

              <th>Name</th>

              <th>Email</th>

              <th>Members</th>

              <th>Date</th>

              <th>Status</th>

              <th>Action</th>

            </tr>

          </thead>

          <tbody>

            {

              bookings.map((item) => (

                <tr key={item.id}>

                  <td>{item.name}</td>

                  <td>{item.email}</td>

                  <td>{item.members}</td>

                  <td>{item.travelDate}</td>

                  <td>{item.status}</td>

                  <td>

                    <button

                      className="btn btn-success btn-sm me-2"

                      onClick={() =>

                        dispatch(approveBooking(item))

                      }

                    >

                      Approve

                    </button>

                    <button

                      className="btn btn-danger btn-sm"

                      onClick={() =>

                        dispatch(rejectBooking(item))

                      }

                    >

                      Reject

                    </button>

                  </td>

                </tr>

              ))

            }

          </tbody>

        </table>

      </div>

    </>

  );

}

export default Admin;