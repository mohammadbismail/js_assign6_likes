// btn1,btn2,btn3,btn4 are like buttons
// likes1,likes2,likes3,likes4 are changing numbers in span
// var btn1 = document.getElementById("btn1");
// var like1count = document.getElementById("likes1");
// btn1.addEventListener("click", clickMe, ture);
// var arr = [3, 9, 12, 9];
// console.log(btn1.addEventListener("click", clickMe, true));
// function clickMe() {
//   if (btn1.clicked == true) {
//     like1count.innerHTML = arr[0]++;
//   }
//   else if (btn2.clicked == true) btn2++;
//   else if (btn3.clicked == true) btn3++;
//   else if (btn4.clicked == true) btn4++;
// }
var likecount = [3, 9, 12, 9];
var likes = [
  document.querySelector("#likes1"),
  document.querySelector("#likes2"),
  document.querySelector("#likes3"),
  document.querySelector("#likes4"),
];

function like(id) {
  likecount[id]++;
  likes[id].innerHTML = likecount[id] + " like(s)";
}
// coding dojo solution is applies
//search for addEventListener and make condition for each time clicked to counter
