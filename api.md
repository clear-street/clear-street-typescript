# Shared

Types:

- <code><a href="./src/resources/shared.ts">APIError</a></code>
- <code><a href="./src/resources/shared.ts">BaseResponse</a></code>
- <code><a href="./src/resources/shared.ts">ResponseMetadata</a></code>

# V1

Types:

- <code><a href="./src/resources/v1/v1.ts">SecurityType</a></code>

## Accounts

Types:

- <code><a href="./src/resources/v1/accounts.ts">Account</a></code>
- <code><a href="./src/resources/v1/accounts.ts">AccountBalances</a></code>
- <code><a href="./src/resources/v1/accounts.ts">AccountBalancesSod</a></code>
- <code><a href="./src/resources/v1/accounts.ts">AccountList</a></code>
- <code><a href="./src/resources/v1/accounts.ts">AccountSettings</a></code>
- <code><a href="./src/resources/v1/accounts.ts">AccountStatus</a></code>
- <code><a href="./src/resources/v1/accounts.ts">AccountSubtype</a></code>
- <code><a href="./src/resources/v1/accounts.ts">AccountType</a></code>
- <code><a href="./src/resources/v1/accounts.ts">MarginDetails</a></code>
- <code><a href="./src/resources/v1/accounts.ts">MarginDetailsUsage</a></code>
- <code><a href="./src/resources/v1/accounts.ts">MarginSessionDetails</a></code>
- <code><a href="./src/resources/v1/accounts.ts">MarginTopContributor</a></code>
- <code><a href="./src/resources/v1/accounts.ts">MarginType</a></code>
- <code><a href="./src/resources/v1/accounts.ts">PortfolioHistoryResponse</a></code>
- <code><a href="./src/resources/v1/accounts.ts">PortfolioHistorySegment</a></code>
- <code><a href="./src/resources/v1/accounts.ts">RiskSettings</a></code>
- <code><a href="./src/resources/v1/accounts.ts">AccountGetAccountBalancesResponse</a></code>
- <code><a href="./src/resources/v1/accounts.ts">AccountGetAccountByIDResponse</a></code>
- <code><a href="./src/resources/v1/accounts.ts">AccountGetAccountsResponse</a></code>
- <code><a href="./src/resources/v1/accounts.ts">AccountGetPortfolioHistoryResponse</a></code>
- <code><a href="./src/resources/v1/accounts.ts">AccountPatchAccountByIDResponse</a></code>

Methods:

- <code title="get /v1/accounts/{account_id}/balances">client.v1.accounts.<a href="./src/resources/v1/accounts.ts">getAccountBalances</a>(accountID, { ...params }) -> AccountGetAccountBalancesResponse</code>
- <code title="get /v1/accounts/{account_id}">client.v1.accounts.<a href="./src/resources/v1/accounts.ts">getAccountByID</a>(accountID) -> AccountGetAccountByIDResponse</code>
- <code title="get /v1/accounts">client.v1.accounts.<a href="./src/resources/v1/accounts.ts">getAccounts</a>({ ...params }) -> AccountGetAccountsResponse</code>
- <code title="get /v1/accounts/{account_id}/portfolio-history">client.v1.accounts.<a href="./src/resources/v1/accounts.ts">getPortfolioHistory</a>(accountID, { ...params }) -> AccountGetPortfolioHistoryResponse</code>
- <code title="patch /v1/accounts/{account_id}">client.v1.accounts.<a href="./src/resources/v1/accounts.ts">patchAccountByID</a>(accountID, { ...params }) -> AccountPatchAccountByIDResponse</code>

## APIVersion

Types:

- <code><a href="./src/resources/v1/api-version.ts">Version</a></code>
- <code><a href="./src/resources/v1/api-version.ts">APIVersionGetVersionResponse</a></code>

Methods:

- <code title="get /v1/version">client.v1.apiVersion.<a href="./src/resources/v1/api-version.ts">getVersion</a>() -> APIVersionGetVersionResponse</code>

## Calendar

Types:

