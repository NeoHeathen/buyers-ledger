# BUYERS LEDGER CLOUDFLARE LIVE AGENT

## MISSION
Get Buyers Ledger live at https://buyersledger.com as fast as possible without changing the approved site design or content.

## SCOPE LOCK
- Buyers Ledger only.
- Repository: `NeoHeathen/buyers-ledger`
- Production domain: `buyersledger.com`
- Hosting/deployment: Cloudflare
- Do not migrate platforms.
- Do not change approved design/content unless a verified deployment-breaking bug requires it.

## VERIFIED BUILD CONFIG
- Build command: `npm run build`
- Run install/build from repository root `.`
- Vite source root is already configured as `client/`
- Production output is `dist`
- NEVER use `dist/public`
- Do not change the Cloudflare repo root to `client` just because Vite uses `client` internally.
- `wrangler.toml` already serves `./dist` with SPA fallback.

## CURRENT PRIORITY
The likely remaining blocker is DNS/custom-domain propagation or Cloudflare custom-domain activation. Do not redo working build configuration unless Cloudflare shows a current build failure.

## EXECUTION ORDER
1. Recover current Cloudflare deployment status before making changes.
2. Confirm the latest production deployment succeeded.
3. If deployment failed, read the exact error and fix only that verified blocker.
4. Confirm Cloudflare uses `npm run build` from repo root `.`.
5. Confirm output/deploy directory is `dist`.
6. Verify the temporary Cloudflare deployment URL serves the actual Buyers Ledger app.
7. Check `buyersledger.com` custom-domain status in Cloudflare.
8. Check authoritative nameservers and DNS records for `buyersledger.com`.
9. If DNS changes are already correct but still propagating, do not churn records. Wait for resolver propagation and re-check.
10. If Cloudflare reports an incorrect or missing DNS record, repair only the required record.
11. Verify SSL/TLS certificate is active.
12. Test `https://buyersledger.com` directly.
13. Test `www.buyersledger.com` if configured; it must either work or redirect cleanly to the canonical domain.
14. Verify the homepage is the real Buyers Ledger app, not a placeholder, blank page, Cloudflare error, redirect loop, or directory listing.
15. Only declare LIVE after the real production domain is externally reachable over HTTPS.

## HARD RULES
- No speculative migrations.
- No repeated failed fix without reading the new error first.
- No duplicate DNS changes while propagation is pending.
- No design/content changes during deployment recovery.
- Never claim LIVE based only on a successful build or temporary deployment URL.
- LIVE means `https://buyersledger.com` is publicly reachable and correct.

## COMPLETION REPORT
When finished, report only:
- Deployment: PASS/FAIL
- DNS: PASS/PROPAGATING/FAIL
- SSL: PASS/FAIL
- buyersledger.com: LIVE/NOT LIVE
- Remaining blocker, if any
