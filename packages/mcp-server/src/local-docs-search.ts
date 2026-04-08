// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import MiniSearch from 'minisearch';
import * as fs from 'node:fs/promises';
import * as path from 'node:path';
import { getLogger } from './logger';

type PerLanguageData = {
  method?: string;
  example?: string;
};

type MethodEntry = {
  name: string;
  endpoint: string;
  httpMethod: string;
  summary: string;
  description: string;
  stainlessPath: string;
  qualified: string;
  params?: string[];
  response?: string;
  markdown?: string;
  perLanguage?: Record<string, PerLanguageData>;
};

type ProseChunk = {
  content: string;
  tag: string;
  sectionContext?: string;
  source?: string;
};

type MiniSearchDocument = {
  id: string;
  kind: 'http_method' | 'prose';
  name?: string;
  endpoint?: string;
  summary?: string;
  description?: string;
  qualified?: string;
  stainlessPath?: string;
  content?: string;
  sectionContext?: string;
  _original: Record<string, unknown>;
};

type SearchResult = {
  results: (string | Record<string, unknown>)[];
};

const EMBEDDED_METHODS: MethodEntry[] = [
  {
    name: 'get_account_by_id',
    endpoint: '/active/v1/accounts/{account_id}',
    httpMethod: 'get',
    summary: 'Fetch account details by ID',
    description: 'Fetch account details by ID',
    stainlessPath: '(resource) active.v1.accounts > (method) get_account_by_id',
    qualified: 'client.active.v1.accounts.getAccountByID',
    params: ['account_id: number;'],
    response: '{ metadata: object; error?: object; }',
    markdown:
      "## get_account_by_id\n\n`client.active.v1.accounts.getAccountByID(account_id: number): object`\n\n**get** `/active/v1/accounts/{account_id}`\n\nFetch account details by ID\n\n### Parameters\n\n- `account_id: number`\n\n### Returns\n\n- `{ metadata: object; error?: object; }`\n\n### Example\n\n```typescript\nimport ClearStreet from '@clear-street-internal/sdk';\n\nconst client = new ClearStreet();\n\nconst response = await client.active.v1.accounts.getAccountByID(0);\n\nconsole.log(response);\n```",
    perLanguage: {
      http: {
        example:
          'curl https://api-active.clearstreet.io/active/v1/accounts/$ACCOUNT_ID \\\n    -H "Authorization: Bearer $API_KEY"',
      },
      python: {
        method: 'active.v1.accounts.get_account_by_id',
        example:
          'from clear_street import ClearStreet\n\nclient = ClearStreet(\n    api_key="My API Key",\n)\nresponse = client.active.v1.accounts.get_account_by_id(\n    0,\n)\nprint(response)',
      },
      typescript: {
        method: 'client.active.v1.accounts.getAccountByID',
        example:
          "import ClearStreet from '@clear-street-internal/sdk';\n\nconst client = new ClearStreet({\n  apiKey: 'My API Key',\n});\n\nconst response = await client.active.v1.accounts.getAccountByID(0);\n\nconsole.log(response);",
      },
    },
  },
  {
    name: 'get_accounts',
    endpoint: '/active/v1/accounts',
    httpMethod: 'get',
    summary: 'List accounts the authenticated user has permission to access',
    description: 'List accounts the authenticated user has permission to access',
    stainlessPath: '(resource) active.v1.accounts > (method) get_accounts',
    qualified: 'client.active.v1.accounts.getAccounts',
    params: ['page_size?: number;', 'page_token?: string;'],
    response: '{ metadata: object; error?: object; }',
    markdown:
      "## get_accounts\n\n`client.active.v1.accounts.getAccounts(page_size?: number, page_token?: string): object`\n\n**get** `/active/v1/accounts`\n\nList accounts the authenticated user has permission to access\n\n### Parameters\n\n- `page_size?: number`\n  The number of items to return per page (only used when page_token is not provided)\n\n- `page_token?: string`\n  Token for retrieving the next page of results. Contains encoded pagination state (limit + offset).\nWhen provided, page_size is ignored.\n\n### Returns\n\n- `{ metadata: object; error?: object; }`\n\n### Example\n\n```typescript\nimport ClearStreet from '@clear-street-internal/sdk';\n\nconst client = new ClearStreet();\n\nconst response = await client.active.v1.accounts.getAccounts();\n\nconsole.log(response);\n```",
    perLanguage: {
      http: {
        example:
          'curl https://api-active.clearstreet.io/active/v1/accounts \\\n    -H "Authorization: Bearer $API_KEY"',
      },
      python: {
        method: 'active.v1.accounts.get_accounts',
        example:
          'from clear_street import ClearStreet\n\nclient = ClearStreet(\n    api_key="My API Key",\n)\nresponse = client.active.v1.accounts.get_accounts()\nprint(response)',
      },
      typescript: {
        method: 'client.active.v1.accounts.getAccounts',
        example:
          "import ClearStreet from '@clear-street-internal/sdk';\n\nconst client = new ClearStreet({\n  apiKey: 'My API Key',\n});\n\nconst response = await client.active.v1.accounts.getAccounts();\n\nconsole.log(response);",
      },
    },
  },
  {
    name: 'patch_account_by_id',
    endpoint: '/active/v1/accounts/{account_id}',
    httpMethod: 'patch',
    summary: 'Update account risk settings',
    description: 'Update account risk settings',
    stainlessPath: '(resource) active.v1.accounts > (method) patch_account_by_id',
    qualified: 'client.active.v1.accounts.patchAccountByID',
    params: ['account_id: number;', 'risk?: { max_notional?: string; };'],
    response: '{ metadata: object; error?: object; }',
    markdown:
      "## patch_account_by_id\n\n`client.active.v1.accounts.patchAccountByID(account_id: number, risk?: { max_notional?: string; }): object`\n\n**patch** `/active/v1/accounts/{account_id}`\n\nUpdate account risk settings\n\n### Parameters\n\n- `account_id: number`\n\n- `risk?: { max_notional?: string; }`\n  Risk settings for the account\n  - `max_notional?: string`\n    The maximum notional value available to the account\n\n### Returns\n\n- `{ metadata: object; error?: object; }`\n\n### Example\n\n```typescript\nimport ClearStreet from '@clear-street-internal/sdk';\n\nconst client = new ClearStreet();\n\nconst response = await client.active.v1.accounts.patchAccountByID(0);\n\nconsole.log(response);\n```",
    perLanguage: {
      http: {
        example:
          "curl https://api-active.clearstreet.io/active/v1/accounts/$ACCOUNT_ID \\\n    -X PATCH \\\n    -H 'Content-Type: application/json' \\\n    -H \"Authorization: Bearer $API_KEY\" \\\n    -d '{}'",
      },
      python: {
        method: 'active.v1.accounts.patch_account_by_id',
        example:
          'from clear_street import ClearStreet\n\nclient = ClearStreet(\n    api_key="My API Key",\n)\nresponse = client.active.v1.accounts.patch_account_by_id(\n    account_id=0,\n)\nprint(response)',
      },
      typescript: {
        method: 'client.active.v1.accounts.patchAccountByID',
        example:
          "import ClearStreet from '@clear-street-internal/sdk';\n\nconst client = new ClearStreet({\n  apiKey: 'My API Key',\n});\n\nconst response = await client.active.v1.accounts.patchAccountByID(0);\n\nconsole.log(response);",
      },
    },
  },
  {
    name: 'get_account_balances',
    endpoint: '/active/v1/accounts/{account_id}/balances',
    httpMethod: 'get',
    summary: 'Fetch account balance information',
    description: 'Fetch account balance information',
    stainlessPath: '(resource) active.v1.accounts.balances > (method) get_account_balances',
    qualified: 'client.active.v1.accounts.balances.getAccountBalances',
    params: ['account_id: number;', 'top_margin_contributors_limit?: number;'],
    response: '{ metadata: object; error?: object; }',
    markdown:
      "## get_account_balances\n\n`client.active.v1.accounts.balances.getAccountBalances(account_id: number, top_margin_contributors_limit?: number): object`\n\n**get** `/active/v1/accounts/{account_id}/balances`\n\nFetch account balance information\n\n### Parameters\n\n- `account_id: number`\n\n- `top_margin_contributors_limit?: number`\n  Limit the number of top margin contributors returned by the engine.\n\n### Returns\n\n- `{ metadata: object; error?: object; }`\n\n### Example\n\n```typescript\nimport ClearStreet from '@clear-street-internal/sdk';\n\nconst client = new ClearStreet();\n\nconst response = await client.active.v1.accounts.balances.getAccountBalances(0);\n\nconsole.log(response);\n```",
    perLanguage: {
      http: {
        example:
          'curl https://api-active.clearstreet.io/active/v1/accounts/$ACCOUNT_ID/balances \\\n    -H "Authorization: Bearer $API_KEY"',
      },
      python: {
        method: 'active.v1.accounts.balances.get_account_balances',
        example:
          'from clear_street import ClearStreet\n\nclient = ClearStreet(\n    api_key="My API Key",\n)\nresponse = client.active.v1.accounts.balances.get_account_balances(\n    account_id=0,\n)\nprint(response)',
      },
      typescript: {
        method: 'client.active.v1.accounts.balances.getAccountBalances',
        example:
          "import ClearStreet from '@clear-street-internal/sdk';\n\nconst client = new ClearStreet({\n  apiKey: 'My API Key',\n});\n\nconst response = await client.active.v1.accounts.balances.getAccountBalances(0);\n\nconsole.log(response);",
      },
    },
  },
  {
    name: 'create_locate_request',
    endpoint: '/active/v1/accounts/{account_id}/locates',
    httpMethod: 'post',
    summary: 'Create a locate request.',
    description: 'Submits a new short stock locate request.',
    stainlessPath: '(resource) active.v1.accounts.locates > (method) create_locate_request',
    qualified: 'client.active.v1.accounts.locates.createLocateRequest',
    params: [
      'account_id: number;',
      'body: { quantity: number; symbol: string; comments?: string; reference_id?: string; }[];',
    ],
    response: '{ metadata: object; error?: object; }',
    markdown:
      "## create_locate_request\n\n`client.active.v1.accounts.locates.createLocateRequest(account_id: number, body: { quantity: number; symbol: string; comments?: string; reference_id?: string; }[]): object`\n\n**post** `/active/v1/accounts/{account_id}/locates`\n\nSubmits a new short stock locate request.\n\n### Parameters\n\n- `account_id: number`\n\n- `body: { quantity: number; symbol: string; comments?: string; reference_id?: string; }[]`\n\n### Returns\n\n- `{ metadata: object; error?: object; }`\n\n### Example\n\n```typescript\nimport ClearStreet from '@clear-street-internal/sdk';\n\nconst client = new ClearStreet();\n\nconst response = await client.active.v1.accounts.locates.createLocateRequest(0, { body: [{ quantity: 500, symbol: 'AAPL' }] });\n\nconsole.log(response);\n```",
    perLanguage: {
      http: {
        example:
          'curl https://api-active.clearstreet.io/active/v1/accounts/$ACCOUNT_ID/locates \\\n    -H \'Content-Type: application/json\' \\\n    -H "Authorization: Bearer $API_KEY" \\\n    -d \'[\n          {\n            "quantity": 500,\n            "symbol": "AAPL",\n            "comments": "Locate for earnings play",\n            "reference_id": "my-locate-batch-001"\n          }\n        ]\'',
      },
      python: {
        method: 'active.v1.accounts.locates.create_locate_request',
        example:
          'from clear_street import ClearStreet\n\nclient = ClearStreet(\n    api_key="My API Key",\n)\nresponse = client.active.v1.accounts.locates.create_locate_request(\n    account_id=0,\n    body=[{\n        "quantity": 500,\n        "symbol": "AAPL",\n    }],\n)\nprint(response)',
      },
      typescript: {
        method: 'client.active.v1.accounts.locates.createLocateRequest',
        example:
          "import ClearStreet from '@clear-street-internal/sdk';\n\nconst client = new ClearStreet({\n  apiKey: 'My API Key',\n});\n\nconst response = await client.active.v1.accounts.locates.createLocateRequest(0, {\n  body: [{ quantity: 500, symbol: 'AAPL' }],\n});\n\nconsole.log(response);",
      },
    },
  },
  {
    name: 'get_locate_requests',
    endpoint: '/active/v1/accounts/{account_id}/locates',
    httpMethod: 'get',
    summary: 'Get locate requests.',
    description: 'Retrieves all locate requests for the specified account.',
    stainlessPath: '(resource) active.v1.accounts.locates > (method) get_locate_requests',
    qualified: 'client.active.v1.accounts.locates.getLocateRequests',
    params: [
      'account_id: number;',
      'page_size?: number;',
      'page_token?: string;',
      'reference_id?: string;',
      "status?: 'PENDING' | 'OFFERED' | 'FILLED' | 'REJECTED' | 'DECLINED' | 'EXPIRED' | 'CANCELED';",
    ],
    response: '{ metadata: object; error?: object; }',
    markdown:
      "## get_locate_requests\n\n`client.active.v1.accounts.locates.getLocateRequests(account_id: number, page_size?: number, page_token?: string, reference_id?: string, status?: 'PENDING' | 'OFFERED' | 'FILLED' | 'REJECTED' | 'DECLINED' | 'EXPIRED' | 'CANCELED'): object`\n\n**get** `/active/v1/accounts/{account_id}/locates`\n\nRetrieves all locate requests for the specified account.\n\n### Parameters\n\n- `account_id: number`\n\n- `page_size?: number`\n  The number of items to return per page (only used when page_token is not provided)\n\n- `page_token?: string`\n  Token for retrieving the next page of results. Contains encoded pagination state (limit + offset).\nWhen provided, page_size is ignored.\n\n- `reference_id?: string`\n  Filter by client reference ID\n\n- `status?: 'PENDING' | 'OFFERED' | 'FILLED' | 'REJECTED' | 'DECLINED' | 'EXPIRED' | 'CANCELED'`\n  Filter by locate order status\n\n### Returns\n\n- `{ metadata: object; error?: object; }`\n\n### Example\n\n```typescript\nimport ClearStreet from '@clear-street-internal/sdk';\n\nconst client = new ClearStreet();\n\nconst response = await client.active.v1.accounts.locates.getLocateRequests(0);\n\nconsole.log(response);\n```",
    perLanguage: {
      http: {
        example:
          'curl https://api-active.clearstreet.io/active/v1/accounts/$ACCOUNT_ID/locates \\\n    -H "Authorization: Bearer $API_KEY"',
      },
      python: {
        method: 'active.v1.accounts.locates.get_locate_requests',
        example:
          'from clear_street import ClearStreet\n\nclient = ClearStreet(\n    api_key="My API Key",\n)\nresponse = client.active.v1.accounts.locates.get_locate_requests(\n    account_id=0,\n)\nprint(response)',
      },
      typescript: {
        method: 'client.active.v1.accounts.locates.getLocateRequests',
        example:
          "import ClearStreet from '@clear-street-internal/sdk';\n\nconst client = new ClearStreet({\n  apiKey: 'My API Key',\n});\n\nconst response = await client.active.v1.accounts.locates.getLocateRequests(0);\n\nconsole.log(response);",
      },
    },
  },
  {
    name: 'update_locate_request',
    endpoint: '/active/v1/accounts/{account_id}/locates',
    httpMethod: 'patch',
    summary: 'Update a locate request.',
    description: 'Modifies an existing locate request.',
    stainlessPath: '(resource) active.v1.accounts.locates > (method) update_locate_request',
    qualified: 'client.active.v1.accounts.locates.updateLocateRequest',
    params: ['account_id: number;', 'accept: boolean;'],
    response: '{ metadata: object; error?: object; }',
    markdown:
      "## update_locate_request\n\n`client.active.v1.accounts.locates.updateLocateRequest(account_id: number, accept: boolean): object`\n\n**patch** `/active/v1/accounts/{account_id}/locates`\n\nModifies an existing locate request.\n\n### Parameters\n\n- `account_id: number`\n\n- `accept: boolean`\n  Whether to accept (`true`) or decline (`false`) the locate offer\n\n### Returns\n\n- `{ metadata: object; error?: object; }`\n\n### Example\n\n```typescript\nimport ClearStreet from '@clear-street-internal/sdk';\n\nconst client = new ClearStreet();\n\nconst response = await client.active.v1.accounts.locates.updateLocateRequest(0, { accept: true });\n\nconsole.log(response);\n```",
    perLanguage: {
      http: {
        example:
          'curl https://api-active.clearstreet.io/active/v1/accounts/$ACCOUNT_ID/locates \\\n    -X PATCH \\\n    -H \'Content-Type: application/json\' \\\n    -H "Authorization: Bearer $API_KEY" \\\n    -d \'{\n          "accept": true\n        }\'',
      },
      python: {
        method: 'active.v1.accounts.locates.update_locate_request',
        example:
          'from clear_street import ClearStreet\n\nclient = ClearStreet(\n    api_key="My API Key",\n)\nresponse = client.active.v1.accounts.locates.update_locate_request(\n    account_id=0,\n    accept=True,\n)\nprint(response)',
      },
      typescript: {
        method: 'client.active.v1.accounts.locates.updateLocateRequest',
        example:
          "import ClearStreet from '@clear-street-internal/sdk';\n\nconst client = new ClearStreet({\n  apiKey: 'My API Key',\n});\n\nconst response = await client.active.v1.accounts.locates.updateLocateRequest(0, { accept: true });\n\nconsole.log(response);",
      },
    },
  },
  {
    name: 'get_locate_inventory',
    endpoint: '/active/v1/accounts/{account_id}/locates/inventory',
    httpMethod: 'get',
    summary: 'Get locate inventory.',
    description: 'Retrieves available inventory for short stock locates.',
    stainlessPath: '(resource) active.v1.accounts.locates.inventory > (method) get_locate_inventory',
    qualified: 'client.active.v1.accounts.locates.inventory.getLocateInventory',
    params: ['account_id: number;', 'symbol: string;'],
    response: '{ metadata: object; error?: object; }',
    markdown:
      "## get_locate_inventory\n\n`client.active.v1.accounts.locates.inventory.getLocateInventory(account_id: number, symbol: string): object`\n\n**get** `/active/v1/accounts/{account_id}/locates/inventory`\n\nRetrieves available inventory for short stock locates.\n\n### Parameters\n\n- `account_id: number`\n\n- `symbol: string`\n  The instrument symbol\n\n### Returns\n\n- `{ metadata: object; error?: object; }`\n\n### Example\n\n```typescript\nimport ClearStreet from '@clear-street-internal/sdk';\n\nconst client = new ClearStreet();\n\nconst response = await client.active.v1.accounts.locates.inventory.getLocateInventory(0, { symbol: 'symbol' });\n\nconsole.log(response);\n```",
    perLanguage: {
      http: {
        example:
          'curl https://api-active.clearstreet.io/active/v1/accounts/$ACCOUNT_ID/locates/inventory \\\n    -H "Authorization: Bearer $API_KEY"',
      },
      python: {
        method: 'active.v1.accounts.locates.inventory.get_locate_inventory',
        example:
          'from clear_street import ClearStreet\n\nclient = ClearStreet(\n    api_key="My API Key",\n)\nresponse = client.active.v1.accounts.locates.inventory.get_locate_inventory(\n    account_id=0,\n    symbol="symbol",\n)\nprint(response)',
      },
      typescript: {
        method: 'client.active.v1.accounts.locates.inventory.getLocateInventory',
        example:
          "import ClearStreet from '@clear-street-internal/sdk';\n\nconst client = new ClearStreet({\n  apiKey: 'My API Key',\n});\n\nconst response = await client.active.v1.accounts.locates.inventory.getLocateInventory(0, {\n  symbol: 'symbol',\n});\n\nconsole.log(response);",
      },
    },
  },
  {
    name: 'cancel_all_orders',
    endpoint: '/active/v1/accounts/{account_id}/orders',
    httpMethod: 'delete',
    summary: 'Cancel all orders for an account',
    description:
      'All filter parameters can be used independently or combined. The only constraint is that\n`security_id` and `security_id_source` must be provided together if either is specified.',
    stainlessPath: '(resource) active.v1.accounts.orders > (method) cancel_all_orders',
    qualified: 'client.active.v1.accounts.orders.cancelAllOrders',
    params: [
      'account_id: number;',
      'security_id?: string[];',
      'security_id_source?: string[];',
      'security_type?: string;',
      "side?: 'BUY' | 'SELL' | 'SELL_SHORT' | 'OTHER';",
      "type?: 'MARKET' | 'LIMIT' | 'STOP' | 'STOP_LIMIT' | 'TRAILING_STOP' | 'TRAILING_STOP_LIMIT' | 'OTHER';",
    ],
    response: '{ metadata: object; error?: object; }',
    markdown:
      "## cancel_all_orders\n\n`client.active.v1.accounts.orders.cancelAllOrders(account_id: number, security_id?: string[], security_id_source?: string[], security_type?: string, side?: 'BUY' | 'SELL' | 'SELL_SHORT' | 'OTHER', type?: 'MARKET' | 'LIMIT' | 'STOP' | 'STOP_LIMIT' | 'TRAILING_STOP' | 'TRAILING_STOP_LIMIT' | 'OTHER'): object`\n\n**delete** `/active/v1/accounts/{account_id}/orders`\n\nAll filter parameters can be used independently or combined. The only constraint is that\n`security_id` and `security_id_source` must be provided together if either is specified.\n\n### Parameters\n\n- `account_id: number`\n\n- `security_id?: string[]`\n  Filter by security ID(s). Accepts single value or indexed array.\n\nExamples:\n- Single: `security_id=037833100`\n- Multiple: `security_id[0]=037833100&security_id[1]=594918104`\n\n- `security_id_source?: string[]`\n  Source(s) for the security ID filter. Must match the count and order of security_id.\n\nExamples:\n- Single: `security_id_source=CUSIP`\n- Multiple: `security_id_source[0]=CUSIP&security_id_source[1]=FIGI`\n\n- `security_type?: string`\n  Filter by security type (e.g., COMMON_STOCK, OPTION)\n\n- `side?: 'BUY' | 'SELL' | 'SELL_SHORT' | 'OTHER'`\n  Filter by order side (BUY or SELL)\n\n- `type?: 'MARKET' | 'LIMIT' | 'STOP' | 'STOP_LIMIT' | 'TRAILING_STOP' | 'TRAILING_STOP_LIMIT' | 'OTHER'`\n  Filter by order type (e.g., MARKET, LIMIT)\n\n### Returns\n\n- `{ metadata: object; error?: object; }`\n\n### Example\n\n```typescript\nimport ClearStreet from '@clear-street-internal/sdk';\n\nconst client = new ClearStreet();\n\nconst response = await client.active.v1.accounts.orders.cancelAllOrders(0);\n\nconsole.log(response);\n```",
    perLanguage: {
      http: {
        example:
          'curl https://api-active.clearstreet.io/active/v1/accounts/$ACCOUNT_ID/orders \\\n    -X DELETE \\\n    -H "Authorization: Bearer $API_KEY"',
      },
      python: {
        method: 'active.v1.accounts.orders.cancel_all_orders',
        example:
          'from clear_street import ClearStreet\n\nclient = ClearStreet(\n    api_key="My API Key",\n)\nresponse = client.active.v1.accounts.orders.cancel_all_orders(\n    account_id=0,\n)\nprint(response)',
      },
      typescript: {
        method: 'client.active.v1.accounts.orders.cancelAllOrders',
        example:
          "import ClearStreet from '@clear-street-internal/sdk';\n\nconst client = new ClearStreet({\n  apiKey: 'My API Key',\n});\n\nconst response = await client.active.v1.accounts.orders.cancelAllOrders(0);\n\nconsole.log(response);",
      },
    },
  },
  {
    name: 'cancel_order',
    endpoint: '/active/v1/accounts/{account_id}/orders/{order_id}',
    httpMethod: 'delete',
    summary: 'Cancel a specific order',
    description: 'Cancel a specific order',
    stainlessPath: '(resource) active.v1.accounts.orders > (method) cancel_order',
    qualified: 'client.active.v1.accounts.orders.cancelOrder',
    params: ['account_id: number;', 'order_id: string;'],
    response: '{ metadata: object; error?: object; }',
    markdown:
      "## cancel_order\n\n`client.active.v1.accounts.orders.cancelOrder(account_id: number, order_id: string): object`\n\n**delete** `/active/v1/accounts/{account_id}/orders/{order_id}`\n\nCancel a specific order\n\n### Parameters\n\n- `account_id: number`\n\n- `order_id: string`\n\n### Returns\n\n- `{ metadata: object; error?: object; }`\n\n### Example\n\n```typescript\nimport ClearStreet from '@clear-street-internal/sdk';\n\nconst client = new ClearStreet();\n\nconst response = await client.active.v1.accounts.orders.cancelOrder('order_id', { account_id: 0 });\n\nconsole.log(response);\n```",
    perLanguage: {
      http: {
        example:
          'curl https://api-active.clearstreet.io/active/v1/accounts/$ACCOUNT_ID/orders/$ORDER_ID \\\n    -X DELETE \\\n    -H "Authorization: Bearer $API_KEY"',
      },
      python: {
        method: 'active.v1.accounts.orders.cancel_order',
        example:
          'from clear_street import ClearStreet\n\nclient = ClearStreet(\n    api_key="My API Key",\n)\nresponse = client.active.v1.accounts.orders.cancel_order(\n    order_id="order_id",\n    account_id=0,\n)\nprint(response)',
      },
      typescript: {
        method: 'client.active.v1.accounts.orders.cancelOrder',
        example:
          "import ClearStreet from '@clear-street-internal/sdk';\n\nconst client = new ClearStreet({\n  apiKey: 'My API Key',\n});\n\nconst response = await client.active.v1.accounts.orders.cancelOrder('order_id', { account_id: 0 });\n\nconsole.log(response);",
      },
    },
  },
  {
    name: 'get_order_by_id',
    endpoint: '/active/v1/accounts/{account_id}/orders/{order_id}',
    httpMethod: 'get',
    summary: 'Get order by ID',
    description: 'Get order by ID',
    stainlessPath: '(resource) active.v1.accounts.orders > (method) get_order_by_id',
    qualified: 'client.active.v1.accounts.orders.getOrderByID',
    params: ['account_id: number;', 'order_id: string;'],
    response: '{ metadata: object; error?: object; }',
    markdown:
      "## get_order_by_id\n\n`client.active.v1.accounts.orders.getOrderByID(account_id: number, order_id: string): object`\n\n**get** `/active/v1/accounts/{account_id}/orders/{order_id}`\n\nGet order by ID\n\n### Parameters\n\n- `account_id: number`\n\n- `order_id: string`\n\n### Returns\n\n- `{ metadata: object; error?: object; }`\n\n### Example\n\n```typescript\nimport ClearStreet from '@clear-street-internal/sdk';\n\nconst client = new ClearStreet();\n\nconst response = await client.active.v1.accounts.orders.getOrderByID('order_id', { account_id: 0 });\n\nconsole.log(response);\n```",
    perLanguage: {
      http: {
        example:
          'curl https://api-active.clearstreet.io/active/v1/accounts/$ACCOUNT_ID/orders/$ORDER_ID \\\n    -H "Authorization: Bearer $API_KEY"',
      },
      python: {
        method: 'active.v1.accounts.orders.get_order_by_id',
        example:
          'from clear_street import ClearStreet\n\nclient = ClearStreet(\n    api_key="My API Key",\n)\nresponse = client.active.v1.accounts.orders.get_order_by_id(\n    order_id="order_id",\n    account_id=0,\n)\nprint(response)',
      },
      typescript: {
        method: 'client.active.v1.accounts.orders.getOrderByID',
        example:
          "import ClearStreet from '@clear-street-internal/sdk';\n\nconst client = new ClearStreet({\n  apiKey: 'My API Key',\n});\n\nconst response = await client.active.v1.accounts.orders.getOrderByID('order_id', { account_id: 0 });\n\nconsole.log(response);",
      },
    },
  },
  {
    name: 'get_orders',
    endpoint: '/active/v1/accounts/{account_id}/orders',
    httpMethod: 'get',
    summary: 'List orders for an account with optional filtering',
    description: 'List orders for an account with optional filtering',
    stainlessPath: '(resource) active.v1.accounts.orders > (method) get_orders',
    qualified: 'client.active.v1.accounts.orders.getOrders',
    params: [
      'account_id: number;',
      'from?: string;',
      'page_size?: number;',
      'page_token?: string;',
      'security_id?: string[];',
      'security_id_source?: string[];',
      'security_type?: string;',
      'status?: string;',
      'symbol?: string;',
      'to?: string;',
    ],
    response: '{ metadata: object; error?: object; }',
    markdown:
      "## get_orders\n\n`client.active.v1.accounts.orders.getOrders(account_id: number, from?: string, page_size?: number, page_token?: string, security_id?: string[], security_id_source?: string[], security_type?: string, status?: string, symbol?: string, to?: string): object`\n\n**get** `/active/v1/accounts/{account_id}/orders`\n\nList orders for an account with optional filtering\n\n### Parameters\n\n- `account_id: number`\n\n- `from?: string`\n  The start date and time for the query range, inclusive (ISO 8601 format)\n\n- `page_size?: number`\n  The number of items to return per page (only used when page_token is not provided)\n\n- `page_token?: string`\n  Token for retrieving the next page of results. Contains encoded pagination state (limit + offset).\nWhen provided, page_size is ignored.\n\n- `security_id?: string[]`\n  Filter by security ID(s). Accepts single value or indexed array.\n\nExamples:\n- Single: `security_id=037833100`\n- Multiple: `security_id[0]=037833100&security_id[1]=594918104`\n\n- `security_id_source?: string[]`\n  Source(s) for the security ID filter. Must match the count and order of security_id.\n\nExamples:\n- Single: `security_id_source=CUSIP`\n- Multiple: `security_id_source[0]=CUSIP&security_id_source[1]=FIGI`\n\n- `security_type?: string`\n  Security type filter (e.g., COMMON_STOCK, PREFERRED_STOCK)\n\n- `status?: string`\n  Filter by order status\n\n- `symbol?: string`\n  Filter by symbol\n\n- `to?: string`\n  The end date and time for the query range, inclusive (ISO 8601 format)\n\n### Returns\n\n- `{ metadata: object; error?: object; }`\n\n### Example\n\n```typescript\nimport ClearStreet from '@clear-street-internal/sdk';\n\nconst client = new ClearStreet();\n\nconst response = await client.active.v1.accounts.orders.getOrders(0);\n\nconsole.log(response);\n```",
    perLanguage: {
      http: {
        example:
          'curl https://api-active.clearstreet.io/active/v1/accounts/$ACCOUNT_ID/orders \\\n    -H "Authorization: Bearer $API_KEY"',
      },
      python: {
        method: 'active.v1.accounts.orders.get_orders',
        example:
          'from clear_street import ClearStreet\n\nclient = ClearStreet(\n    api_key="My API Key",\n)\nresponse = client.active.v1.accounts.orders.get_orders(\n    account_id=0,\n)\nprint(response)',
      },
      typescript: {
        method: 'client.active.v1.accounts.orders.getOrders',
        example:
          "import ClearStreet from '@clear-street-internal/sdk';\n\nconst client = new ClearStreet({\n  apiKey: 'My API Key',\n});\n\nconst response = await client.active.v1.accounts.orders.getOrders(0);\n\nconsole.log(response);",
      },
    },
  },
  {
    name: 'replace_order',
    endpoint: '/active/v1/accounts/{account_id}/orders/{order_id}',
    httpMethod: 'patch',
    summary: 'Replace an order with new parameters',
    description: 'Replace an order with new parameters',
    stainlessPath: '(resource) active.v1.accounts.orders > (method) replace_order',
    qualified: 'client.active.v1.accounts.orders.replaceOrder',
    params: [
      'account_id: number;',
      'order_id: string;',
      'limit_price?: string;',
      'quantity?: string;',
      'stop_price?: string;',
      'time_in_force?: string;',
    ],
    response: '{ metadata: object; error?: object; }',
    markdown:
      "## replace_order\n\n`client.active.v1.accounts.orders.replaceOrder(account_id: number, order_id: string, limit_price?: string, quantity?: string, stop_price?: string, time_in_force?: string): object`\n\n**patch** `/active/v1/accounts/{account_id}/orders/{order_id}`\n\nReplace an order with new parameters\n\n### Parameters\n\n- `account_id: number`\n\n- `order_id: string`\n\n- `limit_price?: string`\n  New limit price for the order\n\n- `quantity?: string`\n  New quantity for the order\n\n- `stop_price?: string`\n  New stop price for the order\n\n- `time_in_force?: string`\n  New time in force for the order\n\n### Returns\n\n- `{ metadata: object; error?: object; }`\n\n### Example\n\n```typescript\nimport ClearStreet from '@clear-street-internal/sdk';\n\nconst client = new ClearStreet();\n\nconst response = await client.active.v1.accounts.orders.replaceOrder('order_id', { account_id: 0 });\n\nconsole.log(response);\n```",
    perLanguage: {
      http: {
        example:
          'curl https://api-active.clearstreet.io/active/v1/accounts/$ACCOUNT_ID/orders/$ORDER_ID \\\n    -X PATCH \\\n    -H \'Content-Type: application/json\' \\\n    -H "Authorization: Bearer $API_KEY" \\\n    -d \'{\n          "limit_price": "150.50",\n          "quantity": "125",\n          "stop_price": "148.00"\n        }\'',
      },
      python: {
        method: 'active.v1.accounts.orders.replace_order',
        example:
          'from clear_street import ClearStreet\n\nclient = ClearStreet(\n    api_key="My API Key",\n)\nresponse = client.active.v1.accounts.orders.replace_order(\n    order_id="order_id",\n    account_id=0,\n)\nprint(response)',
      },
      typescript: {
        method: 'client.active.v1.accounts.orders.replaceOrder',
        example:
          "import ClearStreet from '@clear-street-internal/sdk';\n\nconst client = new ClearStreet({\n  apiKey: 'My API Key',\n});\n\nconst response = await client.active.v1.accounts.orders.replaceOrder('order_id', { account_id: 0 });\n\nconsole.log(response);",
      },
    },
  },
  {
    name: 'submit_orders',
    endpoint: '/active/v1/accounts/{account_id}/orders',
    httpMethod: 'post',
    summary: 'Submit new orders',
    description: 'Submit new orders',
    stainlessPath: '(resource) active.v1.accounts.orders > (method) submit_orders',
    qualified: 'client.active.v1.accounts.orders.submitOrders',
    params: [
      'account_id: number;',
      "body: { legs: { ratio: string; security: string | { id: string; source: string; }; security_type: string; side: 'BUY' | 'SELL' | 'SELL_SHORT' | 'OTHER'; id?: string; position_effect?: 'OPEN' | 'CLOSE'; }[]; order_type: 'MARKET' | 'LIMIT' | 'STOP' | 'STOP_LIMIT' | 'TRAILING_STOP' | 'TRAILING_STOP_LIMIT' | 'OTHER'; time_in_force: string; id?: string; limit_price?: string; quantity?: string; } | { order_type: 'MARKET' | 'LIMIT' | 'STOP' | 'STOP_LIMIT' | 'TRAILING_STOP' | 'TRAILING_STOP_LIMIT' | 'OTHER'; quantity: string; security_type: string; side: 'BUY' | 'SELL' | 'SELL_SHORT' | 'OTHER'; time_in_force: string; id?: string; expire_at?: string; extended_hours?: boolean; limit_offset?: string; limit_price?: string; position_effect?: 'OPEN' | 'CLOSE'; security_id?: string; security_id_source?: string; stop_price?: string; strategy?: { end_at?: string; start_at?: string; urgency?: urgency; } | object | object | object | object | object | { destination: string; }; symbol?: string; trailing_offset_amt?: string; trailing_offset_amt_type?: 'PRICE' | 'PERCENT_BPS'; }[];",
    ],
    response: '{ metadata: object; error?: object; }',
    markdown:
      "## submit_orders\n\n`client.active.v1.accounts.orders.submitOrders(account_id: number, body: { legs: { ratio: string; security: string | object; security_type: security_type; side: side; id?: string; position_effect?: 'OPEN' | 'CLOSE'; }[]; order_type: 'MARKET' | 'LIMIT' | 'STOP' | 'STOP_LIMIT' | 'TRAILING_STOP' | 'TRAILING_STOP_LIMIT' | 'OTHER'; time_in_force: string; id?: string; limit_price?: string; quantity?: string; } | { order_type: 'MARKET' | 'LIMIT' | 'STOP' | 'STOP_LIMIT' | 'TRAILING_STOP' | 'TRAILING_STOP_LIMIT' | 'OTHER'; quantity: string; security_type: string; side: 'BUY' | 'SELL' | 'SELL_SHORT' | 'OTHER'; time_in_force: string; id?: string; expire_at?: string; extended_hours?: boolean; limit_offset?: string; limit_price?: string; position_effect?: 'OPEN' | 'CLOSE'; security_id?: string; security_id_source?: string; stop_price?: string; strategy?: sor_strategy | vwap_strategy | twap_strategy | ap_strategy | pov_strategy | dark_strategy | dma_strategy; symbol?: string; trailing_offset_amt?: string; trailing_offset_amt_type?: 'PRICE' | 'PERCENT_BPS'; }[]): object`\n\n**post** `/active/v1/accounts/{account_id}/orders`\n\nSubmit new orders\n\n### Parameters\n\n- `account_id: number`\n\n- `body: { legs: { ratio: string; security: string | { id: string; source: string; }; security_type: string; side: 'BUY' | 'SELL' | 'SELL_SHORT' | 'OTHER'; id?: string; position_effect?: 'OPEN' | 'CLOSE'; }[]; order_type: 'MARKET' | 'LIMIT' | 'STOP' | 'STOP_LIMIT' | 'TRAILING_STOP' | 'TRAILING_STOP_LIMIT' | 'OTHER'; time_in_force: string; id?: string; limit_price?: string; quantity?: string; } | { order_type: 'MARKET' | 'LIMIT' | 'STOP' | 'STOP_LIMIT' | 'TRAILING_STOP' | 'TRAILING_STOP_LIMIT' | 'OTHER'; quantity: string; security_type: string; side: 'BUY' | 'SELL' | 'SELL_SHORT' | 'OTHER'; time_in_force: string; id?: string; expire_at?: string; extended_hours?: boolean; limit_offset?: string; limit_price?: string; position_effect?: 'OPEN' | 'CLOSE'; security_id?: string; security_id_source?: string; stop_price?: string; strategy?: { end_at?: string; start_at?: string; urgency?: urgency; } | object | object | object | object | object | { destination: string; }; symbol?: string; trailing_offset_amt?: string; trailing_offset_amt_type?: 'PRICE' | 'PERCENT_BPS'; }[]`\n\n### Returns\n\n- `{ metadata: object; error?: object; }`\n\n### Example\n\n```typescript\nimport ClearStreet from '@clear-street-internal/sdk';\n\nconst client = new ClearStreet();\n\nconst response = await client.active.v1.accounts.orders.submitOrders(0, { body: [{\n  legs: [{\n  ratio: 'ratio',\n  security: '0193bb84-447a-706f-996f-097254663f02',\n  security_type: 'OPTION',\n  side: 'BUY',\n}, {\n  ratio: 'ratio',\n  security: '0193bb84-4db4-78ec-b4fd-cba8be61cf8a',\n  security_type: 'OPTION',\n  side: 'SELL',\n}, {\n  ratio: 'ratio',\n  security: '0193bb84-5264-7f20-8fd3-35df82cd6ef0',\n  security_type: 'OPTION',\n  side: 'BUY',\n}],\n  order_type: 'LIMIT',\n  time_in_force: 'DAY',\n}] });\n\nconsole.log(response);\n```",
    perLanguage: {
      http: {
        example:
          'curl https://api-active.clearstreet.io/active/v1/accounts/$ACCOUNT_ID/orders \\\n    -H \'Content-Type: application/json\' \\\n    -H "Authorization: Bearer $API_KEY" \\\n    -d \'[\n          {\n            "legs": [\n              {\n                "ratio": "ratio",\n                "security": "0193bb84-447a-706f-996f-097254663f02",\n                "security_type": "OPTION",\n                "side": "BUY",\n                "id": "1",\n                "position_effect": "OPEN"\n              },\n              {\n                "ratio": "ratio",\n                "security": "0193bb84-4db4-78ec-b4fd-cba8be61cf8a",\n                "security_type": "OPTION",\n                "side": "SELL",\n                "id": "2",\n                "position_effect": "OPEN"\n              },\n              {\n                "ratio": "ratio",\n                "security": "0193bb84-5264-7f20-8fd3-35df82cd6ef0",\n                "security_type": "OPTION",\n                "side": "BUY",\n                "id": "3",\n                "position_effect": "OPEN"\n              }\n            ],\n            "order_type": "LIMIT",\n            "time_in_force": "DAY",\n            "id": "my-mleg-ref-20251001-001",\n            "limit_price": "0.50",\n            "quantity": "1"\n          }\n        ]\'',
      },
      python: {
        method: 'active.v1.accounts.orders.submit_orders',
        example:
          'from clear_street import ClearStreet\n\nclient = ClearStreet(\n    api_key="My API Key",\n)\nresponse = client.active.v1.accounts.orders.submit_orders(\n    account_id=0,\n    body=[{\n        "legs": [{\n            "ratio": "ratio",\n            "security": "0193bb84-447a-706f-996f-097254663f02",\n            "security_type": "OPTION",\n            "side": "BUY",\n        }, {\n            "ratio": "ratio",\n            "security": "0193bb84-4db4-78ec-b4fd-cba8be61cf8a",\n            "security_type": "OPTION",\n            "side": "SELL",\n        }, {\n            "ratio": "ratio",\n            "security": "0193bb84-5264-7f20-8fd3-35df82cd6ef0",\n            "security_type": "OPTION",\n            "side": "BUY",\n        }],\n        "order_type": "LIMIT",\n        "time_in_force": "DAY",\n    }],\n)\nprint(response)',
      },
      typescript: {
        method: 'client.active.v1.accounts.orders.submitOrders',
        example:
          "import ClearStreet from '@clear-street-internal/sdk';\n\nconst client = new ClearStreet({\n  apiKey: 'My API Key',\n});\n\nconst response = await client.active.v1.accounts.orders.submitOrders(0, {\n  body: [\n    {\n      legs: [\n        {\n          ratio: 'ratio',\n          security: '0193bb84-447a-706f-996f-097254663f02',\n          security_type: 'OPTION',\n          side: 'BUY',\n        },\n        {\n          ratio: 'ratio',\n          security: '0193bb84-4db4-78ec-b4fd-cba8be61cf8a',\n          security_type: 'OPTION',\n          side: 'SELL',\n        },\n        {\n          ratio: 'ratio',\n          security: '0193bb84-5264-7f20-8fd3-35df82cd6ef0',\n          security_type: 'OPTION',\n          side: 'BUY',\n        },\n      ],\n      order_type: 'LIMIT',\n      time_in_force: 'DAY',\n    },\n  ],\n});\n\nconsole.log(response);",
      },
    },
  },
  {
    name: 'get_portfolio_history',
    endpoint: '/active/v1/accounts/{account_id}/portfolio-history',
    httpMethod: 'get',
    summary: 'Get account portfolio history.',
    description: 'Retrieves daily portfolio history for the specified account.',
    stainlessPath: '(resource) active.v1.accounts.portfolio-history > (method) get_portfolio_history',
    qualified: 'client.active.v1.accounts.portfolioHistory.getPortfolioHistory',
    params: ['account_id: number;', 'end_date: string;', 'start_date: string;'],
    response: '{ metadata: object; error?: object; }',
    markdown:
      "## get_portfolio_history\n\n`client.active.v1.accounts.portfolioHistory.getPortfolioHistory(account_id: number, end_date: string, start_date: string): object`\n\n**get** `/active/v1/accounts/{account_id}/portfolio-history`\n\nRetrieves daily portfolio history for the specified account.\n\n### Parameters\n\n- `account_id: number`\n\n- `end_date: string`\n\n- `start_date: string`\n\n### Returns\n\n- `{ metadata: object; error?: object; }`\n\n### Example\n\n```typescript\nimport ClearStreet from '@clear-street-internal/sdk';\n\nconst client = new ClearStreet();\n\nconst response = await client.active.v1.accounts.portfolioHistory.getPortfolioHistory(0, { end_date: '2019-12-27', start_date: '2019-12-27' });\n\nconsole.log(response);\n```",
    perLanguage: {
      http: {
        example:
          'curl https://api-active.clearstreet.io/active/v1/accounts/$ACCOUNT_ID/portfolio-history \\\n    -H "Authorization: Bearer $API_KEY"',
      },
      python: {
        method: 'active.v1.accounts.portfolio_history.get_portfolio_history',
        example:
          'from datetime import date\nfrom clear_street import ClearStreet\n\nclient = ClearStreet(\n    api_key="My API Key",\n)\nresponse = client.active.v1.accounts.portfolio_history.get_portfolio_history(\n    account_id=0,\n    end_date=date.fromisoformat("2019-12-27"),\n    start_date=date.fromisoformat("2019-12-27"),\n)\nprint(response)',
      },
      typescript: {
        method: 'client.active.v1.accounts.portfolioHistory.getPortfolioHistory',
        example:
          "import ClearStreet from '@clear-street-internal/sdk';\n\nconst client = new ClearStreet({\n  apiKey: 'My API Key',\n});\n\nconst response = await client.active.v1.accounts.portfolioHistory.getPortfolioHistory(0, {\n  end_date: '2019-12-27',\n  start_date: '2019-12-27',\n});\n\nconsole.log(response);",
      },
    },
  },
  {
    name: 'close_position',
    endpoint: '/active/v1/accounts/{account_id}/positions/{security_id_source}/{security_id}',
    httpMethod: 'delete',
    summary: 'Delete a position within an account for an instrument.',
    description: 'Retrieves all positions for the specified trading account.',
    stainlessPath: '(resource) active.v1.accounts.positions > (method) close_position',
    qualified: 'client.active.v1.accounts.positions.closePosition',
    params: [
      'account_id: number;',
      'security_id_source: string;',
      'security_id: string;',
      'cancel_orders?: boolean;',
    ],
    response: '{ metadata: object; error?: object; }',
    markdown:
      "## close_position\n\n`client.active.v1.accounts.positions.closePosition(account_id: number, security_id_source: string, security_id: string, cancel_orders?: boolean): object`\n\n**delete** `/active/v1/accounts/{account_id}/positions/{security_id_source}/{security_id}`\n\nRetrieves all positions for the specified trading account.\n\n### Parameters\n\n- `account_id: number`\n\n- `security_id_source: string`\n  Security identifier source\n\n- `security_id: string`\n\n- `cancel_orders?: boolean`\n\n### Returns\n\n- `{ metadata: object; error?: object; }`\n\n### Example\n\n```typescript\nimport ClearStreet from '@clear-street-internal/sdk';\n\nconst client = new ClearStreet();\n\nconst response = await client.active.v1.accounts.positions.closePosition('security_id', { account_id: 0, security_id_source: 'CMS' });\n\nconsole.log(response);\n```",
    perLanguage: {
      http: {
        example:
          'curl https://api-active.clearstreet.io/active/v1/accounts/$ACCOUNT_ID/positions/$SECURITY_ID_SOURCE/$SECURITY_ID \\\n    -X DELETE \\\n    -H "Authorization: Bearer $API_KEY"',
      },
      python: {
        method: 'active.v1.accounts.positions.close_position',
        example:
          'from clear_street import ClearStreet\n\nclient = ClearStreet(\n    api_key="My API Key",\n)\nresponse = client.active.v1.accounts.positions.close_position(\n    security_id="security_id",\n    account_id=0,\n    security_id_source="CMS",\n)\nprint(response)',
      },
      typescript: {
        method: 'client.active.v1.accounts.positions.closePosition',
        example:
          "import ClearStreet from '@clear-street-internal/sdk';\n\nconst client = new ClearStreet({\n  apiKey: 'My API Key',\n});\n\nconst response = await client.active.v1.accounts.positions.closePosition('security_id', {\n  account_id: 0,\n  security_id_source: 'CMS',\n});\n\nconsole.log(response);",
      },
    },
  },
  {
    name: 'close_positions',
    endpoint: '/active/v1/accounts/{account_id}/positions',
    httpMethod: 'delete',
    summary: 'Delete all positions within an account.',
    description: 'Closes all positions for the specified trading account.',
    stainlessPath: '(resource) active.v1.accounts.positions > (method) close_positions',
    qualified: 'client.active.v1.accounts.positions.closePositions',
    params: ['account_id: number;', 'cancel_orders?: boolean;'],
    response: '{ metadata: object; error?: object; }',
    markdown:
      "## close_positions\n\n`client.active.v1.accounts.positions.closePositions(account_id: number, cancel_orders?: boolean): object`\n\n**delete** `/active/v1/accounts/{account_id}/positions`\n\nCloses all positions for the specified trading account.\n\n### Parameters\n\n- `account_id: number`\n\n- `cancel_orders?: boolean`\n\n### Returns\n\n- `{ metadata: object; error?: object; }`\n\n### Example\n\n```typescript\nimport ClearStreet from '@clear-street-internal/sdk';\n\nconst client = new ClearStreet();\n\nconst response = await client.active.v1.accounts.positions.closePositions(0);\n\nconsole.log(response);\n```",
    perLanguage: {
      http: {
        example:
          'curl https://api-active.clearstreet.io/active/v1/accounts/$ACCOUNT_ID/positions \\\n    -X DELETE \\\n    -H "Authorization: Bearer $API_KEY"',
      },
      python: {
        method: 'active.v1.accounts.positions.close_positions',
        example:
          'from clear_street import ClearStreet\n\nclient = ClearStreet(\n    api_key="My API Key",\n)\nresponse = client.active.v1.accounts.positions.close_positions(\n    account_id=0,\n)\nprint(response)',
      },
      typescript: {
        method: 'client.active.v1.accounts.positions.closePositions',
        example:
          "import ClearStreet from '@clear-street-internal/sdk';\n\nconst client = new ClearStreet({\n  apiKey: 'My API Key',\n});\n\nconst response = await client.active.v1.accounts.positions.closePositions(0);\n\nconsole.log(response);",
      },
    },
  },
  {
    name: 'get_positions',
    endpoint: '/active/v1/accounts/{account_id}/positions',
    httpMethod: 'get',
    summary: 'Get account positions.',
    description: 'Retrieves all positions for the specified trading account.',
    stainlessPath: '(resource) active.v1.accounts.positions > (method) get_positions',
    qualified: 'client.active.v1.accounts.positions.getPositions',
    params: [
      'account_id: number;',
      'page_size?: number;',
      'page_token?: string;',
      'security_id?: string[];',
      'security_id_source?: string[];',
      'sort_by?: string;',
      "sort_direction?: 'ASC' | 'DESC';",
    ],
    response: '{ metadata: object; error?: object; }',
    markdown:
      "## get_positions\n\n`client.active.v1.accounts.positions.getPositions(account_id: number, page_size?: number, page_token?: string, security_id?: string[], security_id_source?: string[], sort_by?: string, sort_direction?: 'ASC' | 'DESC'): object`\n\n**get** `/active/v1/accounts/{account_id}/positions`\n\nRetrieves all positions for the specified trading account.\n\n### Parameters\n\n- `account_id: number`\n\n- `page_size?: number`\n  The number of items to return per page (only used when page_token is not provided)\n\n- `page_token?: string`\n  Token for retrieving the next page of results. Contains encoded pagination state (limit + offset).\nWhen provided, page_size is ignored.\n\n- `security_id?: string[]`\n  Filter by security ID(s). Accepts single value or indexed array.\n\nExamples:\n- Single: `security_id=037833100`\n- Multiple: `security_id[0]=037833100&security_id[1]=594918104`\n\n- `security_id_source?: string[]`\n  Source(s) for the security ID filter. Must match the count and order of security_id.\n\nExamples:\n- Single: `security_id_source=CUSIP`\n- Multiple: `security_id_source[0]=CUSIP&security_id_source[1]=FIGI`\n\n- `sort_by?: string`\n  Field to sort by\n\n- `sort_direction?: 'ASC' | 'DESC'`\n  Sort direction\n\n### Returns\n\n- `{ metadata: object; error?: object; }`\n\n### Example\n\n```typescript\nimport ClearStreet from '@clear-street-internal/sdk';\n\nconst client = new ClearStreet();\n\nconst response = await client.active.v1.accounts.positions.getPositions(0);\n\nconsole.log(response);\n```",
    perLanguage: {
      http: {
        example:
          'curl https://api-active.clearstreet.io/active/v1/accounts/$ACCOUNT_ID/positions \\\n    -H "Authorization: Bearer $API_KEY"',
      },
      python: {
        method: 'active.v1.accounts.positions.get_positions',
        example:
          'from clear_street import ClearStreet\n\nclient = ClearStreet(\n    api_key="My API Key",\n)\nresponse = client.active.v1.accounts.positions.get_positions(\n    account_id=0,\n)\nprint(response)',
      },
      typescript: {
        method: 'client.active.v1.accounts.positions.getPositions',
        example:
          "import ClearStreet from '@clear-street-internal/sdk';\n\nconst client = new ClearStreet({\n  apiKey: 'My API Key',\n});\n\nconst response = await client.active.v1.accounts.positions.getPositions(0);\n\nconsole.log(response);",
      },
    },
  },
  {
    name: 'create',
    endpoint: '/active/v1/api_keys',
    httpMethod: 'post',
    summary: 'Create a new API key',
    description: 'Create a new API key',
    stainlessPath: '(resource) active.v1.api_keys > (method) create',
    qualified: 'client.active.v1.apiKeys.create',
    params: ['name?: string;'],
    response: '{ metadata: object; error?: object; }',
    markdown:
      "## create\n\n`client.active.v1.apiKeys.create(name?: string): object`\n\n**post** `/active/v1/api_keys`\n\nCreate a new API key\n\n### Parameters\n\n- `name?: string`\n\n### Returns\n\n- `{ metadata: object; error?: object; }`\n\n### Example\n\n```typescript\nimport ClearStreet from '@clear-street-internal/sdk';\n\nconst client = new ClearStreet();\n\nconst apiKey = await client.active.v1.apiKeys.create();\n\nconsole.log(apiKey);\n```",
    perLanguage: {
      http: {
        example:
          "curl https://api-active.clearstreet.io/active/v1/api_keys \\\n    -H 'Content-Type: application/json' \\\n    -H \"Authorization: Bearer $API_KEY\" \\\n    -d '{}'",
      },
      python: {
        method: 'active.v1.api_keys.create',
        example:
          'from clear_street import ClearStreet\n\nclient = ClearStreet(\n    api_key="My API Key",\n)\napi_key = client.active.v1.api_keys.create()\nprint(api_key)',
      },
      typescript: {
        method: 'client.active.v1.apiKeys.create',
        example:
          "import ClearStreet from '@clear-street-internal/sdk';\n\nconst client = new ClearStreet({\n  apiKey: 'My API Key',\n});\n\nconst apiKey = await client.active.v1.apiKeys.create();\n\nconsole.log(apiKey);",
      },
    },
  },
  {
    name: 'list',
    endpoint: '/active/v1/api_keys',
    httpMethod: 'get',
    summary: 'List API keys for the authenticated user',
    description: 'List API keys for the authenticated user',
    stainlessPath: '(resource) active.v1.api_keys > (method) list',
    qualified: 'client.active.v1.apiKeys.list',
    response: '{ metadata: object; error?: object; }',
    markdown:
      "## list\n\n`client.active.v1.apiKeys.list(): object`\n\n**get** `/active/v1/api_keys`\n\nList API keys for the authenticated user\n\n### Returns\n\n- `{ metadata: object; error?: object; }`\n\n### Example\n\n```typescript\nimport ClearStreet from '@clear-street-internal/sdk';\n\nconst client = new ClearStreet();\n\nconst apiKeys = await client.active.v1.apiKeys.list();\n\nconsole.log(apiKeys);\n```",
    perLanguage: {
      http: {
        example:
          'curl https://api-active.clearstreet.io/active/v1/api_keys \\\n    -H "Authorization: Bearer $API_KEY"',
      },
      python: {
        method: 'active.v1.api_keys.list',
        example:
          'from clear_street import ClearStreet\n\nclient = ClearStreet(\n    api_key="My API Key",\n)\napi_keys = client.active.v1.api_keys.list()\nprint(api_keys)',
      },
      typescript: {
        method: 'client.active.v1.apiKeys.list',
        example:
          "import ClearStreet from '@clear-street-internal/sdk';\n\nconst client = new ClearStreet({\n  apiKey: 'My API Key',\n});\n\nconst apiKeys = await client.active.v1.apiKeys.list();\n\nconsole.log(apiKeys);",
      },
    },
  },
  {
    name: 'revoke',
    endpoint: '/active/v1/api_keys/{id}',
    httpMethod: 'delete',
    summary: 'Revoke a specific API key',
    description: 'Revoke a specific API key',
    stainlessPath: '(resource) active.v1.api_keys > (method) revoke',
    qualified: 'client.active.v1.apiKeys.revoke',
    params: ['id: string;'],
    response: '{ metadata: object; error?: object; }',
    markdown:
      "## revoke\n\n`client.active.v1.apiKeys.revoke(id: string): object`\n\n**delete** `/active/v1/api_keys/{id}`\n\nRevoke a specific API key\n\n### Parameters\n\n- `id: string`\n\n### Returns\n\n- `{ metadata: object; error?: object; }`\n\n### Example\n\n```typescript\nimport ClearStreet from '@clear-street-internal/sdk';\n\nconst client = new ClearStreet();\n\nconst response = await client.active.v1.apiKeys.revoke('182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e');\n\nconsole.log(response);\n```",
    perLanguage: {
      http: {
        example:
          'curl https://api-active.clearstreet.io/active/v1/api_keys/$ID \\\n    -X DELETE \\\n    -H "Authorization: Bearer $API_KEY"',
      },
      python: {
        method: 'active.v1.api_keys.revoke',
        example:
          'from clear_street import ClearStreet\n\nclient = ClearStreet(\n    api_key="My API Key",\n)\nresponse = client.active.v1.api_keys.revoke(\n    "182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e",\n)\nprint(response)',
      },
      typescript: {
        method: 'client.active.v1.apiKeys.revoke',
        example:
          "import ClearStreet from '@clear-street-internal/sdk';\n\nconst client = new ClearStreet({\n  apiKey: 'My API Key',\n});\n\nconst response = await client.active.v1.apiKeys.revoke('182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e');\n\nconsole.log(response);",
      },
    },
  },
  {
    name: 'revoke_all',
    endpoint: '/active/v1/api_keys',
    httpMethod: 'delete',
    summary: 'Revoke all API keys for the authenticated user',
    description: 'Revoke all API keys for the authenticated user',
    stainlessPath: '(resource) active.v1.api_keys > (method) revoke_all',
    qualified: 'client.active.v1.apiKeys.revokeAll',
    response: '{ metadata: object; error?: object; }',
    markdown:
      "## revoke_all\n\n`client.active.v1.apiKeys.revokeAll(): object`\n\n**delete** `/active/v1/api_keys`\n\nRevoke all API keys for the authenticated user\n\n### Returns\n\n- `{ metadata: object; error?: object; }`\n\n### Example\n\n```typescript\nimport ClearStreet from '@clear-street-internal/sdk';\n\nconst client = new ClearStreet();\n\nconst response = await client.active.v1.apiKeys.revokeAll();\n\nconsole.log(response);\n```",
    perLanguage: {
      http: {
        example:
          'curl https://api-active.clearstreet.io/active/v1/api_keys \\\n    -X DELETE \\\n    -H "Authorization: Bearer $API_KEY"',
      },
      python: {
        method: 'active.v1.api_keys.revoke_all',
        example:
          'from clear_street import ClearStreet\n\nclient = ClearStreet(\n    api_key="My API Key",\n)\nresponse = client.active.v1.api_keys.revoke_all()\nprint(response)',
      },
      typescript: {
        method: 'client.active.v1.apiKeys.revokeAll',
        example:
          "import ClearStreet from '@clear-street-internal/sdk';\n\nconst client = new ClearStreet({\n  apiKey: 'My API Key',\n});\n\nconst response = await client.active.v1.apiKeys.revokeAll();\n\nconsole.log(response);",
      },
    },
  },
  {
    name: 'get_dividends_calendar',
    endpoint: '/active/v1/calendars/dividends',
    httpMethod: 'get',
    summary: 'Get dividends calendar.',
    description: 'Retrieves upcoming dividend payments.',
    stainlessPath: '(resource) active.v1.calendars.dividends > (method) get_dividends_calendar',
    qualified: 'client.active.v1.calendars.dividends.getDividendsCalendar',
    params: ['from?: string;', 'to?: string;'],
    response: '{ metadata: object; error?: object; }',
    markdown:
      "## get_dividends_calendar\n\n`client.active.v1.calendars.dividends.getDividendsCalendar(from?: string, to?: string): object`\n\n**get** `/active/v1/calendars/dividends`\n\nRetrieves upcoming dividend payments.\n\n### Parameters\n\n- `from?: string`\n  The start date for the query range, inclusive (YYYY-MM-DD)\n\n- `to?: string`\n  The end date for the query range, inclusive (YYYY-MM-DD)\n\n### Returns\n\n- `{ metadata: object; error?: object; }`\n\n### Example\n\n```typescript\nimport ClearStreet from '@clear-street-internal/sdk';\n\nconst client = new ClearStreet();\n\nconst response = await client.active.v1.calendars.dividends.getDividendsCalendar();\n\nconsole.log(response);\n```",
    perLanguage: {
      http: {
        example:
          'curl https://api-active.clearstreet.io/active/v1/calendars/dividends \\\n    -H "Authorization: Bearer $API_KEY"',
      },
      python: {
        method: 'active.v1.calendars.dividends.get_dividends_calendar',
        example:
          'from clear_street import ClearStreet\n\nclient = ClearStreet(\n    api_key="My API Key",\n)\nresponse = client.active.v1.calendars.dividends.get_dividends_calendar()\nprint(response)',
      },
      typescript: {
        method: 'client.active.v1.calendars.dividends.getDividendsCalendar',
        example:
          "import ClearStreet from '@clear-street-internal/sdk';\n\nconst client = new ClearStreet({\n  apiKey: 'My API Key',\n});\n\nconst response = await client.active.v1.calendars.dividends.getDividendsCalendar();\n\nconsole.log(response);",
      },
    },
  },
  {
    name: 'get_earnings_calendar',
    endpoint: '/active/v1/calendars/earnings',
    httpMethod: 'get',
    summary: 'Get earnings calendar.',
    description: 'Retrieves upcoming earnings announcements.',
    stainlessPath: '(resource) active.v1.calendars.earnings > (method) get_earnings_calendar',
    qualified: 'client.active.v1.calendars.earnings.getEarningsCalendar',
    params: ['from?: string;', 'to?: string;'],
    response: '{ metadata: object; error?: object; }',
    markdown:
      "## get_earnings_calendar\n\n`client.active.v1.calendars.earnings.getEarningsCalendar(from?: string, to?: string): object`\n\n**get** `/active/v1/calendars/earnings`\n\nRetrieves upcoming earnings announcements.\n\n### Parameters\n\n- `from?: string`\n  The start date for the query range, inclusive (YYYY-MM-DD)\n\n- `to?: string`\n  The end date for the query range, inclusive (YYYY-MM-DD)\n\n### Returns\n\n- `{ metadata: object; error?: object; }`\n\n### Example\n\n```typescript\nimport ClearStreet from '@clear-street-internal/sdk';\n\nconst client = new ClearStreet();\n\nconst response = await client.active.v1.calendars.earnings.getEarningsCalendar();\n\nconsole.log(response);\n```",
    perLanguage: {
      http: {
        example:
          'curl https://api-active.clearstreet.io/active/v1/calendars/earnings \\\n    -H "Authorization: Bearer $API_KEY"',
      },
      python: {
        method: 'active.v1.calendars.earnings.get_earnings_calendar',
        example:
          'from clear_street import ClearStreet\n\nclient = ClearStreet(\n    api_key="My API Key",\n)\nresponse = client.active.v1.calendars.earnings.get_earnings_calendar()\nprint(response)',
      },
      typescript: {
        method: 'client.active.v1.calendars.earnings.getEarningsCalendar',
        example:
          "import ClearStreet from '@clear-street-internal/sdk';\n\nconst client = new ClearStreet({\n  apiKey: 'My API Key',\n});\n\nconst response = await client.active.v1.calendars.earnings.getEarningsCalendar();\n\nconsole.log(response);",
      },
    },
  },
  {
    name: 'get_economic_calendar',
    endpoint: '/active/v1/calendars/economic',
    httpMethod: 'get',
    summary: 'Get economic calendar.',
    description: 'Retrieves upcoming economic events and indicators.',
    stainlessPath: '(resource) active.v1.calendars.economic > (method) get_economic_calendar',
    qualified: 'client.active.v1.calendars.economic.getEconomicCalendar',
    params: ['from?: string;', 'to?: string;'],
    response: '{ metadata: object; error?: object; }',
    markdown:
      "## get_economic_calendar\n\n`client.active.v1.calendars.economic.getEconomicCalendar(from?: string, to?: string): object`\n\n**get** `/active/v1/calendars/economic`\n\nRetrieves upcoming economic events and indicators.\n\n### Parameters\n\n- `from?: string`\n  The start date for the query range, inclusive (YYYY-MM-DD)\n\n- `to?: string`\n  The end date for the query range, inclusive (YYYY-MM-DD)\n\n### Returns\n\n- `{ metadata: object; error?: object; }`\n\n### Example\n\n```typescript\nimport ClearStreet from '@clear-street-internal/sdk';\n\nconst client = new ClearStreet();\n\nconst response = await client.active.v1.calendars.economic.getEconomicCalendar();\n\nconsole.log(response);\n```",
    perLanguage: {
      http: {
        example:
          'curl https://api-active.clearstreet.io/active/v1/calendars/economic \\\n    -H "Authorization: Bearer $API_KEY"',
      },
      python: {
        method: 'active.v1.calendars.economic.get_economic_calendar',
        example:
          'from clear_street import ClearStreet\n\nclient = ClearStreet(\n    api_key="My API Key",\n)\nresponse = client.active.v1.calendars.economic.get_economic_calendar()\nprint(response)',
      },
      typescript: {
        method: 'client.active.v1.calendars.economic.getEconomicCalendar',
        example:
          "import ClearStreet from '@clear-street-internal/sdk';\n\nconst client = new ClearStreet({\n  apiKey: 'My API Key',\n});\n\nconst response = await client.active.v1.calendars.economic.getEconomicCalendar();\n\nconsole.log(response);",
      },
    },
  },
  {
    name: 'get_market_hours_calendar',
    endpoint: '/active/v1/calendars/market-hours',
    httpMethod: 'get',
    summary: 'Get market hours calendar.',
    description:
      'Retrieves comprehensive trading hours including pre-market, regular, and after-hours sessions.\nReturns market status, session times, and next session schedules.',
    stainlessPath: '(resource) active.v1.calendars.market-hours > (method) get_market_hours_calendar',
    qualified: 'client.active.v1.calendars.marketHours.getMarketHoursCalendar',
    params: ['date: string;', "market?: 'us_equities' | 'us_options';"],
    response: '{ metadata: object; error?: object; }',
    markdown:
      "## get_market_hours_calendar\n\n`client.active.v1.calendars.marketHours.getMarketHoursCalendar(date: string, market?: 'us_equities' | 'us_options'): object`\n\n**get** `/active/v1/calendars/market-hours`\n\nRetrieves comprehensive trading hours including pre-market, regular, and after-hours sessions.\nReturns market status, session times, and next session schedules.\n\n### Parameters\n\n- `date: string`\n  The date to query market hours for (YYYY-MM-DD). Defaults to today.\n\n- `market?: 'us_equities' | 'us_options'`\n  Market type to query (us_equities, us_options). If omitted, returns all markets.\n\n### Returns\n\n- `{ metadata: object; error?: object; }`\n\n### Example\n\n```typescript\nimport ClearStreet from '@clear-street-internal/sdk';\n\nconst client = new ClearStreet();\n\nconst response = await client.active.v1.calendars.marketHours.getMarketHoursCalendar({ date: 'date' });\n\nconsole.log(response);\n```",
    perLanguage: {
      http: {
        example:
          'curl https://api-active.clearstreet.io/active/v1/calendars/market-hours \\\n    -H "Authorization: Bearer $API_KEY"',
      },
      python: {
        method: 'active.v1.calendars.market_hours.get_market_hours_calendar',
        example:
          'from clear_street import ClearStreet\n\nclient = ClearStreet(\n    api_key="My API Key",\n)\nresponse = client.active.v1.calendars.market_hours.get_market_hours_calendar(\n    date="date",\n)\nprint(response)',
      },
      typescript: {
        method: 'client.active.v1.calendars.marketHours.getMarketHoursCalendar',
        example:
          "import ClearStreet from '@clear-street-internal/sdk';\n\nconst client = new ClearStreet({\n  apiKey: 'My API Key',\n});\n\nconst response = await client.active.v1.calendars.marketHours.getMarketHoursCalendar({\n  date: 'date',\n});\n\nconsole.log(response);",
      },
    },
  },
  {
    name: 'get_mergers_and_acquisitions_calendar',
    endpoint: '/active/v1/calendars/mergers-acquisitions',
    httpMethod: 'get',
    summary: 'Get mergers and acquisitions calendar.',
    description: 'Retrieves upcoming M&A events.',
    stainlessPath:
      '(resource) active.v1.calendars.mergers-acquisitions > (method) get_mergers_and_acquisitions_calendar',
    qualified: 'client.active.v1.calendars.mergersAcquisitions.getMergersAndAcquisitionsCalendar',
    params: ['from?: string;', 'to?: string;'],
    response: '{ metadata: object; error?: object; }',
    markdown:
      "## get_mergers_and_acquisitions_calendar\n\n`client.active.v1.calendars.mergersAcquisitions.getMergersAndAcquisitionsCalendar(from?: string, to?: string): object`\n\n**get** `/active/v1/calendars/mergers-acquisitions`\n\nRetrieves upcoming M&A events.\n\n### Parameters\n\n- `from?: string`\n  The start date for the query range, inclusive (YYYY-MM-DD)\n\n- `to?: string`\n  The end date for the query range, inclusive (YYYY-MM-DD)\n\n### Returns\n\n- `{ metadata: object; error?: object; }`\n\n### Example\n\n```typescript\nimport ClearStreet from '@clear-street-internal/sdk';\n\nconst client = new ClearStreet();\n\nconst response = await client.active.v1.calendars.mergersAcquisitions.getMergersAndAcquisitionsCalendar();\n\nconsole.log(response);\n```",
    perLanguage: {
      http: {
        example:
          'curl https://api-active.clearstreet.io/active/v1/calendars/mergers-acquisitions \\\n    -H "Authorization: Bearer $API_KEY"',
      },
      python: {
        method: 'active.v1.calendars.mergers_acquisitions.get_mergers_and_acquisitions_calendar',
        example:
          'from clear_street import ClearStreet\n\nclient = ClearStreet(\n    api_key="My API Key",\n)\nresponse = client.active.v1.calendars.mergers_acquisitions.get_mergers_and_acquisitions_calendar()\nprint(response)',
      },
      typescript: {
        method: 'client.active.v1.calendars.mergersAcquisitions.getMergersAndAcquisitionsCalendar',
        example:
          "import ClearStreet from '@clear-street-internal/sdk';\n\nconst client = new ClearStreet({\n  apiKey: 'My API Key',\n});\n\nconst response =\n  await client.active.v1.calendars.mergersAcquisitions.getMergersAndAcquisitionsCalendar();\n\nconsole.log(response);",
      },
    },
  },
  {
    name: 'get_splits_calendar',
    endpoint: '/active/v1/calendars/splits',
    httpMethod: 'get',
    summary: 'Get stock splits calendar.',
    description: 'Retrieves upcoming stock splits.',
    stainlessPath: '(resource) active.v1.calendars.splits > (method) get_splits_calendar',
    qualified: 'client.active.v1.calendars.splits.getSplitsCalendar',
    params: ['from?: string;', 'to?: string;'],
    response: '{ metadata: object; error?: object; }',
    markdown:
      "## get_splits_calendar\n\n`client.active.v1.calendars.splits.getSplitsCalendar(from?: string, to?: string): object`\n\n**get** `/active/v1/calendars/splits`\n\nRetrieves upcoming stock splits.\n\n### Parameters\n\n- `from?: string`\n  The start date for the query range, inclusive (YYYY-MM-DD)\n\n- `to?: string`\n  The end date for the query range, inclusive (YYYY-MM-DD)\n\n### Returns\n\n- `{ metadata: object; error?: object; }`\n\n### Example\n\n```typescript\nimport ClearStreet from '@clear-street-internal/sdk';\n\nconst client = new ClearStreet();\n\nconst response = await client.active.v1.calendars.splits.getSplitsCalendar();\n\nconsole.log(response);\n```",
    perLanguage: {
      http: {
        example:
          'curl https://api-active.clearstreet.io/active/v1/calendars/splits \\\n    -H "Authorization: Bearer $API_KEY"',
      },
      python: {
        method: 'active.v1.calendars.splits.get_splits_calendar',
        example:
          'from clear_street import ClearStreet\n\nclient = ClearStreet(\n    api_key="My API Key",\n)\nresponse = client.active.v1.calendars.splits.get_splits_calendar()\nprint(response)',
      },
      typescript: {
        method: 'client.active.v1.calendars.splits.getSplitsCalendar',
        example:
          "import ClearStreet from '@clear-street-internal/sdk';\n\nconst client = new ClearStreet({\n  apiKey: 'My API Key',\n});\n\nconst response = await client.active.v1.calendars.splits.getSplitsCalendar();\n\nconsole.log(response);",
      },
    },
  },
  {
    name: 'get_calendar_summary',
    endpoint: '/active/v1/calendars/summary',
    httpMethod: 'get',
    summary: 'Get calendar summary.',
    description: 'Retrieves a consolidated view of all calendar events.',
    stainlessPath: '(resource) active.v1.calendars.summary > (method) get_calendar_summary',
    qualified: 'client.active.v1.calendars.summary.getCalendarSummary',
    params: ['from?: string;', 'to?: string;'],
    response: '{ metadata: object; error?: object; }',
    markdown:
      "## get_calendar_summary\n\n`client.active.v1.calendars.summary.getCalendarSummary(from?: string, to?: string): object`\n\n**get** `/active/v1/calendars/summary`\n\nRetrieves a consolidated view of all calendar events.\n\n### Parameters\n\n- `from?: string`\n  The start date for the query range, inclusive (YYYY-MM-DD)\n\n- `to?: string`\n  The end date for the query range, inclusive (YYYY-MM-DD)\n\n### Returns\n\n- `{ metadata: object; error?: object; }`\n\n### Example\n\n```typescript\nimport ClearStreet from '@clear-street-internal/sdk';\n\nconst client = new ClearStreet();\n\nconst response = await client.active.v1.calendars.summary.getCalendarSummary();\n\nconsole.log(response);\n```",
    perLanguage: {
      http: {
        example:
          'curl https://api-active.clearstreet.io/active/v1/calendars/summary \\\n    -H "Authorization: Bearer $API_KEY"',
      },
      python: {
        method: 'active.v1.calendars.summary.get_calendar_summary',
        example:
          'from clear_street import ClearStreet\n\nclient = ClearStreet(\n    api_key="My API Key",\n)\nresponse = client.active.v1.calendars.summary.get_calendar_summary()\nprint(response)',
      },
      typescript: {
        method: 'client.active.v1.calendars.summary.getCalendarSummary',
        example:
          "import ClearStreet from '@clear-street-internal/sdk';\n\nconst client = new ClearStreet({\n  apiKey: 'My API Key',\n});\n\nconst response = await client.active.v1.calendars.summary.getCalendarSummary();\n\nconsole.log(response);",
      },
    },
  },
  {
    name: 'get_instrument_by_id',
    endpoint: '/active/v1/instruments/{security_id_source}/{security_id}',
    httpMethod: 'get',
    summary: 'Get instrument by ID.',
    description: 'Retrieves detailed information for a specific instrument.',
    stainlessPath: '(resource) active.v1.instruments > (method) get_instrument_by_id',
    qualified: 'client.active.v1.instruments.getInstrumentByID',
    params: [
      'security_id_source: string;',
      'security_id: string;',
      'include_options_expiry_dates?: boolean;',
    ],
    response: '{ metadata: object; error?: object; }',
    markdown:
      "## get_instrument_by_id\n\n`client.active.v1.instruments.getInstrumentByID(security_id_source: string, security_id: string, include_options_expiry_dates?: boolean): object`\n\n**get** `/active/v1/instruments/{security_id_source}/{security_id}`\n\nRetrieves detailed information for a specific instrument.\n\n### Parameters\n\n- `security_id_source: string`\n  Security identifier source\n\n- `security_id: string`\n\n- `include_options_expiry_dates?: boolean`\n  When true, include unique options expiry dates for this instrument\n\n### Returns\n\n- `{ metadata: object; error?: object; }`\n\n### Example\n\n```typescript\nimport ClearStreet from '@clear-street-internal/sdk';\n\nconst client = new ClearStreet();\n\nconst response = await client.active.v1.instruments.getInstrumentByID('security_id', { security_id_source: 'CMS' });\n\nconsole.log(response);\n```",
    perLanguage: {
      http: {
        example:
          'curl https://api-active.clearstreet.io/active/v1/instruments/$SECURITY_ID_SOURCE/$SECURITY_ID \\\n    -H "Authorization: Bearer $API_KEY"',
      },
      python: {
        method: 'active.v1.instruments.get_instrument_by_id',
        example:
          'from clear_street import ClearStreet\n\nclient = ClearStreet(\n    api_key="My API Key",\n)\nresponse = client.active.v1.instruments.get_instrument_by_id(\n    security_id="security_id",\n    security_id_source="CMS",\n)\nprint(response)',
      },
      typescript: {
        method: 'client.active.v1.instruments.getInstrumentByID',
        example:
          "import ClearStreet from '@clear-street-internal/sdk';\n\nconst client = new ClearStreet({\n  apiKey: 'My API Key',\n});\n\nconst response = await client.active.v1.instruments.getInstrumentByID('security_id', {\n  security_id_source: 'CMS',\n});\n\nconsole.log(response);",
      },
    },
  },
  {
    name: 'get_instruments',
    endpoint: '/active/v1/instruments',
    httpMethod: 'get',
    summary: 'List instruments.',
    description: 'Retrieves a list of tradeable instruments.\n\n',
    stainlessPath: '(resource) active.v1.instruments > (method) get_instruments',
    qualified: 'client.active.v1.instruments.getInstruments',
    params: [
      'easy_to_borrow?: boolean;',
      'id_filter?: string;',
      'is_liquidation_only?: boolean;',
      'is_marginable?: boolean;',
      'is_restricted?: boolean;',
      'is_short_prohibited?: boolean;',
      'is_threshold_security?: boolean;',
      'page_size?: number;',
      'page_token?: string;',
      'security_id?: string[];',
      'security_id_source?: string[];',
      'security_type?: string;',
    ],
    response: '{ metadata: object; error?: object; }',
    markdown:
      "## get_instruments\n\n`client.active.v1.instruments.getInstruments(easy_to_borrow?: boolean, id_filter?: string, is_liquidation_only?: boolean, is_marginable?: boolean, is_restricted?: boolean, is_short_prohibited?: boolean, is_threshold_security?: boolean, page_size?: number, page_token?: string, security_id?: string[], security_id_source?: string[], security_type?: string): object`\n\n**get** `/active/v1/instruments`\n\nRetrieves a list of tradeable instruments.\n\n\n\n### Parameters\n\n- `easy_to_borrow?: boolean`\n  Filter by easy to borrow status\n\n- `id_filter?: string`\n  Filter IDs to those containing this substring. For options, and when security_type is omitted and no security_id/security_id_source filters are provided, this is required.\n\n- `is_liquidation_only?: boolean`\n  Filter by liquidation only status\n\n- `is_marginable?: boolean`\n  Filter by marginable status\n\n- `is_restricted?: boolean`\n  Filter by restricted status\n\n- `is_short_prohibited?: boolean`\n  Filter by short prohibited status\n\n- `is_threshold_security?: boolean`\n  Filter by threshold security status\n\n- `page_size?: number`\n  The number of items to return per page (only used when page_token is not provided)\n\n- `page_token?: string`\n  Token for retrieving the next page of results. Contains encoded pagination state (limit + offset).\nWhen provided, page_size is ignored.\n\n- `security_id?: string[]`\n  Filter by security ID(s). Accepts single value or indexed array.\n\nExamples:\n- Single: `security_id=037833100`\n- Multiple: `security_id[0]=037833100&security_id[1]=594918104`\n\n- `security_id_source?: string[]`\n  Source(s) for the security ID filter. Must match the count and order of security_id.\n\nExamples:\n- Single: `security_id_source=CUSIP`\n- Multiple: `security_id_source[0]=CUSIP&security_id_source[1]=FIGI`\n\n- `security_type?: string`\n  Filter by security type. If omitted, returns all types.\n\n### Returns\n\n- `{ metadata: object; error?: object; }`\n\n### Example\n\n```typescript\nimport ClearStreet from '@clear-street-internal/sdk';\n\nconst client = new ClearStreet();\n\nconst response = await client.active.v1.instruments.getInstruments();\n\nconsole.log(response);\n```",
    perLanguage: {
      http: {
        example:
          'curl https://api-active.clearstreet.io/active/v1/instruments \\\n    -H "Authorization: Bearer $API_KEY"',
      },
      python: {
        method: 'active.v1.instruments.get_instruments',
        example:
          'from clear_street import ClearStreet\n\nclient = ClearStreet(\n    api_key="My API Key",\n)\nresponse = client.active.v1.instruments.get_instruments()\nprint(response)',
      },
      typescript: {
        method: 'client.active.v1.instruments.getInstruments',
        example:
          "import ClearStreet from '@clear-street-internal/sdk';\n\nconst client = new ClearStreet({\n  apiKey: 'My API Key',\n});\n\nconst response = await client.active.v1.instruments.getInstruments();\n\nconsole.log(response);",
      },
    },
  },
  {
    name: 'get_instrument_analyst_consensus',
    endpoint: '/active/v1/instruments/{security_id_source}/{security_id}/analyst-reporting',
    httpMethod: 'get',
    summary: 'Get analyst consensus.',
    description: 'Retrieves analyst ratings and price targets for an instrument.',
    stainlessPath:
      '(resource) active.v1.instruments.analyst-reporting > (method) get_instrument_analyst_consensus',
    qualified: 'client.active.v1.instruments.analystReporting.getInstrumentAnalystConsensus',
    params: ['security_id_source: string;', 'security_id: string;', 'from?: string;', 'to?: string;'],
    response: '{ metadata: object; error?: object; }',
    markdown:
      "## get_instrument_analyst_consensus\n\n`client.active.v1.instruments.analystReporting.getInstrumentAnalystConsensus(security_id_source: string, security_id: string, from?: string, to?: string): object`\n\n**get** `/active/v1/instruments/{security_id_source}/{security_id}/analyst-reporting`\n\nRetrieves analyst ratings and price targets for an instrument.\n\n### Parameters\n\n- `security_id_source: string`\n  Security identifier source\n\n- `security_id: string`\n\n- `from?: string`\n  The start date for the query range, inclusive (YYYY-MM-DD)\n\n- `to?: string`\n  The end date for the query range, inclusive (YYYY-MM-DD)\n\n### Returns\n\n- `{ metadata: object; error?: object; }`\n\n### Example\n\n```typescript\nimport ClearStreet from '@clear-street-internal/sdk';\n\nconst client = new ClearStreet();\n\nconst response = await client.active.v1.instruments.analystReporting.getInstrumentAnalystConsensus('security_id', { security_id_source: 'CMS' });\n\nconsole.log(response);\n```",
    perLanguage: {
      http: {
        example:
          'curl https://api-active.clearstreet.io/active/v1/instruments/$SECURITY_ID_SOURCE/$SECURITY_ID/analyst-reporting \\\n    -H "Authorization: Bearer $API_KEY"',
      },
      python: {
        method: 'active.v1.instruments.analyst_reporting.get_instrument_analyst_consensus',
        example:
          'from clear_street import ClearStreet\n\nclient = ClearStreet(\n    api_key="My API Key",\n)\nresponse = client.active.v1.instruments.analyst_reporting.get_instrument_analyst_consensus(\n    security_id="security_id",\n    security_id_source="CMS",\n)\nprint(response)',
      },
      typescript: {
        method: 'client.active.v1.instruments.analystReporting.getInstrumentAnalystConsensus',
        example:
          "import ClearStreet from '@clear-street-internal/sdk';\n\nconst client = new ClearStreet({\n  apiKey: 'My API Key',\n});\n\nconst response = await client.active.v1.instruments.analystReporting.getInstrumentAnalystConsensus(\n  'security_id',\n  { security_id_source: 'CMS' },\n);\n\nconsole.log(response);",
      },
    },
  },
  {
    name: 'get_all_instrument_events',
    endpoint: '/active/v1/instruments/events',
    httpMethod: 'get',
    summary: 'List instrument events across all securities.',
    description: 'Retrieves all instrument events grouped by date.',
    stainlessPath: '(resource) active.v1.instruments.events > (method) get_all_instrument_events',
    qualified: 'client.active.v1.instruments.events.getAllInstrumentEvents',
    params: [
      "event_types?: 'EARNINGS' | 'DIVIDEND' | 'STOCK_SPLIT' | 'IPO'[];",
      'from_date?: string;',
      'instrument_ids?: string[];',
      'security_id?: string[];',
      'security_id_source?: string[];',
      'to_date?: string;',
    ],
    response: '{ metadata: object; error?: object; }',
    markdown:
      "## get_all_instrument_events\n\n`client.active.v1.instruments.events.getAllInstrumentEvents(event_types?: 'EARNINGS' | 'DIVIDEND' | 'STOCK_SPLIT' | 'IPO'[], from_date?: string, instrument_ids?: string[], security_id?: string[], security_id_source?: string[], to_date?: string): object`\n\n**get** `/active/v1/instruments/events`\n\nRetrieves all instrument events grouped by date.\n\n### Parameters\n\n- `event_types?: 'EARNINGS' | 'DIVIDEND' | 'STOCK_SPLIT' | 'IPO'[]`\n  Filter by event type(s). Comma-delimited list. Example: `event_types=EARNINGS,IPO`.\n\n- `from_date?: string`\n  The start date for the query range, inclusive (YYYY-MM-DD).\n\n- `instrument_ids?: string[]`\n  Filter by OEMS instrument ID(s). Comma-delimited list of UUIDs. Example: `instrument_ids=550e8400-e29b-41d4-a716-446655440000`.\n\n- `security_id?: string[]`\n  Filter by security ID(s). Accepts single value or indexed array.\n\nExamples:\n- Single: `security_id=037833100`\n- Multiple: `security_id[0]=037833100&security_id[1]=594918104`\n\n- `security_id_source?: string[]`\n  Source(s) for the security ID filter. Must match the count and order of security_id.\n\nExamples:\n- Single: `security_id_source=CUSIP`\n- Multiple: `security_id_source[0]=CUSIP&security_id_source[1]=FIGI`\n\n- `to_date?: string`\n  The end date for the query range, inclusive (YYYY-MM-DD).\n\n### Returns\n\n- `{ metadata: object; error?: object; }`\n\n### Example\n\n```typescript\nimport ClearStreet from '@clear-street-internal/sdk';\n\nconst client = new ClearStreet();\n\nconst response = await client.active.v1.instruments.events.getAllInstrumentEvents();\n\nconsole.log(response);\n```",
    perLanguage: {
      http: {
        example:
          'curl https://api-active.clearstreet.io/active/v1/instruments/events \\\n    -H "Authorization: Bearer $API_KEY"',
      },
      python: {
        method: 'active.v1.instruments.events.get_all_instrument_events',
        example:
          'from clear_street import ClearStreet\n\nclient = ClearStreet(\n    api_key="My API Key",\n)\nresponse = client.active.v1.instruments.events.get_all_instrument_events()\nprint(response)',
      },
      typescript: {
        method: 'client.active.v1.instruments.events.getAllInstrumentEvents',
        example:
          "import ClearStreet from '@clear-street-internal/sdk';\n\nconst client = new ClearStreet({\n  apiKey: 'My API Key',\n});\n\nconst response = await client.active.v1.instruments.events.getAllInstrumentEvents();\n\nconsole.log(response);",
      },
    },
  },
  {
    name: 'get_instrument_events',
    endpoint: '/active/v1/instruments/{security_id_source}/{security_id}/events',
    httpMethod: 'get',
    summary: 'Get instrument events.',
    description:
      'Retrieves corporate events (dividends, splits, etc.) for an instrument, grouped by event type.\n\nDate range defaults:\n- `from_date`: today - 365 days\n- `to_date`: today + 60 days',
    stainlessPath: '(resource) active.v1.instruments.events > (method) get_instrument_events',
    qualified: 'client.active.v1.instruments.events.getInstrumentEvents',
    params: [
      'security_id_source: string;',
      'security_id: string;',
      'from_date?: string;',
      'to_date?: string;',
    ],
    response: '{ metadata: object; error?: object; }',
    markdown:
      "## get_instrument_events\n\n`client.active.v1.instruments.events.getInstrumentEvents(security_id_source: string, security_id: string, from_date?: string, to_date?: string): object`\n\n**get** `/active/v1/instruments/{security_id_source}/{security_id}/events`\n\nRetrieves corporate events (dividends, splits, etc.) for an instrument, grouped by event type.\n\nDate range defaults:\n- `from_date`: today - 365 days\n- `to_date`: today + 60 days\n\n### Parameters\n\n- `security_id_source: string`\n  Security identifier source\n\n- `security_id: string`\n\n- `from_date?: string`\n  The start date for the query range, inclusive (YYYY-MM-DD).\n\n- `to_date?: string`\n  The end date for the query range, inclusive (YYYY-MM-DD).\n\n### Returns\n\n- `{ metadata: object; error?: object; }`\n\n### Example\n\n```typescript\nimport ClearStreet from '@clear-street-internal/sdk';\n\nconst client = new ClearStreet();\n\nconst response = await client.active.v1.instruments.events.getInstrumentEvents('security_id', { security_id_source: 'CMS' });\n\nconsole.log(response);\n```",
    perLanguage: {
      http: {
        example:
          'curl https://api-active.clearstreet.io/active/v1/instruments/$SECURITY_ID_SOURCE/$SECURITY_ID/events \\\n    -H "Authorization: Bearer $API_KEY"',
      },
      python: {
        method: 'active.v1.instruments.events.get_instrument_events',
        example:
          'from clear_street import ClearStreet\n\nclient = ClearStreet(\n    api_key="My API Key",\n)\nresponse = client.active.v1.instruments.events.get_instrument_events(\n    security_id="security_id",\n    security_id_source="CMS",\n)\nprint(response)',
      },
      typescript: {
        method: 'client.active.v1.instruments.events.getInstrumentEvents',
        example:
          "import ClearStreet from '@clear-street-internal/sdk';\n\nconst client = new ClearStreet({\n  apiKey: 'My API Key',\n});\n\nconst response = await client.active.v1.instruments.events.getInstrumentEvents('security_id', {\n  security_id_source: 'CMS',\n});\n\nconsole.log(response);",
      },
    },
  },
  {
    name: 'get_option_contracts',
    endpoint: '/active/v1/instruments/options/contracts',
    httpMethod: 'get',
    summary: 'List options contracts.',
    description:
      'Returns options contracts for a given underlier with options-specific metadata.\nExactly one underlier identifier must be provided.',
    stainlessPath: '(resource) active.v1.instruments.options.contracts > (method) get_option_contracts',
    qualified: 'client.active.v1.instruments.options.contracts.getOptionContracts',
    params: [
      "contract_type?: 'CALL' | 'PUT';",
      'expiry?: string;',
      'page_size?: number;',
      'page_token?: string;',
      'underlier?: string;',
      'underlier_instrument_id?: string;',
      'underlier_security_id?: string;',
      'underlier_security_id_source?: string;',
    ],
    response: '{ metadata: object; error?: object; }',
    markdown:
      "## get_option_contracts\n\n`client.active.v1.instruments.options.contracts.getOptionContracts(contract_type?: 'CALL' | 'PUT', expiry?: string, page_size?: number, page_token?: string, underlier?: string, underlier_instrument_id?: string, underlier_security_id?: string, underlier_security_id_source?: string): object`\n\n**get** `/active/v1/instruments/options/contracts`\n\nReturns options contracts for a given underlier with options-specific metadata.\nExactly one underlier identifier must be provided.\n\n### Parameters\n\n- `contract_type?: 'CALL' | 'PUT'`\n  Filter by contract type: CALL or PUT\n\n- `expiry?: string`\n  Filter to contracts expiring on this date (YYYY-MM-DD)\n\n- `page_size?: number`\n  The number of items to return per page (only used when page_token is not provided)\n\n- `page_token?: string`\n  Token for retrieving the next page of results. Contains encoded pagination state (limit + offset).\nWhen provided, page_size is ignored.\n\n- `underlier?: string`\n  Underlier symbol (e.g., AAPL, SPX)\n\n- `underlier_instrument_id?: string`\n  OEMS instrument UUID of the underlying equity/index\n\n- `underlier_security_id?: string`\n  Security identifier of the underlying (e.g., CUSIP, ISIN). Must be paired with underlier_security_id_source.\n\n- `underlier_security_id_source?: string`\n  Security ID source for the underlier (e.g., CMS, CUSIP). Must be paired with underlier_security_id.\n\n### Returns\n\n- `{ metadata: object; error?: object; }`\n\n### Example\n\n```typescript\nimport ClearStreet from '@clear-street-internal/sdk';\n\nconst client = new ClearStreet();\n\nconst response = await client.active.v1.instruments.options.contracts.getOptionContracts();\n\nconsole.log(response);\n```",
    perLanguage: {
      http: {
        example:
          'curl https://api-active.clearstreet.io/active/v1/instruments/options/contracts \\\n    -H "Authorization: Bearer $API_KEY"',
      },
      python: {
        method: 'active.v1.instruments.options.contracts.get_option_contracts',
        example:
          'from clear_street import ClearStreet\n\nclient = ClearStreet(\n    api_key="My API Key",\n)\nresponse = client.active.v1.instruments.options.contracts.get_option_contracts()\nprint(response)',
      },
      typescript: {
        method: 'client.active.v1.instruments.options.contracts.getOptionContracts',
        example:
          "import ClearStreet from '@clear-street-internal/sdk';\n\nconst client = new ClearStreet({\n  apiKey: 'My API Key',\n});\n\nconst response = await client.active.v1.instruments.options.contracts.getOptionContracts();\n\nconsole.log(response);",
      },
    },
  },
  {
    name: 'get_instrument_reporting',
    endpoint: '/active/v1/instruments/{security_id_source}/{security_id}/reporting',
    httpMethod: 'get',
    summary: 'Get instrument reporting data.',
    description: 'Retrieves fundamental and financial reporting data for an instrument.',
    stainlessPath: '(resource) active.v1.instruments.reporting > (method) get_instrument_reporting',
    qualified: 'client.active.v1.instruments.reporting.getInstrumentReporting',
    params: ['security_id_source: string;', 'security_id: string;', 'from?: string;', 'to?: string;'],
    response: '{ metadata: object; error?: object; }',
    markdown:
      "## get_instrument_reporting\n\n`client.active.v1.instruments.reporting.getInstrumentReporting(security_id_source: string, security_id: string, from?: string, to?: string): object`\n\n**get** `/active/v1/instruments/{security_id_source}/{security_id}/reporting`\n\nRetrieves fundamental and financial reporting data for an instrument.\n\n### Parameters\n\n- `security_id_source: string`\n  Security identifier source\n\n- `security_id: string`\n\n- `from?: string`\n  The start date for the query range, inclusive (YYYY-MM-DD)\n\n- `to?: string`\n  The end date for the query range, inclusive (YYYY-MM-DD)\n\n### Returns\n\n- `{ metadata: object; error?: object; }`\n\n### Example\n\n```typescript\nimport ClearStreet from '@clear-street-internal/sdk';\n\nconst client = new ClearStreet();\n\nconst response = await client.active.v1.instruments.reporting.getInstrumentReporting('security_id', { security_id_source: 'CMS' });\n\nconsole.log(response);\n```",
    perLanguage: {
      http: {
        example:
          'curl https://api-active.clearstreet.io/active/v1/instruments/$SECURITY_ID_SOURCE/$SECURITY_ID/reporting \\\n    -H "Authorization: Bearer $API_KEY"',
      },
      python: {
        method: 'active.v1.instruments.reporting.get_instrument_reporting',
        example:
          'from clear_street import ClearStreet\n\nclient = ClearStreet(\n    api_key="My API Key",\n)\nresponse = client.active.v1.instruments.reporting.get_instrument_reporting(\n    security_id="security_id",\n    security_id_source="CMS",\n)\nprint(response)',
      },
      typescript: {
        method: 'client.active.v1.instruments.reporting.getInstrumentReporting',
        example:
          "import ClearStreet from '@clear-street-internal/sdk';\n\nconst client = new ClearStreet({\n  apiKey: 'My API Key',\n});\n\nconst response = await client.active.v1.instruments.reporting.getInstrumentReporting(\n  'security_id',\n  { security_id_source: 'CMS' },\n);\n\nconsole.log(response);",
      },
    },
  },
  {
    name: 'get_venues',
    endpoint: '/active/v1/instruments/venues',
    httpMethod: 'get',
    summary: 'Get trading venues.',
    description: 'Retrieves a list of available trading venues and exchanges.',
    stainlessPath: '(resource) active.v1.instruments.venues > (method) get_venues',
    qualified: 'client.active.v1.instruments.venues.getVenues',
    response: '{ metadata: object; error?: object; }',
    markdown:
      "## get_venues\n\n`client.active.v1.instruments.venues.getVenues(): object`\n\n**get** `/active/v1/instruments/venues`\n\nRetrieves a list of available trading venues and exchanges.\n\n### Returns\n\n- `{ metadata: object; error?: object; }`\n\n### Example\n\n```typescript\nimport ClearStreet from '@clear-street-internal/sdk';\n\nconst client = new ClearStreet();\n\nconst response = await client.active.v1.instruments.venues.getVenues();\n\nconsole.log(response);\n```",
    perLanguage: {
      http: {
        example:
          'curl https://api-active.clearstreet.io/active/v1/instruments/venues \\\n    -H "Authorization: Bearer $API_KEY"',
      },
      python: {
        method: 'active.v1.instruments.venues.get_venues',
        example:
          'from clear_street import ClearStreet\n\nclient = ClearStreet(\n    api_key="My API Key",\n)\nresponse = client.active.v1.instruments.venues.get_venues()\nprint(response)',
      },
      typescript: {
        method: 'client.active.v1.instruments.venues.getVenues',
        example:
          "import ClearStreet from '@clear-street-internal/sdk';\n\nconst client = new ClearStreet({\n  apiKey: 'My API Key',\n});\n\nconst response = await client.active.v1.instruments.venues.getVenues();\n\nconsole.log(response);",
      },
    },
  },
  {
    name: 'create_feedback_deprecated',
    endpoint: '/active/v1/iris/feedback',
    httpMethod: 'post',
    summary: 'Create feedback on a message (deprecated).',
    description: '**Deprecated**: Use `POST /omni-ai/feedback` instead.',
    stainlessPath: '(resource) active.v1.iris.feedback > (method) create_feedback_deprecated',
    qualified: 'client.active.v1.iris.feedback.createFeedbackDeprecated',
    params: [
      'account_id: string;',
      'message_id: string;',
      'score: number;',
      'thread_id: string;',
      'comment?: string;',
      'metadata?: object;',
    ],
    response: '{ metadata: object; error?: object; }',
    markdown:
      "## create_feedback_deprecated\n\n`client.active.v1.iris.feedback.createFeedbackDeprecated(account_id: string, message_id: string, score: number, thread_id: string, comment?: string, metadata?: object): object`\n\n**post** `/active/v1/iris/feedback`\n\n**Deprecated**: Use `POST /omni-ai/feedback` instead.\n\n### Parameters\n\n- `account_id: string`\n  Account ID for the request\n\n- `message_id: string`\n  Message to provide feedback on\n\n- `score: number`\n  Feedback score (-1, 0, +1 or 1-5)\n\n- `thread_id: string`\n  Thread containing the message\n\n- `comment?: string`\n  Optional feedback comment\n\n- `metadata?: object`\n  Optional metadata\n\n### Returns\n\n- `{ metadata: object; error?: object; }`\n\n### Example\n\n```typescript\nimport ClearStreet from '@clear-street-internal/sdk';\n\nconst client = new ClearStreet();\n\nconst response = await client.active.v1.iris.feedback.createFeedbackDeprecated({\n  account_id: 'account_id',\n  message_id: '182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e',\n  score: 0,\n  thread_id: '182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e',\n});\n\nconsole.log(response);\n```",
    perLanguage: {
      http: {
        example:
          'curl https://api-active.clearstreet.io/active/v1/iris/feedback \\\n    -H \'Content-Type: application/json\' \\\n    -H "Authorization: Bearer $API_KEY" \\\n    -d \'{\n          "account_id": "account_id",\n          "message_id": "182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e",\n          "score": 0,\n          "thread_id": "182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e"\n        }\'',
      },
      python: {
        method: 'active.v1.iris.feedback.create_feedback_deprecated',
        example:
          'from clear_street import ClearStreet\n\nclient = ClearStreet(\n    api_key="My API Key",\n)\nresponse = client.active.v1.iris.feedback.create_feedback_deprecated(\n    account_id="account_id",\n    message_id="182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e",\n    score=0,\n    thread_id="182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e",\n)\nprint(response)',
      },
      typescript: {
        method: 'client.active.v1.iris.feedback.createFeedbackDeprecated',
        example:
          "import ClearStreet from '@clear-street-internal/sdk';\n\nconst client = new ClearStreet({\n  apiKey: 'My API Key',\n});\n\nconst response = await client.active.v1.iris.feedback.createFeedbackDeprecated({\n  account_id: 'account_id',\n  message_id: '182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e',\n  score: 0,\n  thread_id: '182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e',\n});\n\nconsole.log(response);",
      },
    },
  },
  {
    name: 'cancel_run_deprecated',
    endpoint: '/active/v1/iris/runs/{run_id}',
    httpMethod: 'delete',
    summary: 'Cancel a running assistant run (deprecated).',
    description: '**Deprecated**: Use `DELETE /omni-ai/runs/{run_id}` instead.',
    stainlessPath: '(resource) active.v1.iris.runs > (method) cancel_run_deprecated',
    qualified: 'client.active.v1.iris.runs.cancelRunDeprecated',
    params: ['run_id: string;', 'account_id: string;', 'reason?: string;'],
    response: '{ metadata: object; error?: object; }',
    markdown:
      "## cancel_run_deprecated\n\n`client.active.v1.iris.runs.cancelRunDeprecated(run_id: string, account_id: string, reason?: string): object`\n\n**delete** `/active/v1/iris/runs/{run_id}`\n\n**Deprecated**: Use `DELETE /omni-ai/runs/{run_id}` instead.\n\n### Parameters\n\n- `run_id: string`\n\n- `account_id: string`\n  Account ID for the request\n\n- `reason?: string`\n  Reason for cancellation\n\n### Returns\n\n- `{ metadata: object; error?: object; }`\n\n### Example\n\n```typescript\nimport ClearStreet from '@clear-street-internal/sdk';\n\nconst client = new ClearStreet();\n\nconst response = await client.active.v1.iris.runs.cancelRunDeprecated('182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e', { account_id: 'account_id' });\n\nconsole.log(response);\n```",
    perLanguage: {
      http: {
        example:
          'curl https://api-active.clearstreet.io/active/v1/iris/runs/$RUN_ID \\\n    -X DELETE \\\n    -H "Authorization: Bearer $API_KEY"',
      },
      python: {
        method: 'active.v1.iris.runs.cancel_run_deprecated',
        example:
          'from clear_street import ClearStreet\n\nclient = ClearStreet(\n    api_key="My API Key",\n)\nresponse = client.active.v1.iris.runs.cancel_run_deprecated(\n    run_id="182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e",\n    account_id="account_id",\n)\nprint(response)',
      },
      typescript: {
        method: 'client.active.v1.iris.runs.cancelRunDeprecated',
        example:
          "import ClearStreet from '@clear-street-internal/sdk';\n\nconst client = new ClearStreet({\n  apiKey: 'My API Key',\n});\n\nconst response = await client.active.v1.iris.runs.cancelRunDeprecated(\n  '182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e',\n  { account_id: 'account_id' },\n);\n\nconsole.log(response);",
      },
    },
  },
  {
    name: 'get_run_deprecated',
    endpoint: '/active/v1/iris/runs/{run_id}',
    httpMethod: 'get',
    summary: 'Get run status and events (deprecated).',
    description: '**Deprecated**: Use `GET /omni-ai/runs/{run_id}` instead.',
    stainlessPath: '(resource) active.v1.iris.runs > (method) get_run_deprecated',
    qualified: 'client.active.v1.iris.runs.getRunDeprecated',
    params: ['run_id: string;', 'account_id: string;', 'page_size?: number;', 'page_token?: string;'],
    response: '{ metadata: object; error?: object; }',
    markdown:
      "## get_run_deprecated\n\n`client.active.v1.iris.runs.getRunDeprecated(run_id: string, account_id: string, page_size?: number, page_token?: string): object`\n\n**get** `/active/v1/iris/runs/{run_id}`\n\n**Deprecated**: Use `GET /omni-ai/runs/{run_id}` instead.\n\n### Parameters\n\n- `run_id: string`\n\n- `account_id: string`\n  Account ID for the request\n\n- `page_size?: number`\n  Maximum events to return\n\n- `page_token?: string`\n  Page token for incremental polling\n\n### Returns\n\n- `{ metadata: object; error?: object; }`\n\n### Example\n\n```typescript\nimport ClearStreet from '@clear-street-internal/sdk';\n\nconst client = new ClearStreet();\n\nconst response = await client.active.v1.iris.runs.getRunDeprecated('182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e', { account_id: 'account_id' });\n\nconsole.log(response);\n```",
    perLanguage: {
      http: {
        example:
          'curl https://api-active.clearstreet.io/active/v1/iris/runs/$RUN_ID \\\n    -H "Authorization: Bearer $API_KEY"',
      },
      python: {
        method: 'active.v1.iris.runs.get_run_deprecated',
        example:
          'from clear_street import ClearStreet\n\nclient = ClearStreet(\n    api_key="My API Key",\n)\nresponse = client.active.v1.iris.runs.get_run_deprecated(\n    run_id="182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e",\n    account_id="account_id",\n)\nprint(response)',
      },
      typescript: {
        method: 'client.active.v1.iris.runs.getRunDeprecated',
        example:
          "import ClearStreet from '@clear-street-internal/sdk';\n\nconst client = new ClearStreet({\n  apiKey: 'My API Key',\n});\n\nconst response = await client.active.v1.iris.runs.getRunDeprecated(\n  '182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e',\n  { account_id: 'account_id' },\n);\n\nconsole.log(response);",
      },
    },
  },
  {
    name: 'start_run_deprecated',
    endpoint: '/active/v1/iris/runs',
    httpMethod: 'post',
    summary: 'Start a new assistant run (deprecated).',
    description: '**Deprecated**: Use `POST /omni-ai/runs` instead.',
    stainlessPath: '(resource) active.v1.iris.runs > (method) start_run_deprecated',
    qualified: 'client.active.v1.iris.runs.startRunDeprecated',
    params: [
      'account_id: string;',
      'command_text: string;',
      "capabilities?: 'NAVIGATE' | 'OPEN_CHAT_WINDOW' | 'PREFILL_ORDER' | 'OPEN_CHART' | 'OPEN_SCREENER'[];",
      'thread_id?: string;',
      'thread_title?: string;',
    ],
    response: '{ metadata: object; error?: object; }',
    markdown:
      "## start_run_deprecated\n\n`client.active.v1.iris.runs.startRunDeprecated(account_id: string, command_text: string, capabilities?: 'NAVIGATE' | 'OPEN_CHAT_WINDOW' | 'PREFILL_ORDER' | 'OPEN_CHART' | 'OPEN_SCREENER'[], thread_id?: string, thread_title?: string): object`\n\n**post** `/active/v1/iris/runs`\n\n**Deprecated**: Use `POST /omni-ai/runs` instead.\n\n### Parameters\n\n- `account_id: string`\n  Account ID for the request\n\n- `command_text: string`\n  The user's natural language command\n\n- `capabilities?: 'NAVIGATE' | 'OPEN_CHAT_WINDOW' | 'PREFILL_ORDER' | 'OPEN_CHART' | 'OPEN_SCREENER'[]`\n  Capabilities for structured actions\n\n- `thread_id?: string`\n  Optional thread ID to continue an existing conversation\n\n- `thread_title?: string`\n  Optional title for new threads\n\n### Returns\n\n- `{ metadata: object; error?: object; }`\n\n### Example\n\n```typescript\nimport ClearStreet from '@clear-street-internal/sdk';\n\nconst client = new ClearStreet();\n\nconst response = await client.active.v1.iris.runs.startRunDeprecated({ account_id: 'account_id', command_text: 'command_text' });\n\nconsole.log(response);\n```",
    perLanguage: {
      http: {
        example:
          'curl https://api-active.clearstreet.io/active/v1/iris/runs \\\n    -H \'Content-Type: application/json\' \\\n    -H "Authorization: Bearer $API_KEY" \\\n    -d \'{\n          "account_id": "account_id",\n          "command_text": "command_text"\n        }\'',
      },
      python: {
        method: 'active.v1.iris.runs.start_run_deprecated',
        example:
          'from clear_street import ClearStreet\n\nclient = ClearStreet(\n    api_key="My API Key",\n)\nresponse = client.active.v1.iris.runs.start_run_deprecated(\n    account_id="account_id",\n    command_text="command_text",\n)\nprint(response)',
      },
      typescript: {
        method: 'client.active.v1.iris.runs.startRunDeprecated',
        example:
          "import ClearStreet from '@clear-street-internal/sdk';\n\nconst client = new ClearStreet({\n  apiKey: 'My API Key',\n});\n\nconst response = await client.active.v1.iris.runs.startRunDeprecated({\n  account_id: 'account_id',\n  command_text: 'command_text',\n});\n\nconsole.log(response);",
      },
    },
  },
  {
    name: 'get_thread_deprecated',
    endpoint: '/active/v1/iris/threads/{thread_id}',
    httpMethod: 'get',
    summary: 'Get a specific thread (deprecated).',
    description: '**Deprecated**: Use `GET /omni-ai/threads/{thread_id}` instead.',
    stainlessPath: '(resource) active.v1.iris.threads > (method) get_thread_deprecated',
    qualified: 'client.active.v1.iris.threads.getThreadDeprecated',
    params: ['thread_id: string;', 'account_id: string;'],
    response: '{ metadata: object; error?: object; }',
    markdown:
      "## get_thread_deprecated\n\n`client.active.v1.iris.threads.getThreadDeprecated(thread_id: string, account_id: string): object`\n\n**get** `/active/v1/iris/threads/{thread_id}`\n\n**Deprecated**: Use `GET /omni-ai/threads/{thread_id}` instead.\n\n### Parameters\n\n- `thread_id: string`\n\n- `account_id: string`\n  Account ID for the request\n\n### Returns\n\n- `{ metadata: object; error?: object; }`\n\n### Example\n\n```typescript\nimport ClearStreet from '@clear-street-internal/sdk';\n\nconst client = new ClearStreet();\n\nconst response = await client.active.v1.iris.threads.getThreadDeprecated('182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e', { account_id: 'account_id' });\n\nconsole.log(response);\n```",
    perLanguage: {
      http: {
        example:
          'curl https://api-active.clearstreet.io/active/v1/iris/threads/$THREAD_ID \\\n    -H "Authorization: Bearer $API_KEY"',
      },
      python: {
        method: 'active.v1.iris.threads.get_thread_deprecated',
        example:
          'from clear_street import ClearStreet\n\nclient = ClearStreet(\n    api_key="My API Key",\n)\nresponse = client.active.v1.iris.threads.get_thread_deprecated(\n    thread_id="182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e",\n    account_id="account_id",\n)\nprint(response)',
      },
      typescript: {
        method: 'client.active.v1.iris.threads.getThreadDeprecated',
        example:
          "import ClearStreet from '@clear-street-internal/sdk';\n\nconst client = new ClearStreet({\n  apiKey: 'My API Key',\n});\n\nconst response = await client.active.v1.iris.threads.getThreadDeprecated(\n  '182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e',\n  { account_id: 'account_id' },\n);\n\nconsole.log(response);",
      },
    },
  },
  {
    name: 'list_threads_deprecated',
    endpoint: '/active/v1/iris/threads',
    httpMethod: 'get',
    summary: 'List conversation threads (deprecated).',
    description: '**Deprecated**: Use `GET /omni-ai/threads` instead.',
    stainlessPath: '(resource) active.v1.iris.threads > (method) list_threads_deprecated',
    qualified: 'client.active.v1.iris.threads.listThreadsDeprecated',
    params: ['account_id: string;', 'page_size?: number;', 'page_token?: string;'],
    response: '{ metadata: object; error?: object; }',
    markdown:
      "## list_threads_deprecated\n\n`client.active.v1.iris.threads.listThreadsDeprecated(account_id: string, page_size?: number, page_token?: string): object`\n\n**get** `/active/v1/iris/threads`\n\n**Deprecated**: Use `GET /omni-ai/threads` instead.\n\n### Parameters\n\n- `account_id: string`\n  Account ID for the request\n\n- `page_size?: number`\n  Maximum threads to return\n\n- `page_token?: string`\n  Page token for pagination\n\n### Returns\n\n- `{ metadata: object; error?: object; }`\n\n### Example\n\n```typescript\nimport ClearStreet from '@clear-street-internal/sdk';\n\nconst client = new ClearStreet();\n\nconst response = await client.active.v1.iris.threads.listThreadsDeprecated({ account_id: 'account_id' });\n\nconsole.log(response);\n```",
    perLanguage: {
      http: {
        example:
          'curl https://api-active.clearstreet.io/active/v1/iris/threads \\\n    -H "Authorization: Bearer $API_KEY"',
      },
      python: {
        method: 'active.v1.iris.threads.list_threads_deprecated',
        example:
          'from clear_street import ClearStreet\n\nclient = ClearStreet(\n    api_key="My API Key",\n)\nresponse = client.active.v1.iris.threads.list_threads_deprecated(\n    account_id="account_id",\n)\nprint(response)',
      },
      typescript: {
        method: 'client.active.v1.iris.threads.listThreadsDeprecated',
        example:
          "import ClearStreet from '@clear-street-internal/sdk';\n\nconst client = new ClearStreet({\n  apiKey: 'My API Key',\n});\n\nconst response = await client.active.v1.iris.threads.listThreadsDeprecated({\n  account_id: 'account_id',\n});\n\nconsole.log(response);",
      },
    },
  },
  {
    name: 'list_messages_deprecated',
    endpoint: '/active/v1/iris/threads/{thread_id}/messages',
    httpMethod: 'get',
    summary: 'List messages in a thread (deprecated).',
    description: '**Deprecated**: Use `GET /omni-ai/threads/{thread_id}/messages` instead.',
    stainlessPath: '(resource) active.v1.iris.threads.messages > (method) list_messages_deprecated',
    qualified: 'client.active.v1.iris.threads.messages.listMessagesDeprecated',
    params: [
      'thread_id: string;',
      'account_id: string;',
      'after_seq?: number;',
      'page_size?: number;',
      'page_token?: string;',
    ],
    response: '{ metadata: object; error?: object; }',
    markdown:
      "## list_messages_deprecated\n\n`client.active.v1.iris.threads.messages.listMessagesDeprecated(thread_id: string, account_id: string, after_seq?: number, page_size?: number, page_token?: string): object`\n\n**get** `/active/v1/iris/threads/{thread_id}/messages`\n\n**Deprecated**: Use `GET /omni-ai/threads/{thread_id}/messages` instead.\n\n### Parameters\n\n- `thread_id: string`\n\n- `account_id: string`\n  Account ID for the request\n\n- `after_seq?: number`\n  Return messages after this sequence number\n\n- `page_size?: number`\n  Maximum messages to return\n\n- `page_token?: string`\n  Page token for pagination\n\n### Returns\n\n- `{ metadata: object; error?: object; }`\n\n### Example\n\n```typescript\nimport ClearStreet from '@clear-street-internal/sdk';\n\nconst client = new ClearStreet();\n\nconst response = await client.active.v1.iris.threads.messages.listMessagesDeprecated('182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e', { account_id: 'account_id' });\n\nconsole.log(response);\n```",
    perLanguage: {
      http: {
        example:
          'curl https://api-active.clearstreet.io/active/v1/iris/threads/$THREAD_ID/messages \\\n    -H "Authorization: Bearer $API_KEY"',
      },
      python: {
        method: 'active.v1.iris.threads.messages.list_messages_deprecated',
        example:
          'from clear_street import ClearStreet\n\nclient = ClearStreet(\n    api_key="My API Key",\n)\nresponse = client.active.v1.iris.threads.messages.list_messages_deprecated(\n    thread_id="182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e",\n    account_id="account_id",\n)\nprint(response)',
      },
      typescript: {
        method: 'client.active.v1.iris.threads.messages.listMessagesDeprecated',
        example:
          "import ClearStreet from '@clear-street-internal/sdk';\n\nconst client = new ClearStreet({\n  apiKey: 'My API Key',\n});\n\nconst response = await client.active.v1.iris.threads.messages.listMessagesDeprecated(\n  '182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e',\n  { account_id: 'account_id' },\n);\n\nconsole.log(response);",
      },
    },
  },
  {
    name: 'get_snapshots',
    endpoint: '/active/v1/market-data/snapshot',
    httpMethod: 'get',
    summary: 'Get market data snapshots for one or more securities.',
    description: 'Get market data snapshots for one or more securities.',
    stainlessPath: '(resource) active.v1.market-data.snapshot > (method) get_snapshots',
    qualified: 'client.active.v1.marketData.snapshot.getSnapshots',
    params: ['ids?: string;', 'security_id?: string[];', 'security_id_source?: string[];'],
    response: '{ metadata: object; error?: object; }',
    markdown:
      "## get_snapshots\n\n`client.active.v1.marketData.snapshot.getSnapshots(ids?: string, security_id?: string[], security_id_source?: string[]): object`\n\n**get** `/active/v1/market-data/snapshot`\n\nGet market data snapshots for one or more securities.\n\n### Parameters\n\n- `ids?: string`\n  Comma-separated OEMS instrument UUIDs\n\n- `security_id?: string[]`\n  Filter by security ID(s). Accepts single value or indexed array.\n\nExamples:\n- Single: `security_id=037833100`\n- Multiple: `security_id[0]=037833100&security_id[1]=594918104`\n\n- `security_id_source?: string[]`\n  Source(s) for the security ID filter. Must match the count and order of security_id.\n\nExamples:\n- Single: `security_id_source=CUSIP`\n- Multiple: `security_id_source[0]=CUSIP&security_id_source[1]=FIGI`\n\n### Returns\n\n- `{ metadata: object; error?: object; }`\n\n### Example\n\n```typescript\nimport ClearStreet from '@clear-street-internal/sdk';\n\nconst client = new ClearStreet();\n\nconst response = await client.active.v1.marketData.snapshot.getSnapshots();\n\nconsole.log(response);\n```",
    perLanguage: {
      http: {
        example:
          'curl https://api-active.clearstreet.io/active/v1/market-data/snapshot \\\n    -H "Authorization: Bearer $API_KEY"',
      },
      python: {
        method: 'active.v1.market_data.snapshot.get_snapshots',
        example:
          'from clear_street import ClearStreet\n\nclient = ClearStreet(\n    api_key="My API Key",\n)\nresponse = client.active.v1.market_data.snapshot.get_snapshots()\nprint(response)',
      },
      typescript: {
        method: 'client.active.v1.marketData.snapshot.getSnapshots',
        example:
          "import ClearStreet from '@clear-street-internal/sdk';\n\nconst client = new ClearStreet({\n  apiKey: 'My API Key',\n});\n\nconst response = await client.active.v1.marketData.snapshot.getSnapshots();\n\nconsole.log(response);",
      },
    },
  },
  {
    name: 'get_news',
    endpoint: '/active/v1/news',
    httpMethod: 'get',
    summary: 'Get news.',
    description:
      'Retrieves news items with optional filtering by security IDs, time range, publisher,\ntype, and text query.',
    stainlessPath: '(resource) active.v1.news > (method) get_news',
    qualified: 'client.active.v1.news.getNews',
    params: [
      'exclude_publishers?: string;',
      'from?: string;',
      'include_publishers?: string;',
      'instrument_ids?: string[];',
      "news_type?: 'NEWS' | 'PRESS_RELEASE';",
      'page_size?: number;',
      'page_token?: string;',
      'search_query?: string;',
      'security_id?: string[];',
      'security_id_source?: string[];',
      'to?: string;',
    ],
    response: '{ metadata: object; error?: object; }',
    markdown:
      "## get_news\n\n`client.active.v1.news.getNews(exclude_publishers?: string, from?: string, include_publishers?: string, instrument_ids?: string[], news_type?: 'NEWS' | 'PRESS_RELEASE', page_size?: number, page_token?: string, search_query?: string, security_id?: string[], security_id_source?: string[], to?: string): object`\n\n**get** `/active/v1/news`\n\nRetrieves news items with optional filtering by security IDs, time range, publisher,\ntype, and text query.\n\n### Parameters\n\n- `exclude_publishers?: string`\n  Comma-separated list of publishers to exclude (mutually exclusive with include_publishers).\n\n- `from?: string`\n  Inclusive start timestamp. Accepts `YYYY-MM-DD` or RFC3339 datetime.\n\n- `include_publishers?: string`\n  Comma-separated list of publishers to include (mutually exclusive with exclude_publishers).\n\n- `instrument_ids?: string[]`\n  Comma-delimited OEMS instrument UUIDs to filter by.\n\n- `news_type?: 'NEWS' | 'PRESS_RELEASE'`\n  Filter by news type.\n\n- `page_size?: number`\n  The number of items to return per page (only used when page_token is not provided)\n\n- `page_token?: string`\n  Token for retrieving the next page of results. Contains encoded pagination state (limit + offset).\nWhen provided, page_size is ignored.\n\n- `search_query?: string`\n  Free-text query matched against title/text and associated security IDs.\n\n- `security_id?: string[]`\n  Filter by security ID(s). Accepts single value or indexed array.\n\nExamples:\n- Single: `security_id=037833100`\n- Multiple: `security_id[0]=037833100&security_id[1]=594918104`\n\n- `security_id_source?: string[]`\n  Source(s) for the security ID filter. Must match the count and order of security_id.\n\nExamples:\n- Single: `security_id_source=CUSIP`\n- Multiple: `security_id_source[0]=CUSIP&security_id_source[1]=FIGI`\n\n- `to?: string`\n  Inclusive end timestamp. Accepts `YYYY-MM-DD` or RFC3339 datetime.\n\n### Returns\n\n- `{ metadata: object; error?: object; }`\n\n### Example\n\n```typescript\nimport ClearStreet from '@clear-street-internal/sdk';\n\nconst client = new ClearStreet();\n\nconst response = await client.active.v1.news.getNews();\n\nconsole.log(response);\n```",
    perLanguage: {
      http: {
        example:
          'curl https://api-active.clearstreet.io/active/v1/news \\\n    -H "Authorization: Bearer $API_KEY"',
      },
      python: {
        method: 'active.v1.news.get_news',
        example:
          'from clear_street import ClearStreet\n\nclient = ClearStreet(\n    api_key="My API Key",\n)\nresponse = client.active.v1.news.get_news()\nprint(response)',
      },
      typescript: {
        method: 'client.active.v1.news.getNews',
        example:
          "import ClearStreet from '@clear-street-internal/sdk';\n\nconst client = new ClearStreet({\n  apiKey: 'My API Key',\n});\n\nconst response = await client.active.v1.news.getNews();\n\nconsole.log(response);",
      },
    },
  },
  {
    name: 'create_feedback',
    endpoint: '/active/v1/omni-ai/feedback',
    httpMethod: 'post',
    summary: 'Create feedback on a message.',
    description: 'Submit user feedback (thumbs up/down, rating, comment) for an assistant message.',
    stainlessPath: '(resource) active.v1.omni-ai.feedback > (method) create_feedback',
    qualified: 'client.active.v1.omniAI.feedback.createFeedback',
    params: [
      'account_id: string;',
      'message_id: string;',
      'score: number;',
      'thread_id: string;',
      'comment?: string;',
      'metadata?: object;',
    ],
    response: '{ metadata: object; error?: object; }',
    markdown:
      "## create_feedback\n\n`client.active.v1.omniAI.feedback.createFeedback(account_id: string, message_id: string, score: number, thread_id: string, comment?: string, metadata?: object): object`\n\n**post** `/active/v1/omni-ai/feedback`\n\nSubmit user feedback (thumbs up/down, rating, comment) for an assistant message.\n\n### Parameters\n\n- `account_id: string`\n  Account ID for the request\n\n- `message_id: string`\n  Message to provide feedback on\n\n- `score: number`\n  Feedback score (-1, 0, +1 or 1-5)\n\n- `thread_id: string`\n  Thread containing the message\n\n- `comment?: string`\n  Optional feedback comment\n\n- `metadata?: object`\n  Optional metadata\n\n### Returns\n\n- `{ metadata: object; error?: object; }`\n\n### Example\n\n```typescript\nimport ClearStreet from '@clear-street-internal/sdk';\n\nconst client = new ClearStreet();\n\nconst response = await client.active.v1.omniAI.feedback.createFeedback({\n  account_id: 'account_id',\n  message_id: '182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e',\n  score: 0,\n  thread_id: '182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e',\n});\n\nconsole.log(response);\n```",
    perLanguage: {
      http: {
        example:
          'curl https://api-active.clearstreet.io/active/v1/omni-ai/feedback \\\n    -H \'Content-Type: application/json\' \\\n    -H "Authorization: Bearer $API_KEY" \\\n    -d \'{\n          "account_id": "account_id",\n          "message_id": "182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e",\n          "score": 0,\n          "thread_id": "182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e"\n        }\'',
      },
      python: {
        method: 'active.v1.omni_ai.feedback.create_feedback',
        example:
          'from clear_street import ClearStreet\n\nclient = ClearStreet(\n    api_key="My API Key",\n)\nresponse = client.active.v1.omni_ai.feedback.create_feedback(\n    account_id="account_id",\n    message_id="182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e",\n    score=0,\n    thread_id="182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e",\n)\nprint(response)',
      },
      typescript: {
        method: 'client.active.v1.omniAI.feedback.createFeedback',
        example:
          "import ClearStreet from '@clear-street-internal/sdk';\n\nconst client = new ClearStreet({\n  apiKey: 'My API Key',\n});\n\nconst response = await client.active.v1.omniAI.feedback.createFeedback({\n  account_id: 'account_id',\n  message_id: '182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e',\n  score: 0,\n  thread_id: '182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e',\n});\n\nconsole.log(response);",
      },
    },
  },
  {
    name: 'cancel_run',
    endpoint: '/active/v1/omni-ai/runs/{run_id}',
    httpMethod: 'delete',
    summary: 'Cancel a running assistant run.',
    description: 'Cancel a running assistant run.',
    stainlessPath: '(resource) active.v1.omni-ai.runs > (method) cancel_run',
    qualified: 'client.active.v1.omniAI.runs.cancelRun',
    params: ['run_id: string;', 'account_id: string;', 'reason?: string;'],
    response: '{ metadata: object; error?: object; }',
    markdown:
      "## cancel_run\n\n`client.active.v1.omniAI.runs.cancelRun(run_id: string, account_id: string, reason?: string): object`\n\n**delete** `/active/v1/omni-ai/runs/{run_id}`\n\nCancel a running assistant run.\n\n### Parameters\n\n- `run_id: string`\n\n- `account_id: string`\n  Account ID for the request\n\n- `reason?: string`\n  Reason for cancellation\n\n### Returns\n\n- `{ metadata: object; error?: object; }`\n\n### Example\n\n```typescript\nimport ClearStreet from '@clear-street-internal/sdk';\n\nconst client = new ClearStreet();\n\nconst response = await client.active.v1.omniAI.runs.cancelRun('182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e', { account_id: 'account_id' });\n\nconsole.log(response);\n```",
    perLanguage: {
      http: {
        example:
          'curl https://api-active.clearstreet.io/active/v1/omni-ai/runs/$RUN_ID \\\n    -X DELETE \\\n    -H "Authorization: Bearer $API_KEY"',
      },
      python: {
        method: 'active.v1.omni_ai.runs.cancel_run',
        example:
          'from clear_street import ClearStreet\n\nclient = ClearStreet(\n    api_key="My API Key",\n)\nresponse = client.active.v1.omni_ai.runs.cancel_run(\n    run_id="182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e",\n    account_id="account_id",\n)\nprint(response)',
      },
      typescript: {
        method: 'client.active.v1.omniAI.runs.cancelRun',
        example:
          "import ClearStreet from '@clear-street-internal/sdk';\n\nconst client = new ClearStreet({\n  apiKey: 'My API Key',\n});\n\nconst response = await client.active.v1.omniAI.runs.cancelRun(\n  '182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e',\n  { account_id: 'account_id' },\n);\n\nconsole.log(response);",
      },
    },
  },
  {
    name: 'get_run',
    endpoint: '/active/v1/omni-ai/runs/{run_id}',
    httpMethod: 'get',
    summary: 'Get run status and events.',
    description: 'Poll for the current status of a run and any new events since the last poll.',
    stainlessPath: '(resource) active.v1.omni-ai.runs > (method) get_run',
    qualified: 'client.active.v1.omniAI.runs.getRun',
    params: ['run_id: string;', 'account_id: string;', 'page_size?: number;', 'page_token?: string;'],
    response: '{ metadata: object; error?: object; }',
    markdown:
      "## get_run\n\n`client.active.v1.omniAI.runs.getRun(run_id: string, account_id: string, page_size?: number, page_token?: string): object`\n\n**get** `/active/v1/omni-ai/runs/{run_id}`\n\nPoll for the current status of a run and any new events since the last poll.\n\n### Parameters\n\n- `run_id: string`\n\n- `account_id: string`\n  Account ID for the request\n\n- `page_size?: number`\n  Maximum events to return\n\n- `page_token?: string`\n  Page token for incremental polling\n\n### Returns\n\n- `{ metadata: object; error?: object; }`\n\n### Example\n\n```typescript\nimport ClearStreet from '@clear-street-internal/sdk';\n\nconst client = new ClearStreet();\n\nconst response = await client.active.v1.omniAI.runs.getRun('182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e', { account_id: 'account_id' });\n\nconsole.log(response);\n```",
    perLanguage: {
      http: {
        example:
          'curl https://api-active.clearstreet.io/active/v1/omni-ai/runs/$RUN_ID \\\n    -H "Authorization: Bearer $API_KEY"',
      },
      python: {
        method: 'active.v1.omni_ai.runs.get_run',
        example:
          'from clear_street import ClearStreet\n\nclient = ClearStreet(\n    api_key="My API Key",\n)\nresponse = client.active.v1.omni_ai.runs.get_run(\n    run_id="182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e",\n    account_id="account_id",\n)\nprint(response)',
      },
      typescript: {
        method: 'client.active.v1.omniAI.runs.getRun',
        example:
          "import ClearStreet from '@clear-street-internal/sdk';\n\nconst client = new ClearStreet({\n  apiKey: 'My API Key',\n});\n\nconst response = await client.active.v1.omniAI.runs.getRun('182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e', {\n  account_id: 'account_id',\n});\n\nconsole.log(response);",
      },
    },
  },
  {
    name: 'start_run',
    endpoint: '/active/v1/omni-ai/runs',
    httpMethod: 'post',
    summary: 'Start a new assistant run.',
    description:
      'Begins an agentic conversation run. If thread_id is provided, continues an existing\nconversation; otherwise creates a new thread.',
    stainlessPath: '(resource) active.v1.omni-ai.runs > (method) start_run',
    qualified: 'client.active.v1.omniAI.runs.startRun',
    params: [
      'account_id: string;',
      'command_text: string;',
      "capabilities?: 'NAVIGATE' | 'OPEN_CHAT_WINDOW' | 'PREFILL_ORDER' | 'OPEN_CHART' | 'OPEN_SCREENER'[];",
      'thread_id?: string;',
      'thread_title?: string;',
    ],
    response: '{ metadata: object; error?: object; }',
    markdown:
      "## start_run\n\n`client.active.v1.omniAI.runs.startRun(account_id: string, command_text: string, capabilities?: 'NAVIGATE' | 'OPEN_CHAT_WINDOW' | 'PREFILL_ORDER' | 'OPEN_CHART' | 'OPEN_SCREENER'[], thread_id?: string, thread_title?: string): object`\n\n**post** `/active/v1/omni-ai/runs`\n\nBegins an agentic conversation run. If thread_id is provided, continues an existing\nconversation; otherwise creates a new thread.\n\n### Parameters\n\n- `account_id: string`\n  Account ID for the request\n\n- `command_text: string`\n  The user's natural language command\n\n- `capabilities?: 'NAVIGATE' | 'OPEN_CHAT_WINDOW' | 'PREFILL_ORDER' | 'OPEN_CHART' | 'OPEN_SCREENER'[]`\n  Capabilities for structured actions\n\n- `thread_id?: string`\n  Optional thread ID to continue an existing conversation\n\n- `thread_title?: string`\n  Optional title for new threads\n\n### Returns\n\n- `{ metadata: object; error?: object; }`\n\n### Example\n\n```typescript\nimport ClearStreet from '@clear-street-internal/sdk';\n\nconst client = new ClearStreet();\n\nconst response = await client.active.v1.omniAI.runs.startRun({ account_id: 'account_id', command_text: 'command_text' });\n\nconsole.log(response);\n```",
    perLanguage: {
      http: {
        example:
          'curl https://api-active.clearstreet.io/active/v1/omni-ai/runs \\\n    -H \'Content-Type: application/json\' \\\n    -H "Authorization: Bearer $API_KEY" \\\n    -d \'{\n          "account_id": "account_id",\n          "command_text": "command_text"\n        }\'',
      },
      python: {
        method: 'active.v1.omni_ai.runs.start_run',
        example:
          'from clear_street import ClearStreet\n\nclient = ClearStreet(\n    api_key="My API Key",\n)\nresponse = client.active.v1.omni_ai.runs.start_run(\n    account_id="account_id",\n    command_text="command_text",\n)\nprint(response)',
      },
      typescript: {
        method: 'client.active.v1.omniAI.runs.startRun',
        example:
          "import ClearStreet from '@clear-street-internal/sdk';\n\nconst client = new ClearStreet({\n  apiKey: 'My API Key',\n});\n\nconst response = await client.active.v1.omniAI.runs.startRun({\n  account_id: 'account_id',\n  command_text: 'command_text',\n});\n\nconsole.log(response);",
      },
    },
  },
  {
    name: 'get_thread',
    endpoint: '/active/v1/omni-ai/threads/{thread_id}',
    httpMethod: 'get',
    summary: 'Get a specific thread.',
    description: 'Get a specific thread.',
    stainlessPath: '(resource) active.v1.omni-ai.threads > (method) get_thread',
    qualified: 'client.active.v1.omniAI.threads.getThread',
    params: ['thread_id: string;', 'account_id: string;'],
    response: '{ metadata: object; error?: object; }',
    markdown:
      "## get_thread\n\n`client.active.v1.omniAI.threads.getThread(thread_id: string, account_id: string): object`\n\n**get** `/active/v1/omni-ai/threads/{thread_id}`\n\nGet a specific thread.\n\n### Parameters\n\n- `thread_id: string`\n\n- `account_id: string`\n  Account ID for the request\n\n### Returns\n\n- `{ metadata: object; error?: object; }`\n\n### Example\n\n```typescript\nimport ClearStreet from '@clear-street-internal/sdk';\n\nconst client = new ClearStreet();\n\nconst response = await client.active.v1.omniAI.threads.getThread('182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e', { account_id: 'account_id' });\n\nconsole.log(response);\n```",
    perLanguage: {
      http: {
        example:
          'curl https://api-active.clearstreet.io/active/v1/omni-ai/threads/$THREAD_ID \\\n    -H "Authorization: Bearer $API_KEY"',
      },
      python: {
        method: 'active.v1.omni_ai.threads.get_thread',
        example:
          'from clear_street import ClearStreet\n\nclient = ClearStreet(\n    api_key="My API Key",\n)\nresponse = client.active.v1.omni_ai.threads.get_thread(\n    thread_id="182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e",\n    account_id="account_id",\n)\nprint(response)',
      },
      typescript: {
        method: 'client.active.v1.omniAI.threads.getThread',
        example:
          "import ClearStreet from '@clear-street-internal/sdk';\n\nconst client = new ClearStreet({\n  apiKey: 'My API Key',\n});\n\nconst response = await client.active.v1.omniAI.threads.getThread(\n  '182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e',\n  { account_id: 'account_id' },\n);\n\nconsole.log(response);",
      },
    },
  },
  {
    name: 'list_threads',
    endpoint: '/active/v1/omni-ai/threads',
    httpMethod: 'get',
    summary: 'List conversation threads.',
    description: 'Retrieves threads for the authenticated user.',
    stainlessPath: '(resource) active.v1.omni-ai.threads > (method) list_threads',
    qualified: 'client.active.v1.omniAI.threads.listThreads',
    params: ['account_id: string;', 'page_size?: number;', 'page_token?: string;'],
    response: '{ metadata: object; error?: object; }',
    markdown:
      "## list_threads\n\n`client.active.v1.omniAI.threads.listThreads(account_id: string, page_size?: number, page_token?: string): object`\n\n**get** `/active/v1/omni-ai/threads`\n\nRetrieves threads for the authenticated user.\n\n### Parameters\n\n- `account_id: string`\n  Account ID for the request\n\n- `page_size?: number`\n  Maximum threads to return\n\n- `page_token?: string`\n  Page token for pagination\n\n### Returns\n\n- `{ metadata: object; error?: object; }`\n\n### Example\n\n```typescript\nimport ClearStreet from '@clear-street-internal/sdk';\n\nconst client = new ClearStreet();\n\nconst response = await client.active.v1.omniAI.threads.listThreads({ account_id: 'account_id' });\n\nconsole.log(response);\n```",
    perLanguage: {
      http: {
        example:
          'curl https://api-active.clearstreet.io/active/v1/omni-ai/threads \\\n    -H "Authorization: Bearer $API_KEY"',
      },
      python: {
        method: 'active.v1.omni_ai.threads.list_threads',
        example:
          'from clear_street import ClearStreet\n\nclient = ClearStreet(\n    api_key="My API Key",\n)\nresponse = client.active.v1.omni_ai.threads.list_threads(\n    account_id="account_id",\n)\nprint(response)',
      },
      typescript: {
        method: 'client.active.v1.omniAI.threads.listThreads',
        example:
          "import ClearStreet from '@clear-street-internal/sdk';\n\nconst client = new ClearStreet({\n  apiKey: 'My API Key',\n});\n\nconst response = await client.active.v1.omniAI.threads.listThreads({ account_id: 'account_id' });\n\nconsole.log(response);",
      },
    },
  },
  {
    name: 'list_messages',
    endpoint: '/active/v1/omni-ai/threads/{thread_id}/messages',
    httpMethod: 'get',
    summary: 'List messages in a thread.',
    description: 'List messages in a thread.',
    stainlessPath: '(resource) active.v1.omni-ai.threads.messages > (method) list_messages',
    qualified: 'client.active.v1.omniAI.threads.messages.listMessages',
    params: [
      'thread_id: string;',
      'account_id: string;',
      'after_seq?: number;',
      'page_size?: number;',
      'page_token?: string;',
    ],
    response: '{ metadata: object; error?: object; }',
    markdown:
      "## list_messages\n\n`client.active.v1.omniAI.threads.messages.listMessages(thread_id: string, account_id: string, after_seq?: number, page_size?: number, page_token?: string): object`\n\n**get** `/active/v1/omni-ai/threads/{thread_id}/messages`\n\nList messages in a thread.\n\n### Parameters\n\n- `thread_id: string`\n\n- `account_id: string`\n  Account ID for the request\n\n- `after_seq?: number`\n  Return messages after this sequence number\n\n- `page_size?: number`\n  Maximum messages to return\n\n- `page_token?: string`\n  Page token for pagination\n\n### Returns\n\n- `{ metadata: object; error?: object; }`\n\n### Example\n\n```typescript\nimport ClearStreet from '@clear-street-internal/sdk';\n\nconst client = new ClearStreet();\n\nconst response = await client.active.v1.omniAI.threads.messages.listMessages('182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e', { account_id: 'account_id' });\n\nconsole.log(response);\n```",
    perLanguage: {
      http: {
        example:
          'curl https://api-active.clearstreet.io/active/v1/omni-ai/threads/$THREAD_ID/messages \\\n    -H "Authorization: Bearer $API_KEY"',
      },
      python: {
        method: 'active.v1.omni_ai.threads.messages.list_messages',
        example:
          'from clear_street import ClearStreet\n\nclient = ClearStreet(\n    api_key="My API Key",\n)\nresponse = client.active.v1.omni_ai.threads.messages.list_messages(\n    thread_id="182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e",\n    account_id="account_id",\n)\nprint(response)',
      },
      typescript: {
        method: 'client.active.v1.omniAI.threads.messages.listMessages',
        example:
          "import ClearStreet from '@clear-street-internal/sdk';\n\nconst client = new ClearStreet({\n  apiKey: 'My API Key',\n});\n\nconst response = await client.active.v1.omniAI.threads.messages.listMessages(\n  '182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e',\n  { account_id: 'account_id' },\n);\n\nconsole.log(response);",
      },
    },
  },
  {
    name: 'create_screener',
    endpoint: '/active/v1/saved-screeners',
    httpMethod: 'post',
    summary: 'Create a saved screener configuration.',
    description: 'Persists a screener configuration for the authenticated user.',
    stainlessPath: '(resource) active.v1.saved-screeners > (method) create_screener',
    qualified: 'client.active.v1.savedScreeners.createScreener',
    params: [
      'field_filter?: string[];',
      'filters?: { field_name: string; operation: string; value: string; }[];',
      'name?: string;',
      'sort_by?: string;',
      "sort_direction?: 'ASC' | 'DESC';",
    ],
    response: '{ metadata: object; error?: object; }',
    markdown:
      "## create_screener\n\n`client.active.v1.savedScreeners.createScreener(field_filter?: string[], filters?: { field_name: string; operation: string; value: string; }[], name?: string, sort_by?: string, sort_direction?: 'ASC' | 'DESC'): object`\n\n**post** `/active/v1/saved-screeners`\n\nPersists a screener configuration for the authenticated user.\n\n### Parameters\n\n- `field_filter?: string[]`\n  List of field names to include when running this screener\n\n- `filters?: { field_name: string; operation: string; value: string; }[]`\n  Filter criteria for this screener\n\n- `name?: string`\n  The name for this screener configuration\n\n- `sort_by?: string`\n  Field name to sort results by\n\n- `sort_direction?: 'ASC' | 'DESC'`\n  Sort direction for results\n\n### Returns\n\n- `{ metadata: object; error?: object; }`\n\n### Example\n\n```typescript\nimport ClearStreet from '@clear-street-internal/sdk';\n\nconst client = new ClearStreet();\n\nconst response = await client.active.v1.savedScreeners.createScreener();\n\nconsole.log(response);\n```",
    perLanguage: {
      http: {
        example:
          "curl https://api-active.clearstreet.io/active/v1/saved-screeners \\\n    -H 'Content-Type: application/json' \\\n    -H \"Authorization: Bearer $API_KEY\" \\\n    -d '{}'",
      },
      python: {
        method: 'active.v1.saved_screeners.create_screener',
        example:
          'from clear_street import ClearStreet\n\nclient = ClearStreet(\n    api_key="My API Key",\n)\nresponse = client.active.v1.saved_screeners.create_screener()\nprint(response)',
      },
      typescript: {
        method: 'client.active.v1.savedScreeners.createScreener',
        example:
          "import ClearStreet from '@clear-street-internal/sdk';\n\nconst client = new ClearStreet({\n  apiKey: 'My API Key',\n});\n\nconst response = await client.active.v1.savedScreeners.createScreener();\n\nconsole.log(response);",
      },
    },
  },
  {
    name: 'delete_screener',
    endpoint: '/active/v1/saved-screeners/{screener_id}',
    httpMethod: 'delete',
    summary: 'Delete a saved screener configuration.',
    description: 'Deletes the screener configuration for the authenticated user.',
    stainlessPath: '(resource) active.v1.saved-screeners > (method) delete_screener',
    qualified: 'client.active.v1.savedScreeners.deleteScreener',
    params: ['screener_id: string;'],
    markdown:
      "## delete_screener\n\n`client.active.v1.savedScreeners.deleteScreener(screener_id: string): void`\n\n**delete** `/active/v1/saved-screeners/{screener_id}`\n\nDeletes the screener configuration for the authenticated user.\n\n### Parameters\n\n- `screener_id: string`\n\n### Example\n\n```typescript\nimport ClearStreet from '@clear-street-internal/sdk';\n\nconst client = new ClearStreet();\n\nawait client.active.v1.savedScreeners.deleteScreener('550e8400-e29b-41d4-a716-446655440000')\n```",
    perLanguage: {
      http: {
        example:
          'curl https://api-active.clearstreet.io/active/v1/saved-screeners/$SCREENER_ID \\\n    -X DELETE \\\n    -H "Authorization: Bearer $API_KEY"',
      },
      python: {
        method: 'active.v1.saved_screeners.delete_screener',
        example:
          'from clear_street import ClearStreet\n\nclient = ClearStreet(\n    api_key="My API Key",\n)\nclient.active.v1.saved_screeners.delete_screener(\n    "550e8400-e29b-41d4-a716-446655440000",\n)',
      },
      typescript: {
        method: 'client.active.v1.savedScreeners.deleteScreener',
        example:
          "import ClearStreet from '@clear-street-internal/sdk';\n\nconst client = new ClearStreet({\n  apiKey: 'My API Key',\n});\n\nawait client.active.v1.savedScreeners.deleteScreener('550e8400-e29b-41d4-a716-446655440000');",
      },
    },
  },
  {
    name: 'get_screener_by_id',
    endpoint: '/active/v1/saved-screeners/{screener_id}',
    httpMethod: 'get',
    summary: 'Get a saved screener configuration by ID.',
    description: 'Returns a single screener configuration for the authenticated user.',
    stainlessPath: '(resource) active.v1.saved-screeners > (method) get_screener_by_id',
    qualified: 'client.active.v1.savedScreeners.getScreenerByID',
    params: ['screener_id: string;'],
    response: '{ metadata: object; error?: object; }',
    markdown:
      "## get_screener_by_id\n\n`client.active.v1.savedScreeners.getScreenerByID(screener_id: string): object`\n\n**get** `/active/v1/saved-screeners/{screener_id}`\n\nReturns a single screener configuration for the authenticated user.\n\n### Parameters\n\n- `screener_id: string`\n\n### Returns\n\n- `{ metadata: object; error?: object; }`\n\n### Example\n\n```typescript\nimport ClearStreet from '@clear-street-internal/sdk';\n\nconst client = new ClearStreet();\n\nconst response = await client.active.v1.savedScreeners.getScreenerByID('550e8400-e29b-41d4-a716-446655440000');\n\nconsole.log(response);\n```",
    perLanguage: {
      http: {
        example:
          'curl https://api-active.clearstreet.io/active/v1/saved-screeners/$SCREENER_ID \\\n    -H "Authorization: Bearer $API_KEY"',
      },
      python: {
        method: 'active.v1.saved_screeners.get_screener_by_id',
        example:
          'from clear_street import ClearStreet\n\nclient = ClearStreet(\n    api_key="My API Key",\n)\nresponse = client.active.v1.saved_screeners.get_screener_by_id(\n    "550e8400-e29b-41d4-a716-446655440000",\n)\nprint(response)',
      },
      typescript: {
        method: 'client.active.v1.savedScreeners.getScreenerByID',
        example:
          "import ClearStreet from '@clear-street-internal/sdk';\n\nconst client = new ClearStreet({\n  apiKey: 'My API Key',\n});\n\nconst response = await client.active.v1.savedScreeners.getScreenerByID(\n  '550e8400-e29b-41d4-a716-446655440000',\n);\n\nconsole.log(response);",
      },
    },
  },
  {
    name: 'list_screeners',
    endpoint: '/active/v1/saved-screeners',
    httpMethod: 'get',
    summary: 'List saved screener configurations.',
    description: 'Returns all screener configurations for the authenticated user.',
    stainlessPath: '(resource) active.v1.saved-screeners > (method) list_screeners',
    qualified: 'client.active.v1.savedScreeners.listScreeners',
    response: '{ metadata: object; error?: object; }',
    markdown:
      "## list_screeners\n\n`client.active.v1.savedScreeners.listScreeners(): object`\n\n**get** `/active/v1/saved-screeners`\n\nReturns all screener configurations for the authenticated user.\n\n### Returns\n\n- `{ metadata: object; error?: object; }`\n\n### Example\n\n```typescript\nimport ClearStreet from '@clear-street-internal/sdk';\n\nconst client = new ClearStreet();\n\nconst response = await client.active.v1.savedScreeners.listScreeners();\n\nconsole.log(response);\n```",
    perLanguage: {
      http: {
        example:
          'curl https://api-active.clearstreet.io/active/v1/saved-screeners \\\n    -H "Authorization: Bearer $API_KEY"',
      },
      python: {
        method: 'active.v1.saved_screeners.list_screeners',
        example:
          'from clear_street import ClearStreet\n\nclient = ClearStreet(\n    api_key="My API Key",\n)\nresponse = client.active.v1.saved_screeners.list_screeners()\nprint(response)',
      },
      typescript: {
        method: 'client.active.v1.savedScreeners.listScreeners',
        example:
          "import ClearStreet from '@clear-street-internal/sdk';\n\nconst client = new ClearStreet({\n  apiKey: 'My API Key',\n});\n\nconst response = await client.active.v1.savedScreeners.listScreeners();\n\nconsole.log(response);",
      },
    },
  },
  {
    name: 'update_screener',
    endpoint: '/active/v1/saved-screeners/{screener_id}',
    httpMethod: 'put',
    summary: 'Update a saved screener configuration.',
    description:
      'Replaces the screener configuration for the authenticated user.\nIf `name` is null, the existing name is preserved.',
    stainlessPath: '(resource) active.v1.saved-screeners > (method) update_screener',
    qualified: 'client.active.v1.savedScreeners.updateScreener',
    params: [
      'screener_id: string;',
      'field_filter?: string[];',
      'filters?: { field_name: string; operation: string; value: string; }[];',
      'name?: string;',
      'sort_by?: string;',
      "sort_direction?: 'ASC' | 'DESC';",
    ],
    response: '{ metadata: object; error?: object; }',
    markdown:
      "## update_screener\n\n`client.active.v1.savedScreeners.updateScreener(screener_id: string, field_filter?: string[], filters?: { field_name: string; operation: string; value: string; }[], name?: string, sort_by?: string, sort_direction?: 'ASC' | 'DESC'): object`\n\n**put** `/active/v1/saved-screeners/{screener_id}`\n\nReplaces the screener configuration for the authenticated user.\nIf `name` is null, the existing name is preserved.\n\n### Parameters\n\n- `screener_id: string`\n\n- `field_filter?: string[]`\n  List of field names to include when running this screener\n\n- `filters?: { field_name: string; operation: string; value: string; }[]`\n  Filter criteria for this screener\n\n- `name?: string`\n  The name for this screener configuration\n\n- `sort_by?: string`\n  Field name to sort results by\n\n- `sort_direction?: 'ASC' | 'DESC'`\n  Sort direction for results\n\n### Returns\n\n- `{ metadata: object; error?: object; }`\n\n### Example\n\n```typescript\nimport ClearStreet from '@clear-street-internal/sdk';\n\nconst client = new ClearStreet();\n\nconst response = await client.active.v1.savedScreeners.updateScreener('550e8400-e29b-41d4-a716-446655440000');\n\nconsole.log(response);\n```",
    perLanguage: {
      http: {
        example:
          "curl https://api-active.clearstreet.io/active/v1/saved-screeners/$SCREENER_ID \\\n    -X PUT \\\n    -H 'Content-Type: application/json' \\\n    -H \"Authorization: Bearer $API_KEY\" \\\n    -d '{}'",
      },
      python: {
        method: 'active.v1.saved_screeners.update_screener',
        example:
          'from clear_street import ClearStreet\n\nclient = ClearStreet(\n    api_key="My API Key",\n)\nresponse = client.active.v1.saved_screeners.update_screener(\n    screener_id="550e8400-e29b-41d4-a716-446655440000",\n)\nprint(response)',
      },
      typescript: {
        method: 'client.active.v1.savedScreeners.updateScreener',
        example:
          "import ClearStreet from '@clear-street-internal/sdk';\n\nconst client = new ClearStreet({\n  apiKey: 'My API Key',\n});\n\nconst response = await client.active.v1.savedScreeners.updateScreener(\n  '550e8400-e29b-41d4-a716-446655440000',\n);\n\nconsole.log(response);",
      },
    },
  },
  {
    name: 'get_screener',
    endpoint: '/active/v1/screener',
    httpMethod: 'get',
    summary: 'Screen instruments.',
    description: 'Searches for instruments matching specified criteria.',
    stainlessPath: '(resource) active.v1.screener > (method) get_screener',
    qualified: 'client.active.v1.screener.getScreener',
    params: [
      'field_filter?: string[];',
      'filter?: object;',
      'page_size?: number;',
      'page_token?: string;',
      'sort_by?: string;',
      "sort_direction?: 'ASC' | 'DESC';",
    ],
    response: '{ metadata: object; error?: object; }',
    markdown:
      "## get_screener\n\n`client.active.v1.screener.getScreener(field_filter?: string[], filter?: object, page_size?: number, page_token?: string, sort_by?: string, sort_direction?: 'ASC' | 'DESC'): object`\n\n**get** `/active/v1/screener`\n\nSearches for instruments matching specified criteria.\n\n### Parameters\n\n- `field_filter?: string[]`\n  Comma-separated list of field names to include in the response\n\n- `filter?: object`\n  Dynamic filters with dot notation (e.g., filter[price.gte]=50, filter[symbol.bw]=A)\n\n- `page_size?: number`\n  Number of items to return per page (default: 100, max: 10000)\n\n- `page_token?: string`\n  Token for retrieving the next page of results. Contains encoded pagination state.\n\n- `sort_by?: string`\n  Field to sort by\n\n- `sort_direction?: 'ASC' | 'DESC'`\n  Sort direction (ASC or DESC, defaults to DESC)\n\n### Returns\n\n- `{ metadata: object; error?: object; }`\n\n### Example\n\n```typescript\nimport ClearStreet from '@clear-street-internal/sdk';\n\nconst client = new ClearStreet();\n\nconst response = await client.active.v1.screener.getScreener();\n\nconsole.log(response);\n```",
    perLanguage: {
      http: {
        example:
          'curl https://api-active.clearstreet.io/active/v1/screener \\\n    -H "Authorization: Bearer $API_KEY"',
      },
      python: {
        method: 'active.v1.screener.get_screener',
        example:
          'from clear_street import ClearStreet\n\nclient = ClearStreet(\n    api_key="My API Key",\n)\nresponse = client.active.v1.screener.get_screener()\nprint(response)',
      },
      typescript: {
        method: 'client.active.v1.screener.getScreener',
        example:
          "import ClearStreet from '@clear-street-internal/sdk';\n\nconst client = new ClearStreet({\n  apiKey: 'My API Key',\n});\n\nconst response = await client.active.v1.screener.getScreener();\n\nconsole.log(response);",
      },
    },
  },
  {
    name: 'get_version',
    endpoint: '/active/v1/version',
    httpMethod: 'get',
    summary: 'Get the API version.',
    description: 'Returns the current version string for this API endpoint.',
    stainlessPath: '(resource) active.v1.version > (method) get_version',
    qualified: 'client.active.v1.version.getVersion',
    response: '{ metadata: object; error?: object; }',
    markdown:
      "## get_version\n\n`client.active.v1.version.getVersion(): object`\n\n**get** `/active/v1/version`\n\nReturns the current version string for this API endpoint.\n\n### Returns\n\n- `{ metadata: object; error?: object; }`\n\n### Example\n\n```typescript\nimport ClearStreet from '@clear-street-internal/sdk';\n\nconst client = new ClearStreet();\n\nconst response = await client.active.v1.version.getVersion();\n\nconsole.log(response);\n```",
    perLanguage: {
      http: {
        example:
          'curl https://api-active.clearstreet.io/active/v1/version \\\n    -H "Authorization: Bearer $API_KEY"',
      },
      python: {
        method: 'active.v1.version.get_version',
        example:
          'from clear_street import ClearStreet\n\nclient = ClearStreet(\n    api_key="My API Key",\n)\nresponse = client.active.v1.version.get_version()\nprint(response)',
      },
      typescript: {
        method: 'client.active.v1.version.getVersion',
        example:
          "import ClearStreet from '@clear-street-internal/sdk';\n\nconst client = new ClearStreet({\n  apiKey: 'My API Key',\n});\n\nconst response = await client.active.v1.version.getVersion();\n\nconsole.log(response);",
      },
    },
  },
  {
    name: 'update_version',
    endpoint: '/active/v1/version',
    httpMethod: 'patch',
    summary: 'Update API version preferences.',
    description: 'Allows clients to set their preferred API version.',
    stainlessPath: '(resource) active.v1.version > (method) update_version',
    qualified: 'client.active.v1.version.updateVersion',
    response: '{ metadata: object; error?: object; }',
    markdown:
      "## update_version\n\n`client.active.v1.version.updateVersion(): object`\n\n**patch** `/active/v1/version`\n\nAllows clients to set their preferred API version.\n\n### Returns\n\n- `{ metadata: object; error?: object; }`\n\n### Example\n\n```typescript\nimport ClearStreet from '@clear-street-internal/sdk';\n\nconst client = new ClearStreet();\n\nconst response = await client.active.v1.version.updateVersion();\n\nconsole.log(response);\n```",
    perLanguage: {
      http: {
        example:
          'curl https://api-active.clearstreet.io/active/v1/version \\\n    -X PATCH \\\n    -H "Authorization: Bearer $API_KEY"',
      },
      python: {
        method: 'active.v1.version.update_version',
        example:
          'from clear_street import ClearStreet\n\nclient = ClearStreet(\n    api_key="My API Key",\n)\nresponse = client.active.v1.version.update_version()\nprint(response)',
      },
      typescript: {
        method: 'client.active.v1.version.updateVersion',
        example:
          "import ClearStreet from '@clear-street-internal/sdk';\n\nconst client = new ClearStreet({\n  apiKey: 'My API Key',\n});\n\nconst response = await client.active.v1.version.updateVersion();\n\nconsole.log(response);",
      },
    },
  },
  {
    name: 'create_watchlist',
    endpoint: '/active/v1/watchlists',
    httpMethod: 'post',
    summary: 'Create a new watchlist',
    description: 'Create a new watchlist',
    stainlessPath: '(resource) active.v1.watchlists > (method) create_watchlist',
    qualified: 'client.active.v1.watchlists.createWatchlist',
    params: ['name: string;'],
    response: '{ metadata: object; error?: object; }',
    markdown:
      "## create_watchlist\n\n`client.active.v1.watchlists.createWatchlist(name: string): object`\n\n**post** `/active/v1/watchlists`\n\nCreate a new watchlist\n\n### Parameters\n\n- `name: string`\n  The desired watchlist name.\n\n### Returns\n\n- `{ metadata: object; error?: object; }`\n\n### Example\n\n```typescript\nimport ClearStreet from '@clear-street-internal/sdk';\n\nconst client = new ClearStreet();\n\nconst response = await client.active.v1.watchlists.createWatchlist({ name: 'name' });\n\nconsole.log(response);\n```",
    perLanguage: {
      http: {
        example:
          'curl https://api-active.clearstreet.io/active/v1/watchlists \\\n    -H \'Content-Type: application/json\' \\\n    -H "Authorization: Bearer $API_KEY" \\\n    -d \'{\n          "name": "name"\n        }\'',
      },
      python: {
        method: 'active.v1.watchlists.create_watchlist',
        example:
          'from clear_street import ClearStreet\n\nclient = ClearStreet(\n    api_key="My API Key",\n)\nresponse = client.active.v1.watchlists.create_watchlist(\n    name="name",\n)\nprint(response)',
      },
      typescript: {
        method: 'client.active.v1.watchlists.createWatchlist',
        example:
          "import ClearStreet from '@clear-street-internal/sdk';\n\nconst client = new ClearStreet({\n  apiKey: 'My API Key',\n});\n\nconst response = await client.active.v1.watchlists.createWatchlist({ name: 'name' });\n\nconsole.log(response);",
      },
    },
  },
  {
    name: 'delete_watchlist',
    endpoint: '/active/v1/watchlists/{watchlist_id}',
    httpMethod: 'delete',
    summary: 'Delete a watchlist and all its items',
    description: 'Delete a watchlist and all its items',
    stainlessPath: '(resource) active.v1.watchlists > (method) delete_watchlist',
    qualified: 'client.active.v1.watchlists.deleteWatchlist',
    params: ['watchlist_id: string;'],
    markdown:
      "## delete_watchlist\n\n`client.active.v1.watchlists.deleteWatchlist(watchlist_id: string): void`\n\n**delete** `/active/v1/watchlists/{watchlist_id}`\n\nDelete a watchlist and all its items\n\n### Parameters\n\n- `watchlist_id: string`\n\n### Example\n\n```typescript\nimport ClearStreet from '@clear-street-internal/sdk';\n\nconst client = new ClearStreet();\n\nawait client.active.v1.watchlists.deleteWatchlist('550e8400-e29b-41d4-a716-446655440000')\n```",
    perLanguage: {
      http: {
        example:
          'curl https://api-active.clearstreet.io/active/v1/watchlists/$WATCHLIST_ID \\\n    -X DELETE \\\n    -H "Authorization: Bearer $API_KEY"',
      },
      python: {
        method: 'active.v1.watchlists.delete_watchlist',
        example:
          'from clear_street import ClearStreet\n\nclient = ClearStreet(\n    api_key="My API Key",\n)\nclient.active.v1.watchlists.delete_watchlist(\n    "550e8400-e29b-41d4-a716-446655440000",\n)',
      },
      typescript: {
        method: 'client.active.v1.watchlists.deleteWatchlist',
        example:
          "import ClearStreet from '@clear-street-internal/sdk';\n\nconst client = new ClearStreet({\n  apiKey: 'My API Key',\n});\n\nawait client.active.v1.watchlists.deleteWatchlist('550e8400-e29b-41d4-a716-446655440000');",
      },
    },
  },
  {
    name: 'get_watchlist_by_id',
    endpoint: '/active/v1/watchlists/{watchlist_id}',
    httpMethod: 'get',
    summary: 'Get a watchlist by ID with all its items',
    description: 'Get a watchlist by ID with all its items',
    stainlessPath: '(resource) active.v1.watchlists > (method) get_watchlist_by_id',
    qualified: 'client.active.v1.watchlists.getWatchlistByID',
    params: ['watchlist_id: string;'],
    response: '{ metadata: object; error?: object; }',
    markdown:
      "## get_watchlist_by_id\n\n`client.active.v1.watchlists.getWatchlistByID(watchlist_id: string): object`\n\n**get** `/active/v1/watchlists/{watchlist_id}`\n\nGet a watchlist by ID with all its items\n\n### Parameters\n\n- `watchlist_id: string`\n\n### Returns\n\n- `{ metadata: object; error?: object; }`\n\n### Example\n\n```typescript\nimport ClearStreet from '@clear-street-internal/sdk';\n\nconst client = new ClearStreet();\n\nconst response = await client.active.v1.watchlists.getWatchlistByID('550e8400-e29b-41d4-a716-446655440000');\n\nconsole.log(response);\n```",
    perLanguage: {
      http: {
        example:
          'curl https://api-active.clearstreet.io/active/v1/watchlists/$WATCHLIST_ID \\\n    -H "Authorization: Bearer $API_KEY"',
      },
      python: {
        method: 'active.v1.watchlists.get_watchlist_by_id',
        example:
          'from clear_street import ClearStreet\n\nclient = ClearStreet(\n    api_key="My API Key",\n)\nresponse = client.active.v1.watchlists.get_watchlist_by_id(\n    "550e8400-e29b-41d4-a716-446655440000",\n)\nprint(response)',
      },
      typescript: {
        method: 'client.active.v1.watchlists.getWatchlistByID',
        example:
          "import ClearStreet from '@clear-street-internal/sdk';\n\nconst client = new ClearStreet({\n  apiKey: 'My API Key',\n});\n\nconst response = await client.active.v1.watchlists.getWatchlistByID(\n  '550e8400-e29b-41d4-a716-446655440000',\n);\n\nconsole.log(response);",
      },
    },
  },
  {
    name: 'get_watchlists',
    endpoint: '/active/v1/watchlists',
    httpMethod: 'get',
    summary: 'List watchlists for the authenticated user',
    description: 'List watchlists for the authenticated user',
    stainlessPath: '(resource) active.v1.watchlists > (method) get_watchlists',
    qualified: 'client.active.v1.watchlists.getWatchlists',
    response: '{ metadata: object; error?: object; }',
    markdown:
      "## get_watchlists\n\n`client.active.v1.watchlists.getWatchlists(): object`\n\n**get** `/active/v1/watchlists`\n\nList watchlists for the authenticated user\n\n### Returns\n\n- `{ metadata: object; error?: object; }`\n\n### Example\n\n```typescript\nimport ClearStreet from '@clear-street-internal/sdk';\n\nconst client = new ClearStreet();\n\nconst response = await client.active.v1.watchlists.getWatchlists();\n\nconsole.log(response);\n```",
    perLanguage: {
      http: {
        example:
          'curl https://api-active.clearstreet.io/active/v1/watchlists \\\n    -H "Authorization: Bearer $API_KEY"',
      },
      python: {
        method: 'active.v1.watchlists.get_watchlists',
        example:
          'from clear_street import ClearStreet\n\nclient = ClearStreet(\n    api_key="My API Key",\n)\nresponse = client.active.v1.watchlists.get_watchlists()\nprint(response)',
      },
      typescript: {
        method: 'client.active.v1.watchlists.getWatchlists',
        example:
          "import ClearStreet from '@clear-street-internal/sdk';\n\nconst client = new ClearStreet({\n  apiKey: 'My API Key',\n});\n\nconst response = await client.active.v1.watchlists.getWatchlists();\n\nconsole.log(response);",
      },
    },
  },
  {
    name: 'add_watchlist_item',
    endpoint: '/active/v1/watchlists/{watchlist_id}/items',
    httpMethod: 'post',
    summary: 'Add an instrument to a watchlist',
    description: 'Add an instrument to a watchlist',
    stainlessPath: '(resource) active.v1.watchlists.items > (method) add_watchlist_item',
    qualified: 'client.active.v1.watchlists.items.addWatchlistItem',
    params: [
      'watchlist_id: string;',
      'instrument_id?: string;',
      'security_id?: string;',
      'security_id_source?: string;',
    ],
    response: '{ metadata: object; error?: object; }',
    markdown:
      "## add_watchlist_item\n\n`client.active.v1.watchlists.items.addWatchlistItem(watchlist_id: string, instrument_id?: string, security_id?: string, security_id_source?: string): object`\n\n**post** `/active/v1/watchlists/{watchlist_id}/items`\n\nAdd an instrument to a watchlist\n\n### Parameters\n\n- `watchlist_id: string`\n\n- `instrument_id?: string`\n  OEMS instrument ID (mutually exclusive with security_id/security_id_source)\n\n- `security_id?: string`\n  Security identifier\n\n- `security_id_source?: string`\n  Security identifier source\n\n### Returns\n\n- `{ metadata: object; error?: object; }`\n\n### Example\n\n```typescript\nimport ClearStreet from '@clear-street-internal/sdk';\n\nconst client = new ClearStreet();\n\nconst response = await client.active.v1.watchlists.items.addWatchlistItem('550e8400-e29b-41d4-a716-446655440000');\n\nconsole.log(response);\n```",
    perLanguage: {
      http: {
        example:
          "curl https://api-active.clearstreet.io/active/v1/watchlists/$WATCHLIST_ID/items \\\n    -H 'Content-Type: application/json' \\\n    -H \"Authorization: Bearer $API_KEY\" \\\n    -d '{}'",
      },
      python: {
        method: 'active.v1.watchlists.items.add_watchlist_item',
        example:
          'from clear_street import ClearStreet\n\nclient = ClearStreet(\n    api_key="My API Key",\n)\nresponse = client.active.v1.watchlists.items.add_watchlist_item(\n    watchlist_id="550e8400-e29b-41d4-a716-446655440000",\n)\nprint(response)',
      },
      typescript: {
        method: 'client.active.v1.watchlists.items.addWatchlistItem',
        example:
          "import ClearStreet from '@clear-street-internal/sdk';\n\nconst client = new ClearStreet({\n  apiKey: 'My API Key',\n});\n\nconst response = await client.active.v1.watchlists.items.addWatchlistItem(\n  '550e8400-e29b-41d4-a716-446655440000',\n);\n\nconsole.log(response);",
      },
    },
  },
  {
    name: 'delete_watchlist_item',
    endpoint: '/active/v1/watchlists/{watchlist_id}/items/{item_id}',
    httpMethod: 'delete',
    summary: 'Delete an instrument from a watchlist',
    description: 'Delete an instrument from a watchlist',
    stainlessPath: '(resource) active.v1.watchlists.items > (method) delete_watchlist_item',
    qualified: 'client.active.v1.watchlists.items.deleteWatchlistItem',
    params: ['watchlist_id: string;', 'item_id: string;'],
    markdown:
      "## delete_watchlist_item\n\n`client.active.v1.watchlists.items.deleteWatchlistItem(watchlist_id: string, item_id: string): void`\n\n**delete** `/active/v1/watchlists/{watchlist_id}/items/{item_id}`\n\nDelete an instrument from a watchlist\n\n### Parameters\n\n- `watchlist_id: string`\n\n- `item_id: string`\n\n### Example\n\n```typescript\nimport ClearStreet from '@clear-street-internal/sdk';\n\nconst client = new ClearStreet();\n\nawait client.active.v1.watchlists.items.deleteWatchlistItem('660e8400-e29b-41d4-a716-446655440001', { watchlist_id: '550e8400-e29b-41d4-a716-446655440000' })\n```",
    perLanguage: {
      http: {
        example:
          'curl https://api-active.clearstreet.io/active/v1/watchlists/$WATCHLIST_ID/items/$ITEM_ID \\\n    -X DELETE \\\n    -H "Authorization: Bearer $API_KEY"',
      },
      python: {
        method: 'active.v1.watchlists.items.delete_watchlist_item',
        example:
          'from clear_street import ClearStreet\n\nclient = ClearStreet(\n    api_key="My API Key",\n)\nclient.active.v1.watchlists.items.delete_watchlist_item(\n    item_id="660e8400-e29b-41d4-a716-446655440001",\n    watchlist_id="550e8400-e29b-41d4-a716-446655440000",\n)',
      },
      typescript: {
        method: 'client.active.v1.watchlists.items.deleteWatchlistItem',
        example:
          "import ClearStreet from '@clear-street-internal/sdk';\n\nconst client = new ClearStreet({\n  apiKey: 'My API Key',\n});\n\nawait client.active.v1.watchlists.items.deleteWatchlistItem(\n  '660e8400-e29b-41d4-a716-446655440001',\n  { watchlist_id: '550e8400-e29b-41d4-a716-446655440000' },\n);",
      },
    },
  },
  {
    name: 'websocket_handler',
    endpoint: '/active/v1/ws',
    httpMethod: 'get',
    summary: 'Upgrade the HTTP connection to a WebSocket and echo incoming messages.',
    description: 'Upgrade the HTTP connection to a WebSocket and echo incoming messages.',
    stainlessPath: '(resource) active.v1.ws > (method) websocket_handler',
    qualified: 'client.active.v1.ws.websocketHandler',
    markdown:
      "## websocket_handler\n\n`client.active.v1.ws.websocketHandler(): void`\n\n**get** `/active/v1/ws`\n\nUpgrade the HTTP connection to a WebSocket and echo incoming messages.\n\n### Example\n\n```typescript\nimport ClearStreet from '@clear-street-internal/sdk';\n\nconst client = new ClearStreet();\n\nawait client.active.v1.ws.websocketHandler()\n```",
    perLanguage: {
      http: {
        example:
          'curl https://api-active.clearstreet.io/active/v1/ws \\\n    -H "Authorization: Bearer $API_KEY"',
      },
      python: {
        method: 'active.v1.ws.websocket_handler',
        example:
          'from clear_street import ClearStreet\n\nclient = ClearStreet(\n    api_key="My API Key",\n)\nclient.active.v1.ws.websocket_handler()',
      },
      typescript: {
        method: 'client.active.v1.ws.websocketHandler',
        example:
          "import ClearStreet from '@clear-street-internal/sdk';\n\nconst client = new ClearStreet({\n  apiKey: 'My API Key',\n});\n\nawait client.active.v1.ws.websocketHandler();",
      },
    },
  },
];

