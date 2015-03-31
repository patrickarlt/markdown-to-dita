var marked = require('marked');

// create a new custom renderer so we can define the output format (DITA);
var DitaRenderer = new marked.Renderer();

// start overriding methods on the renderer to output the DITA strings
DitaRenderer.code = function(code, language){
  return "\n DITA formatted code block with highlighting";
};

DitaRenderer.blockquote = function(text){
  return "\n DITA formatted pull quote";
};

DitaRenderer.html = function(html){
  return "\n" + html +"\n"; // this is if someone puts HTML/XML in their markdown, just pass it through;
};

DitaRenderer.heading = function(text, level){
  return "\n DITA formatted heading";
};

DitaRenderer.hr = function(){
  return "\n DITA formatted horizontal rule";
};

DitaRenderer.list = function(text, ordered){
  return "\n DITA formatted list";
};

DitaRenderer.listitem = function(text){
  return "\n DITA formatted list item";
};

DitaRenderer.paragraph = function(text){
  return "\n DITA formatted list item";
};

DitaRenderer.table = function(text){
  return "\n DITA formatted table";
};

DitaRenderer.tablerow = function(text){
  return "\n DITA formatted table row";
};

DitaRenderer.tablecell = function(text){
  return "\n DITA formatted table cell";
};

DitaRenderer.strong = function(text){
  return "\n DITA formatted bold text";
};

DitaRenderer.codespan = function(text){
  return "\n DITA formatted single line of code";
};

DitaRenderer.br = function(text){
  return "\n DITA formatted line break";
};

DitaRenderer.del = function(text){
  return "\n DITA formatted deleted text";
};

DitaRenderer.link = function(text){
  return "\n DITA formatted link";
};

DitaRenderer.image = function(text){
  return "\n DITA formatted image";
};

// tell marked what to do
marked.setOptions({
  // render markdown using our custom renderer
  renderer: DitaRenderer,

  // these define how to parse the markdown for the renderer, these are the marked defaults
  gfm: true,
  tables: true,
  breaks: false,
  pedantic: false,
  sanitize: true,
  smartLists: true,
  smartypants: false
});

// read markdown from our test file
var markdown = require('fs').readFileSync('./test.md').toString();

// convert to dita
var dita = marked(markdown);

// output
console.log(dita);