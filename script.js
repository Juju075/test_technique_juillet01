const currentTemperatureItemsEl = document.getElementById(
  "current-temperature-items"
);
let dataCleaned = [];
let codeStation; // start empty
let i = 0;

//Window setInterval()
setInterval(() => {
  const time = new Date();
  const month = time.getMonth();
  const date = time.getDate();
  const day = time.getDay();
  const hour = time.getHours();
  const minutes = time.getMinutes();
});

getWaterData(); // auto load func

function getWaterData() {
  let code_departement = 33;
  let date_mesure = "2022-06-01";

  fetch(
    `https://hubeau.eaufrance.fr/api/v1/temperature/chronique?code_departement=${code_departement}&date_debut_mesure=${date_mesure}&sort=desc&fields=code_station,libelle_station,libelle_commune,date_mesure_temp,resultat`
  )
    //chainage resolute
    .then((res) => res.json())
    .then((data) => {
      console.log(data);
      showTemperatureData(data);
    });
}

function showTemperatureData(data) {
  data.forEach((element) => {
    let code_station = data.code_station[i];
    console.log(code_station);

    if (codeStation === code_station) {
      i = i++;
      console.log(i);
    } else {
      codeStation = "nouvelle valeur";
      dataCleaned.push(element);
    }
  });

  let { station, temperature, date_mesure } = "";
  //Template to inner. CARD libelle station temperature

  /**
   * La station de ${station} affiche une témperature de ${temperature} degree
   * denniere mesure le ${date_mesure}
   */

  //CARD
  let otherStation = ""; //html iteration card.

  dataCleaned.forEach((element) => {
    if (element === 0) {
      //Template version vide.
    } else {
      //Template iteration cards
      otherStation += ``;
    }
  });

  //Template list CARDS
  currentTemperatureItemsEl.innerHTML = otherStation;
}
