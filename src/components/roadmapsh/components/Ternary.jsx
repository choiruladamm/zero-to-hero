
const Ternary = () => {
  const isVegetarian = true;

  return (
    <>
      {isVegetarian ? (<h1>tofu</h1>) : (<h1>fish</h1>)}
    </>
  )
}

export default Ternary