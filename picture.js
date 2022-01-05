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
    $(".picture").append("<img src="+ url_picture +" alt='Picture of the day' />")
  });
}

function date() {
  var date = new Date();

  var userDate = document.getElementById("date").value.trim();
  
  var input = new Date(userDate)
  var today = new Date(date.getFullYear() + '-' + (date.getMonth() + 1) + '-' + date.getDate());

  console.log(userDate)
  console.log(today)
  var d1 = new Date()

  if (input > today)   {
    alert("Please, don't enter day in the future.")
  } else {
    
    return userDate;
  }
}

 
