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

- <code><a href="./src/resources/orders.ts">OrderRetrieveResponse</a></code>

Methods:

- <code title="get /trade/v1/orders/{id}">client.orders.<a href="./src/resources/orders.ts">retrieve</a>(id, { ...params }) -> OrderRetrieveResponse</code>

# Version

Types:

- <code><a href="./src/resources/version.ts">VersionRetrieveResponse</a></code>

Methods:

- <code title="get /trade/v1/version">client.version.<a href="./src/resources/version.ts">retrieve</a>() -> VersionRetrieveResponse</code>
