import "./Join.css";

const Join = (props) => {
  return (
    <div id="join" className="page">
      <h1>Sign up</h1>
      <div className="content">
        <iframe
          title="form"
          src="https://docs.google.com/forms/d/e/1FAIpQLSfyffHVRnV6f9wll8prRshtxz7GN7JZZqlasrewgTz7fFJLQw/viewform?embedded=true"
          width="640"
          height="700"
          frameborder="0"
          marginheight="0"
          marginwidth="0"
        >
          Loading…
        </iframe>
      </div>
    </div>
  );
};

export default Join;
