function getRandomInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min)) + min; //The maximum is exclusive and the minimum is inclusive
  }
 var score = 0;
  function CarGame(){
  this.isDown = false;
  this.carElement = document.querySelector('.car');
  var style = getComputedStyle(this.carElement);
  var leftVal = style.left;
  this.left = parseInt(leftVal);
  this.boolVal = false;
  this.gameover = false;

  this.moveBackground = function(){
      if(this.gameover === false){
      this.wrapperElement = document.querySelector('.container .wrapper');
      this.bottom =  this.wrapperElement.style.bottom;
      this.bottom = 0;
      setInterval(function(){
        if(false){
              clearInterval;
          }
          else{
              this.bottom += -1;
              this.wrapperElement.style.bottom = this.bottom;
             if(this.bottom === -1045 ){
                this.bottom = 0;  
             }
          }
      }.bind(this), 5);
      
     this.car1 = new OtherCars(0,30,this.carElement)
    this.gameover = this.car1.createCars();
      this.car2 = new OtherCars(1,40,this.carElement)
      this.gameover = this.car2.createCars();

      this.car3 = new OtherCars(2,50,this.carElement)
      this.gameover = this.car3.createCars();


     document.onkeydown = this.move.bind(this); 

   console.log(this.car1);
   console.log(this.car2);
   console.log(this.car3);
    }
  }

  this.move = function move(event){
   
    this.keycode = event.keyCode;
    //left=37  right=39 space=32
    if(this.keycode == '37'){
       this.left -=  40;
       if(this.left === -25){
           this.left += 120;
       }
       this.carElement.style.left = this.left + 'px'
   }
   if(this.keycode == '39'){
    this.left +=  40;
    if(this.left === 135){
        this.left -= 120;
    }
    this.carElement.style.left = this.left + 'px'

   }


  }

}


function OtherCars(key, speed, carElement){
    this.width = 20;
    this.height = 20;
    this.key = key;
    this.speed = speed;
    this.top;
    this.left;
    this.carElement = carElement;
    this.gameOverElement = document.querySelector('.gameOver');
    this.btnElement = document.querySelector('.btn');
    this.scoreElement = document.querySelector('.score span');


    
    this.createCars = function(){
        this.otherCar = document.createElement('div');
        this.otherCar.classList.add('otherCar');
        this.parentElem = document.querySelector('.container');
        this.parentElem.appendChild(this.otherCar);

        if(this.key === 0){
            this.top = 100;
            this.left = 55;
            this.otherCar.style.top = this.top +'px';
            this.otherCar.style.left = this.left + 'px'
        }
        if(this.key === 1){
            this.top = 70;
            this.left = 95;
            this.otherCar.style.top = this.top + 'px';
            this.otherCar.style.left = this.left + 'px'
        }
        if(this.key === 2){
            this.top = 40;
            this.left = 15;
            this.otherCar.style.top = this.top +'px';
            this.otherCar.style.left = this.left + 'px'
        }
        
        setInterval(function(){
            if(this.boolVal){
                  clearInterval;
              }
              else{
              this.top += 1;
              this.otherCar.style.top = this.top +'px';
              if(this.top === 195){
                this.top = getRandomInt(0, 10);
                this.flag = getRandomInt(0,3);
                if(this.flag === 0){
                    this.left = 55;  
                }
                if(this.flag === 1){
                    this.left = 95;  
                }
                if(this.flag === 2){
                    this.left = 15;  
                }

            }
            if(this.top === 175){
                
                score++;
            }
            this.scoreElement.innerHTML = score;

            
          //CHECK COLLISION
                
                   var style = getComputedStyle(this.carElement);
           
                  var leftCar = parseInt(style.left);
                  var topCar = parseInt(style.top);
           
           if(this.left < leftCar + 20 &&
                               this.left + 20 > leftCar &&
                               this.top < topCar + 20 &&
                               this.top + 20 > topCar){
                      this.boolVal = true;
                      this.carElement.style.backgroundColor = '#444444';
                      this.gameOverElement.innerHTML = 'GAME OVER';
                      this.btnElement.style.display = 'block';
                      this.btnElement.addEventListener('click', function(){
                       
                        location.reload();
                    }.bind(this));
                               }


                           
                             
                       
                   
           
               
           

            }
          }.bind(this),this.speed);
          
    }
   
}


new CarGame().moveBackground();
