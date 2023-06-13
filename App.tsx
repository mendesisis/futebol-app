import { useEffect, useState } from 'react';
import { FlatList, Image, StyleSheet, Text, View } from 'react-native';
import TeamEntity from './src/entities/team_entity';

export default function App() {

  const [teams, setTeams] = useState <TeamEntity[]> ([]);

  useEffect (() => {
    var herHeaders = new Headers ();
    herHeaders.append("Authorization", "Bearer live_73f3f7004efbc54fb475fdd18e5258")

    var requestOptions = {
      method: 'GET',
      headers: herHeaders
    };

    let teamsPositions: TeamEntity[] = [];

    fetch ("https://api.api-futebol.com.br/v1/campeonatos/10/tabela", requestOptions)
    .then ( response => response.text())
    .then( result => JSON.parse (result))
    .then( dataJson => {
      dataJson.map((team) => {
        const dataTeam = {
          id: team['time']['time_id'], 
          team_position: team['posicao'], 
          team_shield: team['time']['escudo'], 
          team_name: team['time']['nome_popular'],
          team_points: team['pontos']
        };
        teamsPositions.push(dataTeam);
    });
    setTeams(teamsPositions);
    console.log(teamsPositions);
     })
      .catch(error => console.log('error', error));
    }, []);

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Tabela Brasileirão série A</Text>
      <View style={styles.chart}>
      <FlatList
          data={teams}
          keyExtractor={(item) => item.id.toString()}
          renderItem={(team) =>
            <View style={styles.item}>
              <Image style={styles.team_shield} source={{uri:team.item.team_shield}} />
              <Text style={styles.team_position}>{team.item.team_position}</Text>
              <Text style={styles.team_name}>{team.item.team_name}</Text>
              <Text>{team.item.team_points}</Text>
            </View>
          }
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F5F5DC',
    alignItems: 'center',
    justifyContent: 'flex-start'

  },
  title: {
    fontSize: 20,
    fontWeight: '600',
    marginBottom: 25,
    marginTop: 50
  },
  chart: {
    flex: 1,
    backgroundColor:'#90EE90',
    width:'100%'

  },
  team_shield: {
    width: 35,
    height: 35
  },
  item :{
    flexDirection: 'row',
    paddingTop: 8,
    paddingHorizontal: 16,
    height: 40,
    justifyContent: 'space-between'
    

  },
  team_position: {
    width: 25,
    fontSize: 15
      

  },
  team_name : {
    alignItems: 'center',
    fontSize: 15,
    width: 100


  }
 
});
