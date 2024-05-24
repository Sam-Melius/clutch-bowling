import patchNotes from "./schemaTypes/patchNotes";
import laneEffects from "./schemaTypes/laneEffects";
import ballEffects from "./schemaTypes/ballEffects";
import faqs from "./schemaTypes/faqs";
import questionAndAnswer from "./schemaTypes/questionAndAnswer";

export const schema = {
  types: [faqs, questionAndAnswer, patchNotes, laneEffects, ballEffects],
};
