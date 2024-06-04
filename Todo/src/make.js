let listcontainer=document.getElementById('list-container')
let inputbox=document.getElementById('input_box')
function addtask()
{
    if(inputbox.value=='')
        alert('add your task')
    else{
        let task=document.createElement('li')
        task.textContent=inputbox.value;
        listcontainer.appendChild(task)

        let span=document.createElement('span');
        span.textContent='\u00d7';
        task.appendChild(span)
    }
    inputbox.value=''
    savedata()
}
listcontainer.addEventListener('click',(el)=>{
    if(el.target.tagName=='LI'){
        el.target.classList.toggle('checked')
        savedata()
    }
    else if(el.target.tagName=='SPAN'){
          el.target.parentElement.remove()
          savedata()
    }
})
function savedata(){
    localStorage.setItem("tasks",listcontainer.innerHTML)
}
function showdata(){
   listcontainer.innerHTML= localStorage.getItem('tasks')
}
showdata()