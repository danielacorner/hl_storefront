import React from 'react';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import artworks from '../../images/hl_artworks';
import styled from 'styled-components';
import { Button, withStyles } from '@material-ui/core';
import Forum from '@material-ui/icons/Forum';
import IconButton from '@material-ui/core/IconButton';

const Container = styled.div`
  padding: 0;
  width: 98%;
  max-width: 1124px;
  margin: 50px auto;
  div {
    padding: 12px;
    position: relative;
    img {
      width: 100%;
    }
    h1 {
      padding: 10px 8px 10px 8px;
      margin: 0;
      font-size: 4.5vw;
      font-family: 'Crimson Text', serif;
      font-style: italic;
    }
  }
`;
const GridContainer = styled.div`
  display: grid;
  grid-template-columns: 0 auto;
  @media only screen and (min-width: 1096px) {
    grid-template-columns: 100px auto;
  }
  grid-template-rows: auto auto;
`;
const DetailsImages = styled.div`
  display: inline;
  img {
    width: 100%;
  }
`;
const DetailsAndCTA = styled.div`
  display: grid;
  grid-template-rows: auto auto;
  @media only screen and (min-width: 960px) {
    grid-template-columns: auto 300px;
    grid-gap: 20px;
  }
`;
const DetailsPane = styled.div`
  display: grid;
  grid-template-columns: auto 330px;
  @media only screen and (min-width: 960px) {
    display: block;
  }
  background: rgba(0, 0, 0, 0.06);
`;
const DetailsInfo = styled.div`
  padding: 5px 0;
  div,
  aside {
    font: 400 1.3em 'Crimson Text', serif;
  }
`;
const CTA = styled.div`
  background: #333;
  height: 116px;
  width: calc(100% + 32px);
  :after {
    content: '';
    position: absolute;
    display: block;
    border-style: solid;
    border-color: #000 transparent transparent #000;
    border-width: 5px;
    bottom: -0.6rem;
    right: 0;
  }
  display: grid;
  grid-template-columns: auto 160px;
`;
const AddToCartGrid = styled.div`
  display: grid;
  grid-template-rows: auto auto;
  button {
    height: 43px;
    padding: 0;
  }
`;

const styles = {
  btnAddToCart: {
    '&$disabled': {
      backgroundColor: '#7986cb',
      color: 'white'
    }
  },
  disabled: {}
};

class Details extends React.Component {
  state = {
    thisArt: null,
    match: null,
    addingToCart: false,
    zeroQuantity: false
  };

  componentWillMount() {
    this.setState({
      thisArt: artworks.filter(
        art => art.title === this.props.match.params.title
      )[0],
      match: this.props.match
    });
    window.scrollTo(0, 0);

    // if not fixed, fix nav
    // todo: this should be taken care of in navbar
    if (!Array.from(document.body.classList).includes('fixed-nav')) {
      setTimeout(() => {
        document.body.classList.add('fixed-nav');
        document.body.style.paddingTop =
          document.querySelector('#navbar').offsetHeight + 'px';
      }, 0);
    }
  }
  handleAddToCart = () => {
    if (!this.alreadyInCart()) {
      this.setState({ addingToCart: true });
      this.props.onAddToCart(this.state.thisArt);
    } else {
      this.setState({ zeroQuantity: true });
    }
  };
  alreadyInCart = () => {
    const cart = JSON.parse(localStorage.getItem('cart'));
    // is the item already in your cart? (assuming all quantity = 1)
    return cart.some(item => item.title === this.state.thisArt.title);
  };

  render() {
    const { title } = this.state.match.params;
    const { thisArt } = this.state;
    const { classes } = this.props;
    return (
      <Container>
        <Paper>
          <GridContainer>
            <div className="spacer" />
            <h1>{title}</h1>

            <DetailsImages>
              {/* todo: gather details images */}
              {[thisArt, thisArt, thisArt, thisArt, thisArt].map((art, i) => (
                <img key={i} src={art.image} alt={art.image} />
              ))}
            </DetailsImages>

            <DetailsAndCTA>
              <img src={thisArt.image} alt={title} />

              <DetailsPane>
                <DetailsInfo>
                  <Typography variant="body2" align="left">
                    {thisArt.type}
                  </Typography>

                  <Typography variant="body2" align="left">
                    Size: {thisArt.dimensions}
                  </Typography>
                  <Typography variant="caption" align="left">
                    Ships in a cardboard box
                  </Typography>
                </DetailsInfo>

                <CTA>
                  <Typography
                    variant="headline"
                    style={{
                      color: 'white',
                      fontSize: '29px',
                      font: '400 2.1625em "Crimson Text",serif'
                    }}
                  >
                    {thisArt.price}{' '}
                    <span style={{ fontSize: '0.6em' }}>USD</span>
                  </Typography>
                  <AddToCartGrid style={{ padding: '12px 12px 12px 0' }}>
                    <Button
                      classes={{
                        root: classes.btnAddToCart,
                        disabled: classes.disabled
                      }}
                      variant="contained"
                      size="large"
                      style={{
                        borderRadius: '0',
                        textTransform: 'none',
                        fontWeight: 'bold',
                        fontFamily: 'Helvetica',
                        fontSize: '1.125rem'
                      }}
                      color="secondary"
                      onClick={this.handleAddToCart}
                      disabled={this.state.addingToCart}
                    >
                      {this.state.addingToCart ? 'Added!' : 'Add to Cart'}
                    </Button>
                    <IconButton
                      style={{
                        width: 'auto',
                        fontWeight: 'bold',
                        color: 'white',
                        borderRadius: '0'
                      }}
                      aria-label="Make an Offer"
                      onClick={this.toggleDrawer}
                    >
                      <Forum style={{ transform: 'scale(0.7)' }} />
                      <Typography variant="body2" style={{ color: 'white' }}>
                        Make an Offer
                      </Typography>
                    </IconButton>
                  </AddToCartGrid>
                </CTA>
                <Typography
                  variant="body2"
                  color="error"
                  align="center"
                  style={{
                    display: this.state.zeroQuantity ? 'block' : 'none',
                    marginTop: '8px',
                    fontWeight: 'bold'
                  }}
                >
                  This item is already in your cart!
                </Typography>
              </DetailsPane>
            </DetailsAndCTA>
          </GridContainer>
        </Paper>
      </Container>
    );
  }
}

export default withStyles(styles)(Details);
