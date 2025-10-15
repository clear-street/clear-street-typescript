# Shared

Types:

- <code><a href="./src/resources/shared.ts">AnyArray</a></code>
- <code><a href="./src/resources/shared.ts">AnyObject</a></code>
- <code><a href="./src/resources/shared.ts">AnyValue</a></code>
- <code><a href="./src/resources/shared.ts">APIError</a></code>
- <code><a href="./src/resources/shared.ts">BaseResponse</a></code>
- <code><a href="./src/resources/shared.ts">ErrorResponse</a></code>

# Active

## V1

Types:

- <code><a href="./src/resources/active/v1/v1.ts">V1RetrieveScreenerResponse</a></code>

Methods:

- <code title="get /active/v1/screener">client.active.v1.<a href="./src/resources/active/v1/v1.ts">retrieveScreener</a>({ ...params }) -> V1RetrieveScreenerResponse</code>

### Accounts

Types:

- <code><a href="./src/resources/active/v1/accounts/accounts.ts">Account</a></code>
- <code><a href="./src/resources/active/v1/accounts/accounts.ts">AccountRetrieveResponse</a></code>
- <code><a href="./src/resources/active/v1/accounts/accounts.ts">AccountListResponse</a></code>
- <code><a href="./src/resources/active/v1/accounts/accounts.ts">AccountRetrieveBalancesResponse</a></code>
- <code><a href="./src/resources/active/v1/accounts/accounts.ts">AccountRetrievePositionsResponse</a></code>
- <code><a href="./src/resources/active/v1/accounts/accounts.ts">AccountUpdateSettingsResponse</a></code>

Methods:

- <code title="get /active/v1/accounts/{account_id}">client.active.v1.accounts.<a href="./src/resources/active/v1/accounts/accounts.ts">retrieve</a>(accountID) -> AccountRetrieveResponse</code>
- <code title="get /active/v1/accounts">client.active.v1.accounts.<a href="./src/resources/active/v1/accounts/accounts.ts">list</a>({ ...params }) -> AccountListResponse</code>
- <code title="get /active/v1/accounts/{account_id}/balances">client.active.v1.accounts.<a href="./src/resources/active/v1/accounts/accounts.ts">retrieveBalances</a>(accountID) -> AccountRetrieveBalancesResponse</code>
- <code title="get /active/v1/accounts/{account_id}/positions">client.active.v1.accounts.<a href="./src/resources/active/v1/accounts/accounts.ts">retrievePositions</a>(accountID, { ...params }) -> AccountRetrievePositionsResponse</code>
- <code title="patch /active/v1/accounts/{account_id}/settings">client.active.v1.accounts.<a href="./src/resources/active/v1/accounts/accounts.ts">updateSettings</a>(accountID, { ...params }) -> AccountUpdateSettingsResponse</code>

#### Orders

Types:

- <code><a href="./src/resources/active/v1/accounts/orders.ts">BaseStrategy</a></code>
- <code><a href="./src/resources/active/v1/accounts/orders.ts">Order</a></code>
- <code><a href="./src/resources/active/v1/accounts/orders.ts">OrderSide</a></code>
- <code><a href="./src/resources/active/v1/accounts/orders.ts">OrderStrategy</a></code>
- <code><a href="./src/resources/active/v1/accounts/orders.ts">OrderType</a></code>
- <code><a href="./src/resources/active/v1/accounts/orders.ts">SecurityIDSource</a></code>
- <code><a href="./src/resources/active/v1/accounts/orders.ts">SecurityType</a></code>
- <code><a href="./src/resources/active/v1/accounts/orders.ts">StrategyType</a></code>
- <code><a href="./src/resources/active/v1/accounts/orders.ts">TimeInForce</a></code>
- <code><a href="./src/resources/active/v1/accounts/orders.ts">OrderCreateResponse</a></code>
- <code><a href="./src/resources/active/v1/accounts/orders.ts">OrderRetrieveResponse</a></code>
- <code><a href="./src/resources/active/v1/accounts/orders.ts">OrderUpdateResponse</a></code>
- <code><a href="./src/resources/active/v1/accounts/orders.ts">OrderListResponse</a></code>
- <code><a href="./src/resources/active/v1/accounts/orders.ts">OrderDeleteResponse</a></code>
- <code><a href="./src/resources/active/v1/accounts/orders.ts">OrderDeleteAllResponse</a></code>

Methods:

