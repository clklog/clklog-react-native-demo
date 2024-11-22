# clklog-ract-native demo

## demo包含的内容

- 1、神策react-native-sdk在IOS端和Android端的集成和初始化
- 2、全埋点的代码的接入
- 3、会话的接入
- 4、简易用户的接入示例
- 5、自定义事件的接入示例
- 6、自定义用户属性的接入示例
- 7、自定义页面标题的接入示例

## 神策sdk下载地址

<https://github.com/sensorsdata/react-native-sensors-analytics>

## 神策sdk集成文档

<https://manual.sensorsdata.cn/sa/3.0/zh_cn/tech_sdk_client_rn_install-109576899.html>

## 集成步骤

### 安装基础依赖

```
yarn
```

### sdk集成

1. 引用sdk

 ```
yarn add sensorsdata-analytics-react-native@https://gitee.com/clklog/sensorsdata-analytics-react-native-for-clklog.git
```

1. 在 `package.json` 增加如下配置:

```
"scripts": {
      "postinstall": "node node_modules/sensorsdata-analytics-react-native/SensorsDataRNHook.js -run"
}
```

3. iOS安装依赖

```
cd ios && pod install 
```

### 添加埋点代码

sdk初始化方法和埋点代码详细参考demo.

## 集成说明

 ClkLog 的数据统计需开启会话跟踪和App崩溃事件，sensorsdata-analytics-react-native sdk 默认不开启相关配置，所以 demo 中使用的 sdk 是从官网 fork 后修改过的版本，修改后的 sdk 地址如下

"sensorsdata-analytics-react-native": "<https://gitee.com/clklog/sensorsdata-analytics-react-native-for-clklog.git>"

### sdk 修改详细记录

<https://gitee.com/clklog/sensorsdata-analytics-react-native-for-clklog/commits/master>

### sdk 修改内容如下

#### RNSensorsAnalyticsModule.podspec

 ~~+s.dependency   "SensorsAnalyticsSDK", ">= 4.4.6"+~~

 s.dependency "SensorsAnalyticsSDK/Core", ">= 4.4.6"

 s.dependency "SensorsAnalyticsSDK/Exception", ">= 4.4.6"

### for android

#### android/build.gradle

~~+ compileOnly 'com.sensorsdata.analytics.android:SensorsAnalyticsSDK:6.5.1' +~~

implementation 'com.sensorsdata.analytics.android:SensorsAnalyticsSDK:6.5.1'

#### android/src/main/java/com/sensorsdata/analytics/RNSensorsAnalyticsModule.java

```
public void init(ReadableMap config)
SensorsDataAPI.startWithConfigOptions(getCurrentActivity(), saConfigOptions); 

//开启AppCrash事件跟踪、会话配置
saConfigOptions.enableTrackAppCrash();
saConfigOptions.enableSession(true);
saConfigOptions.setEventSessionTimeout(60);

SensorsDataAPI.startWithConfigOptions(getCurrentActivity(), saConfigOptions);
List<SensorsDataAPI.AutoTrackEventType> list = new ArrayList<>();
list.add(SensorsDataAPI.AutoTrackEventType.APP_START);
list.add(SensorsDataAPI.AutoTrackEventType.APP_END);
list.add(SensorsDataAPI.AutoTrackEventType.APP_VIEW_SCREEN);
list.add(SensorsDataAPI.AutoTrackEventType.APP_CLICK);
SensorsDataAPI.sharedInstance().enableAutoTrack(list);
```

### for ios 启用AppCrash事件跟踪、会话配置

#### ios/SAReactNativeManager.m

```
SAConfigOptions *options = [[SAConfigOptions alloc] initWithServerURL:serverURL launchOptions:nil];
//启用AppCrash事件跟踪、会话配置
options.enableTrackAppCrash = YES;
options.enableSession = YES;
options.eventSessionTimeout = 60;
```
