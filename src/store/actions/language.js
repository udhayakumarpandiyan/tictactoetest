import * as TYPES from '../types';
import locale from '../../locale.json';
let lang = locale.lang;

const onLoad = () => ({
  type: TYPES.ON_LOAD
});

const onFail = msg => ({
  type: TYPES.ON_ERROR,
  msg
});

const onLanguageSuccess = payload => {
  return {
    payload,
    type: TYPES.CHANGE_LANGUAGE,
  };
};
export const changeLanguage = (value) => {
  return (dispatch) => {
    dispatch(onLanguageSuccess({language:lang[value], languageIndex: value}));
  }

}

