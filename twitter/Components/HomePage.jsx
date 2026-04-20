import axios from "axios";
import { useEffect, useState } from "react";
import { tweets_api } from "../utils/api";
import "../Components/Home.css";

export default function HomePage() {
  const [post, setpost] = useState({});
  const [get, setget] = useState([]);
  const [user, setuser] = useState([]);

  const tweetPost = async () => {
    const res = await axios.post(tweets_api, post);
    alert("tweet added");
    handleGet(res); // refresh tweets
  };

  const handleGet = async () => {
    const res = await axios.get("http://localhost:3000/tweets");
    setget(res.data.reverse());
  };

  const userEmail = () => {
    const getuser = JSON.parse(localStorage.getItem("cu_user"));
    setuser(getuser);
  };

  useEffect(() => {
    handleGet();
    userEmail();
  }, []);

  return (
    <div className="container-fluid">
      <div className="row vh-100">
        <div className="col-3 card bg-dark text-info border-end border-secondary p-4 ">
          <h4 className="mb-4">Menu</h4>
          <ul className="nav flex-column gap-3">
            <li className="nav-item">🏠 Home</li>
            <li className="nav-item"># Explore</li>
            <li className="nav-item">🔔 Notifications</li>
            <li className="nav-item">✉ Messages</li>
            <li className="nav-item">🔖 Bookmarks</li>
            <li className="nav-item">📄 Lists</li>
            <li className="nav-item">👤 Profile</li>
            <li className="nav-item">⋯ More</li>
          </ul>
          <button className="btn btn-primary w-100 mt-4 rounded-pill">
            Tweet
          </button>
        </div>

        <div className="col-6 border-end  mt-5  h-50">
          <div className="d-flex  mt-3 justify-content-center ms-5  align-items-center border-end border-secondary">
            {/* COVER */}
            <div className="bg-info" style={{ height: 150 }} />
            {/* PROFILE */}
            <div className="">
              <div className="d-flex align-items-center">
                <div
                  className="bg-info rounded-circle"
                  style={{ width: 100, height: 100, marginTop: "-50px" }}
                />
              </div>
              <h4 className="mt-2">Om Bagal</h4>
              <p className="text-secondary">@Ombagal4532</p>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
              <p className="text-secondary">
                📍 City, Country • 📅 Joined Feb 2013
              </p>
              <p>
                <b>354</b> Following
                <b>765</b> Followers
              </p>
            </div>
          </div>

          <div className="d-flex justify-content-center   gap-3">
            <div>
              <div className="">
                {/* Post Section */}
                <div className="d-flex gap-2 my-3 ">
                  <input
                    type="text"
                    className="form-control"
                    onChange={(e) =>
                      setpost({ ...post, tweet: e.target.value })
                    }
                    placeholder="Enter your thoughts"
                  />
                  <button className="btn btn-primary" onClick={tweetPost}>
                    Post
                  </button>
                </div>

                {/* Tweets List */}
                {/* <div className='p-4 ' >
        {
          get.map((t, index) => (
            <div key={index} className='border p-2 mb-2 rounded'>
              <p>{t.tweet}</p>
          <div><p className='text-start '>{user.email}</p>
          <p>{t.user}</p></div>
              

            </div>
          ))
        }
      </div> */}
              </div>
              <div className="p-3 m-3    w-100">
                {get.map((t, index) => (
                  <div key={index} className="d-flex gap-3 m-3 card bg-dark p-3 border-secondary w-100 ">
                    <div
                      className="bg-info rounded-circle"
                      style={{ width: 50, height: 50 }}
                    />
                    <div>
                      <b>{t.user}</b>{" "}
                      <span className="text-secondary">
                        {user.email}· May 16
                      </span>
                      <p className="text-light">{t.tweet}</p>
                      <div className="d-flex gap-4 text-secondary">
                        <span>💬 1</span>
                        <span>🔁 4</span>
                        <span>❤️ 11</span>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        <div className="col-3 p-4  ">
          {/* SEARCH */}
          <input
            type="text"
            className="form-control mb-3 rounded-pill"
            placeholder="Search Twitter"
          />
          {/* SUGGESTIONS */}
          <div className="card bg-dark border-secondary p-3 mb-3">
            <h6>You might like</h6>
            <div className="d-flex justify-content-between align-items-center mt-3">
              <div className="d-flex gap-2">
                <div
                  className="bg-info rounded-circle"
                  style={{ width: 40, height: 40 }}
                />
                <div>
                  <b>Om Bagal</b>
                  <p className="mb-0 text-secondary">@vishal more223</p>
                </div>
              </div>
              <button className="btn btn-outline-light btn-sm rounded-pill">
                Follow
              </button>
            </div>
            <div className="d-flex justify-content-between align-items-center mt-3">
              <div className="d-flex gap-2">
                <div
                  className="bg-info rounded-circle"
                  style={{ width: 40, height: 40 }}
                />
                <div>
                  <b>Username</b>
                  <p className="mb-0 text-secondary">@sachinnss</p>
                </div>
              </div>
              <button className="btn btn-outline-light btn-sm rounded-pill">
                Follow
              </button>
            </div>
          </div>
          {/* TRENDING */}
          <div className="card bg-dark border-secondary p-3">
            <h6>What's happening</h6>
            <p className="mt-3 mb-1 text-secondary">Trending</p>
            <b>Lorem ipsum dolor</b>
            <p className="text-secondary">520K Tweets</p>
            <p className="mt-3 mb-1 text-secondary">Trending</p>
            <b>Lorem ipsum dolor</b>
            <p className="text-secondary">450K Tweets</p>
          </div>
        </div>
      </div>
    </div>
  );
}
