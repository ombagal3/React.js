import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { registerUser } from "../features/auth/authSlice";
import { Link, useNavigate } from "react-router-dom";
import Navbar from "../components/Navbar";

function Register() {

    const dispatch = useDispatch();

    const navigate = useNavigate();

    const { loading, error, success } = useSelector(
        (state) => state.auth
    );

    const [formData, setFormData] = useState({

        name: "",

        email: "",

        password: "",

        confirmPassword: ""

    });

    const handleChange = (e) => {

        setFormData({

            ...formData,

            [e.target.name]: e.target.value

        });

    };

    const handleSubmit = (e) => {

        e.preventDefault();

        if (formData.password !== formData.confirmPassword) {

            alert("Passwords do not match");

            return;

        }

        dispatch(

            registerUser({

                name: formData.name,

                email: formData.email,

                password: formData.password

            })

        );

    };

    useEffect(() => {

        if (success) {

            navigate("/login");

        }

    }, [success, navigate]);

    return (

        <>

            <Navbar />

            <div className="container mt-5">

                <div className="row justify-content-center">

                    <div className="col-md-5">

                        <div className="card shadow p-4">

                            <h2 className="text-center mb-4">

                                Register

                            </h2>

                            <form onSubmit={handleSubmit}>

                                <input

                                    type="text"

                                    className="form-control mb-3"

                                    placeholder="Name"

                                    name="name"

                                    onChange={handleChange}

                                />

                                <input

                                    type="email"

                                    className="form-control mb-3"

                                    placeholder="Email"

                                    name="email"

                                    onChange={handleChange}

                                />

                                <input

                                    type="password"

                                    className="form-control mb-3"

                                    placeholder="Password"

                                    name="password"

                                    onChange={handleChange}

                                />

                                <input

                                    type="password"

                                    className="form-control mb-3"

                                    placeholder="Confirm Password"

                                    name="confirmPassword"

                                    onChange={handleChange}

                                />

                                <button

                                    className="btn btn-primary w-100"

                                >

                                    {

                                        loading

                                            ?

                                            "Loading..."

                                            :

                                            "Register"

                                    }

                                </button>

                            </form>

                            {

                                error &&

                                <p className="text-danger mt-3">

                                    {error}

                                </p>

                            }

                            <p className="mt-3">

                                Already have an account?

                                <Link to="/login">

                                    Login

                                </Link>

                            </p>

                        </div>

                    </div>

                </div>

            </div>

        </>

    );

}

export default Register;