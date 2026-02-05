const canvas = document.querySelector('#my-canvas');
const ctx = canvas.getContext('2d');

//MARK: Draw a Rectangle

ctx.fillStyle = 'green'
ctx.fillRect(10, 10, 150, 100); //fillRect(x: number, y: number, w: number, h: number)



//MARK: Draw a Circle
ctx.fillStyle = 'red';
ctx.arc(300, 300, 100, 0, Math.PI * 2); //x, r, radius of a Circle, start angle(0), end angle: Math.PI * 2
ctx.fill(); // actually draw/fill the circle

//MARK: Draw Lines : U can add lineWidth = 6 etc
ctx.beginPath();
ctx.strokeStyle = 'cyan' //line/outline shape uses strokeStyle rather than fillStyle
ctx.moveTo(10,10) //start point
ctx.lineTo(300,300); //end point
ctx.stroke() 


//MARK: Draw text
ctx.font = '30px Arial';
ctx.lineWidth = 1;
ctx.fillStyle = 'steelBlue';
ctx.strokeStyle = 'steelBlue';
ctx.fillText('Hello Canvas', 300, 100, 300); //.fillText(text: string, x: number, y: number, maxWidth?: number):
ctx.strokeText('Hello Canvas', 300, 500, 300); 
