import { Box, Button, Typography } from '@mui/material'
import PlayCircleFilledIcon from '@mui/icons-material/PlayCircleFilled';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";



interface slide {
    title: string;
    subtitle: string;
    description: string;
    imgSrc: string;
    reverse: boolean;
}



const slides: slide[] = [
    {
        title: 'WELCOME TO LIFESURE',
        subtitle: 'Life Insurance Makes You Happy',
        description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy...",
        imgSrc: 'img/carousel-2.png',
        reverse: false,
    },

    {
        title: 'WELCOME TO LIFESURE',
        subtitle: 'Life Insurance Makes You Happy',
        description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy...",
        imgSrc: 'img/carousel-2.png',
        reverse: true,
    },

    {
        title: 'WELCOME TO LIFESURE',
        subtitle: 'Life Insurance Makes You Happy',
        description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy...",
        imgSrc: 'img/carousel-2.png',
        reverse: false,
    },
]


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
                    bgcolor: '#0BE1FF',
                    color: 'white',
                },
            }}

        >

            &#8594; {/* Right Arrow */}
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
                    bgcolor: '#0BE1FF',
                    color: 'white',
                },
            }}
        >
            &#8592; {/* Left Arrow */}
        </Box>
    );
};















const HeaderCarousel = () => {


    const settings = {

        infinite: true,
        speed: 500,

        fade: true,
        waitForAnimate: false,

        slidesToShow: 1,
        slidesToScroll: 1,

        autoplay: true,
        autoplaySpeed: 2000,

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
                <Box
                    width={'100%'}
                    mx='auto'
                    paddingBottom={{ sm: '40px', xs: '0px' }}>




                    <Slider {...settings} >


                        {slides.map((slide, index) => (




                            <Box key={index}

                                sx={{
                                    display: 'grid !important',
                                    alignItems: 'center',
                                    gap: 2,

                                    marginBottom: '40px',

                                    gridTemplateColumns: {
                                        xs: slide.reverse ? "1fr" : "1fr",
                                        sm: slide.reverse ? "1fr 1fr" : "1fr 1fr",
                                    },

                                    padding: {
                                        xs: '10px 15px',
                                        sm: '20px 30px',
                                        md: '20px 40px',
                                    },

                                    gridTemplateAreas: {
                                        xs: slide.reverse ? `"image" "text"` : `"text" "image"`,

                                        sm: slide.reverse ? `"image text"` : `"text image"`,
                                    },

                                    boxSizing: 'border-box',
                                }}



                            >


                                <Box mt={'24px'} data-aos='fade-right' data-aos-delay='500'
                                    sx={{
                                        gridArea: 'text',
                                        textAlign: { xs: 'center', sm: "left" }
                                    }}>

                                    <Typography
                                        variant='h5'
                                        fontWeight={700}
                                        color='white'
                                        mb={'24px'}
                                        fontSize={{
                                            xs: '18px',
                                            sm: '20px',
                                            md: '24px',
                                        }}
                                    >
                                        {slide.title}

                                    </Typography>

                                    <Typography
                                        variant='h2'
                                        color='white'
                                        mb={'24px'}
                                        fontWeight={800}

                                        fontSize={{
                                            xs: '32px',
                                            sm: '50px',
                                            md: '65px'
                                        }}

                                    >
                                        {slide.subtitle}
                                    </Typography>

                                    <Typography
                                        variant='h6'
                                        color='white'
                                        mb={'48px'}
                                        fontWeight={500}

                                        fontSize={{
                                            xs: '14px',
                                            sm: '16px',
                                            md: '18px',
                                        }}

                                    >
                                        {slide.description}
                                    </Typography>





                                    <Box
                                        display={'flex'}
                                        alignItems={'center'}
                                        gap={2}

                                        justifyContent={{
                                            xs: 'center',
                                            sm: 'flex-start'
                                        }}
                                    >


                                        <Button
                                            variant='contained'
                                            startIcon={<PlayCircleFilledIcon></PlayCircleFilledIcon>}
                                            sx={{
                                                bgcolor: 'white',
                                                color: '#015FC9',

                                                padding: {
                                                    xs: '6px 10px',
                                                    sm: '12px 28px',
                                                    md: '16px 48px'
                                                },

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
                                                padding: {
                                                    xs: '6px 10px',
                                                    sm: '12px 28px',
                                                    md: '16px 48px'
                                                },

                                                borderRadius: '30px',
                                                boxShadow: 'none'
                                            }}
                                        >
                                            Learn More

                                        </Button>


                                    </Box>

                                </Box>



                                <Box data-aos='fade-left' data-aos-delay='500'
                                    mt={'24px'}
                                    sx={{
                                        gridArea: 'image',
                                        display: 'flex',
                                        alignItems: 'center',
                                        justifyContent: 'center',
                                        padding: '0px 10px',
                                        position: 'relative',

                                    }}
                                >

                                    <img src={slide.imgSrc} alt="carousel-img"
                                        style={{
                                            width: '100%',
                                            maxWidth: '500px',
                                            height: 'auto',
                                            objectFit: 'contain',
                                            objectPosition: 'center'
                                        }}
                                    />

                                </Box>



                            </Box>
                        ))}

                    </Slider>
                </Box >
            </Box >






        </>
    )
}

export default HeaderCarousel