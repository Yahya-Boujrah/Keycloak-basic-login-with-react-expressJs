import './App.css'
import Protected from './components/protected';
import useAuth from './hooks/useAuth';

function App() {

  const isLogin = useAuth();

  return isLogin ? <Protected /> : <div></div> 
}

export default App
