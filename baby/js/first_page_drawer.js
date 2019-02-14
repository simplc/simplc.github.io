var canvas = document.getElementById("cavs");
const WIDTH = window.innerWidth;
const HEIGHT = window.innerHeight;
canvas.setAttribute("width", WIDTH);
canvas.setAttribute("height", HEIGHT);
var context = canvas.getContext("2d");

var start =
{
    loves: [],
    DURATION: 30,
    begin: function()
    {
        this.createLove();
    },
    createLove: function()
    {
        for (var i = 0; i < WIDTH / 59; i++)
        {
            var love = new Love();
            this.loves.push(love);
        }
        setInterval(this.drawLove.bind(this), this.DURATION);
    },
    drawLove: function()
    {
        context.clearRect(0, 0, WIDTH, HEIGHT);
        for (var key in this.loves)
        {
            if (key % 2 == 0)
            {
                this.loves[key].draw2();
            }
            else
            {
                this.loves[key].draw();
            }
        }
    }
}
function Love()
{
    var me = this;
    function rand()
    {
        me.maxScale = (Math.random() * 3.2 + 1.2) * WIDTH / 521;
        me.curScale = 1.2 * WIDTH / 521;
        me.x = Math.floor(Math.random() * WIDTH - 40);
        me.y = Math.floor(HEIGHT - Math.random() * 200);
        me.ColR = Math.floor(Math.random() * 255);
        me.ColG = Math.floor(Math.random() * 255);
        me.ColB = Math.floor(Math.random() * 255);
        me.alpha = Math.random() * 0.2 + 0.4;
        me.vector = Math.random() * 5 + 0.4;
    }

    // drawing heart
    (function(){rand();} ());
    me.draw = function()
    {
        if (me.alpha < 0.01) rand();
        if(me.curScale < me.maxScale) me.curScale += 0.3;
        x = me.x;
        y = me.y;
        scale = me.curScale;
        context.fillStyle = "rgba(" + me.ColR + "," + me.ColG + "," + me.ColB + "," + me.alpha + ")";
        context.shadowBlur = 10;
        context.shadowColor = "rgb(" + me.ColR + "," + me.ColG + "," + me.ColB + ")";
        context.beginPath();
        context.bezierCurveTo( x + 2.5*scale, y + 2.5*scale, x + 2.0*scale, y, x, y );
        context.bezierCurveTo( x - 3.0*scale, y, x - 3.0*scale, y + 3.5*scale,x - 3.0*scale,y + 3.5*scale );
        context.bezierCurveTo( x - 3.0*scale, y + 5.5*scale, x - 1.0*scale, y + 7.7*scale, x + 2.5*scale, y + 9.5*scale );
        context.bezierCurveTo( x + 6.0*scale, y + 7.7*scale, x + 8.0*scale, y + 5.5*scale, x + 8.0*scale, y + 3.5*scale );
        context.bezierCurveTo( x + 8.0*scale, y + 3.5*scale, x + 8.0*scale, y, x + 5.0*scale, y );
        context.bezierCurveTo( x + 3.5*scale, y, x + 2.5*scale, y + 2.5*scale, x + 2.5*scale, y + 2.5*scale );
        context.fill();
        context.closePath();
        me.y -= me.vector;
        me.alpha -= (me.vector / 2.9 * 1.5 / HEIGHT);
    }
    // drawing star
    me.draw2 = function()
    {
        if (me.alpha < 0.01) rand();
        if(me.curScale < me.maxScale) me.curScale += 0.3;
        x = me.x;
        y = me.y;
        scale = me.curScale;
        var R = 2.5 * scale, r = 1.5 * scale;

        context.fillStyle = "rgba(" + me.ColR + "," + me.ColG + "," + me.ColB + "," + me.alpha + ")";
        context.shadowBlur = 10;
        context.shadowColor = "rgb(" + me.ColR + "," + me.ColG + "," + me.ColB + ")";
        context.beginPath();

        for(var i = 0; i < 5; i ++) {
            var x1 = Math.cos((18+72*i)/180*Math.PI)*R,
                y1 = Math.sin((18+72*i)/180*Math.PI)*R,
                x2 = Math.cos((54+72*i)/180*Math.PI)*r,
                y2 = Math.sin((54+72*i)/180*Math.PI)*r;
                
            context.lineTo(x1 + x, y1 + y);
            context.lineTo(x2 + x, y2 + y);
        }
        context.fill();
        context.closePath();
        me.y -= me.vector;
        me.alpha -= (me.vector / 2.9 * 1.5 / HEIGHT);
    }
}
window.onload = function()
{
    start.begin();
}