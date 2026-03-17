const turn_on = document.getElementById("turn_on");// make sure this element exists in HTML
// Storage & Tanks
const storage_tank = document.getElementById("storage_tank");

// Pumps
const pump_A = document.getElementById("pump_A");
const pump_B = document.getElementById("pump_B");
const centrifugal_pump = document.getElementById("centrifugal_pump");
const pump_holder = document.getElementById("pump_holder");

// Gauges & Panel
const circular_gauges = document.getElementById("circular_gauges");
const circular_gauges1 = document.getElementById("circular_gauges1");
const rotating_gauges = document.getElementById("rotating_gauges");
const rotating_gauges1 = document.getElementById("rotating_gauges1");
const rotating_gauges2 = document.getElementById("rotating_gauges2");
const rotating_gauges3 = document.getElementById("rotating_gauges3");

const control_pannel = document.getElementById("control_pannel");
const control_pannel1 = document.getElementById("control_pannel1");
const manometer = document.getElementById("manometer");
const pressure_gauge = document.getElementById("pressure_gauge");

// Valves
const ball_valves = document.getElementById("ball_valves");
const ball_valves1 = document.getElementById("ball_valves1");
const ball_valves_label = document.getElementById("ball_valves_label");

// Flow Transmitters
const flow_transmitter = document.getElementById("flow_transmitter");
const flow_transmitter1 = document.getElementById("flow_transmitter1");
const label  = document.getElementById("label")

// Pump A
const control_panel = document.getElementById('control_panel');
const pumpA_controller = document.getElementById('pumpA_controller');
const pumpA_suction_pressure = document.getElementById('pumpA_suction_pressure');
const pumpA_discharge_pressure = document.getElementById('pumpA_discharge_pressure');
const pumpA_flowrate = document.getElementById('pumpA_flowrate');
const pumpA_rpm = document.getElementById('pumpA_rpm');

// Pump B
const pumpB_controller = document.getElementById('pumpB_controller');
const pumpB_suction_pressure = document.getElementById('pumpB_suction_pressure');
const pumpB_discharge_pressure = document.getElementById('pumpB_discharge_pressure');
const pumpB_flowrate = document.getElementById('pumpB_flowrate');
const pumpB_rpm = document.getElementById('pumpB_rpm');


// ⚠️ FIX: duplicate IDs for pumpA_discharge_pressure
// I’ll rename them to pumpA_discharge_pressure1 and pumpA_discharge_pressure2 in JS

// Pump A

const pumpA_differential_pressure = document.getElementById("pumpA_differential_pressure");
const pumpA_volumeteric_rate      = document.getElementById("pumpA_volumeteric_rate");
const pumpA_shaft_torque          = document.getElementById("pumpA_shaft_torque");
const pumpA_angular_velocity      = document.getElementById("pumpA_angular_velocity");

// Pump B

const pump_additional_pressure    = document.getElementById("pump_additional_pressure");
const pumpB_differential_pressure = document.getElementById("pumpB_differential_pressure");

const pumpB_volumeteric_rate      = document.getElementById("pumpB_volumeteric_rate");
const pumpB_shaft_torque          = document.getElementById("pumpB_shaft_torque");
const observation_table_1150_text      = document.getElementById("observation_table_1150_text");
const observation_table_1150_text1      = document.getElementById("observation_table_1150_text1");
const observation_table_1150_text2      = document.getElementById("observation_table_1150_text2");
const observation_table_1150_text3     = document.getElementById("observation_table_1150_text3");
const observation_table_1150_text4     = document.getElementById("observation_table_1150_text4");

const observation_table_1150         = document.getElementById("observation_table_1150");
const observation_table_command         = document.getElementById("observation_table_command");
const observation_table_command1        = document.getElementById("observation_table_command1");

const observation_table_85        = document.getElementById("observation_table_85");
const observation_table_60       = document.getElementById("observation_table_60");
const observation_table_40        = document.getElementById("observation_table_40");
const observation_table_00        = document.getElementById("observation_table_00");
const observation_table_Note      = document.getElementById("observation_table_Note");

const pumpB_angular_velocity      = document.getElementById("pumpB_angular_velocity");

const rotor2        = document.getElementById("rotor2");
const rotor_text     = document.getElementById("rotor_text");
const frequency_driver_display   = document.getElementById("frequency_driver_display");
const down_button_text = document.getElementById("down_button_text");
const mode_button_text     = document.getElementById("mode_button_text");
const mode_button1  = document.getElementById("mode_button1");
const down_button3 = document.getElementById("down_button3");

const up_button_text = document.getElementById("up_button_text");
const on_button_text = document.getElementById("on_button_text");
const up_button_text1 = document.getElementById("up_button_text1");

const run_button_text = document.getElementById("run_button_text");
const run_button_text1 = document.getElementById("run_button_text1");
const stop_button_text = document.getElementById("stop_button_text");
const run_button1 = document.getElementById("run_button1");
const up_button1 = document.getElementById("up_button1");



const observation_table_1750_100 = document.getElementById("observation_table_1750_100");
const observation_table_1750_85 = document.getElementById("observation_table_1750_85");
const observation_table_1750_60 = document.getElementById("observation_table_1750_60");
const observation_table_1750_40 = document.getElementById("observation_table_1750_40");
const observation_table_1750_00 = document.getElementById("observation_table_1750_00");
const observation_table_1750_text = document.getElementById("observation_table_1750_text");
const observation_table_1750_text1 = document.getElementById("observation_table_1750_text1");
const observation_table_1750_text2 = document.getElementById("observation_table_1750_text2");
const observation_table_1750_text3 = document.getElementById("observation_table_1750_text3");
const observation_table_1750_text4 = document.getElementById("observation_table_1750_text4");

function showLabel() {
  if (f === 1) {
    
    console.log("hello world")
    ins.innerText = "First Beware With All The Instruments!! Click On The Next Button ✅ ";
    startbutton.style.visibility = "visible";
    startbutton.style.opacity = "100%";
    startlab.style.visibility = "visible";
    startbutton.innerText = "Next";  // ✅ Corrected
     startbutton.onclick = mainLabel;
    f = 2;
  }
}

function mainLabel() {
  if (f === 2) {
    
    console.log("hello world")
    ins.innerText = "This is Storage Tank 📦";
    storage_tank.style.visibility = "visible";
     popUp(storage_tank);  
   
    startbutton.style.opacity = "100%";
    startlab.style.visibility = "visible";
    startbutton.innerText = "Next";  // ✅ Corrected
     startbutton.onclick = mainLabel1;
    f = 3;
  }
}

function mainLabel1() {
  if (f === 3) {
    
    console.log("hello world")
    ins.innerText = "This is Control Pannel 📦";
     control_pannel.style.visibility = "visible";
     popUp(control_pannel);  
   
    startbutton.style.opacity = "100%";
    startlab.style.visibility = "visible";
    startbutton.innerText = "Next";  // ✅ Corrected
     startbutton.onclick = mainLabel2;
    f = 4;
  }
}

function mainLabel2() {
  if (f === 4) {
    
    console.log("hello world")
    ins.innerText = "This is Ball Valves Section ⚙️";
     ball_valves1.style.visibility = "visible";
     ball_valves_label.style.visibility = "visible";
     popUp(ball_valves1);  
     popUp(ball_valves_label);
   
    startbutton.style.opacity = "100%";
    startlab.style.visibility = "visible";
    startbutton.innerText = "Next";  // ✅ Corrected
     startbutton.onclick = mainLabel3;
    f = 5;
  }
}

