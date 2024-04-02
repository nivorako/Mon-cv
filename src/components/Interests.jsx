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
                    Informatique
                </Text>
            </View>
            
            <View style={styles.interestsDetail}>
                <Text style={styles.interestsDBlock}>
                    -
                </Text>
                <Text style={styles.interestsDBlock}>
                    Jardinage et bricolage
                </Text>
            </View>
            <View style={styles.interestsDetail}>
                <Text style={styles.interestsDBlock}>
                    -
                </Text>
                <Text style={styles.interestsDBlock}>
                    Sport
                </Text>
            </View>
            
        </View>
    </View>
);