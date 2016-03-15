

// url example for refference http://api.zippopotam.us/US/29414

$(document).ready(function(){
  zipFind.init();
});

var zipFind = {
  init: function(){
    zipFind.events();

    // zipFind.zip(search);
  },

  events: function(){
    $('button').on('click', function(event) {
      event.preventDefault();
      console.log("HELLO")
      var search = $('input[type="text"]').val();
      $('input[type="text"]').val("");
      zipFind.zip(search);
    });
  },

  zip: function(zipCode) {
    $.ajax({
      method: 'GET',
      url: "http://api.zippopotam.us/" + "us" + "/" + zipCode,
      success: function(data) {
        console.log(data)
        zipFind.addToDom(data, $('section'))
      }
    })
  },

  addToDom: function(data,$target) {
    $target.html('');
    var htmlstr = '<p class="plac">' + data.places[0]['place name'] +','+ " "+ data.places[0]['state'] +"</p>"+
    "<p class='coord'>" + "latitude:" + data.places[0]['latitude'] + "," + "longitude"+ data.places[0]['longitude']+"</p>"
    $target.append(htmlstr)
    console.log(htmlstr)
    console.log(data)
  }

}
