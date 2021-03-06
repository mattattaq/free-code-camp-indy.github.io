function build(array, blogs) {
  for (var i = 0; i < array.length; i++){
    var div = $("<div>", {class: "blog"});
    var imageDiv = $("<div>", {class: "blog_img_container"});
    var itemDescription = $("<div>", {class: "blog_description"});
    
    for (var key in array[i]) {
      if (key === "name") {
        itemDescription.append($("<h3>").text(array[i].name));
      }
      else if (key === "imageLocation") {
        imageDiv.append($("<img>", {class: "blog_img", src: array[i][key], alt: "blog title"}));
      }
      else if (key === "link") {
        itemDescription.append($("<a>", {href: array[i].link, target: "_blank"}).text(array[i][key]));
      }
      else if (key === "description") {
        itemDescription.append($("<p>").text(array[i][key]));
      }
      else if (key === "languages") {
        for (var item in array[i].languages){
          itemDescription.append($("<p>").text(array[i].languages[item]));
        }
      }
    }

    div.append(imageDiv);
    div.append(itemDescription);
    
    if (blogs) {
      $(".camper_blogs").append(div);
    }
    else {
      $(".camper_projects").append(div);
    }
  }
}

build(blogs, true);
build(projects, false);

$(".camper_projects").addClass("hidden");

$("#blog_toggle").click(function(){
  $(".camper_projects").addClass("hidden");
  $(".camper_blogs").removeClass("hidden");
});

$("#projects_toggle").click(function(){
  $(".camper_projects").removeClass("hidden");
  $(".camper_blogs").addClass("hidden");
});
