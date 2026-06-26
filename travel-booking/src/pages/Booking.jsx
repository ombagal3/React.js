import { useState } from "react";
import { useDispatch } from "react-redux";
import { addBooking } from "../features/booking/bookingSlice";
import { useNavigate, useParams } from "react-router-dom";
import Navbar from "../components/Navbar";

function Booking() {
  const { id } = useParams();

  const dispatch = useDispatch();

  const navigate = useNavigate();

  const user = JSON.parse(localStorage.getItem("user"));

  const [formData, setFormData] = useState({
    name: user?.name || "",
    email: user?.email || "",
    phone: "",
    members: "",
    travelDate: "",
    packageId: Number(id),
    status: "Pending",
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    dispatch(addBooking(formData));

    alert("Booking Request Sent Successfully!");

    navigate("/my-bookings");
  };

  return (
    <>
      <Navbar />

      <div className="container mt-5">
        <div className="col-md-6 mx-auto">
          <div className="card shadow p-4">

            <h2 className="text-center mb-4">
              Book Travel Package
            </h2>

            <form onSubmit={handleSubmit}>

              <input
                type="text"
                className="form-control mb-3"
                name="name"
                value={formData.name}
                onChange={handleChange}
                placeholder="Full Name"
                required
              />

              <input
                type="email"
                className="form-control mb-3"
                name="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="Email"
                required
              />

              <input
                type="tel"
                className="form-control mb-3"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                placeholder="Phone Number"
                required
              />

              <input
                type="number"
                className="form-control mb-3"
                name="members"
                value={formData.members}
                onChange={handleChange}
                placeholder="Number of Members"
                min="1"
                required
              />

              <input
                type="date"
                className="form-control mb-4"
                name="travelDate"
                value={formData.travelDate}
                onChange={handleChange}
                required
              />

              <button
                type="submit"
                className="btn btn-success w-100"
              >
                Confirm Booking
              </button>

            </form>

          </div>
        </div>
      </div>
    </>
  );
}

export default Booking;