import React from 'react';
import './App.css';
import { Provider } from 'react-redux';  
import BlogPost from './components/BlogPost';
import { Store } from './redux/Store/Stores';


const store = Store();
function App() {
  return (
    <Provider store={store}> 
      <div className="App">
        <BlogPost/>
      </div>
    </Provider>
  );
}

export default App;
