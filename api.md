# Shared

Types:

- <code><a href="./src/resources/shared.ts">APIError</a></code>
- <code><a href="./src/resources/shared.ts">BaseResponse</a></code>
- <code><a href="./src/resources/shared.ts">ResponseMetadata</a></code>

# V1

Types:

- <code><a href="./src/resources/v1/v1.ts">SecurityType</a></code>

Methods:

- <code title="get /v1/ws">client.v1.<a href="./src/resources/v1/v1.ts">websocketHandler</a>() -> void</code>

## Accounts

Types:

- <code><a href="./src/resources/v1/accounts/accounts.ts">Account</a></code>
- <code><a href="./src/resources/v1/accounts/accounts.ts">AccountList</a></code>
- <code><a href="./src/resources/v1/accounts/accounts.ts">AccountSettings</a></code>
- <code><a href="./src/resources/v1/accounts/accounts.ts">AccountStatus</a></code>
- <code><a href="./src/resources/v1/accounts/accounts.ts">AccountSubtype</a></code>
- <code><a href="./src/resources/v1/accounts/accounts.ts">AccountType</a></code>
- <code><a href="./src/resources/v1/accounts/accounts.ts">RiskSettings</a></code>
- <code><a href="./src/resources/v1/accounts/accounts.ts">AccountGetAccountByIDResponse</a></code>
- <code><a href="./src/resources/v1/accounts/accounts.ts">AccountGetAccountsResponse</a></code>
- <code><a href="./src/resources/v1/accounts/accounts.ts">AccountPatchAccountByIDResponse</a></code>

Methods:

- <code title="get /v1/accounts/{account_id}">client.v1.accounts.<a href="./src/resources/v1/accounts/accounts.ts">getAccountByID</a>(accountID) -> AccountGetAccountByIDResponse</code>
- <code title="get /v1/accounts">client.v1.accounts.<a href="./src/resources/v1/accounts/accounts.ts">getAccounts</a>({ ...params }) -> AccountGetAccountsResponse</code>
- <code title="patch /v1/accounts/{account_id}">client.v1.accounts.<a href="./src/resources/v1/accounts/accounts.ts">patchAccountByID</a>(accountID, { ...params }) -> AccountPatchAccountByIDResponse</code>

### Balances

Types:

- <code><a href="./src/resources/v1/accounts/balances.ts">AccountBalances</a></code>
- <code><a href="./src/resources/v1/accounts/balances.ts">AccountBalancesSod</a></code>
- <code><a href="./src/resources/v1/accounts/balances.ts">MarginDetails</a></code>
- <code><a href="./src/resources/v1/accounts/balances.ts">MarginDetailsUsage</a></code>
- <code><a href="./src/resources/v1/accounts/balances.ts">MarginTopContributor</a></code>
- <code><a href="./src/resources/v1/accounts/balances.ts">MarginType</a></code>
- <code><a href="./src/resources/v1/accounts/balances.ts">BalanceGetAccountBalancesResponse</a></code>

Methods:

- <code title="get /v1/accounts/{account_id}/balances">client.v1.accounts.balances.<a href="./src/resources/v1/accounts/balances.ts">getAccountBalances</a>(accountID, { ...params }) -> BalanceGetAccountBalancesResponse</code>

### Orders

Types:

- <code><a href="./src/resources/v1/accounts/orders.ts">Order</a></code>
- <code><a href="./src/resources/v1/accounts/orders.ts">OrderList</a></code>
- <code><a href="./src/resources/v1/accounts/orders.ts">OrderStatus</a></code>
- <code><a href="./src/resources/v1/accounts/orders.ts">OrderType</a></code>
- <code><a href="./src/resources/v1/accounts/orders.ts">QueueState</a></code>
- <code><a href="./src/resources/v1/accounts/orders.ts">Side</a></code>
- <code><a href="./src/resources/v1/accounts/orders.ts">TimeInForce</a></code>
- <code><a href="./src/resources/v1/accounts/orders.ts">TrailingOffsetType</a></code>
- <code><a href="./src/resources/v1/accounts/orders.ts">OrderCancelAllOpenOrdersResponse</a></code>
- <code><a href="./src/resources/v1/accounts/orders.ts">OrderCancelOpenOrderResponse</a></code>
- <code><a href="./src/resources/v1/accounts/orders.ts">OrderGetOrderByIDResponse</a></code>
- <code><a href="./src/resources/v1/accounts/orders.ts">OrderGetOrdersResponse</a></code>
- <code><a href="./src/resources/v1/accounts/orders.ts">OrderReplaceOrderResponse</a></code>
- <code><a href="./src/resources/v1/accounts/orders.ts">OrderSubmitOrdersResponse</a></code>

Methods:

