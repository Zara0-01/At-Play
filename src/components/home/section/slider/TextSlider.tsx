import React, { useEffect } from 'react'
import Slider from 'react-slick'
import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'

interface TextSliderProps {
    labels: string[]
    href: string
    className: string
    className1?: string
    settings: any
}

export const TextSlider: React.FC<TextSliderProps> = ({ labels, href, className, className1, settings }) => {
    useEffect(() => {

    }, [])

    return (
        <div className={className}>
            <Slider {...settings}>
                {labels.map((label, index) => (
                    <div key={index} className={`${className1 ? className1 : "slick-slide slick-current slick-active"}`}>
                        <h2 className="h1">
                            <a href={href}>
                                {label}
                                <i className="fa-solid fa-arrow-right" style={{ transform: 'rotate(45deg)' }}></i>
                            </a>
                        </h2>
                    </div>
                ))}
            </Slider>
        </div>
    )
}