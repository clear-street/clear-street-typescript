# Shared

Types:

- <code><a href="./src/resources/shared.ts">APIError</a></code>
- <code><a href="./src/resources/shared.ts">BaseResponse</a></code>
- <code><a href="./src/resources/shared.ts">ResponseMetadata</a></code>
- <code><a href="./src/resources/shared.ts">SecurityType</a></code>

# Active

## V1

### Accounts

Types:

- <code><a href="./src/resources/active/v1/accounts/accounts.ts">Account</a></code>
- <code><a href="./src/resources/active/v1/accounts/accounts.ts">AccountKind</a></code>
- <code><a href="./src/resources/active/v1/accounts/accounts.ts">AccountStatus</a></code>
- <code><a href="./src/resources/active/v1/accounts/accounts.ts">AccountSubkind</a></code>
- <code><a href="./src/resources/active/v1/accounts/accounts.ts">AccountRetrieveResponse</a></code>
- <code><a href="./src/resources/active/v1/accounts/accounts.ts">AccountUpdateResponse</a></code>
- <code><a href="./src/resources/active/v1/accounts/accounts.ts">AccountListResponse</a></code>

Methods:

- <code title="get /active/v1/accounts/{account_id}">client.active.v1.accounts.<a href="./src/resources/active/v1/accounts/accounts.ts">retrieve</a>(accountID) -> AccountRetrieveResponse</code>
- <code title="patch /active/v1/accounts/{account_id}">client.active.v1.accounts.<a href="./src/resources/active/v1/accounts/accounts.ts">update</a>(accountID, { ...params }) -> AccountUpdateResponse</code>
- <code title="get /active/v1/accounts">client.active.v1.accounts.<a href="./src/resources/active/v1/accounts/accounts.ts">list</a>({ ...params }) -> AccountListResponse</code>

#### Positions

Types:

- <code><a href="./src/resources/active/v1/accounts/positions.ts">Position</a></code>
- <code><a href="./src/resources/active/v1/accounts/positions.ts">PositionType</a></code>
- <code><a href="./src/resources/active/v1/accounts/positions.ts">PositionListResponse</a></code>

Methods:

- <code title="get /active/v1/accounts/{account_id}/positions">client.active.v1.accounts.positions.<a href="./src/resources/active/v1/accounts/positions.ts">list</a>(accountID, { ...params }) -> PositionListResponse</code>

#### Balances

Types:

- <code><a href="./src/resources/active/v1/accounts/balances.ts">AccountBalances</a></code>
- <code><a href="./src/resources/active/v1/accounts/balances.ts">BalanceListResponse</a></code>

Methods:

- <code title="get /active/v1/accounts/{account_id}/balances">client.active.v1.accounts.balances.<a href="./src/resources/active/v1/accounts/balances.ts">list</a>(accountID) -> BalanceListResponse</code>

#### Orders

Types:

- <code><a href="./src/resources/active/v1/accounts/orders.ts">ApStrategy</a></code>
- <code><a href="./src/resources/active/v1/accounts/orders.ts">DarkStrategy</a></code>
- <code><a href="./src/resources/active/v1/accounts/orders.ts">Destination</a></code>
- <code><a href="./src/resources/active/v1/accounts/orders.ts">DmaStrategy</a></code>
- <code><a href="./src/resources/active/v1/accounts/orders.ts">Order</a></code>
- <code><a href="./src/resources/active/v1/accounts/orders.ts">OrderSide</a></code>
- <code><a href="./src/resources/active/v1/accounts/orders.ts">OrderStatus</a></code>
- <code><a href="./src/resources/active/v1/accounts/orders.ts">OrderStrategy</a></code>
- <code><a href="./src/resources/active/v1/accounts/orders.ts">OrderType</a></code>
- <code><a href="./src/resources/active/v1/accounts/orders.ts">PositionEffect</a></code>
- <code><a href="./src/resources/active/v1/accounts/orders.ts">PovStrategy</a></code>
- <code><a href="./src/resources/active/v1/accounts/orders.ts">RiskSettings</a></code>
- <code><a href="./src/resources/active/v1/accounts/orders.ts">SorStrategy</a></code>
- <code><a href="./src/resources/active/v1/accounts/orders.ts">TimeInForce</a></code>
- <code><a href="./src/resources/active/v1/accounts/orders.ts">TwapStrategy</a></code>
- <code><a href="./src/resources/active/v1/accounts/orders.ts">Urgency</a></code>
- <code><a href="./src/resources/active/v1/accounts/orders.ts">VwapStrategy</a></code>
- <code><a href="./src/resources/active/v1/accounts/orders.ts">OrderCreateResponse</a></code>
- <code><a href="./src/resources/active/v1/accounts/orders.ts">OrderRetrieveResponse</a></code>
- <code><a href="./src/resources/active/v1/accounts/orders.ts">OrderUpdateResponse</a></code>
- <code><a href="./src/resources/active/v1/accounts/orders.ts">OrderListResponse</a></code>
- <code><a href="./src/resources/active/v1/accounts/orders.ts">OrderDeleteResponse</a></code>
- <code><a href="./src/resources/active/v1/accounts/orders.ts">OrderDeleteAllResponse</a></code>

