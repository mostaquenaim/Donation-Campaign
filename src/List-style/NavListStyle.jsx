/* eslint-disable react/prop-types */
import { NavLink } from "react-router-dom";

const NavListStyle = ({ name, link }) => {
    return (
        <div>
            <li>
                <NavLink
                    to={link}
                    className={({ isActive }) => isActive ? "text-rose-600 border-b-2 border-rose-600" : "text-black"
                    }
                >
                    {name}
                </NavLink>
            </li>
        </div>
    );
};

export default NavListStyle;
