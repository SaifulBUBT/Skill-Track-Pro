import type { Skill, User } from "./types";
import { users } from "./data";
import { getActiveSkills } from "./services";

// যে function শুধু display করবে। oi gula e utils function e thakbe. jar dara data change hobe na.
// printUsers()

// printSkills()

// printLine()

// এগুলো কোনো data change করবে না।


export function printLine(): void {
  console.log("--------------------------------");
}

export function printUsers(users: User[]): void {
    printLine();
    console.log("Users");
    printLine();

    users.forEach(user => {
        console.log(`Name: ${user.name}`);
    });
}
printUsers(users);


export function printSkills(skills: User["skills"]): void {
    printLine();
    console.log("Skills");
    printLine();

    const activeSkills: Skill[] | undefined = getActiveSkills(skills); // Use the service function to get active skills

    activeSkills?.forEach(skill => {
        console.log(`id: ${skill.id}, Name: ${skill.name}, Level: ${skill.level}, Status: ${skill.status}`);
    });
}


printSkills(users[1].skills);
