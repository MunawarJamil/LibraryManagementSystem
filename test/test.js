let formData = document.getElementById("libraryForm");
let display_details = document.getElementsByClassName("added-books")[0];
let display_Authors = document.getElementsByClassName("author-list")[0];
let display_Publisher = document.getElementsByClassName("publisher-list")[0];

let getUserData = JSON.parse(localStorage.getItem("TestStoredData")) || [];

formData.addEventListener("submit", (event) => {
  event.preventDefault();
  let bookName = event.target.bookName.value;
  let author = event.target.author.value;
  let publisher = event.target.publisher.value;
  let date = event.target.date.value;
  
  
  
  let existingBook = getUserData.find(item => item.author === author && item.publisher === publisher);
  if (existingBook && existingBook.bookName === bookName && existingBook.date === date) {
    alert("Error: Same number of books already exists!");
    formData.reset();
    return; // Abort further execution
    
  }
  formData.reset();

  getUserData.push({
    
    bookName,
    author,
    publisher,
    date,
  });

  // Saving data to localStorage
  localStorage.setItem("TestStoredData", JSON.stringify(getUserData));

  // Refreshing display
  displayData();
    
});

let displayData = () => {
  let display_books = document.querySelector(".added-books");

  let displayUserData = getUserData.map((item, index) => {
    return `
    <div class="book-row">
    <p class="first-child">${index + 1}</p>
    <p contenteditable="true" id="author${index}">${item.author}</p>
    <p contenteditable="true" id="bookName${index}">${item.bookName}</p>
    <p contenteditable="true" id="publisher${index}">${item.publisher}</p>
    <p contenteditable="true" id="date${index}">${item.date}</p>
    <button onclick="saveEdit(${index})" class='btnh'>Update</button>
    <button onclick="deleteItem(${index})" class='btnh' >Delete</button>
</div>`;
  });
  display_books.innerHTML = displayUserData.join('');
};

 
 

const saveEdit = (index) => {
  let author = document.getElementById(`author${index}`).textContent;
  let bookName = document.getElementById(`bookName${index}`).textContent;
  let publisher = document.getElementById(`publisher${index}`).textContent;
  let date = document.getElementById(`date${index}`).textContent;

  getUserData[index] = { author, bookName, publisher, date };
  localStorage.setItem("TestStoredData", JSON.stringify(getUserData));

  displayData();
    
};

//==========================delete all data=====================

let deleteItem = (index) => {
  getUserData.splice(index, 1);
  localStorage.setItem("TestStoredData", JSON.stringify(getUserData));
  displayData();
   
};

let deleteAuthor = (author) => {
  getUserData = getUserData.filter(item => item.author !== author);
  localStorage.setItem("TestStoredData", JSON.stringify(getUserData));
  displayData();
   
};

let deletePublisher = (publisher) => {
  getUserData = getUserData.filter(item => item.publisher !== publisher);
  localStorage.setItem("TestStoredData", JSON.stringify(getUserData));
  displayData();
    
};

// Call these functions to display existing data
displayData();
  
