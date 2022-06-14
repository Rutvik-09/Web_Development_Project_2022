import "./Header.css";
import rentlogo from "../../assets/images/rent.png";

const Header = () => {
  return (
    
      <nav class="navbar  navbar-expand-lg navbar-light bg-light  sticky-top" >
        <a class="navbar-brand" href="/signup">
      {/* rent logo has been taken from the "https://www.flaticon.com/free-icon/for-rent_1009805" */}
        <img src={rentlogo} alt="For rent" className="rent-logo" />
        </a>
        <button
          class="navbar-toggler"
          aria-controls="signup"
          aria-expanded="false"
          aria-label="Signup navigation"
          type="button"
          data-toggle="collapse"
          data-target="#signup"
        
        >
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="signup">
          <ul class="navbar-nav" style={{ marginLeft: 'auto' }}>
            <li class="nav-item">
              <a class="nav-link" href="/signin">
                Login
              </a>
            </li>
            <li class="nav-item  active" >
              <a class="nav-link" href="/signup">
                Signup
              </a>
            </li>
          </ul>
        </div>
      </nav>
    
  );
};

export default Header;
