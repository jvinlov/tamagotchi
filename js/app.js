$('button').on('click', () => {
  
  game.setAge();
  game.setHunger();
  game.setBoredom();
  game.setSleepiness();
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
	age: 0,

	setAge () {

	const interval = setInterval(() => { 
	const $age = $('#age');
          this.age++
       
        $('#age').text(`Age: ${this.age}`);
	 }, 60000);
  
    },

    setHunger () {
    	const interval = setInterval(() => { 
	const $hunger = $('#hunger');
          this.hunger++
       
        $('#hunger').text(`Hunger: ${this.hunger}`);
	 }, 5000);
    },

    setSleepiness () {
    	const interval = setInterval(() => { 
	const $sleepiness = $('#sleepiness');
          this.sleepiness++
       
        $('#sleepiness').text(`Sleepiness: ${this.sleepiness}`);
	 }, 10000);
    },

    setBoredom () {
    	const interval = setInterval(() => { 
	const $boredom = $('#boredom');
          this.boredom++
       
        $('#boredom').text(`boredom: ${this.boredom}`);
	 }, 6435);
    }

};
const joshagotchi = new Gotchi();



