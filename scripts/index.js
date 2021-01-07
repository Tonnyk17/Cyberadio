const cancion = document.querySelector('audio');
const boton = document.querySelector('div.Card_button');
const botonN = document.querySelector('.image');
const botonL = document.querySelector('.image1');
function MediaPlayer(config){
  this.media = config.el;
}
MediaPlayer.prototype.play = function(){
  (this.media.paused) ? this.media.play() : this.media.pause();
}
const player = new MediaPlayer({el: cancion});


function Songs(titleSong,artistSong,timeSong,songAudio,songImage){
  this.titleSong = titleSong;
  this.artistSong = artistSong;
  this.timeSong = timeSong;
  this.songAudio = songAudio;
  this.songImage = songImage;
}
function listSongs(titulo,artista,imagen,cancion){
  this.titulo = titulo;
  this.artista = artista;
  this.imagen = imagen;
  this.cancion = cancion;
}

  let audioSong = document.querySelector('audio');
  let imagenSong = document.querySelector('.Card_image');
  let artist = document.getElementById('artist');
  let songTitle = document.querySelector('.Card_title');
  let botonImage = document.getElementById('play/pause')
  let Tarjeta = document.getElementById('Card');
  let songList = document.querySelector('.Card-song');
  let containersButton;

    let songArray = ['Music/Never.mp3','Music/Black.mp3','Music/Ballad.mp3','Music/Chippin.mp3','Music/Like.mp3'];
    let imagesArray = ['https://i.postimg.cc/Y2nqbRys/never-fade-away.jpg','https://i.postimg.cc/hv5Dv4dB/Black.jpg','https://i.postimg.cc/Dzrw6Ktr/Ballad.jpg','https://i.postimg.cc/QxvNrtDg/chippin.jpg','https://i.postimg.cc/wHVt1cFJ/Like.jpg'];
    let titulos = ['Never Fade Away','Black Dog','The Ballad Of Buck Ravers',"Chippin' In",'A Like Supreme'];
    let artista = ['SAMURAI, Refused','SAMURAI','SAMURAI','SAMURAI','SAMURAI'];
    let duracion =['3:10','4:23','3:48'];
    let indice = 0;
   
    let arrayContainer = [];
    let contenedorP = document.querySelector('.song-menu');
    boton.onclick = () => {
      player.play();
      
    }
    for(let i=0;i<songArray.length;i++)
    {
      //Objeto
      let datos = new listSongs(titulos[i],artista[i],imagesArray[i],songArray[i]);
      
      //Contenedores y elementos
      let contenedores = document.createElement('div');
      let titles = document.createElement('h2');
      let tituloContenido = document.createElement('h2');
      let textInfo = document.createElement('p');
      let textInfoContain = document.createElement('p');
      let infoContainer = document.createElement('div');
      let iconContainer = document.createElement('img');
      let iconCon = document.createElement('span');
      containersButton = contenedores;
      //Atributos y asignacion de atributos
      let titleAttrib = document.createAttribute('class');
      let containerAttrib = document.createAttribute('class');
      let textAttrib = document.createAttribute('class');
      let infoCoAttrib = document.createAttribute('class');
      let iconAttrib = document.createAttribute('class');
      let containerID = document.createAttribute('id');
      containerID.value = i;
      
      containerAttrib.value = 'Card-song';
      titleAttrib.value = 'Card-song-title';
      textAttrib.value = 'Card-song-text';
      infoCoAttrib.value = 'Card-song-container';
      iconAttrib.value = 'Card-icon';
    
      //Implementacion de datos
      
      tituloContenido.innerText= datos.titulo;
      textInfoContain.innerText = datos.artista;
      iconContainer.src = datos.imagen;
    
      let titlesContain = document.createTextNode(tituloContenido.innerText);
      let artistsContain = document.createTextNode(textInfoContain.innerText);
    
      //Implementacion de contenedores
      contenedores.setAttributeNode(containerAttrib);
      contenedores.setAttributeNode(containerID);
      titles.setAttributeNode(titleAttrib);
      textInfo.setAttributeNode(textAttrib);
      infoContainer.setAttributeNode(infoCoAttrib);
      iconContainer.setAttributeNode(iconAttrib);
    
     
      contenedores.appendChild(iconContainer);
      titles.appendChild(titlesContain);
      textInfo.appendChild(artistsContain);
      infoContainer.appendChild(titles);
      infoContainer.appendChild(textInfo);
      contenedores.appendChild(infoContainer);
      contenedorP.appendChild(contenedores);
      
   
      arrayContainer.push(contenedores);
      let cancionAnterior = i;
      console.log(arrayContainer);
      let mouse;
      contenedores.onmouseenter= () =>{
         mouse = i;
         arrayContainer[mouse].style.backgroundColor = 'rgba(10, 216, 240,0.5)';
         console.log(mouse);
         
        }
      contenedores.onmouseleave= () =>{
       
        arrayContainer[mouse].style.backgroundColor = 'rgba(0, 0, 0,0.8)';
      }
      contenedores.onclick= () => {
        indice = i;
        changeSong();
      };
      
     
     cancionAnterior = i;
     console.log(cancionAnterior);
     
      
       
  
    
    }
    
    
