import { createSelector } from 'reselect';

const notificationsState = (state) => state.notifications;

export const filterTypeSelected = createSelector(
  [notificationsState],
  (notifications) => notifications.filter
);

export const getNotifications = createSelector(
  [notificationsState],
  (notifications) => notifications.list
);

export const getUnreadNotifications = createSelector(
  [getNotifications],
  (notifications) => notifications.filter(notification => !notification.isRead)
);
