let display_Publisher = document.querySelector(".added-books");

let getUserData = JSON.parse(localStorage.getItem("TestStoredData")) || [];

let publisherMap = new Map();

getUserData.forEach(item => {
    publisherMap.has(item.author) ? publisherMap.set(item.author, publisherMap.get(item.author) + 1) : publisherMap.set(item.author, 1);
});

let displayPublisherData = Array.from(publisherMap.entries()).map(([author, booksCount], index) => {
    return `
        <div class="book-row">
            <p class="first-child">${index + 1}</p>
            <p   >${author}</p>
            <p  >${booksCount}</p>
            <button onclick="deletePublisher('${author}')"  class='btnh pdelete'>Delete</button>
        </div>`;
});

display_Publisher.innerHTML = displayPublisherData.join('');

let deletePublisher = (author) => {
    getUserData = getUserData.filter(item => item.author !== author);
    localStorage.setItem("TestStoredData", JSON.stringify(getUserData));
    location.reload(); // Refresh the page after deletion
};
