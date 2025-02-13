function convertNpmToPnpm(npmCommand: string): string {
  const commandMap: Record<string, string> = {
    install: "add",
    i: "add",
    "install --save": "add",
    "install --save-dev": "add -D",
    "install --global": "add -g",
    uninstall: "remove",
    un: "remove",
    remove: "remove",
    "uninstall --save": "remove",
    "uninstall --save-dev": "remove -D",
    "uninstall --global": "remove -g",
    update: "update",
    run: "run",
    start: "start",
    test: "test",
    publish: "publish",
    link: "link",
    unlink: "unlink",
    rebuild: "rebuild",
    list: "list",
    ls: "list",
    outdated: "outdated",
    audit: "audit",
    "audit fix": "audit fix",
    "cache clean": "store prune",
  };

  const args: string[] = npmCommand.split(" ");
  const baseCommand: string | undefined = args.shift();
  if (!baseCommand) return "pnpm";

  const mappedCommand: string = commandMap[baseCommand] || baseCommand;

  return `pnpm ${mappedCommand} ${args.join(" ")}`.trim();
}

export { convertNpmToPnpm };
