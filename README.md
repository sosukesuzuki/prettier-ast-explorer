# prettier-ast-explorer

[![Netlify Status](https://api.netlify.com/api/v1/badges/1cfd2d99-31b9-4988-ad6e-75589a920de8/deploy-status)](https://app.netlify.com/sites/ast-explorer/deploys)

![screenshot](./resources/screenshot.jpg)

## これは何？

prettier-ast-explorer は[Prettier](https://github.com/prettier/prettier)への貢献のための AST エクスプローラです。

## なぜこれを使うの？

Prettier の開発中に[Playground](https://prettier.io/playground)で AST を見ることがあります。しかし、Playground ではエディタでコードを変更すると AST 側のスクロール位置が一番上までもどってしまったり、ツリーの折りたたみができなかったりと、いくつか使い勝手に問題があります。そのため、新しい AST エクスプローラを開発することを考えました。

## どんな機能があるの？

-   左側のテキストエディタに JavaScript(もしくは TypeScript)でコードを書くと、それをパースした AST が右側に表示されます。
    -   テキストエディタには[Ace Editor]()を使用しています。
    -   JSON ツリーのビューワーには[redux 開発者ツール]()に使われている[react-json-tree]()を使用しています。
-   Prettier に使われているパーサー(`prettier.__debug.parse`)を使用しています。
    -   また、パースは Web Worker 上で行います。
