import {
  BaseContract,
  ContractDefinition,
  ContractMessageRequest,
  ContractQueryRequest,
  createContract
} from "@stakeordie/griptape.js";

const counterDef: ContractDefinition = {
  queries: {
    getCount(): ContractQueryRequest {
      return { get_count: {} };
    }
  },

  messages: {
    increment(): ContractMessageRequest {
      const handleMsg = { increment: {} };
      return { handleMsg };
    }
  }
};

export interface SecretContract extends BaseContract {
  getCount(): Promise<{ count: number; }>;
  increment(): Promise<void>;
}

export const counter = createContract<SecretContract>({
  id: 'counter',
  at: 'secret1w97ynhe099cs5p433dvlaqhsxrszudz2n3f56h',
  definition: counterDef
});
