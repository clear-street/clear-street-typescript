# Shared

Types:

- <code><a href="./src/resources/shared.ts">APIError</a></code>
- <code><a href="./src/resources/shared.ts">BaseResponse</a></code>
- <code><a href="./src/resources/shared.ts">ResponseMetadata</a></code>

# Active

## V1

Types:

- <code><a href="./src/resources/active/v1/v1.ts">APIDecimal64</a></code>
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
- <code><a href="./src/resources/active/v1/accounts/balances.ts">AccountBalancesSod</a></code>
- <code><a href="./src/resources/active/v1/accounts/balances.ts">MarginDetails</a></code>
- <code><a href="./src/resources/active/v1/accounts/balances.ts">MarginDetailsUsage</a></code>
- <code><a href="./src/resources/active/v1/accounts/balances.ts">MarginTopContributor</a></code>
- <code><a href="./src/resources/active/v1/accounts/balances.ts">MarginType</a></code>
- <code><a href="./src/resources/active/v1/accounts/balances.ts">BalanceGetAccountBalancesResponse</a></code>

Methods:

- <code title="get /active/v1/accounts/{account_id}/balances">client.active.v1.accounts.balances.<a href="./src/resources/active/v1/accounts/balances.ts">getAccountBalances</a>(accountID, { ...params }) -> BalanceGetAccountBalancesResponse</code>

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
- <code><a href="./src/resources/active/v1/accounts/orders.ts">DmaStrategy</a></code>
- <code><a href="./src/resources/active/v1/accounts/orders.ts">Order</a></code>
- <code><a href="./src/resources/active/v1/accounts/orders.ts">OrderList</a></code>
- <code><a href="./src/resources/active/v1/accounts/orders.ts">OrderStatus</a></code>
- <code><a href="./src/resources/active/v1/accounts/orders.ts">OrderStrategy</a></code>
- <code><a href="./src/resources/active/v1/accounts/orders.ts">OrderType</a></code>
- <code><a href="./src/resources/active/v1/accounts/orders.ts">PovStrategy</a></code>
- <code><a href="./src/resources/active/v1/accounts/orders.ts">Side</a></code>
- <code><a href="./src/resources/active/v1/accounts/orders.ts">SorStrategy</a></code>
- <code><a href="./src/resources/active/v1/accounts/orders.ts">TimeInForce</a></code>
- <code><a href="./src/resources/active/v1/accounts/orders.ts">TrailingOffsetType</a></code>
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
- <code><a href="./src/resources/active/v1/accounts/positions.ts">PositionType</a></code>
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

### Calendars

#### Dividends

Types:

- <code><a href="./src/resources/active/v1/calendars/dividends.ts">DividendCalendarEvent</a></code>
- <code><a href="./src/resources/active/v1/calendars/dividends.ts">DividendCalendarEventList</a></code>
- <code><a href="./src/resources/active/v1/calendars/dividends.ts">DividendFrequency</a></code>
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
- <code><a href="./src/resources/active/v1/calendars/economic.ts">EconomicEventImpact</a></code>
- <code><a href="./src/resources/active/v1/calendars/economic.ts">EconomicGetEconomicCalendarResponse</a></code>

Methods:

- <code title="get /active/v1/calendars/economic">client.active.v1.calendars.economic.<a href="./src/resources/active/v1/calendars/economic.ts">getEconomicCalendar</a>({ ...params }) -> EconomicGetEconomicCalendarResponse</code>

#### MarketHours

Types:

- <code><a href="./src/resources/active/v1/calendars/market-hours.ts">DayType</a></code>
- <code><a href="./src/resources/active/v1/calendars/market-hours.ts">MarketHoursDetail</a></code>
- <code><a href="./src/resources/active/v1/calendars/market-hours.ts">MarketHoursDetailList</a></code>
- <code><a href="./src/resources/active/v1/calendars/market-hours.ts">MarketSessionType</a></code>
- <code><a href="./src/resources/active/v1/calendars/market-hours.ts">MarketStatus</a></code>
- <code><a href="./src/resources/active/v1/calendars/market-hours.ts">MarketType</a></code>
- <code><a href="./src/resources/active/v1/calendars/market-hours.ts">SessionSchedule</a></code>
- <code><a href="./src/resources/active/v1/calendars/market-hours.ts">TradingSessions</a></code>
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

### Clock

Types:

