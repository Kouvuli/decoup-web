const { readdirSync } = require("node:fs");

const domainRoot = "apps/web/src/modules";
const domainNames = readdirSync(domainRoot, { withFileTypes: true })
  .filter((entry) => entry.isDirectory())
  .map((entry) => entry.name);
const packageNames = readdirSync("packages", { withFileTypes: true })
  .filter((entry) => entry.isDirectory())
  .map((entry) => entry.name);

module.exports = {
  forbidden: [
    { name: "no-cycles", severity: "error", from: {}, to: { circular: true } },
    { name: "no-unresolved", severity: "error", from: {}, to: { couldNotResolve: true } },
    {
      name: "packages-do-not-import-apps",
      severity: "error",
      from: { path: "^packages/" },
      to: { path: "^apps/" },
    },
    {
      name: "domains-do-not-import-shell",
      severity: "error",
      from: { path: "^apps/web/src/modules/" },
      to: { path: "^apps/web/", pathNot: "^apps/web/src/modules/" },
    },
    {
      name: "contracts-have-no-sibling-dependencies",
      severity: "error",
      from: { path: "^packages/contracts/" },
      to: { path: "^packages/", pathNot: "^packages/contracts/" },
    },
    {
      name: "ui-does-not-import-data-packages",
      severity: "error",
      from: { path: "^packages/ui/" },
      to: { path: "^packages/(api-client|contracts)/" },
    },
    {
      name: "portable-packages-have-no-framework-or-node-imports",
      severity: "error",
      from: { path: "^packages/(api-client|contracts)/" },
      to: { path: "(^|/)(node_modules/)?(next|react|react-dom|react-native)(/|$)|^node:" },
    },
    {
      name: "portable-packages-have-no-node-builtins",
      severity: "error",
      from: { path: "^packages/(api-client|contracts)/" },
      to: { dependencyTypes: ["core"] },
    },
    ...domainNames.flatMap((domainName) => [
      {
        name: domainName + "-does-not-import-other-domains",
        severity: "error",
        from: { path: "^" + domainRoot + "/" + domainName + "/" },
        to: { path: "^" + domainRoot + "/", pathNot: "^" + domainRoot + "/" + domainName + "/" },
      },
      {
        name: domainName + "-public-entrypoint-only",
        severity: "error",
        from: { pathNot: "^" + domainRoot + "/" + domainName + "/" },
        to: { path: "^" + domainRoot + "/" + domainName + "/", pathNot: "^" + domainRoot + "/" + domainName + "/index\\.ts$" },
      },
    ]),
    ...packageNames.map((packageName) => ({
      name: packageName + "-public-entrypoint-only",
      severity: "error",
      from: { pathNot: "^packages/" + packageName + "/" },
      to: { path: "^packages/" + packageName + "/", pathNot: "^packages/" + packageName + "/src/index\\.ts$" },
    })),
  ],
  options: {
    doNotFollow: { path: "node_modules" },
    tsPreCompilationDeps: true,
    tsConfig: { fileName: "tsconfig.json" },
    enhancedResolveOptions: { exportsFields: ["exports"], conditionNames: ["types", "import", "default"] },
  },
};
