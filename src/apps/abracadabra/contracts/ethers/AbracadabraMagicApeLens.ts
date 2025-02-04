/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import type {
  BaseContract,
  BigNumber,
  BigNumberish,
  BytesLike,
  CallOverrides,
  PopulatedTransaction,
  Signer,
  utils,
} from 'ethers';
import type { FunctionFragment, Result } from '@ethersproject/abi';
import type { Listener, Provider } from '@ethersproject/providers';
import type { TypedEventFilter, TypedEvent, TypedListener, OnEvent, PromiseOrValue } from './common';

export declare namespace MagicApeLens {
  export type PoolInfoStruct = {
    apr: PromiseOrValue<BigNumberish>;
    stakedAmount: PromiseOrValue<BigNumberish>;
    poolRewardsPerHour: PromiseOrValue<BigNumberish>;
    poolRewardsPerDay: PromiseOrValue<BigNumberish>;
    rewardPerHour: PromiseOrValue<BigNumberish>;
    poolRewardsPerTokenPerDay: PromiseOrValue<BigNumberish>;
  };

  export type PoolInfoStructOutput = [BigNumber, BigNumber, BigNumber, BigNumber, BigNumber, BigNumber] & {
    apr: BigNumber;
    stakedAmount: BigNumber;
    poolRewardsPerHour: BigNumber;
    poolRewardsPerDay: BigNumber;
    rewardPerHour: BigNumber;
    poolRewardsPerTokenPerDay: BigNumber;
  };
}

export declare namespace IApeCoinStaking {
  export type TimeRangeStruct = {
    startTimestampHour: PromiseOrValue<BigNumberish>;
    endTimestampHour: PromiseOrValue<BigNumberish>;
    rewardsPerHour: PromiseOrValue<BigNumberish>;
    capPerPosition: PromiseOrValue<BigNumberish>;
  };

  export type TimeRangeStructOutput = [number, number, BigNumber, BigNumber] & {
    startTimestampHour: number;
    endTimestampHour: number;
    rewardsPerHour: BigNumber;
    capPerPosition: BigNumber;
  };

  export type PoolUIStruct = {
    poolId: PromiseOrValue<BigNumberish>;
    stakedAmount: PromiseOrValue<BigNumberish>;
    currentTimeRange: IApeCoinStaking.TimeRangeStruct;
  };

  export type PoolUIStructOutput = [BigNumber, BigNumber, IApeCoinStaking.TimeRangeStructOutput] & {
    poolId: BigNumber;
    stakedAmount: BigNumber;
    currentTimeRange: IApeCoinStaking.TimeRangeStructOutput;
  };
}

export interface AbracadabraMagicApeLensInterface extends utils.Interface {
  functions: {
    'APE_COIN_CONTRACT()': FunctionFragment;
    'APE_COIN_STAKING_CONTRACT()': FunctionFragment;
    'computeRewardPerHour(uint256,uint256)': FunctionFragment;
    'getApeCoinInfo()': FunctionFragment;
    'getBAKCInfo()': FunctionFragment;
    'getBAYCInfo()': FunctionFragment;
    'getMAYCInfo()': FunctionFragment;
    'getPoolInfo((uint256,uint256,(uint48,uint48,uint96,uint96)))': FunctionFragment;
  };

  getFunction(
    nameOrSignatureOrTopic:
      | 'APE_COIN_CONTRACT'
      | 'APE_COIN_STAKING_CONTRACT'
      | 'computeRewardPerHour'
      | 'getApeCoinInfo'
      | 'getBAKCInfo'
      | 'getBAYCInfo'
      | 'getMAYCInfo'
      | 'getPoolInfo',
  ): FunctionFragment;

