// Server Side Component
// This will be the default
/*import SearchBar from './SearchBar';
import Logo from './Logo';

export default function Counter() {
  return (
    <>
      <nav>
        <Logo />
        <SearchBar />
      </nav>

      <main>
        <p>This component will be rendered on server side</p>
      </main>
    </>
  );
} */

// Client Side Component
// Whenever you use state, hooks or other client side solutions you have to declare it as a client component
// State is not supported on server side
'use client';

import { useState } from 'react';

export default function Counter() {
  const [count, setCount] = useState(0);

  return (
    <div>
      <p>You clicked {count} times</p>
      <button onClick={() => setCount(count + 1)}>Click me</button>
    </div>
  );
}

// When to use Server vs Client components
