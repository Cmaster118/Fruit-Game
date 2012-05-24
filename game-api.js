var WIDTH = <width of game board>;
var HEIGHT = <height of game board>;

/* Returns the current board. It's an array of arrays,
   so
    board = get_board();
    field = board[x][y];
   can be used to get a position. */
function get_board();

/* current position of your bot */
var get_my_x();
var get_my_y();

/* current position of your opponent */
var get_opponent_x();
var get_opponent_y();

var EAST = <constant used to represent going right>;
var NORTH = <constant used to represent going up>;
var WEST = <constant used to represent going left>;
var SOUTH = <constant used to represent going down>;
var TAKE = <constant used to represent taking a piece of fruit if it exists on the cell>;
var PASS = <constant used to represent passing the turn>;

/* For a given field (board[x][y]), if there's a fruit at
   that position, return the index of that fruit (starting with 0),
   or false if there's no fruit there. This is a convenience
   function that checks whether field>0. */
function has_item(field);

/* Return the number of different fruit types. Each fruit type might
   be on the board multiple times (use get_total_item_count(type))
   to query how often). Your goal is to have the most fruit as
   many categories as possible */
function get_number_of_item_types();

/* Returns the number of fruits you or your opponent have.
   e.g. if get_my_item_count(1) returns 3, you have 3 pieces
   of the fruit 1.
 */
function get_my_item_count(type);
function get_opponent_item_count(type);

/* Returns the total number of fruits available for a given
   category. E.g. if get_total_item_count(2) returns 5,
   a total of 5 fruits of type 2 exists on the board and
   the players inventories.
 */
function get_total_item_count(type);

/* Print out a line of text, for debugging. This text will
   be visible in the game replays and in the compile logs.
   Notice: Unlike in browsers, this function only works for strings.
   (Note that strings longer than 1024 characters won't be displayed,
    also the total limit of log output you can generate is 16k)
 */
function trace(string);

/* Implement this function, and return either
   NORTH, EAST, SOUTH, WEST, or TAKE.
*/
function make_move();

/* Optionally implement this function. It will be called
   at the start of the game.
*/
function new_game();