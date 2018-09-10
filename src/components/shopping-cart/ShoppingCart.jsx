import React, { Component } from 'react';
import styled from 'styled-components';
import { Button /* withStyles */ } from '@material-ui/core';
import { Link } from 'react-router-dom';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import ArrowForward from '@material-ui/icons/ArrowForward';
import Divider from '@material-ui/core/Divider';

const Container = styled.div`
  width: 95%;
  height: 95%;
  margin: 5% auto;
  background: white;
`;
const CartContents = styled.div`
  padding: 40px;
`;
const ItemPreview = styled.div`
  width: 100%;
  display: grid;
  grid-template-columns: 30% auto 100px;
  grid-gap: 30px;
  img {
    width: 100%;
  }
`;
const ItemInfo = styled.div``;
const ItemActions = styled.div``;
const CartActionsRow = styled.div`
  padding: 10px 40px;
  width: 100%;
  display: grid;
  grid-template-columns: auto auto;
  grid-gap: 20px;
  justify-content: flex-end;
  a {
    box-shadow: none;
  }
`;
export default class ShoppingCart extends Component {
  render() {
    return (
      <Container>
        <CartContents>
          <Typography
            variant="display1"
            style={{ fontWeight: 'bold', paddingBottom: '40px', color: '#333' }}
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
                          fontFamily: "'Crimson Text', serif",
                          fontStyle: 'italic',
                          color: '#333'
                        }}
                      >
                        {art.title}
                      </Typography>
                      <Typography variant="subheading">Hyeran Lee</Typography>
                      <Typography variant="subheading">Canada</Typography>
                      <Typography
                        variant="subheading"
                        style={{ margin: '2em 0.5em' }}
                      >
                        {art.type}
                        <Typography
                          style={{ fontSize: '0.75em', marginTop: '0.25em' }}
                        >
                          This item usually ships within 11 - 14 business days*
                        </Typography>
                      </Typography>
                    </ItemInfo>

                    <ItemActions>
                      <Button onClick={() => this.props.onRemoveItem(art)}>
                        Remove
                      </Button>
                    </ItemActions>
                  </ItemPreview>
                  <Divider style={{ marginTop: '40px' }} />
                </Grid>
              );
            })}
          </Grid>
        </CartContents>
        {/* <Button onClick={this.props.onUpdateCart}>Remove Item</Button> */}
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
            to="/checkout"
            color="secondary"
            variant="contained"
          >
            <span>&nbsp;&nbsp;Proceed to Checkout&nbsp;&nbsp;</span>
            <ArrowForward />
          </Button>
        </CartActionsRow>
      </Container>
    );
  }
}
