/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */

import {
  Address,
  ExecutableScript,
  ExecuteScriptParams,
  ExecuteScriptResult,
  Script,
  SignerProvider,
  HexString,
} from "@alephium/web3";
import { default as MintAyinScriptJson } from "../ayin/scripts/ayin/MintAyin.ral.json";
import { default as BurnXTokenScriptJson } from "../ayin/scripts/liquid_staking/BurnXToken.ral.json";
import { default as MintXTokenScriptJson } from "../ayin/scripts/liquid_staking/MintXToken.ral.json";
import { default as TopUpRewardsScriptJson } from "../ayin/scripts/liquid_staking/TopUpRewards.ral.json";
import { default as UpgradeLiquidStakingScriptJson } from "../ayin/scripts/liquid_staking/UpgradeLiquidStaking.ral.json";
import { default as BuyAyinScriptJson } from "../ayin/scripts/presale/BuyAyin.ral.json";
import { default as DepositAyinScriptJson } from "../ayin/scripts/presale/DepositAyin.ral.json";
import { default as DestroyPresaleScriptJson } from "../ayin/scripts/presale/DestroyPresale.ral.json";
import { default as UpgradePresaleScriptJson } from "../ayin/scripts/presale/UpgradePresale.ral.json";
import { default as ClaimRewardsScriptJson } from "../ayin/scripts/staking/ClaimRewards.ral.json";
import { default as StakeScriptJson } from "../ayin/scripts/staking/Stake.ral.json";
import { default as UnstakeScriptJson } from "../ayin/scripts/staking/Unstake.ral.json";
import { default as UpgradeStakingScriptJson } from "../ayin/scripts/staking/UpgradeStaking.ral.json";
import { default as ClaimVestedTokensScriptJson } from "../ayin/scripts/vesting_schedule/ClaimVestedTokens.ral.json";
import { default as CreateVestingScheduleScriptJson } from "../ayin/scripts/vesting_schedule/CreateVestingSchedule.ral.json";
import { default as AddLiquidityScriptJson } from "../scripts/AddLiquidity.ral.json";
import { default as BurnScriptJson } from "../scripts/Burn.ral.json";
import { default as CollectFeeScriptJson } from "../scripts/CollectFee.ral.json";
import { default as CreatePairScriptJson } from "../scripts/CreatePair.ral.json";
import { default as EnableFeeCollectorScriptJson } from "../scripts/EnableFeeCollector.ral.json";
import { default as MintScriptJson } from "../scripts/Mint.ral.json";
import { default as RemoveLiquidityScriptJson } from "../scripts/RemoveLiquidity.ral.json";
import { default as SetFeeCollectorFactoryScriptJson } from "../scripts/SetFeeCollectorFactory.ral.json";
import { default as SwapScriptJson } from "../scripts/Swap.ral.json";
import { default as SwapMaxInScriptJson } from "../scripts/SwapMaxIn.ral.json";
import { default as SwapMinOutScriptJson } from "../scripts/SwapMinOut.ral.json";
import { default as WithdrawFeesScriptJson } from "../scripts/WithdrawFees.ral.json";
import { default as GetTokenScriptJson } from "../test/GetToken.ral.json";

