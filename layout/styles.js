export const tabsStyle = (theme) => ({
  justifyContent: 'flex-end',
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
  marginLeft: windowSize.width >= 672 ? "3rem" : "0",
});

export const sectionsContentStyle = (theme, windowSize) => ({
  padding:"1rem",
  width: "100%",
  maxHeight: windowSize.height >= 1024 ? "70vh" : "80vh",
  overflowY: "auto",
});

export const sideNavMenuStyle = (theme) => ({
  fontSize: "1.25rem",
  fontWeight: 400,
  lineHeight: 1.4,
  letterSpacing: 0,
});
