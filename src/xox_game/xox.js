const items=document.querySelectorAll(".item")
const board = [
    '1', '2', '3','4','5','6','7','8','9'
   
  ]


  

let hasClickCard = false;
let firstCard, secondCard;
let lockBoard = false;
function xoxgame(){
    this.classList.add('flip');
    

    if (!hasClickCard) {
        
        hasClickCard = true;
        firstCard = this;
        
      } else {
        
        hasClickCard = false;
        secondCard = this;
      }
      
 
      


         items.forEach(item =>item.addEventListener('click',function (){
           if (item == firstCard) {
             lockBoard=true
            this.classList.add('flip');

           }else if(item==secondCard){
             lockBoard=true
             this.classList.add('flip2')
           
           }

         }))
         if ( lockBoard=true) {
          firstCard.removeEventListener('click', xoxgame);
          secondCard.removeEventListener('click', xoxgame);
           
         }

         board[firstCard.dataset.number-1]="x"
         board[secondCard.dataset.number-1]="y"
          if (board[0]=="x" && board[1]=="x" && board[2]=="x") {
              alert("x qazandi")
              setTimeout(() => {
                location.reload();
              }, 2000);
              
             
          }else if(board[3]=="x" && board[4]=="X" && board[5]=="x"){
              alert("x qazandi")
              setTimeout(() => {
                location.reload();
              }, 2000);

          }else if(board[6]=="x" && board[7]=="x" && board[8]=="x"){
              alert("x qazandi")
              setTimeout(() => {
                location.reload();
              }, 2000);

          }else if(board[0]=="x" && board[3]=="x" && board[6]=="x"){
              alert("x qazandi")
              setTimeout(() => {
                location.reload();
              }, 2000);

          }else if(board[1]=="x" && board[4]=="x" && board[7]=="x"){
            alert("x qazandi")
            setTimeout(() => {
              location.reload();
            }, 2000);

          }else if(board[2]=="x" && board[5]=="x" && board[8]=="x"){
            alert("x qazandi")
            setTimeout(() => {
              location.reload();
            }, 2000);

          }else if(board[1]=="x" && board[4]=="x" && board[8]=="x"){
            alert("x qazandi")
            setTimeout(() => {
              location.reload();
            }, 2000);

          }else if(board[2]=="x" && board[4]=="x" && board[6]=="x"){
            alert("x qazandi")
            setTimeout(() => {
              location.reload();
            }, 2000);

          }
          if (board[0]=="y" && board[1]=="y" && board[2]=="y") {
            alert("y qazandi")
            setTimeout(() => {
              location.reload();
            }, 2000);
           
        }else if(board[3]=="y" && board[4]=="y" && board[5]=="y"){
            alert("y qazandi")
            setTimeout(() => {
              location.reload();
            }, 2000);

        }else if(board[6]=="y" && board[7]=="y" && board[8]=="y"){
            alert("y qazandi")
            setTimeout(() => {
              location.reload();
            }, 2000);

        }else if(board[0]=="y" && board[3]=="y" && board[6]=="y"){
            alert("y qazandi")
            setTimeout(() => {
              location.reload();
            }, 2000);

        }else if(board[1]=="y" && board[4]=="y" && board[7]=="y"){
          alert("y qazandi")
          setTimeout(() => {
            location.reload();
          }, 2000);

        }else if(board[2]=="y" && board[5]=="y" && board[8]=="y"){
          alert("y qazandi")
          setTimeout(() => {
            location.reload();
          }, 2000);


        }else if(board[1]=="y" && board[4]=="y" && board[8]=="y"){
          alert("y qazandi")
          setTimeout(() => {
            location.reload();
          }, 2000);

        }else if(board[2]=="y" && board[4]=="y" && board[6]=="y"){
          alert("y qazandi")
          setTimeout(() => {
            location.reload();
          }, 2000);

        }
        
    

}




items.forEach(item => item.addEventListener('click', xoxgame))