function mainLabel3() {
  if (f === 5) {
    
    console.log("hello world")
    ins.innerText = "This is Valves ⚙️";
     circular_gauges.style.visibility = "visible";
     popUp(circular_gauges);  
   
    startbutton.style.opacity = "100%";
    startlab.style.visibility = "visible";
    startbutton.innerText = "Next";  // ✅ Corrected
     startbutton.onclick = mainLabel4;
    f = 6;
  }
}

function mainLabel4() {
  if (f === 6) {
    
    console.log("hello world")
    ins.innerText = "This is Centrifugal Pump ⚙️";
     centrifugal_pump.style.visibility = "visible";
     pump_holder.style.visibility = "visible"

   
     

     popUp(centrifugal_pump);  
     popUp(pump_holder);  
   
          
   


         setTimeout(() => {

            pump_A.style.visibility = "visible";
                   pump_B.style.visibility =  "visible";

      
          popUp(pump_A);  
     popUp(pump_B); 

      startbutton.style.opacity = "100%";
    startlab.style.visibility = "visible";
    startbutton.innerText = "Next";  // ✅ Corrected
     startbutton.onclick = mainLabel5;
    }, 1000);
    f = 7;
  }
}



function mainLabel5() {
  if (f === 7) {
    
    console.log("hello world")
    ins.innerText = "This is Flow Transmitter ⚙️";
     flow_transmitter1.style.visibility = "visible"

   
     

     popUp(flow_transmitter1);  
  
   
          
      startbutton.style.opacity = "100%";
    startlab.style.visibility = "visible";
    startbutton.innerText = "Next";  // ✅ Corrected
     startbutton.onclick = mainLabel6;


        
    f = 8;
  }
}



function mainLabel6() {
  if (f === 8) {
    
    console.log("hello world")
    ins.innerText = "This is Pressure Gauges⚙️";
    pressure_gauge.style.visibility = "visible"

   
     

     popUp(pressure_gauge);  
  
   
          
      startbutton.style.opacity = "100%";
    startlab.style.visibility = "visible";
    startbutton.innerText = "Next";  // ✅ Corrected
     startbutton.onclick = mainLabel7;


        
    f = 9;
  }
}

function mainLabel7() {
  if (f === 9) {
    
    console.log("hello world")
    ins.innerText = "This is Manometer ⚙️";
    manometer.style.visibility = "visible"

   
     

     popUp(manometer);  
  
   
          
      startbutton.style.opacity = "100%";
    startlab.style.visibility = "visible";
    startbutton.innerText = "Next";  // ✅ Corrected
     startbutton.onclick = mainLabel8;


        
    f = 10;
  }
}


