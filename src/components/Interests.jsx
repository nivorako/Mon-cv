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
    interests: {
        marginLeft: "20px",
        marginRight: "20px"
    },
    interestsTitle: {
        fontSize: "12px",
        fontFamily: "Anton" 
    },
    interestsDetails: {
        fontSize: "8px",
        marginTop: "10px"
    },
    interestsDetail: {
        marginBottom: "3px",
        flexDirection: "row"
    },
    interestsDBlock: {
        marginRight: "3px"
    }
})

export const Interests = () => (
    <View style={styles.interests}>
        <View style={styles.interestsTitle}>
            <Text>CENTRES D' INTERET</Text>
            
        </View>
        <View style={styles.interestsDetails}>
            <View style={styles.interestsDetail}>
                <Text style={styles.interestsDBlock}>
                    -
                </Text>
                <Text style={styles.interestsDBlock}>
                    Magasinier expérimenté avec une solide connaissance de la logistique et du
                    transport.
                </Text>
            </View>
            
            <View style={styles.interestsDetail}>
                <Text style={styles.interestsDBlock}>
                    -
                </Text>
                <Text style={styles.interestsDBlock}>
                    Dynamique, fiable et capable de soulever et déplacer des colis lourds en toute
                    sécurité. Doté d'une expertise dans la gestion de stocks, la planification logistique et
                    l'optimisation des processus.
                </Text>
            </View>
            <View style={styles.interestsDetail}>
                <Text style={styles.interestsDBlock}>
                    -
                </Text>
                <Text style={styles.interestsDBlock}>
                    Habitué à travailler dans des environnements exigeants tout en maintenant un haut
                    niveau d'efficacité
                </Text>
            </View>
            
        </View>
    </View>
);