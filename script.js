function $(id){
    return document.getElementById(id);
    }
    function calculate(){
        debugger;
    $('rate3').innerHTML = $('my-slider2').value;
    $('p6m1').innerHTML = '$'+ addCommas(new Number(parseInt($('my-slider').value)*Math.pow((1+$('rate1').innerHTML/100),6)).toFixed(0));
    $('p6m2').innerHTML = '$'+ addCommas(new Number(parseInt($('my-slider').value)*Math.pow((1+$('rate2').innerHTML/100),6)).toFixed(0));
    $('p6m3').innerHTML = '$'+ addCommas(new Number(parseInt($('my-slider').value)*Math.pow((1+$('rate3').innerHTML/100),6)).toFixed(0));

    $('p12m1').innerHTML = '$'+ addCommas(new Number(parseInt($('my-slider').value)*Math.pow((1+$('rate1').innerHTML/100),12)).toFixed(0));
    $('p12m2').innerHTML = '$'+ addCommas(new Number(parseInt($('my-slider').value)*Math.pow((1+$('rate2').innerHTML/100),12)).toFixed(0));
    $('p12m3').innerHTML = '$'+ addCommas(new Number(parseInt($('my-slider').value)*Math.pow((1+$('rate3').innerHTML/100),12)).toFixed(0));

    $('p18m1').innerHTML = '$'+ addCommas(new Number(parseInt($('my-slider').value)*Math.pow((1+$('rate1').innerHTML/100),18)).toFixed(0));
    $('p18m2').innerHTML = '$'+ addCommas(new Number(parseInt($('my-slider').value)*Math.pow((1+$('rate2').innerHTML/100),18)).toFixed(0));
    $('p18m3').innerHTML = '$'+ addCommas(new Number(parseInt($('my-slider').value)*Math.pow((1+$('rate3').innerHTML/100),18)).toFixed(0));
    //alert($('p18m3').innerHTML.replace(/[\$\,]/g,''));
   
    }
    function addCommas(nStr) {
        debugger;
    nStr += '';
    var x = nStr.split('.');
    var x1 = x[0];
    var x2 = x.length > 1 ? '.' + x[1] : '';
    var rgx = /(\d+)(\d{3})/;
    while (rgx.test(x1)) {
    x1 = x1.replace(rgx, '$1' + ',' + '$2');
    }
    return x1 + x2;
    }
   

    const mySlider = document.getElementById("my-slider");
    const sliderValue = document.getElementById("slider-value");
 function slider(){
    valPercent = (mySlider.value / mySlider.max)*100;
    mySlider.style.background = `linear-gradient(to right, #3264fe ${valPercent}%, #d5d5d5 ${valPercent}%)`;
    // mySlider.style.background = `linear-gradient(to right, #3264fe ${valPercent}%, #d5d5d5 ${valPercent}%)`;
    sliderValue.textContent = mySlider.value;
  }
   slider();

   const mySlider2 = document.getElementById("my-slider2");
   const sliderValue2 = document.getElementById("slider-values");
 function sliderr(){
   
   valPercent = (mySlider2.value / mySlider2.max)*100;
   mySlider2.style.background = `linear-gradient(to right, #3264fe ${valPercent}%, #d5d5d5 ${valPercent}%)`;
   sliderValue2.textContent = mySlider2.value;
 }
  sliderr();






