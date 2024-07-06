
let dates = []
let task = []
let doc= document.querySelector(`.list`)
let ok = document.querySelector(`.Final-Container`)


function Todo(){
    
    let kim = document.getElementById(`TodoInput`)
    if(kim.value != ""){
        let input = kim.value
    ok.style.display = `flex`
  

    
    
    let date = new Date();
    let DOA = `${date.getDate()}-${date.getMonth()}-${date.getFullYear()}`
    localStorage.setItem(`input`,input)
  ;
    dates.push(DOA);
    task.push(localStorage.getItem(`input`))
    kim.value= ""
    display()
        
    }else{window.alert(`cannot add an empty task`)}
    

}
let HTML = ""
function display(){
task.forEach((element,index)=>{
    HTML += `<li>${task[index]} <small style="font-size:1.2rem;margin-left:20px ;opacity:0.8";>Date:${dates[index]}</small><button class="Cross"onclick="Remove(${index})">❌</button></li>`


    
    })
    doc.innerHTML = HTML
    HTML = ""
    
    
}    


function Remove(index){
    task.splice(index,1);
    dates.splice(index,1)
        
    display()
    if(task.length === 0){
        ok.style.display = `none`
    }else{
           ok.style.display = `flex`
        
       }
    }