- <code title="delete /v1/accounts/{account_id}/orders">client.v1.accounts.orders.<a href="./src/resources/v1/accounts/orders.ts">cancelAllOpenOrders</a>(accountID, { ...params }) -> OrderCancelAllOpenOrdersResponse</code>
- <code title="delete /v1/accounts/{account_id}/orders/{order_id}">client.v1.accounts.orders.<a href="./src/resources/v1/accounts/orders.ts">cancelOpenOrder</a>(orderID, { ...params }) -> OrderCancelOpenOrderResponse</code>
- <code title="get /v1/accounts/{account_id}/orders/{order_id}">client.v1.accounts.orders.<a href="./src/resources/v1/accounts/orders.ts">getOrderByID</a>(orderID, { ...params }) -> OrderGetOrderByIDResponse</code>
- <code title="get /v1/accounts/{account_id}/orders">client.v1.accounts.orders.<a href="./src/resources/v1/accounts/orders.ts">getOrders</a>(accountID, { ...params }) -> OrderGetOrdersResponse</code>
- <code title="patch /v1/accounts/{account_id}/orders/{order_id}">client.v1.accounts.orders.<a href="./src/resources/v1/accounts/orders.ts">replaceOrder</a>(orderID, { ...params }) -> OrderReplaceOrderResponse</code>
- <code title="post /v1/accounts/{account_id}/orders">client.v1.accounts.orders.<a href="./src/resources/v1/accounts/orders.ts">submitOrders</a>(accountID, [ ...orders ]) -> OrderSubmitOrdersResponse</code>

### PortfolioHistory

Types:

- <code><a href="./src/resources/v1/accounts/portfolio-history.ts">PortfolioHistoryResponse</a></code>
- <code><a href="./src/resources/v1/accounts/portfolio-history.ts">PortfolioHistorySegment</a></code>
- <code><a href="./src/resources/v1/accounts/portfolio-history.ts">PortfolioHistoryGetPortfolioHistoryResponse</a></code>

Methods:

- <code title="get /v1/accounts/{account_id}/portfolio-history">client.v1.accounts.portfolioHistory.<a href="./src/resources/v1/accounts/portfolio-history.ts">getPortfolioHistory</a>(accountID, { ...params }) -> PortfolioHistoryGetPortfolioHistoryResponse</code>

### Positions

Types:

- <code><a href="./src/resources/v1/accounts/positions.ts">Position</a></code>
- <code><a href="./src/resources/v1/accounts/positions.ts">PositionList</a></code>
- <code><a href="./src/resources/v1/accounts/positions.ts">PositionType</a></code>
- <code><a href="./src/resources/v1/accounts/positions.ts">PositionClosePositionResponse</a></code>
- <code><a href="./src/resources/v1/accounts/positions.ts">PositionClosePositionsResponse</a></code>
- <code><a href="./src/resources/v1/accounts/positions.ts">PositionGetPositionsResponse</a></code>

Methods:

- <code title="delete /v1/accounts/{account_id}/positions/{instrument_id}">client.v1.accounts.positions.<a href="./src/resources/v1/accounts/positions.ts">closePosition</a>(instrumentID, { ...params }) -> PositionClosePositionResponse</code>
- <code title="delete /v1/accounts/{account_id}/positions">client.v1.accounts.positions.<a href="./src/resources/v1/accounts/positions.ts">closePositions</a>(accountID, { ...params }) -> PositionClosePositionsResponse</code>
- <code title="get /v1/accounts/{account_id}/positions">client.v1.accounts.positions.<a href="./src/resources/v1/accounts/positions.ts">getPositions</a>(accountID, { ...params }) -> PositionGetPositionsResponse</code>

## Calendars

### MarketHours

Types:

- <code><a href="./src/resources/v1/calendars/market-hours.ts">DayType</a></code>
- <code><a href="./src/resources/v1/calendars/market-hours.ts">MarketHoursDetail</a></code>
- <code><a href="./src/resources/v1/calendars/market-hours.ts">MarketHoursDetailList</a></code>
- <code><a href="./src/resources/v1/calendars/market-hours.ts">MarketSessionType</a></code>
- <code><a href="./src/resources/v1/calendars/market-hours.ts">MarketStatus</a></code>
- <code><a href="./src/resources/v1/calendars/market-hours.ts">MarketType</a></code>
- <code><a href="./src/resources/v1/calendars/market-hours.ts">SessionSchedule</a></code>
- <code><a href="./src/resources/v1/calendars/market-hours.ts">TradingSessions</a></code>
- <code><a href="./src/resources/v1/calendars/market-hours.ts">MarketHourGetMarketHoursCalendarResponse</a></code>

Methods:

- <code title="get /v1/calendars/market-hours">client.v1.calendars.marketHours.<a href="./src/resources/v1/calendars/market-hours.ts">getMarketHoursCalendar</a>({ ...params }) -> MarketHourGetMarketHoursCalendarResponse</code>

