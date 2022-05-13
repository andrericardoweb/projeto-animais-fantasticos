export default function initFetchBitcoin() {
  const URL = "https://blockchain.info/ticker";
  fetch(URL)
    .then((response) => response.json())
    .then((bitcoin) => {
      const btcPreco = document.querySelector(".btc-preco");
      btcPreco.innerText = (100 / bitcoin.BRL.sell).toFixed(4);
    }).catch(erro => {
      console.log(Error(erro));
    }) 
}
