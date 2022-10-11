import { BsInstagram, BsFacebook, BsTwitter } from 'react-icons/bs'
import Navbar from './Navbar'

const Header = () => {
	return (
		<div className="header">
			<Navbar />

			<h1>
				Find the home <br />
				of your dreams
			</h1>

			<div className="search">
				<input type="text" placeholder="Where do you want to go?" />
				<button>Search</button>
			</div>

			<div className="locations">
				paris / corsica / ibzia / london / new york / capri <br />
				bzia / london / australia / capri
			</div>

			<ul className="socials_row">
				<li>
					<a href="www.instagram.com">
						<BsInstagram />
					</a>{' '}
				</li>
				<li>
					<a href="www.facebook.com">
						<BsFacebook />
					</a>
				</li>
				<li>
					<a href="www.twitter.com">
						<BsTwitter />
					</a>
				</li>
			</ul>
		</div>
	)
}

export default Header
