import { Box, Button, Card, CardContent, Typography } from '@mui/material'
import GroupsIcon from '@mui/icons-material/Groups';
import MedicationIcon from '@mui/icons-material/Medication';
import DirectionsCarIcon from '@mui/icons-material/DirectionsCar';
import CottageIcon from '@mui/icons-material/Cottage';




const cardData = [
    { serviceName: 'Life Insurance', img: '/img/blog-3.png', svgIcon: < GroupsIcon fontSize='large' /> },

    { serviceName: 'Health Insurance', img: '/img/blog-4.png', svgIcon: <MedicationIcon fontSize='large' /> },

    { serviceName: 'Car Insurance', img: '/img/blog-1.png', svgIcon: <DirectionsCarIcon fontSize='large' /> },

    { serviceName: 'Home Insurance', img: '/img/blog-2.png', svgIcon: <CottageIcon fontSize='large' /> },
]

const OurServices = () => {
    return (
        <>


            <Box
                sx={{
                    padding: '48px 12px',
                    bgcolor: 'white',
                    mx: 'auto',


                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    flexDirection: 'column',
                }}>


                <Box
                    sx={{
                        padding: '48px 12px',

                    }}
                >


                    <Box data-aos='zoom-in-down' data-aos-delay='200' textAlign={'center'} maxWidth={'800px'} mx={'auto'} pb={'48px'}>


                        <Typography
                            variant='h5'
                            color='primary'
                            mb={'8px'}
                            fontWeight={500}
                        >
                            Our Services
                        </Typography>

                        <Typography
                            variant='h1'
                            color='black'
                            fontWeight={700}
                            fontSize={{ xs: '32px', sm: '44px', md: '56px' }}
                            mb={'24px'}
                        >
                            We Provide Best Services
                        </Typography>

                        <Typography
                            variant='body1'
                            color='#787878'
                        >
                            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Tenetur adipisci facilis cupiditate recusandae aperiam temporibus corporis itaque quis facere, numquam, ad culpa deserunt sint dolorem autem obcaecati, ipsam mollitia hic.
                        </Typography>


                    </Box>





                    {/*Card-Section*/}


                    <Box
                        gap={2}
                        display={'grid'}
                        gridTemplateColumns={{ xs: '1fr', sm: '1fr 1fr', md: '1fr 1fr', lg: '1fr 1fr 1fr 1fr', xl: '1fr 1fr 1fr 1fr' }}

                        mx={'auto'}
                    >
                        {cardData.map((item, index) => (

                            <Card data-aos="flip-left" data-aos-easing="ease-out-cubic" data-aos-duration="2000"
                                key={index}
                                sx={{
                                    mt: '24px',

                                    bgcolor: 'white',
                                    borderRadius: '10px',
                                    boxShadow: 'none',
                                    transition: '0.3s ease-in-out',

                                    "&:hover": {
                                        '& .imgBox::before': {
                                            top: 0
                                        },

                                        '& .svgBox': {
                                            bgcolor: '#015fc9',
                                            color: 'white',
                                        },

                                        '& .textBox::before': {
                                            bottom: '0'
                                        },

                                        '& .servicesName': {
                                            color: 'white'
                                        },

                                        '& .peragraph': {
                                            color: 'white'
                                        },

                                        '& .button': {
                                            bgcolor: 'white',
                                            color: '#015fc9'
                                        }
                                    }
                                }}
                            >

                                <CardContent>

                                    <Box className="imgBox"
                                        sx={{
                                            bgcolor: "white",
                                            display: 'flex',
                                            alignItems: 'center',
                                            justifyContent: 'center',
                                            position: 'relative',
                                            overflow: 'hidden',
                                            borderTopLeftRadius: '10px',
                                            borderTopRightRadius: '10px',

                                            '&::before': {
                                                content: '""',
                                                position: 'absolute',
                                                top: '-100%',
                                                left: 0,
                                                width: '100%',
                                                height: '100%',
                                                bgcolor: '#015fc933',
                                                borderRadius: '10px 10px 0px 0px',
                                                zIndex: 1,
                                                transition: 'top 0.5s ease'


                                            },

                                        }}
                                    >
                                        <img
                                            src={item.img}
                                            style={{
                                                width: "100%",
                                                height: "100%",
                                                objectFit: "contain",
                                                objectPosition: "center",
                                            }}
                                        />

                                        <Box className="svgBox"
                                            sx={{
                                                position: 'absolute',
                                                bottom: 0,
                                                right: '25px',
                                                width: '70px',
                                                bgcolor: '#f2f5f9',
                                                color: '#015fc9',
                                                borderTopLeftRadius: '10px',
                                                borderTopRightRadius: '10px',
                                                padding: '12px',
                                                display: 'flex',
                                                alignItems: 'center',
                                                justifyContent: 'center',
                                                boxSizing: 'border-box',
                                                zIndex: '11'
                                            }}

                                        >
                                            {item.svgIcon}


                                        </Box>



                                    </Box>





                                    <Box className='textBox'
                                        sx={{
                                            padding: '24px',
                                            bgcolor: '#f2f5f9',
                                            borderBottomLeftRadius: '10px',
                                            borderBottomRightRadius: '10px',
                                            position: 'relative',
                                            overflow: 'hidden',

                                            '&::before': {
                                                content: '""',
                                                position: 'absolute',
                                                bottom: '-100%',
                                                left: 0,
                                                width: '100%',
                                                height: '100%',
                                                bgcolor: '#015fc9',
                                                borderRadius: '0px 0px 10px 10px',
                                                zIndex: 0,
                                                transition: 'bottom 0.5s ease',
                                            },



                                            '& .servicesName, & .peragraph, & .button': {
                                                position: 'relative',
                                                zIndex: 1,
                                            }
                                        }}
                                    >
                                        <Typography className='servicesName' variant='h6' fontWeight={500} mb='24px'
                                            sx={{

                                                cursor: 'pointer',
                                                '&:hover': {
                                                    color: '#16243d !important'
                                                }
                                            }}
                                        >

                                            {item.serviceName}

                                        </Typography>


                                        <Typography className='peragraph' variant='body1' color='#787878' mb={'24px'}>
                                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Ea hic laborum odit pariatur...
                                        </Typography>

                                        <Button className='button'
                                            sx={{
                                                padding: '8px 24px',
                                                color: 'white',
                                                bgcolor: '#015fc9',
                                                borderRadius: '20px',

                                                '&:hover': {
                                                    color: 'white !important',
                                                    bgcolor: '#16243d !important'
                                                }
                                            }}
                                        >
                                            Read More
                                        </Button>


                                    </Box>


                                </CardContent>


                            </Card>
                        ))}



                    </Box>



                </Box>

                <Button
                    sx={{
                        padding: '12px 48px',
                        bgcolor: '#015fc9',
                        color: 'white',
                        borderRadius: '50px'
                    }}
                >
                    More Services
                </Button>

            </Box >

        </>
    )
}

export default OurServices