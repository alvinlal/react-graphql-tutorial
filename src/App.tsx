import { Route, Routes } from 'react-router-dom';
import Pet from './pages/Pet';
import Pets from './pages/Pets';

function App() {
  return (
    <div className="App">
    <Routes>
      <Route path='/' element={<Pets/>}/>
      <Route path='/:id' element = {<Pet/>}/>
    </Routes>
    </div>
  );
}

export default App;
