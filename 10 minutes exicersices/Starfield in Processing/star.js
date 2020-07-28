class Star {
  float x;
  float y;
  float z;

  Star() {
    x = random(0, widht);
    y = random(0, height);
    z = random(0, widht);
  }

  void update(){

  }

  void show(){
    gill(255);
    noStroke();
    ellipse(x, y, 8, 8);
  }

}
