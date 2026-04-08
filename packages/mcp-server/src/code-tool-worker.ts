// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import path from 'node:path';
import util from 'node:util';
import Fuse from 'fuse.js';
import ts from 'typescript';
import { WorkerOutput } from './code-tool-types';
import { ClearStreet, ClientOptions } from '@clear-street-internal/sdk';

async function tseval(code: string) {
  return import('data:application/typescript;charset=utf-8;base64,' + Buffer.from(code).toString('base64'));
}

function getRunFunctionSource(code: string): {
  type: 'declaration' | 'expression';
  client: string | undefined;
  code: string;
} | null {
  const sourceFile = ts.createSourceFile('code.ts', code, ts.ScriptTarget.Latest, true);
  const printer = ts.createPrinter();

  for (const statement of sourceFile.statements) {
    // Check for top-level function declarations
    if (ts.isFunctionDeclaration(statement)) {
      if (statement.name?.text === 'run') {
        return {
          type: 'declaration',
          client: statement.parameters[0]?.name.getText(),
          code: printer.printNode(ts.EmitHint.Unspecified, statement.body!, sourceFile),
        };
      }
    }

    // Check for variable declarations: const run = () => {} or const run = function() {}
    if (ts.isVariableStatement(statement)) {
      for (const declaration of statement.declarationList.declarations) {
        if (
          ts.isIdentifier(declaration.name) &&
          declaration.name.text === 'run' &&
          // Check if it's initialized with a function
          declaration.initializer &&
          (ts.isFunctionExpression(declaration.initializer) || ts.isArrowFunction(declaration.initializer))
        ) {
          return {
            type: 'expression',
            client: declaration.initializer.parameters[0]?.name.getText(),
            code: printer.printNode(ts.EmitHint.Unspecified, declaration.initializer, sourceFile),
          };
        }
      }
    }
  }

  return null;
}

function getTSDiagnostics(code: string): string[] {
  const functionSource = getRunFunctionSource(code)!;
  const codeWithImport = [
    'import { ClearStreet } from "@clear-street-internal/sdk";',
    functionSource.type === 'declaration' ?
      `async function run(${functionSource.client}: ClearStreet)`
    : `const run: (${functionSource.client}: ClearStreet) => Promise<unknown> =`,
    functionSource.code,
  ].join('\n');
  const sourcePath = path.resolve('code.ts');
  const ast = ts.createSourceFile(sourcePath, codeWithImport, ts.ScriptTarget.Latest, true);
  const options = ts.getDefaultCompilerOptions();
  options.target = ts.ScriptTarget.Latest;
  options.module = ts.ModuleKind.NodeNext;
  options.moduleResolution = ts.ModuleResolutionKind.NodeNext;
  const host = ts.createCompilerHost(options, true);
  const newHost: typeof host = {
    ...host,
    getSourceFile: (...args) => {
      if (path.resolve(args[0]) === sourcePath) {
        return ast;
      }
      return host.getSourceFile(...args);
    },
    readFile: (...args) => {
      if (path.resolve(args[0]) === sourcePath) {
        return codeWithImport;
      }
      return host.readFile(...args);
    },
    fileExists: (...args) => {
      if (path.resolve(args[0]) === sourcePath) {
        return true;
      }
      return host.fileExists(...args);
    },
  };
  const program = ts.createProgram({
    options,
    rootNames: [sourcePath],
    host: newHost,
  });
  const diagnostics = ts.getPreEmitDiagnostics(program, ast);
  return diagnostics.map((d) => {
    const message = ts.flattenDiagnosticMessageText(d.messageText, '\n');
    if (!d.file || !d.start) return `- ${message}`;
    const { line: lineNumber } = ts.getLineAndCharacterOfPosition(d.file, d.start);
    const line = codeWithImport.split('\n').at(lineNumber)?.trim();
    return line ? `- ${message}\n    ${line}` : `- ${message}`;
  });
}

