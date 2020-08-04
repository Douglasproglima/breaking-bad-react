import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

import api from '../../services/api';
import Container from '../../components/Container';
import { Loading, Owner, IssuesList } from './style';

export default class Personagem extends Component {
  state = {
    character: {},
    loading: true,
  };

  const { data } = await api.get(`/characters/${newCharacter}`);

  const info = {
    name: data[0].name,
    nickName: data[0].nickname,
    avatar: data[0].img,
    birthday: data[0].birthday,
  };

  this.setState({
    character: character.data[0],
    loading: false,
  });
}
