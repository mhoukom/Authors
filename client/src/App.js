import {Route, Routes} from 'react-router-dom';
import Main from './components/Main';
import New from './components/New';
import Update from './components/Update';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <div className="container">
      <h1 className='pt-4'>Favorite Authors</h1>
      <Routes>
        <Route exact path="/" element={<Main/>}/>
        <Route exact path="/authors/update/:id" element={<Update/>}/>
        <Route exact path="/authors/new" element={<New/>}/>
      </Routes>
    </div>
  );
}

export default App;
