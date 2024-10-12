const Header = (props) => {
  return (
    <>
      <h1>{props.course}</h1>
    </>
  )
}

const Part = (props) => {
  return (
    <>
      <p>{props.part.name} {props.part.exercises}</p>
    </>
  )
}

const Content = (props) => {
  return (
    <>
      <Part part={props.part[0]}></Part>
      <Part part={props.part[1]}></Part>
      <Part part={props.part[2]}></Part>
    </>
  )
}

const Total = (props) => {
  let exercises = 0;
  props.total.forEach(course => {
    exercises += course.exercises;
  });
  return (
    <>
      <p>Number of exercises  {exercises}</p>
    </>
  )
}

const App = () => {
  const course = 'Half Stack application development'
  const parts = [
    {
      name: 'Fundamentals of React',
      exercises: 10
    },
    {
      name: 'Using props to pass data',
      exercises: 7
    },
    {
      name: 'State of a component',
      exercises: 14
    }
  ]

  return (
    <div>
      <Header course={course}></Header>
      <Content part={parts}></Content>
      <Total total={parts}></Total>
    </div>
  )
}

export default App;