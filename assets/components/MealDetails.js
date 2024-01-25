import{View,Text,StyleSheet} from 'react-native'

function MealDetails({duration,complexity,affordability,style,textStyle}){
<View style={[styles.details,style]}>
        <Text style={[styles.deailItem,textStyle]}>{duration}m</Text>
        <Text style={[styles.deailItem,textStyle]}>{complexity.toUpperCase()}</Text>
        <Text style={[styles.deailItem,textStyle]}>{affordability.toUpperCase()}</Text>
    </View>

}
export default MealDetails;

const styles=StyleSheet.create({

})