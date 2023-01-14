import logo from './logo.svg';
import './App.css';
import Dashboard from './components/Dashboard/Dashboard';
import { RouterProvider } from 'react-router-dom';
import { routes } from './routes/routes';

function App() {
  return (
    <RouterProvider  router={routes}>
     
    </RouterProvider>
  );
}

export default App;
