# Shared

Types:

- <code><a href="./src/resources/shared.ts">APIError</a></code>
- <code><a href="./src/resources/shared.ts">BaseResponse</a></code>
- <code><a href="./src/resources/shared.ts">ResponseMetadata</a></code>

# Active

## V1

Types:

- <code><a href="./src/resources/active/v1/v1.ts">SecurityIDSource</a></code>
- <code><a href="./src/resources/active/v1/v1.ts">SecurityType</a></code>

### Accounts

Types:

- <code><a href="./src/resources/active/v1/accounts/accounts.ts">Account</a></code>
- <code><a href="./src/resources/active/v1/accounts/accounts.ts">AccountKind</a></code>
- <code><a href="./src/resources/active/v1/accounts/accounts.ts">AccountList</a></code>
- <code><a href="./src/resources/active/v1/accounts/accounts.ts">AccountSettings</a></code>
- <code><a href="./src/resources/active/v1/accounts/accounts.ts">AccountStatus</a></code>
- <code><a href="./src/resources/active/v1/accounts/accounts.ts">AccountSubkind</a></code>
- <code><a href="./src/resources/active/v1/accounts/accounts.ts">Order</a></code>
- <code><a href="./src/resources/active/v1/accounts/accounts.ts">OrderList</a></code>
- <code><a href="./src/resources/active/v1/accounts/accounts.ts">RiskSettings</a></code>
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
- <code><a href="./src/resources/active/v1/accounts/balances.ts">APITimestamp</a></code>
- <code><a href="./src/resources/active/v1/accounts/balances.ts">MarginType</a></code>
- <code><a href="./src/resources/active/v1/accounts/balances.ts">RegTBalance</a></code>
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
- <code><a href="./src/resources/active/v1/accounts/orders.ts">APIDecimal64</a></code>
- <code><a href="./src/resources/active/v1/accounts/orders.ts">BaseStrategyParams</a></code>
- <code><a href="./src/resources/active/v1/accounts/orders.ts">DarkStrategy</a></code>
- <code><a href="./src/resources/active/v1/accounts/orders.ts">DmaStrategy</a></code>
- <code><a href="./src/resources/active/v1/accounts/orders.ts">OrderStatus</a></code>
- <code><a href="./src/resources/active/v1/accounts/orders.ts">OrderStrategy</a></code>
- <code><a href="./src/resources/active/v1/accounts/orders.ts">OrderType</a></code>
- <code><a href="./src/resources/active/v1/accounts/orders.ts">PovStrategy</a></code>
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

- <code title="delete /active/v1/accounts/{account_id}/orders">client.active.v1.accounts.orders.<a href="./src/resources/active/v1/accounts/orders.ts">cancelAllOrders</a>(accountID, { ...params }) -> OrderCancelAllOrdersResponse</code>
- <code title="delete /active/v1/accounts/{account_id}/orders/{order_id}">client.active.v1.accounts.orders.<a href="./src/resources/active/v1/accounts/orders.ts">cancelOrder</a>(orderID, { ...params }) -> OrderCancelOrderResponse</code>
- <code title="get /active/v1/accounts/{account_id}/orders/{order_id}">client.active.v1.accounts.orders.<a href="./src/resources/active/v1/accounts/orders.ts">getOrderByID</a>(orderID, { ...params }) -> OrderGetOrderByIDResponse</code>
- <code title="get /active/v1/accounts/{account_id}/orders">client.active.v1.accounts.orders.<a href="./src/resources/active/v1/accounts/orders.ts">getOrders</a>(accountID, { ...params }) -> OrderGetOrdersResponse</code>
- <code title="patch /active/v1/accounts/{account_id}/orders/{order_id}">client.active.v1.accounts.orders.<a href="./src/resources/active/v1/accounts/orders.ts">replaceOrder</a>(orderID, { ...params }) -> OrderReplaceOrderResponse</code>
- <code title="post /active/v1/accounts/{account_id}/orders">client.active.v1.accounts.orders.<a href="./src/resources/active/v1/accounts/orders.ts">submitOrders</a>(accountID, [ ...body ]) -> OrderSubmitOrdersResponse</code>

#### PortfolioHistory

Types:

- <code><a href="./src/resources/active/v1/accounts/portfolio-history.ts">PortfolioHistoryResponse</a></code>
- <code><a href="./src/resources/active/v1/accounts/portfolio-history.ts">PortfolioHistorySegment</a></code>
- <code><a href="./src/resources/active/v1/accounts/portfolio-history.ts">PortfolioHistoryGetPortfolioHistoryResponse</a></code>

