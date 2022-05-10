import React from 'react';

import "../App.css"


export const StudentForm = ({ onSubmit }) => {
  return (
    <form onSubmit={onSubmit}>
      <div className="form-group">
        <label htmlFor="name">Imię</label>
        <input className="form-control" id="name" />
      </div>
      <div className="form-group">
        <label htmlFor="email">Adres email</label>
        <input
          type="email"
          className="form-control"
          id="email"
          placeholder="name@example.com"
        />
      </div>
      <div className="form-group">
        <label htmlFor="tags">Tagi</label>
        <input className="form-control" id="tags" />
      </div>
      <div className="form-group">
        <button className="button-85" type="submit">
          Dodaj studenta
        </button>
      </div>
    </form>
  );
};
export default StudentForm;
