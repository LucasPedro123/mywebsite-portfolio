import Home from './Pages/Home/Home'
import './assets/styles/index.css'
import { GoogleOAuthProvider } from '@react-oauth/google';
function App() {

  return (
    <>
      <GoogleOAuthProvider
        clientId="978390041476-9pbv4rqvcvs89vikeqlg64q4eb75197g.apps.googleusercontent.com"
      >
        <Home />
      </GoogleOAuthProvider>

    </>
  )
}

export default App
