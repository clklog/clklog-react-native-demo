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
yarn add sensorsdata-analytics-react-native@https://gitee.com/clklog/sensorsdata-analytics-react-native-for-clklog.git


配置 package.json 增加如下配置:
"scripts": {
      "postinstall": "node node_modules/sensorsdata-analytics-react-native/SensorsDataRNHook.js -run"
}

iOS 需cd ios && pod install 安装依赖
```

# demo使用的sdk在神策官网sdk集成上有做修改，可fork后自行修改

"sensorsdata-analytics-react-native": "<https://gitee.com/clklog/sensorsdata-analytics-react-native-for-clklog.git>"
