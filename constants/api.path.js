export const ApiUrls = {
  
  ADMIN_AUTH: {
    LOGIN: "/auth/login",
  },
  ADMIN_APIS: {
    USERS: "/auth/allUsers",
    USER_DETAIL : "/auth/userDetail",
    USER_DELETE : "/auth/deleteUser",
    TASKS : "task/allTasks",
    ADD_TASK: "/task/addTask",
    ADMINS : "/auth/allsubadmins",
    ADD_SUBADMIN : "/auth/addSubadmin",
    IMPORT_USERS : "/file/upload",
    CATEGORIES:"/category/allCategories",
    ADD_CATEGORY:"/category/addCategory",
    DELETE_CATEGORY:"/category/delete",
    EDIT_CATEGORY:"/category/update",
    DELETE_TASK:"/task/delete",
    DELETE_SUBADMIN:"/auth/deletesubadmin",
    EDIT_TASK:"/task/update",
    IMPORT_TASKS : "/file/taskListUpload",
    STATS:"/stats/get"
  },
};

export const servicesAccessibleWithoutToken = [
  ...Object.values(ApiUrls.ADMIN_AUTH),
//   ...Object.values(ApiUrls.CONFIG),
];
