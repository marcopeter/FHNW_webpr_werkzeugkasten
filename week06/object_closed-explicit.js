function Person(first, last) {
    let firstname = first; // optional
    let lastname = last;
    return {
        getName: function() {
            return firstname + " " + lastname }
    }
}
// best safety, easy to share structure, but no "type"