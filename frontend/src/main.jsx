import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import { BrowserRouter } from 'react-router-dom'
import AuthProvider from './context/authProvider.jsx'

createRoot(document.getElementById('root')).render(
 
 
 <BrowserRouter>

 <AuthProvider>
   <div className='dark:bg slate 980 dark:text white'>
    <App/>
  </div>
 </AuthProvider>
  
 </BrowserRouter>
  
)
