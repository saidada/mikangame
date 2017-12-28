"use strict";

function Maru(canvas){
  this.radius = 20;//まるのサイズ
  this.x = Math.random() * canvas.width;
  this.y = -this.radius; //これは画面外の配置Y座標
  this.yMax = canvas.height;
  this.v = 1 + Math.random() * 3;
  this.color = `rgb(255, 133, 73)`; //とりあえず色固定
  this.seedShot = Date.now(); //まるが作成された時の日時を記録
}

// 画面外に出た時は false を返す
Maru.prototype.move = function(){
  this.y += this.v;
  if (this.y > this.yMax + this.radius) {
    return false;
  }
  if (Date.now() - this.seedShot > 1000) {
    console.log('種を飛ばす ' + Date.now());
    this.seedShot += 1000;
  }
  return true;
};

Maru.prototype.draw = function(ctx){
  ctx.beginPath();
  ctx.fillStyle = this.color;
  ctx.arc(this.x, this.y, this.radius, 0, Math.PI*2, true);
  ctx.fill();
  ctx.stroke();
};

// 一定間隔で果物を生成するやつ
// 取りあえず3秒に１個自動生成される

function FruitGenerator(canvas, marus) {
  this.canvas = canvas;
  this.fruits = marus; // 追加する先の配列
  this.lastGen = Date.now();
}

FruitGenerator.prototype.move = function(){
  if (Date.now() - this.lastGen > 3000) {
    this.fruits.push(new Maru(this.canvas));
    this.lastGen += 3000;
  }
}
