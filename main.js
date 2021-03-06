
var GP2Y0A_AREF = 5.0;
var SAMPLES_PER_QUERY = 1;

var IRProximity = require('jsupm_gp2y0a');

//Boton
var groveSensor = require('jsupm_grove');
var button = new groveSensor.GroveButton(0);
var valorBoton=0;

//Lectura de infrarrojos
var myVolts0 = new IRProximity.GP2Y0A(0);
var myVolts1 = new IRProximity.GP2Y0A(1);
var myVolts2 = new IRProximity.GP2Y0A(2);
var myVolts3 = new IRProximity.GP2Y0A(3);
var myVolts4 = new IRProximity.GP2Y0A(4);
var myVolts5 = new IRProximity.GP2Y0A(5);

//Pantalla
var useUpmVersion = true;//versión
var mraa = require('mraa');
var version = mraa.getVersion();

//valores leidos
var valor0=0;
var valor1=0;
var valor2=0;
var valor3=0;
var valor4=0;
var valor5=0;

//Leds
var led0= new mraa.Gpio(2);
var led1= new mraa.Gpio(3);
var led2= new mraa.Gpio(4);
var led3= new mraa.Gpio(6);
var led4= new mraa.Gpio(7);
var led5= new mraa.Gpio(8);
//Psrte 2
var led6= new mraa.Gpio(9);
var led7= new mraa.Gpio(10);
var led8= new mraa.Gpio(11);
var led9= new mraa.Gpio(12);
var led10= new mraa.Gpio(13);

//Establecer dirección
led0.dir(mraa.DIR_OUT);
led1.dir(mraa.DIR_OUT);
led2.dir(mraa.DIR_OUT);
led3.dir(mraa.DIR_OUT);
led4.dir(mraa.DIR_OUT);
led5.dir(mraa.DIR_OUT);
led6.dir(mraa.DIR_OUT);
led7.dir(mraa.DIR_OUT);
led8.dir(mraa.DIR_OUT);
led9.dir(mraa.DIR_OUT);
led10.dir(mraa.DIR_OUT);


var ledState = true; //Boolean to hold the state of Led


//Buzzer
var upmBuzzer = require("jsupm_buzzer");
var myBuzzer = new upmBuzzer.Buzzer(5);


function periodicActivity()
{
    led6.write(ledState?1:0);
    led7.write(ledState?1:0);
    led8.write(ledState?1:0);
    led9.write(ledState?1:0);
    led10.write(ledState?1:0);
    ledState = !ledState; //invert the ledState
  setTimeout(periodicActivity,1000); //call the indicated function after 1 second (1000 milliseconds)
}



//secuence();


//Sensor1
function Sensor0()
{
    valor0=myVolts0.value(GP2Y0A_AREF, SAMPLES_PER_QUERY);
    if(valor0>4){ 
        led0.write(1);
        setTimeout(function(){
            led6.write(1);
        },100);
        setTimeout(function(){
            led7.write(1);
            led6.write(0);
        },200);
        setTimeout(function(){
            led8.write(1);
            led7.write(0);
        },300);
        setTimeout(function(){
            led9.write(1);
            led8.write(0);
        },400);
        setTimeout(function(){
            led10.write(1);
            led9.write(0);
        },500);
        setTimeout(function(){
            led6.write(0);
            led7.write(0);
            led8.write(0);
            led9.write(0);
            led10.write(0);
            Sensor0();
        },600);
    }
    else{
        led0.write(0);
        led6.write(0);
        led7.write(0);
        led8.write(0);
        led9.write(0);
        led10.write(0);
        setTimeout(Sensor0,10);
    }
    //setTimeout(Sensor0,10);
}

