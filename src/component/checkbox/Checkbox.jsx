import React, { useState } from 'react';

const CheckboxList = () => {
  const [checkboxes, setCheckboxes] = useState([
    { id: 1, label: 'Dogs', checked: false },
    { id: 2, label: 'Cats', checked: false },
    { id: 3, label: 'Cows', checked: false },
    { id: 4, label: 'Deers', checked: false }
  ]);

  const selectAll = () => {
    const updatedCheckboxes = checkboxes.map(checkbox => ({
      ...checkbox,
      checked: true
    }));
    setCheckboxes(updatedCheckboxes);
  };
  const removeAll = () => {
    const updatedCheckboxes = checkboxes.map(checkbox => ({
      ...checkbox,
      checked: false
    }));
    setCheckboxes(updatedCheckboxes);
  };

  const check = (id) => {
    const updatedCheckboxes = checkboxes.map(checkbox =>
      checkbox.id === id ? { ...checkbox, checked: !checkbox.checked } : checkbox
    );
    setCheckboxes(updatedCheckboxes);
  };

  return (
    <div className="flex flex-col items-start gap-2.5 m-6">
      <div data-testid="checkbox-container" className="flex flex-col gap-1.25">
        {checkboxes.map((checkbox, index) => (
          <label key={checkbox.id} className="flex items-center gap-1.25">
            <input
              data-testid={`checkbox-${index + 1}`}
              type="checkbox"
              checked={checkbox.checked}
              onClick={() => check(checkbox.id)}
            />
            {checkbox.label}
          </label>
        ))}
      </div>
      <button
        data-testid="button"
        onClick={selectAll}
        className="py-2.5 px-5 text-lg border-none rounded bg-gray-800 text-white cursor-pointer mt-6 hover:opacity-80"
      >
        Select All
      </button>
      <button
        data-testid="button"
        onClick={removeAll}
        className="py-2.5 px-5 text-lg border-none rounded bg-gray-800 text-white cursor-pointer mt-6 hover:opacity-80"
      >
        Remove All
      </button>
    </div>
  );
};

export default CheckboxList;
