import { Box, Button, InputBase, Typography } from "@mui/material"
import LocationOnIcon from '@mui/icons-material/LocationOn';
import EmailIcon from '@mui/icons-material/Email';
import CallIcon from '@mui/icons-material/Call';
import GoogleIcon from '@mui/icons-material/Google';




const contact = [
    { name: 'Address', description: '123 Street New York.USA', icon: <LocationOnIcon sx={{ fontSize: "36px" }} /> },
    { name: 'Mail Us', description: 'info@example.com', icon: <EmailIcon sx={{ fontSize: "36px" }} /> },
    { name: 'Telephone', description: '(+012) 3456 7890', icon: <CallIcon sx={{ fontSize: "36px" }} /> },
    { name: 'Yoursite@ex.com', description: '(+012) 3456 7890', icon: <GoogleIcon sx={{ fontSize: "36px" }} /> },
]

const inputBaseStyle = {
    backgroundColor: "white",
    padding: '16px 12px',
    borderRadius: '10px',
    color: '#787878',
    width: '100%'
}

const ContactUs = () => {
    return (
        <>


            <Box
                sx={{
                    padding: '48px 12px',
                    bgcolor: '#f2f5f9',
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


                    <Box data-aos='zoom-in-down' data-aos-delay='500'
                        textAlign={'center'} maxWidth={'800px'} mx={'auto'} pb={'48px'}>


                        <Typography
                            variant='h5'
                            color='primary'
                            mb={'8px'}
                            fontWeight={500}
                        >
                            Contact Us
                        </Typography>

                        <Typography
                            variant='h1'
                            color='black'
                            fontWeight={700}
                            fontSize={{ xs: '32px', sm: '44px', md: '56px' }}
                            mb={'24px'}
                        >
                            If you have any comments please apply now

                        </Typography>











                    </Box>



                    <Box
                        sx={{
                            display: 'grid',
                            justifyContent: 'center',
                            alignItems: 'center',
                            gridTemplateColumns: {
                                lg: '1fr 1fr',
                                xs: '1fr'
                            }
                        }}
                    >
                        <Box data-aos="fade-left"
                            sx={{
                                display: 'flex',
                                alignItems: 'center',
                                justifyContent: 'center',
                                marginTop: '48px',
                                padding: '0px 24px'
                            }}>

                            <img src="img\contact-img.png" alt="contact-us-img"
                                style={{
                                    width: "100%",
                                    height: "100%",
                                    objectFit: "contain",
                                    objectPosition: "center",
                                }}
                            />



                        </Box>


                        <Box data-aos='fade-right'
                            sx={{
                                marginTop: '48px',
                                padding: '0px 24px'
                            }}
                        >

                            <Typography
                                variant='h5'
                                color='primary'
                                mb={'24px'}
                                fontWeight={500}
                            >
                                Send Your Message
                            </Typography>

                            <Box
                                sx={{
                                    display: 'grid',
                                    gap: 3
                                }}
                            >



                                <Box
                                    display={'grid'}
                                    gridTemplateColumns={{
                                        lg: 'repeat(2,1fr)',
                                        xs: '1fr'
                                    }}
                                    gap={3}
                                >



                                    <InputBase fullWidth sx={inputBaseStyle} placeholder="your name" />
                                    <InputBase fullWidth sx={inputBaseStyle} placeholder="your email" />

                                    <InputBase fullWidth sx={inputBaseStyle} placeholder="your phone" />
                                    <InputBase fullWidth sx={inputBaseStyle} placeholder="your project" />

                                </Box>


                                <Box
                                    display={'grid'}
                                    gridTemplateColumns={{ sx: '1fr' }}
                                    gap={3}
                                >



                                    <InputBase fullWidth sx={inputBaseStyle} placeholder="subject" />


                                    <InputBase

                                        sx={inputBaseStyle}
                                        placeholder="message"
                                        fullWidth
                                        multiline
                                        rows={4}



                                    />




                                    <Button
                                        variant="contained"
                                        fullWidth
                                        sx={{
                                            borderRadius: '10px',
                                            fontSize: '18px',
                                            backgroundColor: '#015fc9',
                                            color: '#fff',
                                            '&:hover': {
                                                backgroundColor: '#16243d',
                                            },
                                        }}
                                    >
                                        Send Message
                                    </Button>




                                </Box>



                            </Box>


                        </Box>



                    </Box>


                    <Box
                        display={'grid'}
                        gap={2}
                        gridTemplateColumns={{
                            xs: '1fr',
                            sm: '1fr 1fr',
                            md: '1fr 1fr ',
                            lg: '1fr 1fr 1fr 1fr',
                            xl: '1fr 1fr 1fr 1fr',
                        }}
                        mx={'auto'}
                        alignItems={'center'}
                        justifyContent={"center"}

                    >

                        {contact.map((item, index) => (

                            <Box key={index} mt={'24px'} padding={'0px,12px'}
                            >
                                <Box color={'#015fc9'} mb={'18px'}>
                                    {item.icon}
                                </Box>

                                <Typography variant="h5" mb="8px" color='black'>{item.name}</Typography>
                                <Typography variant="body2" color="#787878">{item.description}</Typography>



                            </Box>

                        ))}


                    </Box>


                </Box>

            </Box >


        </>
    )
}

export default ContactUs