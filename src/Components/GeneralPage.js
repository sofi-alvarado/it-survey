import React, { useState } from 'react';
import Card from 'react-bootstrap/Card';
import Container from 'react-bootstrap/Container';

const GeneralPage = () => {
    return (
        <>
        <Container id="general" fluid className='my-5'>
            <div className='row d-flex justify-content-center align-items-center h-200'>
                <div className='col-12'>
                    <Card className='bg-dark my-5 mx-auto' style={{ borderRadius: '1rem', border: 'none', maxWidth: '900px' }}>
                        <Card.Body className='p-5 w-100 d-flex flex-column font-size'>
                            <Card.Title className='text-white text-start'><h1>General</h1></Card.Title>
                            <p className="text-white-50 text-justify mb-3">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Est pellentesque elit ullamcorper dignissim cras tincidunt. Accumsan sit amet nulla facilisi. Sit amet mauris commodo quis imperdiet massa. Imperdiet massa tincidunt nunc pulvinar sapien et. Pharetra diam sit amet nisl suscipit adipiscing bibendum est. Lacus luctus accumsan tortor posuere ac ut consequat semper. Vel pretium lectus quam id leo in vitae. Et netus et malesuada fames. Mi proin sed libero enim sed faucibus. Dictumst quisque sagittis purus sit amet volutpat consequat mauris nunc. Pulvinar elementum integer enim neque volutpat ac tincidunt vitae semper. Dui id ornare arcu odio ut sem. Orci ac auctor augue mauris augue neque.</p>

                        </Card.Body>

                    </Card>
                </div>
            </div>
        </Container>
        </>
    )
}

export default GeneralPage;