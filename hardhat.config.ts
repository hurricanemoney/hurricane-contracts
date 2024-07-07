import { HardhatUserConfig, task } from "hardhat/config";
import '@nomicfoundation/hardhat-toolbox';
import '@nomicfoundation/hardhat-chai-matchers';
import '@nomiclabs/hardhat-solhint';
import 'hardhat-change-network';
import "@nomiclabs/hardhat-etherscan";

import * as dotenv from "dotenv";
dotenv.config();

const config: HardhatUserConfig = {

    solidity: {
        compilers: [
            {
                version: "0.5.16",
                settings: {
                    optimizer: {
                        enabled: true,
                        runs: 200
                    },
                }
            },
            {
                version: "0.6.6",
                settings: {
                    optimizer: {
                        enabled: true,
                        runs: 200
                    },
                }

            },
            {
                version: "0.8.3",
                settings: {
                    optimizer: {
                        enabled: true,
                        runs: 200
                    },
                }

            },
            {
                version: "0.8.4",
                settings: {
                    optimizer: {
                        enabled: true,
                        runs: 200
                    },
                }
            },
            {
                version: "0.8.9",
                settings: {
                    optimizer: {
                        enabled: true,
                        runs: 200
                    },
                }
            },
            {
                version: "0.8.14",
                settings: {
                    optimizer: {
                        enabled: true,
                        runs: 200
                    },
                }
            },
            {
                version: "0.8.19",
                settings: {
                    optimizer: {
                        enabled: true,
                        runs: 200
                    },
                }
            }
        ],
    },

    networks: {
        local: {
            url: "http://127.0.0.1:8545",
            accounts: {
                mnemonic: String(process.env.TEST_MNEMONICS),
                count: 100,
                initialIndex: 0
            }
        },
        localMainnetFork: {
            url: "http://127.0.0.1:8545",
            accounts: {
                mnemonic: String(process.env.TEST_MNEMONICS),
                count: 100,
                initialIndex: 0
            }
        },
        localBscTestnetFork: {
            url: "http://127.0.0.1:8545",
            accounts: {
                mnemonic: String(process.env.TEST_MNEMONICS),
                count: 100,
                initialIndex: 6
            }
        },

        bscTestnet: {
            url: "https://data-seed-prebsc-2-s1.binance.org:8545",
            chainId: 97,
            accounts: [String(process.env.MAINNET_PRIVATEKEY)]
        },
        bsc: {
            url: "https://binance.llamarpc.com",
            chainId: 56,
            accounts: [String(process.env.MAINNET_PRIVATEKEY)]
        },

        arbitrumSepolia: {
            url: "https://public.stackup.sh/api/v1/node/arbitrum-sepolia",
            chainId: 421614,
            accounts: [String(process.env.MAINNET_PRIVATEKEY)]
        },
        arbitrum: {
            url: "https://arbitrum-one.public.blastapi.io",
            chainId: 42161,
            accounts: [String(process.env.MAINNET_PRIVATEKEY)]
        },

        goerli: {
            url: "https://gateway.tenderly.co/public/goerli",
            chainId: 5,
            accounts: [String(process.env.MAINNET_PRIVATEKEY)]
        },
        mainnet: {
            url: "https://eth.llamarpc.com",
            chainId: 1,
            accounts: [String(process.env.MAINNET_PRIVATEKEY)]
        },

        hardhat: {
            loggingEnabled: false,
            forking: {
                enabled: false,
                url: "https://bsc-dataseed3.ninicoin.io/"
            },
            accounts: {
                accountsBalance: "100000000000000000000000000",
                count: 100,
                initialIndex: 0
            }
        }
    },

    gasReporter: {
        enabled: Boolean(process.env.REPORT_GAS),
        currency: "USD",
    },

    etherscan: {
        apiKey: {
            mainnet: String(process.env.ETHERSCAN_API_KEY),
            bsc: String(process.env.BSCSCAN_API_KEY),
            bscTestnet: String(process.env.BSCSCAN_API_KEY),
            arbitrumOne: String(process.env.ARBISCAN_API_KEY),
            arbitrumGoerli: String(process.env.ARBISCAN_API_KEY)
        }
    },

    mocha: {
        parallel: false
    }
};

export default config;
