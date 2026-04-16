// import axios from 'axios'
// import { useEffect, useState } from 'react'
// import { tweets_api } from '../utils/api'


// export default function HomePage() {
// //     const [tweets, setTweets] useState({})

// //     const handleTweets = async () =>{
// //         const res = await axios.get(tweets_api);
// //         setTweets(res.data);
// //     }
// // useEffect(()=> {
// // handleTweets()
// // },[])
//   const [tweet, settweet]  = useState([])
//   const [post, setpost ]= useState({})
//   const [get, setget ] = useState({})

//   const tweetPost = async ()=>{
//     const res = await axios.post(tweets_api,post);
//     settweet(res);
//     alert("tweet added")
//   }
//   const handleGet = async () => {
//     const res = await axios.get("http://localhost:3000/tweets",)
//     setget(res.data,)
//     console.log(get)
//   }
  
    
//   useEffect(()=>{
//      handleGet();
//   },[])
//   return (
//     <div className='container'>
//         <div>
//          <input type="text" onChange={(e) => setpost({...post, tweet: e.target.value})} placeholder='enter your thoughts' />
//          <button className='btn btn-primary'onClick={()=>{
//           tweetPost();
//          }} >Post</button>

//         </div>


//         <div className='container'>
// {  



  
  
//  get.map((t) => <div>

//   <p>{t.tweet}</p>
//  </div>)
// }
//         </div> 



//     </div>
//   )
// };
import axios from 'axios'
import { useEffect, useState } from 'react'
import { tweets_api } from '../utils/api'

export default function HomePage() {

  const [post, setpost] = useState({})
  const [get, setget] = useState([])
  const [user, setuser] = useState([]);

  const tweetPost = async () => {
    const res = await axios.post(tweets_api, post);
    alert("tweet added")
    handleGet(); // refresh tweets
  }

  const handleGet = async () => {
    const res = await axios.get("http://localhost:3000/tweets");
    setget(res.data);
  }

  const userEmail = () => {
    const getuser = JSON.parse(localStorage.getItem("cu_user"))
    setuser(getuser);
  }

  useEffect(() => {
    handleGet();
    userEmail();
  }, [])

  return (
    <div className='container row col-4 d-flex justify-content-center'>

      {/* Post Section */}
      <div className='d-flex gap-2 my-3'>
        <input
          type="text"
          className='form-control'
          onChange={(e) =>
            setpost({ ...post, tweet: e.target.value })
          }
          placeholder='Enter your thoughts'
        />
        <button
          className='btn btn-primary'
          onClick={tweetPost}
        >
          Post
        </button>
      </div>

      {/* Tweets List */}
      <div className='p-4'>
        {
          get.map((t, index) => (
            <div key={index} className='border p-2 mb-2 rounded'>
              <p>{t.tweet}</p>
          <p className='text-start '>{user.email}</p>
          <p>{t.user}</p>
              

            </div>
          ))
        }
      </div>

    </div>
  )
}