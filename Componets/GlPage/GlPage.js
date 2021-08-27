import React from 'react'
import Fade from 'react-reveal/Fade';
import GlpageWrapper from './GlpageWrapper'

const GlPage = () => {
    return (
        <GlpageWrapper>
            <div className="w-100 content position-relative d-flex align-items-center" style={{ height: "500px", }}>
                <img className="w-100 h-100 gl_img position-absolute top-0 left-0" style={{ objectFit: "cover" }} src="https://viessmann.vercel.app/images/services.jpg" alt="" />
                <Fade right>
                    <div style={{ padding: "100px" }}>
                        <h1 className="gl_title fw-bold text-white position-relative">Продукты</h1>
                    </div>
                </Fade>
            </div>
        </GlpageWrapper>
    )
}

export default GlPage
