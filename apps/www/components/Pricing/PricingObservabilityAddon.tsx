import { Check } from 'lucide-react'

type PricingOption = {
  id: 'option1' | 'option2' | 'option3'
  label: string
  tagline: string
  flatFee: string
  ingestionPrice: string
  why: string[]
  exampleBills: { ingestion: string; cost: string }[]
  recommended?: boolean
}

const pricingOptions: PricingOption[] = [
  {
    id: 'option1',
    label: 'Access + Cheap Usage',
    tagline: 'Low-friction growth model • Good for maximum adoption and minimal friction.',
    flatFee: '$9 / month per organization',
    ingestionPrice: '$0.03 per GB ingested',
    why: [
      'Flat fee comfortably covers querying + storage costs, even for active orgs.',
      'Ingestion (the bulk of cost) scales cleanly as a usage-based charge.',
      'Very simple message: “$9 base + 3 cents per GB.”',
      'Creates a low total price that feels like a “Datadog-lite” competitor.',
    ],
    exampleBills: [
      { ingestion: '10 GB / month', cost: '$9 + $0.30 = $9.30' },
      { ingestion: '100 GB / month', cost: '$9 + $3.00 = $12.00' },
      { ingestion: '1 TB / month', cost: '$9 + $30.00 = $39.00' },
    ],
  },
  {
    id: 'option2',
    label: 'Balanced SaaS + Usage',
    tagline: 'Healthy margin model • Strongest fit for Supabase right now.',
    flatFee: '$29 / month per organization',
    ingestionPrice: '$0.05 per GB ingested',
    why: [
      'Base fee covers free-tier subsidy, query cost, and target margin even at low ingestion.',
      '$0.05/GB is still far below many traditional vendors while yielding strong returns.',
      'Works well for both small and mid-sized orgs without shocking bills.',
      'Produces the healthiest revenue distribution across org sizes.',
    ],
    exampleBills: [
      { ingestion: '10 GB / month', cost: '$29 + $0.50 = $29.50' },
      { ingestion: '100 GB / month', cost: '$29 + $5.00 = $34.00' },
      { ingestion: '1 TB / month', cost: '$29 + $50.00 = $79.00' },
    ],
    recommended: true,
  },
  {
    id: 'option3',
    label: 'Enterprise-Friendly',
    tagline: 'Premium base + lower usage • Good for predictable B2B MRR.',
    flatFee: '$59 / month per organization',
    ingestionPrice: '$0.02 per GB ingested',
    why: [
      'Higher flat fee guarantees predictable revenue per org.',
      'Ultra-cheap usage encourages high-volume ingestion without fear of surprise bills.',
      'Positions strongly against traditional logging vendors on price-per-GB.',
      'Shifts more margin into subscription rather than pure usage.',
    ],
    exampleBills: [
      { ingestion: '10 GB / month', cost: '$59 + $0.20 = $59.20' },
      { ingestion: '100 GB / month', cost: '$59 + $2.00 = $61.00' },
      { ingestion: '1 TB / month', cost: '$59 + $20.00 = $79.00' },
    ],
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
              Observability pricing models (Mock)
            </h2>
            <span className="inline-flex items-center rounded-full border border-default px-3 py-1 text-[13px] text-foreground">
              Demo concept • Not final pricing
            </span>
          </div>
          <p className="mt-3 max-w-3xl text-sm text-foreground-lighter">
            These mock options explore how we might package observability as an organization-based
            add-on while keeping a generous free tier. Numbers are illustrative only.
          </p>

          <div className="mt-5 space-y-2 text-sm text-foreground-lighter">
            <p className="font-medium text-foreground">Free tier observability still includes:</p>
            <ul className="mt-1 grid gap-2 md:grid-cols-2">
              <li className="flex items-start gap-2">
                <Check className="mt-[3px] h-3 w-3 text-brand" strokeWidth={3} />
                <span>
                  Reports across API Gateway, query performance, Data API, Auth, Database, Edge
                  Functions, Realtime, and Storage.
                </span>
              </li>
              <li className="flex items-start gap-2">
                <Check className="mt-[3px] h-3 w-3 text-brand" strokeWidth={3} />
                <span>Manual search across your logs and traces.</span>
              </li>
              <li className="flex items-start gap-2">
                <Check className="mt-[3px] h-3 w-3 text-brand" strokeWidth={3} />
                <span>Database advisors for performance and security recommendations.</span>
              </li>
              <li className="flex items-start gap-2">
                <Check className="mt-[3px] h-3 w-3 text-brand" strokeWidth={3} />
                <span>
                  Performance extensions like HypoPG, index_advisor, pg_stat_statements, pg_cron,
                  and pg_repack to analyze and tune your database before upgrading retention.
                </span>
              </li>
              <li className="flex items-start gap-2">
                <Check className="mt-[3px] h-3 w-3 text-brand" strokeWidth={3} />
                <span>
                  Baseline retention for logs, traces, and metrics (which these options can extend).
                </span>
              </li>
            </ul>
            <p className="text-[13px] text-foreground-lighter">
              Even if we reduce default retention across tiers without an observability add-on, the
              free tier still ships with rich observability tools&mdash;we add more, we do not just
              take away.
            </p>
          </div>
        </div>

        {/* Panel 1: High-level pricing model overview (Options 1–3) */}
        <div className="divide-y divide-default">
          {pricingOptions.map((option, index) => (
            <div key={option.id} className="px-6 py-6 lg:px-10">
              <div className="flex flex-col gap-3 lg:flex-row lg:items-center lg:justify-between">
                <div>
                  <p className="text-[12px] uppercase tracking-[0.18em] text-foreground-lighter">
                    Option {index + 1}
                  </p>
                  <div className="mt-1 flex flex-wrap items-center gap-2">
                    <h3 className="text-xl text-foreground">{option.label}</h3>
                    {option.recommended && (
                      <span className="inline-flex items-center rounded-full bg-warning px-2 py-0.5 text-[11px] font-medium text-foreground">
                        Recommended for Supabase
                      </span>
                    )}
                  </div>
                  <p className="mt-1 max-w-2xl text-sm text-foreground-lighter">{option.tagline}</p>
                </div>

                <div className="rounded-xl border border-default bg-surface-75 px-4 py-3 text-sm text-foreground">
                  <div className="flex items-baseline gap-2">
                    <span className="font-mono text-lg">{option.flatFee}</span>
                  </div>
                  <div className="mt-1 text-[13px] text-foreground-lighter">
                    {option.ingestionPrice} (organization-wide ingest)
                  </div>
                </div>
              </div>

              <div className="mt-5 grid gap-6 lg:grid-cols-2">
                <div className="space-y-2">
                  <h4 className="text-sm font-medium text-foreground">Why this works</h4>
                  <ul className="space-y-2 text-sm text-foreground-lighter">
                    {option.why.map((line) => (
                      <li key={line} className="flex gap-2">
                        <Check className="mt-[3px] h-3 w-3 text-brand" strokeWidth={3} />
                        <span>{line}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="space-y-2">
                  <h4 className="text-sm font-medium text-foreground">Example org bill</h4>
                  <table className="min-w-full text-left text-sm text-foreground">
                    <thead className="text-[13px] uppercase tracking-wide text-foreground-lighter">
                      <tr>
                        <th className="py-1 pr-4">Monthly ingestion</th>
                        <th className="py-1">Total cost</th>
                      </tr>
                    </thead>
                    <tbody>
                      {option.exampleBills.map((row) => (
                        <tr key={row.ingestion} className="align-top">
                          <td className="py-1 pr-4">{row.ingestion}</td>
                          <td className="py-1">{row.cost}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Panel 2: Option 2 by tier, table-style like the original PR */}
        <div className="border-t border-default px-6 py-6 lg:px-10">
          <div className="flex flex-col gap-2 lg:flex-row lg:items-center lg:justify-between">
            <div>
              <p className="text-[12px] uppercase tracking-[0.18em] text-foreground-lighter">
                Option 2 details
              </p>
              <h3 className="mt-1 text-xl text-foreground">
                Balanced SaaS + Usage by tier (mock organization add-on)
              </h3>
              <p className="mt-1 max-w-3xl text-sm text-foreground-lighter">
                This table takes Option 2{' '}
                <span className="font-mono">$29 / org + $0.05 / GB</span> and maps it onto each plan
                tier. Pricing is organization-wide, while availability of drains, metrics export,
                and extended retention still varies by tier.
              </p>
            </div>
            <div className="rounded-xl border border-default bg-surface-75 px-4 py-3 text-sm text-foreground">
              <div className="flex items-baseline gap-2">
                <span className="font-mono text-lg">$29</span>
                <span className="text-sm text-foreground-lighter">/ org / month base</span>
              </div>
              <div className="mt-1 text-[13px] text-foreground-lighter">
                + $0.05 per GB ingested (logs, traces, metrics)
              </div>
            </div>
          </div>

          <div className="mt-5 overflow-x-auto">
            <table className="min-w-full divide-y divide-default text-left text-sm text-foreground">
              <thead className="bg-surface-200 text-[13px] uppercase tracking-wide text-foreground-lighter">
                <tr>
                  <th className="px-6 py-4 text-xs font-medium text-foreground">Features</th>
                  {tablePlanColumns.map((plan) => (
                    <th key={plan.id} className="px-6 py-4 text-xs font-medium text-foreground">
                      {plan.label}
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {tableFeatureRows.map((row) => (
                  <tr key={row.label} className="border-b border-default">
                    <td className="px-6 py-5 align-top">
                      <div className="text-sm text-foreground">{row.label}</div>
                      {row.description && (
                        <p className="text-[13px] text-foreground-lighter">{row.description}</p>
                      )}
                    </td>
                    {tablePlanColumns.map((plan) => (
                      <td key={`${plan.id}-${row.label}`} className="px-6 py-5 align-top">
                        {row.render(plan)}
                      </td>
                    ))}
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </section>
  )
}

type TablePlan = {
  id: 'free' | 'pro' | 'team' | 'enterprise'
  label: string
}

const tablePlanColumns: TablePlan[] = [
  { id: 'free', label: 'Free' },
  { id: 'pro', label: 'Pro' },
  { id: 'team', label: 'Team' },
  { id: 'enterprise', label: 'Enterprise' },
]

type TableFeatureRow = {
  label: string
  description: string
  render: (plan: TablePlan) => JSX.Element | string
}

const tableFeatureRows: TableFeatureRow[] = [
  {
    label: 'Org-level observability add-on (Option 2)',
    description:
      'Flat fee plus ingestion pricing applied per organization; same add-on for Free, Pro, and Team with custom terms for Enterprise.',
    render: (plan) => {
      if (plan.id === 'enterprise') {
        return (
          <CustomCell
            label="Custom"
            subLabel="Negotiated enterprise pricing based on volume"
          />
        )
      }
      return (
        <IncludedCell
          label="$29 / month + $0.05 / GB"
        />
      )
    },
  },
  {
    label: 'Baseline observability retention',
    description: 'Included logs, traces, and metrics without the add-on.',
    render: (plan) => {
      if (plan.id === 'free') {
        return <SimpleTextCell>1 hour</SimpleTextCell>
      }
      if (plan.id === 'pro') {
        return <SimpleTextCell>1 day</SimpleTextCell>
      }
      // Team & Enterprise
      return <SimpleTextCell>3 days</SimpleTextCell>
    },
  },
  {
    label: 'Extended retention with add-on',
    description:
      'How long logs, traces, and metrics are retained once the add-on is enabled; 30 days for Free/Pro/Team with the option to negotiate 30+ days on Enterprise.',
    render: (plan) => {
      if (plan.id === 'enterprise') {
        return (
          <CustomCell
            label="Custom (30+ days)"
            subLabel="Longer retention negotiated per enterprise"
          />
        )
      }
      return (
        <IncludedCell
          label="Up to 30 days"
        />
      )
    },
  },
  {
    label: 'Cross-product reports & dashboards',
    description:
      'API Gateway, query performance, Data API, Auth, Database, Edge Functions, Realtime, and Storage; available on every tier when observability is enabled.',
    render: () => (
      <IncludedCell
        label="Included"
      />
    ),
  },
  {
    label: 'Manual log & trace search',
    description: 'Search and pivot directly in the Supabase dashboard.',
    render: () => (
      <IncludedCell
        label="Included"
      />
    ),
  },
  {
    label: 'Database advisors (performance & security)',
    description:
      'Advisory checks and signals that guide index tuning, performance optimization, and security hardening.',
    render: () => (
      <IncludedCell
        label="Included"
      />
    ),
  },
  {
    label: 'Performance extensions (HypoPG, index_advisor, pg_stat_statements, pg_cron, pg_repack)',
    description:
      'Database extensions you can enable to experiment with indexes, inspect queries, schedule jobs, and reduce bloat before buying more compute or retention; available to projects across all tiers.',
    render: () => (
      <IncludedCell
        label="Available"
      />
    ),
  },
  {
    label: 'Log & trace drains',
    description:
      'Ship events into your own stack (SIEM, warehouse, or long-term archive); available on Pro/Team with the org add-on and custom routing for Enterprise.',
    render: (plan) => {
      if (plan.id === 'free') {
        return <NotAvailableCell label="Not available on Free" />
      }
      if (plan.id === 'enterprise') {
        return (
          <CustomCell
            label="Custom drains"
            subLabel="Custom routing & destinations for enterprise"
          />
        )
      }
      return (
        <IncludedCell
          label="Included with add-on"
        />
      )
    },
  },
  {
    label: 'Metrics API & export pricing',
    description:
      'Programmatic access and export of metrics and traces; included on Pro/Team with the org add-on, with custom export contracts on Enterprise.',
    render: (plan) => {
      if (plan.id === 'free') {
        return <NotAvailableCell label="Not available on Free" />
      }
      if (plan.id === 'enterprise') {
        return (
          <CustomCell
            label="Custom"
            subLabel="Enterprise-level metrics API and export contracts"
          />
        )
      }
      return (
        <IncludedCell
          label="Included with add-on"
        />
      )
    },
  },
]

const IncludedCell = ({ label, subLabel }: { label: string; subLabel?: string }) => (
  <div className="space-y-1 text-sm text-foreground">
    <div className="flex items-center gap-2">
      <Check className="h-4 w-4 text-brand" strokeWidth={3} />
      <span>{label}</span>
    </div>
    {subLabel && <p className="text-[13px] text-foreground-lighter">{subLabel}</p>}
  </div>
)

const CustomCell = ({ label, subLabel }: { label: string; subLabel?: string }) => (
  <div className="space-y-1 text-sm text-foreground">
    <div className="flex items-center gap-2">
      <Check className="h-4 w-4 text-warning" strokeWidth={3} />
      <span>{label}</span>
    </div>
    {subLabel && <p className="text-[13px] text-foreground-lighter">{subLabel}</p>}
  </div>
)

const NotAvailableCell = ({ label }: { label?: string }) => (
  <p className="text-sm text-foreground-lighter">{label || '—'}</p>
)

const SimpleTextCell = ({ children }: { children: string }) => (
  <p className="text-sm text-foreground">{children}</p>
)

export default PricingObservabilityAddon


