class RainDrops{
 constructor(){

    var charstring = "ABCDEFGHIJKLMNOPQRSTUVWXYZ!@#$%^&*()1234567890"
    this.x = Math.round(random(0,1200))
    this.y = Math.round(random(-500,-50))
    this.yspeed = Math.round(random(0,20))
    var num = Math.round(random(0,46))
    this.displaychar = charstring.charAt(num)

 }
 fall(){
    this.y = this.y+this.yspeed;
    if(this.y>height){
        this.y = random(-200,-100)
    }
 }   
 

 display(){
    stroke ("yellow")
    textSize(random(12,20))
    text(this.displaychar,this.x,this.y)
 }
}