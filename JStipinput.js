//creates empty arrays to store addresss and tips
if (localStorage.getItem('adds') == null) {
	var addresss = [];
} else {
	addresss = JSON.parse(localStorage.getItem('adds'));
}

if (localStorage.getItem('nums') == null) {
	var tips = [];
} else {
	tips = JSON.parse(localStorage.getItem('nums'));
}

//references input field and checkboxes
var addressInput = document.getElementById('address'); 
var tipInput = document.getElementById('tip');
var messageBox = document.getElementById('display');
var c2 = document.getElementById('two');
var c3 = document.getElementById('three');
var c4 = document.getElementById('four');
var c5 = document.getElementById('five');
var nums;
var adds;
var endTotal;
var date = new Date();
var formatDate = date.toDateString();
var weekTotals;
var allWeek = [];
var n;
var monday = JSON.parse(localStorage.getItem('monday'));
var tuesday = JSON.parse(localStorage.getItem('tuesday'));
var wednesday = JSON.parse(localStorage.getItem('wednesday'));
var thursday = JSON.parse(localStorage.getItem('thursday'));
var friday = JSON.parse(localStorage.getItem('friday'));
var saturday = JSON.parse(localStorage.getItem('saturday'));
var sunday = JSON.parse(localStorage.getItem('sunday'));
var WT;
//retrieves items from localStorage and assigns them a variable
nums = JSON.parse(localStorage.getItem('nums'));
adds = JSON.parse(localStorage.getItem('adds'));

//fuction pushes input into arrays including checkbox add ons
function insert () {
	if (c2.checked) {
		var newNum = parseInt(tipInput.value);
		var newVal = newNum += 1.50;
		tips.push(newVal);
		addresss.push(addressInput.value);
		clearAndShow();
	} else if (c3.checked) {
		var newNum = parseInt(tipInput.value);
		var newVal = newNum += 1.50;
		tips.push(newVal);
		addresss.push(addressInput.value);
		clearAndShow();
	} else if (c4.checked) {
		var newNum = parseInt(tipInput.value);
		var newVal = newNum += 3;
		tips.push(newVal);
		addresss.push(addressInput.value);
		clearAndShow();
	} else if (c5.checked) {
		var newNum = parseInt(tipInput.value);
		var newVal = newNum += 4;
		tips.push(newVal);
		addresss.push(addressInput.value);
		clearAndShow();
	} else {
		var newNum = parseInt(tipInput.value);
		addresss.push(addressInput.value);
		tips.push(newNum);
		clearAndShow();
	}

	JSONReadyNums = JSON.stringify(tips);
	localStorage.setItem('nums', JSONReadyNums);

	JSONReadyAdds = JSON.stringify(addresss);
	localStorage.setItem('adds', JSONReadyAdds);

	nums = JSON.parse(localStorage.getItem('nums'));
	adds = JSON.parse(localStorage.getItem('adds'));

	console.log(adds);
	console.log(nums);
} 

//clears input fields and logs input from user
function clearAndShow () {
	addressInput.value = "";
	tipInput.value = "";
	document.getElementById("two").checked = false;
	document.getElementById("three").checked = false;
	document.getElementById("four").checked = false;
	document.getElementById("five").checked = false;

	messageBox.innerHTML = "";
}

//shows alert with all input provided by user
function show() {
	nums = JSON.parse(localStorage.getItem('nums'));
	adds = JSON.parse(localStorage.getItem('adds'));
	var text = adds.map (function(itm,i){
   return [ (i + 1)  + '.' + " " + itm + "   " + " - " + "   " + nums[i]];
}).join('\n');
	alert('DELIVERY LIST:' + '\n' + '\n' + text + '\n' + '\n' + 'Total: $' + nums.reduce(getSum, 0).toFixed(2));
}

//gets sum of all tips in array and displays them on webpage
function getSum(total, num) {
    return total + parseFloat(num);
}
function myFunction(item) {
	nums = JSON.parse(localStorage.getItem('nums'));
	adds = JSON.parse(localStorage.getItem('adds'));
    document.getElementById("demo").innerHTML = nums.reduce(getSum, 0).toFixed(2);
}

// function allows user to delete item from list by list number, updates total
function editArray () {
	nums = JSON.parse(localStorage.getItem('nums'));
	adds = JSON.parse(localStorage.getItem('adds'));
	var text = adds.map(function(itm,i){	
	return [ (i + 1)  + '.' + " " + itm + "   " + " - " + "   " + nums[i]];
	}).join('\n');
	var editItem = Math.floor(prompt('DELIVERY LIST:' + '\n' + '\n' + text + '\n' + '\n' + "What item would you like to delete? "));

	if (editItem == '') {
		return false;
	} else {
		editItem = editItem - 1;	
		addresss.splice(editItem, 1);

		JSONReadyAdds = JSON.stringify(addresss);
		localStorage.setItem('adds', JSONReadyAdds);

		tips.splice(editItem, 1);

		JSONReadyNums = JSON.stringify(tips);
		localStorage.setItem('nums', JSONReadyNums);

		console.log(addresss, tips);
		getSum();
		myFunction();
	}
}

