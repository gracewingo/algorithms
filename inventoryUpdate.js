/*
Compare and update the inventory stored in a 2D array against a second 2D array of a fresh delivery. 
Update the current existing inventory item quantities (in arr1). 
If an item cannot be found, add the new item and quantity into the inventory array. 
The returned inventory array should be in alphabetical order by item.

*/

function updateInventory(arr1,arr2){

	for (var i = 0; i < arr2.length; i++){
		//for the element - arr2[i], check to see if this element returns false on EVERY element in arr1
		//if arr2[i] does not equal every elem in arr1, it's not in arr1 and we need to add it to curInv
		var inventoryExists = arr1.every(function(element) {
			return arr2[i][1] != element[1]
		});

		if (inventoryExists){
			//if the inventory item does not exist, simply push into arr1 
			arr1.push(arr2[i])
		} else {
			//if there is a dupe, find the index of the item in arr1 (return x[1]), that equals it's equivalent in arr2 
			//(the one that we are currently iterating through (arr2[i]))
			let idx = arr1.findIndex(x => x[1] === arr2[i][1]);
			arr1[idx][0] += arr2[i][0];
		}	
	}
	arr1.sort(function(a,b){
        if (a[1] < b[1]) {
            return -1;
        }
        if (a[1] > b[1]) {
            return 1;
        }
            return 0;
    });
	return arr1
}

var curInv = [
    [21, "Bowling Ball"],
    [2, "Dirty Sock"],
    [1, "Hair Pin"],
    [5, "Microphone"]
];

var newInv = [
    [2, "Hair Pin"],
    [3, "Half-Eaten Apple"],
    [67, "Bowling Ball"],
    [7, "Toothpaste"]
];

console.log(updateInventory([], [[2, "Hair Pin"], [3, "Half-Eaten Apple"], [67, "Bowling Ball"], [7, "Toothpaste"]]));
