import React from "react";
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
    Line,
    Image,
} from "@react-pdf/renderer";

import Foto from "../assets/MaGueule.png";
import { Profile } from "./Profil";
import { Title } from "./Title";
import { Skill } from "./Skills";
import { Interests } from "./Interests";
import { Experiences } from "./Experiences";

Font.register({
    family: "Anton",
    src: "http://fonts.gstatic.com/s/anton/v8/5t8vP9Hx2udzw372glmOxA.ttf",
});

const styles = StyleSheet.create({
    page: {
        width: "50vw",
        height: "150vh",
        flexDirection: "row",
    },
    section1: {
        width: "30%",
        height: "100%",
        backgroundColor: "#0f4e6e",
        color: "white",
        flexDirection: "column",
        justifyContent: "space-around",
    },
    photo: {
        width: "80%",
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
        borderRadius: "50%",
        objectFit: "cover"
    },
    line1: {
        width: "80%",
        borderBottom: ".2",
        borderColor: "white",
        position: "absolute",
        top: "210px",
        left: "20px",
    },
    line2: {
        width: "80%",
        borderBottom: ".2",
        borderColor: "white",
        position: "absolute",
        top: "410px",
        left: "20px",
    },
    line3: {
        width: "80%",
        borderBottom: ".2",
        borderColor: "white",
        position: "absolute",
        top: "610px",
        left: "20px",
    },
    profile: {
        position: "absolute",
        top: "230px",
    },
    skill: {
        position: "absolute",
        top: "430px"
    },
    interest: {
        position: "absolute",
        top: "630px"
    },
    section2: {
        width: "70%",
        height: "100%",
        backgroundColor: "white",
        position: "relative",
        flexDirection: "column",
        alignItems: "left",
    },
    experiences: {
        position: "absolute",
        top: "230px",
    }
});

const DocumentContent = ({ name }) => (
    <Document>
        <Page size="A4" style={styles.page}>
            <View style={styles.section1}>
                <View style={styles.photo}>
                    <Image src={Foto} alt="mon image" style={styles.image} />
                </View>
                <Line x1={0} y1={0} x2={250} y2={0} style={styles.line1} />
                <View style={styles.profile}>
                    <Profile />
                </View>
                <Line x1={0} y1={0} x2={250} y2={0} style={styles.line2} />
                <View style={styles.skill}>
                    <Skill />
                </View>
                <Line x1={0} y1={0} x2={250} y2={0} style={styles.line3} />
                <View style={styles.interest}>
                    <Interests />
                </View>
            </View>

            <View style={styles.section2}>
                <Title />
                <Line
                    x1={0}
                    y1={0}
                    x2={250}
                    y2={0}
                    style={{ borderBottom: 0.2 }}
                />
                <View style={styles.experiences}>
                    <Experiences />
                </View>
                
            </View>
        </Page>
    </Document>
);

const Home = () => {
    const name = "Toto";

    return (
        <>
            <PDFViewer style={{ width: "100%", height: "100vh" }}>
                <DocumentContent name={name} />
            </PDFViewer>
            <PDFDownloadLink
                document={<DocumentContent name={name} />}
                fileName="magasinier.pdf"
            >
                {({ blob, url, loading, error }) =>
                    loading ? "Loading document..." : "Télécharger maintenant"
                }
            </PDFDownloadLink>
        </>
    );
};

export default Home;
