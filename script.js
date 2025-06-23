// script.js
let editRow = null;

$("#btn-add").click(function () {
  var name = $("#name").val().trim();
  var id = $("#id").val().trim();
  var marks = $("#marks").val().trim();

  if (name && id && marks) {
    if ($(`#studentTable tr[data-id='${id}']`).length > 0) {
      alert("A student with this ID already exists!");
      return;
    }

    $("#studentTable").append(
      `<tr data-id="${id}"><td>${name}</td><td>${id}</td><td>${marks}</td></tr>`
    );

    $("#name").val("");
    $("#id").val("");
    $("#marks").val("");
  } else {
    alert("Please fill out all fields.");
  }
});

$("#modifyBtn").click(function () {
  const id = $("#mod-id").val().trim();
  if (!id) {
    alert("Enter ID to modify");
    return;
  }

  const row = $(`#studentTable tr[data-id='${id}']`);
  if (row.length === 0) {
    alert("ID not found!");
    return;
  }

  editRow = row;
  $("#popup-name").val(row.find("td").eq(0).text());
  $("#popup-marks").val(row.find("td").eq(2).text());

  $("#overlay").show();
  $("#popup").show();
});

$("#updateBtn").click(function () {
  const newName = $("#popup-name").val().trim();
  const newMarks = $("#popup-marks").val().trim();

  if (editRow && newName && newMarks) {
    editRow.find("td").eq(0).text(newName);
    editRow.find("td").eq(2).text(newMarks);
    closePopup();
  } else {
    alert("Both fields are required!");
  }
});

function closePopup() {
  $("#popup").hide();
  $("#overlay").hide();
  editRow = null;
}
