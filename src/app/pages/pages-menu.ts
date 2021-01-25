import { NbMenuItem } from "@nebular/theme";
// import { title } from 'process';

export const MENU_ITEMS: NbMenuItem[] = [
  {
    title: "Dashboard",
    icon: "home-outline",
    link: "/pages/dashboard",
  },
  {
    title: "Dialogs",
    icon: "message-circle-outline",
    link: "forms/form-layouts",
  },
  {
    title: "Reporting",
    icon: "clipboard-outline",
    children: [
      {
        title: "Messages",
        link: "/pages/reporting/messages",
      },
      {
        title: "Chatbot Success Rate",
        link: "/pages/reporting/chatbot-success-rate",
      },
    ],
  },
];
