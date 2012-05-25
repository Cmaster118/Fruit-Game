function new_game() {
}

function make_move() {
   var board = get_board();
   var xlength = get_board().length;
   var ylength = get_board()[0].length;
   var targetx = 0;
   var targety = 0;

   // we found an item! take it!
   if (board[get_my_x()][get_my_y()] > 0) {
       return TAKE;
   }

   // Searching for a target fruit
   for(var i=0;i<xlength;i++){
      for(var q=0;q<ylength;q++){
         // Apples
         if (board[i][q] === 1) {
            targetx = i;
            targety = q;
         }
         // Banana
         if (board[i][q] === 2) {
            targetx = i;
            targety = q;
         }
         // Strawberrys
         if (board[i][q] === 3) {
            targetx = i;
            targety = q;
         }
         // Watermelon
         if (board[i][q] === 4) {
            targetx = i;
            targety = q;
         }
         // Oranges
         if (board[i][q] === 5) {
            targetx = i;
            targety = q;
         }
      }
  }

   // Movement
   if (get_my_y() > targety) return NORTH;
   if (get_my_y() < targety) return SOUTH;
   if (get_my_x() < targetx) return EAST;
   if (get_my_x() > targetx) return WEST;

   return PASS;
}
