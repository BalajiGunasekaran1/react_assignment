function List({items}){
    return(
    <>
    <p><strong>Q4.Create a component named "List" that takes one prop - "items". The component should display an
unordered list element with the given list items.</strong></p>
<ul>
    {items.map((item,index)=> <li key={index}>item</li>)}
</ul>
    </>)
}

export default List;