- <code><a href="./src/resources/v1/calendar.ts">ClockDetail</a></code>
- <code><a href="./src/resources/v1/calendar.ts">DayType</a></code>
- <code><a href="./src/resources/v1/calendar.ts">MarketHoursDetail</a></code>
- <code><a href="./src/resources/v1/calendar.ts">MarketHoursDetailList</a></code>
- <code><a href="./src/resources/v1/calendar.ts">MarketSessionType</a></code>
- <code><a href="./src/resources/v1/calendar.ts">MarketStatus</a></code>
- <code><a href="./src/resources/v1/calendar.ts">MarketType</a></code>
- <code><a href="./src/resources/v1/calendar.ts">SessionSchedule</a></code>
- <code><a href="./src/resources/v1/calendar.ts">TradingSessions</a></code>
- <code><a href="./src/resources/v1/calendar.ts">CalendarGetClockResponse</a></code>
- <code><a href="./src/resources/v1/calendar.ts">CalendarGetMarketHoursCalendarResponse</a></code>

Methods:

- <code title="get /v1/clock">client.v1.calendar.<a href="./src/resources/v1/calendar.ts">getClock</a>() -> CalendarGetClockResponse</code>
- <code title="get /v1/calendars/market-hours">client.v1.calendar.<a href="./src/resources/v1/calendar.ts">getMarketHoursCalendar</a>({ ...params }) -> CalendarGetMarketHoursCalendarResponse</code>

## InstrumentData

Types:

- <code><a href="./src/resources/v1/instrument-data/instrument-data.ts">AllEventsEventType</a></code>
- <code><a href="./src/resources/v1/instrument-data/instrument-data.ts">AnalystDistribution</a></code>
- <code><a href="./src/resources/v1/instrument-data/instrument-data.ts">AnalystRating</a></code>
- <code><a href="./src/resources/v1/instrument-data/instrument-data.ts">FiscalPeriodType</a></code>
- <code><a href="./src/resources/v1/instrument-data/instrument-data.ts">InstrumentAllEventsData</a></code>
- <code><a href="./src/resources/v1/instrument-data/instrument-data.ts">InstrumentAnalystConsensus</a></code>
- <code><a href="./src/resources/v1/instrument-data/instrument-data.ts">InstrumentBalanceSheetStatement</a></code>
- <code><a href="./src/resources/v1/instrument-data/instrument-data.ts">InstrumentBalanceSheetStatementList</a></code>
- <code><a href="./src/resources/v1/instrument-data/instrument-data.ts">InstrumentCashFlowStatement</a></code>
- <code><a href="./src/resources/v1/instrument-data/instrument-data.ts">InstrumentCashFlowStatementList</a></code>
- <code><a href="./src/resources/v1/instrument-data/instrument-data.ts">InstrumentDividendEvent</a></code>
- <code><a href="./src/resources/v1/instrument-data/instrument-data.ts">InstrumentEarnings</a></code>
- <code><a href="./src/resources/v1/instrument-data/instrument-data.ts">InstrumentEventEnvelope</a></code>
- <code><a href="./src/resources/v1/instrument-data/instrument-data.ts">InstrumentEventIpoItem</a></code>
- <code><a href="./src/resources/v1/instrument-data/instrument-data.ts">InstrumentEventsByDate</a></code>
- <code><a href="./src/resources/v1/instrument-data/instrument-data.ts">InstrumentEventsData</a></code>
- <code><a href="./src/resources/v1/instrument-data/instrument-data.ts">InstrumentFundamentals</a></code>
- <code><a href="./src/resources/v1/instrument-data/instrument-data.ts">InstrumentIncomeStatement</a></code>
- <code><a href="./src/resources/v1/instrument-data/instrument-data.ts">InstrumentIncomeStatementList</a></code>
- <code><a href="./src/resources/v1/instrument-data/instrument-data.ts">InstrumentSplitEvent</a></code>
- <code><a href="./src/resources/v1/instrument-data/instrument-data.ts">PriceTarget</a></code>
- <code><a href="./src/resources/v1/instrument-data/instrument-data.ts">InstrumentDataGetAllInstrumentEventsResponse</a></code>
- <code><a href="./src/resources/v1/instrument-data/instrument-data.ts">InstrumentDataGetInstrumentAnalystConsensusResponse</a></code>
- <code><a href="./src/resources/v1/instrument-data/instrument-data.ts">InstrumentDataGetInstrumentBalanceSheetStatementsResponse</a></code>
- <code><a href="./src/resources/v1/instrument-data/instrument-data.ts">InstrumentDataGetInstrumentCashFlowStatementsResponse</a></code>
- <code><a href="./src/resources/v1/instrument-data/instrument-data.ts">InstrumentDataGetInstrumentEventsResponse</a></code>
- <code><a href="./src/resources/v1/instrument-data/instrument-data.ts">InstrumentDataGetInstrumentFundamentalsResponse</a></code>
- <code><a href="./src/resources/v1/instrument-data/instrument-data.ts">InstrumentDataGetInstrumentIncomeStatementsResponse</a></code>

