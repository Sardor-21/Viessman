import CardWrapper from "./CardWrapper";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faAngleRight} from "@fortawesome/free-solid-svg-icons";
import Fade from 'react-reveal/Fade';

const data= [
    {
        img: "menu1.jpg",
        title: "Для жилья",
        desc: "Здесь вы найдете информацию о продуктах для отопления жилых помещений, частных и многоквартирных домов",
        icon:<FontAwesomeIcon icon={faAngleRight}/>
    },
    {
        img: "menu2.jpg",
        title: "Для жилья",
        desc: "Здесь вы найдете информацию о продуктах для отопления жилых помещений, частных и многоквартирных домов",
        icon:<FontAwesomeIcon icon={faAngleRight}/>
    },    {
        img: "menu3.jpg",
        title: "Для жилья",
        desc: "Здесь вы найдете информацию о продуктах для отопления жилых помещений, частных и многоквартирных домов",
        icon:<FontAwesomeIcon icon={faAngleRight}/>
    },    {
        img: "menu4.jpg",
        title: "Для жилья",
        desc: "Здесь вы найдете информацию о продуктах для отопления жилых помещений, частных и многоквартирных домов",
        icon:<FontAwesomeIcon icon={faAngleRight}/>
    },


]

const Card = () => {
  return(
      <CardWrapper>
          <Fade bottom>
          <div className="row ">
              {data.map(v=> <div key={v.title} className={"col-md-6 col-lg-4 col-xl-3 cardLink overflow-hidden mb-5"}>
              <div className={"text-white rounded-3 overflow-hidden d-flex justify-content-center"} style={{position:"relative", height: "350px"}}>
                            <img className={"w-100 h-100 rounded-3"} style={{objectFit:"cover", position: "absolute" ,top:"0", left:"0"} } src={v.img} alt=""/>
                    <div className={"card_content position-absolute d-flex justify-content-center align-items-center flex-column text-center w-100 h-100 p-3"}>
                        <h4 className={"fw-bold"}>{v.icon} {v.title}</h4>
                        <p>{v.desc}</p>
                    </div>
                </div>
            </div>  ) }
        </div>
          </Fade>
      </CardWrapper>
  )
}
export default Card;