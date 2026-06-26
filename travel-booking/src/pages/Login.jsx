import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { loginUser } from "../features/auth/authSlice";
import { Link, useNavigate } from "react-router-dom";
import Navbar from "../components/Navbar";

function Login() {

    const dispatch = useDispatch();

    const navigate = useNavigate();

    const { user, loading, error } = useSelector(

        (state) => state.auth

    );

    const [loginData, setLoginData] = useState({

        email: "",

        password: ""

    });

    const handleChange = (e) => {

        setLoginData({

            ...loginData,

            [e.target.name]: e.target.value

        });

    };

    const handleSubmit = (e) => {

        e.preventDefault();

        console.log(loginData);

        dispatch(loginUser(loginData));

    };

    useEffect(() => {

        if (user) {

            navigate("/");

        }

    }, [user, navigate]);

    return (

        <>

            <Navbar />

            <div className="container mt-5">

                <div className="row justify-content-center">

                    <div className="col-md-5">

                        <div className="card shadow p-4">

                            <h2 className="text-center mb-4">

                                Login

                            </h2>

                            <form onSubmit={handleSubmit}>

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

                                <button

                                    className="btn btn-success w-100"

                                >

                                    {

                                        loading

                                            ?

                                            "Loading..."

                                            :

                                            "Login"

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

                                Don't have an account?

                                <Link to="/register">

                                    Register

                                </Link>

                            </p>

                        </div>

                    </div>

                </div>

            </div>

        </>

    );

}

export default Login;