- <code title="post /active/v1/accounts/{account_id}/orders">client.active.v1.accounts.orders.<a href="./src/resources/active/v1/accounts/orders.ts">create</a>(accountID, { ...params }) -> OrderCreateResponse</code>
- <code title="get /active/v1/accounts/{account_id}/orders/{order_id}">client.active.v1.accounts.orders.<a href="./src/resources/active/v1/accounts/orders.ts">retrieve</a>(orderID, { ...params }) -> OrderRetrieveResponse</code>
- <code title="put /active/v1/accounts/{account_id}/orders/{order_id}">client.active.v1.accounts.orders.<a href="./src/resources/active/v1/accounts/orders.ts">update</a>(orderID, { ...params }) -> OrderUpdateResponse</code>
- <code title="get /active/v1/accounts/{account_id}/orders">client.active.v1.accounts.orders.<a href="./src/resources/active/v1/accounts/orders.ts">list</a>(accountID, { ...params }) -> OrderListResponse</code>
- <code title="delete /active/v1/accounts/{account_id}/orders/{order_id}">client.active.v1.accounts.orders.<a href="./src/resources/active/v1/accounts/orders.ts">delete</a>(orderID, { ...params }) -> OrderDeleteResponse</code>
- <code title="delete /active/v1/accounts/{account_id}/orders">client.active.v1.accounts.orders.<a href="./src/resources/active/v1/accounts/orders.ts">deleteAll</a>(accountID) -> OrderDeleteAllResponse</code>

#### Locates

Types:

- <code><a href="./src/resources/active/v1/accounts/locates.ts">LocateOrder</a></code>
- <code><a href="./src/resources/active/v1/accounts/locates.ts">LocateCreateResponse</a></code>
- <code><a href="./src/resources/active/v1/accounts/locates.ts">LocateUpdateResponse</a></code>
- <code><a href="./src/resources/active/v1/accounts/locates.ts">LocateListResponse</a></code>
- <code><a href="./src/resources/active/v1/accounts/locates.ts">LocateRetrieveInventoryResponse</a></code>

Methods:

- <code title="post /active/v1/accounts/{account_id}/locates">client.active.v1.accounts.locates.<a href="./src/resources/active/v1/accounts/locates.ts">create</a>(accountID, { ...params }) -> LocateCreateResponse</code>
- <code title="patch /active/v1/accounts/{account_id}/locates/{locate_order_id}">client.active.v1.accounts.locates.<a href="./src/resources/active/v1/accounts/locates.ts">update</a>(locateOrderID, { ...params }) -> LocateUpdateResponse</code>
- <code title="get /active/v1/accounts/{account_id}/locates">client.active.v1.accounts.locates.<a href="./src/resources/active/v1/accounts/locates.ts">list</a>(accountID, { ...params }) -> LocateListResponse</code>
- <code title="get /active/v1/accounts/{account_id}/locates/inventory">client.active.v1.accounts.locates.<a href="./src/resources/active/v1/accounts/locates.ts">retrieveInventory</a>(accountID, { ...params }) -> LocateRetrieveInventoryResponse</code>

### Instruments

Types:

- <code><a href="./src/resources/active/v1/instruments.ts">AnalystRating</a></code>
- <code><a href="./src/resources/active/v1/instruments.ts">FiscalPeriodType</a></code>
- <code><a href="./src/resources/active/v1/instruments.ts">Instrument</a></code>
- <code><a href="./src/resources/active/v1/instruments.ts">InstrumentRetrieveResponse</a></code>
- <code><a href="./src/resources/active/v1/instruments.ts">InstrumentListResponse</a></code>
- <code><a href="./src/resources/active/v1/instruments.ts">InstrumentRetrieveAnalystReportingResponse</a></code>
- <code><a href="./src/resources/active/v1/instruments.ts">InstrumentRetrieveEventsResponse</a></code>
- <code><a href="./src/resources/active/v1/instruments.ts">InstrumentRetrieveNewsResponse</a></code>
- <code><a href="./src/resources/active/v1/instruments.ts">InstrumentRetrieveReportingResponse</a></code>

Methods:

