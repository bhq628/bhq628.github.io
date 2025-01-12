let nutRepository = {
    nutCount: 0
};

var squirrel = {        
    add : function(nuts) {
        // Add your code here...
        nutRepository.nutCount = nutRepository.nutCount + nuts;
    },
    deposit: function() { 
        // Add your code here...
        let nuts = Number (document.getElementById("nuts").value);
        document.getElementById("nuts").innerHTML = "";
        this.add(nuts);

        let output = "My total nut count is " + nutRepository.nutCount;

        document.getElementById("result").innerHTML = output;

    }
};