- <code><a href="./src/resources/active/v1/clock.ts">ClockDetail</a></code>
- <code><a href="./src/resources/active/v1/clock.ts">ClockGetClockResponse</a></code>

Methods:

- <code title="get /active/v1/clock">client.active.v1.clock.<a href="./src/resources/active/v1/clock.ts">getClock</a>() -> ClockGetClockResponse</code>

### Instruments

Types:

- <code><a href="./src/resources/active/v1/instruments/instruments.ts">AnalystRating</a></code>
- <code><a href="./src/resources/active/v1/instruments/instruments.ts">ContractType</a></code>
- <code><a href="./src/resources/active/v1/instruments/instruments.ts">ExerciseStyle</a></code>
- <code><a href="./src/resources/active/v1/instruments/instruments.ts">Instrument</a></code>
- <code><a href="./src/resources/active/v1/instruments/instruments.ts">InstrumentCore</a></code>
- <code><a href="./src/resources/active/v1/instruments/instruments.ts">InstrumentCoreList</a></code>
- <code><a href="./src/resources/active/v1/instruments/instruments.ts">InstrumentEarnings</a></code>
- <code><a href="./src/resources/active/v1/instruments/instruments.ts">InstrumentQuote</a></code>
- <code><a href="./src/resources/active/v1/instruments/instruments.ts">InstrumentSecurityID</a></code>
- <code><a href="./src/resources/active/v1/instruments/instruments.ts">ListingType</a></code>
- <code><a href="./src/resources/active/v1/instruments/instruments.ts">OptionsContract</a></code>
- <code><a href="./src/resources/active/v1/instruments/instruments.ts">OptionsContractList</a></code>
- <code><a href="./src/resources/active/v1/instruments/instruments.ts">InstrumentGetInstrumentByIDResponse</a></code>
- <code><a href="./src/resources/active/v1/instruments/instruments.ts">InstrumentGetInstrumentsResponse</a></code>

Methods:

- <code title="get /active/v1/instruments/{security_id_source}/{security_id}">client.active.v1.instruments.<a href="./src/resources/active/v1/instruments/instruments.ts">getInstrumentByID</a>(securityID, { ...params }) -> InstrumentGetInstrumentByIDResponse</code>
- <code title="get /active/v1/instruments">client.active.v1.instruments.<a href="./src/resources/active/v1/instruments/instruments.ts">getInstruments</a>({ ...params }) -> InstrumentGetInstrumentsResponse</code>

#### AnalystReporting

Types:

- <code><a href="./src/resources/active/v1/instruments/analyst-reporting.ts">AnalystDistribution</a></code>
- <code><a href="./src/resources/active/v1/instruments/analyst-reporting.ts">InstrumentAnalystConsensus</a></code>
- <code><a href="./src/resources/active/v1/instruments/analyst-reporting.ts">PriceTarget</a></code>
- <code><a href="./src/resources/active/v1/instruments/analyst-reporting.ts">AnalystReportingGetInstrumentAnalystConsensusResponse</a></code>

Methods:

- <code title="get /active/v1/instruments/{security_id_source}/{security_id}/analyst-reporting">client.active.v1.instruments.analystReporting.<a href="./src/resources/active/v1/instruments/analyst-reporting.ts">getInstrumentAnalystConsensus</a>(securityID, { ...params }) -> AnalystReportingGetInstrumentAnalystConsensusResponse</code>

#### Events

Types:

- <code><a href="./src/resources/active/v1/instruments/events.ts">AllEventsEventType</a></code>
- <code><a href="./src/resources/active/v1/instruments/events.ts">InstrumentAllEventsData</a></code>
- <code><a href="./src/resources/active/v1/instruments/events.ts">InstrumentDividendEvent</a></code>
- <code><a href="./src/resources/active/v1/instruments/events.ts">InstrumentEventEnvelope</a></code>
- <code><a href="./src/resources/active/v1/instruments/events.ts">InstrumentEventIpoItem</a></code>
- <code><a href="./src/resources/active/v1/instruments/events.ts">InstrumentEventsByDate</a></code>
- <code><a href="./src/resources/active/v1/instruments/events.ts">InstrumentEventsData</a></code>
- <code><a href="./src/resources/active/v1/instruments/events.ts">InstrumentSplitEvent</a></code>
- <code><a href="./src/resources/active/v1/instruments/events.ts">EventGetAllInstrumentEventsResponse</a></code>
- <code><a href="./src/resources/active/v1/instruments/events.ts">EventGetInstrumentEventsResponse</a></code>

