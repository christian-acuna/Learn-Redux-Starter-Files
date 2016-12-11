/*jshint esversion: 6 */
import Raven from 'raven-js';


const sentry_key = '311d5bbdef1c4ea69a7cace6cbf76f7c';
const sentry_app = '121241';
export const sentry_url = `https://${sentry_key}@sentry.io/${sentry_app}`;


export function logException(ex, context) {
  Raven.captureException(ex, {
    extra: context
  });
  /*eslint no-console:0*/
  window && window.console && console.error && console.error(ex);
}
