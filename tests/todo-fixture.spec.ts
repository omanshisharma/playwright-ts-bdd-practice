import { expect } from '@playwright/test';
import { test } from '../fixtures/todoFixture';

test('Using custom fixture', async ({ todoPage }) => {

  await todoPage.addTodo('Fixture Task 1');
  await todoPage.addTodo('Fixture Task 2');

  await expect(todoPage.todoItems).toHaveCount(2);

});
