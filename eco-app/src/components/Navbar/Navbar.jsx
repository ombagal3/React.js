const Navbar =  () => {

    return <>
<nav className="navbar container-fluid bg-body-tertiary">
  <div className="container-fluid">
    <a className="navbar-brand">Navbar</a>
    <form className="d-flex" role="search">
      <input
        className="form-control me-2"
        type="search"
        placeholder="Search"
        aria-label="Search"
      />
      <a href="/Cart" className="btn btn-outline-success"  >
        Cart
      </a>
    </form>
  </div>
</nav>
    
    </>
}
export default Navbar;