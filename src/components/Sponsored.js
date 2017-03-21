import React from 'react';
import {Thumbnail, Image} from 'react-bootstrap';

const Sponsored = () => {
    return (
        <div>
        <Thumbnail>
        <h3>Sponsored By...</h3>
        <Image src="http://raon-tech.com/images/header/m_logo.gif" />
        </Thumbnail>
        </div>
    );
};

export default Sponsored;