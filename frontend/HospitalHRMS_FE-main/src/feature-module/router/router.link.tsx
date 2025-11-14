import React from "react";
import { Navigate, Route } from "react-router";
import { all_routes } from "./all_routes";

/*
  Clean router for selected modules only:
  - Dashboards
  - Employees / User Management
  - Projects & Tasks
  - Recruitment
  - Tickets
  - Membership
  - Super Admin
  - Settings
  - UI Components (small selection)
  This file intentionally avoids imports for modules that don't exist
  (attendance, departments, payroll, leave) to prevent compile errors.
*/

/* -------------------------
   MAIN / DASHBOARDS
   ------------------------- */
/* -------------------------
   MAIN / DASHBOARDS
   ------------------------- */
import AdminDashboard from "../mainMenu/adminDashboard";
import EmployeeDashboard from "../mainMenu/employeeDashboard/employee-dashboard";
import LeadsDasboard from "../mainMenu/leadsDashboard";
import DealsDashboard from "../mainMenu/dealsDashboard";


/* -------------------------
   USER / EMPLOYEES / ROLES
   ------------------------- */
import Manageusers from "../userManagement/manageusers";
import RolesPermissions from "../userManagement/rolesPermissions";
import Permission from "../userManagement/permission";
import DeleteRequest from "../userManagement/deleteRequest";

/* -------------------------
   PROJECTS & TASKS
   ------------------------- */
import Project from "../projects/project/project";
import ProjectList from "../projects/project/projectlist";
import ProjectDetails from "../projects/project/projectdetails";
import Task from "../projects/task/task";
import TaskDetails from "../projects/task/taskdetails";
import TaskBoard from "../projects/task/task-board";

/* -------------------------
   RECRUITMENT
   ------------------------- */
import JobList from "../recruitment/joblist/joblist";
import CandidatesList from "../recruitment/candidates/candidatelist";
import CandidateGrid from "../recruitment/candidates/candidategrid";
import CandidateKanban from "../recruitment/candidates/candidatekanban";
import RefferalList from "../recruitment/refferal/refferallist";

/* -------------------------
   TICKETS
   ------------------------- */
import Tickets from "../tickets/tickets";
import TicketGrid from "../tickets/tickets-grid";
import TicketDetails from "../tickets/ticket-details";

/* -------------------------
   MEMBERSHIP
   ------------------------- */
import Membershipplan from "../membership/membershipplan";
import MembershipAddon from "../membership/membershipaddon";
import MembershipTransaction from "../membership/membershiptrasaction";

/* -------------------------
   SUPER ADMIN
   ------------------------- */
import Companies from "../super-admin/companies";
import Subscription from "../super-admin/subscription";
import Packages from "../super-admin/packages/packagelist";
import PackageGrid from "../super-admin/packages/packagelist";
import Domain from "../super-admin/domin";
import PurchaseTransaction from "../super-admin/purchase-transaction";

/* -------------------------
   SETTINGS (selected set)
   ------------------------- */
import Profilesettings from "../settings/generalSettings/profile-settings";
import Securitysettings from "../settings/generalSettings/security-settings";
import Notificationssettings from "../settings/generalSettings/notifications-settings";

import CompanySettings from "../settings/websiteSettings/companySettings";
import Languagesettings from "../settings/websiteSettings/language";
import Aisettings from "../settings/websiteSettings/ai-settings";

import InvoiceSettings from "../settings/appSettings/invoiceSettings";
import CustomFields from "../settings/appSettings/customFields";
import EmailSettings from "../settings/systemSettings/emailSettings";
import SmsSettings from "../settings/systemSettings/smsSettings";
import OtpSettings from "../settings/systemSettings/otp-settings";
import GdprCookies from "../settings/systemSettings/gdprCookies";
import Maintenancemode from "../settings/systemSettings/maintenance-mode";

/* -------------------------
   UI COMPONENTS (small selection)
   ------------------------- */
import Buttons from "../uiInterface/base-ui/buttons";
import Cards from "../uiInterface/base-ui/cards";
import Carousel from "../uiInterface/base-ui/carousel";
import Colors from "../uiInterface/base-ui/colors";
import Images from "../uiInterface/base-ui/images";
import Modals from "../uiInterface/base-ui/modals";
import NavTabs from "../uiInterface/base-ui/navtabs";
import Dropdowns from "../uiInterface/base-ui/dropdowns";
import DataTables from "../uiInterface/table/data-tables";
import TablesBasic from "../uiInterface/table/tables-basic";

