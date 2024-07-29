// components/TableHeader.tsx
import React from 'react';
import { Box, IconButton, Button } from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';
import FilterListIcon from '@mui/icons-material/FilterList';
import ViewModuleIcon from '@mui/icons-material/ViewModule';
import FullscreenIcon from '@mui/icons-material/Fullscreen';
import styled from 'styled-components';

// Styled component for header
const Header = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 16px;
  background-color: #fff;
  border-bottom: 1px solid #ddd;
`;

// Styled component for action buttons
const Actions = styled.div`
  display: flex;
  align-items: center;

  & > * {
    margin-left: 8px;
  }
`;

// TableHeader component
const TableHeader = () => {
  return (
    <Header>
      <Button variant="outlined">Add project</Button>
      <Actions>
        <IconButton>
          <SearchIcon />
        </IconButton>
        <IconButton>
          <FilterListIcon />
        </IconButton>
        <IconButton>
          <ViewModuleIcon />
        </IconButton>
        <IconButton>
          <FullscreenIcon />
        </IconButton>
      </Actions>
    </Header>
  );
};

export default TableHeader;
