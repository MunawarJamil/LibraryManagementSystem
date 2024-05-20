// getting user data
let formData = document.getElementById("libraryForm");
// globally stored data in local storage  
let getUserData = JSON.parse(localStorage.getItem("userStoredData")) ?? [];
//getting Author data
let AuthorUii = document.getElementById("author_details");
// display data by getting html class name
let display_details = document.getElementsByClassName("added-books")[0];
formData.addEventListener("submit", (event) => {
  event.preventDefault();
  let name = event.target.bookName.value;
  let author = event.target.author.value;
  let publisher = event.target.publisher.value;
  let date = event.target.date.value;
  console.log(name);
  console.log(author);
  console.log(publisher);
  console.log(date);
  formData.reset();

  //   working , now save it in local storage
  // console.log(getUserData)
  getUserData.push({
    name,
    author,
    publisher,
    date,
  });

  localStorage.setItem("userStoredData", JSON.stringify(getUserData));

  displayData();

  // Author information==========================================

  let SameAuthor = JSON.parse(localStorage.getItem("userStoredData")) ?? [];
  let books = { NoOfbooks: 1 };
  let Bookks = JSON.parse(localStorage.getItem("authorBooks")) ?? [];
  for (let iterator of SameAuthor) {
    if (iterator.author == author) {
      console.log("Same Author found:", iterator.author);
    } else {
      console.log("no same author");
    }
  }

  // Bookks.push({
  //   books
  // })

  // localStorage.setItem("authorData", JSON.stringify(Author));
  localStorage.setItem("authorBooks", JSON.stringify(Bookks));
  console.log("new added author's information", books.NoOfbooks);
  //==============================previous==============

  // for (let items of Author) {
  //   if (items.author == author) {
  //     books += 1;
  //     break
  //   }
  // }
  // console.log("books for author",books);

  //================copied fro crud=============================
  // for (let items of Userdata) {
  //   if (items.email == email || items.name == name) {
  //     checkStatus = 1;
  //   }
  // }
  // console.log(checkStatus)
  // if (checkStatus == 1) {
  //   alert("email or phone connot be same");
  // } else {
  //   Userdata.push({
  //     name: name,
  //     email: email,
  //     phone: phone,
  //   });
  //   localStorage.setItem("userData", JSON.stringify(Userdata));

  // ==============================================

  let Publisher = JSON.parse(localStorage.getItem("publisherData")) ?? [];
  let publisherFound = false;

  // Check if the publisher already exists in the Publisher array
  for (let item of Publisher) {
    if (item.publisher === publisher) {
      publisherFound = true;
      break;
    }
  }

  // If the publisher is not found, add a new entry for the publisher
  if (!publisherFound) {
    Publisher.push({
      publisher: publisher,
    });
  }

  // Initialize the number of books for the publisher
  let pbooks = { books: 0 };

  // Update the number of books for the publisher
  for (let item of Publisher) {
    if (item.publisher === publisher) {
      pbooks.books++;
    }
  }

  // Store the updated Publisher data and pbooks count in local storage
  localStorage.setItem("publisherData", JSON.stringify(Publisher));
  localStorage.setItem("pbooks", JSON.stringify(pbooks));

  // Retrieve and log the number of books for the current publisher
  console.log("Books for publisher " + publisher + ": " + pbooks.books);
});
// display data to UI

let displayData = () => {
  let getUserData = JSON.parse(localStorage.getItem("userStoredData")) ?? [];
  let displayUserData = getUserData.map((items, index) => {
    return `
    <table>
  
  <tbody>
    <tr>
      <td>1</td>
      <td>${items.name}</td>
      <td>${items.author}</td>
      <td>${items.publisher}</td>
      <td>${items.date}</td>
      <td><button onclick="editItem( )">Edit</button></td>
      <td><button onclick="deleteItem(${index})">Delete</button></td>
    </tr>
  </tbody>
</table>

    `;
  });
  display_details.innerHTML = displayUserData;
};
// call this function to display every avalaible data in local storage
displayData();

// delete user data
 
let deleteItem = (index) => {
  let getUserData = JSON.parse(localStorage.getItem("userStoredData")) ?? [];
  getUserData.splice(index, 1);

  let Author = JSON.parse(localStorage.getItem("authorData")) ?? [];
  Author.splice(index, 1);

  localStorage.setItem("userStoredData", JSON.stringify(getUserData));

  localStorage.setItem("authorData", JSON.stringify(Author));

  let Publisher = JSON.parse(localStorage.getItem("publisherData")) ?? [];
  Publisher.splice(index, 1);

  localStorage.setItem("publisherData", JSON.stringify(Publisher));
  displayData();
};
