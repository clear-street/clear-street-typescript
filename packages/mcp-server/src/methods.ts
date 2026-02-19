// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { McpOptions } from './options';

export type SdkMethod = {
  clientCallName: string;
  fullyQualifiedName: string;
  httpMethod?: 'get' | 'post' | 'put' | 'patch' | 'delete' | 'query';
  httpPath?: string;
};

export const sdkMethods: SdkMethod[] = [
  {
    clientCallName: 'client.active.v1.accounts.getAccountByID',
    fullyQualifiedName: 'active.v1.accounts.getAccountByID',
    httpMethod: 'get',
    httpPath: '/active/v1/accounts/{account_id}',
  },
  {
    clientCallName: 'client.active.v1.accounts.getAccounts',
    fullyQualifiedName: 'active.v1.accounts.getAccounts',
    httpMethod: 'get',
    httpPath: '/active/v1/accounts',
  },
  {
    clientCallName: 'client.active.v1.accounts.patchAccountByID',
    fullyQualifiedName: 'active.v1.accounts.patchAccountByID',
    httpMethod: 'patch',
    httpPath: '/active/v1/accounts/{account_id}',
  },
  {
    clientCallName: 'client.active.v1.accounts.balances.getAccountBalances',
    fullyQualifiedName: 'active.v1.accounts.balances.getAccountBalances',
    httpMethod: 'get',
    httpPath: '/active/v1/accounts/{account_id}/balances',
  },
  {
    clientCallName: 'client.active.v1.accounts.locates.createLocateRequest',
    fullyQualifiedName: 'active.v1.accounts.locates.createLocateRequest',
    httpMethod: 'post',
    httpPath: '/active/v1/accounts/{account_id}/locates',
  },
  {
    clientCallName: 'client.active.v1.accounts.locates.getLocateRequests',
    fullyQualifiedName: 'active.v1.accounts.locates.getLocateRequests',
    httpMethod: 'get',
    httpPath: '/active/v1/accounts/{account_id}/locates',
  },
  {
    clientCallName: 'client.active.v1.accounts.locates.updateLocateRequest',
    fullyQualifiedName: 'active.v1.accounts.locates.updateLocateRequest',
    httpMethod: 'patch',
    httpPath: '/active/v1/accounts/{account_id}/locates',
  },
  {
    clientCallName: 'client.active.v1.accounts.locates.inventory.getLocateInventory',
    fullyQualifiedName: 'active.v1.accounts.locates.inventory.getLocateInventory',
    httpMethod: 'get',
    httpPath: '/active/v1/accounts/{account_id}/locates/inventory',
  },
  {
    clientCallName: 'client.active.v1.accounts.orders.cancelAllOrders',
    fullyQualifiedName: 'active.v1.accounts.orders.cancelAllOrders',
    httpMethod: 'delete',
    httpPath: '/active/v1/accounts/{account_id}/orders',
  },
  {
    clientCallName: 'client.active.v1.accounts.orders.cancelOrder',
    fullyQualifiedName: 'active.v1.accounts.orders.cancelOrder',
    httpMethod: 'delete',
    httpPath: '/active/v1/accounts/{account_id}/orders/{order_id}',
  },
  {
    clientCallName: 'client.active.v1.accounts.orders.getOrderByID',
    fullyQualifiedName: 'active.v1.accounts.orders.getOrderByID',
    httpMethod: 'get',
    httpPath: '/active/v1/accounts/{account_id}/orders/{order_id}',
  },
  {
    clientCallName: 'client.active.v1.accounts.orders.getOrders',
    fullyQualifiedName: 'active.v1.accounts.orders.getOrders',
    httpMethod: 'get',
    httpPath: '/active/v1/accounts/{account_id}/orders',
  },
  {
    clientCallName: 'client.active.v1.accounts.orders.replaceOrder',
    fullyQualifiedName: 'active.v1.accounts.orders.replaceOrder',
    httpMethod: 'patch',
    httpPath: '/active/v1/accounts/{account_id}/orders/{order_id}',
  },
  {
    clientCallName: 'client.active.v1.accounts.orders.submitOrders',
    fullyQualifiedName: 'active.v1.accounts.orders.submitOrders',
    httpMethod: 'post',
    httpPath: '/active/v1/accounts/{account_id}/orders',
  },
  {
    clientCallName: 'client.active.v1.accounts.portfolioHistory.getPortfolioHistory',
    fullyQualifiedName: 'active.v1.accounts.portfolioHistory.getPortfolioHistory',
    httpMethod: 'get',
    httpPath: '/active/v1/accounts/{account_id}/portfolio-history',
  },
  {
    clientCallName: 'client.active.v1.accounts.positions.closePosition',
    fullyQualifiedName: 'active.v1.accounts.positions.closePosition',
    httpMethod: 'delete',
    httpPath: '/active/v1/accounts/{account_id}/positions/{security_id_source}/{security_id}',
  },
  {
    clientCallName: 'client.active.v1.accounts.positions.closePositions',
    fullyQualifiedName: 'active.v1.accounts.positions.closePositions',
    httpMethod: 'delete',
    httpPath: '/active/v1/accounts/{account_id}/positions',
  },
  {
    clientCallName: 'client.active.v1.accounts.positions.getPositions',
    fullyQualifiedName: 'active.v1.accounts.positions.getPositions',
    httpMethod: 'get',
    httpPath: '/active/v1/accounts/{account_id}/positions',
  },
  {
    clientCallName: 'client.active.v1.apiKeys.create',
    fullyQualifiedName: 'active.v1.apiKeys.create',
    httpMethod: 'post',
    httpPath: '/active/v1/api_keys',
  },
  {
    clientCallName: 'client.active.v1.apiKeys.list',
    fullyQualifiedName: 'active.v1.apiKeys.list',
    httpMethod: 'get',
    httpPath: '/active/v1/api_keys',
  },
  {
    clientCallName: 'client.active.v1.apiKeys.revoke',
    fullyQualifiedName: 'active.v1.apiKeys.revoke',
    httpMethod: 'delete',
    httpPath: '/active/v1/api_keys/{id}',
  },
  {
    clientCallName: 'client.active.v1.apiKeys.revokeAll',
    fullyQualifiedName: 'active.v1.apiKeys.revokeAll',
    httpMethod: 'delete',
    httpPath: '/active/v1/api_keys',
  },
  {
    clientCallName: 'client.active.v1.assistant.prompts.getPromptResult',
    fullyQualifiedName: 'active.v1.assistant.prompts.getPromptResult',
    httpMethod: 'get',
    httpPath: '/active/v1/assistant/prompts/{id}',
  },
  {
    clientCallName: 'client.active.v1.assistant.prompts.runPrompt',
    fullyQualifiedName: 'active.v1.assistant.prompts.runPrompt',
    httpMethod: 'post',
    httpPath: '/active/v1/assistant/prompts',
  },
  {
    clientCallName: 'client.active.v1.calendars.dividends.getDividendsCalendar',
    fullyQualifiedName: 'active.v1.calendars.dividends.getDividendsCalendar',
    httpMethod: 'get',
    httpPath: '/active/v1/calendars/dividends',
  },
  {
    clientCallName: 'client.active.v1.calendars.earnings.getEarningsCalendar',
    fullyQualifiedName: 'active.v1.calendars.earnings.getEarningsCalendar',
    httpMethod: 'get',
    httpPath: '/active/v1/calendars/earnings',
  },
  {
    clientCallName: 'client.active.v1.calendars.economic.getEconomicCalendar',
    fullyQualifiedName: 'active.v1.calendars.economic.getEconomicCalendar',
    httpMethod: 'get',
    httpPath: '/active/v1/calendars/economic',
  },
  {
    clientCallName: 'client.active.v1.calendars.marketHours.getMarketHoursCalendar',
    fullyQualifiedName: 'active.v1.calendars.marketHours.getMarketHoursCalendar',
    httpMethod: 'get',
    httpPath: '/active/v1/calendars/market-hours',
  },
  {
    clientCallName: 'client.active.v1.calendars.mergersAcquisitions.getMergersAndAcquisitionsCalendar',
    fullyQualifiedName: 'active.v1.calendars.mergersAcquisitions.getMergersAndAcquisitionsCalendar',
    httpMethod: 'get',
    httpPath: '/active/v1/calendars/mergers-acquisitions',
  },
  {
    clientCallName: 'client.active.v1.calendars.splits.getSplitsCalendar',
    fullyQualifiedName: 'active.v1.calendars.splits.getSplitsCalendar',
    httpMethod: 'get',
    httpPath: '/active/v1/calendars/splits',
  },
  {
    clientCallName: 'client.active.v1.calendars.summary.getCalendarSummary',
    fullyQualifiedName: 'active.v1.calendars.summary.getCalendarSummary',
    httpMethod: 'get',
    httpPath: '/active/v1/calendars/summary',
  },
  {
    clientCallName: 'client.active.v1.instruments.getInstrumentByID',
    fullyQualifiedName: 'active.v1.instruments.getInstrumentByID',
    httpMethod: 'get',
    httpPath: '/active/v1/instruments/{security_id_source}/{security_id}',
  },
  {
    clientCallName: 'client.active.v1.instruments.getInstruments',
    fullyQualifiedName: 'active.v1.instruments.getInstruments',
    httpMethod: 'get',
    httpPath: '/active/v1/instruments',
  },
  {
    clientCallName: 'client.active.v1.instruments.analystReporting.getInstrumentAnalystConsensus',
    fullyQualifiedName: 'active.v1.instruments.analystReporting.getInstrumentAnalystConsensus',
    httpMethod: 'get',
    httpPath: '/active/v1/instruments/{security_id_source}/{security_id}/analyst-reporting',
  },
  {
    clientCallName: 'client.active.v1.instruments.events.getAllInstrumentEvents',
    fullyQualifiedName: 'active.v1.instruments.events.getAllInstrumentEvents',
    httpMethod: 'get',
    httpPath: '/active/v1/instruments/events',
  },
  {
    clientCallName: 'client.active.v1.instruments.events.getInstrumentEvents',
    fullyQualifiedName: 'active.v1.instruments.events.getInstrumentEvents',
    httpMethod: 'get',
    httpPath: '/active/v1/instruments/{security_id_source}/{security_id}/events',
  },
  {
    clientCallName: 'client.active.v1.instruments.reporting.getInstrumentReporting',
    fullyQualifiedName: 'active.v1.instruments.reporting.getInstrumentReporting',
    httpMethod: 'get',
    httpPath: '/active/v1/instruments/{security_id_source}/{security_id}/reporting',
  },
  {
    clientCallName: 'client.active.v1.instruments.venues.getVenues',
    fullyQualifiedName: 'active.v1.instruments.venues.getVenues',
    httpMethod: 'get',
    httpPath: '/active/v1/instruments/venues',
  },
  {
    clientCallName: 'client.active.v1.iris.feedback.createFeedback',
    fullyQualifiedName: 'active.v1.iris.feedback.createFeedback',
    httpMethod: 'post',
    httpPath: '/active/v1/iris/feedback',
  },
  {
    clientCallName: 'client.active.v1.iris.runs.cancelRun',
    fullyQualifiedName: 'active.v1.iris.runs.cancelRun',
    httpMethod: 'delete',
    httpPath: '/active/v1/iris/runs/{run_id}',
  },
  {
    clientCallName: 'client.active.v1.iris.runs.getRun',
    fullyQualifiedName: 'active.v1.iris.runs.getRun',
    httpMethod: 'get',
    httpPath: '/active/v1/iris/runs/{run_id}',
  },
  {
    clientCallName: 'client.active.v1.iris.runs.startRun',
    fullyQualifiedName: 'active.v1.iris.runs.startRun',
    httpMethod: 'post',
    httpPath: '/active/v1/iris/runs',
  },
  {
    clientCallName: 'client.active.v1.iris.threads.getThread',
    fullyQualifiedName: 'active.v1.iris.threads.getThread',
    httpMethod: 'get',
    httpPath: '/active/v1/iris/threads/{thread_id}',
  },
  {
    clientCallName: 'client.active.v1.iris.threads.listThreads',
    fullyQualifiedName: 'active.v1.iris.threads.listThreads',
    httpMethod: 'get',
    httpPath: '/active/v1/iris/threads',
  },
  {
    clientCallName: 'client.active.v1.iris.threads.messages.listMessages',
    fullyQualifiedName: 'active.v1.iris.threads.messages.listMessages',
    httpMethod: 'get',
    httpPath: '/active/v1/iris/threads/{thread_id}/messages',
  },
  {
    clientCallName: 'client.active.v1.marketData.snapshot.getSnapshots',
    fullyQualifiedName: 'active.v1.marketData.snapshot.getSnapshots',
    httpMethod: 'get',
    httpPath: '/active/v1/market-data/snapshot',
  },
  {
    clientCallName: 'client.active.v1.news.getNews',
    fullyQualifiedName: 'active.v1.news.getNews',
    httpMethod: 'get',
    httpPath: '/active/v1/news',
  },
  {
    clientCallName: 'client.active.v1.screener.getScreener',
    fullyQualifiedName: 'active.v1.screener.getScreener',
    httpMethod: 'get',
    httpPath: '/active/v1/screener',
  },
  {
    clientCallName: 'client.active.v1.version.getVersion',
    fullyQualifiedName: 'active.v1.version.getVersion',
    httpMethod: 'get',
    httpPath: '/active/v1/version',
  },
  {
    clientCallName: 'client.active.v1.version.updateVersion',
    fullyQualifiedName: 'active.v1.version.updateVersion',
    httpMethod: 'patch',
    httpPath: '/active/v1/version',
  },
  {
    clientCallName: 'client.active.v1.watchlists.createWatchlist',
    fullyQualifiedName: 'active.v1.watchlists.createWatchlist',
    httpMethod: 'post',
    httpPath: '/active/v1/watchlists',
  },
  {
    clientCallName: 'client.active.v1.watchlists.deleteWatchlist',
    fullyQualifiedName: 'active.v1.watchlists.deleteWatchlist',
    httpMethod: 'delete',
    httpPath: '/active/v1/watchlists/{watchlist_id}',
  },
  {
    clientCallName: 'client.active.v1.watchlists.getWatchlistByID',
    fullyQualifiedName: 'active.v1.watchlists.getWatchlistByID',
    httpMethod: 'get',
    httpPath: '/active/v1/watchlists/{watchlist_id}',
  },
  {
    clientCallName: 'client.active.v1.watchlists.getWatchlists',
    fullyQualifiedName: 'active.v1.watchlists.getWatchlists',
    httpMethod: 'get',
    httpPath: '/active/v1/watchlists',
  },
  {
    clientCallName: 'client.active.v1.watchlists.items.addWatchlistItem',
    fullyQualifiedName: 'active.v1.watchlists.items.addWatchlistItem',
    httpMethod: 'post',
    httpPath: '/active/v1/watchlists/{watchlist_id}/items',
  },
  {
    clientCallName: 'client.active.v1.watchlists.items.deleteWatchlistItem',
    fullyQualifiedName: 'active.v1.watchlists.items.deleteWatchlistItem',
    httpMethod: 'delete',
    httpPath: '/active/v1/watchlists/{watchlist_id}/items/{item_id}',
  },
  {
    clientCallName: 'client.active.v1.ws.websocketHandler',
    fullyQualifiedName: 'active.v1.ws.websocketHandler',
    httpMethod: 'get',
    httpPath: '/active/v1/ws',
  },
];

