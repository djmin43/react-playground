import type { Story } from "@ladle/react";
import { World } from "./hello.stories.tsx";

export const Simple: Story = () => (
  <ul>
    <World />
    <li>Item 1</li>
    <li>Item 2</li>
  </ul>
);