const EMBEDDED_READMES: { language: string; content: string }[] = [
  {
    language: 'python',
    content:
      '# Clear Street Python API library\n\n<!-- prettier-ignore -->\n[![PyPI version](https://img.shields.io/pypi/v/clear_street.svg?label=pypi%20(stable))](https://pypi.org/project/clear_street/)\n\nThe Clear Street Python library provides convenient access to the Clear Street REST API from any Python 3.9+\napplication. The library includes type definitions for all request params and response fields,\nand offers both synchronous and asynchronous clients powered by [httpx](https://github.com/encode/httpx).\n\n\n\nIt is generated with [Stainless](https://www.stainless.com/).\n\n## MCP Server\n\nUse the Clear Street MCP Server to enable AI assistants to interact with this API, allowing them to explore endpoints, make test requests, and use documentation to help integrate this SDK into your application.\n\n[![Add to Cursor](https://cursor.com/deeplink/mcp-install-dark.svg)](https://cursor.com/en-US/install-mcp?name=%40clear-street-internal%2Fsdk-mcp&config=eyJjb21tYW5kIjoibnB4IiwiYXJncyI6WyIteSIsIkBjbGVhci1zdHJlZXQtaW50ZXJuYWwvc2RrLW1jcCJdLCJlbnYiOnsiQ0xFQVJfU1RSRUVUX0FQSV9LRVkiOiJNeSBBUEkgS2V5In19)\n[![Install in VS Code](https://img.shields.io/badge/_-Add_to_VS_Code-blue?style=for-the-badge&logo=data:image/svg%2bxml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIGZpbGw9Im5vbmUiIHZpZXdCb3g9IjAgMCA0MCA0MCI+PHBhdGggZmlsbD0iI0VFRSIgZmlsbC1ydWxlPSJldmVub2RkIiBkPSJNMzAuMjM1IDM5Ljg4NGEyLjQ5MSAyLjQ5MSAwIDAgMS0xLjc4MS0uNzNMMTIuNyAyNC43OGwtMy40NiAyLjYyNC0zLjQwNiAyLjU4MmExLjY2NSAxLjY2NSAwIDAgMS0xLjA4Mi4zMzggMS42NjQgMS42NjQgMCAwIDEtMS4wNDYtLjQzMWwtMi4yLTJhMS42NjYgMS42NjYgMCAwIDEgMC0yLjQ2M0w3LjQ1OCAyMCA0LjY3IDE3LjQ1MyAxLjUwNyAxNC41N2ExLjY2NSAxLjY2NSAwIDAgMSAwLTIuNDYzbDIuMi0yYTEuNjY1IDEuNjY1IDAgMCAxIDIuMTMtLjA5N2w2Ljg2MyA1LjIwOUwyOC40NTIuODQ0YTIuNDg4IDIuNDg4IDAgMCAxIDEuODQxLS43MjljLjM1MS4wMDkuNjk5LjA5MSAxLjAxOS4yNDVsOC4yMzYgMy45NjFhMi41IDIuNSAwIDAgMSAxLjQxNSAyLjI1M3YuMDk5LS4wNDVWMzMuMzd2LS4wNDUuMDk1YTIuNTAxIDIuNTAxIDAgMCAxLTEuNDE2IDIuMjU3bC04LjIzNSAzLjk2MWEyLjQ5MiAyLjQ5MiAwIDAgMS0xLjA3Ny4yNDZabS43MTYtMjguOTQ3LTExLjk0OCA5LjA2MiAxMS45NTIgOS4wNjUtLjAwNC0xOC4xMjdaIi8+PC9zdmc+)](https://vscode.stainless.com/mcp/%7B%22name%22%3A%22%40clear-street-internal%2Fsdk-mcp%22%2C%22command%22%3A%22npx%22%2C%22args%22%3A%5B%22-y%22%2C%22%40clear-street-internal%2Fsdk-mcp%22%5D%2C%22env%22%3A%7B%22CLEAR_STREET_API_KEY%22%3A%22My%20API%20Key%22%7D%7D)\n\n> Note: You may need to set environment variables in your MCP client.\n\n## Documentation\n\n The full API of this library can be found in [api.md](api.md).\n\n## Installation\n\n```sh\n# install from this staging repo\npip install git+ssh://git@github.com/stainless-sdks/clear-street-python.git\n```\n> [!NOTE]\n> Once this package is [published to PyPI](https://www.stainless.com/docs/guides/publish), this will become: `pip install clear_street`\n\n## Usage\n\nThe full API of this library can be found in [api.md](api.md).\n\n```python\nfrom clear_street import ClearStreet\n\nclient = ClearStreet(\n    api_key="My API Key",\n    # defaults to "production".\n    environment="staging",\n)\n\nresponse = client.active.v1.accounts.get_accounts()\n```\n\n\n\n## Async usage\n\nSimply import `AsyncClearStreet` instead of `ClearStreet` and use `await` with each API call:\n\n```python\nimport asyncio\nfrom clear_street import AsyncClearStreet\n\nclient = AsyncClearStreet(\n    api_key="My API Key",\n    # defaults to "production".\n    environment="staging",\n)\n\nasync def main() -> None:\n  response = await client.active.v1.accounts.get_accounts()\n\nasyncio.run(main())\n```\n\nFunctionality between the synchronous and asynchronous clients is otherwise identical.\n\n### With aiohttp\n\nBy default, the async client uses `httpx` for HTTP requests. However, for improved concurrency performance you may also use `aiohttp` as the HTTP backend.\n\nYou can enable this by installing `aiohttp`:\n\n```sh\n# install from this staging repo\npip install \'clear_street[aiohttp] @ git+ssh://git@github.com/stainless-sdks/clear-street-python.git\'\n```\n\nThen you can enable it by instantiating the client with `http_client=DefaultAioHttpClient()`:\n\n```python\nimport asyncio\nfrom clear_street import DefaultAioHttpClient\nfrom clear_street import AsyncClearStreet\n\nasync def main() -> None:\n  async with AsyncClearStreet(\n    api_key="My API Key",\n    http_client=DefaultAioHttpClient(),\n) as client:\n    response = await client.active.v1.accounts.get_accounts()\n\nasyncio.run(main())\n```\n\n\n\n## Using types\n\nNested request parameters are [TypedDicts](https://docs.python.org/3/library/typing.html#typing.TypedDict). Responses are [Pydantic models](https://docs.pydantic.dev) which also provide helper methods for things like:\n\n- Serializing back into JSON, `model.to_json()`\n- Converting to a dictionary, `model.to_dict()`\n\nTyped requests and responses provide autocomplete and documentation within your editor. If you would like to see type errors in VS Code to help catch bugs earlier, set `python.analysis.typeCheckingMode` to `basic`.\n\n\n\n## Nested params\n\nNested parameters are dictionaries, typed using `TypedDict`, for example:\n\n```python\nfrom clear_street import ClearStreet\n\nclient = ClearStreet()\n\nresponse = client.active.v1.accounts.patch_account_by_id(\n    account_id=0,\n    risk={\n        "max_notional": "5000000.00"\n    },\n)\nprint(response.risk)\n```\n\n\n\n## Handling errors\n\nWhen the library is unable to connect to the API (for example, due to network connection problems or a timeout), a subclass of `clear_street.APIConnectionError` is raised.\n\nWhen the API returns a non-success status code (that is, 4xx or 5xx\nresponse), a subclass of `clear_street.APIStatusError` is raised, containing `status_code` and `response` properties.\n\nAll errors inherit from `clear_street.APIError`.\n\n```python\nimport clear_street\nfrom clear_street import ClearStreet\n\nclient = ClearStreet()\n\ntry:\n    client.active.v1.accounts.get_accounts()\nexcept clear_street.APIConnectionError as e:\n    print("The server could not be reached")\n    print(e.__cause__) # an underlying Exception, likely raised within httpx.\nexcept clear_street.RateLimitError as e:\n    print("A 429 status code was received; we should back off a bit.")\nexcept clear_street.APIStatusError as e:\n    print("Another non-200-range status code was received")\n    print(e.status_code)\n    print(e.response)\n```\n\nError codes are as follows:\n\n| Status Code | Error Type                 |\n| ----------- | -------------------------- |\n| 400         | `BadRequestError`          |\n| 401         | `AuthenticationError`      |\n| 403         | `PermissionDeniedError`    |\n| 404         | `NotFoundError`            |\n| 422         | `UnprocessableEntityError` |\n| 429         | `RateLimitError`           |\n| >=500       | `InternalServerError`      |\n| N/A         | `APIConnectionError`       |\n\n### Retries\n\nCertain errors are automatically retried 2 times by default, with a short exponential backoff.\nConnection errors (for example, due to a network connectivity problem), 408 Request Timeout, 409 Conflict,\n429 Rate Limit, and >=500 Internal errors are all retried by default.\n\nYou can use the `max_retries` option to configure or disable retry settings:\n\n```python\nfrom clear_street import ClearStreet\n\n# Configure the default for all requests:\nclient = ClearStreet(\n    # default is 2\n    max_retries=0,\n)\n\n# Or, configure per-request:\nclient.with_options(max_retries = 5).active.v1.accounts.get_accounts()\n```\n\n### Timeouts\n\nBy default requests time out after 1 minute. You can configure this with a `timeout` option,\nwhich accepts a float or an [`httpx.Timeout`](https://www.python-httpx.org/advanced/timeouts/#fine-tuning-the-configuration) object:\n\n```python\nfrom clear_street import ClearStreet\n\n# Configure the default for all requests:\nclient = ClearStreet(\n    # 20 seconds (default is 1 minute)\n    timeout=20.0,\n)\n\n# More granular control:\nclient = ClearStreet(\n    timeout=httpx.Timeout(60.0, read=5.0, write=10.0, connect=2.0),\n)\n\n# Override per-request:\nclient.with_options(timeout = 5.0).active.v1.accounts.get_accounts()\n```\n\nOn timeout, an `APITimeoutError` is thrown.\n\nNote that requests that time out are [retried twice by default](#retries).\n\n\n\n## Advanced\n\n### Logging\n\nWe use the standard library [`logging`](https://docs.python.org/3/library/logging.html) module.\n\nYou can enable logging by setting the environment variable `CLEAR_STREET_LOG` to `info`.\n\n```shell\n$ export CLEAR_STREET_LOG=info\n```\n\nOr to `debug` for more verbose logging.\n\n### How to tell whether `None` means `null` or missing\n\nIn an API response, a field may be explicitly `null`, or missing entirely; in either case, its value is `None` in this library. You can differentiate the two cases with `.model_fields_set`:\n\n```py\nif response.my_field is None:\n  if \'my_field\' not in response.model_fields_set:\n    print(\'Got json like {}, without a "my_field" key present at all.\')\n  else:\n    print(\'Got json like {"my_field": null}.\')\n```\n\n### Accessing raw response data (e.g. headers)\n\nThe "raw" Response object can be accessed by prefixing `.with_raw_response.` to any HTTP method call, e.g.,\n\n```py\nfrom clear_street import ClearStreet\n\nclient = ClearStreet()\nresponse = client.active.v1.accounts.with_raw_response.get_accounts()\nprint(response.headers.get(\'X-My-Header\'))\n\naccount = response.parse()  # get the object that `active.v1.accounts.get_accounts()` would have returned\nprint(account)\n```\n\nThese methods return an [`APIResponse`](https://github.com/stainless-sdks/clear-street-python/tree/main/src/clear_street/_response.py) object.\n\nThe async client returns an [`AsyncAPIResponse`](https://github.com/stainless-sdks/clear-street-python/tree/main/src/clear_street/_response.py) with the same structure, the only difference being `await`able methods for reading the response content.\n\n#### `.with_streaming_response`\n\nThe above interface eagerly reads the full response body when you make the request, which may not always be what you want.\n\nTo stream the response body, use `.with_streaming_response` instead, which requires a context manager and only reads the response body once you call `.read()`, `.text()`, `.json()`, `.iter_bytes()`, `.iter_text()`, `.iter_lines()` or `.parse()`. In the async client, these are async methods.\n\n```python\nwith client.active.v1.accounts.with_streaming_response.get_accounts() as response :\n    print(response.headers.get(\'X-My-Header\'))\n\n    for line in response.iter_lines():\n      print(line)\n```\n\nThe context manager is required so that the response will reliably be closed.\n\n### Making custom/undocumented requests\n\nThis library is typed for convenient access to the documented API.\n\nIf you need to access undocumented endpoints, params, or response properties, the library can still be used.\n\n#### Undocumented endpoints\n\nTo make requests to undocumented endpoints, you can make requests using `client.get`, `client.post`, and other\nhttp verbs. Options on the client will be respected (such as retries) when making this request.\n\n```py\nimport httpx\n\nresponse = client.post(\n    "/foo",\n    cast_to=httpx.Response,\n    body={"my_param": True},\n)\n\nprint(response.headers.get("x-foo"))\n```\n\n#### Undocumented request params\n\nIf you want to explicitly send an extra param, you can do so with the `extra_query`, `extra_body`, and `extra_headers` request\noptions.\n\n#### Undocumented response properties\n\nTo access undocumented response properties, you can access the extra fields like `response.unknown_prop`. You\ncan also get all the extra fields on the Pydantic model as a dict with\n[`response.model_extra`](https://docs.pydantic.dev/latest/api/base_model/#pydantic.BaseModel.model_extra).\n\n### Configuring the HTTP client\n\nYou can directly override the [httpx client](https://www.python-httpx.org/api/#client) to customize it for your use case, including:\n\n- Support for [proxies](https://www.python-httpx.org/advanced/proxies/)\n- Custom [transports](https://www.python-httpx.org/advanced/transports/)\n- Additional [advanced](https://www.python-httpx.org/advanced/clients/) functionality\n\n```python\nimport httpx\nfrom clear_street import ClearStreet, DefaultHttpxClient\n\nclient = ClearStreet(\n    # Or use the `CLEAR_STREET_BASE_URL` env var\n    base_url="http://my.test.server.example.com:8083",\n    http_client=DefaultHttpxClient(proxy="http://my.test.proxy.example.com", transport=httpx.HTTPTransport(local_address="0.0.0.0")),\n)\n```\n\nYou can also customize the client on a per-request basis by using `with_options()`:\n\n```python\nclient.with_options(http_client=DefaultHttpxClient(...))\n```\n\n### Managing HTTP resources\n\nBy default the library closes underlying HTTP connections whenever the client is [garbage collected](https://docs.python.org/3/reference/datamodel.html#object.__del__). You can manually close the client using the `.close()` method if desired, or with a context manager that closes when exiting.\n\n```py\nfrom clear_street import ClearStreet\n\nwith ClearStreet() as client:\n  # make requests here\n  ...\n\n# HTTP client is now closed\n```\n\n## Versioning\n\nThis package generally follows [SemVer](https://semver.org/spec/v2.0.0.html) conventions, though certain backwards-incompatible changes may be released as minor versions:\n\n1. Changes that only affect static types, without breaking runtime behavior.\n2. Changes to library internals which are technically public but not intended or documented for external use. _(Please open a GitHub issue to let us know if you are relying on such internals.)_\n3. Changes that we do not expect to impact the vast majority of users in practice.\n\nWe take backwards-compatibility seriously and work hard to ensure you can rely on a smooth upgrade experience.\n\nWe are keen for your feedback; please open an [issue](https://www.github.com/stainless-sdks/clear-street-python/issues) with questions, bugs, or suggestions.\n\n### Determining the installed version\n\nIf you\'ve upgraded to the latest version but aren\'t seeing any new features you were expecting then your python environment is likely still using an older version.\n\nYou can determine the version that is being used at runtime with:\n\n```py\nimport clear_street\nprint(clear_street.__version__)\n```\n\n## Requirements\n\nPython 3.9 or higher.\n\n## Contributing\n\nSee [the contributing documentation](./CONTRIBUTING.md).\n',
  },
  {
    language: 'typescript',
    content:
      "# Clear Street TypeScript API Library\n\n[![NPM version](https://img.shields.io/npm/v/@clear-street-internal/sdk.svg?label=npm%20(stable))](https://npmjs.org/package/@clear-street-internal/sdk) ![npm bundle size](https://img.shields.io/bundlephobia/minzip/@clear-street-internal/sdk)\n\nThis library provides convenient access to the Clear Street REST API from server-side TypeScript or JavaScript.\n\n\n\nThe full API of this library can be found in [api.md](api.md).\n\nIt is generated with [Stainless](https://www.stainless.com/).\n\n## MCP Server\n\nUse the Clear Street MCP Server to enable AI assistants to interact with this API, allowing them to explore endpoints, make test requests, and use documentation to help integrate this SDK into your application.\n\n[![Add to Cursor](https://cursor.com/deeplink/mcp-install-dark.svg)](https://cursor.com/en-US/install-mcp?name=%40clear-street-internal%2Fsdk-mcp&config=eyJjb21tYW5kIjoibnB4IiwiYXJncyI6WyIteSIsIkBjbGVhci1zdHJlZXQtaW50ZXJuYWwvc2RrLW1jcCJdLCJlbnYiOnsiQ0xFQVJfU1RSRUVUX0FQSV9LRVkiOiJNeSBBUEkgS2V5In19)\n[![Install in VS Code](https://img.shields.io/badge/_-Add_to_VS_Code-blue?style=for-the-badge&logo=data:image/svg%2bxml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIGZpbGw9Im5vbmUiIHZpZXdCb3g9IjAgMCA0MCA0MCI+PHBhdGggZmlsbD0iI0VFRSIgZmlsbC1ydWxlPSJldmVub2RkIiBkPSJNMzAuMjM1IDM5Ljg4NGEyLjQ5MSAyLjQ5MSAwIDAgMS0xLjc4MS0uNzNMMTIuNyAyNC43OGwtMy40NiAyLjYyNC0zLjQwNiAyLjU4MmExLjY2NSAxLjY2NSAwIDAgMS0xLjA4Mi4zMzggMS42NjQgMS42NjQgMCAwIDEtMS4wNDYtLjQzMWwtMi4yLTJhMS42NjYgMS42NjYgMCAwIDEgMC0yLjQ2M0w3LjQ1OCAyMCA0LjY3IDE3LjQ1MyAxLjUwNyAxNC41N2ExLjY2NSAxLjY2NSAwIDAgMSAwLTIuNDYzbDIuMi0yYTEuNjY1IDEuNjY1IDAgMCAxIDIuMTMtLjA5N2w2Ljg2MyA1LjIwOUwyOC40NTIuODQ0YTIuNDg4IDIuNDg4IDAgMCAxIDEuODQxLS43MjljLjM1MS4wMDkuNjk5LjA5MSAxLjAxOS4yNDVsOC4yMzYgMy45NjFhMi41IDIuNSAwIDAgMSAxLjQxNSAyLjI1M3YuMDk5LS4wNDVWMzMuMzd2LS4wNDUuMDk1YTIuNTAxIDIuNTAxIDAgMCAxLTEuNDE2IDIuMjU3bC04LjIzNSAzLjk2MWEyLjQ5MiAyLjQ5MiAwIDAgMS0xLjA3Ny4yNDZabS43MTYtMjguOTQ3LTExLjk0OCA5LjA2MiAxMS45NTIgOS4wNjUtLjAwNC0xOC4xMjdaIi8+PC9zdmc+)](https://vscode.stainless.com/mcp/%7B%22name%22%3A%22%40clear-street-internal%2Fsdk-mcp%22%2C%22command%22%3A%22npx%22%2C%22args%22%3A%5B%22-y%22%2C%22%40clear-street-internal%2Fsdk-mcp%22%5D%2C%22env%22%3A%7B%22CLEAR_STREET_API_KEY%22%3A%22My%20API%20Key%22%7D%7D)\n\n> Note: You may need to set environment variables in your MCP client.\n\n## Installation\n\n```sh\nnpm install @clear-street-internal/sdk\n```\n\n\n\n## Usage\n\nThe full API of this library can be found in [api.md](api.md).\n\n<!-- prettier-ignore -->\n```js\nimport ClearStreet from '@clear-street-internal/sdk';\n\nconst client = new ClearStreet({\n  apiKey: 'My API Key',\n  environment: 'staging', // defaults to 'production'\n});\n\nconst response = await client.active.v1.accounts.getAccounts();\n```\n\n\n\n### Request & Response types\n\nThis library includes TypeScript definitions for all request params and response fields. You may import and use them like so:\n\n<!-- prettier-ignore -->\n```ts\nimport ClearStreet from '@clear-street-internal/sdk';\n\nconst client = new ClearStreet({\n  apiKey: 'My API Key',\n  environment: 'staging', // defaults to 'production'\n});\n\nconst response: ClearStreet.Active.V1.AccountGetAccountsResponse =\n  await client.active.v1.accounts.getAccounts();\n```\n\nDocumentation for each method, request param, and response field are available in docstrings and will appear on hover in most modern editors.\n\n\n\n\n\n## Handling errors\n\nWhen the library is unable to connect to the API,\nor if the API returns a non-success status code (i.e., 4xx or 5xx response),\na subclass of `APIError` will be thrown:\n\n<!-- prettier-ignore -->\n```ts\nconst response = await client.active.v1.accounts.getAccounts().catch(async (err) => {\n  if (err instanceof ClearStreet.APIError) {\n    console.log(err.status); // 400\n    console.log(err.name); // BadRequestError\n    console.log(err.headers); // {server: 'nginx', ...}\n  } else {\n    throw err;\n  }\n});\n```\n\nError codes are as follows:\n\n| Status Code | Error Type                 |\n| ----------- | -------------------------- |\n| 400         | `BadRequestError`          |\n| 401         | `AuthenticationError`      |\n| 403         | `PermissionDeniedError`    |\n| 404         | `NotFoundError`            |\n| 422         | `UnprocessableEntityError` |\n| 429         | `RateLimitError`           |\n| >=500       | `InternalServerError`      |\n| N/A         | `APIConnectionError`       |\n\n### Retries\n\nCertain errors will be automatically retried 2 times by default, with a short exponential backoff.\nConnection errors (for example, due to a network connectivity problem), 408 Request Timeout, 409 Conflict,\n429 Rate Limit, and >=500 Internal errors will all be retried by default.\n\nYou can use the `maxRetries` option to configure or disable this:\n\n<!-- prettier-ignore -->\n```js\n// Configure the default for all requests:\nconst client = new ClearStreet({\n  maxRetries: 0, // default is 2\n});\n\n// Or, configure per-request:\nawait client.active.v1.accounts.getAccounts({\n  maxRetries: 5,\n});\n```\n\n### Timeouts\n\nRequests time out after 1 minute by default. You can configure this with a `timeout` option:\n\n<!-- prettier-ignore -->\n```ts\n// Configure the default for all requests:\nconst client = new ClearStreet({\n  timeout: 20 * 1000, // 20 seconds (default is 1 minute)\n});\n\n// Override per-request:\nawait client.active.v1.accounts.getAccounts({\n  timeout: 5 * 1000,\n});\n```\n\nOn timeout, an `APIConnectionTimeoutError` is thrown.\n\nNote that requests which time out will be [retried twice by default](#retries).\n\n\n\n\n\n## Advanced Usage\n\n### Accessing raw Response data (e.g., headers)\n\nThe \"raw\" `Response` returned by `fetch()` can be accessed through the `.asResponse()` method on the `APIPromise` type that all methods return.\nThis method returns as soon as the headers for a successful response are received and does not consume the response body, so you are free to write custom parsing or streaming logic.\n\nYou can also use the `.withResponse()` method to get the raw `Response` along with the parsed data.\nUnlike `.asResponse()` this method consumes the body, returning once it is parsed.\n\n<!-- prettier-ignore -->\n```ts\nconst client = new ClearStreet();\n\nconst response = await client.active.v1.accounts.getAccounts().asResponse();\nconsole.log(response.headers.get('X-My-Header'));\nconsole.log(response.statusText); // access the underlying Response object\n\nconst { data: response, response: raw } = await client.active.v1.accounts\n  .getAccounts()\n  .withResponse();\nconsole.log(raw.headers.get('X-My-Header'));\nconsole.log(response);\n```\n\n### Logging\n\n> [!IMPORTANT]\n> All log messages are intended for debugging only. The format and content of log messages\n> may change between releases.\n\n#### Log levels\n\nThe log level can be configured in two ways:\n\n1. Via the `CLEAR_STREET_LOG` environment variable\n2. Using the `logLevel` client option (overrides the environment variable if set)\n\n```ts\nimport ClearStreet from '@clear-street-internal/sdk';\n\nconst client = new ClearStreet({\n  logLevel: 'debug', // Show all log messages\n});\n```\n\nAvailable log levels, from most to least verbose:\n\n- `'debug'` - Show debug messages, info, warnings, and errors\n- `'info'` - Show info messages, warnings, and errors\n- `'warn'` - Show warnings and errors (default)\n- `'error'` - Show only errors\n- `'off'` - Disable all logging\n\nAt the `'debug'` level, all HTTP requests and responses are logged, including headers and bodies.\nSome authentication-related headers are redacted, but sensitive data in request and response bodies\nmay still be visible.\n\n#### Custom logger\n\nBy default, this library logs to `globalThis.console`. You can also provide a custom logger.\nMost logging libraries are supported, including [pino](https://www.npmjs.com/package/pino), [winston](https://www.npmjs.com/package/winston), [bunyan](https://www.npmjs.com/package/bunyan), [consola](https://www.npmjs.com/package/consola), [signale](https://www.npmjs.com/package/signale), and [@std/log](https://jsr.io/@std/log). If your logger doesn't work, please open an issue.\n\nWhen providing a custom logger, the `logLevel` option still controls which messages are emitted, messages\nbelow the configured level will not be sent to your logger.\n\n```ts\nimport ClearStreet from '@clear-street-internal/sdk';\nimport pino from 'pino';\n\nconst logger = pino();\n\nconst client = new ClearStreet({\n  logger: logger.child({ name: 'ClearStreet' }),\n  logLevel: 'debug', // Send all messages to pino, allowing it to filter\n});\n```\n\n### Making custom/undocumented requests\n\nThis library is typed for convenient access to the documented API. If you need to access undocumented\nendpoints, params, or response properties, the library can still be used.\n\n#### Undocumented endpoints\n\nTo make requests to undocumented endpoints, you can use `client.get`, `client.post`, and other HTTP verbs.\nOptions on the client, such as retries, will be respected when making these requests.\n\n```ts\nawait client.post('/some/path', {\n  body: { some_prop: 'foo' },\n  query: { some_query_arg: 'bar' },\n});\n```\n\n#### Undocumented request params\n\nTo make requests using undocumented parameters, you may use `// @ts-expect-error` on the undocumented\nparameter. This library doesn't validate at runtime that the request matches the type, so any extra values you\nsend will be sent as-is.\n\n```ts\nclient.active.v1.accounts.getAccounts({\n  // ...\n  // @ts-expect-error baz is not yet public\n  baz: 'undocumented option',\n});\n```\n\nFor requests with the `GET` verb, any extra params will be in the query, all other requests will send the\nextra param in the body.\n\nIf you want to explicitly send an extra argument, you can do so with the `query`, `body`, and `headers` request\noptions.\n\n#### Undocumented response properties\n\nTo access undocumented response properties, you may access the response object with `// @ts-expect-error` on\nthe response object, or cast the response object to the requisite type. Like the request params, we do not\nvalidate or strip extra properties from the response from the API.\n\n### Customizing the fetch client\n\nBy default, this library expects a global `fetch` function is defined.\n\nIf you want to use a different `fetch` function, you can either polyfill the global:\n\n```ts\nimport fetch from 'my-fetch';\n\nglobalThis.fetch = fetch;\n```\n\nOr pass it to the client:\n\n```ts\nimport ClearStreet from '@clear-street-internal/sdk';\nimport fetch from 'my-fetch';\n\nconst client = new ClearStreet({ fetch });\n```\n\n### Fetch options\n\nIf you want to set custom `fetch` options without overriding the `fetch` function, you can provide a `fetchOptions` object when instantiating the client or making a request. (Request-specific options override client options.)\n\n```ts\nimport ClearStreet from '@clear-street-internal/sdk';\n\nconst client = new ClearStreet({\n  fetchOptions: {\n    // `RequestInit` options\n  },\n});\n```\n\n#### Configuring proxies\n\nTo modify proxy behavior, you can provide custom `fetchOptions` that add runtime-specific proxy\noptions to requests:\n\n<img src=\"https://raw.githubusercontent.com/stainless-api/sdk-assets/refs/heads/main/node.svg\" align=\"top\" width=\"18\" height=\"21\"> **Node** <sup>[[docs](https://github.com/nodejs/undici/blob/main/docs/docs/api/ProxyAgent.md#example---proxyagent-with-fetch)]</sup>\n\n```ts\nimport ClearStreet from '@clear-street-internal/sdk';\nimport * as undici from 'undici';\n\nconst proxyAgent = new undici.ProxyAgent('http://localhost:8888');\nconst client = new ClearStreet({\n  fetchOptions: {\n    dispatcher: proxyAgent,\n  },\n});\n```\n\n<img src=\"https://raw.githubusercontent.com/stainless-api/sdk-assets/refs/heads/main/bun.svg\" align=\"top\" width=\"18\" height=\"21\"> **Bun** <sup>[[docs](https://bun.sh/guides/http/proxy)]</sup>\n\n```ts\nimport ClearStreet from '@clear-street-internal/sdk';\n\nconst client = new ClearStreet({\n  fetchOptions: {\n    proxy: 'http://localhost:8888',\n  },\n});\n```\n\n<img src=\"https://raw.githubusercontent.com/stainless-api/sdk-assets/refs/heads/main/deno.svg\" align=\"top\" width=\"18\" height=\"21\"> **Deno** <sup>[[docs](https://docs.deno.com/api/deno/~/Deno.createHttpClient)]</sup>\n\n```ts\nimport ClearStreet from 'npm:@clear-street-internal/sdk';\n\nconst httpClient = Deno.createHttpClient({ proxy: { url: 'http://localhost:8888' } });\nconst client = new ClearStreet({\n  fetchOptions: {\n    client: httpClient,\n  },\n});\n```\n\n## Frequently Asked Questions\n\n## Semantic versioning\n\nThis package generally follows [SemVer](https://semver.org/spec/v2.0.0.html) conventions, though certain backwards-incompatible changes may be released as minor versions:\n\n1. Changes that only affect static types, without breaking runtime behavior.\n2. Changes to library internals which are technically public but not intended or documented for external use. _(Please open a GitHub issue to let us know if you are relying on such internals.)_\n3. Changes that we do not expect to impact the vast majority of users in practice.\n\nWe take backwards-compatibility seriously and work hard to ensure you can rely on a smooth upgrade experience.\n\nWe are keen for your feedback; please open an [issue](https://www.github.com/clear-street/clear-street-typescript/issues) with questions, bugs, or suggestions.\n\n## Requirements\n\nTypeScript >= 4.9 is supported.\n\nThe following runtimes are supported:\n\n- Web browsers (Up-to-date Chrome, Firefox, Safari, Edge, and more)\n- Node.js 20 LTS or later ([non-EOL](https://endoflife.date/nodejs)) versions.\n- Deno v1.28.0 or higher.\n- Bun 1.0 or later.\n- Cloudflare Workers.\n- Vercel Edge Runtime.\n- Jest 28 or greater with the `\"node\"` environment (`\"jsdom\"` is not supported at this time).\n- Nitro v2.6 or greater.\n\nNote that React Native is not supported at this time.\n\nIf you are interested in other runtime environments, please open or upvote an issue on GitHub.\n\n## Contributing\n\nSee [the contributing documentation](./CONTRIBUTING.md).\n",
  },
];

