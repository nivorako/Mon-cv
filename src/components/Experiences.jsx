import {
    Text,
    View,
    StyleSheet,
    Font,
} from "@react-pdf/renderer";

Font.register({
    family: "Anton",
    src: "http://fonts.gstatic.com/s/anton/v8/5t8vP9Hx2udzw372glmOxA.ttf",
});

const styles = StyleSheet.create({
    experiences: {
        marginLeft: "20px",
        marginRight: "20px"
    },
    experiencesTitle: {
        fontFamily: "Anton",
        fontSize: "12px",
        color: "#0f4e6e"
    },
    experience: {

    },
    experienceDetails: {
        fontSize: "8px",
        marginTop: "25px"
    },
    experienceAdress: {
        flexDirection: "row",
        alignItems: "center"
    },
    experienceAdressPro: {
        fontFamily: "Anton",
        marginRight: "3px"
    },
    experienceTitlePro: {
        marginTop: "5px", 
        color: "#0f4e6e",
        fontFamily: "Anton"
    },
    experienceComment: {
        marginTop: "5px",
        flexDirection: "column"
    },
    experienceCommentBlock: {
        flexDirection: "row",
        marginBottom: "2px",
    },
    experienceCommentBlockHyphen: {
        marginRight: "3px",
    }
})

export const Experiences = () => (
    <View style={styles.experiences}>   
        <View style={styles.experiencesTitle}>
            <Text>EXPERIENCES PROFFESSIONNELLES</Text>       
        </View>

        <View style={styles.experienceDetails}>
            <Text>06/11/2023 - 06/03/2024</Text>
            <View style={styles.experienceAdress}>
                <Text style={styles.experienceAdressPro}>Carglass :</Text>
                <Text>Saint Ouen l'Aumône</Text>
            </View>
            <Text style={styles.experienceTitlePro}>Préparateur de commandes</Text>
        </View>   
        <View style={styles.experienceDetails}>
            <Text>2021 - 2023</Text>
            <View style={styles.experienceAdress}>
                <Text style={styles.experienceTitlePro}>Projet de reconversion proffessionnelle</Text>
                <Text></Text>
            </View>
            <Text style={styles.experienceTitlePro}></Text>
            <Text style={styles.experienceComment}>
                Formation à distance pour le métier de développeur de site web
            </Text>
        </View>
        <View style={styles.experienceDetails}>
            <Text>2007 - 2021</Text>
            <View style={styles.experienceAdress}>
                <Text style={styles.experienceAdressPro}>Ariane Espace :</Text>
                <Text>Les Mureaux</Text>
            </View>
            <Text style={styles.experienceTitlePro}>Magasinier</Text>
            <View style={styles.experienceComment}>
                <View style={styles.experienceCommentBlock}>
                    <Text style={styles.experienceCommentBlockHyphen}>
                        -
                    </Text>
                    <Text style={styles.experienceCommentBlockHyphen}>
                        Expédition marchandises par voie, aérienne et routière selon les normes
                        nationaux et internationaux du transport (IATA, ADR), tout en respectant les
                        spécificités des marchandises à expédier ainsi que les contraintes physiques
                        générées par le mode d’expédition.
                    </Text>
                </View>
                <View style={styles.experienceCommentBlock}>
                    <Text style={styles.experienceCommentBlockHyphen}>
                        -
                    </Text>
                    <Text style={styles.experienceCommentBlockHyphen}>
                        Gestion planning expédition maritime et respecter la date d’expédition.
                    </Text>
                </View>
                <View style={styles.experienceCommentBlock}>
                    <Text style={styles.experienceCommentBlockHyphen}>
                        -
                    </Text>
                    <Text style={styles.experienceCommentBlockHyphen}>
                    Gestion et stockage des containers d’expédition par voie maritime.
                    </Text>
                </View>
                <View style={styles.experienceCommentBlock}>
                    <Text style={styles.experienceCommentBlockHyphen}>
                        -
                    </Text>
                    <Text style={styles.experienceCommentBlockHyphen}>
                        Conditionnement, stockage et calage des marchandises dans des containers
                        maritimes selon les normes.
                    </Text>
                </View>
                <View style={styles.experienceCommentBlock}>
                    <Text style={styles.experienceCommentBlockHyphen}>
                        -
                    </Text>
                    <Text style={styles.experienceCommentBlockHyphen}>
                        Reception des marchandises
                    </Text>
                </View>
                <View style={styles.experienceCommentBlock}>
                    <Text style={styles.experienceCommentBlockHyphen}>
                        -
                    </Text>
                    <Text style={styles.experienceCommentBlockHyphen}>
                        Gestion des cas d’urgences d’expédition ou de réception de marchandises.
                    </Text>
                </View>
            </View>
        </View>
        <View style={styles.experienceDetails}>
            <Text>2002 - 2007</Text>
            <View style={styles.experienceAdress}>
                <Text style={styles.experienceAdressPro}>Missions interim :</Text>
                <Text></Text>
            </View>
            <Text style={styles.experienceTitlePro}>Préparateur de commandes - magasinier</Text>
            <View style={styles.experienceComment}>
                <View style={styles.experienceCommentBlock}>
                    <Text style={styles.experienceCommentBlockHyphen}>
                        -
                    </Text>
                    <Text style={styles.experienceCommentBlockHyphen}>
                        Préparation de commandes CACES 1/2/3/4
                    </Text>
                </View>
                <View style={styles.experienceCommentBlock}>
                    <Text style={styles.experienceCommentBlockHyphen}>
                        -
                    </Text>
                    <Text style={styles.experienceCommentBlockHyphen}>
                        Expédition et réception marchandises.
                    </Text>
                </View>
            </View>
        </View>   
        <View style={styles.experienceDetails}>
            <Text>1991 - 2002</Text>
            <View style={styles.experienceAdress}>
                <Text style={styles.experienceAdressPro}>Artisan chauffeur :</Text>
                <Text>Transport marchandises moins de 3T5.</Text>
            </View>
            <Text style={styles.experienceTitlePro}>Entrepreneur individuel</Text>
            <View style={styles.experienceComment}>
                <View style={styles.experienceCommentBlock}>
                    <Text style={styles.experienceCommentBlockHyphen}>
                        -
                    </Text>
                    <Text style={styles.experienceCommentBlockHyphen}>
                        Enlèvement et livraison de marchandises en France et dans toute l'Europe
                    </Text>
                </View>
            </View>
        </View> 
    </View>
);