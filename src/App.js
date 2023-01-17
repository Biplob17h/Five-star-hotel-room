import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import './App.css';
import Booking from './components/Booking/Booking';
import Home from './components/Home/Home';
import Main from './components/Layout/Main';
import Login from './components/Login/Login';
import Regester from './components/Regester/Regester';
import Rooms from './components/Rooms/Rooms';
import PrivateRoutes from './components/Routes/PrivateRoutes';

function App() {
  const router = createBrowserRouter([
    {
      path:'/',
      element:<Main></Main>,
      children:[
        {
          path:'/',
          element:<Home></Home>
        },
        {
          path:'/rooms',
          element:<Rooms></Rooms>
        },
        {
          path:'/login',
          element:<Login></Login>
        },
        {
          path:'/regester',
          element:<Regester></Regester>
        },
        {
          path:'/booking',
          element:<PrivateRoutes><Booking></Booking></PrivateRoutes>
        }
      ]
    }
  ])
  return (
    <div className="App">
      <RouterProvider router={router}></RouterProvider>
    </div>
  );
}

export default App;
