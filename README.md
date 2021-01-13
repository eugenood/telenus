# TeleNUS

Just another community-maintained platform for managing NUS-related Telegram groups.

## Overview

### What is TeleNUS?

TeleNUS is a community-maintained platform for managing NUS-related Telegram groups. Users can add and remove groups using the [TeleNUS bot](https://t.me/telenus_bot) and browse groups on the [TeleNUS website](https://telenus.nusmods.com).

### What does it mean to be community-maintained?

By design, all users are given the freedom to add any groups into TeleNUS to encourage diversity of groups. To counteract malicious users from adding inappropriate groups, all users are also given the power to remove any groups from TeleNUS. Since the power of curation is distributed equally among all users, TeleNUS is effectively maintained by the community of users.

### How to add a group into TeleNUS?

Add [@telenus_bot](https://t.me/telenus_bot) into the group, promote it to an administrator, and run the `/add` command.

### How to remove a group from TeleNUS?

Run the `/remove` command.

### What are legacy groups?

Legacy groups are groups that were previously registered under nusmodchat. Since the TeleNUS bot is not an administrator in these groups, certain features will be unavailable. All legacy groups will be removed from TeleNUS at the end of January.

### How to convert a legacy group to a non-legacy group?

Add [@telenus_bot](https://t.me/telenus_bot) into the group, promote it to an administrator, run the `/remove` command, then run the `/add` command. The removal step is required to remove the group as a legacy group.

### Why does TeleNUS bot requires administrative rights?

Administrative rights are required to generate the group link. They are also needed to automatically remove the alert messages when a user entered or leave the chat.

## License

TeleNUS is [MIT licensed](https://github.com/eugenood/telenus/blob/main/LICENSE).
