import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import Home from './Pages/Home/Home';
import { BrowserRouter,Switch,Route } from 'react-router-dom';
import Notfound from './Pages/NotFound/Notfound';
import Booking from './Pages/Booking/Booking/Booking';
import Header from './Pages/Shared/Header/Header';
import Login from './Pages/Login/Login/Login';
import Services from './Pages/Home/Services/Services';
import Experts from './Pages/Home/Experts/Experts';


function App() {
  return (
    <div className="App">
     <BrowserRouter>
      <Header></Header>
          <Switch>
                <Route exact path="/">
                  <Home></Home>
                </Route>
                <Route  path="/home">
                  <Home></Home>
                </Route>
                <Route  path="/login">
                  <Login></Login>
                </Route>
                <Route  path="/booking/:serviceId">
                  <Booking></Booking>
                </Route>
      
                {/* <Route  path="/services">
                 <Services></Services>
                </Route>
                <Route  path="/experts">
                 <Experts></Experts>
                </Route> */}
                <Route path="/*">
                  <Notfound>
                  </Notfound>
              </Route>
          </Switch>
     </BrowserRouter>
    </div>
  );
}

export default App;
