// styling
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';

// components
import Header from '../src/components/Header';
import Home from './screens/Home';

// dependencies
import store from './store';
import { Provider } from 'react-redux';
import { BrowserRouter as Router, Route } from "react-router-dom";
import Preview from './screens/Preview';

function App() {
  return (
    <Provider store={store}>
      <div className="App">
          <Header />

          <Router>
            <Route exact path="/" component={Home} />
            <Route exact path="/preview/:id" component={Preview} />
          </Router>
      </div>
    </Provider>
  );
}

export default App;