export const MintAyin = new ExecutableScript<{
  ayin: HexString;
  to: Address;
  amount: bigint;
}>(Script.fromJson(MintAyinScriptJson));
export const BurnXToken = new ExecutableScript<{
  liquidStaking: HexString;
  xTokenAmount: bigint;
}>(Script.fromJson(BurnXTokenScriptJson));
export const MintXToken = new ExecutableScript<{
  liquidStaking: HexString;
  amount: bigint;
}>(Script.fromJson(MintXTokenScriptJson));
export const TopUpRewards = new ExecutableScript<{
  liquidStaking: HexString;
  amount: bigint;
}>(Script.fromJson(TopUpRewardsScriptJson));
export const UpgradeLiquidStaking = new ExecutableScript<{
  staking: HexString;
  newBytecode: HexString;
}>(Script.fromJson(UpgradeLiquidStakingScriptJson));
export const BuyAyin = new ExecutableScript<{
  presale: HexString;
  amount: bigint;
}>(Script.fromJson(BuyAyinScriptJson));
export const DepositAyin = new ExecutableScript<{
  presale: HexString;
  amount: bigint;
}>(Script.fromJson(DepositAyinScriptJson));
export const DestroyPresale = new ExecutableScript<{
  presale: HexString;
  balanceTo: Address;
}>(Script.fromJson(DestroyPresaleScriptJson));
export const UpgradePresale = new ExecutableScript<{
  presale: HexString;
  newBytecode: HexString;
}>(Script.fromJson(UpgradePresaleScriptJson));
export const ClaimRewards = new ExecutableScript<{ staking: HexString }>(
  Script.fromJson(ClaimRewardsScriptJson)
);
export const Stake = new ExecutableScript<{
  staking: HexString;
  amount: bigint;
}>(Script.fromJson(StakeScriptJson));
export const Unstake = new ExecutableScript<{
  staking: HexString;
  amount: bigint;
}>(Script.fromJson(UnstakeScriptJson));
export const UpgradeStaking = new ExecutableScript<{
  staking: HexString;
  newBytecode: HexString;
}>(Script.fromJson(UpgradeStakingScriptJson));
export const ClaimVestedTokens = new ExecutableScript<{ schedule: HexString }>(
  Script.fromJson(ClaimVestedTokensScriptJson)
);
export const CreateVestingSchedule = new ExecutableScript<{
  factory: HexString;
  tokenId: HexString;
  amount: bigint;
  beneficiary: Address;
  duration: bigint;
}>(Script.fromJson(CreateVestingScheduleScriptJson));
export const AddLiquidity = new ExecutableScript<{
  sender: Address;
  router: HexString;
  pair: HexString;
  amount0Desired: bigint;
  amount1Desired: bigint;
  amount0Min: bigint;
  amount1Min: bigint;
  deadline: bigint;
}>(Script.fromJson(AddLiquidityScriptJson));
export const Burn = new ExecutableScript<{
  tokenPair: HexString;
  sender: Address;
  liquidity: bigint;
}>(Script.fromJson(BurnScriptJson));
export const CollectFee = new ExecutableScript<{ feeCollector: HexString }>(
  Script.fromJson(CollectFeeScriptJson)
);
export const CreatePair = new ExecutableScript<{
  payer: Address;
  factory: HexString;
  alphAmount: bigint;
  tokenAId: HexString;
  tokenBId: HexString;
}>(Script.fromJson(CreatePairScriptJson));
export const EnableFeeCollector = new ExecutableScript<{
  tokenPairFactory: HexString;
  tokenPair: HexString;
}>(Script.fromJson(EnableFeeCollectorScriptJson));
export const Mint = new ExecutableScript<{
  tokenPair: HexString;
  sender: Address;
  amount0: bigint;
  amount1: bigint;
}>(Script.fromJson(MintScriptJson));
export const RemoveLiquidity = new ExecutableScript<{
  sender: Address;
  router: HexString;
  pairId: HexString;
  liquidity: bigint;
  amount0Min: bigint;
  amount1Min: bigint;
  deadline: bigint;
}>(Script.fromJson(RemoveLiquidityScriptJson));
export const SetFeeCollectorFactory = new ExecutableScript<{
  tokenPairFactory: HexString;
  feeCollectorFactory: HexString;
}>(Script.fromJson(SetFeeCollectorFactoryScriptJson));
export const Swap = new ExecutableScript<{
  tokenPair: HexString;
  sender: Address;
  to: Address;
  amount0In: bigint;
  amount1In: bigint;
  amount0Out: bigint;
  amount1Out: bigint;
}>(Script.fromJson(SwapScriptJson));
export const SwapMaxIn = new ExecutableScript<{
  sender: Address;
  router: HexString;
  pair: HexString;
  tokenInId: HexString;
  amountInMax: bigint;
  amountOut: bigint;
  deadline: bigint;
}>(Script.fromJson(SwapMaxInScriptJson));
export const SwapMinOut = new ExecutableScript<{
  sender: Address;
  router: HexString;
  pair: HexString;
  tokenInId: HexString;
  amountIn: bigint;
  amountOutMin: bigint;
  deadline: bigint;
}>(Script.fromJson(SwapMinOutScriptJson));
export const WithdrawFees = new ExecutableScript<{
  feeCollector: HexString;
  amount: bigint;
}>(Script.fromJson(WithdrawFeesScriptJson));
export const GetToken = new ExecutableScript<{
  token: HexString;
  sender: Address;
  amount: bigint;
}>(Script.fromJson(GetTokenScriptJson));