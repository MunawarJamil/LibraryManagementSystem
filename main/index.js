function Book(name, author, publisher, publishing_date) {
  this.name = name;
  this.author = author;
  this.publisher = publisher;
  this.publishing_date = publishing_date;
}

function Display() {}
Display.prototype.add = function (book) {
  console.log("adding to form ");
  let tableData = document.querySelector(".added-books");
  let uiString = `<table>
  
  <tbody>
    <tr>
      <td>1</td>
      <td>${book.name}</td>
      <td>${book.author}</td>
      <td>${book.publisher}</td>
      <td>${book.publishing_date}</td>
      <td><button onclick="editItem(this)">Edit</button></td>
      <td><button onclick="deleteItem(this)">Delete</button></td>
    </tr>
  </tbody>
</table>
`;
  tableData.innerHTML += uiString;
};


function deleteItem(button) {
  let row = button.closest("tr");

  // Remove the parent <tr> element
  row.remove();
}

Display.prototype.clear = function () {
  let libraryForm = document.getElementById("libraryForm");
  document.getElementsByClassName;
  libraryForm.reset();
};

// Add submit event listener to libraryForm
let libraryForm = document.getElementById("libraryForm");
libraryForm.addEventListener("submit", libraryFormSubmit);

function libraryFormSubmit(e) {
  e.preventDefault();
  console.log("You have submitted the library form");
  let name = document.getElementById("bookName").value;
  let author = document.getElementById("author").value;
  let publisher = document.getElementById("publisher").value;
  let publishing_date = document.getElementById("publishing_date").value;

  console.log(name, author, publisher, publishing_date);
  let book = new Book(name, author, publisher, publishing_date);

  console.log(book);

  let display = new Display();
  display.add(book);
  display.clear();
}
