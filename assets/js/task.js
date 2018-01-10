//Deals with completion of task
$("li").click(function() {
  $(this).toggleClass("completed");
});

//Deletes the task
$("span").click(function(event) {
  $(this).parent().remove();
  event.stopPropagation();
});