Methods:

- <code title="get /v1/instruments/events">client.v1.instrumentData.<a href="./src/resources/v1/instrument-data/instrument-data.ts">getAllInstrumentEvents</a>({ ...params }) -> InstrumentDataGetAllInstrumentEventsResponse</code>
- <code title="get /v1/instruments/{instrument_id}/analyst-reporting">client.v1.instrumentData.<a href="./src/resources/v1/instrument-data/instrument-data.ts">getInstrumentAnalystConsensus</a>(instrumentID, { ...params }) -> InstrumentDataGetInstrumentAnalystConsensusResponse</code>
- <code title="get /v1/instruments/{instrument_id}/balance-sheets">client.v1.instrumentData.<a href="./src/resources/v1/instrument-data/instrument-data.ts">getInstrumentBalanceSheetStatements</a>(instrumentID, { ...params }) -> InstrumentDataGetInstrumentBalanceSheetStatementsResponse</code>
- <code title="get /v1/instruments/{instrument_id}/cash-flow-statements">client.v1.instrumentData.<a href="./src/resources/v1/instrument-data/instrument-data.ts">getInstrumentCashFlowStatements</a>(instrumentID, { ...params }) -> InstrumentDataGetInstrumentCashFlowStatementsResponse</code>
- <code title="get /v1/instruments/{instrument_id}/events">client.v1.instrumentData.<a href="./src/resources/v1/instrument-data/instrument-data.ts">getInstrumentEvents</a>(instrumentID, { ...params }) -> InstrumentDataGetInstrumentEventsResponse</code>
- <code title="get /v1/instruments/{instrument_id}/fundamentals">client.v1.instrumentData.<a href="./src/resources/v1/instrument-data/instrument-data.ts">getInstrumentFundamentals</a>(instrumentID) -> InstrumentDataGetInstrumentFundamentalsResponse</code>
- <code title="get /v1/instruments/{instrument_id}/income-statements">client.v1.instrumentData.<a href="./src/resources/v1/instrument-data/instrument-data.ts">getInstrumentIncomeStatements</a>(instrumentID, { ...params }) -> InstrumentDataGetInstrumentIncomeStatementsResponse</code>

### MarketData

Types:

- <code><a href="./src/resources/v1/instrument-data/market-data.ts">DailySummary</a></code>
- <code><a href="./src/resources/v1/instrument-data/market-data.ts">DailySummaryList</a></code>
- <code><a href="./src/resources/v1/instrument-data/market-data.ts">MarketDataSnapshot</a></code>
- <code><a href="./src/resources/v1/instrument-data/market-data.ts">MarketDataSnapshotList</a></code>
- <code><a href="./src/resources/v1/instrument-data/market-data.ts">SnapshotGreeks</a></code>
- <code><a href="./src/resources/v1/instrument-data/market-data.ts">SnapshotLastTrade</a></code>
- <code><a href="./src/resources/v1/instrument-data/market-data.ts">SnapshotQuote</a></code>
- <code><a href="./src/resources/v1/instrument-data/market-data.ts">SnapshotSession</a></code>
- <code><a href="./src/resources/v1/instrument-data/market-data.ts">MarketDataGetDailySummariesResponse</a></code>
- <code><a href="./src/resources/v1/instrument-data/market-data.ts">MarketDataGetSnapshotsResponse</a></code>

Methods:

- <code title="get /v1/market-data/daily-summary">client.v1.instrumentData.marketData.<a href="./src/resources/v1/instrument-data/market-data.ts">getDailySummaries</a>({ ...params }) -> MarketDataGetDailySummariesResponse</code>
- <code title="get /v1/market-data/snapshot">client.v1.instrumentData.marketData.<a href="./src/resources/v1/instrument-data/market-data.ts">getSnapshots</a>({ ...params }) -> MarketDataGetSnapshotsResponse</code>

### News

Types:

- <code><a href="./src/resources/v1/instrument-data/news.ts">NewsInstrument</a></code>
- <code><a href="./src/resources/v1/instrument-data/news.ts">NewsItem</a></code>
- <code><a href="./src/resources/v1/instrument-data/news.ts">NewsItemList</a></code>
- <code><a href="./src/resources/v1/instrument-data/news.ts">NewsType</a></code>
- <code><a href="./src/resources/v1/instrument-data/news.ts">NewsGetNewsResponse</a></code>