const INDEX_OPTIONS = {
  fields: [
    'name',
    'endpoint',
    'summary',
    'description',
    'qualified',
    'stainlessPath',
    'content',
    'sectionContext',
  ],
  storeFields: ['kind', '_original'],
  searchOptions: {
    prefix: true,
    fuzzy: 0.1,
    boost: {
      name: 5,
      stainlessPath: 3,
      endpoint: 3,
      qualified: 3,
      summary: 2,
      content: 1,
      description: 1,
    } as Record<string, number>,
  },
};

/**
 * Self-contained local search engine backed by MiniSearch.
 * Method data is embedded at SDK build time; prose documents
 * can be loaded from an optional docs directory at runtime.
 */
export class LocalDocsSearch {
  private methodIndex: MiniSearch<MiniSearchDocument>;
  private proseIndex: MiniSearch<MiniSearchDocument>;

  private constructor() {
    this.methodIndex = new MiniSearch<MiniSearchDocument>(INDEX_OPTIONS);
    this.proseIndex = new MiniSearch<MiniSearchDocument>(INDEX_OPTIONS);
  }

  static async create(opts?: { docsDir?: string }): Promise<LocalDocsSearch> {
    const instance = new LocalDocsSearch();
    instance.indexMethods(EMBEDDED_METHODS);
    for (const readme of EMBEDDED_READMES) {
      instance.indexProse(readme.content, `readme:${readme.language}`);
    }
    if (opts?.docsDir) {
      await instance.loadDocsDirectory(opts.docsDir);
    }
    return instance;
  }

