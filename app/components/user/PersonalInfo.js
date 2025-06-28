import React, { useState } from 'react'
import Image from 'next/image'
import { FilePenLine, CircleCheckBig, X } from 'lucide-react'

const iconBtnStyle = {
  width: 36,
  height: 36,
  borderRadius: '50%',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  border: 'none',
  background: '#f1f5f9',
  color: '#222',
  cursor: 'pointer',
  boxShadow: '0 2px 8px rgba(60,72,88,0.08)',
  transition: 'background 0.18s, color 0.18s, box-shadow 0.18s',
  fontSize: 20,
  marginLeft: 6,
  marginRight: 0,
  padding: 0,
}

const iconVariants = {
  edit: { background: '#f54500', color: '#fff' },
  save: { background: '#28a745', color: '#fff' },
  cancel: { background: '#e3e8ee', color: '#222' },
}

const PersonalInfo = () => {
  // Initial dummy data
  const [name, setName] = useState('John Doe')
  const [phone, setPhone] = useState('+1 555-123-4567')
  const [address, setAddress] = useState('123 Main Street, Springfield, USA')
  const [password, setPassword] = useState('password123')
  const [editing, setEditing] = useState(null)
  const [editValue, setEditValue] = useState('')
  const [showPassword, setShowPassword] = useState(false)

  // For password change
  const [oldPassword, setOldPassword] = useState('')
  const [newPassword, setNewPassword] = useState('')
  const [confirmPassword, setConfirmPassword] = useState('')
  const [passwordError, setPasswordError] = useState('')

  const startEdit = (field) => {
    setEditing(field)
    setPasswordError('')
    if (field === 'name') setEditValue(name)
    if (field === 'phone') setEditValue(phone)
    if (field === 'address') setEditValue(address)
    if (field === 'password') {
      setOldPassword('')
      setNewPassword('')
      setConfirmPassword('')
    }
  }

  const saveEdit = () => {
    if (editing === 'name') setName(editValue)
    if (editing === 'phone') setPhone(editValue)
    if (editing === 'address') setAddress(editValue)
    if (editing === 'password') {
      if (oldPassword !== password) {
        setPasswordError('Old password is incorrect')
        return
      }
      if (!newPassword || newPassword.length < 6) {
        setPasswordError('New password must be at least 6 characters')
        return
      }
      if (newPassword !== confirmPassword) {
        setPasswordError('Passwords do not match')
        return
      }
      setPassword(newPassword)
    }
    setEditing(null)
    setEditValue('')
    setPasswordError('')
  }

  const cancelEdit = () => {
    setEditing(null)
    setEditValue('')
    setPasswordError('')
  }

  return (
    <div className="personal-info">
      <div className="profile-pic">
        <Image
          src="/person-dummy.jpg"
          alt="Profile"
          width={100}
          height={100}
          className="img"
        />
      </div>
      <div className="info-fields">
        {/* Name */}
        <div className="info-row">
          <span className="label">Name</span>
          {editing === 'name' ? (
            <div className="edit-area">
              <input
                type="text"
                value={editValue}
                onChange={e => setEditValue(e.target.value)}
                className="edit-input"
              />
              <button
                style={{ ...iconBtnStyle, ...iconVariants.save }}
                className="save-btn"
                onClick={saveEdit}
                title="Save"
              >
                <CircleCheckBig size={20} />
              </button>
              <button
                style={{ ...iconBtnStyle, ...iconVariants.cancel }}
                className="cancel-btn"
                onClick={cancelEdit}
                title="Cancel"
              >
                <X size={20} />
              </button>
            </div>
          ) : (
            <div className="value-row">
              <span className="value">{name}</span>
              <button
                style={{ ...iconBtnStyle, ...iconVariants.edit }}
                className="edit-btn"
                onClick={() => startEdit('name')}
                title="Edit"
              >
                <FilePenLine size={20} />
              </button>
            </div>
          )}
        </div>
        {/* Phone */}
        <div className="info-row">
          <span className="label">Phone</span>
          {editing === 'phone' ? (
            <div className="edit-area">
              <input
                type="text"
                value={editValue}
                onChange={e => setEditValue(e.target.value)}
                className="edit-input"
              />
              <button
                style={{ ...iconBtnStyle, ...iconVariants.save }}
                className="save-btn"
                onClick={saveEdit}
                title="Save"
              >
                <CircleCheckBig size={20} />
              </button>
              <button
                style={{ ...iconBtnStyle, ...iconVariants.cancel }}
                className="cancel-btn"
                onClick={cancelEdit}
                title="Cancel"
              >
                <X size={20} />
              </button>
            </div>
          ) : (
            <div className="value-row">
              <span className="value">{phone}</span>
              <button
                style={{ ...iconBtnStyle, ...iconVariants.edit }}
                className="edit-btn"
                onClick={() => startEdit('phone')}
                title="Edit"
              >
                <FilePenLine size={20} />
              </button>
            </div>
          )}
        </div>
        {/* Email */}
        <div className="info-row">
          <span className="label">Email</span>
          <div className="value-row">
            <span className="value">john.doe@email.com</span>
          </div>
        </div>
        {/* Address */}
        <div className="info-row">
          <span className="label">Address</span>
          {editing === 'address' ? (
            <div className="edit-area">
              <input
                type="text"
                value={editValue}
                onChange={e => setEditValue(e.target.value)}
                className="edit-input"
              />
              <button
                style={{ ...iconBtnStyle, ...iconVariants.save }}
                className="save-btn"
                onClick={saveEdit}
                title="Save"
              >
                <CircleCheckBig size={20} />
              </button>
              <button
                style={{ ...iconBtnStyle, ...iconVariants.cancel }}
                className="cancel-btn"
                onClick={cancelEdit}
                title="Cancel"
              >
                <X size={20} />
              </button>
            </div>
          ) : (
            <div className="value-row">
              <span className="value">{address}</span>
              <button
                style={{ ...iconBtnStyle, ...iconVariants.edit }}
                className="edit-btn"
                onClick={() => startEdit('address')}
                title="Edit"
              >
                <FilePenLine size={20} />
              </button>
            </div>
          )}
        </div>
        {/* Password */}
        <div className="info-row">
          <span className="label">Password</span>
          {editing === 'password' ? (
            <div className="edit-area" style={{flexDirection: 'column', alignItems: 'flex-start', gap: 10}}>
              <input
                type="password"
                value={oldPassword}
                onChange={e => setOldPassword(e.target.value)}
                className="edit-input"
                placeholder="Old password"
                autoComplete="current-password"
              />
              <input
                type={showPassword ? "text" : "password"}
                value={newPassword}
                onChange={e => setNewPassword(e.target.value)}
                className="edit-input"
                placeholder="New password"
                autoComplete="new-password"
              />
              <input
                type={showPassword ? "text" : "password"}
                value={confirmPassword}
                onChange={e => setConfirmPassword(e.target.value)}
                className="edit-input"
                placeholder="Confirm new password"
                autoComplete="new-password"
              />
              <div style={{display: 'flex', alignItems: 'center', gap: 10, marginTop: 4}}>
                <button
                  type="button"
                  className="eye-btn"
                  onClick={() => setShowPassword(v => !v)}
                  title={showPassword ? "Hide Passwords" : "Show Passwords"}
                  style={{
                    ...iconBtnStyle,
                    background: 'none',
                    color: '#888',
                    boxShadow: 'none',
                  }}
                >
                  {showPassword ? '🙈' : '👁️'}
                </button>
                <button
                  style={{ ...iconBtnStyle, ...iconVariants.save }}
                  className="save-btn"
                  onClick={saveEdit}
                  title="Save"
                >
                  <CircleCheckBig size={20} />
                </button>
                <button
                  style={{ ...iconBtnStyle, ...iconVariants.cancel }}
                  className="cancel-btn"
                  onClick={cancelEdit}
                  title="Cancel"
                >
                  <X size={20} />
                </button>
                <button
                  type="button"
                  className="forgot-btn"
                  style={{
                    background: 'none',
                    border: 'none',
                    color: '#007bff',
                    textDecoration: 'underline',
                    cursor: 'pointer',
                    fontSize: '0.98em',
                    marginLeft: 8
                  }}
                  onClick={() => alert('Password reset flow goes here')}
                >
                  Forgotten password?
                </button>
              </div>
              {passwordError && (
                <div style={{color: '#f54500', marginTop: 6, fontSize: '0.97em'}}>{passwordError}</div>
              )}
            </div>
          ) : (
            <div className="value-row">
              <span className="value">
                {'*'.repeat(8)}
              </span>
              <button
                style={{ ...iconBtnStyle, ...iconVariants.edit }}
                className="edit-btn"
                onClick={() => startEdit('password')}
                title="Edit"
              >
                <FilePenLine size={20} />
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
  )
}

export default PersonalInfo