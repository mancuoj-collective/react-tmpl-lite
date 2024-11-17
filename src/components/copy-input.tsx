import { Input } from '@/components/ui/input'
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from '@/components/ui/tooltip'
import { cn } from '@/lib/utils'
import { Check, Copy } from 'lucide-react'
import { useRef, useState } from 'react'

interface CopyInputProps extends React.InputHTMLAttributes<HTMLInputElement> {}

export function CopyInput({ className, defaultValue, ...props }: CopyInputProps) {
  const [copied, setCopied] = useState<boolean>(false)
  const inputRef = useRef<HTMLInputElement>(null)

  const handleCopy = () => {
    if (inputRef.current) {
      navigator.clipboard.writeText(inputRef.current.value)
      setCopied(true)
      setTimeout(() => setCopied(false), 1500)
    }
  }

  return (
    <div className="space-y-2">
      <div className="relative">
        <Input
          ref={inputRef}
          className={cn('pe-9 font-mono', className)}
          type="text"
          defaultValue={defaultValue}
          {...props}
          readOnly
        />
        <TooltipProvider delayDuration={0}>
          <Tooltip>
            <TooltipTrigger asChild>
              <button
                onClick={handleCopy}
                className="absolute inset-y-0 end-0 flex h-full w-9 items-center justify-center rounded-e-lg border border-transparent text-muted-foreground/80 ring-offset-background transition-shadow hover:text-foreground focus-visible:border-ring focus-visible:text-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring/30 focus-visible:ring-offset-2 disabled:pointer-events-none disabled:cursor-not-allowed"
                aria-label={copied ? 'Copied' : 'Copy to clipboard'}
                disabled={copied}
              >
                <div
                  className={cn(
                    'transition-all',
                    copied ? 'scale-100 opacity-100' : 'scale-0 opacity-0',
                  )}
                >
                  <Check
                    className="stroke-emerald-500"
                    size={16}
                    strokeWidth={2}
                    aria-hidden="true"
                  />
                </div>
                <div
                  className={cn(
                    'absolute transition-all',
                    copied ? 'scale-0 opacity-0' : 'scale-100 opacity-100',
                  )}
                >
                  <Copy size={16} strokeWidth={2} aria-hidden="true" />
                </div>
              </button>
            </TooltipTrigger>
            <TooltipContent className="border border-input bg-popover px-2 py-1 text-xs text-muted-foreground">
              Copy to clipboard
            </TooltipContent>
          </Tooltip>
        </TooltipProvider>
      </div>
    </div>
  )
}
