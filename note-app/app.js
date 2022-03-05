const yargs = require('yargs');
const command = process.argv[2];
const notes = require('./notes.js');


if(command ==='add'){
  console.log('Adding note.');
} else if(command ==='remove'){
  console.log('Removing note!');
} else {
  console.log('Type correct command.');
}

//Customize yargs version
yargs.version('1.1.0');

yargs.command({
  command:'add',
  describe:"Add a new note",
  builder: {
    title : {
      describe: 'Note Title',
      demandOption: true,
      type: 'string'
    },
    body: {
      describe:'Note body',
      demandOption : true,
      type:'string'
    }
  },
  handler:function(argv){
    notes.addNote(argv.title, argv.body);
    console.log('Title : ', argv.title);
    console.log('Body : ', argv.body);
  }
});

yargs.command({
  command:'remove',
  describe:"Remove a new note",
  builder: {
    title : {
      describe: 'Note Title',
      demandOption: true,
      type: 'string'
    }
  },
  handler:function(argv){
    notes.removeNote(argv.title)
    console.log('Removing a new note!');
  }
});

yargs.command({
  command:'list',
  describe:"List your notes",
  handler:function(){
    console.log('Listing out all notes');
    
  }
})


yargs.command({
  command:'read',
  describe:"Read a note",
  handler:function(){
    console.log('Reading a note');
  }
})

console.log(yargs.argv);