import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addItem, removeItem, filterItems } from './redux/itemsSlice';

const ItemList = () => {
  const dispatch = useDispatch();
  const items = useSelector(state => state.items.items);

  const handleAddItem = () => {
    const newItem = { id: Date.now(), name: `Item ${items.length + 1}` };
    dispatch(addItem(newItem));
  };

  const handleRemoveItem = (id) => {
    dispatch(removeItem(id));
  };

  const handleFilterItems = (filterText) => {
    dispatch(filterItems(filterText));
  };

  return (
    <div>
      <h1>Item List</h1>
      <button onClick={handleAddItem}>Додати товар</button>
      <button onClick={() => handleFilterItems('1')}>Фільтрувати за "1"</button>
      <ul>
        {items.map(item => (
          <ol key={item.id}>
            {item.name} <button onClick={() => handleRemoveItem(item.id)}>Видалити</button>
          </ol>
        ))}
      </ul>
    </div>
  );
};

export default ItemList;