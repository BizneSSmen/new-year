import React from "react";
import ReactFullpage from "@fullpage/react-fullpage";
import "./App.css";
import Snowfall from "./components/Snowfall";
import { placesPhotos } from "./assets/places";
import { Col, Container, Row } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import { ImageSection } from "./components/ImageSection/ImageSection";
import { buergerPhotos } from "./assets/burgers";
import { pets } from "./assets/pets";

const fullpageSettings = {
  credits: { enabled: false },
  scrollingSpeed: 1500,
  anchors: ["new-year", "photos", "burgers", "pets"],
  touchSensitivity: 15,
  css3: true,
  fitToSection: true,
  scrollOverflow: true,
};

const App: React.FC = () => {
  return (
    <>
      <Snowfall />
      <ReactFullpage
        {...fullpageSettings}
        render={() => (
          <ReactFullpage.Wrapper>
            <div className="section new-year d-flex align-items-center">
              <Container>
                <Row>
                  <Col>
                    <h1 className="fade-in-text text-center">С Новым годом!</h1>
                  </Col>
                </Row>
              </Container>
            </div>
            <div className="section photos d-flex align-items-center">
              <ImageSection
                images={placesPhotos}
                titleText={"Спасибо тебе за этот год!"}
                mainText={
                  <p>
                    В этом году мы с Тобой посетили много классных и весёлых
                    мест, которые ты скрасила своей улыбкой, красотой и
                    нежностью.
                    <br />
                    Желаю, чтобы грядущий год был ещё более ярким и незабываем!
                  </p>
                }
              />
            </div>
            <div className="section burgers d-flex align-items-center">
              <ImageSection
                images={buergerPhotos}
                titleText={"В этом году мы съели..."}
                mainText={
                  <p className="text-wrap">
                    325 сочных бергеров...
                    <br />
                    10 кг майонезика
                    <br />
                    1000 толстых булочек...
                    <br />и скинули 100 кг и смыть не забыли
                  </p>
                }
                reverse={true}
              />
            </div>
            <div className="section pets d-flex align-items-center">
              <ImageSection
                images={pets}
                titleText={"Питомцы"}
                mainText={
                  <p className="text-wrap">
                    В этом году наши пушистые друзья подарили нам море радости и
                    тепла. Каждый хвостик, каждый мурлык и каждый забавный
                    прыжок делали наши дни ярче.
                    <br /> Но сурикаты - каки, и это не изменить😔
                  </p>
                }
              />
            </div>
          </ReactFullpage.Wrapper>
        )}
      />
    </>
  );
};

export default App;
