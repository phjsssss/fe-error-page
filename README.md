# fe-error-page

#### 项目运行

1. npm install

2. npm run server （开启json-server 默认api地址：http://localhost:3001 ）

3. npm start （本地运行）

#### 目录结构

├─.env                          // 线上api地址。
├─.env.development              // 本地 json-server api地址  
├─.gitignore  
├─README.md  
├─package-lock.json  
├─package.json  
├─tsconfig.json  
├─src  
|  ├─App.less  
|  ├─App.test.tsx  
|  ├─App.tsx  
|  ├─index.css  
|  ├─index.tsx  
|  ├─logo.svg  
|  ├─react-app-env.d.ts  
|  ├─reportWebVitals.ts  
|  ├─setupTests.ts  
|  ├─utils
|  |   ├─http.ts              // 自定义的http  
|  |   └use-async.ts          // 自定义的use-async, 增加loading健壮性  
|  ├─types  
|  |   └index.ts              // ts 数据结构  
|  ├─hooks  
|  |   └index.ts              // 本地封装的hooks  
|  ├─components               // 自定义组件  
|  |     ├─code-list.tsx  
|  |     ├─error-tips.tsx  
|  |     └lib.tsx  
├─scripts  
|    ├─build.js  
|    ├─start.js  
|    └test.js  
├─public  
|   ├─favicon.ico  
|   ├─index.html  
|   ├─logo192.png  
|   ├─logo512.png  
|   ├─manifest.json  
|   └robots.txt  
├─config  
├─__json_server_mock__         // 本地mock服务端  
|          └db.json  