function changeImage(){
  
    if(botonImage.src.match("Play")){
      botonImage.src = 'https://i.postimg.cc/ydnYqy6W/Pause.png';
      Tarjeta.style.cssText= 'border: 2px #0ad8f0 solid; box-shadow: 0px 0px 6px 1px #0ad8f0;';
      botonImage.style.cssText= ' border: 2px solid  #0ad8f0; background-color:#0ad8f0;'
      botonN.style.cssText= 'filter: invert(0.9) sepia(2) hue-rotate(100deg) saturate(1000%);'; 
      botonL.style.cssText= 'filter: invert(0.9) sepia(2) hue-rotate(100deg) saturate(1000%);'; 
      arrayContainer[indice].style.backgroundColor = 'rgba(10, 216, 240,0.5)';
    }
    else{
      botonImage.src = 'https://i.postimg.cc/RhFCvJqd/Play.png';
      Tarjeta.style.cssText = 'box-shadow: 0px 0px 6px 1px rgb(255, 255, 0); border: 2px rgb(255, 255, 0) solid; ';
      botonImage.style.cssText= ' border: 2px solid  rgb(255, 255, 0); background-color:rgb(255, 255, 0);'
      botonN.style.cssText= 'invert(0.5) sepia(1) hue-rotate(20deg) saturate(5000%);';
      botonL.style.cssText= 'invert(0.5) sepia(1) hue-rotate(20deg) saturate(5000%);';  
      arrayContainer[indice].style.backgroundColor = "rgba(255, 255, 0,0.5)";
    }
}

function changeSong(){  

    console.log(indice);

      let newSongs = new Songs(titulos[indice],artista[indice],duracion[indice],songArray[indice],imagesArray[indice]);
      songTitle.innerText = newSongs.titleSong;
      artist.innerText = newSongs.artistSong;
      audioSong.src = newSongs.songAudio;
      console.log(newSongs.songAudio);
      player.play();
      imagenSong.src = newSongs.songImage;
      botonImage.src = 'imagenes/Pause.png';
      Tarjeta.style.cssText= 'border: 2px #0ad8f0 solid; box-shadow: 0px 0px 6px 1px #0ad8f0;';
      botonImage.style.cssText= ' border: 2px solid  #0ad8f0; background-color:#0ad8f0;';
      botonN.style.cssText= 'filter: invert(0.9) sepia(2) hue-rotate(100deg) saturate(1000%);'; 
      botonL.style.cssText= 'filter: invert(0.9) sepia(2) hue-rotate(100deg) saturate(1000%);'; 
      arrayContainer[indice].style.backgroundColor = 'rgba(10, 216, 240,0.5)';
      
     
     
      
    
    

     
}  
  
audioSong.onended= () =>{
  indice++;
  
  changeSong();
};
botonN.onclick= () =>{
  indice++;
  arrayContainer[indice-1].style.backgroundColor = 'rgba(0, 0, 0,0.8)';
  if(indice+1 > songArray.length){
    indice = 0;

  }
  changeSong();
}  
botonL.onclick= () =>{
  indice--;
  arrayContainer[indice+1].style.backgroundColor = 'rgba(0, 0, 0,0.8)';
  if(indice < 0){
    indice = songArray.length-1;
  }
  changeSong();
}