Methods:

- <code title="get /v1/news">client.v1.instrumentData.news.<a href="./src/resources/v1/instrument-data/news.ts">getNews</a>({ ...params }) -> NewsGetNewsResponse</code>

## Instruments

Types:

- <code><a href="./src/resources/v1/instruments.ts">ContractType</a></code>
- <code><a href="./src/resources/v1/instruments.ts">ExerciseStyle</a></code>
- <code><a href="./src/resources/v1/instruments.ts">Instrument</a></code>
- <code><a href="./src/resources/v1/instruments.ts">InstrumentCore</a></code>
- <code><a href="./src/resources/v1/instruments.ts">InstrumentCoreList</a></code>
- <code><a href="./src/resources/v1/instruments.ts">ListingType</a></code>
- <code><a href="./src/resources/v1/instruments.ts">OptionsContract</a></code>
- <code><a href="./src/resources/v1/instruments.ts">OptionsContractList</a></code>
- <code><a href="./src/resources/v1/instruments.ts">InstrumentGetInstrumentByIDResponse</a></code>
- <code><a href="./src/resources/v1/instruments.ts">InstrumentGetInstrumentsResponse</a></code>
- <code><a href="./src/resources/v1/instruments.ts">InstrumentGetOptionContractsResponse</a></code>
- <code><a href="./src/resources/v1/instruments.ts">InstrumentSearchInstrumentsResponse</a></code>

Methods:

- <code title="get /v1/instruments/{instrument_id}">client.v1.instruments.<a href="./src/resources/v1/instruments.ts">getInstrumentByID</a>(instrumentID, { ...params }) -> InstrumentGetInstrumentByIDResponse</code>
- <code title="get /v1/instruments">client.v1.instruments.<a href="./src/resources/v1/instruments.ts">getInstruments</a>({ ...params }) -> InstrumentGetInstrumentsResponse</code>
- <code title="get /v1/instruments/options/contracts">client.v1.instruments.<a href="./src/resources/v1/instruments.ts">getOptionContracts</a>({ ...params }) -> InstrumentGetOptionContractsResponse</code>
- <code title="get /v1/instruments/search">client.v1.instruments.<a href="./src/resources/v1/instruments.ts">searchInstruments</a>({ ...params }) -> InstrumentSearchInstrumentsResponse</code>

## OmniAI

Types:

- <code><a href="./src/resources/v1/omni-ai/omni-ai.ts">ActionButton</a></code>
- <code><a href="./src/resources/v1/omni-ai/omni-ai.ts">ChartPayload</a></code>
- <code><a href="./src/resources/v1/omni-ai/omni-ai.ts">ChartPoint</a></code>
- <code><a href="./src/resources/v1/omni-ai/omni-ai.ts">ChartSeries</a></code>
- <code><a href="./src/resources/v1/omni-ai/omni-ai.ts">ContentPartChartPayload</a></code>
- <code><a href="./src/resources/v1/omni-ai/omni-ai.ts">ContentPartCustomPayload</a></code>
- <code><a href="./src/resources/v1/omni-ai/omni-ai.ts">ContentPartStructuredActionPayload</a></code>
- <code><a href="./src/resources/v1/omni-ai/omni-ai.ts">ContentPartSuggestedActionsPayload</a></code>
- <code><a href="./src/resources/v1/omni-ai/omni-ai.ts">ContentPartTextPayload</a></code>
- <code><a href="./src/resources/v1/omni-ai/omni-ai.ts">ContentPartThinkingPayload</a></code>
- <code><a href="./src/resources/v1/omni-ai/omni-ai.ts">DataChart</a></code>
- <code><a href="./src/resources/v1/omni-ai/omni-ai.ts">EntitlementAgreementKey</a></code>
- <code><a href="./src/resources/v1/omni-ai/omni-ai.ts">EntitlementCode</a></code>
- <code><a href="./src/resources/v1/omni-ai/omni-ai.ts">OpenChartAction</a></code>
- <code><a href="./src/resources/v1/omni-ai/omni-ai.ts">OpenEntitlementConsentAction</a></code>
- <code><a href="./src/resources/v1/omni-ai/omni-ai.ts">OpenScreenerAction</a></code>
- <code><a href="./src/resources/v1/omni-ai/omni-ai.ts">PrefillCancelOrderAction</a></code>
- <code><a href="./src/resources/v1/omni-ai/omni-ai.ts">PrefillNewOrderAction</a></code>
- <code><a href="./src/resources/v1/omni-ai/omni-ai.ts">PrefillOrderAction</a></code>
- <code><a href="./src/resources/v1/omni-ai/omni-ai.ts">PromptButtonAction</a></code>
- <code><a href="./src/resources/v1/omni-ai/omni-ai.ts">ScreenerFilter</a></code>
- <code><a href="./src/resources/v1/omni-ai/omni-ai.ts">StructuredAction</a></code>
- <code><a href="./src/resources/v1/omni-ai/omni-ai.ts">StructuredActionButtonAction</a></code>
- <code><a href="./src/resources/v1/omni-ai/omni-ai.ts">SuggestedActionsPayload</a></code>

