const inputBtn = document.getElementById("input-btn");
let myLeads = [];
const inputEl = document.getElementById("input-el");
const ulEl = document.getElementById("ul-el");
const deleteBtn = document.getElementById("delete-btn");
const tabBtn = document.getElementById("tab-btn");

// localStorage.setItem("myLeads", "https://scrimba.com/learn/learnjavascript");
// console.log(localStorage.getItem("myLeads"));

const leadsFromLocalStorage = JSON.parse(localStorage.getItem("myLeads"));
console.log(leadsFromLocalStorage);

if (leadsFromLocalStorage) {
  myLeads = leadsFromLocalStorage;
  render(myLeads);
}

// const tabs = [{ url: "https://www.facebook.com" }];

tabBtn.addEventListener("click", function () {
  // Grab the url of the current tab
  chrome.tabs.query({ active: true, currentWindow: true }, function (tabs) {
    //since only one tab should be active and in the current window at once
    //the return variable should only have one try
    myLeads.push(tabs[0]);
    localStorage.setItem("myLeads", JSON.stringify(myLeads));
    render(myLeads);
  });

  // let url = tabs[0].url;
  // console.log(url);
  // myLeads.push(tabs[0].url);
  // localStorage.setItem("myLeads", JSON.stringify(myLeads));
  // render(myLeads);
});

// tabBtn.addEventListener("click", function () {
//   chrome.tabs.query({ active: true, currentWindow: true }, function (tabs) {
//     myLeads.push(tabs[0].url);
//     localStorage.setItem("myLeads", JSON.stringify(myLeads));
//     render(myLeads);
//   });
// });

function render(leads) {
  let listItems = "";
  for (let i = 0; i < leads.length; i++) {
    // ulEl.innerHTML += "<li>" + myLeads[i] + "</li>";

    // create Element
    // set text content
    // append to ul

    // listItems +=
    //   "<li><a target='_blank' href='" +
    //   myLeads[i] +
    //   "'>" +
    //   myLeads[i] +
    //   "</a></li>";

    listItems += `<li><a target='_blank' href='${leads[i]}'>${leads[i]}</a></li>`;

    // const li = document.createElement("li");
    // li.textContent = myLeads[i];
    // ulEl.append(li);
  }
  ulEl.innerHTML = listItems;
}

deleteBtn.addEventListener("dblclick", function () {
  localStorage.clear();
  // for (let i = myLeads.length; i < 0; i--) {
  //   myLeads.pop();
  // }
  // ulEl.textContent = "";
  myLeads = [];
  render(myLeads);
});

inputBtn.addEventListener("click", function () {
  console.log("Save btn clicked from addEventListner");
  myLeads.push(inputEl.value);
  console.log(myLeads);
  inputEl.value = "";

  //save myLeads array to local storage
  localStorage.setItem("myLeads", JSON.stringify(myLeads));

  render(myLeads);

  // To verify that it works
  console.log(localStorage.getItem("myLeads"));
});

//const container = document.getElementById("container");

// container.innerHTML = "<button onclick='buy()'>Buy!</button>";

// function buy() {
//   container.innerHTML += "<p>Thank you for buying</p>";
// }

// const recipient = "James";
// const sender = "Miles";

// //Refactor the email string to use template strings

// const email = `Hey ${recipient}! How is it going?
// Cheers ${sender}`;

// console.log(email);

// localStorage.setItem("myLink", "https://scrimba.com/learn/learnjavascript");
// console.log(localStorage.getItem("myLink"));
// localStorage.clear();

// let links = `["https://scrimba.com/learn/learnjavascript"]`;

// //............string to array..............
// links = JSON.parse(links);
// links.push("www.newlink.com");

// //...........array to string...............
// links = JSON.stringify(links);
// console.log(typeof links);

// function arr(arr) {
//   return arr[0];
// }

// let blaka = arr([10, 11, 12]);

// console.log(blaka);
