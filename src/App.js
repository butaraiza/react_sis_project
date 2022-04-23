import { BrowserRouter as Router, Route , Switch} from 'react-router-dom';
import Header from './components/pages/header.component';
import Footer from './components/pages/footer.component';
import HomePage from './components/pages/homepage.component';
import StudentInfo from './components/students/student-info/student-info.component';
import AddStudent from './components/students/add-student/add-student.component';
import EditStudent from './components/students/student-edit/student-edit.component';

import './App.css';

function App() {
  return (
    <div className="App">
       <Header />

       <Router>
          <Switch>
              <Route exact path="/" component={HomePage} />
              <Route path="/add-student" component={AddStudent} />
              <Route path="/student-edit/:id" component={EditStudent} />
              <Route path="/student-info/:id" component={StudentInfo} />
          </Switch>
        </Router>
  
       <Footer />

    </div>
  );
}

export default App;
