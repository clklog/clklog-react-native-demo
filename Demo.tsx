/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React, {useEffect, useState} from 'react';
import {
  Text,
  Button,
  SafeAreaView,
  ScrollView,
  StatusBar,
  useColorScheme,
  View,
} from 'react-native';
import {Colors, Header} from 'react-native/Libraries/NewAppScreen';
import sensors from 'sensorsdata-analytics-react-native';

// @ts-ignore
function Demo({navigation}): JSX.Element {
  const isDarkMode = useColorScheme() === 'dark';

  const [loginId, setLoginId] = useState('');
  const [isAutoTrack, setIsAutoTrack] = useState(false);
  const [proJson, setProJson] = useState('');

  useEffect(() => {
    sensors.getSuperPropertiesPromise().then(res => {
      console.log(999, res);
      setProJson(JSON.stringify(res));
    });
    sensors.isAutoTrackEnabledPromise().then(res => {
      setIsAutoTrack(res);
      console.log('全埋点状态：', res);
    });
    sensors.getLoginIdPromise().then(res => {
      setLoginId(res);
      console.log('当前登陆人：', res);
    });
  }, []);

  const backgroundStyle = {
    backgroundColor: isDarkMode ? Colors.darker : Colors.lighter,
  };

  const setSa = () => {
    sensors.registerSuperProperties({
      $latitude: 1,
      $longitude: 2,
    });
  };

  // 手动埋点
  const track = () => {
    sensors.track('BuyProduct', {
      ProductID: 123456,
      ProductCatalog: 'Laptop Computer',
    });
  };

  const login = () => {
    // 你的登陆逻辑
    sensors.login('CBE5C159-0172-4E55-B98D-0FE85187F6C1');
  };

  // 设置用户属性
  const setUserPro = () => {
    sensors.profileSetOnce({
      userId: 'CBE5C159-0172-4E55-B98D-0FE85187F6C1',
      userName: 'testUser',
    });
  };

  const getLoginId = () => {
    sensors.getLoginIdPromise().then(res => {
      setLoginId(res);
      console.log('当前登陆人：', res);
    });
  };

  return (
    <SafeAreaView style={backgroundStyle}>
      <StatusBar
        barStyle={isDarkMode ? 'light-content' : 'dark-content'}
        backgroundColor={backgroundStyle.backgroundColor}
      />
      <ScrollView
        contentInsetAdjustmentBehavior="automatic"
        style={backgroundStyle}>
        <Header />
        <View
          style={{
            backgroundColor: isDarkMode ? Colors.black : Colors.white,
          }}>
          <Button title={'设置属性'} onPress={() => setSa()} />
          <Text> 当前属性值：{proJson}</Text>
          <Button title={'手动埋点事件'} onPress={() => track()} />
          <Button title={'用户登陆'} onPress={() => login()} />
          <Text
            onPress={() => {
              getLoginId();
            }}>
            {' '}
            点击获取当前登陆人：{loginId}
          </Text>
          <Button title={'设置用户属性'} onPress={() => setUserPro()} />
          <Text>  全埋点状态：{isAutoTrack ? '开启' : '关闭'}
          </Text>

          <Button title="Go back to Home" onPress={() => navigation.goBack()} />
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

export default Demo;
