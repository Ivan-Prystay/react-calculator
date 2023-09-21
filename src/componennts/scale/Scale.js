export const Scale = ({ width, color }) => {
  return (
    <div
      style={{
        height: "20px",
        width: `${width * 15}px`,
        backgroundColor: color,
      }}
    ></div>
  );
};
