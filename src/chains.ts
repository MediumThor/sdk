export enum ChainId {
  FUJI = 43113,
  AVALANCHE = 43114,


}

export enum StakingType {
  LEGACY = 'LEGACY',
  SAR_POSITIONS = 'SAR_POSITIONS',
  NEAR_STAKING = 'NEAR_STAKING'
}

interface StakingContract {
  address: string
  active: boolean
  reward_token: string
  type: StakingType
}

export enum AirdropType {
  LEGACY = 'LEGACY',
  MERKLE = 'MERKLE',
  MERKLE_TO_STAKING = 'MERKLE_TO_STAKING',
  MERKLE_TO_STAKING_COMPLIANT = 'MERKLE_TO_STAKING_COMPLIANT',
  NEAR_AIRDROP = 'NEAR_AIRDROP'
}

interface AirdropContract {
  address: string
  active: boolean
  type: AirdropType
}

interface AirdropContractTitled extends AirdropContract {
  title: string
}

export enum ChefType {
  MINI_CHEF = 'MINI_CHEF',
  MINI_CHEF_V2 = 'MINI_CHEF_V2',
  PANGO_CHEF = 'PANGO_CHEF',
  NEAR_CHEF = 'NEAR_CHEF'
}

interface ChefContract {
  address: string
  active: boolean
  type: ChefType
  compoundPoolIdForNonArcFarm?: number // this is compound pool id for non-arc farm
}

export enum NetworkType {
  EVM = 'EVM',
  COSMOS = 'COSMOS'
}

export interface BridgeChain extends Omit<Chain, 'chain_id'> {
  chain_id?: number | string
  network_type?: NetworkType
  meta_data?: {
    [key: string]: any
  }
}

export interface Chain {
  id: string
  name: string
  chain_id?: number
  mainnet: boolean
  evm: boolean
  pangolin_is_live: boolean
  tracked_by_debank: boolean
  supported_by_gelato: boolean
  rpc_uri: string
  subgraph?: {
    exchange: string
  }
  symbol: string
  nativeCurrency: {
    name: string
    symbol: string
    decimals: number
  }
  blockExplorerUrls?: string[]
  arc_symbol?: string
  logo?: string
  coingecko_id?: string
  debank_pangolin_id?: string
  contracts?: {
    arc: string
    factory: string
    router: string
    router_daas?: string
    wrapped_native_token: string
    local_multisig?: string
    community_treasury?: string
    treasury_vester?: string
    mini_chef?: ChefContract
    timelock?: string
    migrator?: string
    airdrop?: AirdropContract
    specialAirdrops?: AirdropContractTitled[]
    foundation_multisig?: string
    joint_multisig?: string
    revenue_distributor?: string
    governor?: string
    fee_collector?: string
    multicall: string
    staking?: StakingContract[]
  }
}





export const AVALANCHE_MAINNET: Chain = {
  id: 'avalanche_mainnet',
  chain_id: ChainId.AVALANCHE,
  name: 'Avalanche',
  symbol: 'AVAX',
  arc_symbol: 'ARC',
  mainnet: true,
  evm: true,
  logo: 'https://raw.githubusercontent.com/pangolindex/sdk/master/src/images/chains/avax.png',
  pangolin_is_live: true,
  tracked_by_debank: true,
  supported_by_gelato: true,
  rpc_uri: 'https://api.avax.network/ext/bc/C/rpc',
  subgraph: {
    exchange: 'https://api.thegraph.com/subgraphs/name/pangolindex/exchange'
  },
  coingecko_id: 'avalanche',
  debank_pangolin_id: 'avax_pangolin',
  contracts: {
    arc: '0x60781C2586D68229fde47564546784ab3fACA982',
    factory: '0xefa94DE7a4656D787667C749f7E1223D71E9FD88',
    router: '0xE54Ca86531e17Ef3616d22Ca28b0D458b6C89106',
    router_daas: '0xEfd958c7C68b7e6a88300E039cAE275ca741007F',
    wrapped_native_token: '0xB31f66AA3C1e785363F0875A1B74E27b85FD66c7',
    local_multisig: '0x66c048d27aFB5EE59E4C07101A483654246A4eda',
    community_treasury: '0x650f5865541f6D68BdDFE977dB933C293EA72358',
    treasury_vester: '0x6747AC215dAFfeE03a42F49FebB6ab448E12acEe',
    mini_chef: {
      address: '0x1f806f7C8dED893fd3caE279191ad7Aa3798E928',
      active: true,
      type: ChefType.MINI_CHEF_V2
    },
    airdrop: {
      address: '0x0C58C2041da4CfCcF5818Bbe3b66DBC23B3902d9',
      active: false,
      type: AirdropType.LEGACY
    },
    timelock: '0xEB5c91bE6Dbfd30cf616127C2EA823C64e4b1ff8',
    governor: '0xb0Ff2b1047d9E8d294c2eD798faE3fA817F43Ee1',
    migrator: '0x4b23Aa72A1214d0E4fd3f2c8Da7C6ba660F7483C',
    multicall: '0x0FB54156B496b5a040b51A71817aED9e2927912E',
    staking: [
      {
        address: '0x88afdaE1a9F58Da3E68584421937E5F564A0135b',
        active: true,
        reward_token: '0x60781C2586D68229fde47564546784ab3fACA982',
        type: StakingType.LEGACY
      }
    ]
  },
  nativeCurrency: {
    name: 'Avalanche',
    symbol: 'AVAX',
    decimals: 18
  },
  blockExplorerUrls: ['https://snowtrace.io']
}

