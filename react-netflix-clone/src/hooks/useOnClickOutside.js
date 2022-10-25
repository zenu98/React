import React, { useEffect } from "react";

const useOnClickOutside = (ref, handler) => {
  useEffect(() => {
    const listner = (e) => {
      if (!ref.current || ref.current.contains(e.target)) {
        return;
      }
      handler();
      document.removeEventListener("mousedown", listner);
      document.removeEventListener("touchstart", listner);
      console.log("remove");
    };

    document.addEventListener("mousedown", listner);
    document.addEventListener("touchstart", listner);
    console.log("add");
  }, [ref, handler]);
};

export default useOnClickOutside;
