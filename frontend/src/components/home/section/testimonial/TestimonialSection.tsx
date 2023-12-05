import React from 'react'

import LinesContent from 'shared/ui/design/lines-content/LinesContent'
import { TestimonialClientsList } from './testimonial-clients-list/TestimonialClientsList'
import { TextSlider } from '../slider/TextSlider'

import './testimonial-styles.scss'

function TestimonialSection() {
    return (
        <section className="section relative testimonial pt-0 position-relative">
            <TextSlider
                labels={["clients testimonial", "clients testimonial"]}
                href=""
                className="testimonial__text-slider slick-initialized slick-slider"
                settings={{
                    slidesToShow: 2,
                    slidesToScroll: 2,
                    centerMode: true,
                    arrows: false,
                    dots: false,
                    speed: 10000,
                    centerPadding: "15px",
                    infinite: true,
                    autoplaySpeed: 0,
                    autoplay: true,
                    cssEase: "linear",
                }}
                className1="testimonial__text-slider-single slick-slide slick-cloned"
            />
            <TestimonialClientsList />
            <LinesContent />
        </section>
    )
}

export default TestimonialSection