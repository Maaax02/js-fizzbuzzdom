output1 = document.querySelector('.container');

for (let n = 1; n <= 100; n++){
   
   const container = document.querySelector('.container');
   let div = document.createElement('div');
   div.append();
   container.append(div);
   
   if (n % 3 ===0 && n % 5 === 0){
      console.log('FizzBuzz');
      div.classList.add('red'); 
      div.append('FizzBuzz');
   }else{

      
      if (n % 3 === 0){
         console.log('Fizz')
         div.classList.add('green');
         div.append('Fizz')  
      }else{
         
         if (n % 5 === 0){
            console.log('Buzz')
            div.classList.add('yellow'); 
            div.append('Buzz')  
            
         }else{
            console.log(n);
            div.append(n);
            div.classList.add('blue');

         }
      }
   }
}
