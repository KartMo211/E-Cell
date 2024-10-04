// import logo from './logo.svg';
// import './App.css';
// imp

function Navbar() {
  return (
    <>
    {/* <Navbar/> */}
    <nav className="navbar navbar-expand-lg bg-body-tertiary">
  <div className="container-fluid">
  <a className="navbar-brand" href="#">
  <img
    src="\e cell logo.png"
    alt="E-cell"
    width={70}
    height={54}
  />
</a>
<button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav me-auto mb-2 mb-lg-0 flex mx-auto">
        <li className="nav-item">
          <a className="nav-link active text-dark" aria-current="page" href="#">
            About us
          </a>
        </li>
        <li className="nav-item">
          <a className="nav-link text-dark" href="#">
            Initiatives
          </a>
        </li><li className="nav-item">
          <a className="nav-link text-dark " href="#">
            Events
          </a>
        </li>
        
        <li className="nav-item dropdown">
          <a
            className="nav-link dropdown-toggle"
            href="#"
            role="button"
            data-bs-toggle="dropdown"
            aria-expanded="false"
          >
            Resources
          </a>
          <ul className="dropdown-menu">
            <li>
              <a className="dropdown-item" href="#">
                Links
              </a>
            </li>
            
          </ul>
        </li>
        <li className="nav-item">
          <a className="nav-link text-dark" href="#">
            Contact
          </a>
        </li>
      </ul>
      
      <button className="btn btn-outline-success " style={{ backgroundColor: '#4d4d4d', color: 'white', borderRadius: '5px' }} type="submit">
  Directory
</button>
   
    </div>
  </div>
</nav>


    </>
  );
}

export default Navbar;
