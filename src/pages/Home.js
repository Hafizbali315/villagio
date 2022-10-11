import { useRef } from 'react'

import Header from '../components/Header'
import { RiRocketLine } from 'react-icons/ri'
import { GiMountainCave, GiPentarrowsTornado, GiSparkSpirit, GiSpookyHouse } from 'react-icons/gi'
import { BsCup, BsFilter } from 'react-icons/bs'
import { MdOutlinePool } from 'react-icons/md'
import { SiMaterialdesign } from 'react-icons/si'
import { AiOutlineRight, AiOutlineLeft, AiFillStar } from 'react-icons/ai'

import House1 from '../assets/House1.jpg'
import House2 from '../assets/House2.jpg'
import House3 from '../assets/House3.jpg'
import House4 from '../assets/House4.jpg'
import ImgCarusal from '../components/ImgCarusal'
import { Link } from 'react-router-dom'

const Home = () => {
	const scrollRef = useRef(null)

	const locationCategories = [
		{
			id: 1,
			name: 'OMG!',
			icon: <RiRocketLine className="icon" />,
		},
		{
			id: 2,
			name: 'Arctic',
			icon: <GiPentarrowsTornado className="icon" />,
		},
		{
			id: 3,
			name: 'Amazing pools',
			icon: <MdOutlinePool className="icon" />,
		},
		{
			id: 4,
			name: 'Bed & Breakfasts',
			icon: <BsCup className="icon" />,
		},
		{
			id: 5,
			name: 'Mansions',
			icon: <GiSpookyHouse className="icon" />,
		},
		{
			id: 6,
			name: 'Caves',
			icon: <GiMountainCave className="icon" />,
		},
		{
			id: 7,
			name: 'Design',
			icon: <SiMaterialdesign className="icon" />,
		},
		{
			id: 8,
			name: 'National Parks',
			icon: <GiSparkSpirit className="icon" />,
		},
		{
			id: 9,
			name: 'OMG!',
			icon: <RiRocketLine className="icon" />,
		},
		{
			id: 10,
			name: 'Arctic',
			icon: <GiPentarrowsTornado className="icon" />,
		},
		{
			id: 11,
			name: 'Amazing pools',
			icon: <MdOutlinePool className="icon" />,
		},
		{
			id: 12,
			name: 'Bed & Breakfasts',
			icon: <BsCup className="icon" />,
		},
		{
			id: 13,
			name: 'Mansions',
			icon: <GiSpookyHouse className="icon" />,
		},
		{
			id: 14,
			name: 'Caves',
			icon: <GiMountainCave className="icon" />,
		},
		{
			id: 15,
			name: 'Design',
			icon: <SiMaterialdesign className="icon" />,
		},
		{
			id: 16,
			name: 'National Parks',
			icon: <GiSparkSpirit className="icon" />,
		},
	]

	const scrollLeft = (e) => {
		if (scrollRef.current) {
			console.log('left', e.target.scrollWidth)
			scrollRef.current.scrollBy({
				top: 0,
				left: -300,
				behavior: 'smooth',
			})
		}
	}

	const scrollRight = () => {
		if (scrollRef.current) {
			scrollRef.current.scrollBy({
				top: 0,
				left: 300,
				behavior: 'smooth',
			})
		}
	}

	const locationsData = [
		{
			id: 0,
			name: 'Pelkosenniemi, Finland',
			host: 'Professional Host',
			reviews: '4.9',
			images: [
				{
					url: House1,
				},
				{
					url: House2,
				},
				{
					url: House3,
				},
				{
					url: House4,
				},
			],
			price: '€668',
		},
		{
			id: 1,
			name: 'Tambon Nong Kae',
			host: 'Professional Host',
			reviews: '4.9',
			images: [
				{
					url: House2,
				},
				{
					url: House1,
				},
				{
					url: House3,
				},
				{
					url: House4,
				},
			],
			price: '€248',
		},
		{
			id: 2,
			name: 'Tambon Nong Kae',
			host: 'Professional Host',
			reviews: '4.9',
			images: [
				{
					url: House3,
				},
				{
					url: House1,
				},
				{
					url: House2,
				},
				{
					url: House4,
				},
			],
			price: '€248',
		},
		{
			id: 1,
			name: 'Tambon Nong Kae',
			host: 'Personal Host',
			reviews: '4.9',
			images: [
				{
					url: House4,
				},
				{
					url: House1,
				},
				{
					url: House3,
				},
				{
					url: House2,
				},
			],
			price: '€248',
		},
	]

	return (
		<div className="home">
			<Header />

			<div className="locations">
				<div className="locations_navbar_container">
					<ul className="location_navbar" ref={scrollRef}>
						{locationCategories.map((l) => (
							<li>
								{l.icon}
								<span>{l.name}</span>
							</li>
						))}
					</ul>
					<div className="left_scroll" onClick={scrollLeft}>
						<AiOutlineLeft className="icon" />
					</div>
					<div className="right_scroll" onClick={scrollRight}>
						<AiOutlineRight className="icon" />
					</div>
					<button className="filer_btn">
						<BsFilter className="icon" />
						<span>Filter</span>
					</button>
				</div>

				<div className="locations_cards">
					{locationsData.map((ld) => (
						<div className="card">
							<div className="img_carusal">
								<ImgCarusal slides={ld.images} />
							</div>

							<div className="heading">
								<Link to={`/details/${ld.id}`} className="name">
									{ld.name}
								</Link>
								<div className="reviews">
									<AiFillStar className="star_icon" />
									{ld.reviews}
								</div>
							</div>

							<div className="host">{ld.host}</div>

							<div className="date">2 - 7 Jan</div>

							<div className="price">
								<span>{ld.price}</span> total
							</div>
						</div>
					))}
				</div>
			</div>
		</div>
	)
}

export default Home
