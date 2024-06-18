var song = "";


/*Crear la función precargar() */
function preload()
{
	/*Llamar la canción */
	song = loadSound("demons.mp4");
}

scoreRightWrist = 0;
scoreLeftWrist = 0;

rightWristX = 0;
rightWristY = 0;

leftWristX = 0;
leftWristY = 0;

/*Crear la función configurar() */
function setup() {
	/*Crear el lienzo con 600 ancho y 500 de alto */
	canvas =  createCanvas(600, 500);
	/*Colocar el lienzo en el centro */
	canvas.center();
	/*Agregar función para crear captura para acceder a la cámara web. */
	video = createCapture(VIDEO);
	/*Esconder video */
	video.hide();

	poseNet = ml5.poseNet(video, modelLoaded);
	poseNet.on('pose', gotPoses);
}

/*Crear función dibujar() */
function draw() {
	/*Cargar imágen en el lienzo, con posición x como 0, y como 0, ancho 600 y alto 500 */
	image(video, 0, 0, 600, 500);
}

/*Crear función reproducir()  */
function play()
{
	/* Agregar la canción y la función predefinida de p5.js que comienza a reproducir la canción */
	song.play();

}
