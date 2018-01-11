//Deals with completion of task
$("ul").on("click", "li", function() {
  $(this).toggleClass("completed");
});

//Deletes the task
$("ul").on("click", "span", function(event) {
  $(this).parent().fadeOut(function(){
    $(this).remove();
  });
  event.stopPropagation();
});

$("input[type='text']").keypress(function(event) {
  if (event.which === 13) {
    let newTask = $(this).val();
    $(this).val('');
    $("ul").append(`<li><span>X</span> ${newTodo}</li>`);
  }
});