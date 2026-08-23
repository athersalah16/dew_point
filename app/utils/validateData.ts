export const validateForm = (data: any): string => {
  if (
    !data?.name ||
    !data?.email ||
    !data?.phone ||
    !data?.subject ||
    !data?.project_requirements ||
    !data?.company_name ||
    !data?.document
  ) {
    return "Please fill in all required fields.";
  }
  const fileSize = data?.document?.size;

  if (fileSize > 500 * 1024) {
    return "File size exceeds the 500KB limit.";
  }
  return "";
};
