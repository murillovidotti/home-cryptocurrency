var btc = document.getElementById("bitcoin");
var eth = document.getElementById("ethereum");
var ada = document.getElementById("cardano");

var settings = {
    "async": true,
    "scrossDomain": true,
    "url": "https://api.coingecko.com/api/v3/simple/price?ids=bitcoin%2Cethereum%2Ccardano&vs_currencies=brl",
    "method": "GET",
    "headers": {}
}

$.ajax(settings).done(function (response){
    btc.innerHTML = response.bitcoin.brl;
    eth.innerHTML = response.ethereum.brl;
    cardano.innerHTML = response.cardano.brl;
});