Methods:

- <code title="get /active/v1/instruments/events">client.active.v1.instruments.events.<a href="./src/resources/active/v1/instruments/events.ts">getAllInstrumentEvents</a>({ ...params }) -> EventGetAllInstrumentEventsResponse</code>
- <code title="get /active/v1/instruments/{security_id_source}/{security_id}/events">client.active.v1.instruments.events.<a href="./src/resources/active/v1/instruments/events.ts">getInstrumentEvents</a>(securityID, { ...params }) -> EventGetInstrumentEventsResponse</code>

#### Options

##### Contracts

Types:

- <code><a href="./src/resources/active/v1/instruments/options/contracts.ts">ContractGetOptionContractsResponse</a></code>

Methods:

- <code title="get /active/v1/instruments/options/contracts">client.active.v1.instruments.options.contracts.<a href="./src/resources/active/v1/instruments/options/contracts.ts">getOptionContracts</a>({ ...params }) -> ContractGetOptionContractsResponse</code>

#### Reporting

Types:

- <code><a href="./src/resources/active/v1/instruments/reporting.ts">ReportingGetInstrumentReportingResponse</a></code>

Methods:

- <code title="get /active/v1/instruments/{security_id_source}/{security_id}/reporting">client.active.v1.instruments.reporting.<a href="./src/resources/active/v1/instruments/reporting.ts">getInstrumentReporting</a>(securityID, { ...params }) -> ReportingGetInstrumentReportingResponse</code>

#### Venues

Types:

- <code><a href="./src/resources/active/v1/instruments/venues.ts">DisplayType</a></code>
- <code><a href="./src/resources/active/v1/instruments/venues.ts">GtdAccepts</a></code>
- <code><a href="./src/resources/active/v1/instruments/venues.ts">Venue</a></code>
- <code><a href="./src/resources/active/v1/instruments/venues.ts">VenueList</a></code>
- <code><a href="./src/resources/active/v1/instruments/venues.ts">VenueSession</a></code>
- <code><a href="./src/resources/active/v1/instruments/venues.ts">VenueGetVenuesResponse</a></code>

Methods:

- <code title="get /active/v1/instruments/venues">client.active.v1.instruments.venues.<a href="./src/resources/active/v1/instruments/venues.ts">getVenues</a>() -> VenueGetVenuesResponse</code>

### Iris

#### Feedback

Types:

- <code><a href="./src/resources/active/v1/iris/feedback.ts">FeedbackCreateFeedbackDeprecatedResponse</a></code>

Methods:

- <code title="post /active/v1/iris/feedback">client.active.v1.iris.feedback.<a href="./src/resources/active/v1/iris/feedback.ts">createFeedbackDeprecated</a>({ ...params }) -> FeedbackCreateFeedbackDeprecatedResponse</code>

#### Runs

Types:

- <code><a href="./src/resources/active/v1/iris/runs.ts">RunCancelRunDeprecatedResponse</a></code>
- <code><a href="./src/resources/active/v1/iris/runs.ts">RunGetRunDeprecatedResponse</a></code>
- <code><a href="./src/resources/active/v1/iris/runs.ts">RunStartRunDeprecatedResponse</a></code>

Methods:

- <code title="delete /active/v1/iris/runs/{run_id}">client.active.v1.iris.runs.<a href="./src/resources/active/v1/iris/runs.ts">cancelRunDeprecated</a>(runID, { ...params }) -> RunCancelRunDeprecatedResponse</code>
- <code title="get /active/v1/iris/runs/{run_id}">client.active.v1.iris.runs.<a href="./src/resources/active/v1/iris/runs.ts">getRunDeprecated</a>(runID, { ...params }) -> RunGetRunDeprecatedResponse</code>
- <code title="post /active/v1/iris/runs">client.active.v1.iris.runs.<a href="./src/resources/active/v1/iris/runs.ts">startRunDeprecated</a>({ ...params }) -> RunStartRunDeprecatedResponse</code>

#### Threads

Types:

- <code><a href="./src/resources/active/v1/iris/threads/threads.ts">ThreadGetThreadDeprecatedResponse</a></code>
- <code><a href="./src/resources/active/v1/iris/threads/threads.ts">ThreadListThreadsDeprecatedResponse</a></code>

Methods:

- <code title="get /active/v1/iris/threads/{thread_id}">client.active.v1.iris.threads.<a href="./src/resources/active/v1/iris/threads/threads.ts">getThreadDeprecated</a>(threadID, { ...params }) -> ThreadGetThreadDeprecatedResponse</code>
- <code title="get /active/v1/iris/threads">client.active.v1.iris.threads.<a href="./src/resources/active/v1/iris/threads/threads.ts">listThreadsDeprecated</a>({ ...params }) -> ThreadListThreadsDeprecatedResponse</code>

##### Messages

Types:

- <code><a href="./src/resources/active/v1/iris/threads/messages.ts">MessageListMessagesDeprecatedResponse</a></code>

Methods:

- <code title="get /active/v1/iris/threads/{thread_id}/messages">client.active.v1.iris.threads.messages.<a href="./src/resources/active/v1/iris/threads/messages.ts">listMessagesDeprecated</a>(threadID, { ...params }) -> MessageListMessagesDeprecatedResponse</code>

### MarketData

#### Snapshot

Types:

- <code><a href="./src/resources/active/v1/market-data/snapshot.ts">MarketDataSnapshot</a></code>
- <code><a href="./src/resources/active/v1/market-data/snapshot.ts">MarketDataSnapshotList</a></code>
- <code><a href="./src/resources/active/v1/market-data/snapshot.ts">SnapshotLastTrade</a></code>
- <code><a href="./src/resources/active/v1/market-data/snapshot.ts">SnapshotQuote</a></code>
- <code><a href="./src/resources/active/v1/market-data/snapshot.ts">SnapshotSession</a></code>
- <code><a href="./src/resources/active/v1/market-data/snapshot.ts">SnapshotGetSnapshotsResponse</a></code>

Methods:

- <code title="get /active/v1/market-data/snapshot">client.active.v1.marketData.snapshot.<a href="./src/resources/active/v1/market-data/snapshot.ts">getSnapshots</a>({ ...params }) -> SnapshotGetSnapshotsResponse</code>

### News

Types:

- <code><a href="./src/resources/active/v1/news.ts">NewsInstrument</a></code>
- <code><a href="./src/resources/active/v1/news.ts">NewsItem</a></code>
- <code><a href="./src/resources/active/v1/news.ts">NewsItemList</a></code>
- <code><a href="./src/resources/active/v1/news.ts">NewsType</a></code>
- <code><a href="./src/resources/active/v1/news.ts">NewsGetNewsResponse</a></code>

Methods:

- <code title="get /active/v1/news">client.active.v1.news.<a href="./src/resources/active/v1/news.ts">getNews</a>({ ...params }) -> NewsGetNewsResponse</code>

### OmniAI

Types:

- <code><a href="./src/resources/active/v1/omni-ai/omni-ai.ts">ActionButton</a></code>
- <code><a href="./src/resources/active/v1/omni-ai/omni-ai.ts">ButtonAction</a></code>
- <code><a href="./src/resources/active/v1/omni-ai/omni-ai.ts">CancelRunResponse</a></code>
- <code><a href="./src/resources/active/v1/omni-ai/omni-ai.ts">Capability</a></code>
- <code><a href="./src/resources/active/v1/omni-ai/omni-ai.ts">ChartKind</a></code>
- <code><a href="./src/resources/active/v1/omni-ai/omni-ai.ts">ChartPoint</a></code>
- <code><a href="./src/resources/active/v1/omni-ai/omni-ai.ts">ChartSeries</a></code>
- <code><a href="./src/resources/active/v1/omni-ai/omni-ai.ts">ContentPart</a></code>
- <code><a href="./src/resources/active/v1/omni-ai/omni-ai.ts">ContentPartChart</a></code>
- <code><a href="./src/resources/active/v1/omni-ai/omni-ai.ts">ContentPartSuggestedActions</a></code>
- <code><a href="./src/resources/active/v1/omni-ai/omni-ai.ts">ContentPartText</a></code>
- <code><a href="./src/resources/active/v1/omni-ai/omni-ai.ts">ContentPartThinking</a></code>
- <code><a href="./src/resources/active/v1/omni-ai/omni-ai.ts">CreateFeedbackResponse</a></code>
- <code><a href="./src/resources/active/v1/omni-ai/omni-ai.ts">DataChart</a></code>
- <code><a href="./src/resources/active/v1/omni-ai/omni-ai.ts">GetRunResponse</a></code>
- <code><a href="./src/resources/active/v1/omni-ai/omni-ai.ts">GetThreadResponse</a></code>
- <code><a href="./src/resources/active/v1/omni-ai/omni-ai.ts">ListMessagesResponse</a></code>
- <code><a href="./src/resources/active/v1/omni-ai/omni-ai.ts">ListThreadsResponse</a></code>
- <code><a href="./src/resources/active/v1/omni-ai/omni-ai.ts">Message</a></code>
- <code><a href="./src/resources/active/v1/omni-ai/omni-ai.ts">MessageContent</a></code>
- <code><a href="./src/resources/active/v1/omni-ai/omni-ai.ts">MessageRole</a></code>
- <code><a href="./src/resources/active/v1/omni-ai/omni-ai.ts">NavigateAction</a></code>
- <code><a href="./src/resources/active/v1/omni-ai/omni-ai.ts">OpenChartAction</a></code>
- <code><a href="./src/resources/active/v1/omni-ai/omni-ai.ts">OpenChatWindowAction</a></code>
- <code><a href="./src/resources/active/v1/omni-ai/omni-ai.ts">OpenScreenerAction</a></code>
- <code><a href="./src/resources/active/v1/omni-ai/omni-ai.ts">OrderPayload</a></code>
- <code><a href="./src/resources/active/v1/omni-ai/omni-ai.ts">OrderStrategyType</a></code>
- <code><a href="./src/resources/active/v1/omni-ai/omni-ai.ts">PrefillOrderAction</a></code>
- <code><a href="./src/resources/active/v1/omni-ai/omni-ai.ts">PromptButtonAction</a></code>
- <code><a href="./src/resources/active/v1/omni-ai/omni-ai.ts">Run</a></code>
- <code><a href="./src/resources/active/v1/omni-ai/omni-ai.ts">RunStatus</a></code>
- <code><a href="./src/resources/active/v1/omni-ai/omni-ai.ts">StartRunResponse</a></code>
- <code><a href="./src/resources/active/v1/omni-ai/omni-ai.ts">StructuredAction</a></code>
- <code><a href="./src/resources/active/v1/omni-ai/omni-ai.ts">StructuredActionButtonAction</a></code>
- <code><a href="./src/resources/active/v1/omni-ai/omni-ai.ts">SymbolChart</a></code>
- <code><a href="./src/resources/active/v1/omni-ai/omni-ai.ts">Thread</a></code>

#### Feedback

Types:

- <code><a href="./src/resources/active/v1/omni-ai/feedback.ts">FeedbackCreateFeedbackResponse</a></code>

Methods:

- <code title="post /active/v1/omni-ai/feedback">client.active.v1.omniAI.feedback.<a href="./src/resources/active/v1/omni-ai/feedback.ts">createFeedback</a>({ ...params }) -> FeedbackCreateFeedbackResponse</code>

#### Runs

Types:

- <code><a href="./src/resources/active/v1/omni-ai/runs.ts">RunCancelRunResponse</a></code>
- <code><a href="./src/resources/active/v1/omni-ai/runs.ts">RunGetRunResponse</a></code>
- <code><a href="./src/resources/active/v1/omni-ai/runs.ts">RunStartRunResponse</a></code>

Methods:

- <code title="delete /active/v1/omni-ai/runs/{run_id}">client.active.v1.omniAI.runs.<a href="./src/resources/active/v1/omni-ai/runs.ts">cancelRun</a>(runID, { ...params }) -> RunCancelRunResponse</code>
- <code title="get /active/v1/omni-ai/runs/{run_id}">client.active.v1.omniAI.runs.<a href="./src/resources/active/v1/omni-ai/runs.ts">getRun</a>(runID, { ...params }) -> RunGetRunResponse</code>
- <code title="post /active/v1/omni-ai/runs">client.active.v1.omniAI.runs.<a href="./src/resources/active/v1/omni-ai/runs.ts">startRun</a>({ ...params }) -> RunStartRunResponse</code>

#### Threads

Types:

- <code><a href="./src/resources/active/v1/omni-ai/threads/threads.ts">ThreadGetThreadResponse</a></code>
- <code><a href="./src/resources/active/v1/omni-ai/threads/threads.ts">ThreadListThreadsResponse</a></code>

Methods:

