export const Scale = ({ width }) => {
  console.log("width: ", width);
  return (
    <div
      style={{
        border: "solid",
        borderWidth: "2px",
        borderBlockColor: "red",
        height: "20px",
        width: `${width * 50}px`,
        backgroundColor: "grey",
      }}
    ></div>
  );
};
