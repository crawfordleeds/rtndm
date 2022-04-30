import { Tesfda as TTesfda } from "../api/tesfda/Tesfda";

export const TESFDA_TITLE_FIELD = "fdsafas";

export const TesfdaTitle = (record: TTesfda): string => {
  return record.fdsafas || record.id;
};
