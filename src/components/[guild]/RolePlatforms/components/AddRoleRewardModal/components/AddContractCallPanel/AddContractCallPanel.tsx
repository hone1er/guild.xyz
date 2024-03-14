import { AddPlatformPanelProps } from "platforms/rewards"
import CreateNftForm from "./components/CreateNftForm"

const AddContractCallPanel = ({ onAdd }: AddPlatformPanelProps) => (
  <CreateNftForm
    onSuccess={(guildPlatform) =>
      onAdd({
        guildPlatform,
        isNew: true,
      })
    }
  />
)

export default AddContractCallPanel
