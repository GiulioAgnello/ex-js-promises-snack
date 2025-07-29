// Crea la funzione lanciaDado() che restituisce una Promise che, dopo 3 secondi,
//  genera un numero casuale tra 1 e 6. Tuttavia, nel 20% dei casi, il dado si "incastra" e la Promise va in reject.

function lanciaDado() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      // 20% di probabilità che il dado si incastri
      if (Math.random() < 0.2) {
        reject("Il dado si è incastrato!");
      } else {
        // Numero casuale tra 1 e 6
        const numero = Math.floor(Math.random() * 6) + 1;
        resolve(`E' uscito il numero = ${numero}`);
      }
    }, 3000);
  });
}

lanciaDado()
  .then((messaggio) => console.log(messaggio))
  .catch((error) => console.error(error));

// Bonus: HOF con closure per memorizzare l'ultimo lancio
// Modifica la funzione in creaLanciaDado(), che restituisce una closure che memorizza l'ultimo risultato.
// Se il numero esce due volte di fila, stampa "Incredibile!".

function creaLanciaDado() {
  let ultimoRisultato = null;
  return function () {
    return lanciaDado().then((messaggio) => {
      // assegno numero
      const numeroEstratto = parseInt(messaggio.match(/\d+/)[0]);
      if (numeroEstratto === ultimoRisultato) {
        console.log("Incredibile!");
      }
      ultimoRisultato = numeroEstratto;
      return messaggio;
    });
  };
}

// Esempio di utilizzo:
const lanciaConMemoria = creaLanciaDado();
lanciaConMemoria().then(console.log).catch(console.error);
lanciaConMemoria().then(console.log).catch(console.error);
