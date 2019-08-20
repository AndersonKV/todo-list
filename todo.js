var txt = document.querySelector(".txt");
var preCampo = document.querySelector(".preCampo")
var campo = document.querySelector(".campo")
var filter = document.querySelector("#filter");

filter.addEventListener('keyup', filterItems);


txt.addEventListener("keydown", function(e) {

	var div = document.createElement("div");
	var i = document.createElement("i");
	var i2 = document.createElement("i");
	//se evento no teclado igual 13 e length igual 0
	if(e.keyCode == 13 && txt.value.length == 0){
		alert('digite algo')
		div.remove();
	} 
	//senão
	else if (e.keyCode == 13) {
	div.innerHTML = this.value;
  	div.className = "task";
  	i.className = "fas fa-trash-alt";
  	i2.className = "fas fa-check";
  	i.addEventListener('click', remover);
  	i2.addEventListener('click', checar);
  	preCampo.appendChild(div)
  	div.appendChild(i)
  	div.appendChild(i2)
	console.log(txt.value.length)
	txt.value = "";
  }
})

//adiciona a tarefa
function checar(event) {
	task = document.querySelector(".task")
	task = this.parentNode;
	i = document.querySelector(".fa-check")
	i = this.parentNode;
	task.removeChild(task.childNodes[2]);
 	campo.appendChild(task)	
}

//remover tarefa
function remover() {
	task = document.querySelector(".task")
	task = this.parentNode;
 	task.remove()	
}

// filtrar items
function filterItems(e){
  var text = e.target.value.toLowerCase();
  // pega todas as tarefas
  var items = document.querySelectorAll('.task');
  // converte para array
  Array.from(items).forEach(function(item){
    var itemName = item.firstChild.textContent;
    if(itemName.toLowerCase().indexOf(text) != -1){
      item.style.display = 'block';
    } else {
      item.style.display = 'none';
    }
  });
}
