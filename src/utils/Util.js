/*  Random id generator
    Src: https://stackoverflow.com/questions/6860853/generate-random-string-for-div-id/6860916
*/
import moment from "moment";

export function guid() {
  const S4 = () => (((1 + Math.random()) * 0x10000) | 0).toString(16).substring(1);

  return `${S4()}${S4()}${S4()}${S4()}${S4()}`;
}

export const startDateVal = moment().subtract(5, "month").format("YYYY-MM-DD");
export const endDateVal = moment().format("YYYY-MM-DD");
