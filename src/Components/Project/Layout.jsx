import { Outlet, Link } from 'react-router-dom';
import Films from './Film';
import Tvs from './Tv';
import NoPage from './NoPage';
const Layout = () => {
	return (
		<div>
			<nav>
				<ul>
					<li>
						<Link to="/Home">Home</Link>
					</li>
					<li>
						<Link to="/Film">Film</Link>
					</li>
					<li>
						<Link to="/Tvs">Serie TV</Link>
					</li>
				</ul>
			</nav>

			<Outlet />
		</div>
	);
};

export default Layout;