  encodeFunctionData(functionFragment: 'APE_COIN_CONTRACT', values?: undefined): string;
  encodeFunctionData(functionFragment: 'APE_COIN_STAKING_CONTRACT', values?: undefined): string;
  encodeFunctionData(
    functionFragment: 'computeRewardPerHour',
    values: [PromiseOrValue<BigNumberish>, PromiseOrValue<BigNumberish>],
  ): string;
  encodeFunctionData(functionFragment: 'getApeCoinInfo', values?: undefined): string;
  encodeFunctionData(functionFragment: 'getBAKCInfo', values?: undefined): string;
  encodeFunctionData(functionFragment: 'getBAYCInfo', values?: undefined): string;
  encodeFunctionData(functionFragment: 'getMAYCInfo', values?: undefined): string;
  encodeFunctionData(functionFragment: 'getPoolInfo', values: [IApeCoinStaking.PoolUIStruct]): string;

  decodeFunctionResult(functionFragment: 'APE_COIN_CONTRACT', data: BytesLike): Result;
  decodeFunctionResult(functionFragment: 'APE_COIN_STAKING_CONTRACT', data: BytesLike): Result;
  decodeFunctionResult(functionFragment: 'computeRewardPerHour', data: BytesLike): Result;
  decodeFunctionResult(functionFragment: 'getApeCoinInfo', data: BytesLike): Result;
  decodeFunctionResult(functionFragment: 'getBAKCInfo', data: BytesLike): Result;
  decodeFunctionResult(functionFragment: 'getBAYCInfo', data: BytesLike): Result;
  decodeFunctionResult(functionFragment: 'getMAYCInfo', data: BytesLike): Result;
  decodeFunctionResult(functionFragment: 'getPoolInfo', data: BytesLike): Result;

  events: {};
}

export interface AbracadabraMagicApeLens extends BaseContract {
  connect(signerOrProvider: Signer | Provider | string): this;
  attach(addressOrName: string): this;
  deployed(): Promise<this>;

  interface: AbracadabraMagicApeLensInterface;

  queryFilter<TEvent extends TypedEvent>(
    event: TypedEventFilter<TEvent>,
    fromBlockOrBlockhash?: string | number | undefined,
    toBlock?: string | number | undefined,
  ): Promise<Array<TEvent>>;

  listeners<TEvent extends TypedEvent>(eventFilter?: TypedEventFilter<TEvent>): Array<TypedListener<TEvent>>;
  listeners(eventName?: string): Array<Listener>;
  removeAllListeners<TEvent extends TypedEvent>(eventFilter: TypedEventFilter<TEvent>): this;
  removeAllListeners(eventName?: string): this;
  off: OnEvent<this>;
  on: OnEvent<this>;
  once: OnEvent<this>;
  removeListener: OnEvent<this>;

  functions: {
    APE_COIN_CONTRACT(overrides?: CallOverrides): Promise<[string]>;

    APE_COIN_STAKING_CONTRACT(overrides?: CallOverrides): Promise<[string]>;

    computeRewardPerHour(
      poolRewardsPerHour: PromiseOrValue<BigNumberish>,
      stakedAmount: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides,
    ): Promise<[BigNumber] & { rewardPerHour: BigNumber }>;

    getApeCoinInfo(overrides?: CallOverrides): Promise<
      [MagicApeLens.PoolInfoStructOutput] & {
        info: MagicApeLens.PoolInfoStructOutput;
      }
    >;

    getBAKCInfo(overrides?: CallOverrides): Promise<
      [MagicApeLens.PoolInfoStructOutput] & {
        info: MagicApeLens.PoolInfoStructOutput;
      }
    >;

    getBAYCInfo(overrides?: CallOverrides): Promise<
      [MagicApeLens.PoolInfoStructOutput] & {
        info: MagicApeLens.PoolInfoStructOutput;
      }
    >;

    getMAYCInfo(overrides?: CallOverrides): Promise<
      [MagicApeLens.PoolInfoStructOutput] & {
        info: MagicApeLens.PoolInfoStructOutput;
      }
    >;

    getPoolInfo(
      poolUI: IApeCoinStaking.PoolUIStruct,
      overrides?: CallOverrides,
    ): Promise<
      [MagicApeLens.PoolInfoStructOutput] & {
        info: MagicApeLens.PoolInfoStructOutput;
      }
    >;
  };

