let di = document.getElementsByClassName('container')
let snake = document.getElementById('snake')
let up = document.getElementById('pad1')
let left = document.getElementById('pad2')
let right = document.getElementById('pad3')
let down = document.getElementById('pad4')
let par = document.getElementById('snake')



let d = 10 

let r = 150

let lmin = 1
let lmax = 580
let tmin = 170 
let tmax = 1350 
let snakeSegments = [{ top: d, left: r }];
// console.log(snakeSegments,'this is the segment of the snake')
let [tnum , lnum ] = foodswitch();


function dmin(){
  d-=10
  return d
}


function dmxn(){
  d+=10
  return d
}


function rmxn(){
  r+=10
  return r
}


function rmin(){
  r-=10
  return r
}


 
  
  
  document.addEventListener('keydown',event=>{
    let prevPosition = { top: d, left: r };  
  
     if (event.key === 'ArrowUp'){
      dmin()
      //  d-=10
      g()
      // longSnake()

       snake.style.top= `${d}px`
       console.log(d+'this is the up ')
       if (d==0 ){
           console.log('eneded')
           confirm('quit')
       }
     }
     if (event.key === 'ArrowDown'){
      //  d+=10
      dmxn()
      // countmax_d()
      g()
      // longSnake()


       snake.style.top= `${d}px`
       console.log(d+'this is the down')
       if (d==590  ){
          console.log('ended')
          confirm('quit')
       }
     }
    
     if (event.key === 'ArrowLeft'){
      //  r-=10
      rmin()
      // countmin_r()
      g()
      // longSnake()

       snake.style.left= `${r}px`
       console.log(r+'this is the left')
       if (r==140){
           console.log('end')
           confirm('quit')
   
       }
     }
     if (event.key === 'ArrowRight'){
      //  r+=10
      rmxn()
      // countmax_r()
      g()
      // longSnake()
       snake.style.left= `${r}px`
       console.log(r)
       if (r==1360 ){
          console.log('end')
          confirm('quit')
   
       }
     }
     moveBody(prevPosition);
     g();
//  longSnake()
    })

    function moveBody(prevPosition) {
      let nextPosition = prevPosition;
      for (let i = 0; i < snakeSegments.length; i++) {
        let currentSegment = snakeSegments[i];
        let tempPosition = { top: currentSegment.top, left: currentSegment.left };
    
        // Move this segment to the next position
        currentSegment.top = nextPosition.top;
        currentSegment.left = nextPosition.left;
    
        // Update the visual position of the segment
        let segmentElement = document.getElementById(`segment-${i}`);
        if (segmentElement) {
          segmentElement.style.top = `${currentSegment.top}px`;
          segmentElement.style.left = `${currentSegment.left}px`;
        }
    
        nextPosition = tempPosition;  // Move to the next position in the chain
      }
    }
    

  
  
  function g(){
let qu = document.getElementById('food')
// console.log(tnum,lnum,'this is the g function')
console.log(tnum,lnum,'this is the refresh ')

if (r> tnum-26 && r < tnum+24 && d< lnum+25  && d > lnum-25) {
  longSnake()
  di[0].removeChild(qu);
  [tnum,lnum] = foodswitch()

//  console.log(tnum,lnum , ' this is the after math of the calling ')
     
//        confirm('congrats')

       }  
       
   
}


function foodswitch(){
 let lnum = Math.floor(Math.random()*(lmax-lmin +1))+lmin
 let tnum = Math.floor(Math.random()*(tmax-tmin +1))+tmin


 

     let y = document.createElement('p')

    //  console.log (y)
   y.setAttribute('id','food')
   y.style.background = 'green'
   y.style.borderRadius = '40%'
   y.style.position = 'absolute'
   y.style.top=`${lnum}px`
   y.style.left=`${tnum}px`
   
   di[0].appendChild(y)

   return [tnum , lnum]
 

  }


// let id = 30

// function longSnake(){
//  let dup = dmin()
//  let dDown = dmxn()
// let rLeft = rmin()
//  let rRight =  rmxn()

//   console.log(dup,dDown,rLeft,rRight,'this is the longsnake ')
//   console.log(r,d,'this is the longsnake3 ')


  
//   let u = document.createElement('p')

//   //  console.log (y)
//  u.setAttribute('id','child')
//  u.style.background = 'pink'
// //  y.style.borderRadius = '40%'
// //  u.style.position = 'absolute'
//  u.style.marginLeft='20px'
//  u.style.margin='20px'


// //  y.style.left=`${tnum}px`
 
// par.appendChild(u)


// }
  
function longSnake() {
  let lastSegment = snakeSegments[snakeSegments.length - 1];  // Get the last segment
  let newSegment = { top: lastSegment.top, left: lastSegment.left };  // New segment is added at the tail

  snakeSegments.push(newSegment);  // Add new segment to the array

  // Create new segment visually
  let segmentElement = document.createElement('div');
  segmentElement.setAttribute('id', `segment-${snakeSegments.length - 1}`);
  segmentElement.classList.add('segment');
  segmentElement.style.top = `${newSegment.top}px`;
  segmentElement.style.left = `${newSegment.left}px`;

  di[0].appendChild(segmentElement);  // Append to the game area
}



    