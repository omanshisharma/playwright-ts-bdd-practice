import { test, expect } from '@playwright/test';
import { TodoPage } from '../pages/todoPage';


test('dummy test', async () => {
  console.log('running');
});

test.describe('Todo POM test', () => {

  test('Add multiple todos', async ({ page }) => {

    const todo = new TodoPage(page);

    await todo.navigate();

    await todo.addTodo('Task 1');
    await todo.addTodo('Task 2');
    await todo.addTodo('Task 3');

    await expect(todo.todoItems).toHaveCount(3);
  });

});

