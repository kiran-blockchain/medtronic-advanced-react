import useToggle from "../../hooks/useToggle";

export const Toggle = () => {
    const [on, toggle] = useToggle(true);
  
    return (
      <div>
        <div>{on ? 'ON' : 'OFF'}</div>
        <button onClick={toggle}>Toggle</button>
        <button onClick={() => toggle(true)}>set ON</button>
        <button onClick={() => toggle(false)}>set OFF</button>
      </div>
    );
  };