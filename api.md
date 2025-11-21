# Shared

Types:

- <code><a href="./src/resources/shared.ts">APIError</a></code>
- <code><a href="./src/resources/shared.ts">BaseResponse</a></code>
- <code><a href="./src/resources/shared.ts">ResponseMetadata</a></code>

# Active

## V1

### Accounts

Types:

- <code><a href="./src/resources/active/v1/accounts/accounts.ts">Account</a></code>
- <code><a href="./src/resources/active/v1/accounts/accounts.ts">AccountKind</a></code>
- <code><a href="./src/resources/active/v1/accounts/accounts.ts">AccountList</a></code>
- <code><a href="./src/resources/active/v1/accounts/accounts.ts">AccountStatus</a></code>
- <code><a href="./src/resources/active/v1/accounts/accounts.ts">AccountSubkind</a></code>
- <code><a href="./src/resources/active/v1/accounts/accounts.ts">AccountGetAccountByIDResponse</a></code>
- <code><a href="./src/resources/active/v1/accounts/accounts.ts">AccountGetAccountsResponse</a></code>
- <code><a href="./src/resources/active/v1/accounts/accounts.ts">AccountPatchAccountByIDResponse</a></code>

Methods:

- <code title="get /active/v1/accounts/{account_id}">client.active.v1.accounts.<a href="./src/resources/active/v1/accounts/accounts.ts">getAccountByID</a>(accountID) -> AccountGetAccountByIDResponse</code>
- <code title="get /active/v1/accounts">client.active.v1.accounts.<a href="./src/resources/active/v1/accounts/accounts.ts">getAccounts</a>({ ...params }) -> AccountGetAccountsResponse</code>
- <code title="patch /active/v1/accounts/{account_id}">client.active.v1.accounts.<a href="./src/resources/active/v1/accounts/accounts.ts">patchAccountByID</a>(accountID, { ...params }) -> AccountPatchAccountByIDResponse</code>

#### Balances

Types:

- <code><a href="./src/resources/active/v1/accounts/balances.ts">AccountBalances</a></code>
- <code><a href="./src/resources/active/v1/accounts/balances.ts">BalanceGetAccountBalancesResponse</a></code>

Methods:

- <code title="get /active/v1/accounts/{account_id}/balances">client.active.v1.accounts.balances.<a href="./src/resources/active/v1/accounts/balances.ts">getAccountBalances</a>(accountID) -> BalanceGetAccountBalancesResponse</code>

#### Locates

Types:

- <code><a href="./src/resources/active/v1/accounts/locates/locates.ts">LocateOrder</a></code>
- <code><a href="./src/resources/active/v1/accounts/locates/locates.ts">LocateOrderList</a></code>
- <code><a href="./src/resources/active/v1/accounts/locates/locates.ts">LocateOrderStatus</a></code>
- <code><a href="./src/resources/active/v1/accounts/locates/locates.ts">LocateCreateLocateRequestResponse</a></code>
- <code><a href="./src/resources/active/v1/accounts/locates/locates.ts">LocateGetLocateRequestsResponse</a></code>
- <code><a href="./src/resources/active/v1/accounts/locates/locates.ts">LocateUpdateLocateRequestResponse</a></code>

Methods:

- <code title="post /active/v1/accounts/{account_id}/locates">client.active.v1.accounts.locates.<a href="./src/resources/active/v1/accounts/locates/locates.ts">createLocateRequest</a>(accountID, [ ...body ]) -> LocateCreateLocateRequestResponse</code>
- <code title="get /active/v1/accounts/{account_id}/locates">client.active.v1.accounts.locates.<a href="./src/resources/active/v1/accounts/locates/locates.ts">getLocateRequests</a>(accountID, { ...params }) -> LocateGetLocateRequestsResponse</code>
- <code title="patch /active/v1/accounts/{account_id}/locates">client.active.v1.accounts.locates.<a href="./src/resources/active/v1/accounts/locates/locates.ts">updateLocateRequest</a>(accountID, { ...params }) -> LocateUpdateLocateRequestResponse</code>

##### Inventory

Types:

- <code><a href="./src/resources/active/v1/accounts/locates/inventory.ts">LocateInventoryItem</a></code>
- <code><a href="./src/resources/active/v1/accounts/locates/inventory.ts">LocateInventoryItemList</a></code>
- <code><a href="./src/resources/active/v1/accounts/locates/inventory.ts">InventoryGetLocateInventoryResponse</a></code>