### Entitlements

Types:

- <code><a href="./src/resources/v1/omni-ai/entitlements.ts">DeleteEntitlementResponse</a></code>
- <code><a href="./src/resources/v1/omni-ai/entitlements.ts">EntitlementAgreementResource</a></code>
- <code><a href="./src/resources/v1/omni-ai/entitlements.ts">EntitlementAgreementResourceList</a></code>
- <code><a href="./src/resources/v1/omni-ai/entitlements.ts">EntitlementResource</a></code>
- <code><a href="./src/resources/v1/omni-ai/entitlements.ts">EntitlementResourceList</a></code>
- <code><a href="./src/resources/v1/omni-ai/entitlements.ts">EntitlementCreateEntitlementsResponse</a></code>
- <code><a href="./src/resources/v1/omni-ai/entitlements.ts">EntitlementDeleteEntitlementResponse</a></code>
- <code><a href="./src/resources/v1/omni-ai/entitlements.ts">EntitlementGetEntitlementAgreementsResponse</a></code>
- <code><a href="./src/resources/v1/omni-ai/entitlements.ts">EntitlementGetEntitlementsResponse</a></code>

Methods:

- <code title="post /v1/omni-ai/entitlements">client.v1.omniAI.entitlements.<a href="./src/resources/v1/omni-ai/entitlements.ts">createEntitlements</a>({ ...params }) -> EntitlementCreateEntitlementsResponse</code>
- <code title="delete /v1/omni-ai/entitlements/{entitlement_id}">client.v1.omniAI.entitlements.<a href="./src/resources/v1/omni-ai/entitlements.ts">deleteEntitlement</a>(entitlementID) -> EntitlementDeleteEntitlementResponse</code>
- <code title="get /v1/omni-ai/entitlement-agreements">client.v1.omniAI.entitlements.<a href="./src/resources/v1/omni-ai/entitlements.ts">getEntitlementAgreements</a>() -> EntitlementGetEntitlementAgreementsResponse</code>
- <code title="get /v1/omni-ai/entitlements">client.v1.omniAI.entitlements.<a href="./src/resources/v1/omni-ai/entitlements.ts">getEntitlements</a>({ ...params }) -> EntitlementGetEntitlementsResponse</code>

### Messages

Types:

- <code><a href="./src/resources/v1/omni-ai/messages.ts">CreateFeedbackResponse</a></code>
- <code><a href="./src/resources/v1/omni-ai/messages.ts">MessageGetMessageByIDResponse</a></code>
- <code><a href="./src/resources/v1/omni-ai/messages.ts">MessageSubmitFeedbackResponse</a></code>

Methods:

- <code title="get /v1/omni-ai/messages/{message_id}">client.v1.omniAI.messages.<a href="./src/resources/v1/omni-ai/messages.ts">getMessageByID</a>(messageID, { ...params }) -> MessageGetMessageByIDResponse</code>
- <code title="post /v1/omni-ai/messages/{message_id}/feedback">client.v1.omniAI.messages.<a href="./src/resources/v1/omni-ai/messages.ts">submitFeedback</a>(messageID, { ...params }) -> MessageSubmitFeedbackResponse</code>

### Responses

Types:

- <code><a href="./src/resources/v1/omni-ai/responses.ts">CancelResponsePayload</a></code>
- <code><a href="./src/resources/v1/omni-ai/responses.ts">ErrorStatus</a></code>
- <code><a href="./src/resources/v1/omni-ai/responses.ts">Response</a></code>
- <code><a href="./src/resources/v1/omni-ai/responses.ts">ResponseContent</a></code>
- <code><a href="./src/resources/v1/omni-ai/responses.ts">ResponseContentPart</a></code>
- <code><a href="./src/resources/v1/omni-ai/responses.ts">ResponseStatus</a></code>
- <code><a href="./src/resources/v1/omni-ai/responses.ts">ResponseCancelResponseResponse</a></code>
- <code><a href="./src/resources/v1/omni-ai/responses.ts">ResponseGetResponseByIDResponse</a></code>

