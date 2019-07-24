
export const templates = [
    {
    template: "Black & Gold",
    css: {
        back: {
            backgroundImage: "url('https://i.pinimg.com/564x/b5/3b/49/b53b490548338a9fc3c076e6ac69bf7c.jpg')",
            backgroundRepeat: "no-repeat", 
            backgroundSize: "cover", 
            backgroundPosition:"center"
        },
        company: {
            textTransform: "capitalize",
            fontFamily: "SnellRoundhand-Bold",
            color: "#F1D572",
            fontSize: "24px", 
            textAlign: "left",
            position:"relative",
            top: "65%",
            left: "5%",
            letterSpaceing: "3px",
        },
        front: {
            fontFamily:"Baskerville-Bold",
            color: "black", 
            textShadow: "1px 1px 1px #F1D572",
            backgroundImage: "url('https://thumbs.dreamstime.com/t/details-golden-texture-background-gold-color-paint-wall-luxury-golden-background-wallpaper-gold-foil-details-golden-106104759.jpg')",
            backgroundSize: "cover",
            backgroundRepeat: "no-repeat",
            letterSpacing: "2px",
        },
        name: {
            fontFamily: "SnellRoundhand-Bold",
            fontSize: "30px",
            textAlign: "left",
            padding: "5% 0 5% 5%",
            backgroundColor: "black",
            color: "#F1D572"
        },
        info: {
            position: "relative",
            fontSize: "14px",
            textAlign: "left", 
            top: "10%",
            left: "1%",
            padding: "0 0 0 5%"
        }
    }
},
    {
        template: "Lipstick",
        css: { 
            back: {
                backgroundImage: "url('https://i.pinimg.com/564x/35/c6/d8/35c6d8f89c9e5ae5789f99ec937c8bba.jpg')",
                backgroundColor: "white", 
                backgroundRepeat: "no-repeat",
                backgroundSize: "contain",
                backgroundPosition: "left", 
                padding: "0 0 0 10%",
                fontFamily: "Menlo",
                textAlign: "right",
            },
            company: {
                textTransform: "uppercase",
                letterSpacing: "2px",
                position: "relative", 
                top: "35%",
                right: "10%",
                color: "black",
                fontSize: "24px",
            },
            front: {
                backgroundColor: "black",
                color: "white",
                textTransform: "uppercase",
                textAlign: "right",
            },
            name: {
                textAlign: "right",
                fontSize: "24px",
                fontFamily: "Menlo",
                padding: "5%",
                letterSpacing: "5px",
            },
            info: {
                fontFamily: "Avenir-Book",
                padding: "0 5% 0 0",
                fontSize: "14px",
                letterSpacing: "3px"
            }
        }    
    },
    {
        template: "Grey Marble",
        css: {
            back: {
                backgroundImage: "url('https://i.pinimg.com/564x/c5/40/a6/c540a62abbdea8de41dbd6c6d12390b1.jpg')",
                backgroundRepeat: "no-repeat", 
                backgroundSize: "cover"
            }, 
            company: {
                padding: "5% 0 0 0",
                height: "50%",
                backgroundColor: "#717892",
                position: "relative",
                fontFamily: "Didot-Bold",
                textTransform: "uppercase",
                letterSpaceing: "3px",
                fontSize: "16px",
                textAlign: "center",
                top: "40%",
                color: "white",
            },
            front: {
                backgroundColor: "white",
                fontFamily: "Avenir-Book",
                textAlign: "center",
                color: "#717892",
            },
            name: {
                color: "#717892",
                position: "relative",
                fontFamily: "Didot-Bold",
                padding: "0 0 2% 0",
                fontSize: "20px",
                textTransform: "uppercase",
                letterSpacing: "5px",
                top: "15%",
            },
            info: {
                fontFamily: "Didot-Bold",
                position: "relative",
                fontSize: "14px",
                textAlign: "center",
                letterSpacing: "3px",
                top: "25%",
                left: "5%"
            }
        }   
    },
    {
        template: "Gold Pineapples",
        css: {
            back: {
                backgroundImage: "url('https://i.pinimg.com/564x/88/ed/5e/88ed5e8ab5c14f6288825d5861b9e8d8.jpg')",
                backgroundRepeat: "no-repeat",
                backgroundSize: "cover", 
                textAlign: "right",
            },
            company: {
                position: "relative",
                fontFamily: "Zapfino",
                fontWeight: "bold",
                fontSize: "18px", 
                color: "black",
                top: "15%",
                right: "10%"
            },
            front: {
                backgroundImage: "url('https://i.pinimg.com/564x/88/ed/5e/88ed5e8ab5c14f6288825d5861b9e8d8.jpg')",
                backgroundRepeat: "no-repeat", 
                backgroundSize: "cover",
                color: "black",
                // textShadow: "1px 1px 5px grey",   
            },
            name: {
                fontFamily: "Zapfino",
                fontWeight: "bold",
                fontSize: "18px",
                backgroundColor: "white",
                position: "relative", 
                width: "50%",
                height: "50%",
                textAlign: "right",
                left: "50%",
                padding: "5% 5% 0 0"
            },
            info: {
                backgroundColor: "white",
                position: "relative", 
                width: "60%",
                height: "50%",
                textAlign: "right",
                left: "40%",
                padding: "0 5% 0 0"
            }
        }   
    }
]



