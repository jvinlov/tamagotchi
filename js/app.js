$('.begin').on('click', () => {
  
 
  game.setAge();
  game.setHunger();
  game.setBoredom();
  game.setSleepiness();
  game.animation();


  

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
    
$('#name').text('Welcome ' + $('#input-box').val())

$('#input-box').remove();
$('#submit-btn').remove();


 });


const game = {
	hunger: 1,
	sleepiness: 1,
	boredom: 1,
	age: 0,
	gameOver: false,

	animation () {
		$('img').css({'animation-name': 'yes', 'animation-duration': '5s', 'animation-iteration-count': 'infinite'});
	},

	setAge () {

		const interval = setInterval(() => { 
		const $age = $('#age');

          this.age++;
       
        $('#age').text(`Age: ${this.age}`);
        
        if (this.gameOver === true){
        	clearInterval(interval);
        	$('img').css("animation-iteration-count", "0");
        }
        if (this.age >=2 && this.age <4) {
        	$('img').attr("src", "https://i.pinimg.com/originals/bd/ce/47/bdce478c4108aee6d2ac5843d966938d.jpg");
        }
        if(this.age >=4) {
        	$('img').attr("src", "https://media3.giphy.com/media/4eBH2WQPLULLi/source.gif");
        	$('img').css("height", "350px")
        }
	 }, 3000);
  
    },

    setHunger () {

    	const interval = setInterval(() => { 
		const $hunger = $('#hunger');
          this.hunger++
       
        $('#hunger').text(`Hunger: ${this.hunger}`);

        if(this.hunger ===10 || this.gameOver===true) {
    		if (this.hunger ===10){
    			alert("Tummy rumblers - I died of hunger!");
    		}
    		this.gameOver= true;
    		$('img').css("animation-iteration-count", "0");
    		clearInterval(interval);
    	}
	 }, 2000);

    	$('#food').on('click', () => {
    		if (this.hunger>1){
			this.hunger --;
			$('#hunger').text(`Hunger: ${this.hunger}`);
		}
		})
    },

    setSleepiness () {
    	$('#lights').on('click', () => {
			if(this.sleepiness>1){
				this.sleepiness --;
			
			$('#sleepiness').text(`Sleepiness: ${this.sleepiness}`);
			}
	})

    	const interval = setInterval(() => { 
		const $sleepiness = $('#sleepiness');
          this.sleepiness++
       
        $('#sleepiness').text(`Sleepiness: ${this.sleepiness}`);
	 	if(this.sleepiness ===10 || this.gameOver===true) {

	 		if (this.sleepiness ===10){
    		alert("Too...much...coding... I died of sleepiness");
    		}
    		this.gameOver=true;
    		$('img').css("animation-iteration-count", "0");
    		clearInterval(interval);
    	}
	 }, 1450);
    },

    setBoredom () {
    	$('#play').on('click', () => {
			if(this.boredom>1){
			this.boredom --;
			$('#boredom').text(`Boredom: ${this.boredom}`);
		}
	})

    	const interval = setInterval(() => { 
		const $boredom = $('#boredom');
          
          this.boredom++
       		
        	$('#boredom').text(`boredom: ${this.boredom}`);
        	if(this.boredom ===10 || this.gameOver ===  true) {
    		if (this.boredom ===10){
    			alert("Can you die of boredom? I did!");
    		}
    		this.gameOver=true;
    		$('img').css("animation-iteration-count", "0");
    		clearInterval(interval);
    	}
	 }, 2430);
    },
};
const joshagotchi = new Gotchi();





