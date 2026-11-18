<!-- LOVABLE:BEGIN -->
> [!IMPORTANT]
> This project is connected to [Lovable](https://lovable.dev). Avoid rewriting
> published git history — force pushing, or rebasing/amending/squashing commits
> that are already pushed — as it rewrites history on Lovable's side and the
> user will likely lose their project history.
>
> Commits you push to the connected branch sync back to Lovable and show up in
> the editor, so keep the branch in a working state.
<!-- LOVABLE:END -->

- Use `withinDistance` for all nearby-store views and derive menus/search from that same filtered set, so maps and product lists respect the same unrounded GPS radius.
- Keep food-photo matching in `food-images` and render through `FoodPhoto`; retailer packaging and portion imagery is illustrative unless an exact product photo exists.
- Loyalty Hub live prices go only through `src/lib/prices.functions.ts`: the key lives only in the `LOYALTYHUB_API_KEY` secret (never in client code), every search reads the `loyaltyhub_offers` cache first (4-day TTL; retailers refresh Tue/Fri) and never exposes the key or quota internals; every displayed real price carries its last-seen date. OSM shop menu prices remain labelled estimates.
- Keep one root-level auth-state subscriber for router and protected-query invalidation; leaf auth hooks may read session state but must not add competing global subscribers.

