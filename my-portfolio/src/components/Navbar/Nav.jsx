const Nav = () => {
    return <>
    
    
     <nav className="navbar navbar-expand-lg bg-body-tertiary container">
  <div className="container-fluid">
    <a className="navbar-brand" href="#">Portfolio</a>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse d-flex justify-content-center" id="navbarNavAltMarkup">
      <div className="navbar-nav ">
        <a className="nav-link active" aria-current="page" href="#">Home</a>
                 <a className="nav-link" href="#">About</a>
        <a className="nav-link" href="#">Education</a>
        <a className="nav-link" href="#">Skills</a>
        <a className="nav-link" href="#">Projects</a>
        <a className="nav-link" href="#">Contact</a>
      </div>
    </div>
  </div>
</nav>
    </>
}



export default Nav;