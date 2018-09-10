import React, { Component } from 'react';
import styled from 'styled-components';
import Typography from '@material-ui/core/Typography';
import img1 from "../../images/about/1.jpg";
import img2 from "../../images/about/2.jpg";
import img3 from "../../images/about/3.jpg";
import img4 from "../../images/about/4.jpg";
import img5 from "../../images/about/5.jpg";
import img6 from "../../images/about/6.jpg";
import img7 from "../../images/about/7.jpg";
import img8 from "../../images/about/8.jpg";
import img9 from "../../images/about/9.jpg";
import img10 from "../../images/about/10.jpg";
import img11 from "../../images/about/11.jpg";
import img12 from "../../images/about/12.jpg";
import img13 from "../../images/about/13.jpg";
import img14 from "../../images/about/14.jpg";

const images = [
  {src: img1, caption: 'Neilson Park Creative Centre Impact 2016 Annual Juried Art Exhibition'},
  {src: img2, caption: 'Neilson Park Creative Centre Impact 2016 Annual Juried Art Exhibition'},
  {src: img3, caption: 'Neilson Park Creative Centre Impact 2016 Annual Juried Art Exhibition'},
  {src: img4, caption: 'Neilson Park Creative Centre Impact 2016 Annual Juried Art Exhibition'},
  {src: img5, caption: 'Neilson Park Creative Centre Impact 2016 Annual Juried Art Exhibition'},
  {src: img6, caption: 'Neilson Park Creative Centre Impact 2016 Annual Juried Art Exhibition'},
  {src: img7, caption: 'Neilson Park Creative Centre Impact 2016 Annual Juried Art Exhibition'},
  {src: img8, caption: 'Neilson Park Creative Centre Impact 2016 Annual Juried Art Exhibition'},
  {src: img9, caption: 'Neilson Park Creative Centre Impact 2016 Annual Juried Art Exhibition'},
  {src: img10, caption: 'Neilson Park Creative Centre Impact 2016 Annual Juried Art Exhibition'},
  {src: img11, caption: 'Neilson Park Creative Centre Impact 2016 Annual Juried Art Exhibition'},
  {src: img12, caption: 'Neilson Park Creative Centre Impact 2016 Annual Juried Art Exhibition'},
  {src: img13, caption: 'Neilson Park Creative Centre Impact 2016 Annual Juried Art Exhibition'},
  {src: img14, caption: 'Neilson Park Creative Centre Impact 2016 Annual Juried Art Exhibition'},
]

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
export default class About extends Component {
  render() {
    return <Container>
        <Typography variant="display2" style={{marginTop: '1em'}}>About Hyeran</Typography>
        <Typography variant="headline">Biography</Typography>
        <Typography variant="body1">
          In her art practice, Hyeran Lee has experimented with various
          styles of work. Her recent body of work is strongly influenced by
          Expressionism and Eastern philosophy. Resulting are emotional
          portrayal of the Yin and Yang. Her works express everyday life and
          nature, in abstract and representational forms.{' '}
        </Typography>
        <br />
        <Typography variant="body1">
          She completed her BFA in Graphic Design in Korea, as well as
          studying at Sheridan College and other art educators. In the past,
          she worked as a graphic designer, designing children’s books and
          magazines for over a decade. Presently, she resides in Oakville
          and strives to fine tune her artistic work. Her work has been
          showcased in various juried shows all over the GTA, such as Visual
          Arts Mississauga, the Ontario Society of Artist’s Emerging Artist
          Exhibition, and Art Works Oakville’s juried shows since 2012. She
          has also been featured on Saatchi Art, world’s largest
          international online art gallery, on the Large Paintings page and
          the New This Week page.
        </Typography>
        <Typography variant="headline">Education </Typography>
        <Typography variant="title">2014 </Typography>
        <Typography variant="body1">
          Sheridan College Certificate in Fine Arts with High Honours,
          Oakville, Ontario{' '}
        </Typography>
        <Typography variant="title">1989 </Typography>
        <Typography variant="body1">
          Duksung Women’s University, Bachelor Degree of Fine Arts, Seoul,
          Korea{' '}
        </Typography>
        <Typography variant="headline">On Display</Typography>
        <Typography variant="title">2017</Typography>
        <Typography variant="body1">
          Society of Canada Artist, 2017 Open International Juried Online
          Exhibition
        </Typography>
        <Typography variant="body1">
          The Special Merit Category - Abstracts Art Exhibition on Light
          Space & Time Online Art Gallery.
        </Typography>
        <Typography variant="body1">
          https://www.lightspacetime.com/abstracts-2017-art-exhibiti…/
        </Typography>
        <Typography variant="body1">
          Artworks Oakville 18th Juried Show, 2017{' '}
        </Typography>
        <Typography variant="title">2016</Typography>
        <Typography variant="body1">
          Neilson Park Creative Centre Impact 2016 Annual Juried Art
          Exhibition
        </Typography>
        <Typography variant="body1">
          Artworks Oakville 17th Juried Show
        </Typography>
        <Typography variant="body1">
          VAM 38th Annual Juried Show of Fine Arts , 2016, Art Gallery of
          Mississauga (AGM)
        </Typography>
        <Typography variant="title">2015 </Typography>
        <Typography variant="body1">
          Colour and Form Society 63rd Open Juried Exhibition
        </Typography>
        <Typography variant="body1">
          Etobicoke Art Group - 51st Annual Juried Exhibtion Open Juried
          Exhibition
        </Typography>
        <Typography variant="body1">
          Oakville Art Society's 50th annual Art in the Park , Bronte
          Heritage Waterfront Park, Oakville, Ontario
        </Typography>
        <Typography variant="body1">
          Artworks Oakville 16th Juried Show
        </Typography>
        <Typography variant="body1">
          Joshua Creek Heritage Art Centre Juried Exhibition - “Artists of
          Halton Peel
        </Typography>
        <Typography variant="title">2014 </Typography>
        <Typography variant="body1">
          Ontario Society of Artists Emerging Artists Exhibition, “Soaring
          Ambitions” 2014, Joseph D. Carrier Gallery, Toronto, Ontario
        </Typography>
        <Typography variant="body1">
          Colour and Form Society 62nd Open Juried Exhibition
        </Typography>
        <Typography variant="body1">
          Neilson Park Creative Centre Impact 2014: 22nd Annual Juried Art
          Exhibition
        </Typography>
        <Typography variant="body1">
          21th Annual Through The Eyes Of The Artist Juried Show, Lakeshore
          Arts, Assembly Hall, Toronto
        </Typography>
        <Typography variant="body1">
          Artworks Oakville 15th Juried Show
        </Typography>
        <Typography variant="body1">
          Beaux-Arts Brampton 7th Annual Open Juried Show
        </Typography>
        <Typography variant="title">2013 </Typography>
        <Typography variant="body1">
          Neilson Park Creative Centre Impact 2013: 21th Annual Juried Art
          Exhibition{' '}
        </Typography>
        <Typography variant="body1">
          Artworks Oakville 14th Juried Show
        </Typography>
        <Typography variant="body1">
          Beaux-Arts Brampton 6th Annual Open Juried Show
        </Typography>
        <Typography variant="title">2012</Typography>
        <Typography variant="body1">
          Artworks Oakville 13th Juried Show, 2014
        </Typography>
        <Typography variant="headline">Featured</Typography>

        <Typography variant="body1">
          Society of Canada Artist, 2017 Open International Juried Online
          Exhibition
        </Typography>
        <Typography variant="body1">
          <strong>Seventh Correlation</strong>
        </Typography>
        <Typography variant="body1">
          <a href="http://shop.societyofcanadianartists.com/" target="_blank" rel="noopener noreferrer" rel="noopener noreferrer">
            http://shop.societyofcanadianartists.com/
          </a>
        </Typography>
        <Typography variant="body1">
          March 15, 2017 - June 15, 2017
        </Typography>

        <br />
        <Typography variant="body1">
          <strong>Sixth Correlation III</strong>
          has been featured in Abstract Expressionism Collection on Saatchi Art.
        </Typography>
        <Typography variant="body1">
          <a href="https://www.saatchiart.com/art-collection/Painting-Drawing-Photography/Abstract-Expressionism/685448/181500/view" target="_blank" rel="noopener noreferrer">
            https://www.saatchiart.com/art-collection/Painting-Drawing-Photography/Abstract-Expressionism/685448/181500/view
          </a>
        </Typography>

        <br />
        <Typography variant="body1">
          The Special Merit Category - Abstracts Art Exhibition on Light
          Space & Time Online Art Gallery.
        </Typography>
        <Typography variant="body1">
          <strong>Sixth Correlation II </strong>
        </Typography>
        <Typography variant="body1">
          <a href="https://www.lightspacetime.art/abstracts-2017-art-exhibition-special-merit-category/" target="_blank" rel="noopener noreferrer">
            https://www.lightspacetime.com/abstracts-2017-art-exhibiti…/
          </a>
        </Typography>

        <br />
        <Typography variant="body1">
          <strong>
            Tenth Correlation, acrylic on canvas, 30"x30"x1.5", 2017
          </strong>
        </Typography>
        <Typography variant="body1">
          featured on the New This Week 2-13-2017 Collection on Saatchi
          Art's homepage. You can see the collection here:
          https://www.saatchiart.com/art-collection/Painting-Photography-Collage/New-This-Week-2-13-2017/153961/173307/view
        </Typography>

        <br />
        <Typography variant="body1">
          <strong>
            Seventh Interaction, acrylic on canvas, 30"x30"x1.5", 2015
          </strong>
        </Typography>
        <Typography variant="body1">
          featured on the New This Week 6-29-2015 Collection on Saatchi
          Art's homepage. You can see the collection here:
          https://www.saatchiart.com/art-collection/Painting-Photography-Sculpture/New-This-Week-6-29-2015/153961/107606/view
        </Typography>

        <br />
        <Typography variant="body1">
          <strong>
            Fourth Interaction, diptych, acrylic on canvas, 48"x18"x1.5",
            2015
          </strong>
        </Typography>
        <Typography variant="body1">
          Featured on the Large Abstract Paintings for $2000 and Under
          Collection on Saatchi Art's homepage. See the collection:
          https://www.saatchiart.com/art-collection/Painting/Large-Abstract-Paintings-for-2000-and-Under/153961/107187/view
        </Typography>

        <br />

        {images.map(image => {
          return (
            <div key={JSON.stringify(image)}>
            <img style={{width: '100%'}} src={image.src} alt={image.title || ''} />
              {image.caption && <Typography variant="caption" align="center"> {image.caption} </Typography>}
              <br/>
            </div>
          )
        })}
        <Typography variant="body1">
<strong>Copyright Notice</strong> - All material on this site is protected by copyright. Material may be copied for non-commercial purposes if appropriately attributed. Otherwise copying or dissemination of this material is prohibited without prior written permission from Hyeran.        </Typography>
      </Container>;
  }
}
