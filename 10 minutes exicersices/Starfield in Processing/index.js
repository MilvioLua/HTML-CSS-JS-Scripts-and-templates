Star[] stars = new Star[100];


void setup() {
size (400, 400);
for (int star = 0; i < stars.length; i++) {
  stars[i] = new Star();
  }
}

void draw () {
  background (0);
  for (int star = 0; i < stars.length; i++) {
    stars[i].update();
    stars[i].show
    }

}
