
import { BrowserRouter,Routes,Route } from 'react-router-dom'
import ResetPassword from './pages/ResetPassword.jsx'


function App() {
  return (
   <>
   <BrowserRouter>
   <Routes>
   <Route path='/reset-password/:randomString/:expitationTimestamp' element={<ResetPassword/>}/>
   <Route path='*' element={"welcome"}/>

   </Routes>
   
   </BrowserRouter>
   
   </>
  )
}

export default App