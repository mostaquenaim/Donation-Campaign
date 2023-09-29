import NavListStyle from '../List-style/NavListStyle';


const Header = () => {
    return (
        <div>
            <nav className="flex justify-around text-center items-center
               bg-white
             ">

                <div className="dropdown md:hidden">
                    <label tabIndex="0" className="btn btn-ghost btn-circle">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h7" /></svg>
                    </label>
                    <ul tabIndex="0" className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-white rounded-box w-52">
                        <NavListStyle name="Home" link="/" />
                        <NavListStyle name="Donation" link="donation" />
                        <NavListStyle name="Statistics" link="statistics" />
                    </ul>
                </div>

                <img src="/Logo.png" alt="Logo" />

                <ul className='hidden md:flex gap-3'>
                    <NavListStyle name="Home" link="/" />
                    <NavListStyle name="Donation" link="donation" />
                    <NavListStyle name="Statistics" link="statistics" />
                </ul>
            </nav>
        </div>
    );
};

export default Header;