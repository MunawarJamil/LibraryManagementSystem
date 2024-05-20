let displayData = () => {
    let display_books = document.querySelector(".added-books");
    let getUserData = JSON.parse(localStorage.getItem("TestStoredData")) || [];
    
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

displayData();

const saveEdit = (index) => {
    let author = document.getElementById(`author${index}`).textContent;
    let bookName = document.getElementById(`bookName${index}`).textContent;
    let publisher = document.getElementById(`publisher${index}`).textContent;
    let date = document.getElementById(`date${index}`).textContent;

    let getUserData = JSON.parse(localStorage.getItem("TestStoredData")) || [];
    getUserData[index] = { author, bookName, publisher, date };
    localStorage.setItem("TestStoredData", JSON.stringify(getUserData));

    displayData();
};

let deleteItem = (index) => {
    let getUserData = JSON.parse(localStorage.getItem("TestStoredData")) || [];
    getUserData.splice(index, 1);
    localStorage.setItem("TestStoredData", JSON.stringify(getUserData));
    displayData();
};
