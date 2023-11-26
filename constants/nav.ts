export const sidebarNavItems = (id: string = "...") => [
  {
    title: "General",
    href: `/${id}/settings`,
  },

  {
    title: "Validations",
    href: `/${id}/settings/validations`,
  },
  {
    title: "Events",
    href: `/${id}/settings/events`,
  },
  {
    title: "Security",
    href: `/${id}/settings/security`,
  },
];

export enum InAppLinks {
  // Auth
  GetStarted = "/signup",
  Login = "/login",
  // Landing
  Home = "/",
}
