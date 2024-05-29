import patchNotes from "./schemaTypes/patchNotes";
import laneEffects from "./schemaTypes/laneEffects";
import ballEffects from "./schemaTypes/ballEffects";
import faqs from "./schemaTypes/faqs";
import questionAndAnswer from "./schemaTypes/questionAndAnswer";
import centers from "./schemaTypes/centers";

export const schema = {
  types: [
    faqs,
    questionAndAnswer,
    centers,
    patchNotes,
    laneEffects,
    ballEffects,
  ],
};