function mainLabel8() {
  if (f === 10) {
    
    console.log("hello world")
    ins.innerText = "Now Overview Completed  ✅✅ ";
     popUp(label); 
     label.style.visibility = "hidden"

   
     
      setTimeout(() => {
          ins.innerText = "Click On The On switch Of Control Pannel To On The Pump System"
          on_button_text.style.visibility = "visible";
         f = 11;
              setTimeout(() => {
                
                  turn_on.addEventListener("click", function() {
                    if(f===11){
                       f = 12;
  turn_on.style.transform = "rotate(-80deg) translateX(60%) translateY(-15%)";
    setTimeout(() => {
 control_pannel1.style.visibility = "visible"
   if(f===12){
         f = 13;           


  console.log("hello world")
    ins.innerText = "Click On The Circular Gauge To Rotate Them To Anticlockwise";
    pressure_gauge.style.visibility = "visible"
    circular_gauges1.style.visibility = "visible"
    circular_gauges1.style.visibility = "visible"
    circular_gauges1.style.opacity = "100%"

     popUp(circular_gauges1);  

    
      console.log(f);
    
     console.log( " now f = 13 is running")
        on_button_text.style.visibility = "hidden";
          
   
       
       
  rotating_gauges.addEventListener("click", () => {
     
    f = 13.2;
    
    console.log(f)
        
    console.log("run")
    

      setTimeout(() => {
    rotating_gauges.style.transform = "rotate(-94deg)";
   

   
    console.log("rotating")
      setTimeout(() =>{
        ins.innerText =  "Click on the rotor to on the rotor"
        rotor_text.style.visibility = "visible";
        pulse(rotor_text);
        
    [rotor2, rotor_text].forEach(rotor => {
   if(f===13.2){
    f = 13.5
  rotor.addEventListener("click", () => {
      if(f===13.5){
     f = 14;
    rotor2.style.transform = "rotate(130deg)";
    frequency_driver_display.style.visibility = "visible";
    pulse(frequency_driver_display);

      setTimeout(() =>{
    down_button_text.style.visibility = "visible"
    ins.innerText = " Click on the down button"
   
    

    down_button_text.addEventListener("click", () => {
        if(f === 14){
          f = 15;
          rotor_text.style.visibility = "hidden";
      pulse(down_button3);
      pulse(down_button_text);
      frequency_driver_display.innerText = "-LFR";
      pulse(frequency_driver_display);

      ins.innerText = "Click on mode button to change the current mode"
         setTimeout(() =>{
       mode_button_text.style.visibility = "visible";
      down_button_text.style.visibility = "hidden";
  mode_button_text.addEventListener("click", () => {
       if(f === 15){
       
         pulse(mode_button1);
         pulse(mode_button_text);
         frequency_driver_display.innerText =  "19.0"
         pulse(frequency_driver_display);

         up_button_text.style.visibility = "visible"
         up_button1.style.visibility = "visible"

         ins.innerText = "Click on the up button to increase the value"
         mode_button_text.style.visibility = "hidden";
         rotating_gauges.style.visibility = "hidden";
         rotating_gauges.style.opacity = "0%";

  up_button_text.addEventListener("click",  () => {
updateFrequency();
if(f === 16){
  f = 17;
  ins.innerText = "Click on the Run Button to run the motor"
  up_button_text.style.visibility = "hidden"
run_button_text.style.visibility =  "visible";
    run_button_text.addEventListener("click", ()=>{
      pulse(run_button_text)
      pulse(run_button1)
        pumpA_shaft_torque.innerText = "13.700 LB-IN"
        pumpA_angular_velocity.innerText = "1150.0 RPM"
        pulse(pumpA_angular_velocity)
        pulse(pumpA_shaft_torque)
        pulse(run_button1)
         pulse(pumpA_differential_pressure)
        pulse(pumpA_angular_velocity)
        pulse(pumpB_differential_pressure)
        pulse(pumpB_angular_velocity)
        
        pulse(pump_additional_pressure)
        run_button_text.style.visibility = "hidden"
            setTimeout(() => {
         rotating_gauges1.style.visibility = "visible";
        pumpA_differential_pressure.innerText = "41.2"
        pumpA_volumeteric_rate.innerText = "17.23"
        pumpB_differential_pressure.innerText = "-0.28"
        pumpB_volumeteric_rate.innerText = "0"
        pumpB_suction_pressure.innerText = "0.22"
        pumpA_discharge_pressure.innerText = "3.67"
        pump_additional_pressure.innerText = "0.5"
       
             setTimeout(() => {
         rotating_gauges1.style.visibility = "visible";
        pumpA_differential_pressure.innerText = "4.52"
        pumpA_volumeteric_rate.innerText = "19.23"
        pumpB_differential_pressure.innerText = "-0.48"
        pumpB_volumeteric_rate.innerText = "0"
        pumpB_suction_pressure.innerText = "0.32"
        pumpA_discharge_pressure.innerText = "4.67"
        pump_additional_pressure.innerText = "0.10"
        setTimeout(() => {
        rotating_gauges1.style.visibility = "visible";
        pumpA_differential_pressure.innerText = "4.72"
        pumpA_volumeteric_rate.innerText = "21.23"
        pumpB_differential_pressure.innerText = "-0.58"
        pumpB_volumeteric_rate.innerText = "0"
        pumpB_suction_pressure.innerText = "0.62"
        pumpA_discharge_pressure.innerText = "6.67"
        pump_additional_pressure.innerText = "0.16"


         ins.innerText = "Click On The Valves To Rotate It full Anticlockwise To Acheive Maximum Flow Rate ✅✅"
         
      
            rotating_gauges1.addEventListener("click",  () => {
              if(f === 17){
                f = 18;
                   

                rotating_gauges1.style.transform = "rotate(-200deg)"
                    setTimeout(() => {
                 pumpA_differential_pressure.innerText = "4.72"
        pumpA_volumeteric_rate.innerText = "28.25"
        pumpB_differential_pressure.innerText = "-0.58"
        pumpB_volumeteric_rate.innerText = "0"
        pumpB_suction_pressure.innerText = "0.62"
        pumpA_discharge_pressure.innerText = "64.7"
        pump_additional_pressure.innerText = "0.16"

 setTimeout(() => {
         pumpA_differential_pressure.innerText = "4.42"
        pumpA_volumeteric_rate.innerText = "26.25"
        pumpB_differential_pressure.innerText = "-0.38"
        pumpB_volumeteric_rate.innerText = "0"
        pumpB_suction_pressure.innerText = "0.62"
        pumpA_discharge_pressure.innerText = "61.7"
        pump_additional_pressure.innerText = "0.72"

                ins.innerText = "Now Again Click On The Valves to rotating anticlockwise to achieve maximum flow rate 100%"
 setTimeout(() => {
                 rotating_gauges1.addEventListener("click",  () => {
                    if(f === 18){
                f = 19;
                   rotating_gauges1.style.transform = "rotate(-350deg)"
                 setTimeout(() => {
                    pumpA_differential_pressure.innerText = "3.62"
        pumpA_volumeteric_rate.innerText = "30.23"
        pumpB_differential_pressure.innerText = "-0.58"
        pumpB_volumeteric_rate.innerText = "0"
        pumpB_suction_pressure.innerText = "0.62"
        pumpA_discharge_pressure.innerText = "63.2"
        pump_additional_pressure.innerText = "0.24"
                console.log("f = 18 is running");
                              rotating_gauges1.addEventListener("click",  () => {
                    if(f === 19){
                f = 20;
                   rotating_gauges1.style.transform = "rotate(-420deg)"
setTimeout(() => {
                    pumpA_differential_pressure.innerText = "2.22"
        pumpA_volumeteric_rate.innerText = "28.26"
        pumpB_differential_pressure.innerText = "-0.58"
        pumpB_volumeteric_rate.innerText = "0"
        pumpB_suction_pressure.innerText = "0.56"
        pumpA_discharge_pressure.innerText = "61.2"
        pump_additional_pressure.innerText = "0.47"

                    setTimeout(() => {
                      pumpA_shaft_torque.innerText == "15.40"
                    pumpA_differential_pressure.innerText = "1.72"
        pumpA_volumeteric_rate.innerText = "42.18"
        pumpB_differential_pressure.innerText = "-0.58"
        pumpB_volumeteric_rate.innerText = "0"
        pumpB_suction_pressure.innerText = "0.60"
        pumpA_discharge_pressure.innerText = "66.7"
        pump_additional_pressure.innerText = "0.54"
                console.log("f = 19 is running");
                 if(f === 20){
                f = 21;
                ins.innerText = "Now record all the values this is the value at 1150 RPM For Pump A, We have to compare Readings with different flow rates ✅✅"
                 observation_table_command.style.visibility = "visible"
                 pulse(observation_table_command)
                 setTimeout(() => {
                observation_table_1150_text.style.visibility = "visible"
                popUp(observation_table_1150_text)
                
                      observation_table_1150_text.addEventListener("click", () => {
    pulse(observation_table_1150_text);

    if (observation_table_1150.style.visibility === "visible") {
        observation_table_1150.style.visibility = "hidden";
       
    } else {
        observation_table_1150.style.visibility = "visible";
        observation_table_1150_text.style.visibility = "visible";
    }
});
       rotating_gauges1.style.visibility = "hidden"
       rotating_gauges2.style.visibility = "visible"
 setTimeout(() => {
                ins.innerText = "Now Click On Next Button To Repeat The Experiment For Different Flow Rate Such As 85%"      
                  
                 startbutton.style.opacity = "100%";
    startlab.style.visibility = "visible";
    startbutton.innerText = "Next";  // ✅ Corrected
     startbutton.onclick = pump_85;
                  },2500)    //2500
       },1500)    //1500

      }
              },1500)   //1500
               },1500)   //1500
                    }
                   
                 })
                  },1500)  //1500
                    }
                 })
          },200)
          },1500)   //1500
          },1500)     //1500
              }
              
            }, { once: true });
          },1500)    // 1500
    },1500)     //1500
  },2000);    //2000
   },1000);
  }else{"no run"}
  })

       }
  })
  },1000)
        }
    });



  },1000);
}
});
   }
}); 
      
}, 1000)
 },1000);
    //  }else{"no run"}
  } , { once: true });
  }else{"no run"}



 
             

               
if (pumpA_discharge_pressure) {
    pulse(pumpA_discharge_pressure); // call pulse
    console.log("pump make pulse")
} else {
    console.warn("Element not found!");
}
pulse(pumpA_discharge_pressure);

pulse(pumpA_differential_pressure);
pulse(pumpA_volumeteric_rate);
pulse(pumpA_shaft_torque);
pulse(pumpA_angular_velocity);

// Pump B
pulse(pumpB_suction_pressure);
pulse(pump_additional_pressure);
pulse(pumpB_differential_pressure);
pulse(pumpB_volumeteric_rate);
pulse(pumpB_shaft_torque);
pulse(pumpB_angular_velocity);
  // show the start button + label after clicking

   f = 11;
   
                      }, 1000); 
    }
});
              
           }, 1000);       
    }, 1000);
    
  
   
          
     


        
   
  }
}




// function mainLabel9() {
//   if (f === 11) {
    
   
  
   
          
//       startbutton.style.opacity = "100%";
//     startlab.style.visibility = "visible";
//     startbutton.innerText = "Next";  // ✅ Corrected
//      startbutton.onclick = mainLabel7;


        
//     f = 12;
//   }
let freqValue = 19.0; // initial value
const freqDisplay = document.getElementById("frequency_driver_display");
const maxValue = 19.2; // set your max limit here

function updateFrequency() {
  // increase by 0.1 only if below max
  if (freqValue <= maxValue) {
    freqValue += 0.1;

    // keep only 1 decimal place
    freqValue = parseFloat(freqValue.toFixed(1));
  } 
   if (freqValue >= maxValue) {
   f = 16; // reset immediately
  }

  // update the display (always show the latest value)
  freqDisplay.innerText = `${freqValue}`;

  // animate (pulse)
  pulse(up_button1);
  pulse(up_button_text);
}


function pulse(element) {
    element.classList.add("pulse-effect");
    setTimeout(() => {
        element.classList.remove("pulse-effect");
    }, 1000);   
}

function popUp(element) {
  if (!element) return;

  
  console.log("PopUp called for:", element.id);

  element.style.visibility = "visible";
  element.style.opacity = "1";
  element.style.transform = "scale(0)";       // start small
  element.style.transition = "transform 1s ease, opacity 1s ease";

  // trigger animation in next frame
  requestAnimationFrame(() => {
    
  console.log("PopUp called for:", element.id);
    element.style.opacity = "1";  
    element.style.transform = "scale(1)";
  });
} 

