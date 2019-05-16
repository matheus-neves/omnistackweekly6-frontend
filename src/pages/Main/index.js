import React, { Component } from 'react';
import api from '../../services/api';

import logo from '../../assets/logo.svg';

import { Container, SubmitButton } from './styles';

export default class Main extends Component {
  state = {
    newBox: '',
  };

  handleSubmit = async (e) => {
    e.preventDefault();

    const {
      newBox,
    } = this.state;

    const response = await api.post('boxes', {
      title: newBox,
    });

    this.props.history.push(`/box/${response.data._id}`);
  }

  handleInputChange = (e) => {
    this.setState({ newBox: e.target.value });
  }

  render() {
    const { newBox } = this.state;

    return (
      <Container>
        <form onSubmit={this.handleSubmit}>
          <img src={logo} alt="Rocketseat" />
          <input
            placeholder="Criar um box"
            value={newBox}
            onChange={this.handleInputChange}
          />
          <SubmitButton type="submit">Criar</SubmitButton>
        </form>
      </Container>
    );
  }
}
