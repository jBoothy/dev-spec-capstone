import * as React from 'react';
import { Button, Stack } from '@mui/material';
import './Breadcrumbs.css';

function handleClick(event) {
  event.preventDefault();
    window.history.back();
}

// on click previous page
const previousPage = window.history.back;

// href for previous page
const previousPageHref = previousPage === '/' ? '/' : `/${previousPage}`;

export default function BasicBreadcrumbs() {
  return (
    <div role="presentation" onClick={handleClick}>
      <Stack spacing={2} direction="row">
        <Button variant="text" href={previousPageHref}>Previous</Button>
      </Stack>
    </div>
  );
}