function pump_85() {
  // increase by 0.1 only if below max
       if (observation_table_1150.style.visibility === "visible") {
        // Show warning message
        ins.innerText = "⚠️ Please close the observation table first, then click Next again";
        pulse(observation_table_1150_text);
        return; // Exit function without proceeding
    }
    
    // Continue with pump_85 logic...
    ins.innerText = "Now click On Valves to rotate Clockwise to make the maximum flow rate 60%";

    observation_table_1150_text.style.visibility = "hidden"
    observation_table_1150_text.style.opacity = "0%"
    observation_table_1150_text1.style.visibility = "visible"
    observation_table_1150_text1.style.opacity = "100%";
    ins.innerText = "Now Rotate Valves to make the maximum flow rate 85%"
      rotating_gauges2.addEventListener("click",  () => {
         if( f === 21){
          f = 22;
    rotating_gauges2.style.transform = "rotate(120deg)"
             console.log("rotating_gauges2 works")
                      setTimeout(() => {
              pumpA_differential_pressure.innerText = "3.12"
        pumpA_volumeteric_rate.innerText = "16.23"
        pumpB_differential_pressure.innerText = "-0.25"
        pumpB_volumeteric_rate.innerText = "0"
        pumpB_suction_pressure.innerText = "0.18"
        pumpA_discharge_pressure.innerText = "2.66"
        pump_additional_pressure.innerText = "0.4"
        setTimeout(() => {
                      pumpA_differential_pressure.innerText = "3.42"
        pumpA_volumeteric_rate.innerText = "18.23"
        pumpB_differential_pressure.innerText = "-0.35"
        pumpB_volumeteric_rate.innerText = "0"
        pumpB_suction_pressure.innerText = "0.28"
        pumpA_discharge_pressure.innerText = "3.22"
        pump_additional_pressure.innerText = "0.4"
        observation_table_1150_text.style.visibility = "hidden"
        observation_table_1150_text.style.opacity = "0%";
        observation_table_1150_text1.style.visibility = "visible";
        observation_table_1150_text1.style.opacity = "100%";
          
           setTimeout(() => {
                   pumpA_differential_pressure.innerText = "3.14"
        pumpA_volumeteric_rate.innerText = "35.80"
        pumpB_differential_pressure.innerText = "-0.59"
        pumpB_volumeteric_rate.innerText = "0"
        pumpB_suction_pressure.innerText = "0.61"
        pumpA_discharge_pressure.innerText = "66.6"
        pump_additional_pressure.innerText = "0.37"

        ins.innerText = "Now Record All The Readings For 85% Flow Rate"
          observation_table_command.style.visibility = "visible";
          observation_table_1150_text1.style.visibility = "visible";
          observation_table_1150.style.visibility = "hidden";
          observation_table_1150.style.opacity = "0%";
     
          pulse(observation_table_command)
                      observation_table_1150_text1.addEventListener("click",  () => {
                        
    pulse(observation_table_1150_text1);

    if (observation_table_85.style.visibility === "visible") {
        observation_table_85.style.visibility = "hidden";
       
    } else {
        observation_table_85.style.visibility = "visible";
        observation_table_1150_text1.style.visibility = "visible";
    }
  
},);
  setTimeout(() => {
             ins.innerText = "Click on the next button after recording all the data for 85% , Now the time for 60 %"
               
              startbutton.style.opacity = "100%";
    startlab.style.visibility = "visible";
    startbutton.innerText = "Next";  // ✅ Corrected
     startbutton.onclick = pump_60;
     }, 1000);
             }, 1000);    //1500
           }, 1000);
         }, 1000);
        }
        })  
}

function pump_60() {
    ins.innerText = "Now click On Valves to rotate Clockwise to make the maximum flow rate 60%"
       rotating_gauges2.addEventListener("click",  () => {
        if( f === 22){
          f = 23;
    rotating_gauges2.style.transform = "rotate(190deg)"
             console.log("rotating_gauges2 works")
                      setTimeout(() => {
             pumpA_differential_pressure.innerText = "3.14"
        pumpA_volumeteric_rate.innerText = "35.80"
        pumpB_differential_pressure.innerText = "-0.59"
        pumpB_volumeteric_rate.innerText = "0"
        pumpB_suction_pressure.innerText = "0.61"
        pumpA_discharge_pressure.innerText = "66.6"
        pump_additional_pressure.innerText = "0.37"
        setTimeout(() => {
                      pumpA_differential_pressure.innerText = "3.42"
        pumpA_volumeteric_rate.innerText = "18.23"
        pumpB_differential_pressure.innerText = "-0.35"
        pumpB_volumeteric_rate.innerText = "0"
        pumpB_suction_pressure.innerText = "0.28"
        pumpA_discharge_pressure.innerText = "3.22"
        pump_additional_pressure.innerText = "0.4"
        observation_table_1150_text1.style.visibility = "hidden"
        observation_table_1150_text.style.opacity = "0%";
        observation_table_1150_text.style.visibility = "hidden"
        observation_table_1150_text1.style.visibility = "visible";
        observation_table_1150_text1.style.opacity = "100%";
          ins.innerText = "Now Record All The Readings For 85% Flow Rate"
           setTimeout(() => {
            pumpA_shaft_torque.innerText = "11.700 LB-IN"
                   pumpA_differential_pressure.innerText = "4.20"
        pumpA_volumeteric_rate.innerText = "25.18"
        pumpB_differential_pressure.innerText = "0.55"
        pumpB_volumeteric_rate.innerText = "0"
        pumpB_suction_pressure.innerText = "0.55"
        pumpA_discharge_pressure.innerText = "66.4"
        pump_additional_pressure.innerText = "0.471"

        ins.innerText = "Now Record All The Readings For 85% Flow Rate"
          observation_table_command.style.visibility = "visible";
          observation_table_1150_text2.style.visibility = "visible";
          observation_table_85.style.visibility = "hidden";
          observation_table_85.style.opacity = "0%";
          ins.innerText = "Now Click On The Observation Table To see the reading at the 60% flow rate"
          pulse(observation_table_command)
                      observation_table_1150_text2.addEventListener("click",  () => {
                      
    pulse(observation_table_1150_text2);

    if (observation_table_60.style.visibility === "visible") {
        observation_table_60.style.visibility = "hidden";
       
    } else {
        observation_table_60.style.visibility = "visible";
        observation_table_1150_text2.style.visibility = "visible";
    }
});
  setTimeout(() => {
             ins.innerText = "Click on the next button after recording all the data for 60% , Now the time for 40 %"
               
              startbutton.style.opacity = "100%";
    startlab.style.visibility = "visible";
    startbutton.innerText = "Next";  // ✅ Corrected
     startbutton.onclick = pump_40;
     }, 1000);
             }, 100);    //1500
           }, 1000);
         }, 1000);
        }
       }  ,{ once: true })

}

