// a component is a javascript function which returns html/xml
// a component function name should start with capital letter.

import Card from "./components/Card";
import Counter from "./components/Counter";
import Form from "./components/Form";
import Header from "./components/Header";
import ReactState from "./components/ReactState";
import StudentsList from "./components/StudentsList";

function App() {
  let appTitle = "I am app title"
  return (
    <div>
      <Form />
      <Counter />
      <StudentsList />
      <ReactState />
      <h1>App Component</h1>

      <Header />
      <div className="card-list">
        <Card title="Card 1" />
        <Card title="Card 2" onSale={true} />
        <Card title="Card 3" />
        <Card title="Card 4">
          I am children
        </Card>
        <Card title="Card 5">
          <p>
            <span>I am children content 2</span>
          </p>
        </Card>
      </div>
    </div>
  )
}
export default App;


