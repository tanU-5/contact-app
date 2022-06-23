import React from 'react';
import {Link} from 'react-router-dom';


const Navbar =()=>{
	return(
		<div>
			<nav className='navbar navbar-expand-lg navbar-light bg-light py-4 my-3 '>
				<Link to ="/" className='navbar-brand ml-5 '> Contact App With React-Redux </Link>
				<ul className='navbar-nav'>
					<li className='nav-items'>

					</li>
				</ul>
			</nav>
		</div>
	)

}
export default Navbar;