export function checkPermissionForComponent(roles, route) {
  return roles.permission.some(
    (role) =>
      role.resource === route.resource &&
      role.path === route.path &&
      role.method === route.method,
  );
}
