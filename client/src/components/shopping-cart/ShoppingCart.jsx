import React, { Component } from 'react';
import styled from 'styled-components';
import { Button /* withStyles */ } from '@material-ui/core';
import { Link } from 'react-router-dom';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import ArrowForward from '@material-ui/icons/ArrowForward';
import Divider from '@material-ui/core/Divider';
import { NavLink } from 'react-router-dom';

const Container = styled.div`
  width: 95%;
  height: 95%;
  margin: 5% auto;
  background: white;
`;
const CartContents = styled.div`
  padding: 40px 40px 0 40px;
`;
const ItemPreview = styled.div`
  width: 100%;
  display: grid;
  grid-template-columns: 30% auto;
  grid-gap: 30px;
  img {
    width: 100%;
  }
`;
const ItemInfo = styled.div`
  position: relative;
  display: grid;
  grid-template-rows: auto 50% auto;
`;
const CartActionsRow = styled.div`
  padding: 10px 40px 40px 40px;
  width: 100%;
  display: grid;
  grid-template-columns: auto auto;
  grid-gap: 20px;
  justify-content: flex-end;
  button,
  a {
    box-shadow: none;
    text-transform: none;
    font-style: bold;
  }
`;
const CartInfoRow = styled.div`
  padding: 20px 40px;
  width: 100%;
  display: grid;
  grid-template-rows: auto auto auto;
  grid-gap: 20px;
`;
export default class ShoppingCart extends Component {
  render() {
    return (
      <Container>
        <CartContents>
          <Typography
            variant="display1"
            style={{
              fontSize: '24px',
              fontWeight: 'bold',
              paddingBottom: '24px',
              color: '#333'
            }}
          >
            Cart
          </Typography>
          {this.props.contents.length === 0 && (
            <Typography align="center" variant="display1">
              Your shopping cart is empty :(
            </Typography>
          )}
          <Grid
            container
            direction="column"
            style={{ display: 'block' }}
            spacing={24}
            // justify="center"
            // alignItems="center"
          >
            {this.props.contents.map(art => {
              return (
                <Grid key={JSON.stringify(art)} item>
                  <ItemPreview>
                    <img src={art.image} alt={art.title} />

                    <ItemInfo>
                      <Typography
                        variant="display2"
                        style={{
                          position: 'relative',
                          fontFamily: "'Crimson Text', serif",
                          fontStyle: 'italic',
                          color: '#333',
                          fontSize: '28px'
                        }}
                      >
                        {art.title}
                        <Button
                          style={{
                            textTransform: 'none',
                            position: 'absolute',
                            fontSize: '1rem',
                            right: '0',
                            color: '#039be5'
                          }}
                          onClick={() => this.props.onRemoveItem(art)}
                        >
                          Remove
                        </Button>
                      </Typography>

                      <div>
                        <Typography variant="subheading">Hyeran Lee</Typography>
                        <Typography variant="subheading">Canada</Typography>
                      </div>

                      <Typography
                        variant="subheading"
                        style={{ margin: '2em 0.5em', position: 'relative' }}
                      >
                        {art.type}{' '}
                        <span style={{ position: 'absolute', right: '0' }}>
                          {art.price + '.00'}
                        </span>
                        <Typography
                          style={{ fontSize: '0.75em', marginTop: '0.25em' }}
                        >
                          This item usually ships within 11 - 14 business days*
                        </Typography>
                      </Typography>
                    </ItemInfo>
                  </ItemPreview>
                  <Divider style={{ marginTop: '40px' }} />
                </Grid>
              );
            })}
          </Grid>
        </CartContents>
        {/* <Button onClick={this.props.onUpdateCart}>Remove Item</Button> */}
        <CartInfoRow>
          <NavLink
            to={'/hl_storefront/'}
            onClick={() => this.props.onNavigate('/hl_storefront/')}
          >
            Continue Shopping
          </NavLink>
          <Divider />
          <Typography variant="subheading" style={{ position: 'relative' }}>
            Subtotal
            <span style={{ position: 'absolute', right: '0' }}>
              {'$' +
                JSON.parse(localStorage.getItem('hyeranart-cart'))
                  .map(art => {
                    return +art.price.replace(',', '').substring(1); // convert '$2,160' to 2160
                  })
                  .reduce((total, price) => {
                    return total + price;
                  }, 0)
                  .toLocaleString('en') +
                '.00' // convert 2160 to '$2,160.00'
              }
            </span>
          </Typography>
        </CartInfoRow>
        <CartActionsRow>
          <Button
            disabled={this.props.contents.length === 0}
            onClick={this.props.onEmptyCart}
            variant="outlined"
          >
            Empty Cart
          </Button>
          <Button
            component={Link}
            to="/hl_storefront/checkout"
            style={{
              backgroundColor: '#80bc31',
              color: 'white',
              fontSize: '1.3em'
            }}
            variant="contained"
          >
            <span>&nbsp;&nbsp;Checkout&nbsp;&nbsp;</span>
            <ArrowForward />
          </Button>
        </CartActionsRow>
      </Container>
    );
  }
}
