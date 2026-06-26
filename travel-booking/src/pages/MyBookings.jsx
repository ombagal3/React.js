import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  fetchBookings,
  cancelBooking,
} from "../features/booking/bookingSlice";

import Navbar from "../components/Navbar";

function MyBookings() {
  const dispatch = useDispatch();

  const { bookings } = useSelector((state) => state.bookings);

  const user = JSON.parse(localStorage.getItem("user"));

  useEffect(() => {
    dispatch(fetchBookings());
  }, [dispatch]);

  const myBookings = bookings.filter(
    (item) => item.email === user?.email
  );

  return (
    <>
      <Navbar />

      <div className="container mt-5">

        <h2 className="mb-4">My Bookings</h2>

        <table className="table table-bordered table-hover text-center align-middle">

          <thead className="table-dark">

            <tr>

              <th>Name</th>

              <th>Travel Date</th>

              <th>Members</th>

              <th>Status</th>

              <th>Action</th>

            </tr>

          </thead>

          <tbody>

            {myBookings.length > 0 ? (

              myBookings.map((item) => (

                <tr key={item.id}>

                  <td>{item.name}</td>

                  <td>{item.travelDate}</td>

                  <td>{item.members}</td>

                  <td>

                    {item.status === "Approved" ? (
                      <span className="badge bg-success">
                        Approved
                      </span>
                    ) : item.status === "Rejected" ? (
                      <span className="badge bg-danger">
                        Rejected
                      </span>
                    ) : (
                      <span className="badge bg-warning text-dark">
                        Pending
                      </span>
                    )}

                  </td>

                  <td>

                    {item.status === "Pending" ? (

                      <button
                        className="btn btn-danger btn-sm"
                        onClick={() =>
                          dispatch(cancelBooking(item.id))
                        }
                      >
                        Cancel
                      </button>

                    ) : (

                      <button
                        className="btn btn-secondary btn-sm"
                        disabled
                      >
                        Closed
                      </button>

                    )}

                  </td>

                </tr>
              ))

            ) : (

              <tr>

                <td colSpan="5">

                  <h5 className="text-muted py-3">

                    No Bookings Found

                  </h5>

                </td>

              </tr>

            )}

          </tbody>

        </table>

      </div>
    </>
  );
}

export default MyBookings;