import { View, StyleSheet, Image, Text } from "react-native";


export default function DetailPage({route, navigation}){
    const { id, team_name, team_points, team_position, team_shield  } = route.params;
    console.log(route.params);
    return(
        <View style={styles.container}>
            <Image style={styles.team_shield} source={team_shield}/>
            <Text  style={styles.team_name}>{team_name}</Text>
            <Text style={styles.team_points}>{team_points}</Text>
        </View>
    )
}
const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#F5F5DC',
      alignItems: 'center',
      justifyContent: 'flex-start'
  
    },
    team_shield: {
        width: 150,
        height: 150
    },
    team_name: {
        fontSize: 50,
        width: 300,
        alignItems: "center",
        flexDirection: 'row'
       
    },
    team_points : {
        fontSize: 40,
        width: 30,
        flexDirection: 'row',
        alignItems: "center"



    }
    




});