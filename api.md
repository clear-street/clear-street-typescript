# Shared

Types:

- <code><a href="./src/resources/shared.ts">AnyArray</a></code>
- <code><a href="./src/resources/shared.ts">AnyObject</a></code>
- <code><a href="./src/resources/shared.ts">AnyValue</a></code>
- <code><a href="./src/resources/shared.ts">APIDecimal64</a></code>
- <code><a href="./src/resources/shared.ts">BaseResponse</a></code>
- <code><a href="./src/resources/shared.ts">MantissaExponent</a></code>
- <code><a href="./src/resources/shared.ts">NanoSeconds</a></code>

# Common

Types:

- <code><a href="./src/resources/common.ts">APIProblem</a></code>
- <code><a href="./src/resources/common.ts">ResponseMetadata</a></code>

# Accounts

Types:

- <code><a href="./src/resources/accounts/accounts.ts">AccountRetrieveResponse</a></code>

Methods:

- <code title="get /trade/v1/accounts/{account_id}">client.accounts.<a href="./src/resources/accounts/accounts.ts">retrieve</a>(accountID) -> AccountRetrieveResponse</code>

## Positions

Types:

- <code><a href="./src/resources/accounts/positions.ts">Position</a></code>
- <code><a href="./src/resources/accounts/positions.ts">PositionListResponse</a></code>

Methods:

- <code title="get /trade/v1/accounts/{account_id}/positions">client.accounts.positions.<a href="./src/resources/accounts/positions.ts">list</a>(accountID) -> PositionListResponse</code>

# Instruments

Types:

- <code><a href="./src/resources/instruments.ts">Instrument</a></code>
- <code><a href="./src/resources/instruments.ts">InstrumentRetrieveResponse</a></code>
- <code><a href="./src/resources/instruments.ts">InstrumentListResponse</a></code>

Methods:

- <code title="get /active/v1/instruments/{instrument_id}">client.instruments.<a href="./src/resources/instruments.ts">retrieve</a>(instrumentID) -> InstrumentRetrieveResponse</code>
- <code title="get /active/v1/instruments">client.instruments.<a href="./src/resources/instruments.ts">list</a>({ ...params }) -> InstrumentListResponse</code>

# M2mApps

Types:

- <code><a href="./src/resources/m2m-apps.ts">M2mApp</a></code>
- <code><a href="./src/resources/m2m-apps.ts">M2mAppCreateResponse</a></code>
- <code><a href="./src/resources/m2m-apps.ts">M2mAppListResponse</a></code>
- <code><a href="./src/resources/m2m-apps.ts">M2mAppDeleteResponse</a></code>

Methods:

- <code title="post /admin/v1/m2m_apps">client.m2mApps.<a href="./src/resources/m2m-apps.ts">create</a>() -> M2mAppCreateResponse</code>
- <code title="get /admin/v1/m2m_apps">client.m2mApps.<a href="./src/resources/m2m-apps.ts">list</a>() -> M2mAppListResponse</code>
- <code title="delete /admin/v1/m2m_apps/{id}">client.m2mApps.<a href="./src/resources/m2m-apps.ts">delete</a>(id) -> M2mAppDeleteResponse</code>

# Orders

Types:

- <code><a href="./src/resources/orders.ts">Order</a></code>
- <code><a href="./src/resources/orders.ts">Side</a></code>
- <code><a href="./src/resources/orders.ts">Status</a></code>
- <code><a href="./src/resources/orders.ts">TimeInForce</a></code>
- <code><a href="./src/resources/orders.ts">Type</a></code>
- <code><a href="./src/resources/orders.ts">OrderCreateResponse</a></code>
- <code><a href="./src/resources/orders.ts">OrderRetrieveResponse</a></code>
- <code><a href="./src/resources/orders.ts">OrderListResponse</a></code>

Methods:

- <code title="post /trade/v1/orders">client.orders.<a href="./src/resources/orders.ts">create</a>({ ...params }) -> OrderCreateResponse</code>
- <code title="get /trade/v1/orders/{id}">client.orders.<a href="./src/resources/orders.ts">retrieve</a>(id, { ...params }) -> OrderRetrieveResponse</code>
- <code title="get /trade/v1/accounts/{account_id}/orders">client.orders.<a href="./src/resources/orders.ts">list</a>(accountID, { ...params }) -> OrderListResponse</code>

# Version

Types:

- <code><a href="./src/resources/version.ts">VersionRetrieveResponse</a></code>

Methods:

- <code title="get /trade/v1/version">client.version.<a href="./src/resources/version.ts">retrieve</a>() -> VersionRetrieveResponse</code>
