let display_Publisher = document.querySelector(".added-books");

let getUserData = JSON.parse(localStorage.getItem("TestStoredData")) || [];

let publisherMap = new Map();

getUserData.forEach(item => {
    publisherMap.has(item.publisher) ? publisherMap.set(item.publisher, publisherMap.get(item.publisher) + 1) : publisherMap.set(item.publisher, 1);
});

let displayPublisherData = Array.from(publisherMap.entries()).map(([publisher, booksCount], index) => {
    return `
        <div class="book-row">
            <p class="first-child">${index + 1}</p>
            <p   >${publisher}</p>
            <p  >${booksCount}</p>
            <button onclick="deletePublisher('${publisher}')"  class='btnh pdelete'>Delete</button>
        </div>`;
});

display_Publisher.innerHTML = displayPublisherData.join('');

let deletePublisher = (publisher) => {
    getUserData = getUserData.filter(item => item.publisher !== publisher);
    localStorage.setItem("TestStoredData", JSON.stringify(getUserData));
    location.reload(); // Refresh the page after deletion
};
