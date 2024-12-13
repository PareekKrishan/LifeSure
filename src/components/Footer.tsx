import { Box, Button, IconButton, InputAdornment, InputBase, Typography, } from "@mui/material"
import FacebookIcon from '@mui/icons-material/Facebook';
import XIcon from '@mui/icons-material/X';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import InstagramIcon from '@mui/icons-material/Instagram';
import KeyboardArrowRightIcon from '@mui/icons-material/KeyboardArrowRight';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import EmailIcon from '@mui/icons-material/Email';
import CallIcon from '@mui/icons-material/Call';
import TtyIcon from '@mui/icons-material/Tty'
import InsertLinkIcon from '@mui/icons-material/InsertLink';
import CopyrightIcon from '@mui/icons-material/Copyright';



const instaFooterImg = [
    { imgSrc: 'img/instagram-footer-1.jpg' },
    { imgSrc: 'img/instagram-footer-2.jpg' },
    { imgSrc: 'img/instagram-footer-3.jpg' },
    { imgSrc: 'img/instagram-footer-4.jpg' },
    { imgSrc: 'img/instagram-footer-5.jpg' },
    { imgSrc: 'img/instagram-footer-6.jpg' },
];


const links = [
    { name: 'About Us' },
    { name: 'Features' },
    { name: 'Services' },
    { name: 'contact' },
    { name: 'blogs' },
    { name: "faq's" },

]

const contact = [
    { name: 'Address', description: '123 Street New York.USA', icon: <LocationOnIcon fontSize="large" /> },
    { name: 'Mail Us', description: 'info@example.com', icon: <EmailIcon fontSize="large" /> },
    { name: 'Telephone', description: '(+012) 3456 7890', icon: <CallIcon fontSize="large" /> },
]


const iconBoxStyle = {
    height: '42px',
    width: '42px',
    bgcolor: 'white',
    mb: '8px',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: '50%',
    padding: '20px',
    boxSizing: 'border-box',
    transition: 'background-color 0.3s ease',
    color: '#015fc9',
    cursor: 'pointer',

    '&:hover': {
        bgcolor: '#015fc9',
        color: 'white'
    }
};



