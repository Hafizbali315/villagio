import { useState } from 'react'
import { Link } from 'react-router-dom'
import { GiHamburgerMenu } from 'react-icons/gi'

const Navbar = () => {
	const [showSmNavbar, setShowSmNavbar] = useState(false)

	return (
		<div className="navbar">
			<div className="navbar_lg">
				<ul className="left">
					<li>
						<Link to="#houses" className="link">
							Our Houses
						</Link>
					</li>
					<li>
						<Link to="#destinations" className="link">
							Our Destinations
						</Link>
					</li>
					<li>
						<Link to="#about-us" className="link">
							About Us
						</Link>
					</li>
					<li>
						<Link to="#owners" className="link">
							Owners
						</Link>
					</li>
				</ul>

				<ul className="right">
					<li>
						Call us at <span>+333 133 05 05</span>
					</li>
					<li>
						<Link to="/my-account" className="link">
							My Account
						</Link>
					</li>
				</ul>
			</div>

			<div className="logo">
				<Link to="/" className="link">
					Villagio
				</Link>
			</div>

			<div className="hamburger">
				{showSmNavbar ? (
					<span className="hamburger_icon" onClick={() => setShowSmNavbar(false)}>
						X
					</span>
				) : (
					<GiHamburgerMenu className="hamburger_icon" onClick={() => setShowSmNavbar(true)} />
				)}
			</div>

			{showSmNavbar && (
				<div className="sm_menu">
					<ul>
						<li>
							<Link to="#houses" className="link">
								Our Houses
							</Link>
						</li>
						<li>
							<Link to="#destinations" className="link">
								Our Destinations
							</Link>
						</li>
						<li>
							<Link to="#about-us" className="link">
								About Us
							</Link>
						</li>
						<li>
							<Link to="#owners" className="link">
								Owners
							</Link>
						</li>
						<li>
							Call us at <span>+333 133 05 05</span>
						</li>
						<li>
							<Link to="/my-account" className="link">
								My Account
							</Link>
						</li>
					</ul>
				</div>
			)}
		</div>
	)
}

export default Navbar
