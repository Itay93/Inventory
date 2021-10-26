import constantsApi from "../apis/constantsApi";

const handleGetConstants = async () => {
  const response = await constantsApi.getConstants();
  if (!response.ok) return response.data;
  return response.data.constants;
};

export default { handleGetConstants };
