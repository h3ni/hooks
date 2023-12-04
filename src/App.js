import "./App.css";
import { useState } from "react";
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  UncontrolledDropdown,
  NavbarText,
  Input,
  Button,
  Modal,
  ModalHeader,
  ModalBody,
  ModalFooter,
  Form,
  FormGroup,
  Label,
} from "reactstrap";
import MovieList from "./Components/MovieList";
import ReactStars from "react-rating-stars-component";

const App = () => {
  const [movies, setMovies] = useState([
    {
      title: "Ripper Untold",
      description: "A detective etc...",
      posterUrl:
        "https://m.media-amazon.com/images/M/MV5BY2ExMWE2NzItNjk2MS00NWY4LWFhOGQtZDUxODcwY2EwOWU0XkEyXkFqcGdeQXVyODQyMTk0ODE@._V1_.jpg",
      rating: 3,
    },
    {
      title: "Harry potter",
      description: "A detective etc...",
      posterUrl:
        "https://m.media-amazon.com/images/M/MV5BY2ExMWE2NzItNjk2MS00NWY4LWFhOGQtZDUxODcwY2EwOWU0XkEyXkFqcGdeQXVyODQyMTk0ODE@._V1_.jpg",
      rating: 5,
    },
    {
      title: "Fast And Furious",
      description: "A detective etc...",
      posterUrl:
        "https://m.media-amazon.com/images/M/MV5BY2ExMWE2NzItNjk2MS00NWY4LWFhOGQtZDUxODcwY2EwOWU0XkEyXkFqcGdeQXVyODQyMTk0ODE@._V1_.jpg",
      rating: 5,
    },
    {
      title: "The Green Mile",
      description: "A detective etc...",
      posterUrl:
        "https://m.media-amazon.com/images/M/MV5BY2ExMWE2NzItNjk2MS00NWY4LWFhOGQtZDUxODcwY2EwOWU0XkEyXkFqcGdeQXVyODQyMTk0ODE@._V1_.jpg",
      rating: 2,
    },
    {
      title: "Pirates of the Caribbean",
      description: "A detective etc...",
      posterUrl:
        "https://m.media-amazon.com/images/M/MV5BY2ExMWE2NzItNjk2MS00NWY4LWFhOGQtZDUxODcwY2EwOWU0XkEyXkFqcGdeQXVyODQyMTk0ODE@._V1_.jpg",
      rating: 4,
    },
    {
      title: "Taxi driver",
      description: "A detective etc...",
      posterUrl:
        "https://m.media-amazon.com/images/M/MV5BY2ExMWE2NzItNjk2MS00NWY4LWFhOGQtZDUxODcwY2EwOWU0XkEyXkFqcGdeQXVyODQyMTk0ODE@._V1_.jpg",
      rating: 1,
    },
  ]);

  const [search, setSearch] = useState("");
  const handleChange = (e) => {
    setSearch(e.target.value);
  };
  const [rate, setRate] = useState(1);
  const ratingChanged = (newRating) => {
    setRate(newRating);
  };
  const [modal, setModal] = useState(false);

  const toggle = () => setModal(!modal);
  const [collapsed, setCollapsed] = useState(true);

  const toggleNavbar = () => setCollapsed(!collapsed);
  const [newMovie, setNewMovie] = useState({
    title: "",
    posterUrl: "",
    description: "",
    rating: 0,
  });
  const handleNewMovie = (e) => {
    setNewMovie({ ...newMovie, [e.target.name]: e.target.value });
  };
  const handleAddMovie = () => {
    setMovies([...movies, newMovie]);
    toggle();
  };

  return (
    <div className="App">
      <Navbar>
        <NavbarBrand href="/">Movie List</NavbarBrand>
        <NavbarToggler onClick={toggleNavbar} />
        <Collapse isOpen={collapsed} navbar className="content">
          <Nav className="me-auto" navbar>
            <UncontrolledDropdown nav inNavbar></UncontrolledDropdown>
            <NavbarText>Search Your Movie</NavbarText>
          </Nav>
          <NavbarText>
            <Input onChange={handleChange} />
          </NavbarText>
          <NavbarText>or you can search by rating</NavbarText>
          <ReactStars
            className="star"
            classNames={"rating"}
            count={5}
            onChange={ratingChanged}
            size={24}
            activeColor="#ffd700"
          />
          ,
        </Collapse>
      </Navbar>
      <div>
        <Button color="danger" onClick={toggle}>
          Add Movie
        </Button>
        <Modal isOpen={modal} toggle={toggle}>
          <ModalHeader toggle={toggle}>Add New Movie</ModalHeader>
          <ModalBody>
            <Form>
              <FormGroup>
                <Label for="exampleEmail">Title</Label>
                <Input
                  id="exampleEmail"
                  name="title"
                  placeholder="Title"
                  onChange={handleNewMovie}
                  type="text"
                />
              </FormGroup>
              <FormGroup>
                <Label for="exampleEmail">Description</Label>
                <Input
                  id="exampleEmail"
                  name="description"
                  placeholder="Description"
                  onChange={handleNewMovie}
                  type="text"
                />
              </FormGroup>
              <FormGroup>
                <Label for="exampleEmail">PosterUrl</Label>
                <Input
                  id="exampleEmail"
                  name="posterUrl"
                  placeholder="PosterUrl"
                  onChange={handleNewMovie}
                  type="text"
                />
              </FormGroup>
              <FormGroup>
                <Label for="exampleEmail">Rating</Label>
                <Input
                  id="exampleEmail"
                  name="rating"
                  type="number"
                  onChange={handleNewMovie}
                />
              </FormGroup>
            </Form>
          </ModalBody>
          <ModalFooter>
            <Button color="primary" onClick={handleAddMovie}>
              Add Movie
            </Button>{" "}
          </ModalFooter>
        </Modal>
      </div>
      <MovieList movies={movies} search={search} rate={rate} />
    </div>
  );
};

export default App;