Methods:

- <code title="post /active/v1/accounts/{account_id}/orders">client.active.v1.accounts.orders.<a href="./src/resources/active/v1/accounts/orders.ts">create</a>(accountID, [ ...body ]) -> OrderCreateResponse</code>
- <code title="get /active/v1/accounts/{account_id}/orders/{order_id}">client.active.v1.accounts.orders.<a href="./src/resources/active/v1/accounts/orders.ts">retrieve</a>(orderID, { ...params }) -> OrderRetrieveResponse</code>
- <code title="put /active/v1/accounts/{account_id}/orders/{order_id}">client.active.v1.accounts.orders.<a href="./src/resources/active/v1/accounts/orders.ts">update</a>(orderID, { ...params }) -> OrderUpdateResponse</code>
- <code title="get /active/v1/accounts/{account_id}/orders">client.active.v1.accounts.orders.<a href="./src/resources/active/v1/accounts/orders.ts">list</a>(accountID, { ...params }) -> OrderListResponse</code>
- <code title="delete /active/v1/accounts/{account_id}/orders/{order_id}">client.active.v1.accounts.orders.<a href="./src/resources/active/v1/accounts/orders.ts">delete</a>(orderID, { ...params }) -> OrderDeleteResponse</code>
- <code title="delete /active/v1/accounts/{account_id}/orders">client.active.v1.accounts.orders.<a href="./src/resources/active/v1/accounts/orders.ts">deleteAll</a>(accountID) -> OrderDeleteAllResponse</code>

#### Locates

Types:

- <code><a href="./src/resources/active/v1/accounts/locates/locates.ts">LocateOrder</a></code>
- <code><a href="./src/resources/active/v1/accounts/locates/locates.ts">LocateOrderStatus</a></code>
- <code><a href="./src/resources/active/v1/accounts/locates/locates.ts">LocateCreateResponse</a></code>
- <code><a href="./src/resources/active/v1/accounts/locates/locates.ts">LocateUpdateResponse</a></code>
- <code><a href="./src/resources/active/v1/accounts/locates/locates.ts">LocateListResponse</a></code>

Methods:

- <code title="post /active/v1/accounts/{account_id}/locates">client.active.v1.accounts.locates.<a href="./src/resources/active/v1/accounts/locates/locates.ts">create</a>(accountID, [ ...body ]) -> LocateCreateResponse</code>
- <code title="patch /active/v1/accounts/{account_id}/locates">client.active.v1.accounts.locates.<a href="./src/resources/active/v1/accounts/locates/locates.ts">update</a>(accountID, { ...params }) -> LocateUpdateResponse</code>
- <code title="get /active/v1/accounts/{account_id}/locates">client.active.v1.accounts.locates.<a href="./src/resources/active/v1/accounts/locates/locates.ts">list</a>(accountID, { ...params }) -> LocateListResponse</code>

##### LocateInventory

Types:

- <code><a href="./src/resources/active/v1/accounts/locates/locate-inventory.ts">InventoryItem</a></code>
- <code><a href="./src/resources/active/v1/accounts/locates/locate-inventory.ts">LocateInventoryRetrieveResponse</a></code>

Methods:

- <code title="get /active/v1/accounts/{account_id}/locates/inventory">client.active.v1.accounts.locates.locateInventory.<a href="./src/resources/active/v1/accounts/locates/locate-inventory.ts">retrieve</a>(accountID, { ...params }) -> LocateInventoryRetrieveResponse</code>

### Instruments

Types:

