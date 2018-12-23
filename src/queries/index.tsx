export const helloRequest = () => ({
  url: '/v1/chain/get_account',
  body: { "account_name": "gqytgobvgene" },
  update: {
    message: (prev: any, next: any) => next,
  },
});