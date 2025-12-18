import React from 'react';
import FileTree from './FileTree';
import { fileTree } from './fileTreeData';

const Sidebar = () => {
  return (
    <div className="sidebar">
      <FileTree data={fileTree} />
    </div>
  );
};

export default Sidebar;
