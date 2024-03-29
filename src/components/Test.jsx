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

const styles = StyleSheet.create({
    test: {
       fontSize: "8px",
       marginLeft: "20px"
    }
});

export const Test = () => (
    <View style={styles.test}>
        <Text>Coucou Test</Text>
    </View>
)