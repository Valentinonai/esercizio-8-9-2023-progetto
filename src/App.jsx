import logo from "./logo.png";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import TopBar from "./components/TopBar";
import Header from "./components/Header";
import { Container } from "react-bootstrap";
import Category from "./components/category";
import Footer from "./components/footer";
import { Component } from "react";
import Profile from "./components/Profile";
import Settings from "./components/Settings";

class App extends Component {
  state = {
    movies: ["Harry Potter", "Batman", "The smurfs"],
    pages: {
      Home: true,
      Profile: false,
      Settings: false,
    },
  };
  //Modifico lo stato per far visualizzare la pagina desiderata
  handlePage = (page) => {
    this.setState({ pages: { Home: false, Profile: false, Settings: false } }, () =>
      this.setState({
        pages: { ...this.state.pages, [page]: true },
      })
    );
  };
  render() {
    return (
      <div className="App">
        <TopBar logo={logo} handlePage={this.handlePage} />
        <Container>
          <Header />
          {this.state.pages.Home && (
            <>
              <h4>{this.state.movies[0]}</h4>
              <Category saga={this.state.movies[0]} />
              <h4>{this.state.movies[1]}</h4>
              <Category saga={this.state.movies[1]} />
              <h4>{this.state.movies[2]}</h4>
              <Category saga={this.state.movies[2]} />
            </>
          )}
          {this.state.pages.Profile && <Profile />}
        </Container>
        {this.state.pages.Settings && <Settings />}
        <Footer />
      </div>
    );
  }
}

export default App;
