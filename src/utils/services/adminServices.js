import { ApiUrls } from "../../constants";
import { HttpMethods, getQueryParams } from "../helpers";

export default {
  generateEmail: (data) => ({
    url: ApiUrls.GENERATE_EMAIL,
    method: HttpMethods.POST,
    data,
  }),
  modifyEmail: (data) => ({
    url: ApiUrls.MODIFY_EMAIL,
    method: HttpMethods.POST,
    data,
  }),
  scanEmail: (data) => ({
    url: ApiUrls.SCAN_EMAIL,
    method: HttpMethods.POST,
    data,
  }),
};
