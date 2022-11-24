import React from "react";
import Avatar from "./avatar";
import avatarData from "../avatarArray";

export function Avatars() {
  return (
    <div className="avatar-set">
      {avatarData.map((avatar) => (
        <Avatar key={avatar.src} src={avatar.src} alt={avatar.alt} />
      ))}
    </div>
  );
}
