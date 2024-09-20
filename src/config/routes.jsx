import { createBrowserRouter } from "react-router-dom";
import AuthView from "../views/auth_view";
import AppView from "../views/app_view";
import Dashboard from "../views/app_view/Dashboard";

export const router = createBrowserRouter([
    { 
      path: "/auth", 
      children: [
        {
          path: "/auth/login",
          Component: AuthView
        }
      ]
    },
    { 
      path: "/app",
      Component: AppView,
      children: [
        {
          path: "/app/dashboard",
          Component: Dashboard,
          title: 'Dashboard'
        },
        {
          path: "/app/tasks",
          title: 'Tasks',
          // children: [
          //   {
          //     path: "/app/tasks/task-list",
          //     Component: TaskList,
          //     title: 'Task List'
          //   },
          //   {
          //     path: "/app/tasks/kanban-board",
          //     Component: KanbanBoard,
          //     title: 'Kanban Board'
          //   },
          // ]
        },
        // {
        //   path: "/app/tasks",
        //   Component: Profile,
        //   title: 'Tasks',
        //   children: [
        //     {
        //       path: "/app/tasks/tickets",
        //       Component: Profile,
        //       title: 'Open a Ticket'
        //     },
        //     {
        //       path: "/app/tasks/projects",
        //       Component: Profile,
        //       title: 'Taks',
        //     },
        //   ]
        // },
        // {
        //   path: "/app/my-tasks",
        //   Component: Tasks,
        //   title: 'My Tasks'
        // },
        {
          path: "/app/projects",
          title: 'Projects',
        },
        {
          path: "/app/profile",
          title: 'Profile',
          
          children: [
            {
              path: "/app/profile/dw",
              title: 'Open a Ticket'
            },
            {
              path: "/app/profile/sfsf",
              title: 'Taks',
            },
          ]
        },
      ] 
    },
]);