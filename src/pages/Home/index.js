import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Actions } from '../../store/ducks/character';
import CardCharacter from '../../components/Character';
import Pagination from '../../components/pagination';
import './style.css';
import { Container, Row, Col } from 'react-grid-system';

const Home = () => {
  const characters = useSelector((state) => state.character.data);
  const dispatch = useDispatch();

  const handleFetch = () => dispatch(Actions.requestListCharacter(0));

  const onDidMount = () => {
    handleFetch();
  };
  useEffect(() => {
    onDidMount();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <Container>
      <Row>
        <Col>
          <h1 className="titleHome">PERSONAGENS</h1>
        </Col>
      </Row>
      <Row>
        <>
          {characters &&
            characters.length &&
            characters.map((item, index) => (
              <Col xs={12} sm={6} md={6} lg={3} key={index}>
                <CardCharacter key={index} item={item} className="cardItem" />
              </Col>
            ))}
        </>
      </Row>
      <Row className="containerPagination">
        <Col>
          <Pagination />
        </Col>
      </Row>
    </Container>
  );
};

export default Home;
