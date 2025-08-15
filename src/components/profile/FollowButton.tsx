import { ProfileActionsProps } from "@/types/interface"
import { ActionButton } from "../common/ui/Button"

const FollowButton = ({ isFollowing = false }: ProfileActionsProps) => {
    return (
        <ActionButton actionText={isFollowing ? "Unfollow" : "Follow"} />
    )
}

export default FollowButton