function connect(hit){
    var db = mongoose.createConnection('mongodb://localhost/train');
    db.on('error', console.error.bind(console, 'connection error:'));
    db.once('open', hit);
}

export {connect}

