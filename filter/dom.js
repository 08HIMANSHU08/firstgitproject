
var form=document.getElementById('addForm');
var itemList=document.getElementById('items');
var filter = document.getElementById('filter');
// //form submit event
form.addEventListener('submit',addItem);
//delete event
itemList.addEventListener('click',removeItem);
// Filter event
filter.addEventListener('keyup', filterItems);

//Add item
function addItem(e){
    e.preventDefault();
    //console.log(1);
    // get input value
    var newItem=document.getElementById('item').value;
    // get description value
    var newdesc=document.getElementById('description').value;
    //create new li element
    var li=document.createElement('li');
    //add class
    li.className='list-group-item';
    //add text node with input value
    li.appendChild(document.createTextNode(newItem+' '+newdesc));

    // create del button element
    var deleteBtn=document.createElement('button');
    //add classes to del button
    deleteBtn.className='btn btn-danger btn-sm float-right delete';
    //append text node
    deleteBtn.appendChild(document.createTextNode('X'));
    //append button to li
    li.appendChild(deleteBtn);
    //append li to list
    itemList.appendChild(li);

    // create add button element
    var addBtn=document.createElement('button');
    //add classes to add button
    addBtn.className='btn btn-primary btn-sm float-right';
    //append text node
    addBtn.appendChild(document.createTextNode('edit'));
    //append button to li
    li.appendChild(addBtn);
    //append li to list
    itemList.appendChild(li);
}
// Remove Item
function removeItem(e){
    if(e.target.classList.contains('delete')){
        if(confirm('Are you Sure?')){
            var li=e.target.parentElement;
            itemList.removeChild(li);
        }
    }
}

// Filter Items
function filterItems(e){
    // convert text to lowercase
    var text = e.target.value.toLowerCase();
    // Get lis
    var items = itemList.getElementsByTagName('li');
    // Convert to an array
    Array.from(items).forEach(function(item){
      var itemName = item.firstChild.textContent;
      if(itemName.toLowerCase().indexOf(text) != -1){
        item.style.display = 'block';
      } else {
        item.style.display = 'none';
      }
    });
  }
