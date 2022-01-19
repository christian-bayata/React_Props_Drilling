import { React, useState } from "react";
import { data } from "./data";

const App = () => {
  const [people, setPeople] = useState(data);

  const removePerson = (id) => {
    if (people) {
      setPeople((people) => {
        return people.filter((person) => person.id !== id);
      });
    }
  };
  return (
    <section classname="card-body">
      <h2 className="info"> Props Drilling</h2>
      <List people={people} removePerson={removePerson} />
    </section>
  );
};

const List = ({ people, removePerson }) => {
  return (
    <>
      {people.map((person) => {
        return (
          <h3>
            <SinglePerson
              key={person.id}
              {...person}
              removePerson={removePerson}
            />
          </h3>
        );
      })}
    </>
  );
};

const SinglePerson = ({ id, name, removePerson }) => {
  return (
    <div className="item">
      <h4>{name}</h4>
      <button className="remove-item" onClick={() => removePerson(id)}>
        remove
      </button>
    </div>
  );
};

export default App;
