import { Box, Button, Typography } from "@mui/material"
import { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";


const HeaderBG2 = (props: any) => {

    const [scrollPosition, setScrollPosition] = useState(0);

    useEffect(() => {
        const handleScroll = () => {
            setScrollPosition(window.scrollY);
        };

        window.addEventListener('scroll', handleScroll);
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);



    return (
        <>

            <Box data-aos="fade-down"
                sx={{

                    position: 'relative',
                    overflow: 'hidden',
                    background: 'linear-gradient(rgba(1, 95, 201, 0.9), rgba(0, 0, 0, 0.2)), url(../img/bg-breadcrumb.jpg)',
                    backgroundPosition: 'center center',
                    backgroundRepeat: 'no-repeat',
                    backgroundSize: 'cover',
                    padding: '60px 0',
                    transition: '0.5s',

                    marginTop: {
                        md: '120px',
                        sm: scrollPosition > 40 ? '64px' : '104px',
                        xs: '56px'
                    }


                }}
            >


                <Box data-aos='fade-down' data-aos-delay='400'
                    sx={{
                        padding: '48px 12px',
                        textAlign: 'center',
                        maxWidth: '900px',
                        mx: 'auto'
                    }}
                >


                    <Typography
                        variant='h1'
                        color='white'
                        fontWeight={700}
                        fontSize={{ xs: '32px', sm: '44px', md: '50px', lg: '56px' }}
                        mb={'24px'}>
                        {props.pageName}
                    </Typography>

                    <Box
                        sx={{
                            display: "flex",
                            alignItems: "center",
                            justifyContent: 'center'

                        }}
                    >

                        <NavLink
                            to={'/'}
                        >

                            <Button
                                sx={{ color: 'white', '&:hover': { color: '#015fc9' } }}
                            >
                                Home

                            </Button>


                        </NavLink>

                        <Typography color="#787878">/</Typography>
                        <Button sx={{ color: 'white' }}>pages</Button>
                        <Typography color="#787878">/</Typography>
                        <Typography color="#015fc9" padding={'6px 8px'}>{props.pageLink}</Typography>


                    </Box>


                </Box>


            </Box>

        </>
    )
}

export default HeaderBG2