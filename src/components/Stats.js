const Stats = ({ items }) => {
  if (!items.length)
    return (
      <p className="stats">
        <em>Start adding some items to your packing list.</em>
      </p>
    );
  const numItems = items.length;
  const packedItems = items.filter((item) => item.packed).length;
  const packedItemPercentage = Math.floor((packedItems / numItems) * 100);
  return (
    <footer className="stats">
      {packedItemPercentage === 100
        ? "You have got everythings. Ready to go ..."
        : `💼You have ${numItems} items on your list, and you already packed
      ${packedItems} (${packedItemPercentage}%)`}
    </footer>
  );
};

export default Stats;
