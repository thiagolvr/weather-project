const verifyConditions = (arr, condition) => arr
  .some((conditionVariant) => condition?.toLowerCase().includes(conditionVariant));

export default verifyConditions;
