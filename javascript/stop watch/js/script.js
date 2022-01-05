let time = 00;
let clock = setInterval(clockTime, 10)
function clockTime(params) {

    let date = new Date
    let update =  date.toLocaleTimeString();
    document.getElementById("watch").innerHTML = update
}
clockTime();



	var interval = null; // interval id
    
    var start = null; // start time
    var split = null; // split time
    var interval;
    
	var display = document.getElementById('display');
	var times = document.getElementById('times');

    function startStopwatch() {
    	if(interval)
          	return;

      	start = new Date();
      
      	if(split) {
          	times.style.display = 'none';
          	times.innerHTML = '';
          
        	split = null;
        }
      
      	function tick() {
        	var now = new Date();
          	
          	if(split) {
            	var html = '<div class="total-time">' 
                	+ renderTime(start, now) 
                	+ '</div>'
                	+ '<div class="split-time">' 
                	+ renderTime(split, now)
                	+ '</div>';
              
              	display.innerHTML = html;
            } else {
            	var html = '<div class="total-time">' 
                	+ renderTime(start, now) 
                	+ '</div>';
              
              	display.innerHTML = html;
            }
        }
      
      	interval = setInterval(tick, 10); // once per 10 ms
    }
    
    function stopStopwatch() {
    	if(interval) {
        	clearInterval(interval);

          	interval = null;
        }
    }
    
    function splitTime() {
    	if(interval) {
         	var now = new Date();

          	if (split == null) {
                times.innerHTML += '<div class="total-time">' 
                    + renderTime(start, now)
                    + '</div>';
              
            	times.style.display = 'block';
            } else {
            	times.innerHTML += '<div class="total-time">' 
                    + renderTime(start, now)
                    + '</div>';
            }
 
          	split = now;
        }
    }
     function pause () {
        if(interval) {
        	clearTimeout(interval)

          	interval = null;
        }
    }
    function reset() {
       display.innerText = ""
       times.innerText = ""
	   
    }

 