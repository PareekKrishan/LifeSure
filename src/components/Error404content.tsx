import { Box, Button, Typography } from "@mui/material"
import MoodBadIcon from '@mui/icons-material/MoodBad';
import { NavLink } from "react-router-dom";



const Error404Content = () => {
    return (
        <>


            <Box data-aos='fade-up' data-aos-delay='300'
                sx={{
                    width: "100%",
                    bgcolor: "#f2f5f9",
                    padding: "48px 12px",
                    mx: "auto",
                }}
            >



                <Box
                    sx={{
                        padding: '48px 12px',
                        textAlign: 'center',
                        maxWidth: '600px',
                        mx: 'auto',

                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        flexDirection: 'column',

                    }}
                >
                    <MoodBadIcon sx={{ color: '#015fc9', fontSize: '100px', mb: "24px" }} />


                    <Typography
                        variant='h1'
                        color='black'
                        fontWeight={700}
                        fontSize={{ xs: '32px', sm: '44px', md: '56px' }}
                        mb={'24px'}
                    >
                        404
                    </Typography>


                    <Typography
                        variant='h4'
                        color='black'
                        mb={'24px'}
                        fontWeight={500}
                    >
                        Page Not Found
                    </Typography>


                    <Typography
                        variant='body1'
                        color='#787878'
                        mb={'24px'}
                    >

                        We're sorry, the page you have looked for does not exist in our website! Maybe go to our home page or try to use a search?

                    </Typography>


                    <NavLink
                        to={"/"}
                    >
                        <Button variant="contained">Go Back To Home</Button>

                    </NavLink>





                </Box>


            </Box>


        </>
    )
}


export default Error404Content