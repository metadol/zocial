"use client"
import { ProfileActionsProps } from "@/types/interface"
import { ActionButton } from "../common/ui/Button"
import React from "react";
import { useUser } from "@clerk/nextjs";
import { followUser } from "@/utils/action";

const FollowButton = ({ isFollowing = false, profileId }: ProfileActionsProps) => {
    const [state, setState] = React.useState(isFollowing);
    const { user } = useUser();

    if (!user) return null; // safer to return null instead of undefined

    const handleFollow = async () => {
        if (!profileId) {
            console.error("profileId is undefined");
            return;
        }

        try {
            await followUser(profileId); // server action or API call
            setState((prev) => !prev);   // optimistic toggle
        } catch (error) {
            console.error("Failed to follow/unfollow", error);
        }
    };

    return (
        <ActionButton
            actionText={state ? "Unfollow" : "Follow"}
            onClick={handleFollow}
        />
    );
}

export default FollowButton;
