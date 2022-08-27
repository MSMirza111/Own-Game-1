class Ball{
 
 constructor(x,y,img){
 this.img = img;
 this.body = Bodies.circle(x,y,20);
 World.add(world,this.body);

}
display(){
 var pos = this.body.position;
 push();
 translate(pos.x,pos.y);
 rotate(this.body.angle);
 imageMode(CENTER);
 image(this.img,0,0,10,10);
 



}

}