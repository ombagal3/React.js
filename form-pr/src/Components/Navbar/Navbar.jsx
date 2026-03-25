

const Navbar = () => {
    return <>
    <nav className="navbar navbar-expand-lg bg-body-tertiary ">
  <div className="container-fluid">
    <a className="navbar-brand" href="#">
      Navbar
    </a>
    <button
      className="navbar-toggler"
      type="button"
      data-bs-toggle="collapse"
      data-bs-target="#navbarNav"
      aria-controls="navbarNav"
      aria-expanded="false"
      aria-label="Toggle navigation"
    >
      <span className="navbar-toggler-icon" />
    </button>
    <div className="collapse navbar-collapse" id="navbarNav">
      <ul className="navbar-nav">
        <li className="nav-item">
          <a className="nav-link active" aria-current="page" href="/">
            Home
          </a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="/Feed">
            Feed
          </a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="/Price">
            Pricing
          </a>
        </li>
        <li className="nav-item">
          <a className="nav-link" aria-disabled="true">
            Disabled
          </a>
        </li>
      </ul>
    </div>


    
    {/* <div className="">
    <input onChange={(e)=> setSearch(e.target.value)} className="text-center me-3 p-1 " type="search"  placeholder="Search"/>
  <button className='btn me-2 btn-outline-primary'
  onClick={()=>{
   setUsers( users.filter((user)=>user.name.toLowerCase() == search.toLocaleLowerCase() || user.email.toLocaleLowerCase() == search.toLocaleLowerCase() || user.contact == search));
  }}
  > search</button>
</div> */}
  </div>
</nav>

    
    </>
}


export default Navbar;