Methods:

- <code title="get /active/v1/accounts/{account_id}/locates/inventory">client.active.v1.accounts.locates.inventory.<a href="./src/resources/active/v1/accounts/locates/inventory.ts">getLocateInventory</a>(accountID, { ...params }) -> InventoryGetLocateInventoryResponse</code>

#### Orders

Types:

- <code><a href="./src/resources/active/v1/accounts/orders.ts">ApStrategy</a></code>
- <code><a href="./src/resources/active/v1/accounts/orders.ts">BaseStrategyParams</a></code>
- <code><a href="./src/resources/active/v1/accounts/orders.ts">DarkStrategy</a></code>
- <code><a href="./src/resources/active/v1/accounts/orders.ts">Destination</a></code>
- <code><a href="./src/resources/active/v1/accounts/orders.ts">DmaStrategy</a></code>
- <code><a href="./src/resources/active/v1/accounts/orders.ts">Order</a></code>
- <code><a href="./src/resources/active/v1/accounts/orders.ts">OrderList</a></code>
- <code><a href="./src/resources/active/v1/accounts/orders.ts">OrderStatus</a></code>
- <code><a href="./src/resources/active/v1/accounts/orders.ts">OrderStrategy</a></code>
- <code><a href="./src/resources/active/v1/accounts/orders.ts">OrderType</a></code>
- <code><a href="./src/resources/active/v1/accounts/orders.ts">PovStrategy</a></code>
- <code><a href="./src/resources/active/v1/accounts/orders.ts">SecurityType</a></code>
- <code><a href="./src/resources/active/v1/accounts/orders.ts">Side</a></code>
- <code><a href="./src/resources/active/v1/accounts/orders.ts">SorStrategy</a></code>
- <code><a href="./src/resources/active/v1/accounts/orders.ts">TimeInForce</a></code>
- <code><a href="./src/resources/active/v1/accounts/orders.ts">TwapStrategy</a></code>
- <code><a href="./src/resources/active/v1/accounts/orders.ts">Urgency</a></code>
- <code><a href="./src/resources/active/v1/accounts/orders.ts">VwapStrategy</a></code>
- <code><a href="./src/resources/active/v1/accounts/orders.ts">OrderCancelAllOrdersResponse</a></code>
- <code><a href="./src/resources/active/v1/accounts/orders.ts">OrderCancelOrderResponse</a></code>
- <code><a href="./src/resources/active/v1/accounts/orders.ts">OrderGetOrderByIDResponse</a></code>
- <code><a href="./src/resources/active/v1/accounts/orders.ts">OrderGetOrdersResponse</a></code>
- <code><a href="./src/resources/active/v1/accounts/orders.ts">OrderReplaceOrderResponse</a></code>
- <code><a href="./src/resources/active/v1/accounts/orders.ts">OrderSubmitOrdersResponse</a></code>

Methods:

- <code title="delete /active/v1/accounts/{account_id}/orders">client.active.v1.accounts.orders.<a href="./src/resources/active/v1/accounts/orders.ts">cancelAllOrders</a>(accountID) -> OrderCancelAllOrdersResponse</code>
- <code title="delete /active/v1/accounts/{account_id}/orders/{order_id}">client.active.v1.accounts.orders.<a href="./src/resources/active/v1/accounts/orders.ts">cancelOrder</a>(orderID, { ...params }) -> OrderCancelOrderResponse</code>
- <code title="get /active/v1/accounts/{account_id}/orders/{order_id}">client.active.v1.accounts.orders.<a href="./src/resources/active/v1/accounts/orders.ts">getOrderByID</a>(orderID, { ...params }) -> OrderGetOrderByIDResponse</code>
- <code title="get /active/v1/accounts/{account_id}/orders">client.active.v1.accounts.orders.<a href="./src/resources/active/v1/accounts/orders.ts">getOrders</a>(accountID, { ...params }) -> OrderGetOrdersResponse</code>
- <code title="patch /active/v1/accounts/{account_id}/orders/{order_id}">client.active.v1.accounts.orders.<a href="./src/resources/active/v1/accounts/orders.ts">replaceOrder</a>(orderID, { ...params }) -> OrderReplaceOrderResponse</code>
- <code title="post /active/v1/accounts/{account_id}/orders">client.active.v1.accounts.orders.<a href="./src/resources/active/v1/accounts/orders.ts">submitOrders</a>(accountID, [ ...body ]) -> OrderSubmitOrdersResponse</code>

