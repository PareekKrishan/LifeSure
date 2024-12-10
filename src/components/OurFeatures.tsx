import { Box, Button, Card, CardContent, Grid, Typography } from '@mui/material'
import HandshakeIcon from '@mui/icons-material/Handshake';
import AttachMoneyIcon from '@mui/icons-material/AttachMoney';
import TrackChangesIcon from '@mui/icons-material/TrackChanges';
import HeadphonesIcon from '@mui/icons-material/Headphones';
import React from 'react'

const cardData = [
    { feature: 'Trusted Company', logo: <HandshakeIcon sx={{ fontSize: 70 }} /> },
    { feature: 'Anitime Mony Back', logo: <AttachMoneyIcon sx={{ fontSize: 70 }} /> },
    { feature: 'Flexible Plans', logo: <TrackChangesIcon sx={{ fontSize: 70 }} /> },
    { feature: '24/7 Fast Support', logo: <HeadphonesIcon sx={{ fontSize: 70 }} /> },
]

const OurFeatures = () => {
    return (
        <>

            <Box
                sx={{
                    padding: '48px 12px',
                    bgcolor: '#f2f5f9',
                    mx: 'auto'
                }}>


                <Box
                    sx={{
                        padding: '48px 12px',

                    }}
                >


                    <Box textAlign={'center'} maxWidth={'800px'} mx={'auto'} pb={'48px'}>


                        <Typography
                            variant='h5'
                            color='primary'
                            mb={'8px'}
                            fontWeight={500}
                        >
                            Our Features
                        </Typography>

                        <Typography
                            variant='h1'
                            color='black'
                            fontWeight={700}
                            fontSize={{ xs: '32px', sm: '44px', md: '56px' }}
                            mb={'24px'}
                        >
                            Insurance Provide you a Better Future
                        </Typography>

                        <Typography
                            variant='body1'
                            color='#787878'
                        >
                            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Tenetur adipisci facilis cupiditate recusandae aperiam temporibus corporis itaque quis facere, numquam, ad culpa deserunt sint dolorem autem obcaecati, ipsam mollitia hic.
                        </Typography>


                    </Box>







                    <Box
                        gap={2}
                        display={'grid'}
                        gridTemplateColumns={{ xs: '1fr', sm: '1fr 1fr', md: '1fr 1fr', lg: '1fr 1fr 1fr 1fr', xl: '1fr 1fr 1fr 1fr' }}
                        mx={'auto'}

                    >

                        {cardData.map((item, index) => (

                            <Card key={index}
                                sx={{
                                    mt: '24px',
                                    padding: '0px 12px',
                                    bgcolor: 'white',
                                    borderRadius: '10px',
                                    boxShadow: 'none',


                                    '&:hover': {
                                        bgcolor: '#015fc9',
                                        color: 'white',

                                        '& .logoBox::before': {
                                            top: 0,

                                        },

                                        '&:hover .logoBox > svg': {
                                            color: '#ffffff',
                                        },

                                        '& .button': {
                                            color: '#015fc9',
                                            bgcolor: 'white'
                                        },


                                        '& .peragraph': {
                                            color: 'white'
                                        }
                                    },



                                }}
                            >





                                <CardContent
                                    sx={{
                                        padding: '0px 24px 24px 24px',

                                    }}
                                >

                                    <Box className="logoBox"

                                        sx={{
                                            width: '100px',
                                            padding: '24px',
                                            marginBottom: '24px',
                                            bgcolor: '#f2f5f9',
                                            color: '#015fc9',

                                            display: 'flex',
                                            alignItems: 'center',
                                            justifyContent: 'center',

                                            borderRadius: '0px 0px 10px 10px',

                                            position: 'relative',

                                            overflow: 'hidden',



                                            '&::before': {
                                                content: '""',
                                                position: 'absolute',
                                                top: '-100%',
                                                left: 0,
                                                width: '100%',
                                                height: '100%',
                                                bgcolor: '#16243d',
                                                borderRadius: '0px 0px 10px 10px',
                                                zIndex: 1,
                                                transition: 'top 0.5s ease'
                                            },



                                            '& > svg': {
                                                position: 'relative',
                                                zIndex: 2,
                                                transition: 'color 0.5s ease',
                                            },


                                        }}
                                    >

                                        {item.logo}

                                    </Box>



                                    <Typography className='feature' variant='h6' fontWeight={500} mb='24px' >

                                        {item.feature}

                                    </Typography>




                                    <Typography className='peragraph' variant='body1' color='#787878' mb={'24px'}>
                                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Ea hic laborum odit pariatur...
                                    </Typography>

                                    <Button className='button'
                                        sx={{
                                            padding: '8px 24px',
                                            color: 'white',
                                            bgcolor: '#015fc9',
                                            borderRadius: '20px'
                                        }}
                                    >
                                        Learn More
                                    </Button>





                                </CardContent>






                            </Card>

                        ))}








                    </Box>





                </Box>



            </Box>

        </>
    )
}

export default OurFeatures