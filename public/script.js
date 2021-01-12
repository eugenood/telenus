const searchBar = document.getElementById("search_bar");
const groupsList = document.getElementById("groups_list");

let groups = [];

const request = new XMLHttpRequest();
request.addEventListener("load", () => {
  groups = JSON.parse(request.responseText);
  displayGroups(groups);
});
request.open("GET", "/groups");
request.send();

function displayGroups(groups) {
  groupsList.innerHTML = "";
  groups.forEach(group => {
    const listItem = document.createElement("li");
    if (group.legacy) {
      listItem.innerHTML = `<a href="${group.link}" target="_blank">${group.title}<span class="legacy">Legacy</span></a>`;
    } else {
      listItem.innerHTML = `<a href="${group.link}" target="_blank">${group.title}</a>`;
    }
    groupsList.appendChild(listItem);
  });
}

searchBar.addEventListener("keyup", () => {
  const searchTerm = searchBar.value.toLowerCase();
  const filteredGroups = groups.filter(group => group.title.toLowerCase().indexOf(searchTerm) >= 0);
  displayGroups(filteredGroups);
});
