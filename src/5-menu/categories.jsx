
export function Categories({filterItems,navItems}) {
  return (
    <div className="menu-navigation">
      <ul>
        {navItems.map((data,index)=>{
            return (
                <li key={index} onClick={()=>filterItems(data)}>{data}</li>
            );
        })}
      </ul>
    </div>
  )
}
