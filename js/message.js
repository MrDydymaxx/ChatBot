function myInput() {
  var message = document.querySelector(".form-control").value;
	document.querySelector(".conversation").insertAdjacentHTML('beforeend','<div class="d-flex justify-content-end mb-4 new-message">'+
      		'<div class="msg_container_send">'+
            	'<span class="msg_name">Panda</span>'+
            	'<span>'+ message +'</span>'+
            	'<span class="msg_time">9:20 AM, Today</span>'+
            '</div>'+
            '<div class="img_cont_msg">'+
            	'<img src="https://static.thenounproject.com/png/67331-200.png" class="rounded-circle user_img_msg" />'+
            '</div>'+
           '</div>');
	botAnswers(message,data);
	document.querySelector(".form-control").value = "";
}
var send = document.querySelector(".form-control");
send.addEventListener("keyup", function(event) {
  if (event.key === "Enter") {
    event.preventDefault();
    myInput();
  }
});