const Pizza = (props) => {
  return (
    <div>
      <h1>{props.name}</h1>
      <img width="200px" src={props.image} alt="pizzas are good" />
      <p>{props.description}</p>
    </div>
  );
};

export default Pizza;