## Clock

Types:

- <code><a href="./src/resources/v1/clock.ts">ClockDetail</a></code>
- <code><a href="./src/resources/v1/clock.ts">ClockGetClockResponse</a></code>

Methods:

- <code title="get /v1/clock">client.v1.clock.<a href="./src/resources/v1/clock.ts">getClock</a>() -> ClockGetClockResponse</code>

## Instruments

Types:

- <code><a href="./src/resources/v1/instruments/instruments.ts">AnalystRating</a></code>
- <code><a href="./src/resources/v1/instruments/instruments.ts">ContractType</a></code>
- <code><a href="./src/resources/v1/instruments/instruments.ts">ExerciseStyle</a></code>
- <code><a href="./src/resources/v1/instruments/instruments.ts">FiscalPeriodType</a></code>
- <code><a href="./src/resources/v1/instruments/instruments.ts">Instrument</a></code>
- <code><a href="./src/resources/v1/instruments/instruments.ts">InstrumentCore</a></code>
- <code><a href="./src/resources/v1/instruments/instruments.ts">InstrumentCoreList</a></code>
- <code><a href="./src/resources/v1/instruments/instruments.ts">InstrumentEarnings</a></code>
- <code><a href="./src/resources/v1/instruments/instruments.ts">ListingType</a></code>
- <code><a href="./src/resources/v1/instruments/instruments.ts">OptionsContract</a></code>
- <code><a href="./src/resources/v1/instruments/instruments.ts">OptionsContractList</a></code>
- <code><a href="./src/resources/v1/instruments/instruments.ts">InstrumentGetInstrumentByIDResponse</a></code>
- <code><a href="./src/resources/v1/instruments/instruments.ts">InstrumentGetInstrumentsResponse</a></code>
- <code><a href="./src/resources/v1/instruments/instruments.ts">InstrumentSearchInstrumentsResponse</a></code>

Methods:

- <code title="get /v1/instruments/{instrument_id}">client.v1.instruments.<a href="./src/resources/v1/instruments/instruments.ts">getInstrumentByID</a>(instrumentID, { ...params }) -> InstrumentGetInstrumentByIDResponse</code>
- <code title="get /v1/instruments">client.v1.instruments.<a href="./src/resources/v1/instruments/instruments.ts">getInstruments</a>({ ...params }) -> InstrumentGetInstrumentsResponse</code>
- <code title="get /v1/instruments/search">client.v1.instruments.<a href="./src/resources/v1/instruments/instruments.ts">searchInstruments</a>({ ...params }) -> InstrumentSearchInstrumentsResponse</code>

### AnalystReporting

Types:

- <code><a href="./src/resources/v1/instruments/analyst-reporting.ts">AnalystDistribution</a></code>
- <code><a href="./src/resources/v1/instruments/analyst-reporting.ts">InstrumentAnalystConsensus</a></code>
- <code><a href="./src/resources/v1/instruments/analyst-reporting.ts">PriceTarget</a></code>
- <code><a href="./src/resources/v1/instruments/analyst-reporting.ts">AnalystReportingGetInstrumentAnalystConsensusResponse</a></code>

Methods:

- <code title="get /v1/instruments/{instrument_id}/analyst-reporting">client.v1.instruments.analystReporting.<a href="./src/resources/v1/instruments/analyst-reporting.ts">getInstrumentAnalystConsensus</a>(instrumentID, { ...params }) -> AnalystReportingGetInstrumentAnalystConsensusResponse</code>

### BalanceSheets

Types:

- <code><a href="./src/resources/v1/instruments/balance-sheets.ts">InstrumentBalanceSheetStatement</a></code>
- <code><a href="./src/resources/v1/instruments/balance-sheets.ts">InstrumentBalanceSheetStatementList</a></code>
- <code><a href="./src/resources/v1/instruments/balance-sheets.ts">BalanceSheetGetInstrumentBalanceSheetStatementsResponse</a></code>

Methods:

- <code title="get /v1/instruments/{instrument_id}/balance-sheets">client.v1.instruments.balanceSheets.<a href="./src/resources/v1/instruments/balance-sheets.ts">getInstrumentBalanceSheetStatements</a>(instrumentID, { ...params }) -> BalanceSheetGetInstrumentBalanceSheetStatementsResponse</code>

### CashFlowStatements

Types:

- <code><a href="./src/resources/v1/instruments/cash-flow-statements.ts">InstrumentCashFlowStatement</a></code>
- <code><a href="./src/resources/v1/instruments/cash-flow-statements.ts">InstrumentCashFlowStatementList</a></code>
- <code><a href="./src/resources/v1/instruments/cash-flow-statements.ts">CashFlowStatementGetInstrumentCashFlowStatementsResponse</a></code>

Methods:

