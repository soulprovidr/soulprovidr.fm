import React, { useEffect, useState } from 'react';

export default (interval = 5000) => {
  const [meta, setMeta] = useState(null);

  useEffect(() => {
    let timeout = null;
    (function fetchMeta() {
      fetch('https://www.radioking.com/widgets/api/v1/radio/210013/track/current')
        .then(response => response.json())
        .then(data => {
          if (!meta || meta.id !== data.id) {
            setMeta(data);
          }
        });
      timeout = setTimeout(fetchMeta, interval);
    })();
    return () => {
      clearTimeout(timeout);
    };
  });

  return meta;
}