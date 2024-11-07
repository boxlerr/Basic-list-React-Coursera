function DessertsList(props) {
  // Filtra, ordena y transforma los datos
  const dessertItems = props.data
    .filter(dessert => dessert.calories < 500)  // Filtra postres con menos de 500 calorías
    .sort((a, b) => a.calories - b.calories)    // Ordena de menor a mayor por calorías
    .map(dessert => (
      <li key={dessert.name}>
        {dessert.name} - {dessert.calories} cal
      </li>
    ));

  return (
    <ul>
      {dessertItems}
    </ul>
  );
}

export default DessertsList;