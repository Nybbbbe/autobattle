import './BattleGround.scss';
import Card from './Card';

const BattleGround = () => {
  return (
    <div className="battleground-container">
      <div id="battleground-slot-1">
        <Card />
      </div>
      
    </div>
  )
}

export default BattleGround;