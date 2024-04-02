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
    profil: {      
        marginLeft: "20px",
        marginRight: "20px"
    },
    profilTitle: {
        fontSize: "12px",
        fontFamily: "Anton"
    },
    profilDetails: {
        fontSize: "8px",
        marginTop: "10px"
    }
});

export const Profile = () => (
    <View style={styles.profil}>
        <View style={styles.profilTitle}>
            <Text>PROFILE</Text>
            <Text>PROFFESSIONNEL</Text>
        </View>
        <View style={styles.profilDetails}>
            <Text>Magasinier expérimenté avec une solide connaissance de la logistique et du
            transport.</Text>
            <Text>Dynamique, fiable et capable de soulever et déplacer des colis lourds en toute
            sécurité. Doté d'une expertise dans la gestion de stocks, la planification logistique et
            l'optimisation des processus.</Text>
            <Text>Habitué à travailler dans des environnements exigeants tout en maintenant un haut
            niveau d'efficacité</Text>
        </View>
    </View>
);