function pump_40() {
    ins.innerText = "Now click On Valves to rotate Clockwise to make the maximum flow rate 40%"
       rotating_gauges2.addEventListener("click",  () => {
         if( f === 23){
          f = 24;
          console.log()
    rotating_gauges2.style.transform = "rotate(420deg)"
             console.log("rotating_gauges2 works")
                      setTimeout(() => {
             pumpA_shaft_torque.innerText = "11.700 LB-IN"
                   pumpA_differential_pressure.innerText = "4.20"
        pumpA_volumeteric_rate.innerText = "25.18"
        pumpB_differential_pressure.innerText = "0.55"
        pumpB_volumeteric_rate.innerText = "0"
        pumpB_suction_pressure.innerText = "0.55"
        pumpA_discharge_pressure.innerText = "66.4"
        pump_additional_pressure.innerText = "0.471"
        setTimeout(() => {
                      pumpA_differential_pressure.innerText = "3.42"
        pumpA_volumeteric_rate.innerText = "18.23"
        pumpB_differential_pressure.innerText = "-0.35"
        pumpB_volumeteric_rate.innerText = "0"
        pumpB_suction_pressure.innerText = "0.28"
        pumpA_discharge_pressure.innerText = "3.22"
        pump_additional_pressure.innerText = "0.4"
        observation_table_1150_text2.style.visibility = "hidden"
        observation_table_1150_text.style.opacity = "0%";
        observation_table_1150_text3.style.visibility = "visible";
        observation_table_1150_text3.style.opacity = "100%";
          ins.innerText = "Now Record All The Readings For 40% Flow Rate"
           setTimeout(() => {
            pumpA_shaft_torque.innerText = "9.700 LB-IN"
                   pumpA_differential_pressure.innerText = "4.90"
        pumpA_volumeteric_rate.innerText = "15.18"
        pumpB_differential_pressure.innerText = "0.55"
        pumpB_volumeteric_rate.innerText = "0"
        pumpB_suction_pressure.innerText = "0.61"
        pumpA_discharge_pressure.innerText = "66.7"
        pump_additional_pressure.innerText = "0.322"

        ins.innerText = "Now Record All The Readings For 40% Flow Rate"
          observation_table_command.style.visibility = "visible";
          observation_table_1150_text3.style.visibility = "visible";
          let visibility = window.getComputedStyle(observation_table_1150_text3).visibility;

if (visibility === "visible") {
    console.log("Element is visible");
} else {
    console.log("Element is not visible");
}
          observation_table_60.style.visibility = "hidden";
          observation_table_60.style.opacity = "0%";
          ins.innerText = "Now Click On The Observation Table To see the reading at the 40% flow rate"
          pulse(observation_table_command)
                      observation_table_1150_text3.addEventListener("click",  () => {
                      
    pulse(observation_table_1150_text3);
          console.log("observation_table_40 is running")
    if (observation_table_40.style.visibility === "visible") {
        observation_table_40.style.visibility = "hidden";
       
    } else {
        observation_table_40.style.visibility = "visible";
        observation_table_1150_text3.style.visibility = "visible";
    }
});
  setTimeout(() => {
             ins.innerText = "Click on the next button after recording all the data for 00% , Now the time for 00%"
                console.log("the text is displaye correctly ")
              startbutton.style.opacity = "100%";
    startlab.style.visibility = "visible";
    startbutton.innerText = "Next";  // ✅ Corrected
     startbutton.onclick = pump_00;
     }, 1000);
             }, 1000);    //1500
           }, 1000);
         }, 1000);
        }
       }  ,{ once: true })

}

function pump_00() {
    ins.innerText = "Now click On Valves to rotate Clockwise to make the maximum flow rate 85%"
       rotating_gauges2.addEventListener("click",  () => {
         if( f === 24){
          f = 25;
    rotating_gauges2.style.transform = "rotate(520deg)"
             console.log("rotating_gauges2 works")
             console.log(" f = 25 is working pump 00 is running")
                      setTimeout(() => {
             pumpA_shaft_torque.innerText = "9.700 LB-IN"
                   pumpA_differential_pressure.innerText = "4.90"
        pumpA_volumeteric_rate.innerText = "15.18"
        pumpB_differential_pressure.innerText = "0.55"
        pumpB_volumeteric_rate.innerText = "0"
        pumpB_suction_pressure.innerText = "0.61"
        pumpA_discharge_pressure.innerText = "66.7"
        pump_additional_pressure.innerText = "0.322"
        setTimeout(() => {
                      pumpA_differential_pressure.innerText = "3.42"
        pumpA_volumeteric_rate.innerText = "18.23"
        pumpB_differential_pressure.innerText = "-0.35"
        pumpB_volumeteric_rate.innerText = "0"
        pumpB_suction_pressure.innerText = "0.28"
        pumpA_discharge_pressure.innerText = "3.22"
        pump_additional_pressure.innerText = "0.4"
        observation_table_1150_text3.style.visibility = "hidden"
        observation_table_1150_text.style.opacity = "0%";
        observation_table_1150_text4.style.visibility = "visible";
        observation_table_1150_text4.style.opacity = "100%";
          ins.innerText = "Now Record All The Readings For 85% Flow Rate"
           setTimeout(() => {
            pumpA_shaft_torque.innerText = "7.210 LB-IN"
                   pumpA_differential_pressure.innerText = "5.31"
        pumpA_volumeteric_rate.innerText = "0"
        pumpB_differential_pressure.innerText = "0.55"
        pumpB_volumeteric_rate.innerText = "0"
        pumpB_suction_pressure.innerText = "0.64"
        pumpA_discharge_pressure.innerText = "66.6"
        pump_additional_pressure.innerText = "0.00"

        ins.innerText = "Now Record All The Readings For 85% Flow Rate"
          observation_table_command.style.visibility = "visible";
          observation_table_1150_text4.style.visibility = "visible";
          observation_table_40.style.visibility = "hidden";
          observation_table_40.style.opacity = "0%";
          ins.innerText = "Now Click On The Observation Table To see the reading at the 60% flow rate"
          pulse(observation_table_command)
                      observation_table_1150_text4.addEventListener("click",  () => {
                      
    pulse(observation_table_1150_text4);

    if (observation_table_00.style.visibility === "visible") {
        observation_table_00.style.visibility = "hidden";
       
    } else {
        observation_table_00.style.visibility = "visible";
        observation_table_1150_text4.style.visibility = "visible";
    }
});
  setTimeout(() => {
             ins.innerText = "Click on the next button after recording all the data for 40% , Now the time for 00%"
               
              startbutton.style.opacity = "100%";
    startlab.style.visibility = "visible";
    startbutton.innerText = "Next";  // ✅ Corrected
     startbutton.onclick = pump_1750;
     }, 1000);
             }, 1000);    //1500
           }, 1000);
         }, 1000);
        }
       }  ,{ once: true })

}