  search(props: {
    query: string;
    language?: string;
    detail?: string;
    maxResults?: number;
    maxLength?: number;
  }): SearchResult {
    const { query, language = 'typescript', detail = 'default', maxResults = 5, maxLength = 100_000 } = props;

    const useMarkdown = detail === 'verbose' || detail === 'high';

    // Search both indices and merge results by score.
    // Filter prose hits so language-tagged content (READMEs and docs with
    // frontmatter) only matches the requested language.
    const methodHits = this.methodIndex
      .search(query)
      .map((hit) => ({ ...hit, _kind: 'http_method' as const }));
    const proseHits = this.proseIndex
      .search(query)
      .filter((hit) => {
        const source = ((hit as Record<string, unknown>)['_original'] as ProseChunk | undefined)?.source;
        if (!source) return true;
        // Check for language-tagged sources: "readme:<lang>" or "lang:<lang>:<filename>"
        let taggedLang: string | undefined;
        if (source.startsWith('readme:')) taggedLang = source.slice('readme:'.length);
        else if (source.startsWith('lang:')) taggedLang = source.split(':')[1];
        if (!taggedLang) return true;
        return taggedLang === language || (language === 'javascript' && taggedLang === 'typescript');
      })
      .map((hit) => ({ ...hit, _kind: 'prose' as const }));
    const merged = [...methodHits, ...proseHits].sort((a, b) => b.score - a.score);
    const top = merged.slice(0, maxResults);

    const fullResults: (string | Record<string, unknown>)[] = [];

    for (const hit of top) {
      const original = (hit as Record<string, unknown>)['_original'];
      if (hit._kind === 'http_method') {
        const m = original as MethodEntry;
        if (useMarkdown && m.markdown) {
          fullResults.push(m.markdown);
        } else {
          // Use per-language data when available, falling back to the
          // top-level fields (which are TypeScript-specific in the
          // legacy codepath).
          const langData = m.perLanguage?.[language];
          fullResults.push({
            method: langData?.method ?? m.qualified,
            summary: m.summary,
            description: m.description,
            endpoint: `${m.httpMethod.toUpperCase()} ${m.endpoint}`,
            ...(langData?.example ? { example: langData.example } : {}),
            ...(m.params ? { params: m.params } : {}),
            ...(m.response ? { response: m.response } : {}),
          });
        }
      } else {
        const c = original as ProseChunk;
        fullResults.push({
          content: c.content,
          ...(c.source ? { source: c.source } : {}),
        });
      }
    }

    let totalLength = 0;
    const results: (string | Record<string, unknown>)[] = [];
    for (const result of fullResults) {
      const len = typeof result === 'string' ? result.length : JSON.stringify(result).length;
      totalLength += len;
      if (totalLength > maxLength) break;
      results.push(result);
    }

    if (results.length < fullResults.length) {
      results.unshift(`Truncated; showing ${results.length} of ${fullResults.length} results.`);
    }

    return { results };
  }

