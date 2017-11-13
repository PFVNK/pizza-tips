
//creates empty arrays to store addresss and tips
var addresss = [];
var tips = []; 

/*var setadd = JSON.stringify(addresss);
localStorage.setItem("setaddresss", setadd);
var saveadd = localStorage.getItem("setaddresss");*/

//references input field 
var addressInput = document.getElementById('address'); 
var tipInput = document.getElementById('tip');
var messageBox = document.getElementById('display');

var c1 = document.getElementById("two");

function checkBox () {
	if (c1.checked) {
		parseInt(tipInput).value += 1;
		insert();
	}
}

//fuction pushes input into arrays
function insert () {
		addresss.push(addressInput.value);
		tips.push(tipInput.value);
		clearAndShow();
}  

//clears input fields and logs input from user
function clearAndShow () {
	addressInput.value = "";
	tipInput.value = "";

	messageBox.innerHTML = "";

	console.log(addresss);
	console.log(tips);
}

//shows alert with all input provided by user
function show() {
	var text = addresss.map (function(itm,i){
   return [ (i + 1)  + '.' + " " + itm + "   " + " - " + "   " + tips[i]];
}).join('\n');
	alert('DELIVERY LIST:' + '\n' + '\n' + text + '\n' + '\n' + 'Total: $' + tips.reduce(getSum, 0).toFixed(2));
}

//gets sum of all tips in array and displays them on webpage
function getSum(total, num) {
    return total + parseFloat(num);
}
function myFunction(item) {
    document.getElementById("demo").innerHTML = tips.reduce(getSum, 0).toFixed(2);
}

// function allows user to delete item from list by list number, updates total
function editArray () {
	var text = addresss.map(function(itm,i){	
	return [ (i + 1)  + '.' + " " + itm + "   " + " - " + "   " + tips[i]];
	}).join('\n');
	var editItem = Math.floor(prompt('DELIVERY LIST:' + '\n' + '\n' + text + '\n' + '\n' + "What item would you like to delete? "));

	if (editItem == '') {
		return false;
	} else {
		editItem = editItem - 1;	
		addresss.splice(editItem, 1);
		tips.splice(editItem, 1);
		console.log(addresss, tips);
		getSum();
		myFunction();
	}
}














