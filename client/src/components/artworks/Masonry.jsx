import * as React from 'react';
import Masonry from 'react-masonry-component';
import { withStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import { NavLink } from 'react-router-dom';

// https://masonry.desandro.com/options.html
const masonryOptions = {
  // transitionDuration: 0,
  transitionDuration: '0.4s',
  fitWidth: true
  // percentPosition: true
  // itemSelector: '.grid-item'
};

const styles = theme => ({
  root: {
    flexGrow: 1,
    padding: '20px',
    justifyItems: 'center'
  },
  paper: {
    position: 'relative',
    padding: theme.spacing.unit * 2,
    textAlign: 'center',
    color: theme.palette.text.secondary,
    transform: 'scale(0.98)',
    transition: 'transform 0.3s, box-shadow 0.3s',
    '& img': {
      transition: 'all 0.3s'
    },
    '&:hover': {
      cursor: 'pointer',
      transform: 'scale(1)',
      boxShadow:
        '1px 2px 5px 0px rgba(0, 0, 0, 0.2), 1px 3px 2px 0px rgba(0, 0, 0, 0.14), 1px 4px 1px -2px rgba(0, 0, 0, 0.12)',
      '& img': {
        boxShadow: '0px 7px 19px -3px rgba(0,0,0,0.75)'
      }
    }
  },
  gridImage: {
    width: '100%',
    paddingBottom: '5px'
  },
  myGallery: {
    margin: 'auto'
  }
});

const imagesLoadedOptions = { background: '.my-bg-image-el' };

class Gallery extends React.Component {
  render() {
    const { classes } = this.props;
    const childElements = this.props.elements.map(element => {
      return (
        <li
          key={JSON.stringify(element)}
          className={classes.root + ' grid-item'}
        >
          <Paper className={classes.paper}>
            <NavLink to={'/hl_storefront/works/' + element.title}>
              <img src={element.image} alt={element.title} />
              <Typography variant="subheading" align="left">
                {element.title}
              </Typography>
              <Typography variant="caption" align="left">
                {element.typeDimensions}
              </Typography>
              <Typography align="right">{element.price}</Typography>
            </NavLink>
          </Paper>
        </li>
      );
    });

    return (
      <Masonry
        className={classes.myGallery} // default ''
        elementType={'ul'} // default 'div'
        style={{ paddingTop: '15vw' }}
        options={masonryOptions} // default {}
        disableImagesLoaded={false} // default false
        updateOnEachImageLoad={false} // default false and works only if disableImagesLoaded is false
        imagesLoadedOptions={imagesLoadedOptions} // default {}
      >
        {childElements}
      </Masonry>
    );
  }
}

export default withStyles(styles)(Gallery);
