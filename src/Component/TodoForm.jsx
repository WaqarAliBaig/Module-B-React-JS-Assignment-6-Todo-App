import React from "react";

const TodoForm = ({
  handleSubmit,
  todo,
  tododesc,
  editId,
  setTodo,
  setTododesc,
}) => {
  return (
    <>
      <div class="w-full">
        <form onSubmit={handleSubmit}>
          <div>
            <input
              type="text"
              placeholder="Write title"
              value={todo}
              onChange={(e) => setTodo(e.target.value)}
            />
          </div>
          <div class="mb-4">
            <textarea
              placeholder="Write description"
              value={tododesc}
              onChange={(f) => setTododesc(f.target.value)}
            />
          </div>
          <button
            type="submit"
          >
            {" "}
            {editId ? "EDIT" : "SUBMIT"}
          </button>
        </form>
      </div>
    </>
  );
};

export default TodoForm;