- <code><a href="./src/resources/active/v1/instruments/instruments.ts">Instrument</a></code>
- <code><a href="./src/resources/active/v1/instruments/instruments.ts">InstrumentQuote</a></code>
- <code><a href="./src/resources/active/v1/instruments/instruments.ts">InstrumentRetrieveResponse</a></code>
- <code><a href="./src/resources/active/v1/instruments/instruments.ts">InstrumentListResponse</a></code>

Methods:

- <code title="get /active/v1/instruments/{instrument_id}">client.active.v1.instruments.<a href="./src/resources/active/v1/instruments/instruments.ts">retrieve</a>(instrumentID, { ...params }) -> InstrumentRetrieveResponse</code>
- <code title="get /active/v1/instruments">client.active.v1.instruments.<a href="./src/resources/active/v1/instruments/instruments.ts">list</a>({ ...params }) -> InstrumentListResponse</code>

#### Venues

Types:

- <code><a href="./src/resources/active/v1/instruments/venues.ts">DisplayType</a></code>
- <code><a href="./src/resources/active/v1/instruments/venues.ts">GtdAccepts</a></code>
- <code><a href="./src/resources/active/v1/instruments/venues.ts">Venue</a></code>
- <code><a href="./src/resources/active/v1/instruments/venues.ts">VenueSession</a></code>
- <code><a href="./src/resources/active/v1/instruments/venues.ts">VenueListResponse</a></code>

Methods:

- <code title="get /active/v1/instruments/venues">client.active.v1.instruments.venues.<a href="./src/resources/active/v1/instruments/venues.ts">list</a>() -> VenueListResponse</code>

#### Events

Types:

- <code><a href="./src/resources/active/v1/instruments/events.ts">InstrumentEvent</a></code>
- <code><a href="./src/resources/active/v1/instruments/events.ts">InstrumentEventType</a></code>
- <code><a href="./src/resources/active/v1/instruments/events.ts">EventListResponse</a></code>

Methods:

- <code title="get /active/v1/instruments/{instrument_id}/events">client.active.v1.instruments.events.<a href="./src/resources/active/v1/instruments/events.ts">list</a>(instrumentID, { ...params }) -> EventListResponse</code>

#### Reporting

Types:

- <code><a href="./src/resources/active/v1/instruments/reporting.ts">FiscalPeriodType</a></code>
- <code><a href="./src/resources/active/v1/instruments/reporting.ts">InstrumentEarnings</a></code>
- <code><a href="./src/resources/active/v1/instruments/reporting.ts">ReportingListResponse</a></code>

Methods:

- <code title="get /active/v1/instruments/{instrument_id}/reporting">client.active.v1.instruments.reporting.<a href="./src/resources/active/v1/instruments/reporting.ts">list</a>(instrumentID, { ...params }) -> ReportingListResponse</code>

#### AnalystReporting

Types:

- <code><a href="./src/resources/active/v1/instruments/analyst-reporting.ts">AnalystDistribution</a></code>
- <code><a href="./src/resources/active/v1/instruments/analyst-reporting.ts">AnalystRating</a></code>
- <code><a href="./src/resources/active/v1/instruments/analyst-reporting.ts">InstrumentAnalystConsensus</a></code>
- <code><a href="./src/resources/active/v1/instruments/analyst-reporting.ts">PriceTarget</a></code>
- <code><a href="./src/resources/active/v1/instruments/analyst-reporting.ts">AnalystReportingListResponse</a></code>

Methods:

- <code title="get /active/v1/instruments/{instrument_id}/analyst-reporting">client.active.v1.instruments.analystReporting.<a href="./src/resources/active/v1/instruments/analyst-reporting.ts">list</a>(instrumentID, { ...params }) -> AnalystReportingListResponse</code>

#### News

Types:

- <code><a href="./src/resources/active/v1/instruments/news.ts">News</a></code>
- <code><a href="./src/resources/active/v1/instruments/news.ts">NewsType</a></code>
- <code><a href="./src/resources/active/v1/instruments/news.ts">NewsListResponse</a></code>

Methods:

- <code title="get /active/v1/instruments/{instrument_id}/news">client.active.v1.instruments.news.<a href="./src/resources/active/v1/instruments/news.ts">list</a>(instrumentID, { ...params }) -> NewsListResponse</code>

### Calendars

#### Economic

Types:

- <code><a href="./src/resources/active/v1/calendars/economic.ts">EconomicCalendarEvent</a></code>
- <code><a href="./src/resources/active/v1/calendars/economic.ts">EconomicEventImpact</a></code>
- <code><a href="./src/resources/active/v1/calendars/economic.ts">EconomicListResponse</a></code>

