import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Login from './pages/Login';
import Register from './pages/Register';
import Header from './components/Header';
import NewTicket from './pages/NewTicket';
import PrivateRoute from './components/PrivateRoute';
import Tickets from './pages/Tickets';
import Ticket from './pages/Ticket';
import ChatBot from './pages/ChatBot';


const App = () => {
  return (
    <>
      <Router>
        <div className="container">
          <Header/>
          <Routes>
            <Route path='/' element={<Home />}/>
            <Route path='/login' element={<Login />}/>
            <Route path='/register' element={<Register />}/>
            
            <Route path="/new-ticket" element={<PrivateRoute />} >
              <Route path='/new-ticket' element={<NewTicket />}/>
            </Route>
          
            <Route path='/tickets' element={<Tickets />}/>
            <Route path='/ticket/:ticketId' element={<Ticket />}/>
            <Route path='/ask-chat-gpt' element={<ChatBot />}/>
            
            
          </Routes>
        </div>
      </Router>
    </>
  )
}

export default App
