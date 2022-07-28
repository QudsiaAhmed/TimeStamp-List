var time_array = [];




setInterval(() => {

  let hours = document.getElementById('hours');
  let minutes = document.getElementById('minutes');
  let seconds = document.getElementById('seconds');
  let ampm = document.getElementById('ampm');


  let hou = new Date().getHours();
  let min = new Date().getMinutes();
  let se = new Date().getSeconds();
  let am = hou >= 12 ? "PM" : "AM"


  // agr greater than 12 hai tou ius mai sai 12 minus kardoo 
  if (hou > 12) {
    hou = hou - 12;
  }
  // Koi agr single digit number hai you ius sai pehlai ""0" laga do  eg:01,02,03
  hou = (hou < 10) ? "0" + hou : hou;
  min = (min < 10) ? "0" + min : min;
  se = (se < 10) ? "0" + se : se;

  hours.innerHTML = hou;
  minutes.innerHTML = min;
  seconds.innerHTML = se;
  ampm.innerHTML = am

})



function checkTime(i) {
  if (i < 10) {
    i = "0" + i;
  }
  return i;
}

function time() {
  var date = new Date();
  var hh = date.getHours();
  var mm = date.getMinutes();
  var ss = date.getSeconds();


  mm = checkTime(mm);
  ss = checkTime(ss);
  let am = hh >= 12 ? "PM" : "AM"

  // document.getElementById('datebtn').innerHTML = hh + ":" + mm + ":" + ss;
  return hh + ":" + mm + ":" + ss + " " + am;
}

function Array_Append() {

  console.log("Inside Array function");

  var present_time = time()

  console.log("time->", present_time);

  time_array.push(present_time);

  var join_arr = time_array.join('<br>');

  console.log("time-array->", join_arr);

  document.getElementById('datebtn').innerHTML = join_arr;

}
function Reset() {

  join_arr = [];

  time_array = [];

  document.getElementById('datebtn').innerHTML = '';

  console.log(join_arr);
}
