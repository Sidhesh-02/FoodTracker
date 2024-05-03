import { useNavigate } from 'react-router';

import '../Style/Navbar.css'
const Nav = ()=>{
    const navigate = useNavigate();
    return (
    <div className="Navbar">
        <ul>
            <li>
                <a onClick={()=>{navigate('/')}}>Home</a>
            </li>
            <li>
                <a onClick={()=>{navigate('/addfood')}}>Add Food</a>
            </li>
            <li>
                <a onClick={()=>{navigate('/history')}}>History</a>
            </li>
            <li className='NavRight'>
                <a onClick={()=>{navigate('/')}}>
                    Nutrition Tracker
                </a>
            </li>
        </ul>
    </div>
    )
}

export default Nav;