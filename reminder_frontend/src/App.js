import {
  HashRouter as Router,
  Route
} from "react-router-dom";


import './App.css';
import Header from './components/Header'
import RemindersListPage from './pages/RemindersListPage'
import ReminderPage from './pages/ReminderPage'

function App() {
  return (
    <Router>
      <div className="container dark">
        <div className="app">
          <Header />
          <Route path="/" exact component={RemindersListPage} />
          <Route path="/Reminder/:id" component={ReminderPage} />
        </div>
      </div>
    </Router>
  );
}

export default App;
