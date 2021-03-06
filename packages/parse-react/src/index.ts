import Parse from 'parse';

global.Parse = Parse;

export * from '@parse/react-base';

export const initializeParse = (serverURL: string, applicationId: string, javascriptKey: string) => {
  Parse.enableLocalDatastore();
  Parse.serverURL = serverURL;
  Parse.initialize(applicationId, javascriptKey);
};