Methods:

- <code title="delete /v1/omni-ai/responses/{response_id}">client.v1.omniAI.responses.<a href="./src/resources/v1/omni-ai/responses.ts">cancelResponse</a>(responseID, { ...params }) -> ResponseCancelResponseResponse</code>
- <code title="get /v1/omni-ai/responses/{response_id}">client.v1.omniAI.responses.<a href="./src/resources/v1/omni-ai/responses.ts">getResponseByID</a>(responseID, { ...params }) -> ResponseGetResponseByIDResponse</code>

### Threads

Types:

- <code><a href="./src/resources/v1/omni-ai/threads.ts">CreateMessageResponse</a></code>
- <code><a href="./src/resources/v1/omni-ai/threads.ts">CreateThreadResponse</a></code>
- <code><a href="./src/resources/v1/omni-ai/threads.ts">Message</a></code>
- <code><a href="./src/resources/v1/omni-ai/threads.ts">MessageContent</a></code>
- <code><a href="./src/resources/v1/omni-ai/threads.ts">MessageContentPart</a></code>
- <code><a href="./src/resources/v1/omni-ai/threads.ts">MessageList</a></code>
- <code><a href="./src/resources/v1/omni-ai/threads.ts">MessageOutcome</a></code>
- <code><a href="./src/resources/v1/omni-ai/threads.ts">MessageRole</a></code>
- <code><a href="./src/resources/v1/omni-ai/threads.ts">Thread</a></code>
- <code><a href="./src/resources/v1/omni-ai/threads.ts">ThreadList</a></code>
- <code><a href="./src/resources/v1/omni-ai/threads.ts">ThreadCreateMessageResponse</a></code>
- <code><a href="./src/resources/v1/omni-ai/threads.ts">ThreadCreateThreadResponse</a></code>
- <code><a href="./src/resources/v1/omni-ai/threads.ts">ThreadGetMessagesResponse</a></code>
- <code><a href="./src/resources/v1/omni-ai/threads.ts">ThreadGetThreadByIDResponse</a></code>
- <code><a href="./src/resources/v1/omni-ai/threads.ts">ThreadGetThreadResponseResponse</a></code>
- <code><a href="./src/resources/v1/omni-ai/threads.ts">ThreadGetThreadsResponse</a></code>

Methods:

- <code title="post /v1/omni-ai/threads/{thread_id}/messages">client.v1.omniAI.threads.<a href="./src/resources/v1/omni-ai/threads.ts">createMessage</a>(threadID, { ...params }) -> ThreadCreateMessageResponse</code>
- <code title="post /v1/omni-ai/threads">client.v1.omniAI.threads.<a href="./src/resources/v1/omni-ai/threads.ts">createThread</a>({ ...params }) -> ThreadCreateThreadResponse</code>
- <code title="get /v1/omni-ai/threads/{thread_id}/messages">client.v1.omniAI.threads.<a href="./src/resources/v1/omni-ai/threads.ts">getMessages</a>(threadID, { ...params }) -> ThreadGetMessagesResponse</code>
- <code title="get /v1/omni-ai/threads/{thread_id}">client.v1.omniAI.threads.<a href="./src/resources/v1/omni-ai/threads.ts">getThreadByID</a>(threadID, { ...params }) -> ThreadGetThreadByIDResponse</code>
- <code title="get /v1/omni-ai/threads/{thread_id}/response">client.v1.omniAI.threads.<a href="./src/resources/v1/omni-ai/threads.ts">getThreadResponse</a>(threadID, { ...params }) -> ThreadGetThreadResponseResponse</code>
- <code title="get /v1/omni-ai/threads">client.v1.omniAI.threads.<a href="./src/resources/v1/omni-ai/threads.ts">getThreads</a>({ ...params }) -> ThreadGetThreadsResponse</code>

## Orders

Types:

