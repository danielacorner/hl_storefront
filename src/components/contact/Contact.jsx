import React, { Component } from 'react';
import styled from 'styled-components';
import Typography from '@material-ui/core/Typography';
import img1 from "../../images/contact/1.jpg";

const Container = styled.div`
  width: 90%;
  max-width: 624px;
  margin: auto;
  padding: 40px;
  background: white;
  h1 {
    margin: 1em 0;
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
    return (<Container>
        <Typography variant="display2" style={{marginTop: '1.8em'}}>
          Contact
        </Typography>
        <img src={img1} alt="banner" style={{width: '100%', marginBottom: '1em'}}/>
        <br/>
        <Typography variant="body1">
          For response regarding any of the art work, or if you wish to inquire about having a painting commissioned, please contact me. Thank you for visiting!
        </Typography> 
        <br/>
        <Typography variant="body1" >
          <strong>e-mail</strong>: hyeranart@gmail.com
        </Typography> 
        </Container>)
  }
}
