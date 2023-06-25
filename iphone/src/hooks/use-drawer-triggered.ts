import { useEffect, useState } from "react";

export const useDrawerTriggered = (inView: boolean) => {
  const [isDrawerTriggered, setIsDrawerTriggered] = useState(false);
  useEffect(() => {
    if (inView === true) {
      setIsDrawerTriggered(true);
    }
  }, [inView]);

  return isDrawerTriggered;
};
