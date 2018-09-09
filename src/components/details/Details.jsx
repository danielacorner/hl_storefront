import React from 'react';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import artworks from '../../images/hl_artworks';
import styled from 'styled-components'

const Container = styled.div`
padding: 0;
width: 90%;
margin: 50px auto;
div {
  padding: 8px;
  position: relative;
  img {
    width: 100%;
  }
  h1 {
    padding: 16px;
    margin: 0;
    font-size: 4.5vw;
    font-family:
  }
}
`
const GridContainer = styled.div`
display: grid;
grid-template-columns: 100px auto;
grid-template-rows: auto auto;
`
const LeftSide = styled.div`
display: inline;
img {
  width: 100%;
}
`
const RightSide = styled.div``


const Details = ({ match }) => {
  const thisArt = artworks.filter(art => art.title === match.params.title)[0];
  window.scrollTo(0,0);

  // if not fixed, fix nav
  if(!Array.from(document.body.classList).includes('fixed-nav')) {
    setTimeout(() => {document.body.classList.add('fixed-nav');
    document.body.style.paddingTop = document.querySelector('#navbar').offsetHeight + 'px';},0)
  }

  return (
    <Container>
      <Paper>
        <GridContainer>
        <div className="spacer"/>
        <h1>{match.params.title}</h1>
        <LeftSide>
        {/* todo: gather details images */}
          {[thisArt, thisArt, thisArt, thisArt, thisArt].map((art, i) => <img key={i} src={art.image} alt={art.image}/>)}
        </LeftSide>
        <RightSide>
        <img src={thisArt.image} alt={match.params.title} />
        <Typography variant="subheading" align="left">
          {thisArt.title}
        </Typography>
        <Typography variant="caption" align="left">
          {thisArt.typeDimensions}
        </Typography>
        <Typography align="right">{thisArt.price}</Typography>
        </RightSide>
        </GridContainer>
      </Paper>
    </Container>
  );
};

export default Details;
