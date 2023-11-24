// Consegna:
// Data una lista della spesa, stampare sulla pagina (anche brutalmente, basta che si vedano) gli elementi della lista individualmente con un ciclo while.
// Consigli:
// - Ricordiamoci di inizializzare la variabile di contatore prima dell’inizio del ciclo while
// - Ricordiamoci di incrementare il contatore, o comunque di inserire una condizione di uscita, all’interno ciclo while.


const listaUl = document.querySelector(".listaSpesa")

// creo lista spesa
const listaSpesa = ["pomodori", "funghi", "pizza", "vitello", "cipolle"]

// scorro lista della spesa
let i = 0;

while (i < listaSpesa.length) {
    // salvo l'elemento iesimo della lista
    let itemIesimo = listaSpesa[i];

    console.log(itemIesimo);
    i++;
    
    // creiamo il LI
    const elementLi = document.createElement("li");
    // inseriamo dentro il Li il contenuto
    elementLi.append(itemIesimo);
    // inseriamo il nuovo Li creato dentro UL
    listaUl.append(elementLi);
    
}