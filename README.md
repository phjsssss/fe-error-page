# fe-error-page

#### 项目运行

1. npm install

2. npm run server （开启json-server 默认api地址：http://localhost:3001 ）

3. npm start （本地运行）

#### 目录结构

├── README.md                   // help
├── __json_server_mock__        // 本地mock服务端
|   └── db.json                 // mock 数据
|       
├── config                      // 配置
├── scripts                     // CRA配置
├── public                      
├── src                         // 资源文件
│   ├── components              // 自定义组件
│   ├── hooks                   // 本地封装的hooks
│   ├── types                   // ts 数据结构
│   ├── utils                   // 自定义的http、use-async
│   ├── App.tsx                 // 首页文件
│   ├── App.less
|   ├── react-app-env.d.ts
|   ├── App.test.tsx
|   ├── index.css
|   ├── index.tsx
|   ├── logo.svg
|   └── reportWebVitals.ts
|   └── setupTests.ts            
├── .env                        // 线上api地址
├── .env.devrlopment            // 本地 json-server api地址
├── .gitignore
├── package-lock.json
├── package.json
└── tsconfig.js

