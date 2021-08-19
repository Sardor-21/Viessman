import LinkCardWrapper from "./LinkCardWrapper"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleRight } from "@fortawesome/free-solid-svg-icons";
import Link from "next/link";
const LinkCard = () => {
    return (
        <LinkCardWrapper>
            <div className="row">
                <div className="col-md-6 col-lg-4 col-xl-3 p-3 mb-3" style={{ height: "400px" }}>
                    <div className="rounded-3 overflow-hidden h-100 shadow">
                        <img src="howbuy.png" className="w-100 h-50" alt="" />
                        <div className="h-50 d-flex flex-column justify-content-around align-items-center py-4">
                            <p className="fw-bold fs-5">Где купить?</p>
                            <p>Партнеры ООО "Viessmann"</p>
                            <Link href="#"><a><span className="me-1"><FontAwesomeIcon icon={faAngleRight} /></span> Где купить?</a></Link>
                        </div>
                    </div>
                </div>
            </div>
        </LinkCardWrapper>
    )
}

export default LinkCard
