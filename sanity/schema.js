import patchNotes from "./schemaTypes/patchNotes";
import laneEffects from "./schemaTypes/laneEffects";
import ballEffects from "./schemaTypes/ballEffects";
import faqs from "./schemaTypes/faqs";
import questionAndAnswer from "./schemaTypes/questionAndAnswer";
import centers from "./schemaTypes/centers";
import pricing from "./schemaTypes/pricing";

export const schema = {
  types: [
    pricing,
    faqs,
    questionAndAnswer,
    centers,
    patchNotes,
    laneEffects,
    ballEffects,
  ],
};
