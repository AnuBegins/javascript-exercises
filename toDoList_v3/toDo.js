
let itemList = []
let myTableBody = document.getElementById('body');


function addItemToArray(string){

    const item = {
        id: Date.now(),
        checked: false,
        task: string
    }

    itemList.push(item);
    // console.log('itemList\n',itemList);

    addRow(item);

}


function addRow(obj){
    let trow = myTableBody.insertRow();
    // trow.classList.add('itemRow')

    for (const key in obj) {
        let tcell = trow.insertCell();
        let tdata = document.createTextNode(obj[key])
        tcell.appendChild(tdata);
    }

    createCheckboxCell(trow,obj);
    createArchiveCell(trow,obj);

}


function createCheckboxCell(row,obj){
  let actionCell = row.insertCell();
  let checkbox = document.createElement("input");

  checkbox.setAttribute("type", "checkbox");
  checkbox.id = obj.id;
  checkbox.dataset.key = obj.id;
  checkbox.classList.add('tick');
  actionCell.appendChild(checkbox);

  addListener(checkbox);
}

function createArchiveCell(row,obj){
  let actionCell = row.insertCell();
  let archiveBtn = document.createElement("button");

  archiveBtn.setAttribute("type", "button");
  archiveBtn.id = obj.id;
  archiveBtn.dataset.key = obj.id;
  archiveBtn.classList.add('btn', 'btn-sm', 'btn-primary', 'archive');

  actionCell.appendChild(archiveBtn);

  addListener(archiveBtn);
}


function onSubmitBtnClick() {
  submitTask();
}

function submitTask(){
    // console.log('button clicked');

    const input = document.querySelector('input');
    const text = input.value.trim();

    if(text !== ''){
        addItemToArray(text);
        input.value = '';
        input.focus();
    }

}


function toggleCheckbox(key) {
    const index = itemList.findIndex(item => {
      return item.id === Number(key);
    })
    // const index = itemList.findIndex(Number(key))
    console.log('index: ', index)
    // console.log('index: ', index);
    itemList[index].checked = !itemList[index].checked;
    // console.log('itemList[index]: ', itemList[index])

    const input = document.querySelector(`[data-key='${key}']`);
    // console.log('item.parentNode: ', input.parentElement.parentElement)
    const row = input.parentElement.parentElement
    // console.log('row: ', row)
    // console.log('item: ', item);
    if (itemList[index].checked) {
      row.classList.add("done");
    } else {
      row.classList.remove("done");
    }
}


function archiveItem(key){
  const item = document.querySelector(`[data-key='${key}']`);
  const row = item.parentElement.parentElement
  row.remove();

  // itemList = itemList.filter(item => {
  //   item.id !== Number(key);
  // });

  // console.log('itemList: ', itemList)
}


function addListener(element){
  element.addEventListener('click', Event => {
    console.log('Something was clicked');
    // console.log(Event.target.classList);
    // console.log(Event.target.dataset.key);

    if(Event.target.classList.contains('tick')){
      const itemKey = Event.target.dataset.key;
      toggleCheckbox(itemKey);
    }

    if(Event.target.classList.contains('archive')){
      const itemKey = Event.target.dataset.key;
      // console.log(itemKey)
      archiveItem(itemKey);
    }
  })
}

// form.addEventListener('submit', Event => {
//         Event.preventDefault();
//         const input = document.querySelector('input');
//         const taskText = input.value.trim();
//         if (taskText !== '') {
//             addItemToArray(taskText);
//             input.value = '';
//             input.focus();
//         }
//     })
