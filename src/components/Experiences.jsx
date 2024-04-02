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
   
})

export const Experiences = () => (
    <View style={styles.experiences}>
        <View style={styles.experiencesTitle}>
            <Text>EXPERIENCES PROFFESSIONNELLES</Text>
            
        </View>
        <View style={styles.experiencesDetails}>
           
            
        </View>
    </View>
);