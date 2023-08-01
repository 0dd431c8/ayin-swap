/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */

import { Contract, ContractFactory } from "@alephium/web3";
import {
  AyinPresale,
  AyinToken,
  LiquidStaking,
  Staking,
  StakingAccount,
  VestingSchedule,
  VestingScheduleFactory,
  Router,
  TokenPair,
  TokenPairFactory,
  ExampleOracleSimple,
  FeeCollectorFactoryImpl,
  FeeCollectorPerTokenPairImpl,
  FullMathTest,
  MathTest,
  PauseableTest,
  PermissionsTest,
  TestToken,
} from ".";

let contracts: ContractFactory<any>[] | undefined = undefined;
export function getContractByCodeHash(codeHash: string): Contract {
  if (contracts === undefined) {
    contracts = [
      AyinPresale,
      AyinToken,
      LiquidStaking,
      Staking,
      StakingAccount,
      VestingSchedule,
      VestingScheduleFactory,
      Router,
      TokenPair,
      TokenPairFactory,
      ExampleOracleSimple,
      FeeCollectorFactoryImpl,
      FeeCollectorPerTokenPairImpl,
      FullMathTest,
      MathTest,
      PauseableTest,
      PermissionsTest,
      TestToken,
    ];
  }
  const c = contracts.find(
    (c) =>
      c.contract.codeHash === codeHash || c.contract.codeHashDebug === codeHash
  );
  if (c === undefined) {
    throw new Error("Unknown code with code hash: " + codeHash);
  }
  return c.contract;
}
