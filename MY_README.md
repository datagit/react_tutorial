# My noted
- https://www.taniarascia.com/getting-started-with-react/
- CSS Primitive UI | MIT License: https://taniarascia.github.io/primitive/css/main.css
- ESLint: https://viblo.asia/p/hay-su-dung-eslint-cho-du-an-cua-ban-bJzKm07O59N
- react-scripts: https://create-react-app.dev/docs/getting-started/
- react app structure folder conventions: https://medium.com/@Charles_Stover/optimal-file-structure-for-react-applications-f3e35ad0a145
- cheat sheet: https://reactcheatsheet.com/
- testing: https://reactjs.org/docs/testing-recipes.html#setup--teardown
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