// main.js
const canvas = document.getElementById("myCanvas");
canvas.width = 200;

const ctx = canvas.getContext('2d');

const car = new Car(100, 100, 30, 50);

// Wait for the image to load, then draw the car
car.image.onload = function () {
    car.draw(ctx);
};
animate();

function animate(){
    car.update();
    canvas.height = window.innerHeight;
    car.draw(ctx);
    requestAnimationFrame(animate); //calls the animate method every second
}
