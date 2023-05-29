import "./styles/App.css";
import TaskList from "./components/TaskList";
import Layout from "./components/Layout";

function App() {
  return (
    <Layout title="W3lcome Challenge">
      <TaskList />
    </Layout>
  );
}

export default App;
