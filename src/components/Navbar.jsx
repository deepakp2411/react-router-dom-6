import { Link , NavLink } from "react-router-dom"

const Navbar = () => {
  return (
    <>
    {/* <ul>
        <li><Link to="/">Home</Link></li>
        <li><Link to="/about">About</Link></li>
        <li><Link to="/contact">Contact</Link></li>
        
    </ul> */}
    <ul>
        <li><NavLink to="/" style={({isActive}) => {return {color: isActive ? 'red' : ''}}}>Home</NavLink></li>
        <li><NavLink to="/about" style={({isActive}) => {return {color: isActive ? 'red' : ''}}}>About</NavLink></li>
        <li><NavLink to="/contact" style={({isActive}) => {return {color: isActive ? 'red' : ''}}}>Contact</NavLink></li>
        <li><NavLink to="/post/mobile" style={({isActive}) => {return {color: isActive ? 'red' : ''}}}>Post</NavLink></li>
    </ul>
    
    </>
  )
}

export default Navbar