- <code title="get /v1/instruments/{instrument_id}/cash-flow-statements">client.v1.instruments.cashFlowStatements.<a href="./src/resources/v1/instruments/cash-flow-statements.ts">getInstrumentCashFlowStatements</a>(instrumentID, { ...params }) -> CashFlowStatementGetInstrumentCashFlowStatementsResponse</code>

### Events

Types:

- <code><a href="./src/resources/v1/instruments/events.ts">AllEventsEventType</a></code>
- <code><a href="./src/resources/v1/instruments/events.ts">InstrumentAllEventsData</a></code>
- <code><a href="./src/resources/v1/instruments/events.ts">InstrumentDividendEvent</a></code>
- <code><a href="./src/resources/v1/instruments/events.ts">InstrumentEventEnvelope</a></code>
- <code><a href="./src/resources/v1/instruments/events.ts">InstrumentEventIpoItem</a></code>
- <code><a href="./src/resources/v1/instruments/events.ts">InstrumentEventsByDate</a></code>
- <code><a href="./src/resources/v1/instruments/events.ts">InstrumentEventsData</a></code>
- <code><a href="./src/resources/v1/instruments/events.ts">InstrumentSplitEvent</a></code>
- <code><a href="./src/resources/v1/instruments/events.ts">EventGetAllInstrumentEventsResponse</a></code>
- <code><a href="./src/resources/v1/instruments/events.ts">EventGetInstrumentEventsResponse</a></code>

Methods:

- <code title="get /v1/instruments/events">client.v1.instruments.events.<a href="./src/resources/v1/instruments/events.ts">getAllInstrumentEvents</a>({ ...params }) -> EventGetAllInstrumentEventsResponse</code>
- <code title="get /v1/instruments/{instrument_id}/events">client.v1.instruments.events.<a href="./src/resources/v1/instruments/events.ts">getInstrumentEvents</a>(instrumentID, { ...params }) -> EventGetInstrumentEventsResponse</code>

### Fundamentals

Types:

- <code><a href="./src/resources/v1/instruments/fundamentals.ts">InstrumentFundamentals</a></code>
- <code><a href="./src/resources/v1/instruments/fundamentals.ts">FundamentalGetInstrumentFundamentalsResponse</a></code>

Methods:

- <code title="get /v1/instruments/{instrument_id}/fundamentals">client.v1.instruments.fundamentals.<a href="./src/resources/v1/instruments/fundamentals.ts">getInstrumentFundamentals</a>(instrumentID) -> FundamentalGetInstrumentFundamentalsResponse</code>

### IncomeStatements

Types:

- <code><a href="./src/resources/v1/instruments/income-statements.ts">InstrumentIncomeStatement</a></code>
- <code><a href="./src/resources/v1/instruments/income-statements.ts">InstrumentIncomeStatementList</a></code>
- <code><a href="./src/resources/v1/instruments/income-statements.ts">IncomeStatementGetInstrumentIncomeStatementsResponse</a></code>

Methods:

- <code title="get /v1/instruments/{instrument_id}/income-statements">client.v1.instruments.incomeStatements.<a href="./src/resources/v1/instruments/income-statements.ts">getInstrumentIncomeStatements</a>(instrumentID, { ...params }) -> IncomeStatementGetInstrumentIncomeStatementsResponse</code>

### Options

Types:

- <code><a href="./src/resources/v1/instruments/options.ts">OptionGetOptionContractsResponse</a></code>

Methods:

- <code title="get /v1/instruments/options/contracts">client.v1.instruments.options.<a href="./src/resources/v1/instruments/options.ts">getOptionContracts</a>({ ...params }) -> OptionGetOptionContractsResponse</code>

## MarketData

### DailySummary

Types:

- <code><a href="./src/resources/v1/market-data/daily-summary.ts">DailySummary</a></code>
- <code><a href="./src/resources/v1/market-data/daily-summary.ts">DailySummaryList</a></code>
- <code><a href="./src/resources/v1/market-data/daily-summary.ts">DailySummaryGetDailySummariesResponse</a></code>

Methods:

- <code title="get /v1/market-data/daily-summary">client.v1.marketData.dailySummary.<a href="./src/resources/v1/market-data/daily-summary.ts">getDailySummaries</a>({ ...params }) -> DailySummaryGetDailySummariesResponse</code>

### Snapshot

Types:

- <code><a href="./src/resources/v1/market-data/snapshot.ts">MarketDataSnapshot</a></code>
- <code><a href="./src/resources/v1/market-data/snapshot.ts">MarketDataSnapshotList</a></code>
- <code><a href="./src/resources/v1/market-data/snapshot.ts">SnapshotLastTrade</a></code>
- <code><a href="./src/resources/v1/market-data/snapshot.ts">SnapshotQuote</a></code>
- <code><a href="./src/resources/v1/market-data/snapshot.ts">SnapshotSession</a></code>
- <code><a href="./src/resources/v1/market-data/snapshot.ts">SnapshotGetSnapshotsResponse</a></code>