function allowedMethodsForCodeTool(options: McpOptions | undefined): SdkMethod[] | undefined {
  if (!options) {
    return undefined;
  }

  let allowedMethods: SdkMethod[];

  if (options.codeAllowHttpGets || options.codeAllowedMethods) {
    // Start with nothing allowed and then add into it from options
    let allowedMethodsSet = new Set<SdkMethod>();

    if (options.codeAllowHttpGets) {
      // Add all methods that map to an HTTP GET
      sdkMethods
        .filter((method) => method.httpMethod === 'get')
        .forEach((method) => allowedMethodsSet.add(method));
    }

    if (options.codeAllowedMethods) {
      // Add all methods that match any of the allowed regexps
      const allowedRegexps = options.codeAllowedMethods.map((pattern) => {
        try {
          return new RegExp(pattern);
        } catch (e) {
          throw new Error(
            `Invalid regex pattern for allowed method: "${pattern}": ${e instanceof Error ? e.message : e}`,
          );
        }
      });

      sdkMethods
        .filter((method) => allowedRegexps.some((regexp) => regexp.test(method.fullyQualifiedName)))
        .forEach((method) => allowedMethodsSet.add(method));
    }

    allowedMethods = Array.from(allowedMethodsSet);
  } else {
    // Start with everything allowed
    allowedMethods = [...sdkMethods];
  }

  if (options.codeBlockedMethods) {
    // Filter down based on blocked regexps
    const blockedRegexps = options.codeBlockedMethods.map((pattern) => {
      try {
        return new RegExp(pattern);
      } catch (e) {
        throw new Error(
          `Invalid regex pattern for blocked method: "${pattern}": ${e instanceof Error ? e.message : e}`,
        );
      }
    });

    allowedMethods = allowedMethods.filter(
      (method) => !blockedRegexps.some((regexp) => regexp.test(method.fullyQualifiedName)),
    );
  }

  return allowedMethods;
}

export function blockedMethodsForCodeTool(options: McpOptions | undefined): SdkMethod[] | undefined {
  const allowedMethods = allowedMethodsForCodeTool(options);
  if (!allowedMethods) {
    return undefined;
  }

  const allowedSet = new Set(allowedMethods.map((method) => method.fullyQualifiedName));

  // Return any methods that are not explicitly allowed
  return sdkMethods.filter((method) => !allowedSet.has(method.fullyQualifiedName));
}
