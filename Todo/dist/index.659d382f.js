let e=document.getElementById("list-container");function t(){localStorage.setItem("tasks",e.innerHTML)}document.getElementById("input_box"),e.addEventListener("click",e=>{"LI"==e.target.tagName?(e.target.classList.toggle("checked"),t()):"SPAN"==e.target.tagName&&(e.target.parentElement.remove(),t())}),e.innerHTML=localStorage.getItem("tasks");
//# sourceMappingURL=index.659d382f.js.map
