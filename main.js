var canvas = new fabric.Canvas('myCanvas');
 var x= document.getElementById("myAudio");
block_object=""
function new_image()
{
	fabric.Image.fromURL("BirthdayImage.jpg",function(img) {
        block_object=img
        block_object.scaleToWidth(600)
        block_object.scaleToHeight(400)
        block_object.set({top:0,left:0})
    })
	canvas.add(block_object)
}

function playSound(){
	x.play()
}
onload=new_image()