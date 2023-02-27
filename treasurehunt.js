var coin = Math.floor(Math.random() * 9)
var snake = Math.floor(Math.random() * 9)

if (coin === snake){
  while (coin === snake){
    var coin = Math.floor(Math.random() * 9)
  }
}

alert("Click on table to find a gold coin and win the game")

const coinFinder = (id) => {
  if (id == coin) {
    document.getElementById(coin).innerHTML = "🥇"
    setTimeout(() => {
      alert('You won the game!!!')
      location.reload()
    }, 30);
  }

  if (id == snake) {
    document.getElementById(snake).innerHTML = "🐍"
    setTimeout(() => {
      alert('The 🐍 killed you! You Lose!');
      location.reload();
    }, 30);
    
  }

  if (id != snake && id != coin) {
    document.getElementById(id).innerHTML = "🥌"
  }
}
















