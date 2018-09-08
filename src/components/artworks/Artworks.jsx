import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import artworks from '../../images/artworks/artworksList';
import styled from 'styled-components';
import { Typography } from '@material-ui/core';

const GridImage = styled.img`
  width: 100%;
  padding-bottom: 5px;
`;

const styles = theme => ({
  root: {
    flexGrow: 1,
    padding: '20px 40px'
  },
  paper: {
    padding: theme.spacing.unit * 2,
    textAlign: 'center',
    color: theme.palette.text.secondary
  }
});

const Artworks = props => {
  const { classes } = props;

  return (
    <div className={classes.root}>
      <Grid container spacing={24}>
        {artworks.map(art => {
          return (
            <Grid item key={art.title} xs={12} sm={art.size}>
              <Paper className={classes.paper}>
                <GridImage src={art.image} alt={art.title} />
                <Typography align="left">{art.title}</Typography>
                <Typography align="right">${art.price}</Typography>
              </Paper>
            </Grid>
          );
        })}
      </Grid>
    </div>
  );
};

Artworks.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(Artworks);