Methods:

- <code title="get /v1/market-data/snapshot">client.v1.marketData.snapshot.<a href="./src/resources/v1/market-data/snapshot.ts">getSnapshots</a>({ ...params }) -> SnapshotGetSnapshotsResponse</code>

## News

Types:

- <code><a href="./src/resources/v1/news.ts">NewsInstrument</a></code>
- <code><a href="./src/resources/v1/news.ts">NewsItem</a></code>
- <code><a href="./src/resources/v1/news.ts">NewsItemList</a></code>
- <code><a href="./src/resources/v1/news.ts">NewsType</a></code>
- <code><a href="./src/resources/v1/news.ts">NewsGetNewsResponse</a></code>

Methods:

- <code title="get /v1/news">client.v1.news.<a href="./src/resources/v1/news.ts">getNews</a>({ ...params }) -> NewsGetNewsResponse</code>

## OmniAI

Types:

- <code><a href="./src/resources/v1/omni-ai/omni-ai.ts">ActionButton</a></code>
- <code><a href="./src/resources/v1/omni-ai/omni-ai.ts">CancelResponsePayload</a></code>
- <code><a href="./src/resources/v1/omni-ai/omni-ai.ts">ChartPayload</a></code>
- <code><a href="./src/resources/v1/omni-ai/omni-ai.ts">ChartPoint</a></code>
- <code><a href="./src/resources/v1/omni-ai/omni-ai.ts">ChartSeries</a></code>
- <code><a href="./src/resources/v1/omni-ai/omni-ai.ts">ContentPartChartPayload</a></code>
- <code><a href="./src/resources/v1/omni-ai/omni-ai.ts">ContentPartCustomPayload</a></code>
- <code><a href="./src/resources/v1/omni-ai/omni-ai.ts">ContentPartStructuredActionPayload</a></code>
- <code><a href="./src/resources/v1/omni-ai/omni-ai.ts">ContentPartSuggestedActionsPayload</a></code>
- <code><a href="./src/resources/v1/omni-ai/omni-ai.ts">ContentPartTextPayload</a></code>
- <code><a href="./src/resources/v1/omni-ai/omni-ai.ts">ContentPartThinkingPayload</a></code>
- <code><a href="./src/resources/v1/omni-ai/omni-ai.ts">CreateFeedbackResponse</a></code>
- <code><a href="./src/resources/v1/omni-ai/omni-ai.ts">CreateMessageResponse</a></code>
- <code><a href="./src/resources/v1/omni-ai/omni-ai.ts">CreateThreadResponse</a></code>
- <code><a href="./src/resources/v1/omni-ai/omni-ai.ts">DataChart</a></code>
- <code><a href="./src/resources/v1/omni-ai/omni-ai.ts">EntitlementAgreementKey</a></code>
- <code><a href="./src/resources/v1/omni-ai/omni-ai.ts">EntitlementCode</a></code>
- <code><a href="./src/resources/v1/omni-ai/omni-ai.ts">ErrorStatus</a></code>
- <code><a href="./src/resources/v1/omni-ai/omni-ai.ts">Message</a></code>
- <code><a href="./src/resources/v1/omni-ai/omni-ai.ts">MessageContent</a></code>
- <code><a href="./src/resources/v1/omni-ai/omni-ai.ts">MessageContentPart</a></code>
- <code><a href="./src/resources/v1/omni-ai/omni-ai.ts">MessageList</a></code>
- <code><a href="./src/resources/v1/omni-ai/omni-ai.ts">MessageOutcome</a></code>
- <code><a href="./src/resources/v1/omni-ai/omni-ai.ts">MessageRole</a></code>
- <code><a href="./src/resources/v1/omni-ai/omni-ai.ts">OpenChartAction</a></code>
- <code><a href="./src/resources/v1/omni-ai/omni-ai.ts">OpenEntitlementConsentAction</a></code>
- <code><a href="./src/resources/v1/omni-ai/omni-ai.ts">OpenScreenerAction</a></code>
- <code><a href="./src/resources/v1/omni-ai/omni-ai.ts">OrderPayload</a></code>
- <code><a href="./src/resources/v1/omni-ai/omni-ai.ts">PrefillOrderAction</a></code>
- <code><a href="./src/resources/v1/omni-ai/omni-ai.ts">PrefillOrderActionType</a></code>
- <code><a href="./src/resources/v1/omni-ai/omni-ai.ts">PromptButtonAction</a></code>
- <code><a href="./src/resources/v1/omni-ai/omni-ai.ts">Response</a></code>
- <code><a href="./src/resources/v1/omni-ai/omni-ai.ts">ResponseContent</a></code>
- <code><a href="./src/resources/v1/omni-ai/omni-ai.ts">ResponseContentPart</a></code>
- <code><a href="./src/resources/v1/omni-ai/omni-ai.ts">ResponseStatus</a></code>
- <code><a href="./src/resources/v1/omni-ai/omni-ai.ts">StructuredAction</a></code>
- <code><a href="./src/resources/v1/omni-ai/omni-ai.ts">StructuredActionButtonAction</a></code>
- <code><a href="./src/resources/v1/omni-ai/omni-ai.ts">SuggestedActionsPayload</a></code>
- <code><a href="./src/resources/v1/omni-ai/omni-ai.ts">SymbolChart</a></code>
- <code><a href="./src/resources/v1/omni-ai/omni-ai.ts">Thread</a></code>
- <code><a href="./src/resources/v1/omni-ai/omni-ai.ts">ThreadList</a></code>

