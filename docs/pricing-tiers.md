# Pricing Tiers

FlagSwitch offers three tiers: Free, Pro, and Enterprise. All feature flag functionality is available on every tier — tiers differ only by project and environment limits. Environment limits apply per project.

## Tiers at a Glance

| Feature | Free | Pro | Enterprise |
|---|---|---|---|
| Price | $0 / month | $4.99 / month | $9.99 / month |
| Projects | 1 | 3 | Unlimited |
| Environments (per project) | 3 | 5 | Unlimited |
| Feature flags | Unlimited | Unlimited | Unlimited |
| Real-time dashboard | ✓ | ✓ | ✓ |
| User management | ✓ | ✓ | ✓ |
| A/B testing | ✓ | ✓ | ✓ |
| Percentage rollouts | ✓ | ✓ | ✓ |
| Targeting rules | ✓ | ✓ | ✓ |
| Python SDK | ✓ | ✓ | ✓ |

---

## Free — $0 / month

For side projects and early-stage apps. No credit card required.

- 1 project, 3 environments per project
- Unlimited feature flags
- Real-time dashboard, user management, Python SDK
- A/B testing, percentage rollouts, targeting rules

## Pro — $4.99 / month

For growing teams that ship often.

- Everything in Free
- 3 projects, 5 environments per project

## Enterprise — $9.99 / month

For scale and custom needs.

- Everything in Pro
- Unlimited projects, unlimited environments

---

## Implementation

Pricing data lives in a single source of truth:

- `src/components/Pricing.astro` — defines all tier data and renders the cards
- `src/pages/pricing.astro` — the `/pricing` route, imports and renders the `Pricing` component

To update pricing (features, prices, limits), edit only `src/components/Pricing.astro`.
