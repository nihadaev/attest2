const time = () => {
    let now = new Date();
    return `${now.getHours()}:${now.getMinutes()}`
}

class Message {
    constructor(author, message){
        this.author = author;
        this.time = time();
        this.message = message;
    }
    toString(){
        return `${this.time} ${this.author}: ${this.message}`;
    }
}

class Messenger{
    messages = [];

    send(author, text){
        this.messages.push(new Message(author, text));
    }
    show_history(){
        this.messages.forEach((mes) => {
            console.log(mes.toString());
        });
    }
}

const messenger = new Messenger();
messenger.send('Nihad', 'hello');
messenger.send('Renar', 'hellllloooooooooooo iuu');
messenger.show_history();