### EntitlementAgreements

Types:

- <code><a href="./src/resources/v1/omni-ai/entitlement-agreements.ts">EntitlementAgreementResource</a></code>
- <code><a href="./src/resources/v1/omni-ai/entitlement-agreements.ts">EntitlementAgreementResourceList</a></code>
- <code><a href="./src/resources/v1/omni-ai/entitlement-agreements.ts">EntitlementAgreementGetEntitlementAgreementsResponse</a></code>

Methods:

- <code title="get /v1/omni-ai/entitlement-agreements">client.v1.omniAI.entitlementAgreements.<a href="./src/resources/v1/omni-ai/entitlement-agreements.ts">getEntitlementAgreements</a>() -> EntitlementAgreementGetEntitlementAgreementsResponse</code>

### Entitlements

Types:

- <code><a href="./src/resources/v1/omni-ai/entitlements.ts">DeleteEntitlementResponse</a></code>
- <code><a href="./src/resources/v1/omni-ai/entitlements.ts">EntitlementResource</a></code>
- <code><a href="./src/resources/v1/omni-ai/entitlements.ts">EntitlementResourceList</a></code>
- <code><a href="./src/resources/v1/omni-ai/entitlements.ts">EntitlementCreateEntitlementsResponse</a></code>
- <code><a href="./src/resources/v1/omni-ai/entitlements.ts">EntitlementDeleteEntitlementResponse</a></code>
- <code><a href="./src/resources/v1/omni-ai/entitlements.ts">EntitlementGetEntitlementsResponse</a></code>

Methods:

- <code title="post /v1/omni-ai/entitlements">client.v1.omniAI.entitlements.<a href="./src/resources/v1/omni-ai/entitlements.ts">createEntitlements</a>({ ...params }) -> EntitlementCreateEntitlementsResponse</code>
- <code title="delete /v1/omni-ai/entitlements/{entitlement_id}">client.v1.omniAI.entitlements.<a href="./src/resources/v1/omni-ai/entitlements.ts">deleteEntitlement</a>(entitlementID) -> EntitlementDeleteEntitlementResponse</code>
- <code title="get /v1/omni-ai/entitlements">client.v1.omniAI.entitlements.<a href="./src/resources/v1/omni-ai/entitlements.ts">getEntitlements</a>({ ...params }) -> EntitlementGetEntitlementsResponse</code>

### Messages

Types:

- <code><a href="./src/resources/v1/omni-ai/messages.ts">MessageGetMessageByIDResponse</a></code>
- <code><a href="./src/resources/v1/omni-ai/messages.ts">MessageSubmitFeedbackResponse</a></code>

Methods:

- <code title="get /v1/omni-ai/messages/{message_id}">client.v1.omniAI.messages.<a href="./src/resources/v1/omni-ai/messages.ts">getMessageByID</a>(messageID, { ...params }) -> MessageGetMessageByIDResponse</code>
- <code title="post /v1/omni-ai/messages/{message_id}/feedback">client.v1.omniAI.messages.<a href="./src/resources/v1/omni-ai/messages.ts">submitFeedback</a>(messageID, { ...params }) -> MessageSubmitFeedbackResponse</code>

### Responses

Types:

- <code><a href="./src/resources/v1/omni-ai/responses.ts">ResponseCancelResponseResponse</a></code>
- <code><a href="./src/resources/v1/omni-ai/responses.ts">ResponseGetResponseByIDResponse</a></code>

Methods:

- <code title="delete /v1/omni-ai/responses/{response_id}">client.v1.omniAI.responses.<a href="./src/resources/v1/omni-ai/responses.ts">cancelResponse</a>(responseID, { ...params }) -> ResponseCancelResponseResponse</code>
- <code title="get /v1/omni-ai/responses/{response_id}">client.v1.omniAI.responses.<a href="./src/resources/v1/omni-ai/responses.ts">getResponseByID</a>(responseID, { ...params }) -> ResponseGetResponseByIDResponse</code>

### Threads

Types:

