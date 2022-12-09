import React from "react";
import { ComponentStory, ComponentMeta } from '@storybook/react';

import { Avatar } from "../src";

export default {
    title: "Components / Avatar",
    decorators: [
        (Story: any) => (
            <Story/>
        )
    ],
    component: Avatar,
} as ComponentMeta<typeof Avatar>

export const Basic: ComponentStory<typeof Avatar> = () => <Avatar name="Dan Abrahmov" />;

