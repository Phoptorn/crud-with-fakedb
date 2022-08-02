import './App.css';

import UserGet from './components/UserGet';
import UserFind from './components/UserFind';
import Login from './components/Login';
import Submit from './components/Submit';

import ShowInput from './basic/ShowInput'
import GetData from './basic/GetData';
import GetOne from './basic/GetOne';
import SearchJSON from './basic/SearchJSON';

import GetJSON from './ByJSON/GetJSON'
import JSONone from './ByJSON/JSONone';

function App() {
  return (
    <div className="App">
        {/* <div className="basic">
            <div className="ShowInput">
                <ShowInput />
            </div>
            <div className="GetData">
                <GetData />
            </div>
            <div className="GetOne">
                <GetOne />
            </div>
            <div className="SearchJSON">
                <SearchJSON />
            </div>
        </div> */}

        <div className='byjson'>
            <div className="GetJSON">
                <GetJSON />
              </div>
            <div className="JSON-one">
                <JSONone />
            </div>
        </div>

        {/* <div className='components'>
            <div className="UserGet">
                <UserGet />
            </div>
            <div className="UserFind">
                <UserFind />
            </div>
            <div className="Login">
                <Login />
            </div>
        </div> */}
    </div>
  );
}

export default App;
