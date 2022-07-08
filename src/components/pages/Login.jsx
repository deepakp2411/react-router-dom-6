import { useLocation } from 'react-router-dom';


const Login = () => {
    const location = useLocation()
  return (
    <>
    <div>
        <h1>Login Now</h1>
        <h2>{location.state.st}</h2>
    </div>
    </>
  )
}

export default Login