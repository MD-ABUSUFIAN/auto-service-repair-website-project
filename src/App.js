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
import AuthProvider from './Context/AuthProvider';
import PrivateRoute from './Pages/Login/PrivateRoute/PrivateRoute';
import Register from './Pages/Register/Register';
import AddService from './Pages/AddService/AddService';
import ManageServices from './Pages/ManageServices/ManageServices';


function App() {
  return (
    <div className="App">
     <AuthProvider>
          <BrowserRouter>
              <Header></Header>
                  <Switch>
                        <Route exact path="/">
                            <Home></Home>
                        </Route>
                        <Route  path="/home">
                            <Home></Home>
                        </Route>
                        <Route  path="/services">
                           <Services></Services>
                        </Route>
                        <Route  path="/experts">
                            <Experts></Experts>
                        </Route>
                        <Route  path="/login">
                           <Login></Login>
                        </Route>
                        <Route  path="/register">
                           <Register></Register>
                        </Route>
                        <Route  path="/addservice">
                           <AddService></AddService>
                        </Route>
                        <Route  path="/ManageServices">
                           <ManageServices></ManageServices>
                        </Route>
                        <PrivateRoute  path="/booking/:serviceId">
                           <Booking></Booking>
                        </PrivateRoute>
                        <Route path="/*">
                           <Notfound></Notfound>
                      </Route>
                  </Switch>
              </BrowserRouter>
     </AuthProvider>
    </div>
  );
}

export default App;
