//save reminder function
function saveReminder(){
	let parentDiv = document.getElementById('reminders');//target the ul tag in html
	let childDiv = document.createElement('p');// new child for the ul
	let reminders = document.getElementById('save');//target the textarea in html	
	childDiv.setAttribute('id',reminders.value);//set / store the value of textarea to li
	childDiv.appendChild(document.createTextNode(reminders.value));//create child in the ul
	
	//if the textArea is empty dont store
	if(reminders.value == '' ){
		alert('Cannot save an empty Reminder!');
	}
	else{
		reminders.value="";//clear text area
		parentDiv.appendChild(childDiv);//inserting child inside ul
		
		let del = document.createElement('span');//creating remove
		del.className = "delete"; // adding class to the delete
		childDiv.appendChild(del);

		
	}	
}//end of function

let list = document.getElementById('reminders');//target the ul

//if click delete remove content
list.addEventListener('click', function(deleteContent){	
		let click = deleteContent.target;//get the target element
		let removeChild = click.parentElement;//store the element to display remove
		list.appendChild(removeChild).style.display = 'none'; // remove
		list.appendChild(click).style.display = 'none';//remove
		
},false);//if it is already check and clicked again remove the line

//if click once add line through and sort it in the bottom
list.addEventListener('click', function(check){	
		let click = check.target;//store the click id
		list.appendChild(click).style.textDecoration = 'line-through';//add a line if added
	
},false);//if it is already check and clicked again remove the line

//if click twice remove the line through
list.addEventListener('dblclick', function(check){
		check.target.style.textDecoration = 'none';//remove the line through if double click
		let click = check.target;//store it in a click variable
		list.prepend(click);// prepend it or put it on the first child

},false);//if it is already check and clicked again remove the line

