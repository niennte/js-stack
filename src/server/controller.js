// @flow

export const homePage = () => null

export const helloPage = () => ({
  hello: { message: 'Server-side pre-loaded message' },
})

export const helloAsyncPage = () => ({
  hello: { messageAsync: 'Server-side pre-loaded message for async page' },
})

export const helloEndpoint = (num: number) => ({
  serverMessage: `Hello from the server! (received ${num})`,
})