- <code title="get /active/v1/instruments/{instrument_id}">client.active.v1.instruments.<a href="./src/resources/active/v1/instruments.ts">retrieve</a>(instrumentID, { ...params }) -> InstrumentRetrieveResponse</code>
- <code title="get /active/v1/instruments">client.active.v1.instruments.<a href="./src/resources/active/v1/instruments.ts">list</a>({ ...params }) -> InstrumentListResponse</code>
- <code title="get /active/v1/instruments/{instrument_id}/analyst-reporting">client.active.v1.instruments.<a href="./src/resources/active/v1/instruments.ts">retrieveAnalystReporting</a>(instrumentID, { ...params }) -> InstrumentRetrieveAnalystReportingResponse</code>
- <code title="get /active/v1/instruments/{instrument_id}/events">client.active.v1.instruments.<a href="./src/resources/active/v1/instruments.ts">retrieveEvents</a>(instrumentID, { ...params }) -> InstrumentRetrieveEventsResponse</code>
- <code title="get /active/v1/instruments/{instrument_id}/news">client.active.v1.instruments.<a href="./src/resources/active/v1/instruments.ts">retrieveNews</a>(instrumentID, { ...params }) -> InstrumentRetrieveNewsResponse</code>
- <code title="get /active/v1/instruments/{instrument_id}/reporting">client.active.v1.instruments.<a href="./src/resources/active/v1/instruments.ts">retrieveReporting</a>(instrumentID, { ...params }) -> InstrumentRetrieveReportingResponse</code>

### Calendars

Types:

- <code><a href="./src/resources/active/v1/calendars.ts">CalendarRetrieveDividendsResponse</a></code>
- <code><a href="./src/resources/active/v1/calendars.ts">CalendarRetrieveEarningsResponse</a></code>
- <code><a href="./src/resources/active/v1/calendars.ts">CalendarRetrieveEconomicResponse</a></code>
- <code><a href="./src/resources/active/v1/calendars.ts">CalendarRetrieveMarketHoursResponse</a></code>
- <code><a href="./src/resources/active/v1/calendars.ts">CalendarRetrieveMergersAcquisitionsResponse</a></code>
- <code><a href="./src/resources/active/v1/calendars.ts">CalendarRetrieveSplitsResponse</a></code>
- <code><a href="./src/resources/active/v1/calendars.ts">CalendarRetrieveSummaryResponse</a></code>

Methods:

- <code title="get /active/v1/calendars/dividends">client.active.v1.calendars.<a href="./src/resources/active/v1/calendars.ts">retrieveDividends</a>({ ...params }) -> CalendarRetrieveDividendsResponse</code>
- <code title="get /active/v1/calendars/earnings">client.active.v1.calendars.<a href="./src/resources/active/v1/calendars.ts">retrieveEarnings</a>({ ...params }) -> CalendarRetrieveEarningsResponse</code>
- <code title="get /active/v1/calendars/economic">client.active.v1.calendars.<a href="./src/resources/active/v1/calendars.ts">retrieveEconomic</a>({ ...params }) -> CalendarRetrieveEconomicResponse</code>
- <code title="get /active/v1/calendars/market-hours">client.active.v1.calendars.<a href="./src/resources/active/v1/calendars.ts">retrieveMarketHours</a>({ ...params }) -> CalendarRetrieveMarketHoursResponse</code>
- <code title="get /active/v1/calendars/mergers-acquisitions">client.active.v1.calendars.<a href="./src/resources/active/v1/calendars.ts">retrieveMergersAcquisitions</a>({ ...params }) -> CalendarRetrieveMergersAcquisitionsResponse</code>
- <code title="get /active/v1/calendars/splits">client.active.v1.calendars.<a href="./src/resources/active/v1/calendars.ts">retrieveSplits</a>({ ...params }) -> CalendarRetrieveSplitsResponse</code>
- <code title="get /active/v1/calendars/summary">client.active.v1.calendars.<a href="./src/resources/active/v1/calendars.ts">retrieveSummary</a>({ ...params }) -> CalendarRetrieveSummaryResponse</code>

### Version

Types:

- <code><a href="./src/resources/active/v1/version.ts">VersionListResponse</a></code>
- <code><a href="./src/resources/active/v1/version.ts">VersionPatchAllResponse</a></code>

Methods:

- <code title="get /active/v1/version">client.active.v1.version.<a href="./src/resources/active/v1/version.ts">list</a>() -> VersionListResponse</code>
- <code title="patch /active/v1/version">client.active.v1.version.<a href="./src/resources/active/v1/version.ts">patchAll</a>({ ...params }) -> VersionPatchAllResponse</code>

# Polygon

Methods:

- <code title="get /polygon/v1/{polygon_path}">client.polygon.<a href="./src/resources/polygon.ts">retrieve</a>(polygonPath) -> void</code>
