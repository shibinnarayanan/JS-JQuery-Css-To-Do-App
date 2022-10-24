$(document).ready(function () {
  formSubmit();
  deletTask();
  editTask();

  // --------end document ready function------
});

function formSubmit() {
  $("#new-task-form").submit(function (event) {
    const inputText = $("#new-task-input").val();

    if (inputText != "" && inputText != null) {
      var task = $('<div class="task"></div>');
      var content1 = $('<div class="content"></div>');
      var input = $(
        '<input type="text" class="text" value="+inputText+" readonly />'
      );

      input.val(inputText);

      var actions = $('<div id = "actionid" class="actions"></div>');

      var btnEdit = $('<button class="edit">Edit</button>');

      var btnDelete = $('<button class="delete">Delete</button>');
      //adding event handler for dynamic elements
      btnDelete.on("click", function () {
        $(this).closest(".task").hide();
      });
      //adding event handler for dynamic elements
      btnEdit.on("click", function () {
        if ($(this).text() == "Edit") {
          $(this).closest(".task").find($(".text")).attr("readonly", false);
          $(this).closest(".task").find($(".text")).focus();
          $(this).text("Save");
        } else {
          $(this).closest(".task").find($(".text")).attr("readonly", true);
          $(this).text("Edit");
        }
      });

      content1.append(input);
      task.append(content1);

      actions.append(btnEdit);
      actions.append(btnDelete);

      task.append(content1);
      task.append(actions);

      $("#tasks").append(task);

      event.preventDefault();
    }
  });
}
