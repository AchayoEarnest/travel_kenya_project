import React from 'react';
import './Tours.css';
import '../Navbar.css';
import { Card, Image } from 'semantic-ui-react';


function Tours() {
  return (

    <div>
      <h1 className = "title_text" >Amazing places to visit in Kenya</h1>
      <div className='card_container'>
      
      <Card className='card'>
        <Image src='/images/marina.jpg' wrapped ui={false} />
        <Card.Content>
          <Card.Header>English Point Marina</Card.Header>
          <Card.Meta>
            <span className='date'>Mombasa</span>
          </Card.Meta>
          <Card.Description>
          With breathtaking views elegant daccor and a fully equipped inventory of the latest conveniences, Hotel EnglishPoint & Spa's Suites are designed to provide the ideal space for business or pleasure. The ultimate serene accommodation.
          </Card.Description>
        </Card.Content>
        
      </Card>
      <Card>
        <Image src='/images/kakamega.jpg' wrapped ui={false} />
        <Card.Content>
          <Card.Header>Kakamega Forest</Card.Header>
          <Card.Meta>
            <span className='date'>Western Kenya</span>
          </Card.Meta>
          <Card.Description>
          Kakamega Forest is a tropical rainforest situated in the Kakamega and Nandi County of Kenya, northwest of the capital Nairobi, and near to the border with Uganda.It is Kenya's only tropical rainforest and the best place to chill
          </Card.Description>
        </Card.Content>
      </Card>

      <Card>
        <Image src='/images/Masaimara.jpg' wrapped ui={false} />
        <Card.Content>
          <Card.Header>Masai Mara Park</Card.Header>
          <Card.Meta>
            <span className='date'>Southern Kenya</span>
          </Card.Meta>
          <Card.Description>
          Maasai Mara National Reserve is an area of preserved savannah wilderness in southwestern Kenya, along the Tanzanian border. Its animals include lions, cheetahs, elephants, zebras and hippos.
          </Card.Description>
        </Card.Content>
        
      </Card>
       <Card>
        <Image src='/images/kit-mikayi-gfaeb872fa_1280 (2).jpg' wrapped ui={false} />
        <Card.Content>
          <Card.Header>Kit Mikayi</Card.Header>
          <Card.Meta>
            <span className='date'>Kisumu</span>
          </Card.Meta>
          <Card.Description>
          An explanation of the shape of this unique stone is that the structure represents the Luo cultural polygamous family which explains how a polygamous man should built houses for the three wives.
          </Card.Description>
        </Card.Content>
      </Card>
      <Card>
        <Image src='/images/fishing-g561d8cfd7_1280 (1).jpg' wrapped ui={false} />
        <Card.Content>
          <Card.Header>Lake Victoria</Card.Header>
          <Card.Meta>
            <span className='date'>Kisumu</span>
          </Card.Meta>
          <Card.Description>
          Lake Victoria is one of the African Great Lakes. With a surface area of approximately 59,947 km², Lake Victoria is Africa's largest lake by area, the world's largest tropical lake, and the world's second-largest fresh water lake.
          </Card.Description>
        </Card.Content>
      </Card>

      <Card>
        <Image src='/images/Diani Beach.jpg' wrapped ui={false} />
        <Card.Content>
          <Card.Header>Diani Beach</Card.Header>
          <Card.Meta>
            <span className='date'>Mombasa</span>
          </Card.Meta>
          <Card.Description>
          Diani Beach is a major beach on the Indian Ocean coast of Kenya. It is located 30 kilometres south of Mombasa, in Kwale County. It has been voted Africa's leading beach destination for the fifth time running since 2015.
          </Card.Description>
        </Card.Content>
      </Card>
      <Card>
        <Image src='/images/Hellsgate national Park.jpg' wrapped ui={false} />
        <Card.Content>
          <Card.Header>Hell's gate National Park</Card.Header>
          <Card.Meta>
            <span className='date'>Naivasha</span>
          </Card.Meta>
          <Card.Description>
          Hell's Gate National Park lies south of Lake Naivasha in Kenya, north west of Nairobi. Hell's Gate National Park is named after a narrow break in the cliffs, once a tributary of a prehistoric lake that fed early humans in the Rift Valley.
          </Card.Description>
        </Card.Content>
        </Card>
        <Card>
        <Image src='/images/Diani Beach.jpg' wrapped ui={false} />
        <Card.Content>
          <Card.Header>Diani Beach</Card.Header>
          <Card.Meta>
            <span className='date'>Mombasa</span>
          </Card.Meta>
          <Card.Description>
          Diani Beach is a major beach on the Indian Ocean coast of Kenya. It is located 30 kilometres south of Mombasa, in Kwale County. It has been voted Africa's leading beach destination for the fifth time running since 2015.
          </Card.Description>
        </Card.Content>
      </Card>

      
    </div>
  </div>
    
  )
}

export default Tours;