  APE_COIN_CONTRACT(overrides?: CallOverrides): Promise<string>;

  APE_COIN_STAKING_CONTRACT(overrides?: CallOverrides): Promise<string>;

  computeRewardPerHour(
    poolRewardsPerHour: PromiseOrValue<BigNumberish>,
    stakedAmount: PromiseOrValue<BigNumberish>,
    overrides?: CallOverrides,
  ): Promise<BigNumber>;

  getApeCoinInfo(overrides?: CallOverrides): Promise<MagicApeLens.PoolInfoStructOutput>;

  getBAKCInfo(overrides?: CallOverrides): Promise<MagicApeLens.PoolInfoStructOutput>;

  getBAYCInfo(overrides?: CallOverrides): Promise<MagicApeLens.PoolInfoStructOutput>;

  getMAYCInfo(overrides?: CallOverrides): Promise<MagicApeLens.PoolInfoStructOutput>;

  getPoolInfo(
    poolUI: IApeCoinStaking.PoolUIStruct,
    overrides?: CallOverrides,
  ): Promise<MagicApeLens.PoolInfoStructOutput>;

  callStatic: {
    APE_COIN_CONTRACT(overrides?: CallOverrides): Promise<string>;

    APE_COIN_STAKING_CONTRACT(overrides?: CallOverrides): Promise<string>;

    computeRewardPerHour(
      poolRewardsPerHour: PromiseOrValue<BigNumberish>,
      stakedAmount: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides,
    ): Promise<BigNumber>;

    getApeCoinInfo(overrides?: CallOverrides): Promise<MagicApeLens.PoolInfoStructOutput>;

    getBAKCInfo(overrides?: CallOverrides): Promise<MagicApeLens.PoolInfoStructOutput>;

    getBAYCInfo(overrides?: CallOverrides): Promise<MagicApeLens.PoolInfoStructOutput>;

    getMAYCInfo(overrides?: CallOverrides): Promise<MagicApeLens.PoolInfoStructOutput>;

    getPoolInfo(
      poolUI: IApeCoinStaking.PoolUIStruct,
      overrides?: CallOverrides,
    ): Promise<MagicApeLens.PoolInfoStructOutput>;
  };

  filters: {};

  estimateGas: {
    APE_COIN_CONTRACT(overrides?: CallOverrides): Promise<BigNumber>;

    APE_COIN_STAKING_CONTRACT(overrides?: CallOverrides): Promise<BigNumber>;

    computeRewardPerHour(
      poolRewardsPerHour: PromiseOrValue<BigNumberish>,
      stakedAmount: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides,
    ): Promise<BigNumber>;

    getApeCoinInfo(overrides?: CallOverrides): Promise<BigNumber>;

    getBAKCInfo(overrides?: CallOverrides): Promise<BigNumber>;

    getBAYCInfo(overrides?: CallOverrides): Promise<BigNumber>;

    getMAYCInfo(overrides?: CallOverrides): Promise<BigNumber>;

    getPoolInfo(poolUI: IApeCoinStaking.PoolUIStruct, overrides?: CallOverrides): Promise<BigNumber>;
  };

  populateTransaction: {
    APE_COIN_CONTRACT(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    APE_COIN_STAKING_CONTRACT(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    computeRewardPerHour(
      poolRewardsPerHour: PromiseOrValue<BigNumberish>,
      stakedAmount: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides,
    ): Promise<PopulatedTransaction>;

    getApeCoinInfo(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    getBAKCInfo(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    getBAYCInfo(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    getMAYCInfo(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    getPoolInfo(poolUI: IApeCoinStaking.PoolUIStruct, overrides?: CallOverrides): Promise<PopulatedTransaction>;
  };
}
