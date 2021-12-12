function date(){
  const input = document.getElementById("date")
  const date = input.value;

  alert(date)
  return date
}

var settings = {
  "url": "https://api.nasa.gov/mars-photos/api/v1/rovers/curiosity/photos?earth_date="+date()+"&api_key=DEMO_KEY",
  "method": "GET",
  "timeout": 0,
};

$.ajax(settings).done(function (response) {
  return response
});




 
