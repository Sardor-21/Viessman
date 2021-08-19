import Container from "../Containers/Container";
import HomeWrapper from "../Wrappers/HomeWrapper";
import Link from "next/link";
import React from 'react';
import Fade from 'react-reveal/Fade';
import Card from "../Componets/Cards";
import Title from "../Componets/Title";
import data from "../Data/home";
import LinkCard from "../Componets/LinkCard";
export default function Home() {
  return (
    <Container>
      <HomeWrapper>
        <div className={"home"}>
          <Fade left>
            <div className={"homeCard"}>
              <h1 className={"h2"}>Фирма Viessmann - ваш партнер во всех областях</h1>
              <p>Компания Viessmann Group является одним из ведущих в мире производителей систем отопления/охлаждения и промышленных установок.</p>
              <button className={"btn btn-danger"}><Link href={"/about"}><a className={"h5 text-white"}>О нас</a></Link></button>
            </div>
          </Fade>
        </div>
        <div className={"homeCard"}>
          <Card />
        </div>
        <div className={"homeDesc"}>
          <Title>
            Фирма Viessmann - ваш партнер во всех областях
          </Title>
          <p className="mt-5">
            Компания Viessmann Group является одним из ведущих в мире производителей систем
            отопления/охлаждения и промышленных установок. Фирма Viessmann, выпуская полный
            комплект оборудования, предлагает индивидуальные решения и эффективные системы
            в диапазоне мощности от 1,5 до 120 000 кВт для любых областей применения и всех
            энергоносителей.
          </p>
          <div className="row">
            {data.map(v => <div key={v.title} className="col-md-6 col-lg-4 p-3 mt-5">
              <div>
                <h5 className="fw-bold">{v.title}</h5>
                <p>{v.desc}</p>
                <hr style={{
                  maxWidth: "520px",
                  height: "1px",
                  margin: "0 auto",
                  marginTop: "20px",
                  backgroundColor: "rgb(0, 5, 43)",
                  opacity: "0.5"
                }} />
              </div>
            </div>)}
          </div>
        </div>
        <LinkCard />
      </HomeWrapper>
    </Container>
  );
};
