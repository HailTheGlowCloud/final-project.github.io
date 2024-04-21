function handleVolunteerNowClick() {
    var element = document.getElementById("contact-form");
    element.classList.remove("invisible");
  }
  function visibleLinks() {
    var element = document.getElementById("links");
    element.classList.remove("invisible");
  }
  function convertCurrency() {
    const host = 'api.frankfurter.app';
  fetch(`https://${host}/latest?amount=1&from=USD&to=CAD`)
    .then(resp => resp.json())
    .then((data) => {
      alert(`1 USD = ${data.rates.CAD} CAD`);
    });
  }
  function convertCurrencyGBP() {
    const host = 'api.frankfurter.app';
  fetch(`https://${host}/latest?amount=1&from=USD&to=GBP`)
    .then(resp => resp.json())
    .then((data) => {
      alert(`1 USD = ${data.rates.GBP} GBP`);
    });
  }
  function convertCurrencyAUD() {
    const host = 'api.frankfurter.app';
  fetch(`https://${host}/latest?amount=1&from=USD&to=AUD`)
    .then(resp => resp.json())
    .then((data) => {
      alert(`1 USD = ${data.rates.AUD} AUD`);
    });
  }
  function convertCurrencyILS() {
    const host = 'api.frankfurter.app';
  fetch(`https://${host}/latest?amount=1&from=USD&to=ILS`)
    .then(resp => resp.json())
    .then((data) => {
      alert(`1 USD = ${data.rates.ILS} ILS`);
    });
  }
  function convertCurrencyEUR() {
    const host = 'api.frankfurter.app';
  fetch(`https://${host}/latest?amount=1&from=USD&to=EUR`)
    .then(resp => resp.json())
    .then((data) => {
      alert(`1 USD = ${data.rates.EUR} EUR`);
    });
  }
  function convertCurrencyJPY() {
    const host = 'api.frankfurter.app';
  fetch(`https://${host}/latest?amount=1&from=USD&to=JPY`)
    .then(resp => resp.json())
    .then((data) => {
      alert(`1 USD = ${data.rates.JPY} JPY`);
    });
  }
  function convertCurrencyINR() {
    const host = 'api.frankfurter.app';
  fetch(`https://${host}/latest?amount=1&from=USD&to=INR`)
    .then(resp => resp.json())
    .then((data) => {
      alert(`1 USD = ${data.rates.INR} INR`);
    });
  }
