import { SwankyConfig } from "./config";

export const DEFAULT_LOCAL_NETWORK_URL = "ws://127.0.0.1:9944";

export function resolveNetworkUrl(
  config: SwankyConfig,
  networkName: string
): string {
  if (networkName === "") {
    return DEFAULT_LOCAL_NETWORK_URL;
  }

  try {
    return config.networks[networkName].url;
  } catch {
    throw new Error("Network name not found in SwankyConfig");
  }
}
