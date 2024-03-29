import React from 'react';
import { 
    Page, 
    PDFDownloadLink, 
    Text, 
    View, 
    Document, 
    StyleSheet, 
    PDFViewer, 
    Font, 
    Svg, 
    Path, 
    Line ,
    Image
} from '@react-pdf/renderer';

import { Test } from './Test';
import Foto from "../assets/logo.png";

Font.register({
        family: 'ABeeZee',
        fonts: [
            {
                src: 'http://fonts.gstatic.com/s/abeezee/v9/JYPhMn-3Xw-JGuyB-fEdNA.ttf',
            }
        ]
        
    }   
);

Font.register({
    family: "Anton",
    src: "http://fonts.gstatic.com/s/anton/v8/5t8vP9Hx2udzw372glmOxA.ttf",
});

//<link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@20..48,100..700,0..1,-50..200" />

Font.register({
    family: "Phone",
    src: "https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@20..48,100..700,0..1,-50..200"
});

// Font.register(
//     {
//         family: "Bilbo",
//         src: "http://fonts.gstatic.com/s/bilbo/v6/JqdbkZoDKENg_4351JtArw.ttf"
//     }
// );

// Font.register(
//     {
//         family: "BilboFont",
//         format: "trueType",
//         src:  BilboFont,
//         fontWeight: 100
//     }
// );

const styles = StyleSheet.create({
    page: {
        width: "50vw",
        height: "150vh",
        flexDirection: "row"
    },
    section1: {
        width: "30%",
        height: "100%",
        backgroundColor: "#0f4e6e",
        color: "white",
        flexDirection: "column",
        justifyContent: "space-around"
    },
    photo: {
        width:"80%",
        height: "150px",
        margin: "auto",
        backgroundColor: "white",
        position: "absolute",
        top: "50px",
        left: "18px",
        borderRadius: "50%",
    },
    image: {
        width: "100%",
        height: "150px",
        borderRadius: "50%"
    },
    line: {
        width: "80%",
        borderBottom: ".2",
        borderColor: "white",
        position: "absolute",
        top: "210px",
        left: "20px"
    },
    profile: {
        position: 'absolute',
        top: "250px"
    },
    section2: {
        width: "70%",
        height: "100%",
        backgroundColor: "white",
        position: "relative",
        flexDirection: "column",
        alignItems: "left"
    },
    title: {
        width: "100%",
        marginTop: "50px",
        marginLeft: "20px"
    },
    name: {
        color: "#0f4e6e"
    },
    firstName: {
           
    }, 
    lastName: {
        //fontFamily: "Anton",
    },
    function: {
        fontFamily: "Anton",
        letterSpacing: "1px",
        marginTop: "5px"
    },
    details: {
        marginTop: "20px",
        marginBottom: "10px"
    },
    detail: {
        width: "100%",
        fontSize: "10px",
        flexDirection: "row",
        marginTop: "0px",
        marginBottom: "5px"
    }, 
    icon: {
        marginRight: "10px"
    }
});

const DocumentContent = ({name}) => (
    <Document>
        <Page size="A4" style={styles.page}>
            <View style={styles.section1}>
                <View style={styles.photo}>
                    <Image src={Foto} altl="mon image" style={styles.image}/>
                </View>
                <Line x1={0} y1={0} x2={250} y2={0} style={styles.line} />
                <View style={styles.profile}>
                   <Test />
                </View>
            </View>
            
            <View style={styles.section2}>
                <View style={styles.title}>
                    <View style={styles.name}>
                        <Text style={styles.firstName}>NIVO</Text>
                        <Text style={styles.lastName}>RAKOTONDRABE</Text>
                    </View>
                    <View style={styles.function}>
                        <Text>MAGASINIER</Text>
                    </View>
                    <View style={styles.details}>
                        <View style={styles.detail}>
                            <View style={styles.icon}>
                                <PhoneSvg />
                            </View>
                                <Text style={styles.phoneNumber}>06.07.55.35.41</Text>
                        </View>
                        <View style={styles.detail}>
                            <View style={styles.icon}>
                                <EmailSvg />
                            </View>
                            <Text style={styles.emailAdress}>nivo.rakoto@yahoo.fr</Text>
                        </View>
                        <View style={styles.detail}>
                            <View style={styles.icon}>
                                <AdressSvg/>
                            </View>
                            <View style={styles.adress}>
                                <Text>3, chemin du presbytère</Text>
                                <Text>27 150 Saussay la Campagne</Text>
                            </View>
                        </View>
                    </View>
                </View>
                <Line x1={0} y1={0} x2={250} y2={0} style={{ borderBottom: .2 }} />
                <View>
                <Text>
                    La suite
                </Text>
            </View>
            </View>

        </Page>
    </Document>
);

