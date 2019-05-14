import React, { Component } from 'react';
import api from '../../services/api';

import './styles.css';
import logo from '../../assets/logo.svg';

export default class Main extends Component {

  state = {
    newBox: '',
  };

  handleSubmit = async e => {
    e.preventDefault();
    
    let {
      newBox
    } = this.state

    const response = await api.post('boxes', {
      'title': newBox
    })

    this.props.history.push(`/box/${response.data._id}`)

  }

  handleInputChange = (e) => {
    this.setState({newBox: e.target.value});

  }

  render() {
    return (
      <div id="main-container">
        <form onSubmit={this.handleSubmit}>
          <img src={logo} alt="Rocketseat"/>
          <input 
            placeholder="Criar um box"
            value={this.state.newBox}
            onChange={this.handleInputChange}
          />
          <button type="submit">Criar</button>
        </form>
      </div>
    );
  }
}
