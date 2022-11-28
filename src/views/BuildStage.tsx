import BattleGround from "../components/BattleGround";
import PlayerHand from "../components/PlayerHand";
import Shop from "../components/Shop";

import './BuildStage.scss';

const BuildStage = () => {
  return (
    <div className="build-stage-container">
      <BattleGround />
      <PlayerHand />
      {/* <Shop/> */}
    </div>
  )
}

export default BuildStage;