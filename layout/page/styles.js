export const tabsStyle = (theme) => ({
  justifyContent: "flex-end",
  height: "3rem",
  width: "100%",
  backgroundColor: "#161616",
  color: "#fff",
  fontSize: "1rem",
  fontWeight: 400,
  lineHeight: 1.375,
});

export const sectionsStyle = (theme, windowSize) => ({
  position: "fixed",
  left: 0,
  bottom: 0,
  height: "3.75rem",
  width: "100%",
  backgroundColor: "#161616",
  color: "#fff",
  fontSize: "1rem",
  fontWeight: 400,
  lineHeight: 1.375,
  marginLeft: windowSize.width >= 768 ? "3rem" : "0",
});

export const sectionsContentStyle = (theme, { width, height }) => ({
  padding: width > 768 ? "3rem" : "1rem",
  width: "100%",
  maxHeight: height >= 1024 ? "70vh" : "80vh",
  overflowY: "auto",
});
