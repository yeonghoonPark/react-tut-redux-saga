export const addComma = (params) =>
  params?.toString().replace(/\B(?<!\.\d*)(?=(\d{3})+(?!\d))/g, ",");
