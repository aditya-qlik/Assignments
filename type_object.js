const person = {
        fname: 'Aditya',
        lname: 'Kumar',
        age: 27,
};
document.body.innerHTML = `
<div>
<h1><center>My Info.</center></h1>
<h2>My name is ${person.fname} ${person.lname}</h2>
<h3>My age is ${person.age}</h3>
</div>`;
