class Marcianito{
    constructor(x,y){
        this.x = x;
        this.y = y;
    }
    w = 30;
    h = 30;
    Movimiento(){

    }
    Disparar(){

    }
}
//-----------------------------------------------
class Nave{
    constructor(x,y){
        this.x = x;
        this.y = y;
    }
    w = 30;
    h = 30
    url = "./assets/download.jpg";
    coolDown = 0
    maxCoolDown = 30;

    CatgarAssetsNave(){
        this.imgNave = loadImage(this.url)
    }

    DibujarNave(){
        image(this.imgNave,this.x,this.y,this.w,this.h);
    }

    ControlNave(arrayProyectiles){
      if (keyIsDown(65) && this.x > 0) {
        this.x = this.x-10;
        console.log("izda");
      }
      if(keyIsDown(68) && this.x < 1280){
        this.x = this.x +10;
        console.log("dcha");
      }
      if(keyIsDown(32)){
        this.Disparar(arrayProyectiles);
      }
    }
    Disparar(arrayProyectiles){
        
        if(this.coolDown !=0){
            this.coolDown--;
        }
        else{
            arrayProyectiles.push(new Bala(this.x));
            this.coolDown = this.maxCoolDown;
        }
    }
}
//---------------------------------------------
class Bala{
    y = 690
    constructor(x){
        this.x=x;
    }
    DibujarBala(){
        fill("yellow")
        rect(this.x,this.y,4,20);
        noFill();
    }
    Mover(){
        this.y-=3;
    }
}
//---------------------------------------------
var arrayProyectiles = [];
var jugador = new Nave(640,700);

function preload(){
    jugador.CatgarAssetsNave();
}

function setup(){
    createCanvas(1280,720);
    background(0);
    
}
function draw(){
    background(0);
    jugador.DibujarNave();
    jugador.ControlNave(arrayProyectiles);
    arrayProyectiles.forEach(proyectil => {
        proyectil.DibujarBala();
        proyectil.Mover();
    });
}