//sets days of week
    var d = new Date();
    var weekday = new Array(7);
    weekday[0] = "Sunday";
    weekday[1] = "Monday";
    weekday[2] = "Tuesday";
    weekday[3] = "Wednesday";
    weekday[4] = "Thursday";
    weekday[5] = "Friday";
    weekday[6] = "Saturday";

    n = weekday[d.getDay()];

// stores tip total to corresponding day then clears localstorage
function clearStorage () {
	endTotal = nums.reduce(getSum, 0).toFixed(2);
    weekTotals = {date: formatDate, total: endTotal};
	if (n == 'Monday') {
		localStorage.removeItem('monday'); // clears storage from past week
		localStorage.removeItem('tuesday');
		localStorage.removeItem('wednesday');
		localStorage.removeItem('thursday');
		localStorage.removeItem('friday');
		localStorage.removeItem('saturday');
		localStorage.removeItem('sunday');

    	allWeek.push(endTotal);

    	JSONReadyTotal = JSON.stringify(allWeek);
		localStorage.setItem('monday', JSONReadyTotal);
	} else if (n == 'Tuesday') {
    	allWeek.push(endTotal);

    	JSONReadyTotal = JSON.stringify(allWeek);
		localStorage.setItem('tuesday', JSONReadyTotal);
	} else if (n == 'Wednesday') {
    	allWeek.push(endTotal);

    	JSONReadyTotal = JSON.stringify(allWeek);
		localStorage.setItem('wednesday', JSONReadyTotal);
	} else if (n == 'Thursday') {
    	allWeek.push(endTotal);

    	JSONReadyTotal = JSON.stringify(allWeek);
		localStorage.setItem('thursday', JSONReadyTotal);
	} else if (n == 'Friday') {
    	allWeek.push(endTotal);

    	JSONReadyTotal = JSON.stringify(allWeek);
		localStorage.setItem('friday', JSONReadyTotal);
	} else if (n == 'Saturday') {
    	allWeek.push(endTotal);

    	JSONReadyTotal = JSON.stringify(allWeek);
		localStorage.setItem('saturday', JSONReadyTotal);
	} else if (n == 'Sunday') {
    	allWeek.push(endTotal);

    	JSONReadyTotal = JSON.stringify(allWeek);
		localStorage.setItem('sunday', JSONReadyTotal);
	}
	localStorage.removeItem('nums');
	localStorage.removeItem('adds');
	document.getElementById("demo").innerHTML = "";
	addresss = [];
	tips = [];
}

// displays total value of day after new session, N/A didplayed if value is null
if (monday == null) {
	document.getElementById('mondisplay').innerHTML = 'N/A';
	monday = 0;
} else {
	document.getElementById('mondisplay').innerHTML = monday;
}  
if (tuesday == null) {
	document.getElementById('tuedisplay').innerHTML = 'N/A';
	tuesday = 0;
} else {
	document.getElementById('tuedisplay').innerHTML = tuesday;
}
if (wednesday == null) {
	document.getElementById('weddisplay').innerHTML = 'N/A';
	wednesday = 0;
} else {
	document.getElementById('weddisplay').innerHTML = wednesday;
}
if (thursday == null) {
	document.getElementById('thurdisplay').innerHTML = 'N/A';
	thursday = 0;
} else {
	document.getElementById('thurdisplay').innerHTML = thursday;
}
if (friday == null) {
	document.getElementById('fridisplay').innerHTML = 'N/A';
	friday = 0;
} else {
	document.getElementById('fridisplay').innerHTML = friday;
}
if (saturday == null) {
	document.getElementById('satdisplay').innerHTML = 'N/A';
	saturday = 0;
} else {
	document.getElementById('satdisplay').innerHTML = saturday;
}
if (sunday == null) {
	document.getElementById('sundisplay').innerHTML = 'N/A';
	sunday = 0;
} else {
	document.getElementById('sundisplay').innerHTML = sunday;
}
WT = parseInt(monday) + parseInt(tuesday) + parseInt(wednesday) + parseInt(thursday) + parseInt(friday) + parseInt(saturday) + parseInt(sunday);
document.getElementById("WT").innerHTML = WT;