/* -------------------------
   APPLICATION TOOLS
   ------------------------- */
import Chat from "../application/chat";
import Email from "../application/email";
import FileManager from "../application/fileManager";
import KanbanView from "../application/kanbanView";
import Todo from "../application/todo/todo";
import TodoList from "../application/todo/todolist";
import Calendars from "../mainMenu/apps/calendar";

/* -------------------------
   AUTH & PAGES (common)
   ------------------------- */
import Login from "../auth/login/login";
import Login2 from "../auth/login/login-2";
import Login3 from "../auth/login/login-3";
import Register from "../auth/register/register";
import ForgotPassword from "../auth/forgotPassword/forgotPassword";
import ResetPassword from "../auth/resetPassword/resetPassword";
import Error404 from "../pages/error/error-404";
import Error500 from "../pages/error/error-500";
import UnderMaintenance from "../pages/underMaintenance";
import StarterPage from "../pages/starter";
import SearchResult from "../pages/search-result";
import TimeLines from "../pages/timeline";
import Pricing from "../pages/pricing";
import ApiKeys from "../pages/api-keys";
import Gallery from "../pages/gallery";
import PrivacyPolicy from "../pages/privacy-policy";
import TermsCondition from "../pages/terms-condition";
import Profile from "../pages/profile";

/* -------------------------
   Compose route arrays
   ------------------------- */

const routes = all_routes;

