//array with tasks
//storing inputs in local storage
//getting input from local storage to array
//displaying items from array
let AddButton = document.querySelector(`#Add-Button`);
let TodoInput = document.querySelector(`#TodoInput`);
let task = JSON.parse(localStorage.getItem(`task`)) || [];
let TaskDisplay = document.querySelector(`.Final-Container`);
let Orderlist = document.querySelector(`.list`);
let Main = document.querySelector(`.Main-Container`);
let html = ""
if(localStorage.getItem(`task`)){
    TaskDisplaying()

 // task = JSON.parse(localStorage.getItem(`task`))

}
let TaskNum = task.length;
 
AddButton.addEventListener(`click`,()=>{
    if (TodoInput.value == "") return window.alert(`cannot add an empty task`);
    let tnp = {} 
    let date = new Date();
    let TodoInputVal = TodoInput.value;
    {
    tnp[`item`] = TodoInputVal
    tnp[`date`] = `${date.getDate()}/${date.getMonth()}/${date.getFullYear()}`
    task.push(tnp)

    localStorage.setItem(`task`,JSON.stringify(task))
    TaskDisplaying()
    TodoInput.value = ""
    }
    
     
});
;
function TaskDisplaying(){
    task.forEach((element,index) => {
    html+=`<li>${task[index].item} <small>${task[index].date}</small> <button class="Cross"onclick = "Remove(${index})">❌</button></li>`
    });
    Orderlist.innerHTML = html
    TaskDisplay.style.display = "block"
    html=""

}
function Remove(index){
    task.splice(index,1)
    localStorage.setItem(`task`,JSON.stringify(task))
    if(task.length === 0) return TaskDisplay.style.display = "none"
    TaskDisplaying()

}