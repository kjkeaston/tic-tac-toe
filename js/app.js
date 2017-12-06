// wait for the DOM to finish loading
$(document).ready(function() {
  console.log("doc fully loaded!");
  // all code to manipulate the DOM
  // goes inside this function


myArr = ["X", "O"];

let boxes = ["one", "two", "three", "four", "five", "six", "seven", "eight", "nine"];

// let clickSquares =[];
// let userOneChoice;
// let userTwoChoice;

for (let i = 0; i < boxes.length; i++) {
  $(`#${boxes[i]}`).on("click", function() {
  myArr.reverse();
  $(`#${boxes[i]}`).html(myArr[0]);
  if (myArr[0] === "X") {
    $(`#${boxes[i]}`).css("color", "red")
  } else {
    $(`#${boxes[i]}`).css("color", "blue")
  };
});
};




// if($('#one') === $('#two') && $('#one') === $('#three')) {
//   alert("you won!");
// }








// $('#one').on("click", function() {
//   myArr.reverse();
//   $("#one").html(myArr[0]);
//   if (myArr[0] === "X") {
//     $('#one').css("color", "red")
//   } else {
//     $('#one').css("color", "blue")
//   };
// });

// $('#two').on("click", function() {
//   myArr.reverse();
//   $("#two").html(myArr[0]);
//   if (myArr[0] === "X") {
//     $('#two').css("color", "red")
//   } else {
//     $('#two').css("color", "blue")
//   };
// });

// $('#three').on("click", function() {
//   myArr.reverse();
//   $("#three").html(myArr[0]);
//   if (myArr[0] === "X") {
//     $('#three').css("color", "red")
//   } else {
//     $('#three').css("color", "blue")
//   };
// });

// $('#four').on("click", function() {
//   myArr.reverse();
//   $("#four").html(myArr[0]);
//   if (myArr[0] === "X") {
//     $('#four').css("color", "red")
//   } else {
//     $('#four').css("color", "blue")
//   };
// });

// $('#five').on("click", function() {
//   myArr.reverse();
//   $("#five").html(myArr[0]);
//   if (myArr[0] === "X") {
//     $('#five').css("color", "red")
//   } else {
//     $('#five').css("color", "blue")
//   };
// });

// $('#six').on("click", function() {
//   myArr.reverse();
//   $("#six").html(myArr[0]);
//   if (myArr[0] === "X") {
//     $('#six').css("color", "red")
//   } else {
//     $('#six').css("color", "blue")
//   };
// });

// $('#seven').on("click", function() {
//   myArr.reverse();
//   $("#seven").html(myArr[0]);
//   if (myArr[0] === "X") {
//     $('#seven').css("color", "red")
//   } else {
//     $('#seven').css("color", "blue")
//   };
// });

// $('#eight').on("click", function() {
//   myArr.reverse();
//   $("#eight").html(myArr[0]);
//   if (myArr[0] === "X") {
//     $('#eight').css("color", "red")
//   } else {
//     $('#eight').css("color", "blue")
//   };
// });

// $('#nine').on("click", function() {
//   myArr.reverse();
//   $("#nine").html(myArr[0]);
//   if (myArr[0] === "X") {
//     $('#nine').css("color", "red")
//   } else {
//     $('#nine').css("color", "blue")
//   };
// });





});
