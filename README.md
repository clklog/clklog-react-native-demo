# 神策官方sdk地址

<https://github.com/sensorsdata/react-native-sensors-analytics>

# 神策sdk集成文档

<https://manual.sensorsdata.cn/sa/3.0/zh_cn/tech_sdk_client_rn_install-109576899.html>

# 安装基础依赖

```
yarn
```

# sdk集成

```
1. 引用sdk
yarn add sensorsdata-analytics-react-native@https://gitee.com/clklog/sensorsdata-analytics-react-native-for-clklog.git


2.增加配置
在package.json 增加如下配置:
"scripts": {
      "postinstall": "node node_modules/sensorsdata-analytics-react-native/SensorsDataRNHook.js -run"
}

3.安装依赖
iOS 需 cd ios && pod install 
```

# demo中使用的sdk在神策官方sdk基础上有做修改，修改后的sdk地址如下

"sensorsdata-analytics-react-native": "<https://gitee.com/clklog/sensorsdata-analytics-react-native-for-clklog.git>"