export const publicRoutes = [
  { path: "/", name: "Root", element: <Navigate to="/index" />, route: Route },

  // Dashboards
  {
    path: "/",
    name: "Root",
    element: <Navigate to="/index" />,
    route: Route,
  },

  // The missing page causing white screen
  {
    path: "/index",
    element: <AdminDashboard />,
    route: Route,
  },

  // Dashboards
  {
    path: routes.adminDashboard,
    element: <AdminDashboard />,
    route: Route,
  },
  { path: routes.employeeDashboard, element: <EmployeeDashboard />, route: Route },
  { path: routes.leadsDashboard, element: <LeadsDasboard />, route: Route },
  { path: routes.dealsDashboard, element: <DealsDashboard />, route: Route },

  // Application / Tools
  { path: routes.chat, element: <Chat />, route: Route },
  { path: routes.email, element: <Email />, route: Route },
  { path: routes.fileManager, element: <FileManager />, route: Route },
  { path: routes.kanbanView, element: <KanbanView />, route: Route },
  { path: routes.calendar, element: <Calendars />, route: Route },
  { path: routes.todo, element: <Todo />, route: Route },
  { path: routes.TodoList, element: <TodoList />, route: Route },

  // Projects & tasks
  { path: routes.project, element: <Project />, route: Route },
  { path: routes.projectlist, element: <ProjectList />, route: Route },
  { path: routes.projectdetails, element: <ProjectDetails />, route: Route },
  { path: routes.tasks, element: <Task />, route: Route },
  { path: routes.tasksdetails, element: <TaskDetails />, route: Route },
  { path: routes.taskboard, element: <TaskBoard />, route: Route },

  // Recruitment
  { path: routes.joblist, element: <JobList />, route: Route },
  { path: routes.candidateslist, element: <CandidatesList />, route: Route },
  { path: routes.candidatesGrid, element: <CandidateGrid />, route: Route },
  { path: routes.candidateskanban, element: <CandidateKanban />, route: Route },
  { path: routes.refferal, element: <RefferalList />, route: Route },

  // Tickets
  { path: routes.tickets, element: <Tickets />, route: Route },
  { path: routes.ticketGrid, element: <TicketGrid />, route: Route },
  { path: routes.ticketDetails, element: <TicketDetails />, route: Route },

  // Membership
  { path: routes.membershipplan, element: <Membershipplan />, route: Route },
  { path: routes.membershipAddon, element: <MembershipAddon />, route: Route },
  { path: routes.membershipTransaction, element: <MembershipTransaction />, route: Route },

  // User management / employees
  { path: routes.manageusers, element: <Manageusers />, route: Route },
  { path: routes.rolesPermissions, element: <RolesPermissions />, route: Route },
  { path: routes.permissionpage, element: <Permission />, route: Route },
  { path: routes.deleteRequest, element: <DeleteRequest />, route: Route },

  // Super Admin
  { path: routes.superAdminCompanies, element: <Companies />, route: Route },
  { path: routes.superAdminSubscriptions, element: <Subscription />, route: Route },
  { path: routes.superAdminPackages, element: <Packages />, route: Route },
  { path: routes.superAdminPackagesGrid, element: <PackageGrid />, route: Route },
  { path: routes.superAdminDomain, element: <Domain />, route: Route },
  { path: routes.superAdminPurchaseTransaction, element: <PurchaseTransaction />, route: Route },

  // Settings (selected)
  { path: routes.profilesettings, element: <Profilesettings />, route: Route },
  { path: routes.securitysettings, element: <Securitysettings />, route: Route },
  { path: routes.notificationssettings, element: <Notificationssettings />, route: Route },

  { path: routes.companySettings, element: <CompanySettings />, route: Route },
  { path: routes.language, element: <Languagesettings />, route: Route },
  { path: routes.aiSettings, element: <Aisettings />, route: Route },

  { path: routes.invoiceSettings, element: <InvoiceSettings />, route: Route },
  { path: routes.customFields, element: <CustomFields />, route: Route },
  { path: routes.emailSettings, element: <EmailSettings />, route: Route },
  { path: routes.smsSettings, element: <SmsSettings />, route: Route },
  { path: routes.otpSettings, element: <OtpSettings />, route: Route },
  { path: routes.gdprCookies, element: <GdprCookies />, route: Route },
  { path: routes.maintenanceMode, element: <Maintenancemode />, route: Route },

  // UI Components (small selection)
  { path: routes.button, element: <Buttons />, route: Route },
  { path: routes.cards, element: <Cards />, route: Route },
  { path: routes.carousel, element: <Carousel />, route: Route },
  { path: routes.colors, element: <Colors />, route: Route },
  { path: routes.images, element: <Images />, route: Route },
  { path: routes.modals, element: <Modals />, route: Route },
  { path: routes.navTabs, element: <NavTabs />, route: Route },
  { path: routes.dropdowns, element: <Dropdowns />, route: Route },

  // Tables
  { path: routes.dataTables, element: <DataTables />, route: Route },
  { path: routes.tablesBasic, element: <TablesBasic />, route: Route },

  // Pages / misc
  { path: routes.starter, element: <StarterPage />, route: Route },
  { path: routes.searchresult, element: <SearchResult />, route: Route },
  { path: routes.timeline, element: <TimeLines />, route: Route },
  { path: routes.pricing, element: <Pricing />, route: Route },
  { path: routes.apikey, element: <ApiKeys />, route: Route },
  { path: routes.gallery, element: <Gallery />, route: Route },
  { path: routes.privacyPolicy, element: <PrivacyPolicy />, route: Route },
  { path: routes.termscondition, element: <TermsCondition />, route: Route },
  { path: routes.profile, element: <Profile />, route: Route },

  // Error / utility
  { path: routes.error404, element: <Error404 />, route: Route },
  { path: routes.error500, element: <Error500 />, route: Route },
  { path: routes.underMaintenance, element: <UnderMaintenance />, route: Route },
];

/* -------------------------
   AUTH ROUTES (login / public)
   ------------------------- */

export const authRoutes = [
  { path: routes.comingSoon, element: <StarterPage />, route: Route },
  { path: routes.login, element: <Login />, route: Route },
  { path: routes.login2, element: <Login2 />, route: Route },
  { path: routes.login3, element: <Login3 />, route: Route },
  { path: routes.register, element: <Register />, route: Route },
  { path: routes.forgotPassword, element: <ForgotPassword />, route: Route },
  { path: routes.resetPassword, element: <ResetPassword />, route: Route },
  { path: routes.error404, element: <Error404 />, route: Route },
  { path: routes.error500, element: <Error500 />, route: Route },
  { path: routes.underMaintenance, element: <UnderMaintenance />, route: Route },
];

/* -------------------------
   Default export (keeps compatibility)
   ------------------------- */

export default {
  publicRoutes,
  authRoutes,
};
