import React, { Component } from 'react';
import { DiAtom } from 'react-icons/di';
import { FaPlus, FaSpinner } from 'react-icons/fa';
import api from '../../services/api';
import { Container, Form, SumitButton, List, Card } from './styles';
// import CardCharacter from '../Character/index';

export default class Main extends Component {
  state = {
    newCharacter: '',
    characteries: [],
    loading: false,
  };

  handleInputChange = (e) => {
    this.setState({ newCharacter: e.target.value });
  };

  handleSubmit = async (e) => {
    e.preventDefault();

    this.setState({ loading: true });

    const { newCharacter, characteries } = this.state;
    const { data } = await api.get(`/characters/${newCharacter}`);

    const info = {
      name: data[0].name,
      avatar: data[0].img,
      birthday: data[0].birthday,
    };

    console.log(info);

    this.setState({
      characteries: [...characteries, info],
      newCharacter: '',
      loading: false,
    });
  };

  render() {
    const { newCharacter, characteries, loading } = this.state;

    return (
      <Container>
        <h1>
          <DiAtom size={55} />
          Personagens
        </h1>

        <Form onSubmit={this.handleSubmit}>
          <input
            type="text"
            placeholder="Adicionar Personagem"
            value={newCharacter}
            onChange={this.handleInputChange}
          />
          {/* o type="submit" foi passado através do styled component */}
          <SumitButton loading={loading}>
            {loading ? (
              <FaSpinner color="#FFF" size={14} />
            ) : (
              <FaPlus color="#FFF" size={14} />
            )}
          </SumitButton>
        </Form>

        {/* <Card>
          <span className={characteries.class}>{characteries.text}</span>
          <img src={characteries.avatar} alt={characteries.name} />
          <div className="content">
            <h2>{characteries.name}</h2>
            <div className="birth">
              <span>{characteries.birthday}</span>
            </div>
            <p className="desc">{characteries.occupation.join(', ')}</p>
          </div>
        </Card> */}

        <List>
          {characteries.map((character) => (
            <li key={characteries.name}>
              <span>{character.name}</span>
              <div className="container-img" />
              <img src={character.avatar} alt={character.name} />
            </li>
          ))}
        </List>
      </Container>
    );
  }
}
