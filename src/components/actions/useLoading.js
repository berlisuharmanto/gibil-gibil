import React, { useEffect } from "react";

function useLoading() {
  const [loading, setLoading] = React.useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 1200);
    return () => {
      clearTimeout(timer);
    };
  }, []);

  return loading;
}

export default useLoading;
