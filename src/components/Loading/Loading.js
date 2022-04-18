import React from "react";

const Loading = () => {
  return (
    <div className="App">
      <button class="btn btn-primary" type="button" disabled>
        <span
          class="spinner-grow spinner-grow-sm"
          role="status"
          aria-hidden="true"
        ></span>
        <span class="visually-hidden">Loading...</span>
      </button>
    </div>
  );
};

export default Loading;
