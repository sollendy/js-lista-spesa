// creo una lista della spesa in un array
// creo una variabile contatore equivalente al valore 0 del array
// improvviso perché non so più come ordinare le operazioni

// creo una lista della spesa in un array
const listaSpesa = [' banane;', ' arance;', ' mele;', ' uova;', ' latte di soia;', ' riso;', ' lattuga;', ' sparacello;', ' finocchio;', ' carote.'];
let listaEl = document.getElementById("lista");
let i = 0;

//console.log(listaSpesa);

while (i < listaSpesa.length) {
    let newLiElement = document.createElement('li');
    listaEl.append(newLiElement);
    newLiElement.innerHTML = (listaSpesa[i] + "<br>");
    //console.log(listaSpesa[i]);
    //document.writeln(listaSpesa[i]);
    i++;
}