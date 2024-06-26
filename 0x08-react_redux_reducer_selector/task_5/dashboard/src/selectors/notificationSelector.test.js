import { filterTypeSelected, getNotifications, getUnreadNotifications } from './notificationSelector';

describe('Notification Selectors', () => {
  const state = {
    notifications: {
      filter: 'ALL',
      notifications: [
        { id: 1, message: 'Notification 1', isRead: true },
        { id: 2, message: 'Notification 2', isRead: false },
        { id: 3, message: 'Notification 3', isRead: false },
      ],
    },
  };

  it('filterTypeSelected should return the filter type', () => {
    expect(filterTypeSelected(state)).toEqual('ALL');
  });

  it('getNotifications should return the list of notifications', () => {
    expect(getNotifications(state)).toEqual([
      { id: 1, message: 'Notification 1', isRead: true },
      { id: 2, message: 'Notification 2', isRead: false },
      { id: 3, message: 'Notification 3', isRead: false },
    ]);
  });

  it('getUnreadNotifications should return the list of unread notifications', () => {
    expect(getUnreadNotifications(state)).toEqual([
      { id: 2, message: 'Notification 2', isRead: false },
      { id: 3, message: 'Notification 3', isRead: false },
    ]);
  });
});