Methods:

- <code title="get /active/v1/accounts/{account_id}/portfolio-history">client.active.v1.accounts.portfolioHistory.<a href="./src/resources/active/v1/accounts/portfolio-history.ts">getPortfolioHistory</a>(accountID, { ...params }) -> PortfolioHistoryGetPortfolioHistoryResponse</code>

#### Positions

Types:

- <code><a href="./src/resources/active/v1/accounts/positions.ts">Position</a></code>
- <code><a href="./src/resources/active/v1/accounts/positions.ts">PositionList</a></code>
- <code><a href="./src/resources/active/v1/accounts/positions.ts">PositionClosePositionResponse</a></code>
- <code><a href="./src/resources/active/v1/accounts/positions.ts">PositionClosePositionsResponse</a></code>
- <code><a href="./src/resources/active/v1/accounts/positions.ts">PositionGetPositionsResponse</a></code>

Methods:

- <code title="delete /active/v1/accounts/{account_id}/positions/{security_id_source}/{security_id}">client.active.v1.accounts.positions.<a href="./src/resources/active/v1/accounts/positions.ts">closePosition</a>(securityID, { ...params }) -> PositionClosePositionResponse</code>
- <code title="delete /active/v1/accounts/{account_id}/positions">client.active.v1.accounts.positions.<a href="./src/resources/active/v1/accounts/positions.ts">closePositions</a>(accountID, { ...params }) -> PositionClosePositionsResponse</code>
- <code title="get /active/v1/accounts/{account_id}/positions">client.active.v1.accounts.positions.<a href="./src/resources/active/v1/accounts/positions.ts">getPositions</a>(accountID, { ...params }) -> PositionGetPositionsResponse</code>

### APIKeys

Types:

- <code><a href="./src/resources/active/v1/api-keys.ts">APIKey</a></code>
- <code><a href="./src/resources/active/v1/api-keys.ts">APIKeyListEntry</a></code>
- <code><a href="./src/resources/active/v1/api-keys.ts">APIKeyListEntryList</a></code>
- <code><a href="./src/resources/active/v1/api-keys.ts">Revocation</a></code>
- <code><a href="./src/resources/active/v1/api-keys.ts">RevocationList</a></code>
- <code><a href="./src/resources/active/v1/api-keys.ts">APIKeyCreateResponse</a></code>
- <code><a href="./src/resources/active/v1/api-keys.ts">APIKeyListResponse</a></code>
- <code><a href="./src/resources/active/v1/api-keys.ts">APIKeyRevokeResponse</a></code>
- <code><a href="./src/resources/active/v1/api-keys.ts">APIKeyRevokeAllResponse</a></code>

Methods:

- <code title="post /active/v1/api_keys">client.active.v1.apiKeys.<a href="./src/resources/active/v1/api-keys.ts">create</a>({ ...params }) -> APIKeyCreateResponse</code>
- <code title="get /active/v1/api_keys">client.active.v1.apiKeys.<a href="./src/resources/active/v1/api-keys.ts">list</a>() -> APIKeyListResponse</code>
- <code title="delete /active/v1/api_keys/{id}">client.active.v1.apiKeys.<a href="./src/resources/active/v1/api-keys.ts">revoke</a>(id) -> APIKeyRevokeResponse</code>
- <code title="delete /active/v1/api_keys">client.active.v1.apiKeys.<a href="./src/resources/active/v1/api-keys.ts">revokeAll</a>() -> APIKeyRevokeAllResponse</code>

### Assistant

#### Prompts

Types:

- <code><a href="./src/resources/active/v1/assistant/prompts.ts">PromptResult</a></code>
- <code><a href="./src/resources/active/v1/assistant/prompts.ts">PromptStatus</a></code>
- <code><a href="./src/resources/active/v1/assistant/prompts.ts">RunPromptResponse</a></code>
- <code><a href="./src/resources/active/v1/assistant/prompts.ts">PromptGetPromptResultResponse</a></code>
- <code><a href="./src/resources/active/v1/assistant/prompts.ts">PromptRunPromptResponse</a></code>

Methods:

- <code title="get /active/v1/assistant/prompts/{id}">client.active.v1.assistant.prompts.<a href="./src/resources/active/v1/assistant/prompts.ts">getPromptResult</a>(id, { ...params }) -> PromptGetPromptResultResponse</code>
- <code title="post /active/v1/assistant/prompts">client.active.v1.assistant.prompts.<a href="./src/resources/active/v1/assistant/prompts.ts">runPrompt</a>({ ...params }) -> PromptRunPromptResponse</code>

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

