How to write a bot
==================

Bots are written in Javascript. They'll be executed in a sandbox running the SpiderMonkey Javascript engine.

For every turn, our game server will call a function called <code>make_move()</code> in your program.
This function can return six different values (defined as global constants):
<pre>
NORTH
EAST
SOUTH
WEST
TAKE
PASS</pre>
This is a very simple, albeit not very smart, robot (a.k.a. known as "EASTBOT"):

<pre><code>
function make_move() {
	return EAST;
}
</code></pre>
A more fully-fledged example implementation is called random bot and comes with source code.

Bots have a number of functions they can call to enquire the state of the board, the position of the enemy player, the number of fruits left etc.

See the API documentation.

Global state
============

Global state persists from one call of <code>make_move()</code> to the next, so feel free to keep data around or cache previous results.

Time limit
==========

There's a limit of <b>ten seconds</b> "thinking time" per move. After that, the bot execution is aborted and the other player wins.

Memory limit
============

The maximum amount of memory you can allocate is 128 Mb.

Errors / Exceptions
===================

The bot also loses if it throws an exeception. You can check the replay logs to see the errors and exceptions that happened while your bot was running.

Standalone bot testing framework
================================

The easiest way to hack a bot is to grab the standalone testing framework.
Clone the git repository and then modify <code>mybot.js</code> to start writing your bot. Opening <code>game.html</code> will allow you to watch your bot play on random boards (you can also step through one move at a time.)
It also comes with an easy opponent (if you're not ready to face an opponent yet, uncomment the "<code>return PASS</code>" line in <code>assets/simplebot.js</code>.)

Sandbox
=======

Notice that official matches run on our servers work differently than the ones in the testing framework: On our servers every bot will run in its own sandboxed environment, with no access to anything except its own state and the game state- in particular, it won't have access to the opponents code or variables. So don't try anything sneaky :)


Rules
=====

Two robots start in an <code>x</code> by <code>y</code> board. There are a number of different fruits lying around on the board (apples, bananas, etc.)
There will be a different number of fruits for each item, so for example, there might be one apple, three melons and seven bananas.


Your goal is to collect fruits so that at the end, you have more fruits than your opponent in as many categories as possible.

So if this is the initial count:

<pre>
apples		bananas		oranges
1		3		7
</pre>

And after the game, you have this:
<pre>
apples		bananas		melons
0		2		4
</pre>
Then your opponent would have this:
<pre>
apples		bananas		melons
1		1		3
</pre>
Hence you will have won the game! (Your opponent has both less bananas as well as less melons than you- so you win in two out of three categories, and hence in total.)

Every turn, each player gets to either move to a vertically or horizontally adjacent square (north, east, south or west) or pick up the fruit they're standing on. Moves are made simultaneously.

Both players tell the game server where they want to move, and then both moves are made at the same time.
If both bots are standing on the same fruit and both choose to pick it up, each player gets half a point (0.5). (Notice that this is, from a game-theoretic standpoint of view, equivalent to the fruit being destroyed on simultaneous pick-up)

The game ends if any of these conditions are met:

- all the fruits have been taken
- the game server has determined that given the state of the game, there's a clear winner (one player has more than half the fruits of more than half of the categories)
- game positions keep repeating (meaning that both bots are either passing or going in circles)
- one player exceeded his thinking time (a bot's <code>make_move()</code> function didn't return within 10 seconds)
- A bot's <code>make_move()</code> function returned a value that's not a valid move

Fine with the rules? Learn how to write a bot!