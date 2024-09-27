// Aadhaar card generation with javascript
let aadhaar = "1234 0987 1234";
let bngName = 'Abcd Xyz';
let engName = 'Pqrsty xyz';
let bngCoName ='আলহামদুলি্লাহ';
let coName = 'ASDF@123';
let mobile = '0123456789'
let bngAddress ='মুর্শিদাবাদ , পশ্চিমবঙ্গ, ভারত';
let villName = 'Chandatala';
let poName = 'Dangapara';
let pc = 7000000;


const bgn = document.querySelectorAll('.bngName');
const egn = document.querySelectorAll('.engName');
const con = document.querySelectorAll('.coName');
const uid = document.querySelectorAll("h2 , .uid");
const pin = document.querySelectorAll('.pin');
const mbn = document.querySelector('.mobile');
const bcn = document.querySelector('.bng_co_name');
const img = document.querySelector('.photo');
const vil = document.querySelectorAll('.villName');
const pof = document.querySelectorAll('.poName');


pof.forEach((i)=>i.innerHTML = poName);
vil.forEach((i)=>i.innerHTML = villName);
pin.forEach((i)=>i.innerHTML = pc);
uid.forEach((i)=>i.innerHTML = aadhaar);
bgn.forEach((i)=>i.innerHTML = bngName);
egn.forEach((i)=>i.innerHTML = engName);
con.forEach((i)=>i.innerHTML = coName);


$(document).ready(function(){
  $(".pvc_bd_area pre").append('<span class="s">পুরুষ/Male</span>');
  document.querySelector('.bngAddress').innerHTML = bngAddress;
  
  mbn.innerHTML = mobile;
  bcn.innerHTML = bngCoName;
  ;
  
});







