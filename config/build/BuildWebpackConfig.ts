import { Configuration } from "webpack";
import { BuildOptions } from "./types/config";
import { buildPlugins } from "./BuildPlugins";
import { buildLoaders } from "./BuildLoader";
import { buildResolvers } from "./BuildResolvers";
import { BuildDevServer } from "./BuildDevServer";

export function buildWebpackConfig(options: BuildOptions): Configuration {
  const { paths, mode, isDev } = options;
  return {
    mode: mode,
    entry: paths.entry,
    output: {
      filename: "[name].[contenthash].js",
      path: paths.build,
      clean: true,
    },
    plugins: buildPlugins(paths),
    module: {
      rules: buildLoaders(options),
    },
    resolve: buildResolvers(options),
    devtool: isDev ? "inline-source-map" : undefined,
    devServer: isDev ? BuildDevServer(options) : undefined,
  };
}
