import React from 'react';
import '../styles/List.css';
import PopupModal from './PopupModal';
import Form from './Form';

const List = React.forwardRef(
  (
    {
      alert,
      error,
      onChange = (f) => f,
      onClose = (f) => f,
      onSubmit = (f) => f,
      renderTasks = (f) => f,
    },
    ref
  ) => {
    return (
      <div className="List">
        <div className="list-header">To Do BAMM</div>

        <Form
          ref={ref}
          alert={alert}
          error={error}
          onChange={onChange}
          onSubmit={onSubmit}
        />

        <div className="list-items">{renderTasks()}</div>

        <PopupModal error={error} onClose={onClose} />
      </div>
    );
  }
);

export default List;
