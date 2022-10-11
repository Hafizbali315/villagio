import React, { useState } from 'react'
import { AiOutlineLeft, AiOutlineRight } from 'react-icons/ai'

const ImgCarusal = ({ slides }) => {
	const [currentIndex, setCurrentIndex] = useState(0)

	const goToPrevious = () => {
		const isFirstSlide = currentIndex === 0
		const newIndex = isFirstSlide ? slides.length - 1 : currentIndex - 1
		setCurrentIndex(newIndex)
	}
	const goToNext = () => {
		const isLastSlide = currentIndex === slides.length - 1
		const newIndex = isLastSlide ? 0 : currentIndex + 1
		setCurrentIndex(newIndex)
	}
	const goToSlide = (slideIndex) => {
		setCurrentIndex(slideIndex)
	}

	return (
		<div className="img_carusal">
			<img src={slides[currentIndex].url} alt="images" />

			<div className="dot_container">
				{slides.map((slide, slideIndex) => (
					<div className="dot_style" key={slideIndex} onClick={() => goToSlide(slideIndex)}></div>
				))}
			</div>

			<div className="left_icon" onClick={goToPrevious}>
				<AiOutlineLeft className="icon" />
			</div>
			<div className="right_icon" onClick={goToNext}>
				<AiOutlineRight className="icon" />
			</div>
		</div>
	)
}

export default ImgCarusal
