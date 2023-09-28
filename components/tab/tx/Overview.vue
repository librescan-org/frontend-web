<script setup lang="ts">
import { BigNumber } from 'ethers'
import { getContractAddress } from 'ethers/lib/utils'
import * as api_pb from '~~/proto/api_pb'
import { LabelType, TxInputFormat } from '~~/types/common'

interface TabTxOverviewProps {
  tx: api_pb.Transaction.AsObject
  tokenPrice: number | null
}

const props = defineProps<TabTxOverviewProps>()
const { weiToGwei, weiToToken, base64ToHex, formatNumber, formatStringWithCommas, gasUsedPercent } = useUtils()
const token = useToken()
const isMainnet = useIsMainnet()

const futureAddress = computed(() => {
  if (props.tx.toaddress === '') {
    return getContractAddress({
      from: props.tx.fromaddress,
      nonce: BigNumber.from(props.tx.nonce)
    })
  }
  return ''
})

const burntFees = computed(() => {
  if (!props.tx.basefeepergas) {
    return undefined
  }
  const baseFeePerGas = BigNumber.from(props.tx.basefeepergas)
  const gasUsed = BigNumber.from(props.tx.gasused)
  return gasUsed.mul(baseFeePerGas)
})

const txnSavingsFee = computed(() => {
  const gasPrice = BigNumber.from(props.tx.gasprice)
  const maxFeePerGas = props.tx.maxfeepergas ? BigNumber.from(props.tx.maxfeepergas) : 0 // optional
  const baseFeePerGas = BigNumber.from(props.tx.basefeepergas)
  const gasUsed = BigNumber.from(props.tx.gasused)

  let subValue = gasPrice.sub(maxFeePerGas)
  subValue = subValue.sub(baseFeePerGas)

  return subValue.mul(gasUsed)
})

const base64ToUint8Array = (base64: string): Uint8Array => {
  const binaryString = atob(base64)
  const length = binaryString.length
  const uint8Array = new Uint8Array(length)

  for (let i = 0; i < length; i++) {
    uint8Array[i] = binaryString.charCodeAt(i)
  }

  return uint8Array
}

const uint8ArrayToUTF8 = (uint8Array: Uint8Array): string => {
  const decoder = new TextDecoder('utf-8')
  return decoder.decode(uint8Array)
}

const selectedTxInput = ref()
const selectedTxInputFormat = ref<TxInputFormat>()
const onChangeTxInput = (format: TxInputFormat) => {
  if (process.client) {
    if (format === TxInputFormat.RawHEX) {
      selectedTxInput.value = base64ToHex(props.tx.input)
      selectedTxInputFormat.value = TxInputFormat.RawHEX
    } else {
      const uint8ArrayData = base64ToUint8Array(props.tx.input.toString())
      const utf8Text = uint8ArrayToUTF8(uint8ArrayData)

      selectedTxInput.value = utf8Text
      selectedTxInputFormat.value = TxInputFormat.UTF8
    }
  }
}

const onlyUTF8TxInput = ref(false)
const isQANDeploymentTx = () => {
  const uint8ArrayData = base64ToUint8Array(props.tx.input.toString())
  return uint8ArrayData[0] === 33 && uint8ArrayData[1] == 81 && uint8ArrayData[2] == 86 && uint8ArrayData[3] == 77
}
const isQANTx = () => {
  return isQANDeploymentTx() || !!props.tx.qantransactioninput
}

onMounted(() => {
  /*
  if (isQANTx()) {
    onlyUTF8TxInput.value = true
    onChangeTxInput(TxInputFormat.UTF8)
  } else {
    onChangeTxInput(TxInputFormat.RawHEX)
  }
  */
  onChangeTxInput(TxInputFormat.RawHEX)
})
</script>

