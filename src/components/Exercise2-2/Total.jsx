const Total = (props) => {
  const { parts } = props;
  const exercises1 = parts[0].exercises;
  const exercises2 = parts[1].exercises;
  const exercises3 = parts[2]?.exercises || 0;

  const totalExercises = exercises1 + exercises2 + exercises3;

  return <p>Number of exercises {totalExercises}</p>;
};

export default Total;
