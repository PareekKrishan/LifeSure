import { Box, Card, CardContent, Typography } from "@mui/material"
import FacebookIcon from '@mui/icons-material/Facebook';
import XIcon from '@mui/icons-material/X';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import InstagramIcon from '@mui/icons-material/Instagram';

const cardData = [
    { imgSrc: 'img/team-1.jpg' },
    { imgSrc: 'img/team-2.jpg' },
    { imgSrc: 'img/team-3.jpg' },
    { imgSrc: 'img/team-4.jpg' },
]


const iconBoxStyle = {
    height: '35px',
    width: '35px',
    bgcolor: '#094991',
    mb: '8px',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: '50%',
    padding: '10px',
    boxSizing: 'border-box',
    transition: 'background-color 0.3s ease',

    '&:hover': {
        bgcolor: '#16243d',
    }
};


const OurTeam = () => {
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


                    <Box textAlign={'center'} maxWidth={'800px'} mx={'auto'} pb={'48px'}>


                        <Typography
                            variant='h5'
                            color='primary'
                            mb={'8px'}
                            fontWeight={500}
                        >
                            Our Team
                        </Typography>

                        <Typography
                            variant='h1'
                            color='black'
                            fontWeight={700}
                            fontSize={{ xs: '32px', sm: '44px', md: '56px' }}
                            mb={'24px'}
                        >
                            Meat Our Expert Team Members
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
                        display={'grid'}
                        gap={1}
                        gridTemplateColumns={{
                            xs: '1fr',
                            sm: '1fr 1fr',
                            md: '1fr 1fr ',
                            lg: '1fr 1fr 1fr 1fr',
                            xl: '1fr 1fr 1fr 1fr',
                        }}
                        mx={'auto'}

                    >

                        {cardData.map((item, index) => (
                            <Card key={index}
                                sx={{
                                    mt: '24px',
                                    bgcolor: 'white',
                                    borderRadius: '10px',
                                    boxShadow: 'none',


                                    '&:hover': {


                                        '& .imgBox::before': {
                                            top: 0,
                                        },

                                        '& .textBox': {
                                            bgcolor: '#16243d'
                                        },

                                        '& .imgBox .image': {
                                            transform: 'scale(1.1)',
                                            transition: 'transform 0.3s ease'
                                        },

                                        '& .imgBox .mediaIconBox': {
                                            marginBottom: 0,
                                            opacity: 1,
                                        }
                                    }
                                }}
                            >

                                <CardContent>


                                    <Box className='imgBox'
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
                                                bgcolor: '#ffffff40',
                                                borderRadius: '10px 10px 0px 0px',
                                                zIndex: 1,
                                                transition: 'top 0.5s ease'


                                            },

                                        }}
                                    >
                                        <img className="image"
                                            src={item.imgSrc}
                                            style={{
                                                width: "100%",
                                                height: "100%",
                                                objectFit: "contain",
                                                objectPosition: "center",
                                            }}
                                        />


                                        {/*Media-Icon-Box */}

                                        <Box className='mediaIconBox'
                                            sx={{
                                                position: 'absolute',
                                                bottom: '20px',
                                                right: '20px',
                                                transition: '0.8s',
                                                marginBottom: '-100%',
                                                opacity: 0,
                                                zIndex: 11
                                            }}
                                        >
                                            <Box sx={iconBoxStyle}>  <XIcon sx={{ color: 'white' }} /></Box>


                                            <Box sx={iconBoxStyle}><InstagramIcon sx={{ color: 'white' }} /></Box>


                                            <Box sx={iconBoxStyle}><FacebookIcon sx={{ color: 'white' }} /></Box>


                                            <Box sx={iconBoxStyle}><LinkedInIcon sx={{ color: 'white' }} /></Box>
                                        </Box>


                                    </Box>


                                    <Box className='textBox'
                                        sx={{
                                            padding: '24px',
                                            bgcolor: '#015fc9',
                                            borderBottomLeftRadius: '10px',
                                            borderBottomRightRadius: '10px',

                                        }}
                                    >

                                        <Typography variant="h6" color="white">David james</Typography>
                                        <Typography variant="body1" color="white">Profession</Typography>
                                    </Box>


                                </CardContent>

                            </Card>



                        ))}


                    </Box>



                </Box>



            </Box>
        </>
    )
}

export default OurTeam