import "bootstrap/dist/css/bootstrap.css";
import { Link } from "react-router-dom";

const NavigationBar = () => {
  return (
    <div className="sticky-xl-top">
      <nav className="navbar sticky-xl-top navbar-dark navbar-expand-lg bg-dark text-white">
        <div className="collapse navbar-collapse container">
          <ul className="nav mr-auto">
            <Link className="navbar-brand" to="/">
              Database Relations
            </Link>
            <li className="nav-item">
              <Link
                className="nav-link link-secondary"
                aria-current="page"
                to="/"
              >
                All relations
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link link-secondary" to="/create-relation">
                Create Relations
              </Link>
            </li>
          </ul>
        </div>
      </nav>
    </div>
  );
};

export default NavigationBar;
