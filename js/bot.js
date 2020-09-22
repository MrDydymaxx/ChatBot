function botAnswers(message,data) {
  for (var i = 0; i < bot["bot"].length; i++) {
    if (bot["bot"][i]["answers"][0][message] != undefined) {
      document.querySelector(".conversation").insertAdjacentHTML('beforeend','<div class="d-flex justify-content-start mb-4 new-message">' +
            '<div class="img_cont_msg">' +
              '<img src=" '+ bot['bot'][i]['picture'] +' " class="rounded-circle user_img_msg" />'+
            '</div>' +
            '<div class="msg_container">' +
              '<span class="msg_name">' +
              bot["bot"][i]["answers"][0]['firstName'] + 
              ' ' + bot["bot"][i]["answers"][0]['lastName'] + 
              '</span>' +
              '<span>' +
              bot["bot"][i]["answers"][0][message] +
              '</span>' +
              '<span class="msg_time">9:12 AM, Today</span>' +
            '</div>' +
          '</div>');
    }
  }
}
function botList(data) {
  for (var i = 0; i < bot["bot"].length; i++) {
    document.querySelector(".navigate").insertAdjacentHTML('beforeend','<div class="row contact">'+
          '<div class="col-4 text-center">'+
            '<img src="'+bot["bot"][i]["picture"]+'" class="contact-pic rounded-circle"/>'+
          '</div>'+
          '<div class="col-6">'+
            '<span>'+bot["bot"][i]["answers"][0]["firstName"]+' '+bot["bot"][i]["answers"][0]["lastName"]+'</span>'+
          '</div>'+
          '<div class="col-1 notification">'+
            '<span class="'+bot["bot"][i]["class"]+'"></span>'+
          '</div>'+
        '</div>');
  }
}
