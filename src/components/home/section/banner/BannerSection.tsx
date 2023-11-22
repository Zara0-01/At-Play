import React, { useState } from 'react'
import './banner-styles.scss'
import BannerImage from 'assets/images/home/banner/banner-one-thumb.png'
import StarIcon from 'assets/images/star.png'
import VideoFrameIcon from 'assets/images/popup-video.png'
import LinesContent from 'shared/ui/design/LinesContent'
import { LinkButton } from 'shared/ui/buttons/ButtonUi'
import { VideoModals } from 'layouts/header/video-modal/VideoModal'
import ScrollAnimatedImage from './ScrollAnimatedImage'
import VideoPopUp from "../../../../shared/ui/popup/video-popop/VideoPopUp";

function BannerSection() {
    const [ isModalOpen, setIsModalOpen ] = useState(false)

    const openYouTubeVideo = () => {
        setIsModalOpen(true)
    }

    const closeYouTubeVideo = () => {
        setIsModalOpen(false)
    }

    return (
        <section className="banner">
            <div className="container px-4 w-full">
                <div className="row mx-4">
                    <div className="col-12">
                        <div className="banner__content">
                            <h1 className="uppercase text-8xl text-white text-start font-black mb-0 title-anim">
                                WE ARE
                                <span className="text-stroke">
                                    CREATIVE
                                </span>
                                <span className="interval">
                                    <i className="icon-arrow-top-right"></i>
                                    DIGITAL AGENCY
                                </span>
                            </h1>
                            <div className="banner__content-inner">
                                <p>We are a full-service website design, development and digital marketing company
                                    specializing in SEO, content marketing that grows brands.</p>
                                <div className="cta section__content-cta">
                                    <div className="single">
                                        <h5 className="fw-7">
                                            12+
                                        </h5>
                                        <p className="fw-5">years of experience</p>
                                    </div>
                                    <div className="single">
                                        <h5 className="fw-7">
                                            25k
                                        </h5>
                                        <p className="fw-5">completed projects</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <img
                src={BannerImage}
                alt="Image"
                className="banner-one-thumb d-none d-sm-block g-ban-one"
            />

            <ScrollAnimatedImage
                imageSrc="your-image-source.jpg"
                altText="Your Alt Text"
                className="banner-one-thumb.visible"
            />

            <img src={StarIcon} alt="Image" className="star" />
            <div className="banner-left-text banner-social-text d-none d-md-flex">
                <LinkButton label="mail : info@xpovio.com" href="mailto:info@xpovio.com" />
                <LinkButton label="Call : +99 2158 003 6980" href="tel:99-2158-003-6980" />
            </div>

            <div className="banner-right-text banner-social-text d-none d-md-flex">
                <LinkButton label="instagram" href="https://www.instagram.com/" />
                <LinkButton label="Linkedin" href="https://www.pinterest.com/" />
                <LinkButton label="facebook" href="https://www.facebook.com/" />
            </div>

            <a
                onClick={openYouTubeVideo}
                className="video-frame video-btn"
                rel="noopener noreferrer"
            >
                <img src={VideoFrameIcon} alt="Image" />
                <i className="fa-sharp fa-solid fa-play"></i>
            </a>

            <VideoPopUp
                isOpen={isModalOpen}
                onClose={closeYouTubeVideo}
                videoUrl="//www.youtube.com/embed/RvreULjnzFo?autoplay=1"
            />
            <LinesContent />
        </section>
    )
}

export default BannerSection