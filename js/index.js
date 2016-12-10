window.onload = function() {
    var canvas = document.getElementById("canvas");
    var context = canvas.getContext("2d"); //设定绘制2d图形
    var stage = new Stage();
    createCanvas();
    //drawRound(context);   //画圆
    //stage.createStage();  //基于easeljs的计数
};

function createCanvas() {
    var canvasWidth = 400;
    var canvasHeight = 400;
    canvas.setAttribute("width", canvasWidth); //设置画布的长宽
    canvas.setAttribute("height", canvasHeight);
}

function drawRound(context) {
    context.beginPath();                    //开始创建路径
    context.arc(100,100,50,0,Math.PI * 2);  //创建图形的路径
    context.closePath();                    //关闭路径 
    context.strokeStyle = "#f0f";           
    context.stroke();                       //开始填充绘制
    //context.fillStyle = "#f0f";             //设定图形颜色
    //context.fill();                         //开始描边绘制
}

function Stage() {
    this.stage = new createjs.Stage(canvas); //实例化舞台，渲染画布
    this.txt = new createjs.Text("number:0", "20px Arial", "#f00");
    this.FPS = 30;
    this.count = 0;
}

Stage.prototype.createStage = function() {
    this.stage.addChild(this.txt); //将文字添加到舞台stage下
    createjs.Ticker.setFPS(this.FPS); //设置Ticker的帧数
    createjs.Ticker.addEventListener("tick", this.handleTick.bind(this)); //回调
}

Stage.prototype.handleTick = function() {
    if (100 >= this.count) {
        this.count++;
    }
    this.txt.text = "number:" + this.count;
    this.stage.update(); //重画舞台
}
