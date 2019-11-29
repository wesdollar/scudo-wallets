import { setAlert } from "./setAlert";
import { alertType } from "../constants/alertTypes";
import { alertMessage } from "../constants/alertMessages";

export const failedFetch = () =>
  setAlert({
    type: alertType.error,
    message: alertMessage.failedFetch
  });
