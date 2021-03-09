let DineroCofla = prompt("cuanto dinero tienes cofla ");
let DineroRoberto = prompt("cuanto dinero tienes roberto ");
let DineroPedro= prompt("cuanto dinero tienes pedro ");

//funcion de cambio de numero

let DineroCofla = parseInt(DineroCoflaa);



if(DineroCofla >=0.6 && DineroCofla <1){
    alert("cofla, comprar helado de agua");
    alert("y te sobran " + DineroCofla - 0.6);
}

else if(DineroCofla >= 1 && DineroCofla < 1.6){
    alert("cofla, comprar helado de crema");

}

else if(DineroCofla >= 1.6 && DineroCofla < 1.7){
    alert("cofla, comprar helado de churro");


}

else if(DineroCofla >= 1.7 && DineroCofla < 2.9){
    alert("cofla, comprar helado de cacahuate");
    alert("y te sobran " + DineroCofla - 1.7);
}

else if(DineroCofla >= 2.9){
    alert("cofla, helado de caca o el bote d    e mierda");
    alert("y te sobran " + DineroCofla - 2.9);
}
else {
    alert("cofla, No te alcanza para ningu helado");
}

//cantidad de roberto

if(DineroRoberto >= 0.6 && DineroCofla < 1){
    alert("roberto, comprar helado de agua");
    alert("y te sobran " + DineroRoberto - 0.6);
}

else if(DineroRoberto >= 1 && DineroCofla < 1.6){
    alert("roberto, comprar helado de crema");
    alert("y te sobran " + DineroRoberto - 1);
}

else if(DineroRoberto >= 1.6 && DineroCofla < 1.7){
    alert("roberto, comprar helado de churro");
    alert("y te sobran " + DineroRoberto - 1.6);

}

else if(DineroRoberto >= 1.7 && DineroCofla < 2.9){
    alert("roberto, comprar helado de cacahuate");
    alert("y te sobran " + DineroRoberto - 1.7);
}

else if(DineroRoberto >= 2.9){
    alert("roberto, helado de caca o el bote de mierda");
    alert("y te sobran " + DineroRoberto - 2.9);
}
else {
    alert("roberto, No te alcanza para ningu helado");
}


//dinero de pedro


if(DineroPedro >= 0.6 && DineroCofla <1){
    alert("pedro, comprar helado de agua");
}

else if(DineroPedro >= 1 && DineroCofla < 1.6){
    alert("pedro, comprar helado de crema");
}

else if(DineroPedro >= 1.6 && DineroCofla < 1.7){
    alert("pedro, comprar helado de churro");

}

else if(DineroPedro >= 1.7 && DineroCofla < 2.9){
    alert("pedro, comprar helado de cacahuate");
}

else if(DineroPedro >= 2.9){
    alert("pedro, helado de caca o el bote de mierda");
}
else {
    alert("pedro, No te alcanza para ningu helado");
}



