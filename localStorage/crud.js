let formData = document.getElementById("form");

let mainData = document.querySelector(".container");

let cAll = document.querySelector("#clearAll");

formData.addEventListener("submit", (event) => {
  let name = event.target.uname.value;
  let email = event.target.email.value;
  let phone = event.target.phone.value;
  console.log(name);
  console.log(email);
  console.log(phone);

  event.preventDefault();

  let Userdata = JSON.parse(localStorage.getItem("userData")) ?? []; // null handle operator
  let checkStatus = 0;
  for (let items of Userdata) {
    if (items.email == email || items.name == name) {
      checkStatus = 1;
    }
  }
  console.log(checkStatus)
  if (checkStatus == 1) {
    alert("email or phone connot be same");
  } else {
    Userdata.push({
      name: name,
      email: email,
      phone: phone,
    });
    localStorage.setItem("userData", JSON.stringify(Userdata));

    event.target.reset();
  }

  console.log(Userdata);
  displayData();

  event.target.reset();
  // alert('Form submitted!');
  

});

let displayData = () => {
  let Userdata = JSON.parse(localStorage.getItem("userData")) ?? []; // null handle operator

  let DataDisplay = Userdata.map((userData, index) => {
    return `
        <div class="main">
        <span onClick='removeData(${index})' class='cross'>&times;</span>
        <h4>Name</h4>
        <div>${userData.name}</div>
        <h4>Email</h4>
        <div >${userData.email}</div>
        <h4>Phone</h4>
        <div>${userData.phone}</div>

    </div>

        `;
  }).join("");
  mainData.innerHTML = DataDisplay;
};

let removeData = (index) => {
  // alert(index)
  let Userdata = JSON.parse(localStorage.getItem("userData")) ?? []; // null handle operator
  Userdata.splice(index, 1);

  localStorage.setItem("userData", JSON.stringify(Userdata));
  displayData();
};

displayData();

cAll.addEventListener("click", () => {
  localStorage.clear("userData"); // Remove all data stored under the "userData" key

  displayData();
});

displayData();
