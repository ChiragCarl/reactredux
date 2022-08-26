
import './App.css';
import Navbar from './Navbar';
import Store from './Store';

function App() {
  return (
    <div className="App">
        <Navbar/>
        <div className='container'>
            <div className='row'>
                <div className='col-md-4'>
                    <Store/>
                </div>
            </div>
        </div>
    </div>
  );
}

export default App;
