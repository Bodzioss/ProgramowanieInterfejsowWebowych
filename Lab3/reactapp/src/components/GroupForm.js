import React from 'react';

import "./styles/GroupForm.css"

export const GroupForm = ({ GroupOnSubmit }) => {
  return (
    <form onSubmit={GroupOnSubmit}>
      <div className="form-group">
        <label htmlFor="name">Nazwa</label>
        <input className="form-control" id="name" />
      </div>
      <div className="form-group">
        <label htmlFor="tags">Opis</label>
        <input className="form-control" id="tags" />
      </div>
      <div className="form-group">
        <label htmlFor="members">Lista członków</label>
        <input className="form-control" id="members" />
      </div>
      <div className="form-group">
        <label htmlFor="subjects">Przedmiot</label>
        <input className="form-control" id="subjects" />
      </div>
      <div className="form-group">
        <button className="form-control btn btn-primary" type="submit">
          Dodaj grupę
        </button>
      </div>
    </form>
  );
};
export default GroupForm;
