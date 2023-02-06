import { HashRouter, Switch, Route, Redirect } from 'react-router-dom';
import AuthorPage from './features/author/AuthorPage';
import TasksPage from './features/tasks/TasksPage';
import TaskPage from './features/tasks/TaskPage';
import { Menu, MenuElement, StyledNavLink } from "./styled";

export default () => (
  <HashRouter>
    <nav>
      <Menu>
        <MenuElement>
          <StyledNavLink to="/zadania">Zadania</StyledNavLink>
        </MenuElement>
        <MenuElement>
          <StyledNavLink to="/autor">O autorze</StyledNavLink>
        </MenuElement>
      </Menu>
      <Switch>
      <Route path="/zadania/:id">
          <TaskPage />
        </Route>
        <Route path="/zadania">
          <TasksPage />
        </Route>
        <Route path="/autor">
          <AuthorPage />
        </Route>
        <Route path="/">
          <Redirect to="/zadania" />
        </Route>
      </Switch>
    </nav>
  </HashRouter>
);