function pump_1750() {
  ins.innerText = "Click On The Stop Button To Stop It ";
  stop_button_text.style.visibility = "visible";
  stop_button_text.style.opacity = "100%";

  let visibility3 = window.getComputedStyle(stop_button_text).visibility;
  if (visibility3 === "visible") {
    console.log("Element is visible");
  } else {
    console.log("Element is not visible");
  }

  stop_button_text.addEventListener("click", () => {
    if (f === 25) {
      f = 26;
      console.log("the value of f is", f);
      pulse(stop_button_text);
    observation_table_command.style.visibility = "hidden"
      setTimeout(() => {
        ins.innerText =
          "Now Click on the Up button to increase the frequency to 29.3 which is equivalent to 1750 RPM";

        up_button_text.style.visibility = "hidden";
        up_button_text1.style.visibility = "visible";
        stop_button_text.style.visibility = "hidden";

        let visibility2 = window.getComputedStyle(up_button_text1).visibility;
        if (visibility2 === "visible") {
          console.log("Element up_button_text is visible");
        } else {
          console.log("Element up_button_text not visible");
        }
       
        up_button_text1.addEventListener(
          "click",
          () => {
            pulse(up_button_text1);
            updateFrequency1();
              if (f === 80) {
      f = 27;
             run_button_text1.style.visibility = "visible"
          
             

                run_button_text1.addEventListener("click", () => {
               
                  pulse(run_button_text1);
                  pulse(run_button1);

                  pumpA_shaft_torque.innerText = "15.080 LB-IN";
                  pumpA_angular_velocity.innerText = "1750.0 RPM";
                  pulse(pumpA_angular_velocity);
                  pulse(pumpA_shaft_torque);
                  pulse(run_button1);
                  pulse(pumpA_differential_pressure);
                  pulse(pumpA_angular_velocity);
                  pulse(pumpB_differential_pressure);
                  pulse(pumpB_angular_velocity);
                  pulse(pump_additional_pressure);

                  run_button_text.style.visibility = "hidden";

                  setTimeout(() => {
                    pumpA_shaft_torque.innerText = "24.060 LB-IN";
                    rotating_gauges1.style.visibility = "visible";
                    pumpA_differential_pressure.innerText = "41.2";
                    pumpA_volumeteric_rate.innerText = "17.23";
                    pumpB_differential_pressure.innerText = "-0.28";
                    pumpB_volumeteric_rate.innerText = "0";
                    pumpB_suction_pressure.innerText = "0.22";
                    pumpA_discharge_pressure.innerText = "3.67";
                    pump_additional_pressure.innerText = "0.5";

                    setTimeout(() => {
                      rotating_gauges1.style.visibility = "visible";
                      pumpA_differential_pressure.innerText = "4.52";
                      pumpA_volumeteric_rate.innerText = "19.23";
                      pumpB_differential_pressure.innerText = "-0.48";
                      pumpB_volumeteric_rate.innerText = "0";
                      pumpB_suction_pressure.innerText = "0.32";
                      pumpA_discharge_pressure.innerText = "4.67";
                      pump_additional_pressure.innerText = "0.10";
                      rotating_gauges2.style.visibility = "hidden";
                      rotating_gauges3.style.visibility = "visible";

                      setTimeout(() => {
                        pumpA_shaft_torque.innerText = "30.040 LB-IN";
                        rotating_gauges1.style.visibility = "visible";
                        pumpA_differential_pressure.innerText = "10.93";
                        pumpA_volumeteric_rate.innerText = "32.31";
                        pumpB_differential_pressure.innerText = "-0.58";
                        pumpB_volumeteric_rate.innerText = "0";
                        pumpB_suction_pressure.innerText = "0.62";
                        pumpA_discharge_pressure.innerText = "11.55";
                        pump_additional_pressure.innerText = "0.37";

                        run_button_text1.style.visibility = "hidden";
                        ins.innerText =
                          "Click On The Circular Gauge To Rotate It full Anticlockwise To Acheive Maximum Flow Rate ✅✅ At 1750 RPM";

                        rotating_gauges3.addEventListener("click", () => {
                          if (f === 27) {
                            f = 28;
                            rotating_gauges3.style.transform = "rotate(-200deg)";

                            setTimeout(() => {
                              pumpA_differential_pressure.innerText = "7.2";
                              pumpA_volumeteric_rate.innerText = "43.0";
                              pumpB_differential_pressure.innerText = "-0.88";
                              pumpB_volumeteric_rate.innerText = "0";
                              pumpB_suction_pressure.innerText = "0.94";
                              pumpA_discharge_pressure.innerText = "98.4";
                              pump_additional_pressure.innerText = "0.24";

                              setTimeout(() => {
                                pumpA_differential_pressure.innerText = "6.7";
                                pumpA_volumeteric_rate.innerText = "40.0";
                                pumpB_differential_pressure.innerText = "-0.58";
                                pumpB_volumeteric_rate.innerText = "0";
                                pumpB_suction_pressure.innerText = "0.94";
                                pumpA_discharge_pressure.innerText = "93.8";
                                pump_additional_pressure.innerText = "1.1";

                                ins.innerText =
                                  "Now Again Click On The rotating valve For rotating anticlockwise to achieve maximum flow rate 100%";

                                setTimeout(() => {
                                  rotating_gauges3.addEventListener("click", () => {
                                    if (f === 28) {
                                      f = 29;
                                      rotating_gauges3.style.transform =
                                        "rotate(-350deg)";

                                      setTimeout(() => {
                                        pumpA_differential_pressure.innerText = "5.5";
                                        pumpA_volumeteric_rate.innerText = "46.0";
                                        pumpB_differential_pressure.innerText = "-0.88";
                                        pumpB_volumeteric_rate.innerText = "0";
                                        pumpB_suction_pressure.innerText = "0.94";
                                        pumpA_discharge_pressure.innerText = "96.2";
                                        pump_additional_pressure.innerText = "0.37";

                                        console.log("f = 28 is running");

                                        rotating_gauges3.addEventListener(
                                          "click",
                                          () => {
                                            if (f === 29) {
                                              f = 30;
                                              rotating_gauges3.style.transform =
                                                "rotate(-420deg)";

                                              setTimeout(() => {
                                                pumpA_differential_pressure.innerText =
                                                  "3.4";
                                                pumpA_volumeteric_rate.innerText =
                                                  "43.0";
                                                pumpB_differential_pressure.innerText =
                                                  "-0.88";
                                                pumpB_volumeteric_rate.innerText = "0";
                                                pumpB_suction_pressure.innerText =
                                                  "0.85";
                                                pumpA_discharge_pressure.innerText =
                                                  "93.0";
                                                pump_additional_pressure.innerText =
                                                  "0.71";

                                                setTimeout(() => {
                                                  pumpA_shaft_torque.innerText =
                                                    "23.46";
                                                  pumpA_differential_pressure.innerText =
                                                    "2.6";
                                                  pumpA_volumeteric_rate.innerText =
                                                    "64.1";
                                                  pumpB_differential_pressure.innerText =
                                                    "-0.88";
                                                  pumpB_volumeteric_rate.innerText =
                                                    "0";
                                                  pumpB_suction_pressure.innerText =
                                                    "0.91";
                                                  pumpA_discharge_pressure.innerText =
                                                    "101.4";
                                                  pump_additional_pressure.innerText =
                                                    "0.82";

                                                  console.log("f = 29 is running");

                                                  if (f === 30) {
                                                    f = 31;
                                                    ins.innerText =
                                                      "Now record all the values this is the value at 1750 RPM For Pump A, We have to compare Readings with different flow rates ✅✅";
                                                    observation_table_command1.style.visibility =
                                                      "visible";
                                                    pulse(observation_table_command1);

                                                    setTimeout(() => {
                                                      observation_table_1750_text.style.visibility =
                                                        "visible";
                                                      popUp(
                                                        observation_table_1750_text
                                                      );

                                                   observation_table_1750_text.addEventListener("click", () => {
  pulse(observation_table_1750_text);

  if (observation_table_1750_100.style.visibility === "visible") {
    observation_table_1750_100.style.visibility = "hidden";
    observation_table_1750_text.style.visibility = "visible";

    // 🔹 Print message if visible
    console.log("Observation table is currently visible, hiding it now.");
  } else {
    observation_table_1750_100.style.visibility = "visible";
    observation_table_1750_text.style.visibility = "visible";

    // 🔹 Print message if not visible
    console.log("Observation table is not visible, showing it now.");
  }
});


                                                     

                                                      setTimeout(() => {
                                                        ins.innerText =
                                                          "Now Click On Next Button To Repeat The Experiment For Different Flow Rate Such As 85%";
                                                          
                                                        startbutton.style.opacity =
                                                          "100%";
                                                        startlab.style.visibility =
                                                          "visible";
                                                        startbutton.innerText =
                                                          "Next";
                                                        startbutton.onclick =
                                                          pump_1750_85;
                                                      }, 1000);
                                                    }, 1000);
                                                  }
                                                }, 1000);
                                              }, 1000);
                                            }
                                          }
                                        );
                                      }, 1000);
                                    }
                                  });
                                }, 1000);
                              }, 1000);
                            }, 1000);
                          }
                        });
                      }, 1000);
                    }, 1000);
                    
                  }, 1000);
                
              }, 1000);
              }
          },
         
        );
      }, 1000);
    }
  });
}