- <code><a href="./src/resources/v1/orders.ts">CancelOrderRequest</a></code>
- <code><a href="./src/resources/v1/orders.ts">Execution</a></code>
- <code><a href="./src/resources/v1/orders.ts">ExecutionList</a></code>
- <code><a href="./src/resources/v1/orders.ts">InstrumentIDOrSymbol</a></code>
- <code><a href="./src/resources/v1/orders.ts">NewOrderRequest</a></code>
- <code><a href="./src/resources/v1/orders.ts">Order</a></code>
- <code><a href="./src/resources/v1/orders.ts">OrderList</a></code>
- <code><a href="./src/resources/v1/orders.ts">OrderStatus</a></code>
- <code><a href="./src/resources/v1/orders.ts">OrderType</a></code>
- <code><a href="./src/resources/v1/orders.ts">PositionEffect</a></code>
- <code><a href="./src/resources/v1/orders.ts">QueueState</a></code>
- <code><a href="./src/resources/v1/orders.ts">RequestOrderType</a></code>
- <code><a href="./src/resources/v1/orders.ts">RequestTimeInForce</a></code>
- <code><a href="./src/resources/v1/orders.ts">Side</a></code>
- <code><a href="./src/resources/v1/orders.ts">TimeInForce</a></code>
- <code><a href="./src/resources/v1/orders.ts">TrailingOffsetType</a></code>
- <code><a href="./src/resources/v1/orders.ts">OrderCancelAllOpenOrdersResponse</a></code>
- <code><a href="./src/resources/v1/orders.ts">OrderCancelOpenOrderResponse</a></code>
- <code><a href="./src/resources/v1/orders.ts">OrderGetExecutionsResponse</a></code>
- <code><a href="./src/resources/v1/orders.ts">OrderGetOrderByIDResponse</a></code>
- <code><a href="./src/resources/v1/orders.ts">OrderGetOrdersResponse</a></code>
- <code><a href="./src/resources/v1/orders.ts">OrderReplaceOrderResponse</a></code>
- <code><a href="./src/resources/v1/orders.ts">OrderSubmitOrdersResponse</a></code>

Methods:

- <code title="delete /v1/accounts/{account_id}/orders">client.v1.orders.<a href="./src/resources/v1/orders.ts">cancelAllOpenOrders</a>(accountID, { ...params }) -> OrderCancelAllOpenOrdersResponse</code>
- <code title="delete /v1/accounts/{account_id}/orders/{order_id}">client.v1.orders.<a href="./src/resources/v1/orders.ts">cancelOpenOrder</a>(orderID, { ...params }) -> OrderCancelOpenOrderResponse</code>
- <code title="get /v1/accounts/{account_id}/executions">client.v1.orders.<a href="./src/resources/v1/orders.ts">getExecutions</a>(accountID, { ...params }) -> OrderGetExecutionsResponse</code>
- <code title="get /v1/accounts/{account_id}/orders/{order_id}">client.v1.orders.<a href="./src/resources/v1/orders.ts">getOrderByID</a>(orderID, { ...params }) -> OrderGetOrderByIDResponse</code>
- <code title="get /v1/accounts/{account_id}/orders">client.v1.orders.<a href="./src/resources/v1/orders.ts">getOrders</a>(accountID, { ...params }) -> OrderGetOrdersResponse</code>
- <code title="patch /v1/accounts/{account_id}/orders/{order_id}">client.v1.orders.<a href="./src/resources/v1/orders.ts">replaceOrder</a>(orderID, { ...params }) -> OrderReplaceOrderResponse</code>
- <code title="post /v1/accounts/{account_id}/orders">client.v1.orders.<a href="./src/resources/v1/orders.ts">submitOrders</a>(accountID, [ ...orders ]) -> OrderSubmitOrdersResponse</code>

## Positions

Types:

- <code><a href="./src/resources/v1/positions.ts">Position</a></code>
- <code><a href="./src/resources/v1/positions.ts">PositionInstruction</a></code>
- <code><a href="./src/resources/v1/positions.ts">PositionInstructionList</a></code>
- <code><a href="./src/resources/v1/positions.ts">PositionInstructionStatus</a></code>
- <code><a href="./src/resources/v1/positions.ts">PositionInstructionType</a></code>
- <code><a href="./src/resources/v1/positions.ts">PositionList</a></code>
- <code><a href="./src/resources/v1/positions.ts">PositionType</a></code>
- <code><a href="./src/resources/v1/positions.ts">PositionCancelPositionInstructionResponse</a></code>
- <code><a href="./src/resources/v1/positions.ts">PositionClosePositionResponse</a></code>
- <code><a href="./src/resources/v1/positions.ts">PositionClosePositionsResponse</a></code>
- <code><a href="./src/resources/v1/positions.ts">PositionGetPositionInstructionsResponse</a></code>
- <code><a href="./src/resources/v1/positions.ts">PositionGetPositionsResponse</a></code>
- <code><a href="./src/resources/v1/positions.ts">PositionSubmitPositionInstructionsResponse</a></code>

