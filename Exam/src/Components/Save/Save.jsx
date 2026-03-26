import React, { useState } from "react" 
const Save = () => {
    const [user, setUser] = useState ({})
    localStorage.setItem("users", JSON.stringify(user));
    const users =JSON.parse(localStorage.getItem("users")) || [];
    return <>

    <div className="d-flex justify-content-center align-items-center bg-danger">
        <h1>Save the task</h1>
        <div>
<input
onChange={(e) => setUser({...user, phone: e.target.value })}

id="name" type="text" />

<input onChange={(e) => setUser({...user, name: e.target.value})} id="number" type="number" />

        </div>
    </div>
    <div>
        <p>{users.name}</p>
        <p>{users.phone}</p>
    </div>
    
    </>
}
export default Save;