import React, { Component } from 'react';
import styled from 'styled-components';
import Typography from '@material-ui/core/Typography';
import img1 from '../../images/contact/1.jpg';

const Container = styled.div`
  width: 90%;
  max-width: 624px;
  margin: auto;
  display: grid;
  height: 100vh;
  align-content: center;
`;
const Card = styled.div`
  padding: 40px;
  background: white;
  height: auto;
  h1 {
    margin: 0 0 0.4em 0;
  }
  h2 {
    margin: 0.5em 0 0 0;
  }
  strong {
    font-weight: bold;
  }
`;
export default class Contact extends Component {
  render() {
    return (
      <Container>
        <Card>
          <Typography variant="display2">Contact</Typography>
          <img
            src={img1}
            alt="banner"
            style={{ width: '100%', marginBottom: '1em' }}
          />
          <br />
          <Typography variant="body1">
            For response regarding any of the art work, or if you wish to
            inquire about having a painting commissioned, please contact me.
            Thank you for visiting!
          </Typography>
          <br />
          <Typography variant="body1">
            <strong>e-mail</strong>: hyeranart@gmail.com
          </Typography>
        </Card>
      </Container>
    );
  }
}
