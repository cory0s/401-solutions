let minimist = require('minimist');

function Input(action, payload){
    this.action = action;
    this.payload = payload;
}

module.exports = () => {
    const args = minimist(process.argv.slice(2));
    console.log('args', args);
    if(args.a){
        return new Input('add',args.a);
    } else {
        console.error('You did not enter a valid command');
    }
}