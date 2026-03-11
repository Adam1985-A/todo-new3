import { UserEntity } from "../entities/user.entity.js";
export declare class TodoEntity {
    id: number;
    title: string;
    description: string;
    completed: "boolean";
    createdAt: Date;
    updatedAt: Date;
    user: Promise<UserEntity>;
}
export default TodoEntity;
//# sourceMappingURL=todo.entity.d.ts.map