#### Positions

Types:

- <code><a href="./src/resources/active/v1/accounts/positions.ts">Position</a></code>
- <code><a href="./src/resources/active/v1/accounts/positions.ts">PositionList</a></code>
- <code><a href="./src/resources/active/v1/accounts/positions.ts">PositionGetPositionsResponse</a></code>

Methods:

- <code title="get /active/v1/accounts/{account_id}/positions">client.active.v1.accounts.positions.<a href="./src/resources/active/v1/accounts/positions.ts">getPositions</a>(accountID, { ...params }) -> PositionGetPositionsResponse</code>

### Calendars

#### Dividends

Types:

- <code><a href="./src/resources/active/v1/calendars/dividends.ts">DividendCalendarEvent</a></code>
- <code><a href="./src/resources/active/v1/calendars/dividends.ts">DividendCalendarEventList</a></code>
- <code><a href="./src/resources/active/v1/calendars/dividends.ts">DividendGetDividendsCalendarResponse</a></code>

Methods:

- <code title="get /active/v1/calendars/dividends">client.active.v1.calendars.dividends.<a href="./src/resources/active/v1/calendars/dividends.ts">getDividendsCalendar</a>({ ...params }) -> DividendGetDividendsCalendarResponse</code>

#### Earnings

Types:

- <code><a href="./src/resources/active/v1/calendars/earnings.ts">EarningsCalendarEvent</a></code>
- <code><a href="./src/resources/active/v1/calendars/earnings.ts">EarningsCalendarEventList</a></code>
- <code><a href="./src/resources/active/v1/calendars/earnings.ts">EarningGetEarningsCalendarResponse</a></code>

Methods:

- <code title="get /active/v1/calendars/earnings">client.active.v1.calendars.earnings.<a href="./src/resources/active/v1/calendars/earnings.ts">getEarningsCalendar</a>({ ...params }) -> EarningGetEarningsCalendarResponse</code>

#### Economic

Types:

- <code><a href="./src/resources/active/v1/calendars/economic.ts">EconomicCalendarEvent</a></code>
- <code><a href="./src/resources/active/v1/calendars/economic.ts">EconomicCalendarEventList</a></code>
- <code><a href="./src/resources/active/v1/calendars/economic.ts">EconomicGetEconomicCalendarResponse</a></code>

Methods:

- <code title="get /active/v1/calendars/economic">client.active.v1.calendars.economic.<a href="./src/resources/active/v1/calendars/economic.ts">getEconomicCalendar</a>({ ...params }) -> EconomicGetEconomicCalendarResponse</code>

#### MarketHours

Types:

- <code><a href="./src/resources/active/v1/calendars/market-hours.ts">MarketHours</a></code>
- <code><a href="./src/resources/active/v1/calendars/market-hours.ts">MarketHoursList</a></code>
- <code><a href="./src/resources/active/v1/calendars/market-hours.ts">MarketHourGetMarketHoursCalendarResponse</a></code>

Methods:

- <code title="get /active/v1/calendars/market-hours">client.active.v1.calendars.marketHours.<a href="./src/resources/active/v1/calendars/market-hours.ts">getMarketHoursCalendar</a>({ ...params }) -> MarketHourGetMarketHoursCalendarResponse</code>

#### MergersAcquisitions

Types:

- <code><a href="./src/resources/active/v1/calendars/mergers-acquisitions.ts">MergersAcquisitionsEvent</a></code>
- <code><a href="./src/resources/active/v1/calendars/mergers-acquisitions.ts">MergersAcquisitionsEventList</a></code>
- <code><a href="./src/resources/active/v1/calendars/mergers-acquisitions.ts">MergersAcquisitionGetMergersAndAcquisitionsCalendarResponse</a></code>

Methods:

- <code title="get /active/v1/calendars/mergers-acquisitions">client.active.v1.calendars.mergersAcquisitions.<a href="./src/resources/active/v1/calendars/mergers-acquisitions.ts">getMergersAndAcquisitionsCalendar</a>({ ...params }) -> MergersAcquisitionGetMergersAndAcquisitionsCalendarResponse</code>

