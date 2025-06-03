import { RouterProvider, createBrowserRouter } from 'react-router';
import Home from './Pages/Home';
import About from './Pages/About';
import Layout from './components/Layout/Layout';
import ResumePage from './Pages/ResumePage';

const router = createBrowserRouter([
  {
    path: '/',
    element: <Layout />,
    children: [
      {
        index: true,
        element: <Home />,
      },
      {
        path: 'about',
        element: <About />,
      },
      {
        path: 'resume',
        element: <ResumePage />,
      },
    ],
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