Methods:

- <code title="delete /v1/accounts/{account_id}/positions/instructions/{instruction_id}">client.v1.positions.<a href="./src/resources/v1/positions.ts">cancelPositionInstruction</a>(instructionID, { ...params }) -> PositionCancelPositionInstructionResponse</code>
- <code title="delete /v1/accounts/{account_id}/positions/{instrument_id}">client.v1.positions.<a href="./src/resources/v1/positions.ts">closePosition</a>(instrumentID, { ...params }) -> PositionClosePositionResponse</code>
- <code title="delete /v1/accounts/{account_id}/positions">client.v1.positions.<a href="./src/resources/v1/positions.ts">closePositions</a>(accountID, { ...params }) -> PositionClosePositionsResponse</code>
- <code title="get /v1/accounts/{account_id}/positions/instructions">client.v1.positions.<a href="./src/resources/v1/positions.ts">getPositionInstructions</a>(accountID, { ...params }) -> PositionGetPositionInstructionsResponse</code>
- <code title="get /v1/accounts/{account_id}/positions">client.v1.positions.<a href="./src/resources/v1/positions.ts">getPositions</a>(accountID, { ...params }) -> PositionGetPositionsResponse</code>
- <code title="post /v1/accounts/{account_id}/positions/instructions">client.v1.positions.<a href="./src/resources/v1/positions.ts">submitPositionInstructions</a>(accountID, [ ...instructions ]) -> PositionSubmitPositionInstructionsResponse</code>

## Watchlist

Types:

- <code><a href="./src/resources/v1/watchlist.ts">AddWatchlistItemData</a></code>
- <code><a href="./src/resources/v1/watchlist.ts">WatchlistDetail</a></code>
- <code><a href="./src/resources/v1/watchlist.ts">WatchlistEntry</a></code>
- <code><a href="./src/resources/v1/watchlist.ts">WatchlistEntryList</a></code>
- <code><a href="./src/resources/v1/watchlist.ts">WatchlistItemEntry</a></code>
- <code><a href="./src/resources/v1/watchlist.ts">WatchlistAddWatchlistItemResponse</a></code>
- <code><a href="./src/resources/v1/watchlist.ts">WatchlistCreateWatchlistResponse</a></code>
- <code><a href="./src/resources/v1/watchlist.ts">WatchlistDeleteWatchlistResponse</a></code>
- <code><a href="./src/resources/v1/watchlist.ts">WatchlistDeleteWatchlistItemResponse</a></code>
- <code><a href="./src/resources/v1/watchlist.ts">WatchlistGetWatchlistByIDResponse</a></code>
- <code><a href="./src/resources/v1/watchlist.ts">WatchlistGetWatchlistsResponse</a></code>

Methods:

- <code title="post /v1/watchlists/{watchlist_id}/items">client.v1.watchlist.<a href="./src/resources/v1/watchlist.ts">addWatchlistItem</a>(watchlistID, { ...params }) -> WatchlistAddWatchlistItemResponse</code>
- <code title="post /v1/watchlists">client.v1.watchlist.<a href="./src/resources/v1/watchlist.ts">createWatchlist</a>({ ...params }) -> WatchlistCreateWatchlistResponse</code>
- <code title="delete /v1/watchlists/{watchlist_id}">client.v1.watchlist.<a href="./src/resources/v1/watchlist.ts">deleteWatchlist</a>(watchlistID) -> WatchlistDeleteWatchlistResponse</code>
- <code title="delete /v1/watchlists/{watchlist_id}/items/{item_id}">client.v1.watchlist.<a href="./src/resources/v1/watchlist.ts">deleteWatchlistItem</a>(itemID, { ...params }) -> WatchlistDeleteWatchlistItemResponse</code>
- <code title="get /v1/watchlists/{watchlist_id}">client.v1.watchlist.<a href="./src/resources/v1/watchlist.ts">getWatchlistByID</a>(watchlistID) -> WatchlistGetWatchlistByIDResponse</code>
- <code title="get /v1/watchlists">client.v1.watchlist.<a href="./src/resources/v1/watchlist.ts">getWatchlists</a>({ ...params }) -> WatchlistGetWatchlistsResponse</code>

## Websocket

Methods:

- <code title="get /v1/ws">client.v1.websocket.<a href="./src/resources/v1/websocket.ts">websocketHandler</a>() -> void</code>
