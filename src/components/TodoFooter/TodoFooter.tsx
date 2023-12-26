import cn from 'classnames';
import { Status } from '../../types/Status';
import { Todo } from '../../types/Todo';

interface Props {
  allTodos: Todo[]
  visibleTodos: Todo[]
  status: Status
  onStatus: (status: Status) => void
  onClear: () => void
}

export const TodoFooter: React.FC<Props> = ({
  allTodos, visibleTodos, status, onStatus, onClear,
}) => {
  return (
    <footer className="todoapp__footer" data-cy="Footer">
      <span className="todo-count" data-cy="TodosCounter">
        {`${allTodos.filter(todo => !todo.completed).length} items left`}
      </span>

      <nav className="filter" data-cy="Filter">
        <a
          href="#/"
          className={cn('filter__link', {
            selected: status === Status.all,
          })}
          data-cy="FilterLinkAll"
          onClick={() => onStatus(Status.all)}
        >
          All
        </a>

        <a
          href="#/active"
          className={cn('filter__link', {
            selected: status === Status.active,
          })}
          data-cy="FilterLinkActive"
          onClick={() => onStatus(Status.active)}
        >
          Active
        </a>

        <a
          href="#/completed"
          className={cn('filter__link', {
            selected: status === Status.completed,
          })}
          data-cy="FilterLinkCompleted"
          onClick={() => onStatus(Status.completed)}
        >
          Completed
        </a>
      </nav>

      <button
        type="button"
        className="todoapp__clear-completed"
        data-cy="ClearCompletedButton"
        onClick={onClear}
        disabled={visibleTodos.every(todo => !todo.completed)}
      >
        Clear completed
      </button>
    </footer>
  );
};