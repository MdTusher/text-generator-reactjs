import { useState } from "react";
import data from "./data";
function App() {
  const [count, setcount] = useState(0);
  const [text, setText] = useState([]);
  const handleSubmit = (e) => {
    e.preventDefault();
    let num = parseInt(count);

    if (count <= 0) {
      num = 1;
    }
    if (count > data.length) {
      num = data.length;
    }
    setText(data.slice(0, num));
  };
  return (
    <section className="container">
      <h3>Text generator</h3>
      <form className="content" onSubmit={handleSubmit}>
        <label htmlFor="amount"> paragraphs: </label>
        <input
          type="number"
          name="amount"
          id="amount"
          value={count}
          onChange={(e) => setcount(e.target.value)}
        />
        <button type="submit">generate</button>
      </form>
      <hr />
      <article>
        {text.map((item, index) => (
          <p key={index}>{item}</p>
        ))}
      </article>
    </section>
  );
}

export default App;
