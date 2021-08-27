import { faFacebook, faInstagram, faYoutube } from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Link from 'next/link';
import React from 'react'
import FooterData from '../../Data/FooterData';
import FooterWrapper from './FooterWrapper';

const Footer = () => {
    return (
        <FooterWrapper>
            <div className="row">
                <div className="col-sm-6 col-lg-4 col-xl-3 mb-3">
                    <ul>
                        <li><img className="footer_logo" src="https://viessmann.vercel.app/images/viessman%20logo.png" alt="" /></li>
                        <li >
                            <p className="text-white fw-bold m-0">Социальные сети</p>
                        </li>
                        <li>
                            <div className="d-flex">
                                <Link href="#"><a className="footer_social"><FontAwesomeIcon icon={faFacebook} /></a></Link>
                                <Link href="#"><a className="footer_social"><FontAwesomeIcon icon={faInstagram} /></a></Link>
                                <Link href="#"><a className="footer_social"><FontAwesomeIcon icon={faYoutube} /></a></Link>
                            </div>
                        </li>
                    </ul>
                </div>
                {FooterData.map((v, i) => <div key={i} className="col-sm-6 col-lg-4 col-xl-3 mb-3">
                    <ul>
                        <li >
                            <h3 className="text-white h4 fw-bold m-0">{v.title}</h3>
                        </li>
                        {
                            v.linkName.map((v, i) => <li key={i}>
                                <Link href={v.href}><a className="footer_link">{v.link}</a></Link>
                            </li>)
                        }

                    </ul>
                </div>)}
            </div>
            <div className="footer_bootom">
                © OOO Viessmann , Tashkent PDP G88 GROUP FRONTEND 
            </div>
        </FooterWrapper>
    )
}

export default Footer;
