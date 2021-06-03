import logo from './logo.svg';
import './App.css';
import restaurant from './images/restaurant.jpg';
import {Routes, Route} from 'react-router-dom';
import {Home, About,Events,Contact ,Woops404,ComponentHistory ,Services,Location} from './pages';

// Component is a function
//props are properties which we can pass to component
function Header(props) {
  console.log(props);
  return (
    <header>
      <h1>Hi {props.name} this is header</h1>
    </header>
  );
}

function Body(props) {
  return (
    <section>
      <h1>this is the section part</h1>
      <img src={restaurant}></img>
      <ul style={{ textAlign: "left" }}>
        {props.dishes.map((dish, i) => <li key={i}>{dish}</li>)}
      </ul>
    </section>
  );
}

function Footer(props) {
  return (
    <footer>
      <h1>this is footer - {props.year}</h1>
    </footer>
  );
}
const dishes = [
  "chicken",
  "Fish",
  "Mutton"
]

dishes.map((dish) => console.log(dish))



function SecretApp() {
  return <h1>Only admin can view this page</h1>
}
function OpenApp() {
  return <h1>Every one can  view  this page</h1>
}

function MainApp() {
  return (
    <div className="App">
      <Header name="adithya"></Header>
      <Body dishes={dishes}></Body>
      <Footer year={new Date().getFullYear()}></Footer>
      {/* <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header> */}
    </div>
  )
}

function App(props) {
  if (props.isAuthorized) {
    // return <MainApp></MainApp>

    return (
      <div>
        <Routes>
          <Route path="/"  element ={<Home></Home>}></Route>
          <Route path="/about"  element ={<About></About>}>
            <Route path="services"  element ={<Services></Services>}></Route>
            <Route path="history"  element ={<ComponentHistory></ComponentHistory>}></Route>
            <Route path="location"  element ={<Location></Location>}></Route>
          </Route>
          <Route path="/events"  element ={<Events></Events>}></Route>
          <Route path="/contact"  element ={<Contact></Contact>}></Route>
          <Route path="*"  element ={<Woops404></Woops404>}></Route>
        </Routes>
      </div>
    )
  } else {
    return <OpenApp></OpenApp>
  }
}

export default App;