- <code><a href="./src/resources/active/v1/calendars/market-hours.ts">MarketHoursDetail</a></code>
- <code><a href="./src/resources/active/v1/calendars/market-hours.ts">MarketHoursDetailList</a></code>
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
- <code><a href="./src/resources/active/v1/instruments/instruments.ts">InstrumentCore</a></code>
- <code><a href="./src/resources/active/v1/instruments/instruments.ts">InstrumentCoreList</a></code>
- <code><a href="./src/resources/active/v1/instruments/instruments.ts">InstrumentEarnings</a></code>
- <code><a href="./src/resources/active/v1/instruments/instruments.ts">InstrumentQuote</a></code>
- <code><a href="./src/resources/active/v1/instruments/instruments.ts">InstrumentSecurityID</a></code>
- <code><a href="./src/resources/active/v1/instruments/instruments.ts">InstrumentGetInstrumentByIDResponse</a></code>
- <code><a href="./src/resources/active/v1/instruments/instruments.ts">InstrumentGetInstrumentsResponse</a></code>

Methods:

- <code title="get /active/v1/instruments/{security_id_source}/{security_id}">client.active.v1.instruments.<a href="./src/resources/active/v1/instruments/instruments.ts">getInstrumentByID</a>(securityID, { ...params }) -> InstrumentGetInstrumentByIDResponse</code>
- <code title="get /active/v1/instruments">client.active.v1.instruments.<a href="./src/resources/active/v1/instruments/instruments.ts">getInstruments</a>({ ...params }) -> InstrumentGetInstrumentsResponse</code>

#### AnalystReporting

Types:

- <code><a href="./src/resources/active/v1/instruments/analyst-reporting.ts">AnalystDistribution</a></code>
- <code><a href="./src/resources/active/v1/instruments/analyst-reporting.ts">AnalystRating</a></code>
- <code><a href="./src/resources/active/v1/instruments/analyst-reporting.ts">InstrumentAnalystConsensus</a></code>
- <code><a href="./src/resources/active/v1/instruments/analyst-reporting.ts">PriceTarget</a></code>
- <code><a href="./src/resources/active/v1/instruments/analyst-reporting.ts">AnalystReportingGetInstrumentAnalystConsensusResponse</a></code>

Methods:

- <code title="get /active/v1/instruments/{security_id_source}/{security_id}/analyst-reporting">client.active.v1.instruments.analystReporting.<a href="./src/resources/active/v1/instruments/analyst-reporting.ts">getInstrumentAnalystConsensus</a>(securityID, { ...params }) -> AnalystReportingGetInstrumentAnalystConsensusResponse</code>

#### Events

Types:

- <code><a href="./src/resources/active/v1/instruments/events.ts">InstrumentAllEventsData</a></code>
- <code><a href="./src/resources/active/v1/instruments/events.ts">InstrumentDividendEvent</a></code>
- <code><a href="./src/resources/active/v1/instruments/events.ts">InstrumentEventsByDate</a></code>
- <code><a href="./src/resources/active/v1/instruments/events.ts">InstrumentEventsData</a></code>
- <code><a href="./src/resources/active/v1/instruments/events.ts">InstrumentSplitEvent</a></code>
- <code><a href="./src/resources/active/v1/instruments/events.ts">EventGetAllInstrumentEventsResponse</a></code>
- <code><a href="./src/resources/active/v1/instruments/events.ts">EventGetInstrumentEventsResponse</a></code>

Methods:

- <code title="get /active/v1/instruments/events">client.active.v1.instruments.events.<a href="./src/resources/active/v1/instruments/events.ts">getAllInstrumentEvents</a>({ ...params }) -> EventGetAllInstrumentEventsResponse</code>
- <code title="get /active/v1/instruments/{security_id_source}/{security_id}/events">client.active.v1.instruments.events.<a href="./src/resources/active/v1/instruments/events.ts">getInstrumentEvents</a>(securityID, { ...params }) -> EventGetInstrumentEventsResponse</code>

#### News

Types:

- <code><a href="./src/resources/active/v1/instruments/news.ts">InstrumentNews</a></code>
- <code><a href="./src/resources/active/v1/instruments/news.ts">InstrumentNewsList</a></code>
- <code><a href="./src/resources/active/v1/instruments/news.ts">NewsGetInstrumentNewsResponse</a></code>

Methods:

