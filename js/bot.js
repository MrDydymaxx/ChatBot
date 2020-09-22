var message = "weather";
var text = '{"bot" : [{"answers": [{"weather":"il fait chaud","firstName":"Anna","lastName":"Smith", "dice": "6"}],"picture":"https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/bb21e21f-895d-45d5-b485-30aa061f1b51/d59i9x1-eb1916f1-eb75-4a06-bff3-8753647e09ea.png?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOiIsImlzcyI6InVybjphcHA6Iiwib2JqIjpbW3sicGF0aCI6IlwvZlwvYmIyMWUyMWYtODk1ZC00NWQ1LWI0ODUtMzBhYTA2MWYxYjUxXC9kNTlpOXgxLWViMTkxNmYxLWViNzUtNGEwNi1iZmYzLTg3NTM2NDdlMDllYS5wbmcifV1dLCJhdWQiOlsidXJuOnNlcnZpY2U6ZmlsZS5kb3dubG9hZCJdfQ.zSHlP2JZJIK-M-OdipNQ9GKc-xlyTSWLQQ4-I7Z7T0Q"},{"answers":[{"weather":"il fait froid","firstName":"Rock","lastName":"Dupon", "genre":"transgenre"}],"picture":"https://i.pinimg.com/originals/3a/dd/ca/3addca1ccea8b7c2f69144973a3994b7.jpg"},{"answers": [{"weather":"il fait humide","firstName":"Nemo","lastName":"Marrin", "talk":"ou est mon fils !!!"}],"picture":"https://w0.pngwave.com/png/613/639/counter-strike-global-offensive-counter-strike-source-counter-strike-1-6-video-game-others-png-clip-art-thumbnail.png"}]}';
var bot = JSON.parse(text);
console.log(bot);
for (var i = 0; i < bot["bot"].length; i++) {
	if (bot["bot"][i]["answers"][0][message] != undefined) {
		console.log(bot["bot"][i]["answers"][0][message]);
    var div = document.createElement("div");


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
