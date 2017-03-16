import React from 'react';
import { Card, Image } from 'semantic-ui-react';

const SponsoredBy = () => {
  return (
    <div>
    <Card fluid centered>
      <Card.Content header='Sponsored' />
      <Image
        spaced rounded bordered
        src='http://www.raon-tech.com/images/header/m_logo.gif' 
        as='a'
        href='http://www.raon-tech.com'
        target='_blank' />
    </Card>
    </div>
  );
};

export default SponsoredBy;