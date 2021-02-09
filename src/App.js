import ItemTable from "./ItemTable";
import { useState, useEffect } from "react";

function App() {
  //add useState for all state variables
  const [ps, setp] = useState([]);
  const [inputData, setInputData] = useState({ name: "", gender: "", age: "" });
  //load locationStorage
  useEffect(() => {
    const item = localStorage.getItem("item");

    if (item != null) {
      setp(JSON.parse(item));
    }
  }, []);

  useEffect(() => {
    localStorage.setItem("items", JSON.stringify(ps));
  }, [ps]);

  function addp(event) {
    event.preventDefault();
    const per = [...ps, inputData];
    setp(per);
  }

  function onDeleteCourse(id) {
    // TODO
    const p = ps.filter((item) => {
      return item.name !== id;
    });
    setp(p);
  }

  return (
    <div className="card" style={{ width: 400 }}>
      <div className="card-content">
        <p className="is-4 title has-text-centered">Add p</p>
        <form onSubmit={(e) => addp(e)}>
          <div className="field">
            <label className="label">Name</label>
            <input
              className="input"
              type="text"
              placeholder="e.q John Smith"
              //update related state based on event
              onChange={(e) =>
                setInputData({ inputData, name: e.currentTarget.value })
              }
            ></input>
          </div>

          <div className="field">
            <label className="label">Gender</label>
            <select
              className="input"
              type="text"
              placeholder="Please select .."
              onChange={(e) =>
                setInputData({ inputData, gender: e.currentTarget.value })
              }
            >
              <option value="" disabled selected hidden>
                -- Select Gender --
              </option>
              <option>Male</option>
              <option>Female</option>
            </select>
          </div>

          <div className="field">
            <label className="label">Age</label>
            <input
              className="input"
              type="number"
              placeholder="e.q 30"
              onChange={(e) =>
                setInputData({ ...inputData, age: e.currentTarget.value })
              }
            ></input>
          </div>

          <button className="button is-primary is-fullwidth" type="submit">
            Submit
          </button>

          <div className="mb-4"></div>
        </form>
        {/* display tables for all ps */}
        <p className="is-4 title has-text-centered">p List</p>
        {/* sample table */}
        {ps.map((item) => {
          return (
            <ItemTable
              name={item.name}
              gender={item.gender}
              age={item.age}
              del={onDeleteCourse}
            />
          );
        })}
        <p>Sunantha Rueanrit 620610817</p>
      </div>
    </div>
  );
}

export default App;
