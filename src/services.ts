// যে function data নিয়ে কাজ করবে।

// addSkill()

// updateSkill()

// archiveSkill()

// findUser()

// searchSkill()

// এগুলো data modify করবে।

// Rule:

// utils = Display Logic
// services = Business Logic

import { users } from "./data";
import type { User, Skill } from "./types";
import { SkillLevel, SkillStatus } from "./enums";


export function findUserById(userId: number): User | undefined {
  return users.find((user) => user.id === userId);
}

export function addSkill(userId: number, skill: Skill): boolean {

  const user = findUserById(userId); // Find the user by ID
  if (!user) {
    console.error("User not found");
    return false;
  }

  // Check if the skill already exists for the user
  const existingSkill = user.skills.find((s) => s.name === skill.name);
  if (existingSkill) {
    console.error(`Skill "${skill.name}" already exists for this user`);
    return false;
  }

  user.skills.push(skill);
  return true;
}

addSkill(1, {
  id: 7,
  name: "Vue.js",
  level: SkillLevel.Beginner,
  status: SkillStatus.Active,
  createdAt: new Date(),
  updatedAt: new Date()
});

addSkill(1, {
  id: 8,
  name: "Angular",
  level: SkillLevel.Intermediate,
  status: SkillStatus.Active,
  createdAt: new Date(),
  updatedAt: new Date()
});