# 神策官方sdk地址
https://github.com/sensorsdata/react-native-sensors-analytics
https://manual.sensorsdata.cn/sa/3.0/zh_cn/tech_sdk_client_rn_install-109576899.html

# 安装基础依赖
```
yarn
```
# 集成
```
yarn add https://gitee.com/appplugin/sensorsdata-analytics-react-native.git

配置 package.json 增加如下配置:
"scripts": {
      "postinstall": "node node_modules/sensorsdata-analytics-react-native/SensorsDataRNHook.js -run"
}

iOS 需cd ios && pod install 安装依赖
```

# 自定义版本 可以fork后再行修改
"sensorsdata-analytics-react-native": "https://gitee.com/appplugin/sensorsdata-analytics-react-native.git"


