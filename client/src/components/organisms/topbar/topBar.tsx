'use client'

import Dropdown from '@/components/atoms/dropdown'
import { Bell, BellDot, LogOut, User, UserCircle, XCircle } from 'lucide-react'
import { useState } from 'react'

const TopBar = () => {
  const [isNotification, setIsNotification] = useState(false)
  const [isNotificationOpen, setIsNotificationOpen] = useState(false)
  const [isActive, setIsActive] = useState(false)
  const [notifications, setNotifications] = useState([
    {
      title: 'Nouvelle demande de devis',
      description: 'Une nouvelle demande de devis a été créée',
      active: `${isActive}`,
      time: 'Il y a 2 minutes',
    },
    {
      title: 'Nouvelle demande de devis',
      description: 'Une nouvelle demande de devis a été créée',
      active: `${isActive}`,
      time: 'Il y a 5 minutes',
    },
  ])

  const toggleNotification = () => {
    setIsNotificationOpen(!isNotificationOpen)
  }

  const toogleActive = () => {
    setIsActive(!isActive)
  }

  return (
    <nav className="c-topbar">
      <div className="c-topbar__logo">
        <h1>Auction</h1>
      </div>

      <div className="c-topbar__container">
        <div className="c-topbar__container__left">
          <div className="c-notification">
            {isNotification ? (
              <BellDot
                onClick={toggleNotification}
                className="cursor-pointer"
              />
            ) : (
              <Bell onClick={toggleNotification} className="cursor-pointer" />
            )}

            <div
              className={`${
                isNotificationOpen
                  ? 'c-notification-list--open'
                  : 'c-notification-list'
              }`}
            >
              <div className="c-notification-list-item-header">
                <p>Notification</p>
                <XCircle
                  size={20}
                  color="white"
                  onClick={toggleNotification}
                  className="cursor-pointer"
                />
              </div>
              {notifications.map((notification, index) => (
                <div key={index}>
                  <div
                    className={`c-notification-list-item ${
                      isActive && 'c-notification-list-item--active'
                    }`}
                    onClick={toogleActive}
                  >
                    <p className="c-notification-list-item-title">
                      {notification.title}
                    </p>
                    <div className="c-notification-list-item-description">
                      <p>{notification.description}</p>
                      <span>{notification.time}</span>
                    </div>
                  </div>
                  <hr />
                </div>
              ))}
            </div>
          </div>
        </div>
        <div className="c-topbar__container__right">
          <div className="c-topbar__container__right__item">
            <div className="c-profile-avatar">
              <Dropdown
                list={[
                  {
                    label: 'f.kouaho@skipperndt.com',
                    icon: <User />,
                  },
                  {
                    label: 'Déconnexion',
                    icon: <LogOut />,
                    onclick: () => {},
                  },
                ]}
              >
                <UserCircle />
              </Dropdown>
            </div>
          </div>
        </div>
      </div>
    </nav>
  )
}

export default TopBar
