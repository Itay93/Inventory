const TabPanel = (props) => {
  const { children, value, index, ...other } = props;
  return (
    <div role="tabpanel" hidden={value !== index} id={index} {...other}>
      {value === index && <div>{children}</div>}
    </div>
  );
};

export default TabPanel;
