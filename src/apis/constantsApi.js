import clientApi from "./clientApi";

const END_POINT = "/api/constants";

const getConstants = () => {
  return clientApi.get(END_POINT);
};

export default { getConstants };
