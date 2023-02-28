import React, { useState } from 'react';
import Card from 'react-bootstrap/Card';
import Container from 'react-bootstrap/Container';
import "../Components/styles/Cards.css"

const CardItem = ({id, className = '', title}) => {
    return (
            <Container id={id}>
                <div className='row d-flex justify-content-center align-items-center'>
                    <div className='col-12'>
                        <Card className={`my-5 mx-auto h-100 ${className}`} style={{ borderRadius: '1rem', border: 'none' }}>
                            <Card.Body className='p-5 w-100 d-flex flex-column font-size'>
                                <Card.Title className='text-start'><h1>{title}</h1></Card.Title>
                                <Card.Text className="text-justify mb-3">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Est pellentesque elit ullamcorper dignissim cras tincidunt. Accumsan sit amet nulla facilisi. Sit amet mauris commodo quis imperdiet massa. Imperdiet massa tincidunt nunc pulvinar sapien et. Pharetra diam sit amet nisl suscipit adipiscing bibendum est. Lacus luctus accumsan tortor posuere ac ut consequat semper. Vel pretium lectus quam id leo in vitae. Et netus et malesuada fames. Mi proin sed libero enim sed faucibus. Dictumst quisque sagittis purus sit amet volutpat consequat mauris nunc. Pulvinar elementum integer enim neque volutpat ac tincidunt vitae semper. Dui id ornare arcu odio ut sem. Orci ac auctor augue mauris augue neque.</Card.Text>
                            </Card.Body>
                        </Card>
                    </div>
                </div>
            </Container>
    )
}

export default CardItem;