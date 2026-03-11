import { TodoEntity } from "../entities/todo.entity.js";
export declare class UserEntity {
    id: number;
    email: string;
    password: string;
    createdAt: Date;
    updatedAt: Date;
    todos: Promise<TodoEntity[]>;
}
export default UserEntity;
//# sourceMappingURL=user.entity.d.ts.map