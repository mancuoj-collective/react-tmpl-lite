import { TwScreenIndicator } from '@/components/tw-screen-indicator'
import { Toaster } from '@/components/ui/sonner'
import { Provider } from 'jotai'
import { PropsWithChildren } from 'react'

export function AppProvider({ children }: PropsWithChildren) {
  return (
    <Provider>
      <div className="font-sans antialiased">
        {children}
        <Toaster richColors />
        <TwScreenIndicator />
      </div>
    </Provider>
  )
}