  private indexMethods(methods: MethodEntry[]): void {
    const docs: MiniSearchDocument[] = methods.map((m, i) => ({
      id: `method-${i}`,
      kind: 'http_method' as const,
      name: m.name,
      endpoint: m.endpoint,
      summary: m.summary,
      description: m.description,
      qualified: m.qualified,
      stainlessPath: m.stainlessPath,
      _original: m as unknown as Record<string, unknown>,
    }));
    if (docs.length > 0) {
      this.methodIndex.addAll(docs);
    }
  }

  private async loadDocsDirectory(docsDir: string): Promise<void> {
    let entries;
    try {
      entries = await fs.readdir(docsDir, { withFileTypes: true });
    } catch (err) {
      getLogger().warn({ err, docsDir }, 'Could not read docs directory');
      return;
    }

    const files = entries
      .filter((e) => e.isFile())
      .filter((e) => e.name.endsWith('.md') || e.name.endsWith('.markdown') || e.name.endsWith('.json'));

    for (const file of files) {
      try {
        const filePath = path.join(docsDir, file.name);
        const content = await fs.readFile(filePath, 'utf-8');

        if (file.name.endsWith('.json')) {
          const texts = extractTexts(JSON.parse(content));
          if (texts.length > 0) {
            this.indexProse(texts.join('\n\n'), file.name);
          }
        } else {
          // Parse optional YAML frontmatter for language tagging.
          // Files with a "language" field in frontmatter will only
          // surface in searches for that language.
          //
          // Example:
          //   ---
          //   language: python
          //   ---
          //   # Error handling in Python
          //   ...
          const frontmatter = parseFrontmatter(content);
          const source = frontmatter.language ? `lang:${frontmatter.language}:${file.name}` : file.name;
          this.indexProse(content, source);
        }
      } catch (err) {
        getLogger().warn({ err, file: file.name }, 'Failed to index docs file');
      }
    }
  }

