function useProps(box) {
  const { width = "100px", height = "100px", color = "lightblue", title = "Default Box" } = box;
  return (
    <div
      style={{
        border: "3px solid green",
        padding: "5px",
        margin: "5px",
        width: width,
        height: height,
        backgroundColor: color
      }}
    >
        <h3>{title}</h3>
    </div>
  );
}

export default useProps;
