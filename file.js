var vaporwave = false;
function destroywebpage(){
  document.body.setAttribute('style', 'background: none;')
  document.body.innerHTML = '';
  var paragraph = document.createElement('p');
  paragraph.innerHTML = "It's gone";
  document.body.appendChild(paragraph);
};
function wave(){
  if (vaporwave){
    document.getElementById('waves').setAttribute('style', 'font-family: Times New Roman; letter-spacing: normal; color: #000000;');
    document.getElementById('bellbutton').innerHTML = 'taco bell OFF';
    document.getElementById('logopic').setAttribute('src', 'images/logo.png')
    document.body.style.backgroundImage='url("images/background.png")'
    vaporwave = false;
  } else {
    document.getElementById('waves').setAttribute('style', 'font-family: MS Gothic; letter-spacing: 3px; color: #FD1D53;');
    document.getElementById('bellbutton').innerHTML = 'taco bell ON';
    document.getElementById('logopic').setAttribute('src', 'images/tacologo.png');
    document.body.style.backgroundImage='url("images/tacobackground.png")'
    vaporwave = true;
  };
};
