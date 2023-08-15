import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import { createBrowserRouter,RouterProvider } from 'react-router-dom';
import RootLayout from './RootLayout'
import Home from './components/home/Home'
import AboutUs from './components/aboutus/AboutUs'
import Services from './components/services/Services'
import Faqs from './components/faqs/Faqs'
import ContactUs from './components/contactus/ContactUs'
import Login from './components/login/Login'
import Register from './components/register/Register'
import Application from './components/application/Application';
function App() {
  const router=createBrowserRouter([
    {
      path:"/",
      element:<RootLayout/>,
      children:[
        {
          path:"/",
          element:<Home/>
        },
        {
          path:"/aboutus",
          element:<AboutUs/>
        },
        {
          path:"/services",
          element:<Services/>
        },
        {
          path:"/faqs",
          element:<Faqs/>
        },
        {
          path:"/contactus",
          element:<ContactUs/>
        },
        {
          path:"/login",
          element:<Login/>
        },
        {
          path:"/register",
          element:<Register/>
        },
        {
          path:"/apply",
          element:<Application/>
        }
      ]
    }
  ])
  return (
    <div className="App">
      <RouterProvider router={router}/>
    </div>
  );
}

export default App;
