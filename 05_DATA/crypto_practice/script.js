let crypto = [
  {
    name : "Bitcoin",
    price: 1388.37
  },
  {
    name : "Ethereum",
    price: 716
  },
  {
    name : "Litecoin",
    price: 140
  }
];

function color() {
    let c1 = Math.floor(Math.random()*255);
    let c2 = Math.floor(Math.random()*255);
    let c3 = Math.floor(Math.random()*255);
    return 'rgb('+c1+','+c2+','+c3+')';
}

const page = document.querySelector('body');

crypto.forEach((coin) => {
    page.innerHTML += '<h1>' + coin.name + '</h1>';
    page.innerHTML += '<p>' + coin.price + '</p>';
    page.innerHTML += '<div style="height: 20px; width:' + coin.price + 'px; background-color:'+ color() +'"></div>'

});