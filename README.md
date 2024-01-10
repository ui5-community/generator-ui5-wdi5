# generator-ui5-wdi5

[yeoman](https://yeoman.io/) generator for scaffolding [wdi5](https://github.com/ui5-community/wdi5) e2e test configuration and sample tests into a UI5 app.
It is designed to be used in conjunction with [`easy-ui5`](https://github.com/SAP/generator-easy-ui5/) and is integrated in the [UI5 JS app](https://github.com/ui5-community/generator-ui5-app)- and the [UI5 TS app](https://github.com/ui5-community/generator-ui5-ts-app)-generator.

Under the hood,  `generator-ui5-wdi5`  wraps [the command `npm init wdi5`](https://github.com/ui5-community/create-wdi5) and provides a prompt-based CLI on top.

```shell
┌───────────────────────────┐
│                           │
│    generator-easy-ui5     │
│      aka "easy-ui5"       │
│                           │
│  ┌─────────────────────┐  │
│  │                     │  │
│  │  generator-ui5-wdi5 │  │
│  │                     │  │
│  │ ┌─────────────────┐ │  │
│  │ │                 │ │  │
│  │ │  npm init wdi5  │ │  │
│  │ │                 │ │  │
│  │ └─────────────────┘ │  │
│  │                     │  │
│  └─────────────────────┘  │
│                           │
└───────────────────────────┘
```



## Usage (with easy-ui5)

```shell
$> npm i -g yo generator-easy-ui5
$> yo easy-ui5 wdi5

     _-----_
    |       |    ╭──────────────────────────╮
    |--(o)--|    │    Welcome to the wdi5   │
   `---------´   │        generator!        │
    ( _´U`_ )    ╰──────────────────────────╯
    /___A___\   /
     |  ~  |
   __'.___.'__
 ´   `  |° ´ Y `

? path where the config file 'wdio.conf.(j|t)s' file
  should be stored (relative to UI5 project root) (./webapp/test/e2e/)
...
```

## License

This work is dual-licensed under [Apache 2.0 and the Derived Beer-ware 🍺 License](LICENSE). 
The official license will be Apache 2.0 but finally you can choose between one of them if you use this work.
