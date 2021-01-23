var table = document.getElementById("data-record");

var firstName = document.getElementById("FName");
var lastName = document.getElementById("LName");
var email = document.getElementById("Email");
var textarea = document.getElementById("textarea");

var submit = document.getElementById("submit");

var count = 1;

//FUNTION TO ADD RECORD TO THE TABLE
submit.addEventListener("click", function (event) {
  var FName = firstName.value;
  var LName = lastName.value;
  var Email = email.value;
  var textArea = textarea.value;

  var text = `<tr class="bg-info">
                    <td>${count}</td>
                    <td>${FName}</td>
                    <td>${LName}</td>
                    <td>${Email}</td>
             </tr>`;

  if (FName && Email && textArea) {
    table.insertAdjacentHTML("beforeend", text);
  } else {
  }
  firstName.value = "";
  lastName.value = "";
  email.value = "";
  textarea.value = "";
  count++;
});
