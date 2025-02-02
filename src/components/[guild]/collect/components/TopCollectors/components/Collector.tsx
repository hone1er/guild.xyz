import { Skeleton, SkeletonCircle, Text, VStack } from "@chakra-ui/react"
import GuildAvatar from "components/common/GuildAvatar"
import useResolveAddress from "hooks/useResolveAddress"
import pluralize from "utils/pluralize"
import shortenHex from "utils/shortenHex"
import useNftRanges from "../../CollectNft/hooks/useNftRanges"

type Props = {
  address: string
  balance: number
}

const Collector = ({ address, balance }: Props): JSX.Element => {
  const domain = useResolveAddress(address)
  const ranges = useNftRanges()

  if (!address) return null

  const rangeIcon = ranges?.find((r) => r.min <= balance && r.max >= balance)?.icon

  return (
    <VStack spacing={1}>
      <GuildAvatar
        address={address}
        size={{ base: 6, sm: 7, md: 8 }}
        opacity={0.75}
      />

      <VStack spacing={0}>
        <Text
          as="span"
          fontWeight="semibold"
          fontSize="sm"
          maxW="full"
          noOfLines={1}
          opacity={0.75}
        >
          {domain ?? shortenHex(address, 3)}
        </Text>
        <Text
          as="span"
          fontWeight="semibold"
          fontSize="xs"
          maxW="full"
          noOfLines={1}
          color="GrayText"
        >
          {`${rangeIcon ? `${rangeIcon} ` : ""}${pluralize(balance, "mint")}`}
        </Text>
      </VStack>
    </VStack>
  )
}

const CollectorSkeleton = () => (
  <VStack spacing={1}>
    <SkeletonCircle boxSize={{ base: 5, md: 7 }} />
    <Skeleton w="full" h={3} />
    <Skeleton w="full" h={3} />
  </VStack>
)

export default Collector
export { CollectorSkeleton }
