import React from 'react';
import './Tours.css';
import '../Navbar.css';
import { Card, Icon, Image } from 'semantic-ui-react';


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
            <span className='date'>Mombasa</span>
          </Card.Meta>
          <Card.Description>
          With breathtaking views elegant daccor and a fully equipped inventory of the latest conveniences, Hotel EnglishPoint & Spa's Suites are designed to provide the ideal space for business or pleasure. The ultimate serene accommodation.
          </Card.Description>
        </Card.Content>
      </Card>

      <Card>
        <Image src='/images/Masaimara.jpg' wrapped ui={false} />
        <Card.Content>
          <Card.Header>Masai Mara Park</Card.Header>
          <Card.Meta>
            <span className='date'>Mombasa</span>
          </Card.Meta>
          <Card.Description>
          With breathtaking views elegant daccor and a fully equipped inventory of the latest conveniences, Hotel EnglishPoint & Spa's Suites are designed to provide the ideal space for business or pleasure. The ultimate serene accommodation.
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
          With breathtaking views elegant daccor and a fully equipped inventory of the latest conveniences, Hotel EnglishPoint & Spa's Suites are designed to provide the ideal space for business or pleasure. The ultimate serene accommodation.
          </Card.Description>
        </Card.Content>
      </Card>
      <Card>
        <Image src='/images/fishing-g561d8cfd7_1280 (1).jpg' wrapped ui={false} />
        <Card.Content>
          <Card.Header>Lake Victoria</Card.Header>
          <Card.Meta>
            <span className='date'>Mombasa</span>
          </Card.Meta>
          <Card.Description>
          With breathtaking views elegant daccor and a fully equipped inventory of the latest conveniences, Hotel EnglishPoint & Spa's Suites are designed to provide the ideal space for business or pleasure. The ultimate serene accommodation.
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
          With breathtaking views elegant daccor and a fully equipped inventory of the latest conveniences, Hotel EnglishPoint & Spa's Suites are designed to provide the ideal space for business or pleasure. The ultimate serene accommodation.
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
          With breathtaking views elegant daccor and a fully equipped inventory of the latest conveniences, Hotel EnglishPoint & Spa's Suites are designed to provide the ideal space for business or pleasure. The ultimate serene accommodation.
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
          With breathtaking views elegant daccor and a fully equipped inventory of the latest conveniences, Hotel EnglishPoint & Spa's Suites are designed to provide the ideal space for business or pleasure. The ultimate serene accommodation.
          </Card.Description>
        </Card.Content>
      </Card>

      
    </div>
  </div>
    
  )
}

export default Tours;