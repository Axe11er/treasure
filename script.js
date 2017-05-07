/*jslint node: true */
/*jslint plusplus: true */
/*jslint browser: true*/
/*global $, jQuery, alert*/
"use strict";

function getRandomNumber(size) {
  return Math.floor(Math.random() * size);
}

function getDistance(event, target) {
  var diffX = event.offsetX - target.x;
  var diffY = event.offsetY - target.y;
  return Math.sqrt((diffX * diffX) + (diffY * diffY));
}

function getDistanceHint(distance) {
  if (distance < 10) {
    return "Очень очень горячо!";
  }
  else if (distance < 20) {
    return "Очень горячо!";
  }
  else if (distance < 60) {
    return "Горячо!";
  }
  else if (distance < 100) {
    return "Тепло";
  }
  else if (distance < 200) {
    return "Прохладно";
  }
  else if (distance < 350) {
    return "Холодно";
  }
  else {
    return "Попробуй поискать в другом месте";
  }
}
var width = 400;
var height = 400;
var clicks = 0;
var clicksLimit = 20;
var target = {
  x: getRandomNumber(width)
  , y: getRandomNumber(height)
};
$("#map").click(function (event) {
  clicks++;
  if (clicks > clicksLimit) {
    alert("Да уж, кладоискатель из тебя так себе.");
    return;
  }
  var distance = getDistance(event, target);
  var distanceHint = getDistanceHint(distance);
  $("#distance").text(distanceHint);
  $("#clicks-remaining").text("Осталось попыток " + (clicksLimit - clicks));
  if (distance < 8) {
    alert("Ура! Ты нашел сундук с сокровищем" + "\n" + "Кликов сделано " + clicks);
  }
});