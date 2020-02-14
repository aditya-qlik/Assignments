/* eslint-disable no-console */
document.body.innerHTML = `<div><center>
<h3>the Math.max() returns ${Math.max()}</h3>
<h3>the Math.max(5,9,3,7,6) returns ${Math.max(5, 9, 3, 7, 6)}</h3>
<h3> Math.floor(2.666666) returns ${Math.floor(2.666666)}</h3>
<h3>console.log('Aditya') returns ${console.log('Aditya')}</h3>
<h3>parseFloat() returns ${parseFloat()}</h3>
<h3>parseFloat('23.7525') returns ${parseFloat('23.7525')}</h3>
<h3>parseInt('23.7525') returns ${parseInt('23.7525')}</h3>
<h3>Date.now() returns ${Date.now()} its milliseconds elapsed since January 1, 1970, 00:00:00 UTC.</h3>
<h3></h3>
</center></div>`;
console.log("document.querySelector('div') returns ");
const out= document.querySelector('div');
console.log( out );
