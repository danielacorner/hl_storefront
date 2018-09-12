import React, { Component } from 'react';
import styled from 'styled-components';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import { NavLink } from 'react-router-dom';
import { withStyles } from '@material-ui/core/styles';
import collections from '../../images/collections/collections';

const Container = styled.div`
  width: 95%;
  max-width: 1124px;
  margin: auto;
  padding: 40px;
  background: white;
  h1 {
    margin: 1em 0;
  }
  h2 {
    margin: 0.5em 0 0 0;
  }
`;

const styles = {
  gridImg: {
    transition: 'all 0.3s',
    transform: 'scale(0.98)',
    '&:hover': {
      transform: 'translateY(-2px) scale(1)',
      boxShadow: '0px 7px 19px -3px rgba(0,0,0,0.75)',
      '& + h2': {
        textDecoration: 'underline'
      }
    }
  }
};

class Collections extends Component {
  render() {
    const { classes } = this.props;
    return (
      <Container>
        <Typography variant="display2" style={{ marginTop: '1.8em' }}>
          Collections
        </Typography>
        <Grid container spacing={32}>
          {collections.map(col => {
            const colImage = require(`../../images/collections/${
              col.title
            }/tn.jpg`);
            return (
              <Grid item key={JSON.stringify(col)} xs={12} sm={6} md={6} lg={4}>
                <NavLink to={`/hl_storefront/collections/${col.title}`}>
                  <img
                    src={colImage}
                    alt={col.title}
                    style={{ width: '100%' }}
                    className={classes.gridImg}
                  />
                  <Typography
                    align="center"
                    variant="title"
                    style={{ fontWeight: 'bold' }}
                  >
                    {col.title}
                  </Typography>
                </NavLink>
              </Grid>
            );
          })}
        </Grid>
        <br />
      </Container>
    );
  }
}

export default withStyles(styles)(Collections);
