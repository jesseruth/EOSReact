export const helloRequest = () => ({
  url: 'http://cors.io/?https://proxy.eosnode.tools/v1/chain/get_account',
  body: { "account_name": "gqytgobvgene" },
  update: {
    message: (prev: any, next: any) => next,
  },
});