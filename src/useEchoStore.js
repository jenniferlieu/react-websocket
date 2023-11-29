import { create } from "zustand";
import { devtools } from "zustand/middleware";

export const useEchoStore = create(
  devtools((set) => ({
    echo: null,
    setEcho: (e) => set(() => ({ echo: e })),
    channel: null,
    setChannel: (c) => set(() => ({ channel: c })),
    channelName: null,
    setChannelName: (n) => set(() => ({ channelName: n })),
  }))
);
