'use client'

const HOTMART_URL = 'https://pay.hotmart.com/J105182852H?bid=1777318613086'

interface BuyButtonProps {
  label: string
  className?: string
  style?: React.CSSProperties
}

export default function BuyButton({ label, className, style }: BuyButtonProps) {
  function handleClick() {
    if (typeof window !== 'undefined' && typeof (window as any).fbq === 'function') {
      ;(window as any).fbq('track', 'InitiateCheckout', {
        currency: 'EUR',
        value: 10,
        num_items: 1,
      })
    }
  }

  return (
    <a
      href={HOTMART_URL}
      onClick={handleClick}
      className={className}
      style={style}
    >
      {label}
    </a>
  )
}
