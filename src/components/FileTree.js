import React, { useState } from 'react';

const TreeNode = ({ name, children }) => {
  const [isOpen, setIsOpen] = useState(false);
  const isDirectory = children && Object.keys(children).length > 0;

  const handleToggle = () => {
    if (isDirectory) {
      setIsOpen(!isOpen);
    }
  };

  return (
    <div>
      <div onClick={handleToggle} style={{ cursor: isDirectory ? 'pointer' : 'default' }}>
        {isDirectory ? (isOpen ? '📂' : '📁') : '📄'} {name}
      </div>
      {isOpen && isDirectory && (
        <div style={{ marginLeft: '20px' }}>
          {Object.entries(children).map(([childName, child]) => (
            <TreeNode key={childName} name={childName} children={child} />
          ))}
        </div>
      )}
    </div>
  );
};

const FileTree = ({ data }) => {
  return (
    <div>
      {Object.entries(data).map(([name, children]) => (
        <TreeNode key={name} name={name} children={children} />
      ))}
    </div>
  );
};

export default FileTree;
