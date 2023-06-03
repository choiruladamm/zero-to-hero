/* eslint-disable no-unused-vars */

import { useState, useCallback, useMemo } from "react";

const useToogle = () => {
  const [status, setStatus] = useState(false);

  const toogleStatus = useCallback(() => {
    setStatus((prevStatus) => !prevStatus);
  }, []);

  const values = useMemo(
    () => ({
      status,
      toogleStatus,
    }),
    [status, toogleStatus]
  );

  return values;
};

export default useToogle;
