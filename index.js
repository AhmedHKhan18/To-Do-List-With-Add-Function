var search = document.getElementById("search")
var searchList = document.getElementById("searchList")

let arr = [{list: "Wake up"},{list: "Do Breakfast"},{list: "Go to Office"},{list: "Do Work"},{list: "Do Lunch"},{list: "Go to Gym"},{list: "Do Dinner"},{list: "Go to Sleep"}]
let newarr = [{list: "Wake up"},{list: "Do Breakfast"},{list: "Go to Office"},{list: "Do Work"},{list: "Do Lunch"},{list: "Go to Gym"},{list: "Do Dinner"},{list: "Go to Sleep"}]
let secondarr = []


function handleSearch(params){
   var searchedValue = params.target.value.toLowerCase();
   var filteredArr = newarr.filter(item => { return item.list.toLowerCase().includes(searchedValue)})
  arr = filteredArr
  search.value = "";
  renderList();
  if (arr.length == 0) {
    Swal.fire({
        icon: "error",
        title: "Oops...",
        text: "Contact Not Found!",
        footer: '<a href="#">Why do I have this issue?</a>'
      });
}
}

function renderList(){
    searchList.innerHTML = "";
    for (let i = 0; i < arr.length; i++) {
        searchList.innerHTML += `<li><p>${arr[i].list.toUpperCase()}</p><img src="\icons8-plus-button-50.png" id="add" onClick={handleAdd(this)}></img></li>`
        searchList.innerHTML += `<hr>`
    }
}

var secondDiv = document.getElementById("secondDiv")
function handleAdd(params){
   var text = params.parentNode.childNodes[0].innerHTML;
   secondarr.push({list: text})
   renderSecondList("secondarr", secondarr)
}
function renderSecondList(){
    secondDiv.innerHTML = "";
    for (let i = 0; i < secondarr.length; i++) {
        secondDiv.innerHTML += `<li><p>${secondarr[i].list.toUpperCase()}</p><img id="delete" src="\icons8-delete-30.png" onClick={deleteItem(this)}></img><hr></li>`
    }
}

function deleteItem(props){
    var text = props.parentNode;
    text.style.display = "none"
}