import { RouterProvider } from 'react-router-dom';
import './App.css';
import { router } from './Router/Route';

function App() {
  return (
    <div className="overflow-hidden">
      <RouterProvider router={router}>

      </RouterProvider>
    </div>
  );
}

export default App;
