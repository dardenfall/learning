(function(){
  'use strict';
  // write code here and click the execute button
  const App = (props) => {
   	return (
    	<div>
        {props.games.map( game => <Game img={game.img} name={game.name} tag={game.tag}/>)}
      </div>
    )
  }

  const Game = (props) => {
  	return (
    	<div className="game">
      	<img src={props.img} />
        	<span>
        		<div className="gamename">{props.name} </div>
            <div className="tags">{props.tags}</div>
          </span>
      </div>
    )
  }

  const data = [
  { name: "This War of Mine",
  	id: "282070",
    img:"http://cdn.akamai.steamstatic.com/steamcommunity/public/images/apps/282070/4d2ecaa400d7937fdfae6642b73ad5695c393bf7.jpg",
    desc: "In This War Of Mine you do not play as an elite soldier, rather a group of civilians trying to survive in a besieged city; struggling with lack of food, medicine and constant danger from snipers and hostile scavengers. The game provides an experience of war seen from an entirely new angle.",
    tags: ["war", "rpg", "violent"]},

  {"id":"268750",
    "name":"Magicite",
    "img":"http://cdn.akamai.steamstatic.com/steamcommunity/public/images/apps/268750/fa19f06a256bfba8ce6084e0dcdf18ce7f2ab766.jpg",
    "desc":"Explore, craft, and survive in this Multiplayer RPG Platformer with permanent death! Featuring many Rogue-like elements, Magicite randomly generates each underground dungeon for you and your friends to delve deep into.",
    tags: ["fantasy", "action", "violent"]}
  ]

  ReactDOM.render(<App games={data} />, document.getElementById('container'));
})()
