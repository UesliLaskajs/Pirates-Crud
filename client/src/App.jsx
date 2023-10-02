import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import CreatePirate from './components/CreatePirate'
import UserList from './components/UserList'
import UserById from './components/UserEditById'
function App() {


  return (
    <>
      <Router>
        <Routes>
          <Route path='/pirate/new' element={<CreatePirate/>}  />
          <Route path='/pirates' element={<UserList/>}  />
          <Route path='/pirate/:id' element={<UserById/>}  />
        </Routes>
      </Router>
    </>
  )
}

export default App