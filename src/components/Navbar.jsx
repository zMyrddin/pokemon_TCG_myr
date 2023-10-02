import { NavLink } from "react-router-dom";



export default function Navbar(props){
    return (
        <nav>
            <h3>Find your way here!</h3>
                <ul>
                    <li>
                    <NavLink to="/" style={({isActive}) => isActive ? {color: "red"} : undefined} >
						Home
					</NavLink>
                    </li>
                    <li>
                    <NavLink to="/album" style={({isActive}) => isActive ? {color: "red"} : undefined} >
						Album
					</NavLink>
                    </li>
                    <li>
                    <NavLink to="/shop" style={({isActive}) => isActive ? {color: "red"} : undefined} >
						Shop
					</NavLink>
                    </li>
                </ul>
        </nav>
    )
}