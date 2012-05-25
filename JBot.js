function new_game() {
}

function make_move() {
   var board = get_board();
   var xlength = get_board().length;
   var ylength = get_board()[0].length;
   var targetx = 0;
   var targety = 0;
   var distx = 100;
   var disty = 100;
   var distz = 100;
   var minz = 100;
   var minx = 0;
   var miny = 0;

   // we found an item! take it!
   if (board[get_my_x()][get_my_y()] > 0) {
       return TAKE;
   }

   // Searching for a target fruit
   for(var i=0;i<xlength;i++){
      for(var q=0;q<ylength;q++){
         // Checks each space for a fruit
         if (board[i][q] != 0) {
            // Finds the x and y distances from the robot
            distx = Math.abs(i-get_my_x());
            disty = Math.abs(q-get_my_y());
            // Finds the direct distance from the robot
            distz = Math.sqrt(distx*distx + disty+ disty);

            // Saves only the SMALLEST distance
            if (distz < minz) {
               minz = distz;
               // Saves the coordinates of the closest one
               minx = i;
               miny = q;
            }
         }
      }
  }
   // Takes the resulting one
   targetx = minx;
   targety = miny;

   // Movement
   if (get_my_y() > targety) return NORTH;
   if (get_my_y() < targety) return SOUTH;
   if (get_my_x() < targetx) return EAST;
   if (get_my_x() > targetx) return WEST;

   return PASS;
}
