import React, { useState, useEffect } from 'react';
import {
  StyleSheet,
  Text,
  FlatList,
} from 'react-native';
import get from './exercice3';

export default function ListScreen() {
  const [velibs, setVelibs] = useState(false);

  useEffect(() => {
    get("https://raw.githubusercontent.com/tlenclos/fake-opendata-velib-server/master/db.json").then( (value) =>{
      setVelibs(value);
      console.log(velibs);
  });
   
} ,[]);
  return (
    <FlatList
      style={styles.container}
      renderItem={({ item }) => {
        return <Text>{item.fields.station_name}</Text>
      }}
      data={velibs}
      keyExtractor={item => item.id}
    />
  );
}

ListScreen.navigationOptions = {
  title: "Vélibs",
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
});
