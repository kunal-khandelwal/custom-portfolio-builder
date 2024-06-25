import { useParams } from "react-router-dom";

const App = () => {
  const {id} = useParams();
  return (
    <div className="bg-red-500 p-2 text-center rounded-lg">
      Custom Resume Builder {id}
    </div>
  );
};

export default App;