Methods:

- <code title="get /active/v1/calendars/economic">client.active.v1.calendars.economic.<a href="./src/resources/active/v1/calendars/economic.ts">list</a>({ ...params }) -> EconomicListResponse</code>

#### Earnings

Types:

- <code><a href="./src/resources/active/v1/calendars/earnings.ts">EarningsCalendarEvent</a></code>
- <code><a href="./src/resources/active/v1/calendars/earnings.ts">EarningListResponse</a></code>

Methods:

- <code title="get /active/v1/calendars/earnings">client.active.v1.calendars.earnings.<a href="./src/resources/active/v1/calendars/earnings.ts">list</a>({ ...params }) -> EarningListResponse</code>

#### Dividends

Types:

- <code><a href="./src/resources/active/v1/calendars/dividends.ts">DividendCalendarEvent</a></code>
- <code><a href="./src/resources/active/v1/calendars/dividends.ts">DividendFrequency</a></code>
- <code><a href="./src/resources/active/v1/calendars/dividends.ts">DividendListResponse</a></code>

Methods:

- <code title="get /active/v1/calendars/dividends">client.active.v1.calendars.dividends.<a href="./src/resources/active/v1/calendars/dividends.ts">list</a>({ ...params }) -> DividendListResponse</code>

#### Splits

Types:

- <code><a href="./src/resources/active/v1/calendars/splits.ts">StockSplitEvent</a></code>
- <code><a href="./src/resources/active/v1/calendars/splits.ts">SplitListResponse</a></code>

Methods:

- <code title="get /active/v1/calendars/splits">client.active.v1.calendars.splits.<a href="./src/resources/active/v1/calendars/splits.ts">list</a>({ ...params }) -> SplitListResponse</code>

#### MergersAcquisitions

Types:

- <code><a href="./src/resources/active/v1/calendars/mergers-acquisitions.ts">MergersAcquisitionsEvent</a></code>
- <code><a href="./src/resources/active/v1/calendars/mergers-acquisitions.ts">MergersAcquisitionListResponse</a></code>

Methods:

- <code title="get /active/v1/calendars/mergers-acquisitions">client.active.v1.calendars.mergersAcquisitions.<a href="./src/resources/active/v1/calendars/mergers-acquisitions.ts">list</a>({ ...params }) -> MergersAcquisitionListResponse</code>

#### MarketHours

Types:

- <code><a href="./src/resources/active/v1/calendars/market-hours.ts">MarketHours</a></code>
- <code><a href="./src/resources/active/v1/calendars/market-hours.ts">MarketHourRetrieveResponse</a></code>

Methods:

- <code title="get /active/v1/calendars/market-hours">client.active.v1.calendars.marketHours.<a href="./src/resources/active/v1/calendars/market-hours.ts">retrieve</a>({ ...params }) -> MarketHourRetrieveResponse</code>

#### Summary

Types:

- <code><a href="./src/resources/active/v1/calendars/summary.ts">CalendarDateSummary</a></code>
- <code><a href="./src/resources/active/v1/calendars/summary.ts">SummaryListResponse</a></code>

Methods:

- <code title="get /active/v1/calendars/summary">client.active.v1.calendars.summary.<a href="./src/resources/active/v1/calendars/summary.ts">list</a>({ ...params }) -> SummaryListResponse</code>

### Version

Types:

- <code><a href="./src/resources/active/v1/version.ts">Version</a></code>
- <code><a href="./src/resources/active/v1/version.ts">VersionRetrieveResponse</a></code>
- <code><a href="./src/resources/active/v1/version.ts">VersionUpdateResponse</a></code>

Methods:

- <code title="get /active/v1/version">client.active.v1.version.<a href="./src/resources/active/v1/version.ts">retrieve</a>() -> VersionRetrieveResponse</code>
- <code title="patch /active/v1/version">client.active.v1.version.<a href="./src/resources/active/v1/version.ts">update</a>() -> VersionUpdateResponse</code>

### Screener

Types:

- <code><a href="./src/resources/active/v1/screener.ts">ScreenerItem</a></code>
- <code><a href="./src/resources/active/v1/screener.ts">ScreenerListResponse</a></code>

Methods:

- <code title="get /active/v1/screener">client.active.v1.screener.<a href="./src/resources/active/v1/screener.ts">list</a>({ ...params }) -> ScreenerListResponse</code>
