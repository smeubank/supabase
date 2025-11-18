import { Check } from 'lucide-react'

const planColumns = [
  {
    id: 'free',
    label: 'Free',
    baseline: '1 hour',
    addOnPrice: '$10 / month',
    addOnRetention: '30 days with add-on',
    drains: 'Not available',
    exportPricing: '—',
  },
  {
    id: 'pro',
    label: 'Pro',
    baseline: '1 day',
    addOnPrice: '$10 / month',
    addOnRetention: '30 days with add-on',
    drains: 'Log & trace drains, Metrics API',
    exportPricing: '$0.50 per GB',
  },
  {
    id: 'team',
    label: 'Team',
    baseline: '3 days',
    addOnPrice: '$10 / month',
    addOnRetention: '30 days with add-on',
    drains: 'Log & trace drains, Metrics API',
    exportPricing: '$0.50 per GB',
  },
  {
    id: 'enterprise',
    label: 'Enterprise',
    baseline: '3 days',
    addOnPrice: 'Custom',
    addOnRetention: '30 days with add-on',
    drains: 'Custom drains & metrics export',
    exportPricing: 'Custom',
  },
]

const featureRows = [
  {
    label: 'Baseline retention',
    description: 'Included logs, traces, and metrics per tier',
    renderValue: (plan: (typeof planColumns)[number]) => plan.baseline,
  },
  {
    label: 'Observability Add-On',
    description: 'Enable extended retention & advanced analysis',
    renderValue: (plan: (typeof planColumns)[number]) => plan.addOnPrice,
  },
  {
    label: 'Extended retention',
    description: 'Add-on increases logs, traces & metrics to 30 days',
    renderValue: (plan: (typeof planColumns)[number]) => plan.addOnRetention,
  },
  {
    label: 'Drains & Metrics API',
    description: 'Export signals into your own stack',
    renderValue: (plan: (typeof planColumns)[number]) => plan.drains,
  },
  {
    label: 'Pay-as-you-go export',
    description: 'Usage-based pricing once included volume is exceeded',
    renderValue: (plan: (typeof planColumns)[number]) => plan.exportPricing,
  },
]

const PricingObservabilityAddon = () => {
  return (
    <section
      id="observability"
      className="mx-auto mt-10 w-full max-w-6xl px-4 lg:mt-16 lg:px-0"
      aria-labelledby="observability-title"
    >
      <div className="rounded-2xl border border-default bg-surface-100 shadow-sm">
        <div className="border-b border-default px-6 py-6 lg:px-10">
          <p className="text-[13px] uppercase tracking-[0.2em] text-foreground-lighter">
            Observability
          </p>
          <div className="mt-2 flex flex-col gap-2 lg:flex-row lg:items-center lg:justify-between">
            <h2 id="observability-title" className="text-2xl text-foreground">
              Observability Add-On (Mock)
            </h2>
            <span className="inline-flex items-center rounded-full border border-default px-3 py-1 text-[13px] text-foreground">
              Demo concept • Not final pricing
            </span>
          </div>
          <p className="mt-3 max-w-3xl text-sm text-foreground-lighter">
            A simple add-on that gives every tier predictable baseline telemetry plus a toggle for
            more retention, drains, and pay-as-you-go exports. Hard-coded values are inspired by the
            draft PRFAQ for demonstration purposes only.
          </p>
        </div>

        <div className="overflow-x-auto">
          <table className="min-w-full divide-y divide-default text-left text-sm text-foreground">
            <thead className="bg-surface-200 text-[13px] uppercase tracking-wide text-foreground-lighter">
              <tr>
                <th className="px-6 py-4 text-xs font-medium text-foreground">Features</th>
                {planColumns.map((plan) => (
                  <th key={plan.id} className="px-6 py-4 text-xs font-medium text-foreground">
                    {plan.label}
                  </th>
                ))}
              </tr>
            </thead>
            <tbody>
              <tr className="border-b border-default bg-surface-75">
                <td className="px-6 py-4 text-sm font-medium text-foreground">
                  Observability Plus <span className="ml-2 rounded-md bg-warning px-2 py-0.5">Add-on</span>
                </td>
                {planColumns.map((plan) => (
                  <td key={`${plan.id}-cta`} className="px-6 py-4 text-sm text-foreground">
                    {plan.addOnPrice}
                    {plan.id !== 'free' && plan.id !== 'enterprise' && (
                      <p className="text-[13px] text-foreground-lighter">$0.50 per GB exported</p>
                    )}
                    {plan.id === 'enterprise' && (
                      <p className="text-[13px] text-foreground-lighter">Custom usage pricing</p>
                    )}
                  </td>
                ))}
              </tr>

              {featureRows.map((row) => (
                <tr key={row.label} className="border-b border-default">
                  <td className="px-6 py-5 align-top">
                    <div className="text-sm text-foreground">{row.label}</div>
                    <p className="text-[13px] text-foreground-lighter">{row.description}</p>
                  </td>
                  {planColumns.map((plan) => (
                    <td key={`${plan.id}-${row.label}`} className="px-6 py-5 align-top">
                      <FeatureValue value={row.renderValue(plan)} />
                    </td>
                  ))}
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </section>
  )
}

const FeatureValue = ({ value }: { value: string }) => {
  if (value === '30 days with add-on') {
    return (
      <div className="flex items-center gap-2 text-sm text-foreground">
        <Check className="h-4 w-4 text-brand" strokeWidth={3} />
        <span>{value}</span>
      </div>
    )
  }

  if (value === 'Log & trace drains, Metrics API' || value === 'Custom drains & metrics export') {
    return (
      <div className="space-y-1 text-sm text-foreground">
        <div className="flex items-center gap-2">
          <Check className="h-4 w-4 text-brand" strokeWidth={3} />
          <span>{value}</span>
        </div>
        {value !== 'Custom drains & metrics export' && (
          <p className="text-[13px] text-foreground-lighter">Enable drains once add-on is active</p>
        )}
      </div>
    )
  }

  return <p className="text-sm text-foreground">{value}</p>
}

export default PricingObservabilityAddon


