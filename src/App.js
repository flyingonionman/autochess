import React, {Component} from 'react'
import './App.css'
function App() {
  return (
    <div className="App">
        <header className="App-header">
          <Main/>       
      </header>
    </div>
  );
}

class Main extends Component {
  state = {
    units_one: ['Antimage','Axe','Batrider','BountyHunter','Clockwerk','DrowRanger','Enchantress','Mars','OgreMagi',
                'ShadowShaman','Tinker','Tiny','Tusk'],
    units_two: ['BeastMaster','ChaosKnight','CrystalMaiden','Furion','Juggernaut','Luna','Mirana','Morphling','Puck',
                'QueenOfPain','Sladar','Timbersaw','WitchDoctor'],
    units_three:['Abaddon','Dazzle','Lina','Lycan','OmniKnight','PhantomAssassin','Razor','ShadowFiend','Sniper',
                  ,'Terrorblade','TreantProtector','Venomancer','Viper','Windranger'],
    units_four:['Alchemist','Disruptor','Doom','DragonKnight','KeeperOfTheLight','Kunkka','LoneDruid','Medusa','Necrophos',
                'TemplarAssassin','TrollWarlord'],
    units_five:['DeathProphet','Enigma','Gyrocopter','Io','Techies','Tidehunter','Zeus'],
    deck:[],
    player:{
      level:1
    }
  }

  constructor(props) {
    super(props);

    this.handlelower = this.handlelower.bind(this);
    this.handlehigher = this.handlehigher.bind(this);
    this.rolleroni = this.rolleroni.bind(this);

  }

  componentDidMount(){
    this.rolleroni();
  }

  rolleroni(){
    let currlvl= this.state.player.level;
    const arr = [];
    this.setState((state)=>{
      for (let i = 0;i <5; i++ )  {
        let randomizer =  Math.floor(Math.random() * 13); 
        arr.push(this.state.units_one[randomizer]);
      }
      return{deck:arr}
    });
  }


  handlelower(){
    ((this.state.player.level-1 >= 1)?
      this.setState({ player: {level:this.state.player.level-1} })    
      :
      alert("Level Cannot Fall Below 1 !!!") 
    )
     
  }

  handlehigher(){
    this.setState({ player: {level:this.state.player.level+1} })
  }

  render() {
    return (
      <div id="main">
        <PlayerCard player={this.state.player}></PlayerCard>
        <div id="desc">
        <table id= "amount">
          <tbody>
            <tr><th>Price</th><th>Amout</th></tr>
            <tr><th>$1</th><th>45 / Hero</th></tr>
            <tr><th>$2</th><th>30 / Hero</th></tr>
            <tr><th>$3</th><th>25 / Hero</th></tr>
            <tr><th>$4</th><th>15 / Hero</th></tr>
            <tr><th>$5</th><th>10 / Hero</th></tr>
          </tbody>
        </table>

        <table id="percentage">
          <tbody>
            <tr><th>Level</th><th>Common</th><th>Uncommon</th><th>Rare</th><th>Mythic</th><th>Legendary</th></tr>
            <tr><th>1</th><th>100%</th><th>0</th><th>0</th><th>0</th><th>0</th></tr>
            <tr><th>2</th><th>70%</th><th>30%</th><th>0</th><th>0</th><th>0</th></tr>
            <tr><th>3</th><th>60%</th><th>35%</th><th>5%</th><th>0</th><th>0</th></tr>
            <tr><th>4</th><th>50%</th><th>35%</th><th>15%</th><th>0</th><th>0</th></tr>   
            <tr><th>5</th><th>40%</th><th>35%</th><th>23%</th><th>2%</th><th>0</th></tr>   
            <tr><th>6</th><th>33%</th><th>30%</th><th>30%</th><th>7%</th><th>0</th></tr>   
            <tr><th>7</th><th>30%</th><th>30%</th><th>30%</th><th>10%</th><th>0</th></tr>  
            <tr><th>8</th><th>24%</th><th>30%</th><th>30%</th><th>15%</th><th>1%</th></tr>
            <tr><th>9</th><th>22%</th><th>30%</th><th>25%</th><th>20%</th><th>3%</th></tr>
            <tr><th>10</th><th>19%</th><th>25%</th><th>25%</th><th>25%</th><th>6%</th></tr>
          </tbody>
        </table>
        </div>
        <div id = "roulette">
          <ul>
            <li  id="hero1"><HeroCard  hero={this.state.deck[0]}></HeroCard></li>
            <li  id="hero2"><HeroCard  hero={this.state.deck[1]}></HeroCard></li>
            <li  id="hero3"><HeroCard  hero={this.state.deck[2]}></HeroCard></li>
            <li  id="hero4"><HeroCard  hero={this.state.deck[3]}></HeroCard></li>
            <li id="hero5"><HeroCard  hero={this.state.deck[4]}></HeroCard></li>

          </ul>
        </div>

        <div id= 'interaction'>
          <button onClick={this.rolleroni}>Roll!</button>
          <button onClick={this.handlelower}>Lower Level</button>
          <button onClick={this.handlehigher}>Raise Level</button>
        </div>

        <div id="others">
          Populate other board to simulate an actual game
        </div>
      </div>
    )
  }
}

const HeroCard = props => {
  const {hero} = props;

  return(
    
    <div className="hero"  >
     {hero} 
    </div>
  )
}

const PlayerCard = props=>{
  const {player} = props;
  
  return(
    <div>
      <h4>{player.level}: Player Level</h4>
    </div>
  )
}
export default App;
