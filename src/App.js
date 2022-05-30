import React, { useState, useEffect } from 'react'
import PubNub from 'pubnub'
import { PubNubProvider, usePubNub } from 'pubnub-react'
import { Chat, MessageList, MessageInput } from '@pubnub/react-chat-components'

const pubnub = new PubNub({
  publishKey: 'pub-c-8ad9c33e-697f-4b00-bb59-76350347af2a',
  subscribeKey: 'sub-c-6e9c4e2e-8541-11ec-9f2b-a2cedba671e8',
  uuid:
    'user-' +
    Math.random()
      .toString(36)
      .replace(/[^a-z]+/g, '')
      .substr(0, 5),
})

const currentChannel = 'chat'
const theme = 'light'

function App() {
  return (
    <PubNubProvider client={pubnub}>
      <Chat {...{ currentChannel, theme }}>
        {/* Chat is an obligatory state provider. It allows you to configure some common component
        options, like the current channel and the general theme for the app. */}
        <MessageList />
        <MessageInput />
      </Chat>
    </PubNubProvider>
  )
}

export default App