const PhoneSvg = () => (
    <Svg 
        height="10" 
        viewBox="0 -960 960 960" 
        width="10"       
    >
        <Path 
            d="M480-520q-17 0-28.5-11.5T440-560q0-17 11.5-28.5T480-600q17 0 28.5 11.5T520-560q0 17-11.5 28.5T480-520Zm160 0q-17 0-28.5-11.5T600-560q0-17 11.5-28.5T640-600q17 0 28.5 11.5T680-560q0 17-11.5 28.5T640-520Zm160 0q-17 0-28.5-11.5T760-560q0-17 11.5-28.5T800-600q17 0 28.5 11.5T840-560q0 17-11.5 28.5T800-520Zm-2 400q-125 0-247-54.5T329-329Q229-429 174.5-551T120-798q0-18 12-30t30-12h162q14 0 25 9.5t13 22.5l26 140q2 16-1 27t-11 19l-97 98q20 37 47.5 71.5T387-386q31 31 65 57.5t72 48.5l94-94q9-9 23.5-13.5T670-390l138 28q14 4 23 14.5t9 23.5v162q0 18-12 30t-30 12ZM241-600l66-66-17-94h-89q5 41 14 81t26 79Zm358 358q39 17 79.5 27t81.5 13v-88l-94-19-67 67ZM241-600Zm358 358Z"
            fill="white"
            stroke="black"        
        />
    </Svg>
);

const EmailSvg = () => (
    <Svg 
        viewBox="0 0 24 24"  
        width="10"
        height="10"
    >
        <Path
            fill="white"
            stroke="black" 
            strokeLinecap="round" 
            strokeLinejoin="round" 
            d="M16.5 12a4.5 4.5 0 1 1-9 0 4.5 4.5 0 0 1 9 0Zm0 0c0 1.657 1.007 3 2.25 3S21 13.657 21 12a9 9 0 1 0-2.636 6.364M16.5 12V8.25" 
        />
    </Svg>

);

const AdressSvg = () => (
    <Svg  
        viewBox="0 0 24 24" 
        width="10"
        height="10"
    >
        <Path 
            fill="white"
            stroke="black"
            d="M21.75 6.75v10.5a2.25 2.25 0 0 1-2.25 2.25h-15a2.25 2.25 0 0 1-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0 0 19.5 4.5h-15a2.25 2.25 0 0 0-2.25 2.25m19.5 0v.243a2.25 2.25 0 0 1-1.07 1.916l-7.5 4.615a2.25 2.25 0 0 1-2.36 0L3.32 8.91a2.25 2.25 0 0 1-1.07-1.916V6.75" 
        />
    </Svg>

)

const Home = () => {
    const name = "Toto";
    
    return (
        <>
            <PDFViewer style={{ width: '100%', height: '100vh' }}>
                <DocumentContent name={name} />
            </PDFViewer>
            <PDFDownloadLink document={<DocumentContent name={name}/>} fileName="magasinier.pdf">
                {({ blob, url, loading, error }) =>
                    loading ? 'Loading document...' : 'Télécharger maintenant'
                }
            </PDFDownloadLink>         
        </>
    );
};

export default Home;

