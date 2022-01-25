import React, { useState } from "react";
import { MultiSelect } from "react-multi-select-component";

const Dropdown: React.FC = () => {
  const options = [
    { label: "Science ?", value: "science" },
    { label: "Sport ?", value: "sport" },
    { label: "Culture ?", value: "culture" },
    { label: "John Doe ?", value: "john-doe" },
  ];

  const [selected, setSelected] = useState([]);

  return (
    <div>
      <h1>Search by keyowrds Select Categories or Authors </h1>
      <pre>{JSON.stringify(selected)}</pre>
      <MultiSelect
        options={options}
        value={selected}
        onChange={setSelected}
        labelledBy={"Select"}
      />
    </div>
  );
};

export default Dropdown;