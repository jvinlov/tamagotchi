$('button').on('click', () => {
  console.log('button works')
  // invoke our function to intialize our squares
  
  game.setTimer();
});

class Gotchi {
	constructor () {
	this.hunger= 1,
	this.sleepiness= 1,
	this.boredom= 1,
	this.age= 0
	}

};

$('#input-box').val();

$('#submit-btn').on('click', () => { 
    
$('#name').text('Name: ' + $('#input-box').val())


 });


const game = {
	hunger: 1,
	sleepiness: 1,
	boredom: 1,
	time: 0,
	age: 0,

	setTimer () {

const interval = setInterval(() => { 
	const $age = $('#age');
          this.age++
       
        $('#age').text(`Age: ${this.age}`);
	 }, 60000);
  


    }
};
const joshagotchi = new Gotchi();



