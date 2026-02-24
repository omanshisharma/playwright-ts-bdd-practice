import { test as base } from '@playwright/test';
import { TodoPage } from '../pages/todoPage';

export const test = base.extend<{
  todoPage: TodoPage;
}>({
  todoPage: async ({ page }, use) => {
    const todo = new TodoPage(page);
    await todo.navigate();
    await use(todo);
  },
});