let freqValue1 = 29.2;
let maxValue1 = 29.3;

const freqDisplay1 = document.getElementById("frequency_driver_display");

function updateFrequency1() {
  // increase by 0.1 only if below max
  if (freqValue1 < maxValue1) {
    freqValue1 += 0.1;
    freqValue1 = parseFloat(freqValue1.toFixed(1)); // keep 1 decimal
    console.log("updateFrequency1 is running");
    console.log(freqValue1);
  } else {
    console.log("Reached max value, cannot increase further");
    f = 80
    up_button_text1.style.visibility = "hidden"
  }

  // update the display
  freqDisplay1.innerText = `${freqValue1}`;

  // animate (pulse)
  pulse(up_button1);
  pulse(up_button_text1);
}


function pump_1750_85() {
        if (f === 31) {
            f = 32
  observation_table_1750_text.style.visibility = "hidden"
  observation_table_1750_text.style.opacity = "0%"
  observation_table_1750_text1.style.visibility = "visible"
  observation_table_1750_text1.style.opacity = "100%";
  ins.innerText = "Now click On Valves to rotate Clockwise to make the maximum flow rate 85%"
  console.log("1750_85 is running")
    rotating_gauges2.style.visibility = "hidden"; 
   rotating_gauges3.addEventListener("click", () => {
  rotating_gauges3.style.transform = "rotate(220deg)"
  console.log("rotating_gauges3 works")
  console.log("rotating_gauges3 is working for 85%")
  
  setTimeout(() => {
    pumpA_differential_pressure.innerText = "4.7"
    pumpA_volumeteric_rate.innerText = "24.7"
    pumpB_differential_pressure.innerText = "-0.38"
    pumpB_volumeteric_rate.innerText = "0"
    pumpB_suction_pressure.innerText = "0.27"
    pumpA_discharge_pressure.innerText = "4.05"
    pump_additional_pressure.innerText = "0.61"
    
    setTimeout(() => {
      pumpA_differential_pressure.innerText = "5.2"
      pumpA_volumeteric_rate.innerText = "27.7"
      pumpB_differential_pressure.innerText = "-0.53"
      pumpB_volumeteric_rate.innerText = "0"
      pumpB_suction_pressure.innerText = "0.43"
      pumpA_discharge_pressure.innerText = "4.9"
      pump_additional_pressure.innerText = "0.61"
      
      observation_table_1750_text.style.visibility = "hidden"
      observation_table_1750_text.style.opacity = "0%";
      observation_table_1750_text1.style.visibility = "visible";
      observation_table_1750_text1.style.opacity = "100%";
        
      setTimeout(() => {
        pumpA_differential_pressure.innerText = "4.8"
        pumpA_volumeteric_rate.innerText = "54.5"
        pumpB_differential_pressure.innerText = "-0.90"
        pumpB_volumeteric_rate.innerText = "0"
        pumpB_suction_pressure.innerText = "0.93"
        pumpA_discharge_pressure.innerText = "101.2"
        pump_additional_pressure.innerText = "0.56"

        ins.innerText = "Now Record All The Readings For 85% Flow Rate"
        observation_table_command1.style.visibility = "visible";
        observation_table_1750_text1.style.visibility = "visible";
        observation_table_1750_text.style.visibility = "hidden";
        observation_table_1750_text.style.opacity = "0%";
        observation_table_1750_100.style.visibility = "hidden";
        pulse(observation_table_command1)
        
        observation_table_1750_text1.addEventListener("click", () => {
          pulse(observation_table_1750_text1);

          if (observation_table_1750_85.style.visibility === "visible") {
            observation_table_1750_85.style.visibility = "hidden";
          } else {
            observation_table_1750_85.style.visibility = "visible";
            observation_table_1750_text1.style.visibility = "visible";
          }
        });
        
        setTimeout(() => {
          ins.innerText = "Click on the next button after recording all the data for 85% , Now the time for 60 %"
           
          startbutton.style.opacity = "100%";
          startlab.style.visibility = "visible";
          startbutton.innerText = "Next";
          startbutton.onclick = pump_1750_60;
        }, 1000);
      }, 0);
    }, 0);
  }, 1000);
})
        }
}

// Function for 60% flow rate at 1750 RPM
function pump_1750_60() {
  ins.innerText = "Now click On Valves to rotate Clockwise to make the maximum flow rate 60%"
  
  rotating_gauges3.addEventListener("click", () => {
    if(f === 32){
      f = 33;
      rotating_gauges3.style.transform = "rotate(190deg)"
      console.log("rotating_gauges2 works")
      
      setTimeout(() => {
        pumpA_differential_pressure.innerText = "4.8"
        pumpA_volumeteric_rate.innerText = "54.5"
        pumpB_differential_pressure.innerText = "-0.90"
        pumpB_volumeteric_rate.innerText = "0"
        pumpB_suction_pressure.innerText = "0.93"
        pumpA_discharge_pressure.innerText = "101.2"
        pump_additional_pressure.innerText = "0.56"
        
        setTimeout(() => {
          pumpA_differential_pressure.innerText = "5.2"
          pumpA_volumeteric_rate.innerText = "27.7"
          pumpB_differential_pressure.innerText = "-0.53"
          pumpB_volumeteric_rate.innerText = "0"
          pumpB_suction_pressure.innerText = "0.43"
          pumpA_discharge_pressure.innerText = "4.9"
          pump_additional_pressure.innerText = "0.61"
          
          observation_table_1750_text1.style.visibility = "hidden"
          observation_table_1750_text.style.opacity = "0%";
          observation_table_1750_text.style.visibility = "hidden"
          observation_table_1750_text1.style.visibility = "visible";
          observation_table_1750_text1.style.opacity = "100%";
          ins.innerText = "Now Record All The Readings For 60% Flow Rate"
          
          setTimeout(() => {
            pumpA_shaft_torque.innerText = "17.820 LB-IN"
            pumpA_differential_pressure.innerText = "6.4"
            pumpA_volumeteric_rate.innerText = "38.3"
            pumpB_differential_pressure.innerText = "0.84"
            pumpB_volumeteric_rate.innerText = "0"
            pumpB_suction_pressure.innerText = "0.84"
            pumpA_discharge_pressure.innerText = "101.0"
            pump_additional_pressure.innerText = "0.717"

            ins.innerText = "Now Record All The Readings For 60% Flow Rate"
            observation_table_command1.style.visibility = "visible";
            observation_table_1750_text2.style.visibility = "visible";
            observation_table_1750_85.style.visibility = "hidden";
            observation_table_1750_85.style.opacity = "0%";
            ins.innerText = "Now Click On The Observation Table To see the reading at the 60% flow rate"
            pulse(observation_table_command1)
            
            observation_table_1750_text2.addEventListener("click", () => {
              pulse(observation_table_1750_text2);

              if (observation_table_1750_60.style.visibility === "visible") {
                observation_table_1750_60.style.visibility = "hidden";
              } else {
                observation_table_1750_60.style.visibility = "visible";
                observation_table_1750_text2.style.visibility = "visible";
              }
            });
            
            setTimeout(() => {
              ins.innerText = "Click on the next button after recording all the data for 60% , Now the time for 40 %"
               
              startbutton.style.opacity = "100%";
              startlab.style.visibility = "visible";
              startbutton.innerText = "Next";
              startbutton.onclick = pump_1750_40;
            }, 1000);
          }, 0);
        }, 0);
      }, 1000);
    }
  }, { once: true })
}

