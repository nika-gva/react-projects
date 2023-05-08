export function Menu({ items }) {
  return (
    <div>
      {items.map((data) => {
        const { id, title, price, description, img } = data;
        return (
          <div key={id} className="menu-item">
            <div className="menu-image">
              <img src={img} alt="" />
            </div>
            <div className="menu-info">
              <div className="menu-info-header">
                <h6>{title}</h6>
                <span>{price}</span>
              </div>
              <p>{description}</p>
            </div>
          </div>
        );
      })}
    </div>
  );
}
