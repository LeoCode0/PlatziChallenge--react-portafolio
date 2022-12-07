import React, { useState } from 'react';
import { BillboardChart } from 'nr1';

function HomeNerdlet() {
  const [count, setCount] = useState(0);

  const clickCount = {
    metadata: {
      id: '1',
      name: 'Count',
      viz: 'main',
    },
    data: [{ y: count }],
  };
  return (
    <div>
      <BillboardChart data={[clickCount]} />
      <button onClick={() => setCount(count + 1)}>Increment count</button>
    </div>
  );
}

export default HomeNerdlet;