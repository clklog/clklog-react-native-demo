import React, {useEffect} from 'react';
import {View, Text, Button} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import Demo from './Demo';
import sensors from 'sensorsdata-analytics-react-native';

const Stack = createStackNavigator();

// @ts-ignore
function HomeScreen({navigation}) {
  return (
    <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
      <Text>Home Screen</Text>
      <Button
        title="Go to Details"
        onPress={() => navigation.navigate('Details')}
      />
      <Button
        title="Details-自定义标题"
        onPress={() => navigation.navigate('Details',{
          sensorsdataparams:{
              $title: '自定义Title',
            },
          })
        }
      />
    </View>
  );
}

// @ts-ignore
function DetailsScreen({navigation}) {
  return <Demo navigation={navigation} />;
}

const App = () => {
  useEffect(() => {
    try {
      // 神策初始化
      sensors.init({
        //clklog 数据接收地址
        server_url:
          'https://receiver.tracking.zcunsoft.com/api/gp?project=rn&token=fb70defc-44f5-11ef-9048-00163e30f75e',
        show_log: true,
        auto_track: 1 << 3,
        heat_map: true,
      });
      sensors.trackAppInstall();
    } catch (error) {
      console.log('clklog', error);
    }
  }, []);

  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="Details" component={DetailsScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