const fuse = new Fuse(
  [
    'client.active.v1.accounts.getAccountByID',
    'client.active.v1.accounts.getAccounts',
    'client.active.v1.accounts.patchAccountByID',
    'client.active.v1.accounts.balances.getAccountBalances',
    'client.active.v1.accounts.locates.createLocateRequest',
    'client.active.v1.accounts.locates.getLocateRequests',
    'client.active.v1.accounts.locates.updateLocateRequest',
    'client.active.v1.accounts.locates.inventory.getLocateInventory',
    'client.active.v1.accounts.orders.cancelAllOrders',
    'client.active.v1.accounts.orders.cancelOrder',
    'client.active.v1.accounts.orders.getOrderByID',
    'client.active.v1.accounts.orders.getOrders',
    'client.active.v1.accounts.orders.replaceOrder',
    'client.active.v1.accounts.orders.submitOrders',
    'client.active.v1.accounts.portfolioHistory.getPortfolioHistory',
    'client.active.v1.accounts.positions.closePosition',
    'client.active.v1.accounts.positions.closePositions',
    'client.active.v1.accounts.positions.getPositions',
    'client.active.v1.apiKeys.create',
    'client.active.v1.apiKeys.list',
    'client.active.v1.apiKeys.revoke',
    'client.active.v1.apiKeys.revokeAll',
    'client.active.v1.calendars.dividends.getDividendsCalendar',
    'client.active.v1.calendars.earnings.getEarningsCalendar',
    'client.active.v1.calendars.economic.getEconomicCalendar',
    'client.active.v1.calendars.marketHours.getMarketHoursCalendar',
    'client.active.v1.calendars.mergersAcquisitions.getMergersAndAcquisitionsCalendar',
    'client.active.v1.calendars.splits.getSplitsCalendar',
    'client.active.v1.calendars.summary.getCalendarSummary',
    'client.active.v1.instruments.getInstrumentByID',
    'client.active.v1.instruments.getInstruments',
    'client.active.v1.instruments.analystReporting.getInstrumentAnalystConsensus',
    'client.active.v1.instruments.events.getAllInstrumentEvents',
    'client.active.v1.instruments.events.getInstrumentEvents',
    'client.active.v1.instruments.options.contracts.getOptionContracts',
    'client.active.v1.instruments.reporting.getInstrumentReporting',
    'client.active.v1.instruments.venues.getVenues',
    'client.active.v1.iris.feedback.createFeedbackDeprecated',
    'client.active.v1.iris.runs.cancelRunDeprecated',
    'client.active.v1.iris.runs.getRunDeprecated',
    'client.active.v1.iris.runs.startRunDeprecated',
    'client.active.v1.iris.threads.getThreadDeprecated',
    'client.active.v1.iris.threads.listThreadsDeprecated',
    'client.active.v1.iris.threads.messages.listMessagesDeprecated',
    'client.active.v1.marketData.snapshot.getSnapshots',
    'client.active.v1.news.getNews',
    'client.active.v1.omniAI.feedback.createFeedback',
    'client.active.v1.omniAI.runs.cancelRun',
    'client.active.v1.omniAI.runs.getRun',
    'client.active.v1.omniAI.runs.startRun',
    'client.active.v1.omniAI.threads.getThread',
    'client.active.v1.omniAI.threads.listThreads',
    'client.active.v1.omniAI.threads.messages.listMessages',
    'client.active.v1.savedScreeners.createScreener',
    'client.active.v1.savedScreeners.deleteScreener',
    'client.active.v1.savedScreeners.getScreenerByID',
    'client.active.v1.savedScreeners.listScreeners',
    'client.active.v1.savedScreeners.updateScreener',
    'client.active.v1.screener.getScreener',
    'client.active.v1.version.getVersion',
    'client.active.v1.version.updateVersion',
    'client.active.v1.watchlists.createWatchlist',
    'client.active.v1.watchlists.deleteWatchlist',
    'client.active.v1.watchlists.getWatchlistByID',
    'client.active.v1.watchlists.getWatchlists',
    'client.active.v1.watchlists.items.addWatchlistItem',
    'client.active.v1.watchlists.items.deleteWatchlistItem',
    'client.active.v1.ws.websocketHandler',
  ],
  { threshold: 1, shouldSort: true },
);

function getMethodSuggestions(fullyQualifiedMethodName: string): string[] {
  return fuse
    .search(fullyQualifiedMethodName)
    .map(({ item }) => item)
    .slice(0, 5);
}

const proxyToObj = new WeakMap<any, any>();
const objToProxy = new WeakMap<any, any>();

type ClientProxyConfig = {
  path: string[];
  isBelievedBad?: boolean;
};

