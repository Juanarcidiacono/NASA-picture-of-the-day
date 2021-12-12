function date() {
  var dateInput = document.getElementById("date").value.trim()
  var date = new Date();
  var today = date.getFullYear() + '-' + (date.getMonth() + 1) + '-' + date.getDate();
  
  if (dateInput > today) {
    alert("Please don't enter day in the future.")
  } else {
    return dateInput;
  }
}

function settings() {
  var data = {
    "url": "https://api.nasa.gov/planetary/apod?date=" + date() + "&api_key=DEMO_KEY",
    "method": "GET",
    "timeout": 0,
  };

  $.ajax(data).done(function (response) {
    var url_picture = response["url"]
    console.log(url_picture)

    return url_picture;
  });
}

