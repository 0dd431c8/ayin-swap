/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */

import { RunScriptResult, DeployContractExecutionResult } from "@alephium/cli";
import { NetworkId } from "@alephium/web3";
import {
  TokenPair,
  TokenPairInstance,
  VestingSchedule,
  VestingScheduleInstance,
  StakingAccount,
  StakingAccountInstance,
  AyinToken,
  AyinTokenInstance,
  VestingScheduleFactory,
  VestingScheduleFactoryInstance,
  AyinPresale,
  AyinPresaleInstance,
} from ".";
import { default as mainnetDeployments } from "../.deployments.mainnet.json";
import { default as testnetDeployments } from "../.deployments.testnet.json";

export type Deployments = {
  deployerAddress: string;
  contracts: {
    TokenPair: DeployContractExecutionResult<TokenPairInstance>;
    VestingSchedule: DeployContractExecutionResult<VestingScheduleInstance>;
    StakingAccount: DeployContractExecutionResult<StakingAccountInstance>;
    AyinToken: DeployContractExecutionResult<AyinTokenInstance>;
    VestingScheduleFactory: DeployContractExecutionResult<VestingScheduleFactoryInstance>;
    AyinPresale: DeployContractExecutionResult<AyinPresaleInstance>;
  };
  scripts: {
    MintAyin_team_initial_tokens: RunScriptResult;
    MintAyin_marketing_initial_tokens: RunScriptResult;
    MintAyin_vested_tokens: RunScriptResult;
    CreateVestingSchedule_team_vesting: RunScriptResult;
    CreateVestingSchedule_margeting_vesting: RunScriptResult;
    MintAyin_initial_presale_mint: RunScriptResult;
  };
};

function toDeployments(json: any): Deployments {
  const contracts = {
    TokenPair: {
      ...json.contracts["TokenPair"],
      contractInstance: TokenPair.at(
        json.contracts["TokenPair"].contractInstance.address
      ),
    },
    VestingSchedule: {
      ...json.contracts["VestingSchedule"],
      contractInstance: VestingSchedule.at(
        json.contracts["VestingSchedule"].contractInstance.address
      ),
    },
    StakingAccount: {
      ...json.contracts["StakingAccount"],
      contractInstance: StakingAccount.at(
        json.contracts["StakingAccount"].contractInstance.address
      ),
    },
    AyinToken: {
      ...json.contracts["AyinToken"],
      contractInstance: AyinToken.at(
        json.contracts["AyinToken"].contractInstance.address
      ),
    },
    VestingScheduleFactory: {
      ...json.contracts["VestingScheduleFactory"],
      contractInstance: VestingScheduleFactory.at(
        json.contracts["VestingScheduleFactory"].contractInstance.address
      ),
    },
    AyinPresale: {
      ...json.contracts["AyinPresale"],
      contractInstance: AyinPresale.at(
        json.contracts["AyinPresale"].contractInstance.address
      ),
    },
  };
  return {
    ...json,
    contracts: contracts as Deployments["contracts"],
    scripts: {
      MintAyin_team_initial_tokens:
        json.scripts["MintAyin:team_initial_tokens"],
      MintAyin_marketing_initial_tokens:
        json.scripts["MintAyin:marketing_initial_tokens"],
      MintAyin_vested_tokens: json.scripts["MintAyin:vested_tokens"],
      CreateVestingSchedule_team_vesting:
        json.scripts["CreateVestingSchedule:team_vesting"],
      CreateVestingSchedule_margeting_vesting:
        json.scripts["CreateVestingSchedule:margeting_vesting"],
      MintAyin_initial_presale_mint:
        json.scripts["MintAyin:initial_presale_mint"],
    },
  };
}

export function loadDeployments(
  networkId: NetworkId,
  deployerAddress?: string
): Deployments {
  const deployments =
    networkId === "mainnet"
      ? mainnetDeployments
      : networkId === "testnet"
      ? testnetDeployments
      : undefined;
  if (deployments === undefined) {
    throw Error("The contract has not been deployed to the " + networkId);
  }
  const allDeployments = Array.isArray(deployments)
    ? deployments
    : [deployments];
  if (deployerAddress === undefined) {
    if (allDeployments.length > 1) {
      throw Error(
        "The contract has been deployed multiple times on " +
          networkId +
          ", please specify the deployer address"
      );
    } else {
      return toDeployments(allDeployments[0]);
    }
  }
  const result = allDeployments.find(
    (d) => d.deployerAddress === deployerAddress
  );
  if (result === undefined) {
    throw Error("The contract deployment result does not exist");
  }
  return toDeployments(result);
}