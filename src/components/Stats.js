export default  function Stats( { items } ) {
  if ( !items.length )
    return (
      <p className="stats">
        <em>Let' make this day productive!! start adding items to your list 🎉 </em>
      </p>
    );

  const numItems = items.length;
  const numPacked = items.filter( ( item ) => item.packed ).length;
  const percentage = Math.round( numPacked / numItems * 100 );
  return (
    <footer className="stats">
      <em>
        {percentage === 100
          ? "You are the best, you finish with your list "
          : `💼 You have ${numItems}tasks on your list, you are finished with your list
        ${numPacked}(${percentage}% )`}
      </em>
    </footer>
  );
}
