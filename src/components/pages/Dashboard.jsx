import { useNavigate } from "react-router-dom"

const Dashboard = () => {
    const navigate = useNavigate()
  return (
    <>
    <h1>Dashboard</h1>
    <button onClick={() => {navigate("/logout")}}>Logout</button>
    </>
  )
}

export default Dashboard