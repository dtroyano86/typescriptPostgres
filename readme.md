npm init -y
git init
npm i -s express sequelize vue vue-router pg
npm i -D webpack webpack-cli webpack-dev-server ts-loader css-loader vue-loader vue-template-compiler babel-loader @babel/core @babel/preset-env
npm i -D html-webpack-plugin @types/bluebird @types/express @types/node @types/sequelize @types/validator typescript 
npm i -D eslint eslint-config-airbnb-base eslint-config-prettier eslint-plugin-vue sass @typescript-eslint/parser @typescript-eslint/eslint-plugin
npm i -D mocha chai chai-http eslint-plugin-mocha husky prettier pretty-quick eslint-plugin-import eslint-import-resolver-typescript

.eslintrc
.eslintignore
tsconfig.json

Build the server
npm run build:dev

Start the server
npm run start:dev

Come back to workbox