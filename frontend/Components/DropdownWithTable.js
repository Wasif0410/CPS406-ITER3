// src/components/DropdownWithTable.js
import React, { useState } from 'react';

function DropdownWithTable({ title, content }) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div style={{ margin: '0 20px', flex: 1 }}>
      <button onClick={() => setIsOpen(!isOpen)} style={{ width: '100%' }}>
        {title}
      </button>
      {isOpen && (
        <div style={{ marginTop: '10px' }}>
          {content}
        </div>
      )}
    </div>
  );
}

export default DropdownWithTable;
