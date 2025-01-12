// Add a data object here:
let inventoryDataObject = {
    inventoryCount: 1100 
};

// Add an application object here:

var inventoryCounterApp = {        
    add : function(count) {
        // Add your code here...
        inventoryDataObject.inventoryCount = inventoryDataObject.inventoryCount + count;
    },
    counter: function() { 
        // Add your code here...
        let count = Number (document.getElementById("count").value);
        document.getElementById("count").innerHTML = "";
        this.add(count);

        let output = "Total Inventory count: " + inventoryDataObject.inventoryCount;

        document.getElementById("result").innerHTML = output;
    }
};