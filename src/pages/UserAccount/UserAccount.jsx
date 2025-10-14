import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import styles from './UserAccount.module.css';

const UserAccount = () => {
  const [activeSection, setActiveSection] = useState('profile');
  const [userData, setUserData] = useState({
    name: 'Sarah Johnson',
    email: 'sarah.johnson@example.com',
    phone: '+1 (555) 123-4567',
    memberSince: 'January 2024'
  });

  const [profileData, setProfileData] = useState({
    firstName: 'Sarah',
    lastName: 'Johnson',
    email: 'sarah.johnson@example.com',
    phone: '+1 (555) 123-4567',
    preferences: {
      newsletter: true,
      specialOffers: false,
      smsNotifications: true
    }
  });

  const orders = [
    {
      id: 'ORD-7842',
      date: '2024-03-15',
      items: 3,
      total: 450.00,
      status: 'Delivered',
      tracking: 'TRK93847261'
    },
    {
      id: 'ORD-6521',
      date: '2024-03-08',
      items: 1,
      total: 185.50,
      status: 'Processing',
      tracking: 'TRK51928374'
    },
    {
      id: 'ORD-5198',
      date: '2024-02-28',
      items: 2,
      total: 320.75,
      status: 'Delivered',
      tracking: 'TRK28471639'
    }
  ];

  const addresses = [
    {
      id: 1,
      type: 'Home',
      name: 'Sarah Johnson',
      street: '123 Luxury Lane',
      city: 'New York',
      state: 'NY',
      zipCode: '10001',
      country: 'United States',
      isDefault: true
    },
    {
      id: 2,
      type: 'Work',
      name: 'Sarah Johnson',
      street: '456 Business Ave, Suite 1200',
      city: 'New York',
      state: 'NY',
      zipCode: '10002',
      country: 'United States',
      isDefault: false
    }
  ];

  const enquiries = [
    {
      id: 1,
      type: 'Corporate Gifts',
      subject: 'Bulk Order for Annual Conference',
      date: '2024-03-10',
      status: 'In Review',
      description: 'Looking for premium gift sets for 200 conference attendees.'
    },
    {
      id: 2,
      type: 'Custom Order',
      subject: 'Personalized Leather Wallets',
      date: '2024-03-05',
      status: 'Completed',
      description: 'Request for custom embossing on executive leather wallets.'
    }
  ];

  const handleProfileUpdate = (e) => {
    e.preventDefault();
    // Handle profile update logic here
    alert('Profile updated successfully!');
  };

  const handleInputChange = (e) => {
    const { name, value, type, checked } = e.target;
    if (name.startsWith('preferences.')) {
      const prefKey = name.split('.')[1];
      setProfileData(prev => ({
        ...prev,
        preferences: {
          ...prev.preferences,
          [prefKey]: checked
        }
      }));
    } else {
      setProfileData(prev => ({
        ...prev,
        [name]: value
      }));
    }
  };

  const renderProfileSection = () => (
    <div className={styles.sectionContent}>
      <div className={styles.sectionHeader}>
        <h2>Personal Information</h2>
        <p>Update your personal details and preferences</p>
      </div>

      <form onSubmit={handleProfileUpdate} className={styles.profileForm}>
        <div className={styles.formRow}>
          <div className={styles.formGroup}>
            <label htmlFor="firstName">First Name</label>
            <input
              type="text"
              id="firstName"
              name="firstName"
              value={profileData.firstName}
              onChange={handleInputChange}
              className={styles.formInput}
            />
          </div>
          <div className={styles.formGroup}>
            <label htmlFor="lastName">Last Name</label>
            <input
              type="text"
              id="lastName"
              name="lastName"
              value={profileData.lastName}
              onChange={handleInputChange}
              className={styles.formInput}
            />
          </div>
        </div>

        <div className={styles.formRow}>
          <div className={styles.formGroup}>
            <label htmlFor="email">Email Address</label>
            <input
              type="email"
              id="email"
              name="email"
              value={profileData.email}
              onChange={handleInputChange}
              className={styles.formInput}
            />
          </div>
          <div className={styles.formGroup}>
            <label htmlFor="phone">Phone Number</label>
            <input
              type="tel"
              id="phone"
              name="phone"
              value={profileData.phone}
              onChange={handleInputChange}
              className={styles.formInput}
            />
          </div>
        </div>

        <div className={styles.preferencesSection}>
          <h3>Communication Preferences</h3>
          <div className={styles.preferenceItem}>
            <label className={styles.checkboxLabel}>
              <input
                type="checkbox"
                name="preferences.newsletter"
                checked={profileData.preferences.newsletter}
                onChange={handleInputChange}
                className={styles.checkboxInput}
              />
              <span className={styles.checkboxCustom}></span>
              Receive monthly newsletter
            </label>
          </div>
          <div className={styles.preferenceItem}>
            <label className={styles.checkboxLabel}>
              <input
                type="checkbox"
                name="preferences.specialOffers"
                checked={profileData.preferences.specialOffers}
                onChange={handleInputChange}
                className={styles.checkboxInput}
              />
              <span className={styles.checkboxCustom}></span>
              Special offers and promotions
            </label>
          </div>
          <div className={styles.preferenceItem}>
            <label className={styles.checkboxLabel}>
              <input
                type="checkbox"
                name="preferences.smsNotifications"
                checked={profileData.preferences.smsNotifications}
                onChange={handleInputChange}
                className={styles.checkboxInput}
              />
              <span className={styles.checkboxCustom}></span>
              SMS order notifications
            </label>
          </div>
        </div>

        <button type="submit" className={styles.saveButton}>
          Save Changes
        </button>
      </form>
    </div>
  );

  const renderOrdersSection = () => (
    <div className={styles.sectionContent}>
      <div className={styles.sectionHeader}>
        <h2>My Orders</h2>
        <p>Track and manage your recent purchases</p>
      </div>

      <div className={styles.ordersList}>
        {orders.map(order => (
          <div key={order.id} className={styles.orderCard}>
            <div className={styles.orderHeader}>
              <div className={styles.orderInfo}>
                <h3>Order {order.id}</h3>
                <span className={styles.orderDate}>Placed on {order.date}</span>
              </div>
              <div className={styles.orderStatus}>
                <span className={`${styles.statusBadge} ${styles[order.status.toLowerCase()]}`}>
                  {order.status}
                </span>
              </div>
            </div>
            
            <div className={styles.orderDetails}>
              <div className={styles.orderMeta}>
                <span>{order.items} item{order.items > 1 ? 's' : ''}</span>
                <span>Total: ${order.total.toFixed(2)}</span>
                <span>Tracking: {order.tracking}</span>
              </div>
              
              <div className={styles.orderActions}>
                <button className={styles.actionButton}>View Details</button>
                <button className={styles.actionButton}>Track Order</button>
                {order.status === 'Delivered' && (
                  <button className={styles.actionButton}>Reorder</button>
                )}
              </div>
            </div>
          </div>
        ))}
      </div>

      {orders.length === 0 && (
        <div className={styles.emptyState}>
          <div className={styles.emptyIcon}>📦</div>
          <h3>No Orders Yet</h3>
          <p>Start shopping to see your orders here</p>
          <Link to="/collections" className={styles.ctaButton}>
            Start Shopping
          </Link>
        </div>
      )}
    </div>
  );

  const renderAddressesSection = () => (
    <div className={styles.sectionContent}>
      <div className={styles.sectionHeader}>
        <h2>Saved Addresses</h2>
        <p>Manage your delivery addresses</p>
      </div>

      <div className={styles.addressesGrid}>
        {addresses.map(address => (
          <div key={address.id} className={styles.addressCard}>
            {address.isDefault && (
              <div className={styles.defaultBadge}>Default</div>
            )}
            <div className={styles.addressHeader}>
              <h3>{address.type} Address</h3>
              <div className={styles.addressActions}>
                <button className={styles.iconButton}>Edit</button>
                {!address.isDefault && (
                  <button className={styles.iconButton}>Delete</button>
                )}
              </div>
            </div>
            <div className={styles.addressDetails}>
              <p><strong>{address.name}</strong></p>
              <p>{address.street}</p>
              <p>{address.city}, {address.state} {address.zipCode}</p>
              <p>{address.country}</p>
            </div>
            {!address.isDefault && (
              <button className={styles.setDefaultButton}>
                Set as Default
              </button>
            )}
          </div>
        ))}
      </div>

      <button className={styles.addAddressButton}>
        <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M12 5v14m-7-7h14" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
        </svg>
        Add New Address
      </button>
    </div>
  );

  const renderEnquiriesSection = () => (
    <div className={styles.sectionContent}>
      <div className={styles.sectionHeader}>
        <h2>My Enquiries</h2>
        <p>Manage your special requests and enquiries</p>
      </div>

      <div className={styles.enquiriesList}>
        {enquiries.map(enquiry => (
          <div key={enquiry.id} className={styles.enquiryCard}>
            <div className={styles.enquiryHeader}>
              <div className={styles.enquiryType}>
                <span className={styles.typeBadge}>{enquiry.type}</span>
                <h3>{enquiry.subject}</h3>
              </div>
              <div className={styles.enquiryMeta}>
                <span className={styles.enquiryDate}>{enquiry.date}</span>
                <span className={`${styles.statusBadge} ${styles[enquiry.status.toLowerCase().replace(' ', '')]}`}>
                  {enquiry.status}
                </span>
              </div>
            </div>
            <p className={styles.enquiryDescription}>{enquiry.description}</p>
            <div className={styles.enquiryActions}>
              <button className={styles.actionButton}>View Details</button>
              <button className={styles.actionButton}>Follow Up</button>
            </div>
          </div>
        ))}
      </div>

      <div className={styles.quickActions}>
        <h3>Quick Actions</h3>
        <div className={styles.actionGrid}>
          <button className={styles.quickActionButton}>
            <span className={styles.actionIcon}>🎁</span>
            <span>Corporate Gifts</span>
          </button>
          <button className={styles.quickActionButton}>
            <span className={styles.actionIcon}>📦</span>
            <span>Bulk Orders</span>
          </button>
          <button className={styles.quickActionButton}>
            <span className={styles.actionIcon}>📞</span>
            <span>Contact Us</span>
          </button>
          <button className={styles.quickActionButton}>
            <span className={styles.actionIcon}>🔒</span>
            <span>Change Password</span>
          </button>
          <button className={styles.quickActionButton}>
            <span className={styles.actionIcon}>💬</span>
            <span>Support</span>
          </button>
          <button className={styles.quickActionButton}>
            <span className={styles.actionIcon}>🚪</span>
            <span>Logout</span>
          </button>
        </div>
      </div>
    </div>
  );

  const renderPrivacySection = () => (
    <div className={styles.sectionContent}>
      <div className={styles.sectionHeader}>
        <h2>Privacy & Security</h2>
        <p>Manage your privacy settings and data preferences</p>
      </div>

      <div className={styles.privacySettings}>
        <div className={styles.privacyItem}>
          <h3>Data Privacy</h3>
          <p>Control how we use your personal information</p>
          <button className={styles.settingsButton}>Manage Preferences</button>
        </div>

        <div className={styles.privacyItem}>
          <h3>Account Security</h3>
          <p>Update your password and security settings</p>
          <button className={styles.settingsButton}>Security Settings</button>
        </div>

        <div className={styles.privacyItem}>
          <h3>Download Your Data</h3>
          <p>Request a copy of your personal data</p>
          <button className={styles.settingsButton}>Request Data</button>
        </div>

        <div className={styles.privacyItem}>
          <h3>Delete Account</h3>
          <p>Permanently delete your account and all associated data</p>
          <button className={styles.deleteAccountButton}>Delete Account</button>
        </div>
      </div>
    </div>
  );

  return (
    <div className={styles.userAccountPage}>
      <div className={styles.container}>
        {/* Header Section */}
        <section className={styles.accountHeader}>
          <div className={styles.profileOverview}>
            <div className={styles.profileAvatar}>
              <span className={styles.avatarIcon}>👤</span>
            </div>
            <div className={styles.profileInfo}>
              <h1 className={styles.userName}>{userData.name}</h1>
              <p className={styles.userEmail}>{userData.email}</p>
              <div className={styles.memberSince}>
                <span className={styles.memberBadge}>Premium Member</span>
                <span>Member since {userData.memberSince}</span>
              </div>
            </div>
          </div>
        </section>

        {/* Navigation Tabs - Always Visible */}
        <section className={styles.navigationTabs}>
          <div className={styles.tabsContainer}>
            <button
              className={`${styles.tab} ${activeSection === 'profile' ? styles.tabActive : ''}`}
              onClick={() => setActiveSection('profile')}
            >
              <span className={styles.tabIcon}>👤</span>
              <span className={styles.tabText}>Profile</span>
            </button>
            
            <button
              className={`${styles.tab} ${activeSection === 'orders' ? styles.tabActive : ''}`}
              onClick={() => setActiveSection('orders')}
            >
              <span className={styles.tabIcon}>📦</span>
              <span className={styles.tabText}>My Orders</span>
              {orders.length > 0 && <span className={styles.tabBadge}>{orders.length}</span>}
            </button>
            
            <button
              className={`${styles.tab} ${activeSection === 'addresses' ? styles.tabActive : ''}`}
              onClick={() => setActiveSection('addresses')}
            >
              <span className={styles.tabIcon}>🏠</span>
              <span className={styles.tabText}>Addresses</span>
            </button>
            
            <button
              className={`${styles.tab} ${activeSection === 'enquiries' ? styles.tabActive : ''}`}
              onClick={() => setActiveSection('enquiries')}
            >
              <span className={styles.tabIcon}>💬</span>
              <span className={styles.tabText}>Enquiries</span>
              {enquiries.length > 0 && <span className={styles.tabBadge}>{enquiries.length}</span>}
            </button>
            
            <button
              className={`${styles.tab} ${activeSection === 'privacy' ? styles.tabActive : ''}`}
              onClick={() => setActiveSection('privacy')}
            >
              <span className={styles.tabIcon}>🔒</span>
              <span className={styles.tabText}>Privacy</span>
            </button>
          </div>
        </section>

        {/* Content Area */}
        <section className={styles.contentArea}>
          {activeSection === 'profile' && renderProfileSection()}
          {activeSection === 'orders' && renderOrdersSection()}
          {activeSection === 'addresses' && renderAddressesSection()}
          {activeSection === 'enquiries' && renderEnquiriesSection()}
          {activeSection === 'privacy' && renderPrivacySection()}
        </section>
      </div>
    </div>
  );
};

export default UserAccount;