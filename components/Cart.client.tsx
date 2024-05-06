interface CartProps {
    items: Array<{ name: string; price: number }>;
  }
  
  const Cart: React.FC<CartProps> = ({ items }) => {
    return (
      <div className="p-4">
        <h2 className="text-xl font-bold">Cart</h2>
        <ul>
          {items.map((item, index) => (
            <li key={index} className="flex justify-between">
              <span>{item.name}</span>
              <span>${item.price.toFixed(2)}</span>
            </li>
          ))}
        </ul>
      </div>
    );
  };
  export default Cart;