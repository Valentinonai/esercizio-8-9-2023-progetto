import { Component } from "react";
import { Button, Dropdown, Form, Nav, Navbar } from "react-bootstrap";
import DropdownItem from "react-bootstrap/esm/DropdownItem";
import DropdownMenu from "react-bootstrap/esm/DropdownMenu";

class TopBar extends Component {
  state = {
    search: "",
  };
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
          <Form
            className="d-flex align-items-center"
            onSubmit={(event) => {
              event.preventDefault();
              this.props.RicercaUtente(this.state.search);
            }}
          >
            <Form.Control
              type="text"
              placeholder="Search"
              value={this.state.search}
              onChange={(event) => this.setState({ search: event.target.value })}
              style={{
                color: "gray",
                boxShadow: "none",
                border: "1px solid grey",
                backgroundColor: "transparent",
              }}
            />

            <Button
              type="submit"
              style={{
                backgroundColor: "transparent",
                border: "1px solid gray",
                padding: 0,
                height: "36px",
                marginInlineEnd: "10px",
              }}
            >
              <i className="fa fa-search icons"></i>
            </Button>
          </Form>
        </Navbar.Collapse>
        <div className="d-flex align-items-center justify-content-between">
          <div id="kids" className=" d-none d-md-block">
            KIDS
          </div>
          <i className="fa fa-bell icons d-none d-md-block"></i>

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
          <Navbar.Toggle aria-controls="basic-navbar-nav" style={{ boxShadow: "none" }}></Navbar.Toggle>
        </div>
      </Navbar>
    );
  }
}
export default TopBar;
