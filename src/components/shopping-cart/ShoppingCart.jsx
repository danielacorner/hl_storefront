import React, { Component } from 'react';
import styled from 'styled-components';
import { Button, withStyles } from '@material-ui/core';
import { Link } from 'react-router-dom';

const Container = styled.div`
  width: 95%;
  height: 95%;
  margin: auto;
  background: white;
`;
export default class ShoppingCart extends Component {
  render() {
    return (
      <Container>
        shoppiiiing
        <Button onClick={this.props.onUpdateCart}>Update Cart</Button>
        <Button onClick={this.props.onEmptyCart}>Empty Cart</Button>
        <Button component={Link} to="/checkout">
          Proceed to Checkout -->
        </Button>
      </Container>
    );
  }
}
