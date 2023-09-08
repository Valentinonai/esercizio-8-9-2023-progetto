import { Component } from "react";
import { Dropdown, Nav, Navbar } from "react-bootstrap";
import DropdownItem from "react-bootstrap/esm/DropdownItem";
import DropdownMenu from "react-bootstrap/esm/DropdownMenu";

class TopBar extends Component {
  render() {
    return (
      <Navbar expand="lg" className="navbar navbar-dark px-3" style={{ backgroundColor: "#221f1f" }}>
        <Navbar.Brand href="#home">
          <img
            alt=""
            src={this.props.logo}
            className="d-inline-block align-top"
            style={{ width: "100px", height: "55px" }}
          />
        </Navbar.Brand>

        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="#home" onClick={(event) => this.props.handlePage(event.target.innerText)}>
              Home
            </Nav.Link>
            <Nav.Link href="#link">TV shows</Nav.Link>
            <Nav.Link href="#link">Movies</Nav.Link>
            <Nav.Link href="#link">Recently Added</Nav.Link>
            <Nav.Link href="#link">My List</Nav.Link>
          </Nav>
        </Navbar.Collapse>
        <div className="d-flex align-items-center justify-content-between">
          <i className="fa fa-search icons"></i>
          <div id="kids">KIDS</div>
          <i className="fa fa-bell icons"></i>

          <Dropdown className="dropdown ml-4 mt-1">
            <Dropdown.Toggle
              className="btn btn-secondary btn-sm dropdown-toggle rounded-0"
              type="button"
              id="dropdownMenuButton"
              data-toggle="dropdown"
              aria-haspopup="true"
              aria-expanded="false"
              style={{ backgroundColor: "#221f1f", border: "none" }}
            >
              <i className="fa fa-user icons"></i>
            </Dropdown.Toggle>

            <DropdownMenu className="dropdown-menu-end bg-dark" aria-labelledby="dropdownMenuButton">
              <DropdownItem
                className="dropdown-item text-white bg-dark"
                href="#p"
                onClick={(event) => this.props.handlePage(event.target.innerText)}
              >
                Profile
              </DropdownItem>
              <DropdownItem
                className="dropdown-item text-white bg-dark"
                href="#p"
                onClick={(event) => this.props.handlePage(event.target.innerText)}
              >
                Settings
              </DropdownItem>
            </DropdownMenu>
          </Dropdown>
          <Navbar.Toggle aria-controls="basic-navbar-nav" style={{ boxShadow: "none" }} />
        </div>
      </Navbar>
    );
  }
}
export default TopBar;
