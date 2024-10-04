import "./Initiatives.css";

function Footer() {
  return (
    <>
      <div class="bgm">
        <div class="container text-center">
          <form className="d-flex pt-5 pb-4" role="search">
            <input
              className="form-control me-2"
              type="search"
              placeholder="Search"
              aria-label="Search"
            />
            <button className="btn btn-outline-success" type="submit">
              Search
            </button>
          </form>
        </div>
        <div
          style={{
            color: "white",
            justifyContent: "center",
            alignitems: "center",
            width: "100%" ,
            height:10,
            marginLeft: "30%",
            marginTop: 40,
            marginBottom: 90

          }}
        >
          <p1 style={{  marginLeft: "5%" }}>About Us</p1>
          <p1 style={{  marginLeft: "5%" }}>Initiatives</p1>
          <p1 style={{  marginLeft: "5%" }}>Events</p1>
          <p1 style={{  marginLeft: "5%" }}>Resources</p1>
        </div>
        <hr style={{ color: "white",   alignitems: "center" , justifyContent: "center" , margin : "1%" , height: 1 ,}} />
        <div
          style={{
            color: "white",
            
            width: "100%" ,
            height:40,
            marginLeft: "15%",
            marginTop: 1
          }}
        >
          <p4 style={{  marginLeft: 50 }}>2024 E-Cell IIT(ISM) Dhanbad-All Rights Reserved</p4>
          <p4 style={{  marginLeft: 50 }}>Made by E-Cell IIT(ISM) Dhanbad</p4>
        </div>
      </div>
    </>
  );
}

export default Footer;
