# My noted
- https://www.taniarascia.com/getting-started-with-react/
- CSS Primitive UI | MIT License: https://taniarascia.github.io/primitive/css/main.css
- ESLint: https://viblo.asia/p/hay-su-dung-eslint-cho-du-an-cua-ban-bJzKm07O59N
- react-scripts: https://create-react-app.dev/docs/getting-started/
- react app structure folder conventions: https://medium.com/@Charles_Stover/optimal-file-structure-for-react-applications-f3e35ad0a145
- react redux: 
- https://insights.innovatube.com/redux-th%E1%BA%ADt-l%C3%A0-%C4%91%C6%A1n-gi%E1%BA%A3n-ph%E1%BA%A7n-1-76a3fa2c31ab
- https://viblo.asia/p/redux-la-gi-va-tai-sao-can-dung-redux-RnB5pGJJlPG
```
my-app
├── README.md
├── node_modules
├── package.json
├── .gitignore
├── public
│   ├── favicon.ico
│   ├── index.html
│   └── manifest.json
└── src
    ├── App.css
    ├── App.js
    ├── App.test.js
    ├── index.css
    ├── index.js
    ├── logo.svg
    └── serviceWorker.js
```
```$xslt
my-app
├── build
├── node_modules
├── public
│   ├── favicon.ico
│   ├── index.html
│   └── manifest.json
├── src
│   ├── assets
│   │   └──images
│   │      └── logo.svg
│   ├── components
│   │   └── app
│   │       ├── app.css
│   │       ├── app.js
│   │       └── app.test.js
│   │   └── common
|   |       └── avatar
│   │           ├── avatar.css
│   │           ├── avatar.js
│   │           └── avatar.test.js
│   │           └── avatarAPI.js(if have)
│   ├── utils
│   ├── index.css
│   ├── index.js
│   └── service-worker.js
├── .gitignore
├── package.json
└── README.md
```