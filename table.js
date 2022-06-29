
let data_1 = document.getElementById('data-1');

let data_2 = document.getElementById('data-2');

let data_3 = document.getElementById('data-3');

let amount = document.getElementById('amount-1');

let amount_2 = document.getElementById('amount-2');

let amount_3 = document.getElementById('amount-3');

let gst = document.getElementById('gst');

let cal = document.getElementById('cal');

let grant = document.getElementById('grant')

var val_1 = 0;
var val_2 = 0;
var val_3 = 0;
var gst1 = 0;

var tot_1;
var tot_2;
var tot_3;
 
function first()
{
    let select_1 = document.getElementById('select-1').value;
    val_1 = select_1 * 1000;
    tot_1 = parseInt(data_1.innerHTML = val_1);
    var d = val_1 + val_2 + val_3;
    cal.innerHTML = d;
    gst1 = d * 0.06;
    gst.innerHTML = gst1;
    var grand1 = d + gst1;
    grant.innerHTML = grand1;   
 }
  function second()
{
    
    let select_2 = document.getElementById('select-2').value;
    val_2 = select_2 * 250;
    data_2.innerHTML = val_2;
    var e = val_1 + val_2 + val_3;
    cal.innerHTML = e; 
    gst1 = e * 0.06;
    gst.innerHTML = gst1; 
    var grand2 = e + gst1;
    grant.innerHTML = grand2;   
}
function third()
{

    let select_3 = document.getElementById('select-3').value;
    val_3 = select_3 * 500;
    data_3.innerHTML = val_3;
    var f = val_1 + val_2 + val_3;
    cal.innerHTML = f;
    gst1 = f * 0.04;
    gst.innerHTML = gst1;
    var grand3 = f + gst1;
    grant.innerHTML = grand3;  
}