function makeSdkProxy<T extends object>(obj: T, { path, isBelievedBad = false }: ClientProxyConfig): T {
  let proxy: T = objToProxy.get(obj);

  if (!proxy) {
    proxy = new Proxy(obj, {
      get(target, prop, receiver) {
        const propPath = [...path, String(prop)];
        const value = Reflect.get(target, prop, receiver);

        if (isBelievedBad || (!(prop in target) && value === undefined)) {
          // If we're accessing a path that doesn't exist, it will probably eventually error.
          // Let's proxy it and mark it bad so that we can control the error message.
          // We proxy an empty class so that an invocation or construction attempt is possible.
          return makeSdkProxy(class {}, { path: propPath, isBelievedBad: true });
        }

        if (value !== null && (typeof value === 'object' || typeof value === 'function')) {
          return makeSdkProxy(value, { path: propPath, isBelievedBad });
        }

        return value;
      },

      apply(target, thisArg, args) {
        if (isBelievedBad || typeof target !== 'function') {
          const fullyQualifiedMethodName = path.join('.');
          const suggestions = getMethodSuggestions(fullyQualifiedMethodName);
          throw new Error(
            `${fullyQualifiedMethodName} is not a function. Did you mean: ${suggestions.join(', ')}`,
          );
        }

        return Reflect.apply(target, proxyToObj.get(thisArg) ?? thisArg, args);
      },

      construct(target, args, newTarget) {
        if (isBelievedBad || typeof target !== 'function') {
          const fullyQualifiedMethodName = path.join('.');
          const suggestions = getMethodSuggestions(fullyQualifiedMethodName);
          throw new Error(
            `${fullyQualifiedMethodName} is not a constructor. Did you mean: ${suggestions.join(', ')}`,
          );
        }

        return Reflect.construct(target, args, newTarget);
      },
    });

    objToProxy.set(obj, proxy);
    proxyToObj.set(proxy, obj);
  }

  return proxy;
}

function parseError(code: string, error: unknown): string | undefined {
  if (!(error instanceof Error)) return;
  const message = error.name ? `${error.name}: ${error.message}` : error.message;
  try {
    // Deno uses V8; the first "<anonymous>:LINE:COLUMN" is the top of stack.
    const lineNumber = error.stack?.match(/<anonymous>:([0-9]+):[0-9]+/)?.[1];
    // -1 for the zero-based indexing
    const line =
      lineNumber &&
      code
        .split('\n')
        .at(parseInt(lineNumber, 10) - 1)
        ?.trim();
    return line ? `${message}\n  at line ${lineNumber}\n    ${line}` : message;
  } catch {
    return message;
  }
}

const fetch = async (req: Request): Promise<Response> => {
  const { opts, code } = (await req.json()) as { opts: ClientOptions; code: string };

  const runFunctionSource = code ? getRunFunctionSource(code) : null;
  if (!runFunctionSource) {
    const message =
      code ?
        'The code is missing a top-level `run` function.'
      : 'The code argument is missing. Provide one containing a top-level `run` function.';
    return Response.json(
      {
        is_error: true,
        result: `${message} Write code within this template:\n\n\`\`\`\nasync function run(client) {\n  // Fill this out\n}\n\`\`\``,
        log_lines: [],
        err_lines: [],
      } satisfies WorkerOutput,
      { status: 400, statusText: 'Code execution error' },
    );
  }

  const diagnostics = getTSDiagnostics(code);
  if (diagnostics.length > 0) {
    return Response.json(
      {
        is_error: true,
        result: `The code contains TypeScript diagnostics:\n${diagnostics.join('\n')}`,
        log_lines: [],
        err_lines: [],
      } satisfies WorkerOutput,
      { status: 400, statusText: 'Code execution error' },
    );
  }

  const client = new ClearStreet({
    ...opts,
  });

  const log_lines: string[] = [];
  const err_lines: string[] = [];
  const originalConsole = globalThis.console;
  globalThis.console = {
    ...originalConsole,
    log: (...args: unknown[]) => {
      log_lines.push(util.format(...args));
    },
    error: (...args: unknown[]) => {
      err_lines.push(util.format(...args));
    },
  };
  try {
    let run_ = async (client: any) => {};
    run_ = (await tseval(`${code}\nexport default run;`)).default;
    const result = await run_(makeSdkProxy(client, { path: ['client'] }));
    return Response.json({
      is_error: false,
      result,
      log_lines,
      err_lines,
    } satisfies WorkerOutput);
  } catch (e) {
    return Response.json(
      {
        is_error: true,
        result: parseError(code, e),
        log_lines,
        err_lines,
      } satisfies WorkerOutput,
      { status: 400, statusText: 'Code execution error' },
    );
  } finally {
    globalThis.console = originalConsole;
  }
};

export default { fetch };
