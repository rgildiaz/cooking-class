import { useState, useEffect } from "react";
import axios from "axios";
import List from "./List";

export default function Year() {
  const [years, setNewYears] = useState(null);
  const [formYear, setFormYear] = useState({
    title: "",
    content: "",
  });

  useEffect(() => {
    getYears();
  }, []);

  function getYears() {
    axios({
      method: "GET",
      url: "/years/",
    })
      .then((response) => {
        const data = response.data;
        setNewYears(data);
      })
      .catch((error) => {
        if (error.response) {
          console.log(error.response);
          console.log(error.response.status);
          console.log(error.response.headers);
        }
      });
  }

  function createYear(event) {
    axios({
      method: "POST",
      url: "/years/",
      data: {
        year: formYear.year,
      },
    }).then((response) => {
      getYears();
    });

    setFormYear({
      year: "",
    });

    event.preventDefault();
  }

  function DeleteYear(id) {
    axios({
      method: "DELETE",
      url: `/years/${id}/`,
    }).then((response) => {
      getYears();
    });
  }

  function handleChange(event) {
    const { value, name } = event.target;
    setFormYear((prevYear) => ({
      ...prevYear,
      [name]: value,
    }));
  }

  return (
    <div className="">
      <form className="create-year">
        <input onChange={handleChange} text={formYear.year} name="year" placeholder="Year" value={formYear.year} />
        <button onClick={createYear}>Create Year</button>
      </form>
      {years &&
        years.map((year) => <List key={year.year_id} id={year.year_id} year={year.year} deletion={DeleteYear} />)}
    </div>
  );
}
