const good = {
    firstname : "Good",
    lastname : "Boy",
    getName : function() {
        return this.firstname + " " + this.lastname
    }
};

// no safety but super dynamic
// unobvious how to share structure
// beware of "this"! See Adam Breindl last week.