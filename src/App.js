
import './App.css';

import CardS from './Components/Project/CardS';
import Popular from './Components/Project/Popular';
import Film from './Components/Project/proggeto';
import { Container, Row, Col } from 'react-bootstrap';
import Navvb from './Components/Mbd/Navvb';
import Foot from './Components/Mbd/Foot';
import Carou from './Components/Project/Carou';
import PopularFilm from './Components/Project/CarouselFilm';
import PopularTv from './Components/Project/CarouselTv';
import Question from './img/iconss';
import Questions from './img/iconss';
import Populare from './Components/Project/Preferito';
import CarouselProva from './Components/prove/prova';
import Cerca from './Components/Project/Ricerca';
import Login from './Components/auth/login';
import Logout from './Components/auth/logout';
import Top10 from './Components/Project/Top10';
import Scrollable from './Components/prove/scrollable';





function App() {

  return (
    <>
      <Cerca />
      <Container>


        <Populare />
        <CarouselProva />
        <Top10 />



        <Row>


        </Row>
        <Row>
          <Col className="text-center">
            <Question />
            <PopularFilm />

          </Col>
          <Col className="text-center">
            <Questions />
            <PopularTv />
          </Col>

        </Row>
        <Row>


        </Row>
      </Container>
      <Foot />

    </>
  );
}

export default App;
