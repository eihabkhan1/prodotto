export function formatCurrency(
  value: number,
  currency_code: string,
  locale_code: string
) {
  if (typeof value !== 'number') return String(value)

  try {
    return Intl.NumberFormat(locale_code, {
      style: 'currency',
      currency: currency_code,
    }).format(value)
  } catch (error) {
    console.error('Error formatting number', error)
    return String(value)
  }
}
