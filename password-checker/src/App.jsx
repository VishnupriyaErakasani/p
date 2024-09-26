import React, { useState } from 'react';

const App = () => {
  const [password, setPassword] = useState('');
  const [strength, setStrength] = useState('');

  const handlePasswordChange = (event) => {
    const newPassword = event.target.value;
    setPassword(newPassword);
    checkPasswordStrength(newPassword);
  };

  const checkPasswordStrength = (password) => {
    let strength = 'Weak';
    const criteria = [
      { regex: /.{8,}/, label: 'at least 8 characters' },
      { regex: /[A-Z]/, label: 'uppercase letter' },
      { regex: /[a-z]/, label: 'lowercase letter' },
      { regex: /[0-9]/, label: 'number' },
      { regex: /[^A-Za-z0-9]/, label: 'special character' },
    ];

    const passedCriteria = criteria.filter((criterion) => criterion.regex.test(password));
    console.log('Passed Criteria:', passedCriteria);

    const results = criteria.map((criterion) => criterion.regex.test(password));
    console.log('Criteria Results:', results);

    switch (passedCriteria.length) {
      case 5:
        strength = 'Very Strong';
        break;
      case 4:
        strength = 'Strong';
        break;
      case 3:
        strength = 'Medium';
        break;
      default:
        strength = 'Weak';
        break;
    }

    setStrength(strength);
  };

  return (
    <div style={{ padding: '20px', fontFamily: 'Arial, sans-serif' }}>
      <h2>Password Strength Checker</h2>
      <input
        type="password"
        value={password}
        onChange={handlePasswordChange}
        placeholder="Enter your password"
        style={{ padding: '10px', fontSize: '16px', width: '100%' }}
      />
      <div style={{ marginTop: '10px', fontSize: '18px' }}>
        <strong>Password Strength: </strong>{strength}
      </div>
    </div>
  );
};

export default App;
