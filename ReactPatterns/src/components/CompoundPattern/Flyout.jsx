import React, { createContext, useCallback, useContext, useState } from "react";

const FlyOutContext = createContext(null);

const FlyOut = ({ children }) => {
  const [open, setOpen] = useState(false);
  const [value, setValue] = useState("");
  const toggle = useCallback(() => setOpen((prev) => !prev), []);
  return (
    <FlyOutContext.Provider value={{ open, toggle, value, setValue }}>
      {children}
    </FlyOutContext.Provider>
  );
};

const Input = (props) => {
  const { value, toggle,setValue } = useContext(FlyOutContext);
  return (
    <input
      onFocus={toggle}
      onBlur={toggle}
      className="flyout-input"
      value={value}
      onChange={(e) => setValue(e.target.value)}
      {...props}
    />
  );
};

const List = ({ children }) => {
  const { open } = useContext(FlyOutContext);
  return (
    open && (
      <div className="flyout-list">
        <ul>{children}</ul>
      </div>
    )
  );
};

const ListItem = ({ children, value }) => {
  const { setValue } = useContext(FlyOutContext);
  return (
    <li className="flyout-list-item" onMouseDown={() => setValue(value)}>
      {children}
    </li>
  );
};

FlyOut.Input = Input;
FlyOut.List = List;
FlyOut.ListItem = ListItem;

export { FlyOut };