- <code title="get /active/v1/instruments/{security_id_source}/{security_id}/news">client.active.v1.instruments.news.<a href="./src/resources/active/v1/instruments/news.ts">getInstrumentNews</a>(securityID, { ...params }) -> NewsGetInstrumentNewsResponse</code>

#### Reporting

Types:

- <code><a href="./src/resources/active/v1/instruments/reporting.ts">ReportingGetInstrumentReportingResponse</a></code>

Methods:

- <code title="get /active/v1/instruments/{security_id_source}/{security_id}/reporting">client.active.v1.instruments.reporting.<a href="./src/resources/active/v1/instruments/reporting.ts">getInstrumentReporting</a>(securityID, { ...params }) -> ReportingGetInstrumentReportingResponse</code>

#### Venues

Types:

- <code><a href="./src/resources/active/v1/instruments/venues.ts">Venue</a></code>
- <code><a href="./src/resources/active/v1/instruments/venues.ts">VenueList</a></code>
- <code><a href="./src/resources/active/v1/instruments/venues.ts">VenueGetVenuesResponse</a></code>

Methods:

- <code title="get /active/v1/instruments/venues">client.active.v1.instruments.venues.<a href="./src/resources/active/v1/instruments/venues.ts">getVenues</a>() -> VenueGetVenuesResponse</code>

### Iris

Types:

- <code><a href="./src/resources/active/v1/iris/iris.ts">Message</a></code>
- <code><a href="./src/resources/active/v1/iris/iris.ts">Thread</a></code>

#### Feedback

Types:

- <code><a href="./src/resources/active/v1/iris/feedback.ts">CreateFeedbackResponse</a></code>
- <code><a href="./src/resources/active/v1/iris/feedback.ts">FeedbackCreateFeedbackResponse</a></code>

Methods:

- <code title="post /active/v1/iris/feedback">client.active.v1.iris.feedback.<a href="./src/resources/active/v1/iris/feedback.ts">createFeedback</a>({ ...params }) -> FeedbackCreateFeedbackResponse</code>

#### Runs

Types:

- <code><a href="./src/resources/active/v1/iris/runs.ts">CancelRunResponse</a></code>
- <code><a href="./src/resources/active/v1/iris/runs.ts">Capability</a></code>
- <code><a href="./src/resources/active/v1/iris/runs.ts">ContentPart</a></code>
- <code><a href="./src/resources/active/v1/iris/runs.ts">GetRunResponse</a></code>
- <code><a href="./src/resources/active/v1/iris/runs.ts">MessageContent</a></code>
- <code><a href="./src/resources/active/v1/iris/runs.ts">MessageRole</a></code>
- <code><a href="./src/resources/active/v1/iris/runs.ts">Run</a></code>
- <code><a href="./src/resources/active/v1/iris/runs.ts">RunStatus</a></code>
- <code><a href="./src/resources/active/v1/iris/runs.ts">StartRunResponse</a></code>
- <code><a href="./src/resources/active/v1/iris/runs.ts">RunCancelRunResponse</a></code>
- <code><a href="./src/resources/active/v1/iris/runs.ts">RunGetRunResponse</a></code>
- <code><a href="./src/resources/active/v1/iris/runs.ts">RunStartRunResponse</a></code>

Methods:

- <code title="delete /active/v1/iris/runs/{run_id}">client.active.v1.iris.runs.<a href="./src/resources/active/v1/iris/runs.ts">cancelRun</a>(runID, { ...params }) -> RunCancelRunResponse</code>
- <code title="get /active/v1/iris/runs/{run_id}">client.active.v1.iris.runs.<a href="./src/resources/active/v1/iris/runs.ts">getRun</a>(runID, { ...params }) -> RunGetRunResponse</code>
- <code title="post /active/v1/iris/runs">client.active.v1.iris.runs.<a href="./src/resources/active/v1/iris/runs.ts">startRun</a>({ ...params }) -> RunStartRunResponse</code>

#### Threads

Types:

- <code><a href="./src/resources/active/v1/iris/threads/threads.ts">GetThreadResponse</a></code>
- <code><a href="./src/resources/active/v1/iris/threads/threads.ts">ListThreadsResponse</a></code>
- <code><a href="./src/resources/active/v1/iris/threads/threads.ts">ThreadGetThreadResponse</a></code>
- <code><a href="./src/resources/active/v1/iris/threads/threads.ts">ThreadListThreadsResponse</a></code>

Methods:

