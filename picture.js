function date() {

  const date = document.getElementById("date").value.trim()
  return date
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