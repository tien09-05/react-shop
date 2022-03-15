const Helmet = ({ title, children }) => {
  document.title = title;
  return <>{children}</>;
};

export default Helmet;
