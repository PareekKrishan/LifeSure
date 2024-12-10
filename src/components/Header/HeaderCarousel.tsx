import { Box, Button, Typography } from '@mui/material'
import PlayCircleFilledIcon from '@mui/icons-material/PlayCircleFilled';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";





const CustomPrevArrow = (props: any) => {
    const { onClick } = props;

    return (
        <Box
            onClick={onClick}
            sx={{
                position: 'absolute',
                bottom: '-50px',
                left: { xs: '30%', sm: '40%', md: '42%' },
                cursor: 'pointer',
                zIndex: 1,
                width: { xs: '40px', sm: '55px' },
                height: { xs: '40px', sm: '55px' },
                bgcolor: 'white',
                color: '#015FC9',
                borderRadius: '50%',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                fontSize: { xs: '20px', sm: '30px' },


                '&:hover': {
                    bgcolor: '#013f8c',
                    color: 'white',
                },
            }}

        >
            &#8592; {/* Left Arrow */}

        </Box>
    );
};

const CustomNextArrow = (props: any) => {

    const { onClick } = props;

    return (

        <Box
            onClick={onClick}
            sx={{
                position: 'absolute',
                bottom: '-50px',
                right: { xs: '30%', sm: '40%', md: '42%' },
                cursor: 'pointer',
                zIndex: 1,
                width: { xs: '40px', sm: '55px' },
                height: { xs: '40px', sm: '55px' },
                bgcolor: 'white',
                color: '#015FC9',
                borderRadius: '50%',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                fontSize: { xs: '20px', sm: '30px' },


                '&:hover': {
                    bgcolor: '#013f8c',
                    color: 'white',
                },
            }}
        >
            &#8594; {/* Right Arrow */}
        </Box>
    );
};















