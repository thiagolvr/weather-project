const verifyConditions = (arr, condition) => arr
  .some((item) => condition?.toLowerCase().includes(item));

export default verifyConditions;
