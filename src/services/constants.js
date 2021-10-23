import constants from "../apis/constants";

const handleGetConstants = async () => {
  const response = await constants.getConstants();
  if (!response.ok) return response.data;
  return response.data.constants;
};

export default { handleGetConstants };
