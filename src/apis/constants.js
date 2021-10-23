import client from "./client";

const END_POINT = "/api/constants";

const getConstants = () => {
  return client.get(END_POINT);
};

export default { getConstants };
