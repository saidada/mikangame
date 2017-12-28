"use strict";

window.onload = function (){

  var canvas = document.getElementById('tama');
  var ctx    = canvas.getContext('2d');

  canvas.width = 800;
  canvas.height = 600;

  var mxr = new Mixer(document);
  var marus = [];
  var fruitGenerator = new FruitGenerator(canvas, marus);
  var score = new Score(document.getElementById("point"));

  document.getElementById('botan1').onclick = function(){
    alert('今はつかえません');
  }
　
  setInterval(loop, 16);
  function loop () {
    // 移動
    fruitGenerator.move();
    for (var i = marus.length - 1; i >= 0; --i) {
      if (!marus[i].move()) { // 画面外に出たら
        marus.splice(i, 1);
        score.addPoint(-5);
      }
    }

    // 当たり判定
    for (var i = marus.length - 1; i >= 0; --i) {
      if(mxr.hit(marus[i])) { // 当たってたら
        score.addPoint(1);
        marus.splice(i, 1);
      }
    }

    // 描画
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    for (var i = 0; i < marus.length; ++i) {
      marus[i].draw(ctx);
    }
    mxr.draw(ctx);
    score.update();
  }
}

// TODO : requestAnimationFrameによるアニメーション（古いブラウザは使えない）
