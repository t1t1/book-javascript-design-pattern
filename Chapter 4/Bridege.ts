module Westeros.Religion
{
  export class OldGods{
      prayTo(sacrifice){
        console.log("We Old Gods hear your prayer");
      }
  }

  export class DrownedGod{
    prayTo(humanSacrifice){
      console.log("*BUBBLE* GURGLE");
    }
  }

 export class SevenGods{
    prayTo(prayerPurpose){
      console.log("Sorry there are a lot of us, it gets confusing here.  Did you pray for something?");
    }
  }

  export interface God
  {
    prayTo():void;
  }

  export class OldGodsAdapter implements God{
    _oldGods:OldGods;
    constructor(){
      this._oldGods = new OldGods();
    }
    public prayTo(){
      var sacrifice= new Sacrifice();
      this._oldGods.prayTo(sacrifice);
    }
  }

  export class DrownedGodAdapter implements God{
    _drownedGod;
    constructor(){
      this._drownedGod = new DrownedGod();
    }
    public prayTo(){
      var sacrifice = new HumanSacrifice();
      this._drownedGod.prayTo(sacrifice);
    }
  }

  export class SevenGodsAdapter implements God{
    _sevenGods;
    public prayerPurposeProvider = new PrayerPurposeProvider();
    constructor(){
      this._sevenGods = new SevenGods();
    }
    public prayTo(){
      this._sevenGods.prayTo(this.prayerPurposeProvider.GetPurpose());
    }

  }

  export class PrayerPurposeProvider{
    GetPurpose(){}
    }
  export class Sacrifice{}
export class HumanSacrifice{}

}

var god1 = new Westeros.Religion.SevenGodsAdapter();
var god2 = new Westeros.Religion.DrownedGodAdapter();
var god3 = new Westeros.Religion.OldGodsAdapter();

var gods : Westeros.Religion.God[] = [god1, god2, god3];
for(var i =0; i<gods.length; i++){
  gods[i].prayTo();
}