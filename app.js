function updateClock(){
	const now = new Date(); 
	var hour = document.getElementById('hour');
	var minute = document.getElementById('minute');
	var seconds = document.getElementById('seconds');
	hour.innerHTML =  now.getHours() ;         
	minute.innerHTML = now.getMinutes();       
	seconds.innerHTML = now.getSeconds();   	

}
setInterval(updateClock, 1000);
