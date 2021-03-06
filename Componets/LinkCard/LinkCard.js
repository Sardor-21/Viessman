import LinkCardWrapper from "./LinkCardWrapper"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleRight } from "@fortawesome/free-solid-svg-icons";
import Link from "next/link";
import CardLink from "../../Data/CardLink";
const LinkCard = () => {
    return (
        <LinkCardWrapper>
            <div className="row">
                {CardLink.map(v => <div className="col-md-6 col-lg-4 col-xl-3 p-3 mb-3" style={{ height: "400px" }}>
                    <div className="rounded-3 overflow-hidden h-100 shadow">
                        <img src={v.img} className="w-100 h-50" style={{objectFit: "cover"}} alt="" />
                        <div className="h-50 d-flex flex-column justify-content-around align-items-center py-4 text-center">
                            <p className="fw-bold fs-5">{v.title}</p>
                            <p>{v.desc}</p>
                            <Link href={v?.link}><a className="d-block w-100"><span className="me-1"><FontAwesomeIcon icon={faAngleRight} /></span>{v.linkTitle}</a></Link>
                        </div>
                    </div>
                </div>)}

            </div>
        </LinkCardWrapper>
    )
}

export default LinkCard
