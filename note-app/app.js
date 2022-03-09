const yargs = require('yargs');
const command = process.argv[2];
const notes = require('./notes.js');

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
  }
});

yargs.command({
  command:'list',
  describe:"List your notes",
  handler:function(){
    notes.listNotes();
    
  }
})


yargs.command({
  command:'read',
  describe:"Read a note",
  builder: {
    title: {
      describe:'Note title',
      demandOption:true,
      type:'string'
    }
  },
  handler:function(argv){
    notes.readNotes(argv.title)
  }
})

console.log(yargs.argv);