#### Splits

Types:

- <code><a href="./src/resources/active/v1/calendars/splits.ts">StockSplitEvent</a></code>
- <code><a href="./src/resources/active/v1/calendars/splits.ts">StockSplitEventList</a></code>
- <code><a href="./src/resources/active/v1/calendars/splits.ts">SplitGetSplitsCalendarResponse</a></code>

Methods:

- <code title="get /active/v1/calendars/splits">client.active.v1.calendars.splits.<a href="./src/resources/active/v1/calendars/splits.ts">getSplitsCalendar</a>({ ...params }) -> SplitGetSplitsCalendarResponse</code>

#### Summary

Types:

- <code><a href="./src/resources/active/v1/calendars/summary.ts">CalendarDateSummary</a></code>
- <code><a href="./src/resources/active/v1/calendars/summary.ts">CalendarDateSummaryList</a></code>
- <code><a href="./src/resources/active/v1/calendars/summary.ts">SummaryGetCalendarSummaryResponse</a></code>

Methods:

- <code title="get /active/v1/calendars/summary">client.active.v1.calendars.summary.<a href="./src/resources/active/v1/calendars/summary.ts">getCalendarSummary</a>({ ...params }) -> SummaryGetCalendarSummaryResponse</code>

### Instruments

Types:

- <code><a href="./src/resources/active/v1/instruments/instruments.ts">Instrument</a></code>
- <code><a href="./src/resources/active/v1/instruments/instruments.ts">InstrumentList</a></code>
- <code><a href="./src/resources/active/v1/instruments/instruments.ts">InstrumentQuote</a></code>
- <code><a href="./src/resources/active/v1/instruments/instruments.ts">InstrumentGetInstrumentByIDResponse</a></code>
- <code><a href="./src/resources/active/v1/instruments/instruments.ts">InstrumentGetInstrumentsResponse</a></code>

Methods:

- <code title="get /active/v1/instruments/{instrument_id}">client.active.v1.instruments.<a href="./src/resources/active/v1/instruments/instruments.ts">getInstrumentByID</a>(instrumentID, { ...params }) -> InstrumentGetInstrumentByIDResponse</code>
- <code title="get /active/v1/instruments">client.active.v1.instruments.<a href="./src/resources/active/v1/instruments/instruments.ts">getInstruments</a>({ ...params }) -> InstrumentGetInstrumentsResponse</code>

#### AnalystReporting

Types:

- <code><a href="./src/resources/active/v1/instruments/analyst-reporting.ts">AnalystDistribution</a></code>
- <code><a href="./src/resources/active/v1/instruments/analyst-reporting.ts">AnalystRating</a></code>
- <code><a href="./src/resources/active/v1/instruments/analyst-reporting.ts">InstrumentAnalystConsensus</a></code>
- <code><a href="./src/resources/active/v1/instruments/analyst-reporting.ts">PriceTarget</a></code>
- <code><a href="./src/resources/active/v1/instruments/analyst-reporting.ts">AnalystReportingGetInstrumentAnalystConsensusResponse</a></code>

Methods:

- <code title="get /active/v1/instruments/{instrument_id}/analyst-reporting">client.active.v1.instruments.analystReporting.<a href="./src/resources/active/v1/instruments/analyst-reporting.ts">getInstrumentAnalystConsensus</a>(instrumentID, { ...params }) -> AnalystReportingGetInstrumentAnalystConsensusResponse</code>

#### Events

Types:

- <code><a href="./src/resources/active/v1/instruments/events.ts">InstrumentEvent</a></code>
- <code><a href="./src/resources/active/v1/instruments/events.ts">InstrumentEventList</a></code>
- <code><a href="./src/resources/active/v1/instruments/events.ts">EventGetInstrumentEventsResponse</a></code>

Methods:

- <code title="get /active/v1/instruments/{instrument_id}/events">client.active.v1.instruments.events.<a href="./src/resources/active/v1/instruments/events.ts">getInstrumentEvents</a>(instrumentID, { ...params }) -> EventGetInstrumentEventsResponse</code>

#### News

Types:

- <code><a href="./src/resources/active/v1/instruments/news.ts">InstrumentNews</a></code>
- <code><a href="./src/resources/active/v1/instruments/news.ts">InstrumentNewsList</a></code>
- <code><a href="./src/resources/active/v1/instruments/news.ts">NewsGetInstrumentNewsResponse</a></code>

Methods:

- <code title="get /active/v1/instruments/{instrument_id}/news">client.active.v1.instruments.news.<a href="./src/resources/active/v1/instruments/news.ts">getInstrumentNews</a>(instrumentID, { ...params }) -> NewsGetInstrumentNewsResponse</code>

#### Reporting

Types:

- <code><a href="./src/resources/active/v1/instruments/reporting.ts">FiscalPeriodType</a></code>
- <code><a href="./src/resources/active/v1/instruments/reporting.ts">InstrumentEarnings</a></code>
- <code><a href="./src/resources/active/v1/instruments/reporting.ts">ReportingGetInstrumentReportingResponse</a></code>

Methods:

- <code title="get /active/v1/instruments/{instrument_id}/reporting">client.active.v1.instruments.reporting.<a href="./src/resources/active/v1/instruments/reporting.ts">getInstrumentReporting</a>(instrumentID, { ...params }) -> ReportingGetInstrumentReportingResponse</code>

#### Venues

Types:

- <code><a href="./src/resources/active/v1/instruments/venues.ts">Venue</a></code>
- <code><a href="./src/resources/active/v1/instruments/venues.ts">VenueList</a></code>
- <code><a href="./src/resources/active/v1/instruments/venues.ts">VenueGetVenuesResponse</a></code>

Methods:

- <code title="get /active/v1/instruments/venues">client.active.v1.instruments.venues.<a href="./src/resources/active/v1/instruments/venues.ts">getVenues</a>() -> VenueGetVenuesResponse</code>

### PromptLayer

#### V1

##### WorkflowVersionExecutionResults

Types:

- <code><a href="./src/resources/active/v1/prompt-layer/v1/workflow-version-execution-results.ts">WorkflowVersionExecutionResultPromptLayerGetWorkflowExecutionResultsV251131Response</a></code>

Methods:

- <code title="get /active/v1/prompt_layer/v1/workflow-version-execution-results">client.active.v1.promptLayer.v1.workflowVersionExecutionResults.<a href="./src/resources/active/v1/prompt-layer/v1/workflow-version-execution-results.ts">promptLayerGetWorkflowExecutionResultsV251131</a>({ ...params }) -> WorkflowVersionExecutionResultPromptLayerGetWorkflowExecutionResultsV251131Response</code>

##### Workflows

###### Run

Types:

- <code><a href="./src/resources/active/v1/prompt-layer/v1/workflows/run.ts">RunPromptLayerRunWorkflowV251131Response</a></code>

Methods:

- <code title="post /active/v1/prompt_layer/v1/workflows/{workflow_name}/run">client.active.v1.promptLayer.v1.workflows.run.<a href="./src/resources/active/v1/prompt-layer/v1/workflows/run.ts">promptLayerRunWorkflowV251131</a>(workflowName, { ...params }) -> RunPromptLayerRunWorkflowV251131Response</code>

### Screener

Types:

- <code><a href="./src/resources/active/v1/screener.ts">ScreenerItem</a></code>
- <code><a href="./src/resources/active/v1/screener.ts">ScreenerItemList</a></code>
- <code><a href="./src/resources/active/v1/screener.ts">ScreenerGetScreenerResponse</a></code>

Methods:

- <code title="get /active/v1/screener">client.active.v1.screener.<a href="./src/resources/active/v1/screener.ts">getScreener</a>({ ...params }) -> ScreenerGetScreenerResponse</code>

### Version

Types:

- <code><a href="./src/resources/active/v1/version.ts">Version</a></code>
- <code><a href="./src/resources/active/v1/version.ts">VersionGetVersionResponse</a></code>
- <code><a href="./src/resources/active/v1/version.ts">VersionUpdateVersionResponse</a></code>

Methods:

- <code title="get /active/v1/version">client.active.v1.version.<a href="./src/resources/active/v1/version.ts">getVersion</a>() -> VersionGetVersionResponse</code>
- <code title="patch /active/v1/version">client.active.v1.version.<a href="./src/resources/active/v1/version.ts">updateVersion</a>() -> VersionUpdateVersionResponse</code>