const Footer = () => {


    return (
        <>
            {/* Outer-container*/}
            <Box sx={{ padding: '48px 24px', bgcolor: '#16243d', }}>


                {/* inner-main-container */}
                <Box
                    sx={{
                        width: "100%",

                        display: "grid",
                        gridTemplateColumns: { lg: "9fr 4fr", xs: "1fr" },
                        gap: 2,

                    }}
                >
                    {/* logo-links-instagram-contact-container */}

                    <Box>
                        {/*logo-links-instagram-container */}
                        <Box

                            sx={{
                                display: 'grid',
                                gridTemplateColumns: {
                                    xs: '1fr',
                                    sm: '1fr 1fr',
                                    lg: '5fr 3fr 4fr',
                                }

                            }}
                        >

                            {/*logo-container */}
                            <Box padding={'0 24px'} mt={'24px'}>

                                <Box display={'flex'} gap={2} alignItems={'center'} mb={'8px'}>

                                    <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" fill="white" className="bi bi-slack" viewBox="0 0 16 16">
                                        <path d="M3.362 10.11c0 .926-.756 1.681-1.681 1.681S0 11.036 0 10.111.756 8.43 1.68 8.43h1.682zm.846 0c0-.924.756-1.68 1.681-1.68s1.681.756 1.681 1.68v4.21c0 .924-.756 1.68-1.68 1.68a1.685 1.685 0 0 1-1.682-1.68zM5.89 3.362c-.926 0-1.682-.756-1.682-1.681S4.964 0 5.89 0s1.68.756 1.68 1.68v1.682zm0 .846c.924 0 1.68.756 1.68 1.681S6.814 7.57 5.89 7.57H1.68C.757 7.57 0 6.814 0 5.89c0-.926.756-1.682 1.68-1.682zm6.749 1.682c0-.926.755-1.682 1.68-1.682S16 4.964 16 5.889s-.756 1.681-1.68 1.681h-1.681zm-.848 0c0 .924-.755 1.68-1.68 1.68A1.685 1.685 0 0 1 8.43 5.89V1.68C8.43.757 9.186 0 10.11 0c.926 0 1.681.756 1.681 1.68zm-1.681 6.748c.926 0 1.682.756 1.682 1.681S11.036 16 10.11 16s-1.681-.756-1.681-1.68v-1.682h1.68zm0-.847c-.924 0-1.68-.755-1.68-1.68s.756-1.681 1.68-1.681h4.21c.924 0 1.68.756 1.68 1.68 0 .926-.756 1.681-1.68 1.681z" />
                                    </svg>
                                    <Typography variant="h4" color="white">LifeSure</Typography>

                                </Box>

                                <Typography variant="body1" color="white" lineHeight={'35px'} mb={'24px'} width={'100%'}>
                                    Dolor amet sit justo amet elitr clita ipsum elitr est.Lorem ipsum dolor sit amet, consectetur adipiscing...
                                </Typography>

                                <Box display={'flex'} alignItems={'center'} gap={2}>

                                    <Box sx={iconBoxStyle}>  <XIcon /></Box>


                                    <Box sx={iconBoxStyle}><InstagramIcon /></Box>


                                    <Box sx={iconBoxStyle}><FacebookIcon /></Box>


                                    <Box sx={iconBoxStyle}><LinkedInIcon /></Box>

                                </Box>

                            </Box>

                            {/*links-container */}
                            <Box padding={'0 24px'} mt={'24px'}>


                                <Typography variant="h5" color="white" mb={'24px'}>Useful Links</Typography>



                                {links.map((item, index) => (

                                    <Box
                                        display={"flex"}
                                        flexDirection={'column'}
                                        alignItems={'flex-start'}
                                        width={'100%'}>


                                        <Button key={index}

                                            startIcon={<KeyboardArrowRightIcon />}
                                            sx={{ color: "#787878", '&:hover': { color: '#015fc9' } }}

                                        >

                                            {item.name}

                                        </Button>


                                    </Box>

                                ))}



                            </Box>



                            {/*Instagram-Photo-container */}

                            <Box
                                sx={{
                                    padding: '0px 24px',
                                    mt: '24px',
                                }}
                            >


                                <Typography variant="h5" color="white" mb={'24px'}>Instagram</Typography>

                                <Box
                                    sx={{

                                        display: 'grid',
                                        gridTemplateColumns: 'repeat(3, 1fr)',
                                        gap: 2

                                    }}
                                >


                                    {instaFooterImg.map((item, index) => (

                                        <Box key={index}

                                            sx={{
                                                borderRadius: '10px',
                                                position: 'relative',
                                                overflow: 'hidden',

                                                '&:hover': {
                                                    '&::before': {
                                                        opacity: 1,
                                                    },

                                                    '& .image': {
                                                        transform: 'scale(1.2)',
                                                        transition: 'transform 0.5s ease'
                                                    },

                                                    '& .link-button': {
                                                        opacity: 1,
                                                    }
                                                },

                                                '&::before': {
                                                    content: '""',
                                                    position: 'absolute',
                                                    height: '100%',
                                                    width: '100%',
                                                    bgcolor: '#090909bf',
                                                    zIndex: 1,
                                                    opacity: 0,
                                                    transition: 'opacity 0.3s ease-in-out'

                                                },
                                            }}

                                        >


                                            <img className="image"
                                                src={item.imgSrc} alt="insta-Img"
                                                style={{
                                                    borderRadius: '10px',
                                                    height: '100%',
                                                    width: '100%',
                                                    objectFit: 'contain',

                                                }}
                                            />


                                            <IconButton className="link-button"
                                                sx={{
                                                    position: 'absolute',
                                                    top: '50%',
                                                    left: '50%',
                                                    transform: 'translate(-50%, -50%)',
                                                    zIndex: 2,
                                                    opacity: 0,
                                                    transition: 'opacity 0.2s ease'
                                                }}
                                            >
                                                <InsertLinkIcon sx={{ color: "white" }} />

                                            </IconButton>




                                        </Box>

                                    ))}

                                </Box>

                            </Box>


                        </Box>


                        {/* contact-container */}
                        <Box
                            sx={{
                                width: '100%',
                                display: 'grid',
                                gap: 2,
                                padding: "48px 24px 0px 24px",

                                gridTemplateColumns: {
                                    xs: '1fr',
                                    sm: '1fr 1fr',
                                    lg: '1fr 1fr 1fr',
                                }
                            }}
                        >
                            {contact.map((item, index) => (

                                <Box key={index}
                                    sx={{
                                        display: 'flex',
                                        alignItems: 'flex-start',
                                        justifyContent: 'flex-start'

                                    }}
                                >
                                    <Box
                                        sx={{
                                            width: '66px',
                                            height: '66px',
                                            display: 'flex',
                                            justifyContent: 'center',
                                            alignItems: 'center',
                                            bgcolor: '#015fc9',
                                            color: 'white',
                                            borderRadius: '10px',
                                            mr: '24px'
                                        }}
                                    >
                                        {item.icon}
                                    </Box>


                                    <Box>
                                        <Typography variant="h5" mb="8px" color='white'>{item.name}</Typography>
                                        <Typography variant="body2" color="#787878">{item.description}</Typography>
                                    </Box>

                                </Box>

                            ))}

                        </Box>

                    </Box>


                    {/*Newsletter-container */}
                    <Box
                        sx={{
                            padding: '0px 24px',
                            mt: "24px"
                        }}
                    >
                        <Typography variant="h5" color="white" mb='24px'>Newsletter</Typography>

                        <Typography variant="body1" color="white" lineHeight='35px' mb='16px'>
                            Dolor amet sit justo amet elitr clita ipsum elitr est.Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                        </Typography>



                        <InputBase

                            placeholder="Enter your email"
                            sx={{
                                bgcolor: 'white',
                                padding: '16px 24px',
                                borderRadius: '50px',
                                width: '100%',
                                marginBottom: '24px'

                            }}

                            endAdornment={
                                <InputAdornment position="end">

                                    <Button variant="contained"
                                        sx={{
                                            bgcolor: '#015fc9',
                                            color: 'white',
                                            borderRadius: '50px',

                                            '&:hover': {
                                                bgcolor: '#16243d'
                                            }
                                        }}
                                    >
                                        sign up

                                    </Button>

                                </InputAdornment>
                            }
                        />


                        <Box
                            sx={{
                                display: 'flex',
                                alignItems: 'center',
                                gap: 4,
                            }}
                        >


                            <IconButton sx={{
                                height: '50px',
                                width: '50px',

                                borderRadius: '50%',
                                backgroundColor: 'white',

                                '&:hover': {
                                    bgcolor: '#015fc9',

                                    "& .MuiSvgIcon-root": {
                                        color: 'white'
                                    }

                                },

                                transition: '0.5s'

                            }}
                            >
                                <TtyIcon sx={{ color: '#015fc9', fontSize: '30px' }} />


                            </IconButton>

                            <Box>
                                <Typography color='#787878' variant="body1" marginBottom={'4px'}>Call to Our Experts</Typography>
                                <Typography color='white' variant="body1" >Free: + 0123 4567 890</Typography>
                            </Box>

                        </Box>


                    </Box>

                </Box>



            </Box >




            {/* copy rights */}
            <Box
                sx={{
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    padding: '24px 12px',
                    borderTop: "1px solid #ffffff14",
                    bgcolor: '#16243d'
                }}
            >


                <CopyrightIcon sx={{ fontSize: { sm: '14px', xs: "10px" }, color: 'white' }} />

                <Typography
                    sx={{
                        color: 'white',
                        textAlign: "center",
                        fontSize: { sm: '14px', xs: "10px" }
                    }} >

                    LifeSure, All right reserved. Designed by PareekKrishan

                </Typography>


            </Box>
        </>
    )
}

export default Footer