- <code><a href="./src/resources/v1/omni-ai/threads/threads.ts">ThreadCreateThreadResponse</a></code>
- <code><a href="./src/resources/v1/omni-ai/threads/threads.ts">ThreadGetThreadByIDResponse</a></code>
- <code><a href="./src/resources/v1/omni-ai/threads/threads.ts">ThreadGetThreadResponseResponse</a></code>
- <code><a href="./src/resources/v1/omni-ai/threads/threads.ts">ThreadGetThreadsResponse</a></code>

Methods:

- <code title="post /v1/omni-ai/threads">client.v1.omniAI.threads.<a href="./src/resources/v1/omni-ai/threads/threads.ts">createThread</a>({ ...params }) -> ThreadCreateThreadResponse</code>
- <code title="get /v1/omni-ai/threads/{thread_id}">client.v1.omniAI.threads.<a href="./src/resources/v1/omni-ai/threads/threads.ts">getThreadByID</a>(threadID, { ...params }) -> ThreadGetThreadByIDResponse</code>
- <code title="get /v1/omni-ai/threads/{thread_id}/response">client.v1.omniAI.threads.<a href="./src/resources/v1/omni-ai/threads/threads.ts">getThreadResponse</a>(threadID, { ...params }) -> ThreadGetThreadResponseResponse</code>
- <code title="get /v1/omni-ai/threads">client.v1.omniAI.threads.<a href="./src/resources/v1/omni-ai/threads/threads.ts">getThreads</a>({ ...params }) -> ThreadGetThreadsResponse</code>

#### Messages

Types:

- <code><a href="./src/resources/v1/omni-ai/threads/messages.ts">MessageCreateMessageResponse</a></code>
- <code><a href="./src/resources/v1/omni-ai/threads/messages.ts">MessageGetMessagesResponse</a></code>

Methods:

- <code title="post /v1/omni-ai/threads/{thread_id}/messages">client.v1.omniAI.threads.messages.<a href="./src/resources/v1/omni-ai/threads/messages.ts">createMessage</a>(threadID, { ...params }) -> MessageCreateMessageResponse</code>
- <code title="get /v1/omni-ai/threads/{thread_id}/messages">client.v1.omniAI.threads.messages.<a href="./src/resources/v1/omni-ai/threads/messages.ts">getMessages</a>(threadID, { ...params }) -> MessageGetMessagesResponse</code>

## SavedScreeners

Types:

- <code><a href="./src/resources/v1/saved-screeners.ts">ScreenerEntry</a></code>
- <code><a href="./src/resources/v1/saved-screeners.ts">ScreenerEntryList</a></code>
- <code><a href="./src/resources/v1/saved-screeners.ts">SavedScreenerCreateScreenerResponse</a></code>
- <code><a href="./src/resources/v1/saved-screeners.ts">SavedScreenerGetScreenerByIDResponse</a></code>
- <code><a href="./src/resources/v1/saved-screeners.ts">SavedScreenerGetScreenersResponse</a></code>
- <code><a href="./src/resources/v1/saved-screeners.ts">SavedScreenerReplaceScreenerResponse</a></code>

Methods:

- <code title="post /v1/saved-screeners">client.v1.savedScreeners.<a href="./src/resources/v1/saved-screeners.ts">createScreener</a>({ ...params }) -> SavedScreenerCreateScreenerResponse</code>
- <code title="delete /v1/saved-screeners/{screener_id}">client.v1.savedScreeners.<a href="./src/resources/v1/saved-screeners.ts">deleteScreener</a>(screenerID) -> void</code>
- <code title="get /v1/saved-screeners/{screener_id}">client.v1.savedScreeners.<a href="./src/resources/v1/saved-screeners.ts">getScreenerByID</a>(screenerID) -> SavedScreenerGetScreenerByIDResponse</code>
- <code title="get /v1/saved-screeners">client.v1.savedScreeners.<a href="./src/resources/v1/saved-screeners.ts">getScreeners</a>() -> SavedScreenerGetScreenersResponse</code>
- <code title="put /v1/saved-screeners/{screener_id}">client.v1.savedScreeners.<a href="./src/resources/v1/saved-screeners.ts">replaceScreener</a>(screenerID, { ...params }) -> SavedScreenerReplaceScreenerResponse</code>

## Screener

Types:

- <code><a href="./src/resources/v1/screener.ts">FieldLookback</a></code>
- <code><a href="./src/resources/v1/screener.ts">FieldPeriod</a></code>
- <code><a href="./src/resources/v1/screener.ts">FieldRef</a></code>
- <code><a href="./src/resources/v1/screener.ts">FieldType</a></code>
- <code><a href="./src/resources/v1/screener.ts">FilterOpSpec</a></code>
- <code><a href="./src/resources/v1/screener.ts">FilterOperator</a></code>
- <code><a href="./src/resources/v1/screener.ts">FilterValue</a></code>
- <code><a href="./src/resources/v1/screener.ts">Modifier</a></code>
- <code><a href="./src/resources/v1/screener.ts">ModifierOp</a></code>
- <code><a href="./src/resources/v1/screener.ts">OperatorArg</a></code>
- <code><a href="./src/resources/v1/screener.ts">ScreenerColumn</a></code>
- <code><a href="./src/resources/v1/screener.ts">ScreenerFilter</a></code>
- <code><a href="./src/resources/v1/screener.ts">ScreenerItem</a></code>
- <code><a href="./src/resources/v1/screener.ts">ScreenerItemList</a></code>
- <code><a href="./src/resources/v1/screener.ts">ScreenerRow</a></code>
- <code><a href="./src/resources/v1/screener.ts">ScreenerRowList</a></code>
- <code><a href="./src/resources/v1/screener.ts">SearchFilter</a></code>
- <code><a href="./src/resources/v1/screener.ts">Variable</a></code>
- <code><a href="./src/resources/v1/screener.ts">ScreenerGetScreenerResponse</a></code>
- <code><a href="./src/resources/v1/screener.ts">ScreenerSearchScreenerResponse</a></code>

Methods:

- <code title="get /v1/screener">client.v1.screener.<a href="./src/resources/v1/screener.ts">getScreener</a>({ ...params }) -> ScreenerGetScreenerResponse</code>
- <code title="post /v1/screener">client.v1.screener.<a href="./src/resources/v1/screener.ts">searchScreener</a>({ ...params }) -> ScreenerSearchScreenerResponse</code>

## Version

Types:

- <code><a href="./src/resources/v1/version.ts">Version</a></code>
- <code><a href="./src/resources/v1/version.ts">VersionGetVersionResponse</a></code>

Methods:

- <code title="get /v1/version">client.v1.version.<a href="./src/resources/v1/version.ts">getVersion</a>() -> VersionGetVersionResponse</code>

## Watchlists

Types:

- <code><a href="./src/resources/v1/watchlists/watchlists.ts">WatchlistDetail</a></code>
- <code><a href="./src/resources/v1/watchlists/watchlists.ts">WatchlistEntry</a></code>
- <code><a href="./src/resources/v1/watchlists/watchlists.ts">WatchlistEntryList</a></code>
- <code><a href="./src/resources/v1/watchlists/watchlists.ts">WatchlistItemEntry</a></code>
- <code><a href="./src/resources/v1/watchlists/watchlists.ts">WatchlistCreateWatchlistResponse</a></code>
- <code><a href="./src/resources/v1/watchlists/watchlists.ts">WatchlistDeleteWatchlistResponse</a></code>
- <code><a href="./src/resources/v1/watchlists/watchlists.ts">WatchlistGetWatchlistByIDResponse</a></code>
- <code><a href="./src/resources/v1/watchlists/watchlists.ts">WatchlistGetWatchlistsResponse</a></code>

Methods:

- <code title="post /v1/watchlists">client.v1.watchlists.<a href="./src/resources/v1/watchlists/watchlists.ts">createWatchlist</a>({ ...params }) -> WatchlistCreateWatchlistResponse</code>
- <code title="delete /v1/watchlists/{watchlist_id}">client.v1.watchlists.<a href="./src/resources/v1/watchlists/watchlists.ts">deleteWatchlist</a>(watchlistID) -> unknown</code>
- <code title="get /v1/watchlists/{watchlist_id}">client.v1.watchlists.<a href="./src/resources/v1/watchlists/watchlists.ts">getWatchlistByID</a>(watchlistID) -> WatchlistGetWatchlistByIDResponse</code>
- <code title="get /v1/watchlists">client.v1.watchlists.<a href="./src/resources/v1/watchlists/watchlists.ts">getWatchlists</a>({ ...params }) -> WatchlistGetWatchlistsResponse</code>

### Items

Types:

- <code><a href="./src/resources/v1/watchlists/items.ts">AddWatchlistItemData</a></code>
- <code><a href="./src/resources/v1/watchlists/items.ts">ItemAddWatchlistItemResponse</a></code>
- <code><a href="./src/resources/v1/watchlists/items.ts">ItemDeleteWatchlistItemResponse</a></code>

Methods:

- <code title="post /v1/watchlists/{watchlist_id}/items">client.v1.watchlists.items.<a href="./src/resources/v1/watchlists/items.ts">addWatchlistItem</a>(watchlistID, { ...params }) -> ItemAddWatchlistItemResponse</code>
- <code title="delete /v1/watchlists/{watchlist_id}/items/{item_id}">client.v1.watchlists.items.<a href="./src/resources/v1/watchlists/items.ts">deleteWatchlistItem</a>(itemID, { ...params }) -> unknown</code>
