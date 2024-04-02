import { 
    Text,
    View,  
    StyleSheet,
    Font,
} from "@react-pdf/renderer";

const styles = StyleSheet.create({
    skill: {
        marginLeft: "20px",
        marginRight: "20px"
    },
    skillTitle: {
        fontFamily: "Anton",
        fontSize: "12px",
    },
    skillDetails: {
        fontSize: "8px",
        marginTop: "10px",
    },
    skillDetail: {
        marginBottom: "3px",
        flexDirection: "row"
    },
    skillDBolck: {
        marginRight: "3px"
    }
});

Font.register({
    family: "Anton",
    src: "http://fonts.gstatic.com/s/anton/v8/5t8vP9Hx2udzw372glmOxA.ttf",
});

export const Skill = () => (
    <View style={styles.skill}>
        <View style={styles.skillTitle}>
            <Text> COMPETENCES </Text>
        </View>
        <View style={styles.skillDetails}>
            <View  style={styles.skillDetail}>
                <Text style={styles.skillDBolck}>
                    - 
                </Text>
                <Text style={styles.skillDBolck}>
                    Autonomie et organisation
                </Text>
            </View>
            
            <View style={styles.skillDetail}>
                <Text style={styles.skillDBolck}>
                    - 
                </Text>
                <Text style={styles.skillDBolck}>
                    Communication et travail en équipe
                </Text>
            </View>
            <View style={styles.skillDetail}>
                <Text style={styles.skillDBolck}>
                    -
                </Text>
                <Text style={styles.skillDBolck}>
                    Expérience étendue dans la réception, le
                    stockage et la distribution de
                    marchandises, avec une attention
                    minutieuse aux détails pour garantir la
                    précision des inventaires.
                </Text>
            </View>
            <View style={styles.skillDetail}>
                <Text style={styles.skillDBolck}>
                    - 
                </Text>
                <Text style={styles.skillDBolck}>
                    Maîtrise des opérations de planification,
                    d'expédition et de réapprovisionnement
                    pour assurer une gestion fluide des
                    marchandises.
                </Text>
            </View>
            <View style={styles.skillDetail}>
                <Text style={styles.skillDBolck}>
                    - 
                </Text>
                <Text style={styles.skillDBolck}>
                    Capable de maintenir des niveaux élevés
                    de productivité tout en respectant les
                    normes de qualité.
                </Text>
            </View>
            
        </View>
    </View>
)