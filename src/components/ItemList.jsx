import Item from "./Item";

const ItemList = ({ articulos }) => {
  return (
    <>
    <div>
      {articulos?.map((art) => (
        
          <Item
            key={art.id}
            id={art.id}
            image={art.image}
            name={art.name}
            description={art.description}
            price={art.price}
            stock={art.stock}
            category={art.category}
          />
        ))}
    </div>
    </>
  );
};

export default ItemList;
