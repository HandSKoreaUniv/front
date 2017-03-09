import React from 'react';
import { Card, Image } from 'semantic-ui-react';

const SponsoredBy = () => {
  return (
    <div>
    <Card fluid>
      <Card.Content header='Sponsored' />
      <Image
          src='http://www.raon-tech.com/images/header/m_logo.gif' 
          as='a'
          href='http://www.raon-tech.com'
          target='_blank' />
    </Card>
    </div>
  );
};

export default SponsoredBy;