- <code title="get /active/v1/iris/threads/{thread_id}">client.active.v1.iris.threads.<a href="./src/resources/active/v1/iris/threads/threads.ts">getThread</a>(threadID, { ...params }) -> ThreadGetThreadResponse</code>
- <code title="get /active/v1/iris/threads">client.active.v1.iris.threads.<a href="./src/resources/active/v1/iris/threads/threads.ts">listThreads</a>({ ...params }) -> ThreadListThreadsResponse</code>

##### Messages

Types:

- <code><a href="./src/resources/active/v1/iris/threads/messages.ts">ListMessagesResponse</a></code>
- <code><a href="./src/resources/active/v1/iris/threads/messages.ts">MessageListMessagesResponse</a></code>

Methods:

- <code title="get /active/v1/iris/threads/{thread_id}/messages">client.active.v1.iris.threads.messages.<a href="./src/resources/active/v1/iris/threads/messages.ts">listMessages</a>(threadID, { ...params }) -> MessageListMessagesResponse</code>

### MarketData

#### Snapshot

Types:

- <code><a href="./src/resources/active/v1/market-data/snapshot.ts">MarketDataSnapshot</a></code>
- <code><a href="./src/resources/active/v1/market-data/snapshot.ts">MarketDataSnapshotList</a></code>
- <code><a href="./src/resources/active/v1/market-data/snapshot.ts">SnapshotGetSnapshotsResponse</a></code>

Methods:

- <code title="get /active/v1/market-data/snapshot">client.active.v1.marketData.snapshot.<a href="./src/resources/active/v1/market-data/snapshot.ts">getSnapshots</a>({ ...params }) -> SnapshotGetSnapshotsResponse</code>

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

### Watchlists

Types:

- <code><a href="./src/resources/active/v1/watchlists/watchlists.ts">WatchlistDetail</a></code>
- <code><a href="./src/resources/active/v1/watchlists/watchlists.ts">WatchlistEntry</a></code>
- <code><a href="./src/resources/active/v1/watchlists/watchlists.ts">WatchlistEntryList</a></code>
- <code><a href="./src/resources/active/v1/watchlists/watchlists.ts">WatchlistItemEntry</a></code>
- <code><a href="./src/resources/active/v1/watchlists/watchlists.ts">WatchlistCreateWatchlistResponse</a></code>
- <code><a href="./src/resources/active/v1/watchlists/watchlists.ts">WatchlistGetWatchlistByIDResponse</a></code>
- <code><a href="./src/resources/active/v1/watchlists/watchlists.ts">WatchlistGetWatchlistsResponse</a></code>

Methods:

- <code title="post /active/v1/watchlists">client.active.v1.watchlists.<a href="./src/resources/active/v1/watchlists/watchlists.ts">createWatchlist</a>({ ...params }) -> WatchlistCreateWatchlistResponse</code>
- <code title="delete /active/v1/watchlists/{watchlist_id}">client.active.v1.watchlists.<a href="./src/resources/active/v1/watchlists/watchlists.ts">deleteWatchlist</a>(watchlistID) -> void</code>
- <code title="get /active/v1/watchlists/{watchlist_id}">client.active.v1.watchlists.<a href="./src/resources/active/v1/watchlists/watchlists.ts">getWatchlistByID</a>(watchlistID) -> WatchlistGetWatchlistByIDResponse</code>
- <code title="get /active/v1/watchlists">client.active.v1.watchlists.<a href="./src/resources/active/v1/watchlists/watchlists.ts">getWatchlists</a>() -> WatchlistGetWatchlistsResponse</code>

#### Items

Types:

- <code><a href="./src/resources/active/v1/watchlists/items.ts">AddWatchlistItemData</a></code>
- <code><a href="./src/resources/active/v1/watchlists/items.ts">ItemAddWatchlistItemResponse</a></code>

Methods:

- <code title="post /active/v1/watchlists/{watchlist_id}/items">client.active.v1.watchlists.items.<a href="./src/resources/active/v1/watchlists/items.ts">addWatchlistItem</a>(watchlistID, { ...params }) -> ItemAddWatchlistItemResponse</code>
- <code title="delete /active/v1/watchlists/{watchlist_id}/items/{item_id}">client.active.v1.watchlists.items.<a href="./src/resources/active/v1/watchlists/items.ts">deleteWatchlistItem</a>(itemID, { ...params }) -> void</code>

### Ws

Methods:

- <code title="get /active/v1/ws">client.active.v1.ws.<a href="./src/resources/active/v1/ws.ts">websocketHandler</a>() -> void</code>