//Sensor2
function Sensor1()
{
    valor1=myVolts1.value(GP2Y0A_AREF, SAMPLES_PER_QUERY);
    if(valor1>4.5){ 
        led1.write(1);
        setTimeout(function(){
            led6.write(1)},100);
        setTimeout(function(){
            led8.write(1);
            led6.write(0);
        },200);
        setTimeout(function(){
            led10.write(1);
            led8.write(0);
        },300);
        setTimeout(function(){
            led7.write(1);
            led10.write(0);
        },400);
        setTimeout(function(){
            led9.write(1);
            led7.write(0);
        },500);
        setTimeout(function(){
            led6.write(0);
            led7.write(0);
            led8.write(0);
            led9.write(0);
            led10.write(0);
            Sensor1();
        },600);
        
    }
    else{
        led1.write(0); 
        led6.write(0);
        led7.write(0);
        led8.write(0);
        led9.write(0);
        led10.write(0);
        setTimeout(Sensor1,10);
    }
    
}

//Sensor3
function Sensor2()
{
    valor2=myVolts2.value(GP2Y0A_AREF, SAMPLES_PER_QUERY);
    if(valor2>4){ 
        led2.write(1);
        led1.write(1);
        setTimeout(function(){
            led6.write(1)},100);
        setTimeout(function(){
            led7.write(1);
            led6.write(0);
        },200);
        setTimeout(function(){
            led8.write(1);
            led7.write(0);
        },300);
        setTimeout(function(){
            led9.write(1);
            led8.write(0);
        },400);
        setTimeout(function(){
            led9.write(1);
            led10.write(0);
        },500);
        setTimeout(function(){
            led6.write(0);
            led7.write(0);
            led8.write(0);
            led9.write(0);
            led10.write(0);
            Sensor2();
        },600);
    }
    else{
        led2.write(0);
        led6.write(0);
        led7.write(0);
        led8.write(0);
        led9.write(0);
        led10.write(0);
        setTimeout(Sensor2,10);
    }
    
}

//Sensor4
function Sensor3()
{
    valor3=myVolts3.value(GP2Y0A_AREF, SAMPLES_PER_QUERY);
    if(valor3>4){ 
        led3.write(1);
        led1.write(1);
        setTimeout(function(){
            led10.write(1)},100);
        setTimeout(function(){
            led9.write(1);
            led10.write(0);
        },200);
        setTimeout(function(){
            led8.write(1);
            led9.write(0);
        },300);
        setTimeout(function(){
            led7.write(1);
            led8.write(0);
        },400);
        setTimeout(function(){
            led6.write(1);
            led7.write(0);
        },500);
        setTimeout(function(){
            led6.write(0);
            led7.write(0);
            led8.write(0);
            led9.write(0);
            led10.write(0);
            Sensor3();
        },600);
    }
    else{
        led3.write(0); 
        led6.write(0);
        led7.write(0);
        led8.write(0);
        led9.write(0);
        led10.write(0);
        setTimeout(Sensor3,10);
    }
    
}

//Sensor5
function Sensor4()
{
    valor4=myVolts4.value(GP2Y0A_AREF, SAMPLES_PER_QUERY);
    if(valor4>4){
        led4.write(1);
        led1.write(1);
        setTimeout(function(){
            led6.write(1)},100);
        setTimeout(function(){
            led7.write(1);
            led6.write(0);
        },200);
        setTimeout(function(){
            led8.write(1);
            led7.write(0);
        },300);
        setTimeout(function(){
            led10.write(1);
            led8.write(0);
        },400);
        setTimeout(function(){
            led9.write(1);
            led10.write(0);
        },500);
        setTimeout(function(){
            led8.write(1);
            led9.write(0);
        },600);
        setTimeout(function(){
            led6.write(0);
            led7.write(0);
            led8.write(0);
            led9.write(0);
            led10.write(0);
            Sensor4();
        },700);
    }
    else{
        led4.write(0); 
        led6.write(0);
        led7.write(0);
        led8.write(0);
        led9.write(0);
        led10.write(0);
        setTimeout(Sensor4,10);
    }
    
}

