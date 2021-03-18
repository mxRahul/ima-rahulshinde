import { SDBaseService } from 'app/n-services/SDBaseService';
//CORE_REFERENCE_IMPORTS
//CORE_REFERENCE_IMPORT-incidenceService
import { incidenceService } from '../sd-services/incidenceService';
//CORE_REFERENCE_IMPORT-getIncList

export const sdProviders = [
  SDBaseService,
  //CORE_REFERENCE_PUSH_TO_SD_ARRAY
  //CORE_REFERENCE_PUSH_TO_SD_ARRAY-incidenceService
  incidenceService,
  //CORE_REFERENCE_PUSH_TO_SD_ARRAY-getIncList
];
