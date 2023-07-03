export const ApiUrls = {
  GENERATE_EMAIL: "/email/generate",
  MODIFY_EMAIL: "/email/modify",
  SCAN_EMAIL: "/email/scan",
};

export const servicesAccessibleWithoutToken = [
  ...Object.values(ApiUrls),
  //   ...Object.values(ApiUrls.CONFIG),
];