// Function for 40% flow rate at 1750 RPM
function pump_1750_40() {
  ins.innerText = "Now click On Valves to rotate Clockwise to make the maximum flow rate 40%"
  
  rotating_gauges3.addEventListener("click", () => {
    if(f === 33){
      f = 34;
      rotating_gauges3.style.transform = "rotate(420deg)"
      console.log("rotating_gauges2 works")
      
      setTimeout(() => {
        pumpA_shaft_torque.innerText = "17.820 LB-IN"
        pumpA_differential_pressure.innerText = "6.4"
        pumpA_volumeteric_rate.innerText = "38.3"
        pumpB_differential_pressure.innerText = "0.84"
        pumpB_volumeteric_rate.innerText = "0"
        pumpB_suction_pressure.innerText = "0.84"
        pumpA_discharge_pressure.innerText = "101.0"
        pump_additional_pressure.innerText = "0.717"
        
        setTimeout(() => {
          pumpA_differential_pressure.innerText = "5.2"
          pumpA_volumeteric_rate.innerText = "27.7"
          pumpB_differential_pressure.innerText = "-0.53"
          pumpB_volumeteric_rate.innerText = "0"
          pumpB_suction_pressure.innerText = "0.43"
          pumpA_discharge_pressure.innerText = "4.9"
          pump_additional_pressure.innerText = "0.61"
          
          observation_table_1750_text2.style.visibility = "hidden"
          observation_table_1750_text.style.opacity = "0%";
          observation_table_1750_text3.style.visibility = "visible";
          observation_table_1750_text3.style.opacity = "100%";
          ins.innerText = "Now Record All The Readings For 40% Flow Rate"
          
          setTimeout(() => {
            pumpA_shaft_torque.innerText = "14.760 LB-IN"
            pumpA_differential_pressure.innerText = "7.5"
            pumpA_volumeteric_rate.innerText = "23.1"
            pumpB_differential_pressure.innerText = "0.84"
            pumpB_volumeteric_rate.innerText = "0"
            pumpB_suction_pressure.innerText = "0.93"
            pumpA_discharge_pressure.innerText = "101.4"
            pump_additional_pressure.innerText = "0.490"

            ins.innerText = "Now Record All The Readings For 40% Flow Rate"
            observation_table_command1.style.visibility = "visible";
            observation_table_1750_text3.style.visibility = "visible";
            
            let visibility = window.getComputedStyle(observation_table_1750_text3).visibility;

            if (visibility === "visible") {
              console.log("Element is visible");
            } else {
              console.log("Element is not visible");
            }
            
            observation_table_1750_60.style.visibility = "hidden";
            observation_table_1750_60.style.opacity = "0%";
            ins.innerText = "Now Click On The Observation Table To see the reading at the 40% flow rate"
            pulse(observation_table_command1)
            
            observation_table_1750_text3.addEventListener("click", () => {
              pulse(observation_table_1750_text3);
              console.log("observation_table_1750_40 is running")
              
              if (observation_table_1750_40.style.visibility === "visible") {
                observation_table_1750_40.style.visibility = "hidden";
              } else {
                observation_table_1750_40.style.visibility = "visible";
                observation_table_1750_text3.style.visibility = "visible";
              }
            });
            
            setTimeout(() => {
              ins.innerText = "Click on the next button after recording all the data for 40% , Now the time for 00%"
              console.log("the text is displayed correctly ")
              
              startbutton.style.opacity = "100%";
              startlab.style.visibility = "visible";
              startbutton.innerText = "Next";
              startbutton.onclick = pump_1750_00;
            }, 1000);
          }, 1000);
        }, 100);
      }, 1000);
    }
  }, { once: true })
}

// Function for 0% flow rate at 1750 RPM
function pump_1750_00() {
  ins.innerText = "Now click On Valves to rotate Clockwise to make the maximum flow rate 0%"
  
  rotating_gauges3.addEventListener("click", () => {
    if(f === 34){
      f = 35;
      rotating_gauges3.style.transform = "rotate(520deg)"
      console.log("rotating_gauges2 works")
      console.log(" f = 35 is working pump 1750_00 is running")
      
      setTimeout(() => {
        pumpA_shaft_torque.innerText = "14.760 LB-IN"
        pumpA_differential_pressure.innerText = "7.5"
        pumpA_volumeteric_rate.innerText = "23.1"
        pumpB_differential_pressure.innerText = "0.84"
        pumpB_volumeteric_rate.innerText = "0"
        pumpB_suction_pressure.innerText = "0.93"
        pumpA_discharge_pressure.innerText = "101.4"
        pump_additional_pressure.innerText = "0.490"
        
        setTimeout(() => {
          pumpA_differential_pressure.innerText = "5.2"
          pumpA_volumeteric_rate.innerText = "27.7"
          pumpB_differential_pressure.innerText = "-0.53"
          pumpB_volumeteric_rate.innerText = "0"
          pumpB_suction_pressure.innerText = "0.43"
          pumpA_discharge_pressure.innerText = "4.9"
          pump_additional_pressure.innerText = "0.61"
          
          observation_table_1750_text3.style.visibility = "hidden"
          observation_table_1750_text.style.opacity = "0%";
          observation_table_1750_text4.style.visibility = "visible";
          observation_table_1750_text4.style.opacity = "100%";
          ins.innerText = "Now Record All The Readings For 0% Flow Rate"
          
          setTimeout(() => {
            pumpA_shaft_torque.innerText = "10.970 LB-IN"
            pumpA_differential_pressure.innerText = "8.1"
            pumpA_volumeteric_rate.innerText = "0"
            pumpB_differential_pressure.innerText = "0.84"
            pumpB_volumeteric_rate.innerText = "0"
            pumpB_suction_pressure.innerText = "0.97"
            pumpA_discharge_pressure.innerText = "101.2"
            pump_additional_pressure.innerText = "0.00"

            ins.innerText = "Now Record All The Readings For 0% Flow Rate"
            observation_table_command1.style.visibility = "visible";
            observation_table_1750_text4.style.visibility = "visible";
            observation_table_1750_40.style.visibility = "hidden";
            observation_table_1750_40.style.opacity = "0%";
            ins.innerText = "Now Click On The Observation Table To see the reading at the 0% flow rate"
            pulse(observation_table_command1)
            
            observation_table_1750_text4.addEventListener("click", () => {
              pulse(observation_table_1750_text4);

              if (observation_table_1750_00.style.visibility === "visible") {
                observation_table_1750_00.style.visibility = "hidden";
              } else {
                observation_table_1750_00.style.visibility = "visible";
                observation_table_1750_text4.style.visibility = "visible";
              }
            });
            
            setTimeout(() => {
              ins.innerText = "Click on the next button after recording all the data for 0% , Experiment Complete!"
               
              startbutton.style.opacity = "100%";
              startlab.style.visibility = "visible";
              startbutton.innerText = "Complete";
              startbutton.onclick = experiment_complete;
            }, 4000);
          }, 100);
        }, 100);
      }, 1000);
    }
  }, { once: true })
}

// Function to handle experiment completion
function experiment_complete() {
  ins.innerText = "Experiment completed! All data has been recorded for both 1150 RPM and 1750 RPM operations."
  startbutton.style.visibility = "hidden";
  startlab.style.visibility = "hidden";
}