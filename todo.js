
let task = []
let doc= document.querySelector(`.list`)
let ok = document.querySelector(`.Final-Container`)


function Todo(){
    
    let tnp = {}
    let kim = document.getElementById(`TodoInput`)
    if(kim.value != ""){
        let input = kim.value
    ok.style.display = `flex`
  

    
    
    let date = new Date();
    let DOA = `${date.getDate()}-${date.getMonth()}-${date.getFullYear()}`
    tnp[`todo`]=input;
    tnp[`Datee`]=DOA;
    task.push(tnp)
    kim.value= ""
    display()
        
    }else{window.alert(`cannot add an empty task`)}
    

}
let HTML = ""
function display(){
task.forEach((element,index)=>{
    HTML += `<li>${task[index].todo} <small style="font-size:1.2rem;margin-left:20px ;opacity:0.8";>Date:${task[index].Datee}</small><button class="Cross"onclick="Remove(${index})">❌</button></li>`

    console.log(HTML)
    
    })
    doc.innerHTML = HTML
    HTML = ""
    
    
}    


function Remove(index){
    task.splice(index,1);
   
    display()
    if(task.length === 0){
        ok.style.display = `none`
    }else{
           ok.style.display = `flex`
    
       }
    }
