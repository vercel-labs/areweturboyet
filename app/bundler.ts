export enum Bundler {
  Rspack = "rspack",
  Turbopack = "turbopack",
}

export function getBundler(): Bundler {
  const envBundler = process.env.BUNDLER;
  switch (envBundler) {
    case "rspack":
      return Bundler.Rspack;
    case "turbopack":
      return Bundler.Turbopack;
    default:
      throw new Error(`unrecognized bundler: ${envBundler}`);
  }
}
