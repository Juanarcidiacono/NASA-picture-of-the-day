function url_picture() {
  var data = {
    "url": "https://api.nasa.gov/planetary/apod?date=" + date() + "&api_key=DEMO_KEY",
    "method": "GET",
    "timeout": 0,
  };
  $(".picture").empty()

  $.ajax(data).done(function (response) {
    var url_picture = response["url"]
    console.log(url_picture)
    $(".picture").append("<img src="+ url_picture+" alt='Picture of the day' />")
    return url_picture;
  });
}

function date() {
  var date = new Date();

  var dateInput = document.getElementById("date").value.trim()
  var today = date.getFullYear() + '-' + (date.getMonth() + 1) + '-' + date.getDate();
  
  if (dateInput > today)   {
    alert("Please, don't enter day in the future.")
  } else {
    return dateInput;
  }
}

function insert(){
  $(".picture").append("<img src="+ settings()+" alt='Picture of the day' />")
}
 
