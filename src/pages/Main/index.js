import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { DiAtom } from 'react-icons/di';
import { FaPlus, FaSpinner } from 'react-icons/fa';
import api from '../../services/api';
import Container from '../../components/Container';
import { Form, SumitButton, List, Owner, IssuesList } from './styles';

// import CardCharacter from '../Character/index';

export default class Main extends Component {
  state = {
    newCharacter: '',
    characteries: [],
    loading: false,
  };

  componentDidMount() {
    const characteries = localStorage.getItem('Personagens');
    if (characteries)
      return this.setState({ characteries: JSON.parse(characteries) });
  }

  componentDidUpdate(prevProps, prevState) {
    if (prevState.characteries !== this.state.characteries)
      localStorage.setItem(
        'Personagens',
        JSON.stringify(this.state.characteries)
      );
  }

  handleInputChange = (e) => {
    this.setState({ newCharacter: e.target.value });
  };

  handleSubmit = async (e) => {
    e.preventDefault();

    this.setState({ loading: true });
    const { newCharacter, characteries } = this.state;
    /*
        const { data } = await api.get(
      `/characters?name=${encodeURIComponent(newCharacter)}`
    );
    */
    const { data } = await api.get(`/characters/${newCharacter}`);

    const info = {
      name: data[0].name,
      nickName: data[0].nickname,
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
            placeholder="Pesquisar Personagem"
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

        <List>
          <IssuesList>
            {characteries.map((character) => (
              <li key={characteries.name}>
                <span>{character.name}</span>
                <Link
                  to={`/characters?name=${encodeURIComponent(character.name)}`}
                >
                  Detalhes
                </Link>
              </li>
            ))}
          </IssuesList>
        </List>
      </Container>
    );
  }
}
