
import { BrowserRouter,Routes,Route } from 'react-router-dom'
import ResetPassword from './pages/ResetPassword.jsx'


function App() {
  return (
   <>
   <BrowserRouter>
   <Routes>
<Route path='/' element={<ResetPassword/>}/>


   </Routes>
   
   </BrowserRouter>
   
   </>
  )
}

export default App