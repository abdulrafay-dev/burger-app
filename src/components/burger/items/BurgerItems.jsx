import style from '../../../style/burgerStyle.module.css'
import Item from './Item';
import ItemList from './ItemList';
function BurgerItems(props) {
  return (
    <>
      {props.lettuce+props.tomato+props.onion+props.cheese+props.beef === 0 ? <div>No Ingredients Added</div>:
      <>
        <div>
          {<ItemList size={props.lettuce} style={style.lettuce} key='lettuce' />}
        </div>
        <div>
          {<ItemList size={props.tomato} style={style.tomato} key='tomato' />}
        </div>
        <div>
          {<ItemList size={props.onion} style={style.onion} key='onion' />}
        </div>
        <div>
          {<ItemList size={props.cheese} style={style.cheese} key='cheese' />}
        </div>
        <div>
        {<ItemList size={props.beef} style={style.beef} key='beef' />}
        </div>
      </>}
    </>
   );
}

export default BurgerItems;
