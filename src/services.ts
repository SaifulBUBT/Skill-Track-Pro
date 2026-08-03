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

// Function to add a new skill to a user
export function addSkill(userId: number, skill: Skill): boolean {

  const user = findUserById(userId); // Find the user by ID
  if (!user) {
    console.error("User not found");
    return false;
  }

  // Check if the skill already exists for the user
  const existingSkill = user.skills.find((s) => s.name.toLowerCase() === skill.name.toLowerCase());
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


// Function to update an existing skill for a user
export function updateSkill(userId: number, skillId: number, updatedSkill: Partial<Skill>): boolean {
  const user = findUserById(userId);
  if (!user) {
    console.error("User not found");
    return false;
  } 
  
  const skillIndex = user.skills.findIndex((s) => s.id === skillId);
  if (skillIndex === -1) {
    console.error("Skill not found");
    return false;
  } 

  user.skills[skillIndex] = { ...user.skills[skillIndex], ...updatedSkill, updatedAt: new Date() };
  return true;
}

updateSkill(1, 2, { name: "Shopify App", level: SkillLevel.Advanced, status: SkillStatus.Active });


// Function to update skill level for a user

// export function updateSkillLevel(userId: number, skillId: number, newLevel: SkillLevel): boolean {
//   const user = findUserById(userId);
//   if (!user) {
//     console.error("User not found");
//     return false;
//   }

//   const skill = user.skills.find((s) => s.id === skillId);
//   if (!skill) {
//     console.error("Skill not found");
//     return false;
//   }

//   skill.level = newLevel;
//   skill.updatedAt = new Date();
//   return true;
// }

// updateSkillLevel(1, 1, SkillLevel.Beginner); 

// Function to archive a skill for a user
export function archiveSkill(userId: number, skillId: number): boolean {
  const user = findUserById(userId);
  if (!user) {
    console.error("User not found");
    return false;
  }

  const skill = user.skills.find((s) => s.id === skillId);
  if (!skill) {
    console.error("Skill not found");
    return false;
  }

  skill.status = SkillStatus.Archived;
  skill.updatedAt = new Date();
  return true;
}

archiveSkill(2, 6); 

// Get active skills for a user
export function getActiveSkills(skills: Skill[]): Skill[] | undefined {
  
  return skills.filter((skill) => skill.status === SkillStatus.Active);
}
