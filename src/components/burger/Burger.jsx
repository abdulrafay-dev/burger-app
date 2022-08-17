import TopBun from "./buns/TopBun";
import style from '../../style/burgerStyle.module.css'
import BottomBun from "./buns/BottomBun";
import BurgerItems from "./items/BurgerItems";

function Burger(props) {
  return (
    <div className={`container-fluid d-flex justify-content-center overflow-auto ${style.height}`}>
      <div className={style.burger}>
        <TopBun/>
        <BurgerItems lettuce={props.lettuce} tomato={props.tomato} onion={props.onion} cheese={props.cheese} beef={props.beef} />
        <BottomBun/>
      </div>
    </div>
   );
}

export default Burger;
