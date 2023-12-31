import React from 'react'
import TextAnimation from 'utils/hooks/useAnimatetText'

import BannerImg from 'assets/images/banner/cmn-banner-bg.png'
import './breadcrumb-styles.scss'

interface BreadCrumbProps {
    title: string
    href?: string
    description?: string
}

const BreadCrumb: React.FC<BreadCrumbProps> = ({ title, href, description }) => {
    return (
        <section className="cmn-banner bg-img" data-background={BannerImg} style={{backgroundImage: `url(${BannerImg})`}}>
            <div className="container">
                <div className="row gaper align-items-center">
                    <div className={`${description ? 'col-12 col-lg-5 col-xl-7' : 'col-12' }`}>
                        <div className="text-center text-lg-start">
                            <h2 className="title title-anim">
                                <TextAnimation text={href ? href : title} />
                            </h2>
                            <nav aria-label="breadcrumb">
                                <ol className="breadcrumb items-center">
                                    <li className="breadcrumb-item">
                                        <a href="/">
                                            <i className="fa-solid fa-house"></i>
                                            Home
                                        </a>
                                    </li>
                                    <li className="breadcrumb-item active" aria-current="page">
                                        {title}
                                    </li>
                                </ol>
                            </nav>
                        </div>
                    </div>
                    <div className={`${description ? 'col-12 col-lg-7 col-xl-5' : 'd-none'}`}>
                        <div className="text-center text-lg-start">
                            <p className="primary-text"> {description} </p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default BreadCrumb