function Recipe({ food, isEdit }) {
  return (
    <div>
      {food.name}

      {isEdit ? (
        <EditRecipe food={food} />
      ) : (
        <ShowRecipe food={food} />
      )}
    </div>
  );
}