export const template1 = { 
    back: {
        backgroundImage: "url('https://i.pinimg.com/564x/b5/3b/49/b53b490548338a9fc3c076e6ac69bf7c.jpg')",
        backgroundRepeat: "no-repeat", 
        backgroundSize: "cover", 
        backgroundPosition:"center"
    },
    company: {
        textTransform: "uppercase",
        fontFamily: "'Quicksand', sans-serif",
        color: "#F1D572",
        // textShadow: "2px 2px 1px #F1D572", 
        fontWeight: "bold", 
        fontSize: "20px", 
        textAlign: "right",
        position:"relative",
        top: "5%",
        right: "5%"
    },
    front: {
        fontFamily:"'Quicksand', sans-serif",
        color: "black", 
        textShadow: "1px 1px 1px #F1D572",
        backgroundImage: "url('https://thumbs.dreamstime.com/t/details-golden-texture-background-gold-color-paint-wall-luxury-golden-background-wallpaper-gold-foil-details-golden-106104759.jpg')",
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
        backgroundPosition: "center"
    },
    name: {
        textTransform: "uppercase",
        borderTop: "20px solid transparent",
        borderImage: "url('https://i.pinimg.com/564x/b5/3b/49/b53b490548338a9fc3c076e6ac69bf7c.jpg') 10% round",
        fontSize: "24px",
        fontWeight: "bold",
        textAlign: "left",
        padding: "5% 0 0 5%",
    },
    info: {
        position: "relative",
        fontSize: "14px",
        textAlign: "left", 
        top: "15%",
        left: "1%",
        padding: "0 0 0 5%"
    }
}

export const template2 = { 
    back: {
        backgroundImage: "url('https://i.pinimg.com/564x/35/c6/d8/35c6d8f89c9e5ae5789f99ec937c8bba.jpg')",
        backgroundColor: "white", 
        backgroundRepeat: "no-repeat",
        backgroundSize: "contain",
        backgroundPosition: "left", 
        fontFamily: "'Lobster', cursive",
        textAlign: "right"
    },
    company: {
        position: "relative", 
        top: "25%",
        right: "5%",
        color: "black",
        fontSize: "24px",
        fontWeight: "bold",
    },
    front: {
        backgroundColor: "black",
        color: "white",
        fontFamily: "'Lobster', cursive",
        textTransform: "capitalize",
    },
    name: {
        fontSize: "20px",
        textAlign: "center", 
        padding: "8%",
        letterSpacing: "5px"
    },
    info: {
        fontSize: "14px",
        letterSpacing: "3px"
    }
}

export const template3 = {
    back: {
        backgroundImage: "url('https://i.pinimg.com/564x/c5/40/a6/c540a62abbdea8de41dbd6c6d12390b1.jpg')",
        backgroundRepeat: "no-repeat", 
        backgroundSize: "cover"
    }, 
    company: {
        position: "relative",
        fontFamily: "'Lobster', cursive",
        fontSize: "20px",
        textAlign: "left",
        top: "70%",
        left: "5%",
        color: "#717892"
    },
    front: {
        backgroundColor: "#717892",
        borderLeft: "30px solid transparent",
        borderImage: "url('https://i.pinimg.com/564x/c5/40/a6/c540a62abbdea8de41dbd6c6d12390b1.jpg') 10% round",
        fontFamily: "'Lobster', cursive",
        textAlign: "left",
        color: "#F4F4F2"
    },
    name: {
        position: "relative",
        padding: "0 0 5% 0",
        fontSize: "20px",
        letterSpacing: "5px",
        top: "20%",
        left: "5%"
    },
    info: {
        position: "relative",
        fontSize: "14px",
        textAlign: "left",
        letterSpacing: "3px",
        top: "25%",
        left: "5%"
    }
}

export const template4 = {
    back: {
        backgroundImage: "url('https://i.pinimg.com/564x/88/ed/5e/88ed5e8ab5c14f6288825d5861b9e8d8.jpg')",
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover", 
    },
    company: {
        position: "relative",
        fontFamily: "'Thasadith', sans-serif",
        fontSize: "24px", 
        color: "#F1D572",
        textShadow: "1px 1px 5px black",
        top: "30%"
    },
    front: {
        backgroundImage: "url('https://i.pinimg.com/564x/88/ed/5e/88ed5e8ab5c14f6288825d5861b9e8d8.jpg')",
        backgroundRepeat: "no-repeat", 
        backgroundSize: "cover",
        color: "#F1D572",
        textShadow: "1px 1px 5px black",   
    },
    name: {
       backgroundColor: "white",
       opacity: "1",
       position: "relative", 
       top: "25%"
    },
    info: {
        backgroundColor: "white",
        opacity: "1",
        position: "relative", 
        top: "25%"
    }
}


// export const template = {
//     back: {

//     },
//     company: {

//     },
//     front: {

//     },
//     name: {

//     },
//     info: {

//     }
// }