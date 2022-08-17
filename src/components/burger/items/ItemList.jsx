import Item from './Item'

function ItemList(props) {
  return (
    <>
    {[...Array(props.size)].map((v, i) => <Item name={props.style} key={`${props.key}-${i}`}/> )}
    </>
   );
}

export default ItemList;
