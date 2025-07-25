function Item(props) {
  return <li>
    {props.name} ({props.value})
    </li>;
}
export default function App() {
  return (
    <>
      <h1>Hello React</h1>
      <ul>
        <Item name = "Apple" value = "344" />
        <Item name = "Orange" value = "399"/>
        <Item name = "Banana" value = "3999" />
      </ul>
    </>
  )
}