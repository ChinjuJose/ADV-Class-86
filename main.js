var canvas = new fabric.Canvas('myCanvas');
 var song= document.getElementById("myAudio");

function newImage()
{
	fabric.Image.fromURL("BirthdayImage.jpg", function (Img) {
		imgObj = Img;

		imgObj.scaleToWidth(100);
		imgObj.scaleToHeight(420);
		imgObj.set({
			top: 0,
			left: 0
		});
		canvas.add(imgObj);

	});
	
}

function playSound(){
	song.play()
}
