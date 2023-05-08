import React, { useEffect, useState } from "react";
import "./menu.css";
import { Categories } from "./categories";
import { Menu } from "./menu";
import { menu } from "./data";

const navItems = ["all", ...new Set(menu.map(data=>data.category))];

export function App() {
  const [items, setItems] = useState(menu);
  const filterItems = (filterKey) => {
    if(filterKey === 'all'){
        setItems(menu);
    }else{
        const newItems = menu.filter(key=>filterKey === key.category);
        setItems(newItems)
    }
    
  }
  return (
    <main className="menu-container">
      <section>
        <div className="menu-title">
          <h1>our menu</h1>
          <hr />
        </div>
        <div className="menu-items">
          <Categories filterItems={filterItems} navItems={navItems}/>
          <Menu items={items} />
        </div>
      </section>
    </main>
  );
}
