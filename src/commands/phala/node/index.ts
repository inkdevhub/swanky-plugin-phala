import { NodeInfo } from "../../../lib/nodeInfo";

export const phalaNode: NodeInfo = {
  name: "phala-node",
  version: "3.0.0",
  polkadotPalletVersions: "polkadot-v0.9.30",
  supportedInk: "v3.3.1",
  downloadUrl: {
    linux:
      "https://github.com/Phala-Network/phala-blockchain/releases/download/poc2-3.0-alpha1/phala-node",
    darwin:
      "https://github.com/Phala-Network/phala-blockchain/releases/download/poc2-3.0-alpha1/phala-node",
  },
}

export const phalaComponents = {
  pRuntime: {
    downloadUrl: {
      linux: ""
    }
  },
  pherry: {
    downloadUrl: {
      linux: ""
    }
  }
}