- <code title="get /active/v1/omni-ai/threads/{thread_id}">client.active.v1.omniAI.threads.<a href="./src/resources/active/v1/omni-ai/threads/threads.ts">getThread</a>(threadID, { ...params }) -> ThreadGetThreadResponse</code>
- <code title="get /active/v1/omni-ai/threads">client.active.v1.omniAI.threads.<a href="./src/resources/active/v1/omni-ai/threads/threads.ts">listThreads</a>({ ...params }) -> ThreadListThreadsResponse</code>

##### Messages

Types:

- <code><a href="./src/resources/active/v1/omni-ai/threads/messages.ts">MessageListMessagesResponse</a></code>

Methods:

- <code title="get /active/v1/omni-ai/threads/{thread_id}/messages">client.active.v1.omniAI.threads.messages.<a href="./src/resources/active/v1/omni-ai/threads/messages.ts">listMessages</a>(threadID, { ...params }) -> MessageListMessagesResponse</code>

### SavedScreeners

Types:

- <code><a href="./src/resources/active/v1/saved-screeners.ts">SavedScreenerFilter</a></code>
- <code><a href="./src/resources/active/v1/saved-screeners.ts">ScreenerEntry</a></code>
- <code><a href="./src/resources/active/v1/saved-screeners.ts">ScreenerEntryList</a></code>
- <code><a href="./src/resources/active/v1/saved-screeners.ts">SavedScreenerCreateScreenerResponse</a></code>
- <code><a href="./src/resources/active/v1/saved-screeners.ts">SavedScreenerGetScreenerByIDResponse</a></code>
- <code><a href="./src/resources/active/v1/saved-screeners.ts">SavedScreenerListScreenersResponse</a></code>
- <code><a href="./src/resources/active/v1/saved-screeners.ts">SavedScreenerUpdateScreenerResponse</a></code>

Methods:

- <code title="post /active/v1/saved-screeners">client.active.v1.savedScreeners.<a href="./src/resources/active/v1/saved-screeners.ts">createScreener</a>({ ...params }) -> SavedScreenerCreateScreenerResponse</code>
- <code title="delete /active/v1/saved-screeners/{screener_id}">client.active.v1.savedScreeners.<a href="./src/resources/active/v1/saved-screeners.ts">deleteScreener</a>(screenerID) -> void</code>
- <code title="get /active/v1/saved-screeners/{screener_id}">client.active.v1.savedScreeners.<a href="./src/resources/active/v1/saved-screeners.ts">getScreenerByID</a>(screenerID) -> SavedScreenerGetScreenerByIDResponse</code>
- <code title="get /active/v1/saved-screeners">client.active.v1.savedScreeners.<a href="./src/resources/active/v1/saved-screeners.ts">listScreeners</a>() -> SavedScreenerListScreenersResponse</code>
- <code title="put /active/v1/saved-screeners/{screener_id}">client.active.v1.savedScreeners.<a href="./src/resources/active/v1/saved-screeners.ts">updateScreener</a>(screenerID, { ...params }) -> SavedScreenerUpdateScreenerResponse</code>

### Screener

Types:

- <code><a href="./src/resources/active/v1/screener.ts">FieldLookback</a></code>
- <code><a href="./src/resources/active/v1/screener.ts">FieldPeriod</a></code>
- <code><a href="./src/resources/active/v1/screener.ts">FieldRef</a></code>
- <code><a href="./src/resources/active/v1/screener.ts">FieldType</a></code>
- <code><a href="./src/resources/active/v1/screener.ts">ScreenerColumn</a></code>
- <code><a href="./src/resources/active/v1/screener.ts">ScreenerFilter</a></code>
- <code><a href="./src/resources/active/v1/screener.ts">ScreenerItem</a></code>
- <code><a href="./src/resources/active/v1/screener.ts">ScreenerItemList</a></code>
- <code><a href="./src/resources/active/v1/screener.ts">ScreenerRow</a></code>
- <code><a href="./src/resources/active/v1/screener.ts">ScreenerRowList</a></code>
- <code><a href="./src/resources/active/v1/screener.ts">ScreenerGetScreenerResponse</a></code>
- <code><a href="./src/resources/active/v1/screener.ts">ScreenerSearchScreenerResponse</a></code>

Methods:

- <code title="get /active/v1/screener">client.active.v1.screener.<a href="./src/resources/active/v1/screener.ts">getScreener</a>({ ...params }) -> ScreenerGetScreenerResponse</code>
- <code title="post /active/v1/screener">client.active.v1.screener.<a href="./src/resources/active/v1/screener.ts">searchScreener</a>({ ...params }) -> ScreenerSearchScreenerResponse</code>

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
