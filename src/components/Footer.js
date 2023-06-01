import React from 'react';
import './Footer.scss';

import {
    MDBFooter,
    MDBContainer,
  MDBCol,
  MDBRow,
  MDBBtn

  } from 'mdb-react-ui-kit';
const Footer = () => {
  return (<div className='footer'>
  <MDBFooter className='text-center text-white' >
  
<div className='text-center p-3' style={{ backgroundColor: '#0b8' }}>
© 2023 Copyright:
<a className='text-white' href='#'>
Mastek Deep Blue
</a>
</div>

</MDBFooter>
</div>
  );
}

export default Footer;