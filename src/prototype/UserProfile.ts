import { UserProfilePrototype } from "./UserProfilePrototype";

export class UserProfile implements UserProfilePrototype {
  public constructor(
    public username: string,
    public department: "finance" | "engineering" | "marketing",
    public permissions: {
      canEditUsers: boolean;
      canApproveBudget: boolean;
      canAccessInternalTools: boolean;
    },
  ) {}

  clone(): UserProfilePrototype {
    return new UserProfile(
      this.username,
      this.department,
      structuredClone(this.permissions),
    );
  }
}
