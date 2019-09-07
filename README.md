# AST Explorer

[![Netlify Status](https://api.netlify.com/api/v1/badges/1cfd2d99-31b9-4988-ad6e-75589a920de8/deploy-status)](https://app.netlify.com/sites/ast-explorer/deploys)

An AST explorer for me.

![screenshot](./resources/screenshot.jpg)

## Features

-   Rich text editor ([Ace Editor](https://ace.c9.io))
-   Show [ESTree](https://github.com/estree/estree) from text with [@babel/parser](https://babeljs.io/docs/en/babel-parser).
    -   use the parser via [Prettier](https://prettier.io).
-   Support JavaScript / TypeScript
-   Rich JSON Viewer with [json-react-tree](https://www.npmjs.com/package/react-json-tree).

## TODO

-   [ ] Parse in Web Worker
-   [ ] Desktop PWA
-   [ ] Use [vim.wasm](https://github.com/rhysd/vim.wasm)
-   [x] Bundle with [Webpack](https://github.com/webpack/webpack)