<template>
  <div>
    <BaseCard class="mb-4 py-1">
      <template #body>
        <div class="grid grid-cols-12 gap-0 mx-3">
          <div class="col-main-left">
            <BaseLabelWithToolTip title="Transaction Hash:"
              tool-tip-text="A TxHash or transaction hash is a unique 66-character identifier that is generated whenever a transaction is executed." />
          </div>
          <div class="col-main-right">
            <span class="mr-1">{{ props.tx.hash }}</span>
            <BaseCopyToClipboard title="TxHash" :text="props.tx.hash" />
          </div>

          <template v-if="isQANDeploymentTx()">
            <div class="col-main-left">
              <BaseLabelWithToolTip title="Deployment Type:" tool-tip-text="Deployment Type" />
            </div>
            <div class="col-main-right">
              <BaseLabelDefault :type="LabelType.Primary">
                QVM
              </BaseLabelDefault>
            </div>
          </template>

          <template v-if="!isMainnet || props.tx.blocknumber >= 4370000">
            <div class="col-main-left">
              <BaseLabelWithToolTip title="Status:" tool-tip-text="The status of the transaction." />
            </div>
            <div class="col-main-right">
              <TxStatus :receiptstatus="props.tx.receiptstatus" />
            </div>
          </template>

          <div class="col-main-left">
            <BaseLabelWithToolTip title="Block:"
              tool-tip-text="Number of the block in which the transaction is recorded. Block confirmations indicate how many blocks have been added since the transaction was validated." />
          </div>
          <div class="col-main-right">
            <p>
              <NuxtLink :to="'/block/' + props.tx.blocknumber">{{ props.tx.blocknumber }}</NuxtLink>
            </p>
          </div>

          <div class="col-main-left">
            <BaseLabelWithToolTip title="Timestamp:"
              tool-tip-text="The date and time at which a transaction is validated." />
          </div>
          <div class="col-main-right">
            <Timestamp :timestamp="props.tx.blocktimestamp" />
          </div>

          <div class="col-span-12 bg-neutral-200 h-[1px] my-2" />

          <div class="col-main-left">
            <BaseLabelWithToolTip title="From:"
              tool-tip-text="The sending party of the transaction (could be from a contract address)." />
          </div>
          <div class="col-main-right">
            <p>
              <NuxtLink :to="'/address/' + props.tx.fromaddress">{{ props.tx.fromaddress }}</NuxtLink>
            </p>
          </div>

          <template v-if="props.tx.toaddress !== ''">
            <div class="col-main-left">
              <BaseLabelWithToolTip title="To:"
                tool-tip-text="The receiving party of the transaction (could be a contract address)." />
            </div>
            <div class="col-main-right">
              <p>
                <NuxtLink :to="'/address/' + props.tx.toaddress">{{ props.tx.toaddress }}</NuxtLink>
              </p>
            </div>
          </template>

          <template v-else>
            <div class="col-main-left">
              <BaseLabelWithToolTip title="Interacted With (To):"
                tool-tip-text="The receiving party of the transaction (could be a contract address)." />
            </div>
            <div class="col-main-right">
              <p>
                <span>[ </span>
                <NuxtLink :to="'/address/' + futureAddress">
                  {{ futureAddress }}
                </NuxtLink>
                <span> Created ]</span>
              </p>
            </div>
          </template>

          <!--
          <div class="col-span-12 bg-neutral-200 h-[1px] my-2" />

          <div class="col-main-left">
            <BaseLabelWithToolTip title="ERC-20 Tokens Transferred:"
              tool-tip-text="List of ERC-20 tokens transferred in the transaction." />
            <span class="ml-1">x</span>
          </div>

          <div class="col-main-right">?</div>

          <div class="col-span-12 bg-neutral-200 h-[1px] my-2" />
          -->

          <div class="col-main-left">
            <BaseLabelWithToolTip title="Value:"
              :tool-tip-text="'The value being transacted in ' + token + ' and fiat value. Note: You can click the fiat value (if available) to see historical value at the time of transaction.'" />
          </div>
          <div class="col-main-right">
            <BaseLabelDefault :type="LabelType.Secondary">
              {{ weiToToken(props.tx.value) }} {{ token }}
            </BaseLabelDefault>
            <span v-if="tokenPrice" class="inline-flex items-center ml-1 text-qan-gray-900">
              <span class="mr-1">${{ formatNumber(Number(weiToToken(props.tx.value)) * Number(props.tokenPrice)) }}</span>
              <BaseTooltip text="Coingecko value" extra-classes="w-[120px]">
                <NuxtIcon name="circle-question-regular" class="text-qan-gray-900" />
              </BaseTooltip>
            </span>
          </div>

          <div class="col-main-left">
            <BaseLabelWithToolTip title="Transaction Fee:"
              tool-tip-text="Amount paid to the miner for processing the transaction." />
          </div>
          <div class="col-main-right">
            {{ weiToToken(props.tx.transactionfee) }}
          </div>

          <div class="col-main-left border-none">
            <BaseLabelWithToolTip title="Gas Price:"
              :tool-tip-text="'Cost per unit of gas specified for the transaction, in ' + token + ' and Gwei. The higher the gas price the higher chance of getting included in a block.'" />
          </div>
          <div class="col-main-right border-none">
            {{ weiToToken(props.tx.gasprice) }} {{ token }}
          </div>
        </div>

      </template>
    </BaseCard>

    <BaseCard>
      <template #body>
        <BaseMoreLess>
          <div class="grid grid-cols-12 gap-0 mx-3 pt-1">
            <div class="col-main-left">
              <BaseLabelWithToolTip title="Gas Limit & Usage by Txn:"
                tool-tip-text="Maximum amount of gas allocated for the transaction & the amount eventually used. Normal ETH transfers involve 21,000 gas units while contracts involve higher values." />
            </div>
            <div class="col-main-right">
              <span class="mr-2">{{ formatStringWithCommas(props.tx.gas) }}</span>
              <span class="mr-2 text-qan-gray-900/50">|</span>
              <span class="mr-2">{{ formatStringWithCommas(props.tx.gasused) }}</span>
              <span>({{ gasUsedPercent(props.tx.gasused, props.tx.gas) }}%)</span>
            </div>

            <template v-if="props.tx.basefeepergas || props.tx.maxfeepergas || props.tx.maxpriorityfeepergas">
              <div class="col-main-left">
                <BaseLabelWithToolTip title="Gas Fees:"
                  tool-tip-text="Base Fee refers to the network Base Fee at the time of the block, while Max Fee & Max Priority Fee refer to the max amount a user is willing to pay for their tx & to give to the block producer respectively." />
              </div>
              <div class="col-main-right">
                <div class="flex items-center">
                  <BaseTooltip v-if="props.tx.basefeepergas"
                    :text="formatStringWithCommas(weiToToken(props.tx.basefeepergas)) + ' ' + token"
                    extra-classes="w-[220px]">
                    <div>
                      <span class="mr-1 text-qan-gray-900">Base:</span>
                      <span>{{ formatStringWithCommas(weiToGwei(props.tx.basefeepergas)) }} Gwei</span>
                    </div>
                  </BaseTooltip>

                  <BaseTooltip v-if="props.tx.maxfeepergas"
                    :text="formatStringWithCommas(weiToToken(props.tx.maxfeepergas)) + ' ' + token"
                    extra-classes="w-[220px]">
                    <div>
                      <span v-if="props.tx.basefeepergas" class="mx-2 text-qan-gray-900/50">|</span>
                      <span class="mr-1 text-qan-gray-900">Max:</span>
                      <span>{{ formatStringWithCommas(weiToGwei(props.tx.maxfeepergas)) }} Gwei</span>
                    </div>
                  </BaseTooltip>

                  <BaseTooltip v-if="props.tx.maxpriorityfeepergas"
                    :text="formatStringWithCommas(weiToToken(props.tx.maxpriorityfeepergas)) + ' ' + token"
                    extra-classes="w-[220px]">
                    <div>
                      <span v-if="props.tx.basefeepergas || props.tx.maxfeepergas"
                        class="mx-2 text-qan-gray-900/50">|</span>
                      <span class="mr-1 text-qan-gray-900">Max Priority:</span>
                      <span>{{ formatStringWithCommas(weiToToken(props.tx.maxpriorityfeepergas)) }} Gwei</span>
                    </div>
                  </BaseTooltip>
                </div>
              </div>
            </template>

            <template v-if="props.tx.transactiontype === 2 && burntFees">
              <div class="col-main-left">
                <BaseLabelWithToolTip title="Burnt & Txn Savings Fees:"
                  :tool-tip-text="'Total amount of ' + token + ' burnt from this tx & total fees saved from the amount the user was willing to pay for this tx.'" />
              </div>
              <div class="col-main-right">
                <BaseLabelDefault :type="LabelType.Secondary" class="mr-2">
                  <span>🔥 {{ formatStringWithCommas(weiToToken(burntFees.toString())) }} {{ token }}</span>
                  <span v-if="tokenPrice" class="ml-1">(${{ (parseFloat(weiToToken(burntFees.toString())) *
                    tokenPrice).toFixed(2) }})</span>
                </BaseLabelDefault>

                <BaseLabelDefault :type="LabelType.Secondary" class="">
                  <span>💸 {{ formatStringWithCommas(weiToToken(txnSavingsFee.toString())) }} {{ token }}</span>
                  <span v-if="tokenPrice" class="ml-1">(${{ (parseFloat(weiToToken(txnSavingsFee.toString())) *
                    tokenPrice).toFixed(2) }})</span>
                </BaseLabelDefault>
              </div>
            </template>

            <div class="col-span-12 bg-neutral-200 h-[1px] my-2" />

            <div class="col-main-left">
              <BaseLabelWithToolTip title="Other Attributes:" tool-tip-text="Other data related to this transaction." />
            </div>
            <div class="col-main-right">
              <BaseLabelDefault :type="LabelType.Secondary" class="mr-2">
                <span class="text-qan-gray-900 mr-1">Txn Type:</span>
                <span>{{ props.tx.transactiontype }}</span>
                <span v-if="props.tx.transactiontype === 2" class="ml-1">(EIP-1559)</span>
              </BaseLabelDefault>
              <BaseLabelDefault :type="LabelType.Secondary" class="mr-2">
                <span class="text-qan-gray-900">Nonce:</span> {{ BigInt(props.tx.nonce).toString() }}
              </BaseLabelDefault>
              <BaseLabelDefault :type="LabelType.Secondary">
                <span class="text-qan-gray-900">Position:</span> {{ props.tx.index }}
              </BaseLabelDefault>
            </div>

            <template v-if="tx.qantransactioninput">
              <div class="col-main-left">
                <BaseLabelWithToolTip title="QAN Transaction Input:" tool-tip-text="QAN Transaction Input" />
              </div>
              <div class="col-main-right">
                <div class="flex flex-wrap items-start">
                  <BaseLabelDefault :type="LabelType.Secondary" class="mr-2 mb-2">
                    <span class="text-qan-gray-900 mr-1">Memory:</span>
                    <span>{{ tx.qantransactioninput.memory }}</span>
                  </BaseLabelDefault>
                  <BaseLabelDefault :type="LabelType.Secondary" class="mr-2 mb-2">
                    <span class="text-qan-gray-900 mr-1">Method:</span>
                    <span>{{ tx.qantransactioninput.memory }}</span>
                  </BaseLabelDefault>
                  <BaseLabelDefault :type="LabelType.Secondary" class="mr-2 mb-2">
                    <span class="text-qan-gray-900 mr-1">Args:</span>
                    <template v-for="(arg, i) in tx.qantransactioninput.argsList" :key="i">
                      <span class="break-all">
                        <span class="">{{ arg }}</span>
                        <span v-if="i < tx.qantransactioninput.argsList.length - 1">,</span>
                      </span>
                    </template>
                  </BaseLabelDefault>
                </div>
              </div>
            </template>

            <div class="col-main-left">
              <BaseLabelWithToolTip title="Input Data:"
                tool-tip-text="Additional data included for this transaction. Commonly used as part of contract interaction or as a message sent to the recipient." />
            </div>
            <div class="col-main-right">
              <textarea rows="4"
                class="bg-qan-gray-900/10 text-qan-gray-900 outline-none p-3 rounded w-full">{{ selectedTxInput }}</textarea>

              <div class="flex items-center mt-1">
                <!-- v-if="!onlyUTF8TxInput" -->
                <BaseLabelDefault class="mr-2 cursor-pointer select-none"
                  @click="onChangeTxInput(TxInputFormat.RawHEX)"
                  :type="selectedTxInputFormat === TxInputFormat.RawHEX ? LabelType.Primary : LabelType.Secondary">
                  Raw HEX
                </BaseLabelDefault>
                <!-- 
                <BaseLabelDefault class="mr-2 cursor-pointer select-none" @click="onChangeTxInput(TxInputFormat.UTF8)"
                  :type="selectedTxInputFormat === TxInputFormat.UTF8 ? LabelType.Primary : LabelType.Secondary">
                  UTF-8
                </BaseLabelDefault>
                 -->
              </div>
            </div>
          </div>
        </BaseMoreLess>
      </template>
    </BaseCard>
  </div>
</template>
