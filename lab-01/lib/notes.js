let notes = [];

function Note(obj){
    this.id = notes.length;
    this.text = obj.payload;
}

Note.prototype.findAction = function(obj){
    if(obj.action === 'add'){
        this.add(obj);
    }
}

Note.prototype.add = function(obj){
    notes.push(this);
    console.log(this.text);
}

module.exports = (input) => {
    const newNote = new Note(input);
    newNote.findAction(input);
}