const HeaderCarousel = () => {


    const settings = {

        infinite: true,
        speed: 0,
        Swipe: false,
        Fade: true,

        slidesToShow: 1,
        slidesToScroll: 1,

        autoplay: true,
        autoplaySpeed: 3000,

        arrows: window.innerWidth > 480,

        prevArrow: <CustomPrevArrow />,
        nextArrow: <CustomNextArrow />,
    }

    return (
        <>

            <Box
                bgcolor={'#015fc9'}
                pt={'45px'}
                pb={'45px'}
                display={'flex'}
                alignItems={'center'}
                justifyContent={'center'}
                marginTop={{ md: '80px', sm: '64px', xs: '20px' }}





            >
                <Box width={'100%'}
                    mx='auto'
                    paddingBottom={'40px'}>




                    <Slider {...settings} >




                        { /* Slide 1   */}


                        <Box
                            display={'flex !important'}
                            alignItems={'center'}
                            justifyContent={'space-between'}
                            flexDirection={{ xs: "column", md: "row", }}
                            margin={0}
                            gap={{ xs: '20px', sm: '30px' }}
                            padding={{ xs: '10px 15px', sm: '20px 40px' }}
                            width='100%'
                            marginBottom='40px'


                        >


                            <Box mt={'24px'} sx={{
                                width: { xs: '100%', md: '55%' },
                                textAlign: { xs: 'center', md: 'left' },
                                paddingRight: { xs: '60px', md: '20px' },
                                paddingLeft: { xs: '20px', md: '20px' },

                            }}>

                                <Typography
                                    variant='h5'
                                    fontWeight={700}
                                    color='white'
                                    mb={'24px'}
                                    fontSize={{ xs: '18px', sm: '20px', md: '24px' }}
                                >
                                    WELCOME TO LIFESURE
                                </Typography>

                                <Typography
                                    variant='h2'
                                    color='white'
                                    mb={'24px'}
                                    fontWeight={800}
                                    fontSize={{ xs: '32px', sm: '50px', md: '70px' }}
                                    paddingRight={{ xs: '0px', sm: '20px', md: '20px' }}
                                >
                                    Life Insurance Makes You Happy
                                </Typography>

                                <Typography
                                    variant='h6'
                                    color='white'
                                    mb={'48px'}
                                    fontWeight={500}
                                    fontSize={{ xs: '14px', sm: '16px', md: '18px' }}
                                    paddingRight={{ xs: '0px', sm: '30px', md: '30px' }}
                                >
                                    Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy...
                                </Typography>





                                <Box
                                    display={'flex'}
                                    alignItems={'center'}
                                    gap={2}
                                    justifyContent={{ xs: 'center', md: 'flex-start' }}
                                >


                                    <Button
                                        variant='contained'
                                        startIcon={<PlayCircleFilledIcon></PlayCircleFilledIcon>}
                                        sx={{
                                            bgcolor: 'white',
                                            color: '#015FC9',
                                            padding: { xs: '6px 10px', sm: '12px 36px', md: '16px 48px' },
                                            borderRadius: '30px',
                                            boxShadow: 'none'
                                        }}

                                    >
                                        Watch Video
                                    </Button>

                                    <Button
                                        sx={{
                                            bgcolor: '#16243d',
                                            color: 'white',
                                            padding: { xs: '6px 10px', sm: '12px 40px', md: '16px 48px' },
                                            borderRadius: '30px',
                                            boxShadow: 'none'
                                        }}
                                    >
                                        Learn More

                                    </Button>


                                </Box>

                            </Box>



                            <Box
                                mt={'24px'}
                                sx={{
                                    flex: 1,
                                    display: 'flex',
                                    alignItems: 'center',
                                    justifyContent: 'center',
                                    padding: '0px 20px'

                                }}
                            >

                                <Box component='img'
                                    src='public/img/carousel-2.png'
                                    alt='carousel-img'

                                    sx={{
                                        width: { xs: '90%', sm: '100%', md: '90%' },
                                        height: 'auto',
                                        objectFit: 'contain'
                                    }}

                                />


                            </Box>

                        </Box>

                        {/* Slide 2*/}

                        <Box
                            display={'flex !important'}
                            alignItems={'center'}
                            justifyContent={'space-between'}
                            flexDirection={{ xs: "column-reverse", md: "row-reverse", }}
                            margin={0}
                            gap={{ xs: '20px', sm: '30px' }}
                            padding={{ xs: '10px 15px', sm: '20px 40px' }}
                            width='100%'
                            marginBottom='40px'


                        >


                            <Box
                                mt={'24px'} sx={{
                                    width: { xs: '100%', md: '55%' },
                                    textAlign: { xs: 'center', md: 'left' },
                                    paddingRight: { xs: '60px', md: '20px' },
                                    paddingLeft: { xs: '20px', md: '20px' },
                                }}>

                                <Typography
                                    variant='h5'
                                    fontWeight={700}
                                    color='white'
                                    mb={'24px'}
                                    fontSize={{ xs: '18px', sm: '20px', md: '24px' }}
                                >
                                    WELCOME TO LIFESURE
                                </Typography>

                                <Typography
                                    variant='h2'
                                    color='white'
                                    mb={'24px'}
                                    fontWeight={800}
                                    fontSize={{ xs: '32px', sm: '50px', md: '70px' }}
                                    paddingRight={{ xs: '0px', sm: '20px', md: '20px' }}
                                >
                                    Life Insurance Makes You Happy
                                </Typography>

                                <Typography
                                    variant='h6'
                                    color='white'
                                    mb={'48px'}
                                    fontWeight={500}
                                    fontSize={{ xs: '14px', sm: '16px', md: '18px' }}
                                    paddingRight={{ xs: '0px', sm: '30px', md: '30px' }}
                                >
                                    Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy...
                                </Typography>



                                <Box
                                    display={'flex'}
                                    alignItems={'center'}
                                    gap={{ xs: 1, sm: 2, md: 2.5 }}
                                    justifyContent={{ xs: 'center', md: 'flex-start' }}
                                >
                                    <Button
                                        variant='contained'
                                        startIcon={<PlayCircleFilledIcon></PlayCircleFilledIcon>}
                                        sx={{
                                            bgcolor: 'white',
                                            color: '#015FC9',
                                            padding: { xs: '6px 10px', sm: '12px 40px', md: '16px 48px' },
                                            borderRadius: '30px',
                                            boxShadow: 'none'
                                        }}

                                    >
                                        Watch Video
                                    </Button>

                                    <Button
                                        sx={{
                                            bgcolor: '#16243d',
                                            color: 'white',
                                            padding: { xs: '6px 10px', sm: '12px 40px', md: '16px 48px' },
                                            borderRadius: '30px',
                                            boxShadow: 'none'
                                        }}
                                    >
                                        Learn More

                                    </Button>


                                </Box>

                            </Box>



                            <Box mt={'24px'}
                                sx={{
                                    flex: 1,
                                    display: 'flex',
                                    alignItems: 'center',
                                    justifyContent: 'center',
                                    padding: '0px 20px'

                                }}
                            >

                                <Box component='img'
                                    src='public/img/carousel-2.png'
                                    alt='carousel-img'

                                    sx={{
                                        width: { xs: '90%', sm: '100%', md: '90%' },
                                        height: 'auto',
                                        objectFit: 'contain'
                                    }}

                                />


                            </Box>
                        </Box>
                    </Slider>
                </Box>
            </Box >






        </>
    )
}

export default HeaderCarousel