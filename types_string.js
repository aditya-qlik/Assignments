/* eslint-disable*/
console.log('working');
const name = `Aditya`
const first = "double-quotes";
const second = 'Single-quotes';
const third = `backtick`;
const job = `full-stack developer`
// const sentence='i'm a developer';   Gives ERROR it can be corrected by using ""
const sentence = 'i\'m a developer \\\\'; // this is called escaping; to print \ we need to put \\
const sentence1 = "She's \"so cool\"";
const sentence2 = `I'm a ${job}`;
const sentence3 = 'I am '+name+"and I'm a "+job;
const song='oh\
yeah\
\
i like\
pizzazz';// '/' is required to maintain the line break
const song1 = `oh
yeah

i like
pizzazz`;

const product=`this is solved in backtick 20*30=${20*30}`;

const html =`
<div>
<h1><center>Aditya<center></h1>
<h3><center>${product}</center><center></h3>

<p>This is a trial for html in backtick</p>
</div>`
console.log(sentence);
console.log(sentence1);
console.log(sentence2);
console.log(song);
console.log(song1);
document.body.innerHTML=html;