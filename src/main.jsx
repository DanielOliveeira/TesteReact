import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
// import NavBar from './components/navbar/navBar.jsx'
import Land from './routes/Land.jsx';
import Contact from './routes/Contact.jsx';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
// import App from './App.jsx';
// import Error from './routes/Error.jsx';
import Login from './routes/Login.jsx';
import Stock from './routes/Stock.jsx';


const router = createBrowserRouter([
  {
    path: '/',
    element: <Land />
  },
  {
    path: 'contact',
    element: <Contact />
  },
  {
    path: 'login',
    element: <Login />
  },
  {
    path: 'estoque',
    element: <Stock />
  },
])

// const router = createBrowserRouter([
//   {
//     path: '/',
//     element: <App/>,
//     //3 - pagina de erro
//     errorElement: <Error />,
//     children: [
//       {
//         path: '/',
//         element: <Land />
//       },
//       {
//         path: 'contact',
//         element: <Contact />
//       },
//       {
//         path: 'login',
//         element: <Login />
//       },
//     ],
//   }, 
// ]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router = {router} />
  </StrictMode>,
)
