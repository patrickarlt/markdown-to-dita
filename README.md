# Markdown to DITA converter

Sample showing a potential path for using `marked` to convert Markdown to DITA.

1. download repo
2. `npm install`
3. `node index.js`

## How it works

This uses a features of the [marked](https://github.com/chjj/marked) Node module to create a custom rendering of Markdown. Usually this is used for things like small customization of headers or defining syntax highlighting but you can also use it to convert Markdown to something else.

Check out [index.js](https://github.com/patrickarlt/markdown-to-dita/blob/master/index.js) to see how this is done.

Libraries similar to marked in other languages include [Mistune (Python)](http://mistune.readthedocs.org/en/latest/) and [Redcarpet (Ruby)](https://github.com/vmg/redcarpet)