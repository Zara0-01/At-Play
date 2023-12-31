import React from 'react'

import LinesContent from 'shared/ui/design/lines-content/LinesContent'
import Slider from 'react-slick'

import OneImg from 'assets/images/sponsor/one.png'
import TwoImg from 'assets/images/sponsor/two.png'
import ThreeImg from 'assets/images/sponsor/three.png'
import FourImg from 'assets/images/sponsor/four.png'
import FiveImg from 'assets/images/sponsor/five.png'
import SixImg from 'assets/images/sponsor/six.png'
import './sponsor-styles.scss'

interface SponsorSectionProps {
    isActive?: boolean
}

const SponsorSection: React.FC<SponsorSectionProps> = ({ isActive = true }) => {
    const slickSettings = {
        slidesToShow: 6,
        slidesToScroll: 1,
        centerMode: true,
        arrows: true,
        dots: false,
        speed: 300,
        centerPadding: "20px",
        infinite: true,
        autoplaySpeed: 1500,
        autoplay: true,
        responsive: [
            {
                breakpoint: 1700,
                settings: {
                    slidesToShow: 5,
                },
            },
            {
                breakpoint: 1400,
                settings: {
                    slidesToShow: 4,
                },
            },

            {
                breakpoint: 1200,
                settings: {
                    slidesToShow: 3,
                },
            },

            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 2,
                },
            },
        ]
    }

    const sponsorImages = [ OneImg, TwoImg, ThreeImg, FourImg, FiveImg, SixImg, OneImg, TwoImg, ThreeImg, FourImg, FiveImg, SixImg ]

    return (
        <div className="sponsor relative pt-32 pb-0">
            <div className="container-fluid">
                <div className="row justify-content-center">
                    <div className="col-12">
                        <Slider {...slickSettings} className="center-slider">
                            {sponsorImages.map((imgSrc, index) => (
                                <div key={index} className="sponsor__slider-item">
                                    <img src={imgSrc} alt={`Sponsor ${index + 1}`} />
                                </div>
                            ))}
                        </Slider>
                    </div>
                </div>
            </div>
            {isActive && <LinesContent />}
        </div>
    )
}

export default SponsorSection