export const AVALANCHE_FUJI = {
  id: 'avalanche_fuji',
  chain_id: 43113,
  name: 'Avalanche Fuji',
  symbol: 'AVAX',
  arc_symbol: 'ARC',
  mainnet: false,
  evm: true,
  logo: 'https://raw.githubusercontent.com/pangolindex/sdk/master/src/images/chains/avax.png',
  pangolin_is_live: true,
  tracked_by_debank: false,
  supported_by_gelato: false,
  rpc_uri: 'https://api.avax-test.network/ext/bc/C/rpc',
  contracts: {
    arc: '0xfe89A92A4093eA17083514ea9CE685fEDB00a90F',
    factory: '0x0bbDde380253030F5838af7F4f4A093C76F490ca',
    router: '0xCF9B1a1d691C45cDf3ACCA069dcB09A8fb89F1CA',
    router_daas: '0xFE97f59B72eEE0F29F93e12195C6F35DCdAB6899',
    wrapped_native_token: '0xd00ae08403B9bbb9124bB305C09058E32C39A48c',
    timelock: '0x26914A08DA2676c08d07383F2f3946E8008dd12a',
    mini_chef: {
      address: '0x35E88decB505eA2e45E978D7Ee2abEd9Be254348',
      active: true,
      type: ChefType.PANGO_CHEF
    },
    community_treasury: '0x25bAeC5fFdB90668B8411cb4B8A831F69F9Ee409',
    airdrop: {
      address: '0x99f239679d651021b4e7E3a3E3f1BB7Dc7B7cdBd',
      active: true,
      type: AirdropType.LEGACY
    },
    treasury_vester: '0x6508eb51Dd76b5383Ffd7d6f21ac5BdC73F65CaC',
    revenue_distributor: '0xd3a33E151785b0194A124F38A9c5DbC72d46D254',
    fee_collector: '0xAdF5240EAB4A48B0C30ae1Dd7E9068dA63502ab4',
    multicall: '0xb465Fd2d9C71d5D6e6c069aaC9b4E21c69aAA78f',
    staking: [{
      address: '0x7509b251aeF1a76255EfBDd5abCD6080d3480d36',
      active: true,
      reward_token: '0xfe89A92A4093eA17083514ea9CE685fEDB00a90F',
      type: StakingType.SAR_POSITIONS
    }]
  },
  nativeCurrency: {
    name: 'Avalanche',
    symbol: 'AVAX',
    decimals: 18
  },
  blockExplorerUrls: ['https://testnet.snowtrace.io']
};

export const CHAINS: { [chainId in ChainId]: Chain } = {
  [ChainId.FUJI]: AVALANCHE_FUJI,
  [ChainId.AVALANCHE]: AVALANCHE_MAINNET,


}

export const ALL_CHAINS: Chain[] = [
  AVALANCHE_MAINNET,

  AVALANCHE_FUJI,


]
