import { useState, useEffect } from "react";
import axios from "axios";
import List from "./List";

export default function Course() {
  /**
   * Returns a List component containing Course information.
   */
  const [courses, setNewCourses] = useState(null);
  const [formCourse, setFormCourse] = useState({
    title: "",
    content: "",
  });

  useEffect(() => {
    getCourses();
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

  function createCourse(event) {
    axios({
      method: "POST",
      url: "/courses/",
      data: {
        course: formCourse.course,
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
    <div className="course">
      {/* <form className="create-course">
        <input onChange={handleChange} text={formCourse.course} name="course" placeholder="Course" value={formCourse.course} />
        <button onClick={createCourse}>Create Course</button>
      </form> */}
      {courses &&
        courses.map((course) => (
          <List key={course.course_id} id={course.course_id} course={course.title} deletion={DeleteCourse} />
        ))}
    </div>
  );
}
