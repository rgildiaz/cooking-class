import { useState, useEffect } from "react";
import axios from "axios";
import List from "./List";

export default function Course() {
  /**
   * Returns a List component containing Course information.
   */
  const [c, setC] = useState(null);
  const [courses, setNewCourses] = useState(null);
  const [formCourse, setFormCourse] = useState({
    title: "",
    date: "",
  });

  useEffect(() => {
    getCourses();
    getC();
  }, []);

  function getCourses() {
    axios({
      method: "GET",
      url: "/courses/",
    })
      .then((response) => {
        const data = response.data;
        setNewCourses(data);
      })
      .catch((error) => {
        if (error.response) {
          console.log(error.response);
          console.log(error.response.status);
          console.log(error.response.headers);
        }
      });
  }

  function getC() {
    axios({
      method: "GET",
      url: "/c/",
    })
      .then((response) => {
        const data = response.data;
        // console.log(data);
        setC(data);
      })
      .catch((error) => {
        if (error.response) {
          console.log(error.response);
          console.log(error.response.status);
          console.log(error.response.headers);
        }
      });
  }

  function createCourse(event) {
    axios({
      method: "POST",
      url: "/courses/",
      data: {
        course: formCourse.title,
      },
    }).then((response) => {
      getCourses();
    });

    setFormCourse({
      course: "",
    });

    event.preventDefault();
  }

  function DeleteCourse(id) {
    axios({
      method: "DELETE",
      url: `/courses/${id}/`,
    }).then((response) => {
      getCourses();
    });
  }

  function handleChange(event) {
    const { value, name } = event.target;
    setFormCourse((prevCourse) => ({
      ...prevCourse,
      [name]: value,
    }));
  }

  return (
    <>
      {/* <form className="create-course">
        <input onChange={handleChange} text={formCourse.course} name="course" placeholder="Course" value={formCourse.course} />
        <button onClick={createCourse}>Create Course</button>
      </form> */}
      {courses && courses.map((course) => (console.log(course)))}
      {courses &&
        courses.map((course) => (
          <List key={course.course_id} id={course.course_id} title={course.course_name} desc={course.course_intro} deletion={DeleteCourse} />
        ))}
    </>
  );
}