  private indexProse(markdown: string, source: string): void {
    const chunks = chunkMarkdown(markdown);
    const baseId = this.proseIndex.documentCount;

    const docs: MiniSearchDocument[] = chunks.map((chunk, i) => ({
      id: `prose-${baseId + i}`,
      kind: 'prose' as const,
      content: chunk.content,
      ...(chunk.sectionContext != null ? { sectionContext: chunk.sectionContext } : {}),
      _original: { ...chunk, source } as unknown as Record<string, unknown>,
    }));

    if (docs.length > 0) {
      this.proseIndex.addAll(docs);
    }
  }
}

/** Lightweight markdown chunker — splits on headers, chunks by word count. */
function chunkMarkdown(markdown: string): { content: string; tag: string; sectionContext?: string }[] {
  // Strip YAML frontmatter
  const stripped = markdown.replace(/^---\n[\s\S]*?\n---\n?/, '');
  const lines = stripped.split('\n');

  const chunks: { content: string; tag: string; sectionContext?: string }[] = [];
  const headers: string[] = [];
  let current: string[] = [];

  const flush = () => {
    const text = current.join('\n').trim();
    if (!text) return;
    const sectionContext = headers.length > 0 ? headers.join(' > ') : undefined;
    // Split into ~200-word chunks
    const words = text.split(/\s+/);
    for (let i = 0; i < words.length; i += 200) {
      const slice = words.slice(i, i + 200).join(' ');
      if (slice) {
        chunks.push({ content: slice, tag: 'p', ...(sectionContext != null ? { sectionContext } : {}) });
      }
    }
    current = [];
  };

  for (const line of lines) {
    const headerMatch = line.match(/^(#{1,6})\s+(.+)/);
    if (headerMatch) {
      flush();
      const level = headerMatch[1]!.length;
      const text = headerMatch[2]!.trim();
      while (headers.length >= level) headers.pop();
      headers.push(text);
    } else {
      current.push(line);
    }
  }
  flush();

  return chunks;
}

/** Recursively extracts string values from a JSON structure. */
function extractTexts(data: unknown, depth = 0): string[] {
  if (depth > 10) return [];
  if (typeof data === 'string') return data.trim() ? [data] : [];
  if (Array.isArray(data)) return data.flatMap((item) => extractTexts(item, depth + 1));
  if (typeof data === 'object' && data !== null) {
    return Object.values(data).flatMap((v) => extractTexts(v, depth + 1));
  }
  return [];
}

/** Parses YAML frontmatter from a markdown string, extracting the language field if present. */
function parseFrontmatter(markdown: string): { language?: string } {
  const match = markdown.match(/^---\n([\s\S]*?)\n---/);
  if (!match) return {};
  const body = match[1] ?? '';
  const langMatch = body.match(/^language:\s*(.+)$/m);
  return langMatch ? { language: langMatch[1]!.trim() } : {};
}
