import React from 'react';
import {Grid, Image} from 'react-bootstrap';
import '../containers/customcard.scss';
/* Ugly Card UI..:/ */
const Sponsored = () => {
    return (
        <div className='card'>
        <Grid>
        <h3>Sponsored By...</h3>
        <Image src="http://raon-tech.com/images/header/m_logo.gif" />
        </Grid>
        </div>
    );
};

export default Sponsored;