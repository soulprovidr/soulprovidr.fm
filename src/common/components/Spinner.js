import React from 'react';

export default function Spinner({ modifier ='secondary' }) {
  return (
    <div class={`spinner-border text-${modifier}`} role="status">
      <span class="sr-only">Loading...</span>
    </div>
  )
}