//Sensor6
function Sensor5()
{
    valor5=myVolts5.value(GP2Y0A_AREF, SAMPLES_PER_QUERY);
    if(valor5>4){ 
        led5.write(1);
        led1.write(1);
        setTimeout(function(){
            led6.write(1)},100);
        setTimeout(function(){
            led7.write(1);
        },200);
        setTimeout(function(){
            led8.write(1);
        },300);
        setTimeout(function(){
            led9.write(1);

        },400);
        setTimeout(function(){
            led9.write(1);

        },500);
        setTimeout(function(){
            led6.write(0);
            led7.write(0);
            led8.write(0);
            led9.write(0);
            led10.write(0);
            Sensor5();
        },600);
    }
    else{
        led5.write(0); 
        led6.write(0);
        led7.write(0);
        led8.write(0);
        led9.write(0);
        led10.write(0);
        setTimeout(Sensor5,10);
    }
    
}

//Lectura de leds


if (version >= 'v0.6.1') {
    console.log('mraa version (' + version + ') ok');
}
else {
    console.log('meaa version(' + version + ') is old - this code may not work');
}

if (useUpmVersion) {
    useUpm();
}
else {
    useLcd();
}

/*
//Iniciar lectura
/*ar myInterval = setInterval(function()
{
    valor0=myVolts0.value(GP2Y0A_AREF, SAMPLES_PER_QUERY);
    /*valor1=myVolts1.value(GP2Y0A_AREF, SAMPLES_PER_QUERY);
    valor2=myVolts2.value(GP2Y0A_AREF, SAMPLES_PER_QUERY);
    valor3=myVolts3.value(GP2Y0A_AREF, SAMPLES_PER_QUERY);
    valor4=myVolts4.value(GP2Y0A_AREF, SAMPLES_PER_QUERY);
    valor5=myVolts5.value(GP2Y0A_AREF, SAMPLES_PER_QUERY);

	console.log("AREF: " + GP2Y0A_AREF + 
                ", Voltage value (higher means closer): " + 
                valor0);
}, 1000);

// Print message when exiting
process.on('SIGINT', function()
{
	clearInterval(myInterval);
	myVolts = null;
	IRProximity.cleanUp();
	IRProximity = null;
	console.log("Exiting...");
	process.exit(0);
});*/



/*
 * Use the upm library to drive the two line display
 *
 * Note that this does not use the "lcd.js" code at all*/

 
function useUpm() {
    var lcd = require('jsupm_i2clcd');
    var display = new lcd.Jhd1313m1(0, 0x3E, 0x62);
    display.setCursor(0, 3);
    display.write('Bienvenido');
    display.setCursor(1,0);
    display.write('Comienza a jugar');
    display.setColor(0, 128, 64);
    readButtonValue();
}
function readButtonValue() {
    //console.log(button.name() + " value is " + button.value());
    if(button.value()===1){
        myBuzzer.playSound(upmBuzzer.FA,100000); 
        nuevoTexto();
    }else{
        setTimeout(readButtonValue,100);
    }
    
}

function nuevoTexto() {
    var lcd = require('jsupm_i2clcd');
    var display = new lcd.Jhd1313m1(0, 0x3E, 0x62);
    display.setCursor(0, 0);
    display.write('Tapa cada uno de');
    display.setCursor(1,0);
    display.write('orificios');
    display.setColor(0, 128, 64);
    leer();
    setInterval(function () { 
        myBuzzer.playSound(upmBuzzer.FA,100000);      
    }, 1000);
}

function leer(){
    Sensor0();
    Sensor1();
    Sensor2();
    Sensor3();
    Sensor4();
    Sensor5();
}





//cada segundo
/*function melodyDjuego ()
{ 
    myBuzzer.playSound(upmBuzzer.FA,100000); 
}
//mandar llamar
setInterval(melodyDjuego, 1000); 
//Sonido final
function melodySfinal() 
{ 
    myBuzzer.playSound(upmBuzzer.FA,100000); 
}
//mandar llamar
setInterval(melodySfinal, 100); //cada segundo*/


/*var groveSensor = require('jsupm_grove');//Boton

// Create the button object using GPIO pin 0
var button = new groveSensor.GroveButton(0);

// Read the input and print, waiting one second between readings
function readButtonValue() {
    console.log(button.name() + " value is " + button.value());
}
setInterval(readButtonValue, 1000);*/

