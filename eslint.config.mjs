// Flat config, required since ESLint 9+ / Next.js 16 removed `next lint`
// (which used to auto-scaffold this). Never existed before — `npm run lint`
// was completely broken with no config file at all until now.
import nextConfig from "eslint-config-next";

export default [
  { ignores: [".next/**", "node_modules/**", "sanity.types.ts", "public/**", ".claude/**"] },
  ...nextConfig,
  {
    files: ["src/components/cards/SkillCard.tsx"],
    rules: {
      // React Compiler diagnostic — doesn't respect inline eslint-disable
      // comments. Flags a dynamic icon-registry lookup (getIconComponent)
      // as "creating a component during render"; the lookup's result is
      // always a stable reference from static react-icons module exports,
      // never actually created. See the comment at the usage site.
      "react-hooks/static-components": "off",
    },
  },
];
